// Renders the 1024x1024 archival broadsheet PNG for Monday 23 November 2026 via headless Chromium.
// v3 Pass 2: fills the full 1024px vertical canvas cleanly — 118px hero art, 21.5px hero headlines,
// 70px secondary art, 15.0px secondary headlines, 10.45px zero-truncation briefs, and 17 zero-overlap map pins.

import { createRequire } from 'node:module';
import { writeFileSync, statSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  EDITION,
  REGION_META,
  TIMELINE_UTC,
  HERO_STORIES,
  SECONDARY_STORIES,
  BRIEF_STORIES,
  DATE_CHECK,
  getStoryStats,
} from './stories.mjs';
import { renderHeroArt, renderCardArt, renderWorldMap, checkPinSpacing } from './illustrations.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const repoDir = resolve(__dirname, '..');

function esc(s) {
  return String(s)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');
}

function statusBadge(status) {
  const s = (status || '').toUpperCase();
  const cls =
    s === 'CONFIRMED' ? 'st-confirmed' :
    s === 'OFFICIAL'  ? 'st-official'  :
    s === 'CLAIM'     ? 'st-claim'     : 'st-reported';
  return `<span class="st ${cls}">${esc(s)}</span>`;
}

function buildHtml() {
  const { totalStories, regionCount } = getStoryStats();

  const timelineHtml = TIMELINE_UTC.map(
    (t) => `<div class="tl-col">
      <div class="tl-time">${esc(t.time)}</div>
      <div class="tl-lbl">${esc(t.label)}</div>
    </div>`
  ).join('');

  const heroHtml = HERO_STORIES.map((s) => {
    const col = REGION_META[s.region]?.color || '#1E293B';
    return `<article class="hero-card">
      <div class="art-box hero-art">${renderHeroArt(s.artKey)}</div>
      <div class="meta-row">
        <div class="place-wrap">
          <span class="num-dot lg" style="background:${col}">${s.id}</span>
          <span class="place-txt lg" style="color:${col}">${esc(s.place)}</span>
        </div>
        ${statusBadge(s.status)}
      </div>
      <h2 class="hero-hl">${esc(s.headline)}</h2>
      <p class="hero-body">${esc(s.body)}</p>
    </article>`;
  }).join('');

  const renderSecRow = (items) => items.map((s) => {
    const col = REGION_META[s.region]?.color || '#1E293B';
    return `<article class="sec-card">
      <div class="art-box sec-art">${renderCardArt(s.artKey)}</div>
      <div class="meta-row sm">
        <div class="place-wrap">
          <span class="num-dot sm" style="background:${col}">${s.id}</span>
          <span class="place-txt sm" style="color:${col}">${esc(s.place)}</span>
        </div>
        ${statusBadge(s.status)}
      </div>
      <h3 class="sec-hl">${esc(s.headline)}</h3>
      <p class="sec-body">${esc(s.body)}</p>
    </article>`;
  }).join('');

  const secRow1 = renderSecRow(SECONDARY_STORIES.slice(0, 5));
  const secRow2 = renderSecRow(SECONDARY_STORIES.slice(5, 10));

  const col1 = BRIEF_STORIES.slice(0, 11);
  const col2 = BRIEF_STORIES.slice(11, 22);
  const renderBrief = (b) => {
    const col = REGION_META[b.region]?.color || '#1E293B';
    const tag = b.tag ? ` ${statusBadge(b.tag)}` : '';
    return `<div class="brief">
      <span class="b-num" style="background:${col}">${b.id}</span>
      <div class="b-txt"><strong class="b-place" style="color:${col}">${esc(b.place)}:</strong> ${esc(b.text)}${tag}</div>
    </div>`;
  };

  const legendKeys = Object.keys(REGION_META);
  const legendHtml = legendKeys.map((k) => {
    const r = REGION_META[k];
    return `<span class="leg-item"><span class="leg-dot" style="background:${r.color}"></span>${esc(r.label)}</span>`;
  }).join('');

  const allStories = [...HERO_STORIES, ...SECONDARY_STORIES, ...BRIEF_STORIES];

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8"/>
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; }
  html, body {
    width: 1024px;
    height: 1024px;
    overflow: hidden;
    background: #F8F4EC;
    color: #14171D;
    font-family: "Noto Sans", "DejaVu Sans", sans-serif;
    -webkit-font-smoothing: antialiased;
  }
  .page {
    width: 1024px;
    height: 1024px;
    display: flex;
    flex-direction: column;
    padding: 8px 14px 6px 14px;
  }

  /* Editorial Top Kicker Line */
  .kicker-bar {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    font-size: 9.8px;
    font-weight: 800;
    letter-spacing: 0.45px;
    margin-bottom: 1px;
  }
  .kicker-left { color: #A91D22; }
  .kicker-right { color: #2B2F36; }

  /* Dignified Archival Masthead */
  .masthead {
    text-align: center;
    padding: 0 0 4px 0;
    border-bottom: 2.5px solid #14171D;
  }
  .masthead h1 {
    font-family: "C059", "DejaVu Serif", serif;
    font-size: 62px;
    font-weight: 700;
    line-height: 0.98;
    letter-spacing: -1.1px;
    color: #0D1117;
  }

  /* Warm Newsprint UTC Timeline Strip */
  .tl-bar {
    display: flex;
    align-items: stretch;
    background: #EFE9DA;
    border-top: 1px solid #C8BFA8;
    border-bottom: 1px solid #C8BFA8;
    margin-top: 5px;
    height: 36px;
  }
  .tl-badge {
    background: #A91D22;
    color: #FFFFFF;
    width: 68px;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 8.8px;
    font-weight: 900;
    line-height: 1.12;
    letter-spacing: 0.35px;
  }
  .tl-cols {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    flex: 1;
  }
  .tl-col {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 2px 6px;
    border-left: 1px solid #D3CBB6;
  }
  .tl-col:first-child { border-left: none; }
  .tl-time {
    font-size: 11.4px;
    font-weight: 900;
    color: #14171D;
    line-height: 1.05;
  }
  .tl-lbl {
    font-size: 10.6px;
    font-weight: 600;
    color: #363A42;
    line-height: 1.14;
    white-space: nowrap;
  }

  /* Hero Row: 3 Full-Width Broadsheet Lead Cards */
  .hero-row {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
    margin-top: 7px;
    padding-bottom: 7px;
    border-bottom: 2px solid #1C2026;
  }
  .hero-card, .sec-card {
    display: flex;
    flex-direction: column;
    min-width: 0;
  }
  .art-box {
    width: 100%;
    overflow: hidden;
    border: 1px solid #CFC6B2;
    border-radius: 2px;
    flex-shrink: 0;
  }
  .hero-art { height: 114px; }
  .sec-art { height: 67px; }
  .art-box svg { width: 100%; height: 100%; display: block; }

  .meta-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 4px;
    margin-top: 5px;
  }
  .meta-row.sm { margin-top: 4px; }
  .place-wrap {
    display: flex;
    align-items: center;
    gap: 5px;
    min-width: 0;
  }
  .num-dot {
    border-radius: 50%;
    color: #FFFFFF;
    font-weight: 900;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }
  .num-dot.lg { width: 17.5px; height: 17.5px; font-size: 10.2px; }
  .num-dot.sm { width: 15px; height: 15px; font-size: 8.8px; }
  .place-txt {
    font-weight: 900;
    letter-spacing: 0.25px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .place-txt.lg { font-size: 10.4px; }
  .place-txt.sm { font-size: 8.8px; }

  /* Clean Editorial Outlined Certainty Tags */
  .st {
    font-size: 8.0px;
    font-weight: 900;
    letter-spacing: 0.3px;
    padding: 0.8px 4.5px;
    border-radius: 2px;
    border: 1.25px solid;
    background: #FCF9F2;
    white-space: nowrap;
    flex-shrink: 0;
  }
  .st-confirmed { color: #166534; border-color: #166534; }
  .st-official  { color: #854D0E; border-color: #A16207; }
  .st-reported  { color: #475569; border-color: #64748B; }
  .st-claim     { color: #991B1B; border-color: #B91C1C; }

  .hero-hl {
    font-family: "C059", "DejaVu Serif", serif;
    font-size: 21.4px;
    font-weight: 700;
    line-height: 1.08;
    color: #0D1117;
    margin-top: 3.5px;
  }
  .hero-body {
    font-size: 11.2px;
    line-height: 1.28;
    color: #2B2F37;
    margin-top: 4px;
  }

  /* Secondary 2x5 Grid */
  .sec-row {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 9px;
    margin-top: 7px;
  }
  .sec-row.row2 {
    margin-top: 7px;
    padding-bottom: 7px;
    border-bottom: 2px solid #1C2026;
  }
  .sec-hl {
    font-family: "C059", "DejaVu Serif", serif;
    font-size: 14.9px;
    font-weight: 700;
    line-height: 1.09;
    color: #0D1117;
    margin-top: 3px;
  }
  .sec-body {
    font-size: 10.1px;
    line-height: 1.22;
    color: #323740;
    margin-top: 2.5px;
  }

  /* Bottom Section: Atlas + 22 Crisp Briefs */
  .bottom {
    display: grid;
    grid-template-columns: 268px minmax(0, 1fr);
    gap: 12px;
    margin-top: 7px;
    flex: 1;
    min-height: 0;
    overflow: hidden;
  }
  .atlas-col, .briefs-wrap {
    display: flex;
    flex-direction: column;
    min-width: 0;
  }
  .sec-hdr {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    border-bottom: 1.5px solid #1C2026;
    padding-bottom: 2px;
    margin-bottom: 6px;
  }
  .sec-hdr h4 {
    font-size: 10.6px;
    font-weight: 900;
    letter-spacing: 0.45px;
    color: #A91D22;
  }
  .sec-hdr span {
    font-size: 8.6px;
    font-weight: 600;
    color: #525864;
    white-space: nowrap;
  }
  .map-wrap svg {
    width: 268px;
    height: 178px;
    display: block;
  }
  .map-legend {
    display: grid;
    grid-template-columns: repeat(4, auto);
    gap: 4px 6px;
    margin-top: 7px;
    font-size: 8.6px;
    font-weight: 700;
    color: #2B303A;
  }
  .leg-item {
    display: inline-flex;
    align-items: center;
    gap: 3px;
    white-space: nowrap;
  }
  .leg-dot {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    flex-shrink: 0;
  }

  .brief-cols {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
    gap: 10px;
    min-width: 0;
  }
  .brief-col {
    display: flex;
    flex-direction: column;
    gap: 3.4px;
    min-width: 0;
  }
  .brief {
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 10.25px;
    line-height: 1.28;
    color: #1F242D;
    min-width: 0;
  }
  .b-num {
    width: 15.5px;
    height: 15.5px;
    border-radius: 50%;
    color: #FFFFFF;
    font-size: 8.2px;
    font-weight: 900;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }
  .b-txt {
    min-width: 0;
    flex: 1;
    padding: 0.8px 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .b-place { font-weight: 800; }
  .brief .st {
    font-size: 6.7px;
    padding: 0.2px 3px;
    vertical-align: middle;
    margin-left: 2px;
  }

  /* DATE CHECK Verification Strip */
  .date-check {
    display: flex;
    align-items: center;
    gap: 8px;
    border: 1.5px solid #A91D22;
    background: #FBF7EE;
    border-radius: 2px;
    padding: 4.5px 8px;
    margin-top: 6px;
  }
  .dc-badge {
    background: #A91D22;
    color: #FFFFFF;
    font-size: 9.2px;
    font-weight: 900;
    letter-spacing: 0.4px;
    padding: 2.5px 6.5px;
    border-radius: 2px;
    white-space: nowrap;
    flex-shrink: 0;
  }
  .dc-text {
    font-size: 9.0px;
    line-height: 1.24;
    color: #2B1717;
  }
  .dc-text strong { color: #7F1D1D; }

  /* Clean Editorial Footer */
  .footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 4px;
    font-size: 8.4px;
    color: #4B515C;
  }
  .f-left {
    display: flex;
    align-items: center;
    gap: 5px;
  }
  .f-left .st { font-size: 7.4px; padding: 0.4px 4px; }
</style>
</head>
<body>
<div class="page">
  <header class="kicker-bar">
    <span class="kicker-left">${esc(EDITION.kickerLeft)}</span>
    <span class="kicker-right">${totalStories} STORIES · ${regionCount} REGIONS · ${EDITION.beatsCount} BEATS · ALL FROM MONDAY 23 NOVEMBER 2026</span>
  </header>

  <section class="masthead">
    <h1>${esc(EDITION.masthead)}</h1>
  </section>

  <section class="tl-bar">
    <div class="tl-badge"><span>THE DAY</span><span>IN UTC</span></div>
    <div class="tl-cols">${timelineHtml}</div>
  </section>

  <section class="hero-row">${heroHtml}</section>

  <section class="sec-row row1">${secRow1}</section>
  <section class="sec-row row2">${secRow2}</section>

  <section class="bottom">
    <div class="atlas-col">
      <div class="sec-hdr">
        <h4>WHERE IT HAPPENED</h4>
        <span>17 pins (#4/#6 Brussels)</span>
      </div>
      <div class="map-wrap">${renderWorldMap(allStories)}</div>
      <div class="map-legend">${legendHtml}</div>
    </div>
    <div class="briefs-wrap">
      <div class="sec-hdr">
        <h4>ALSO ON MONDAY 23 NOVEMBER 2026</h4>
        <span>${BRIEF_STORIES.length} more dated stories</span>
      </div>
      <div class="brief-cols">
        <div class="brief-col">${col1.map(renderBrief).join('')}</div>
        <div class="brief-col">${col2.map(renderBrief).join('')}</div>
      </div>
    </div>
  </section>

  <section class="date-check">
    <span class="dc-badge">DATE CHECK</span>
    <div class="dc-text"><strong>${esc(DATE_CHECK.included)}</strong> ${esc(DATE_CHECK.excluded)}</div>
  </section>

  <footer class="footer">
    <div class="f-left">
      <span class="st st-confirmed">CONFIRMED</span><span>2+ wires</span>
      <span class="st st-official">OFFICIAL</span><span>authority’s word</span>
      <span class="st st-reported">REPORTED</span><span>1 outlet</span>
      <span class="st st-claim">CLAIM</span><span>one side says</span>
    </div>
    <div>Sources: Reuters, AP, AFP, BBC, Guardian, FT, Al Jazeera, UN, NATO, Gov.uk, FIFA · Original drawings &amp; map</div>
  </footer>
</div>
</body>
</html>`;
}

async function main() {
  const allStories = [...HERO_STORIES, ...SECONDARY_STORIES, ...BRIEF_STORIES];
  const pinStats = checkPinSpacing(allStories);

  const html = buildHtml();
  const htmlPath = resolve(__dirname, 'page.html');
  writeFileSync(htmlPath, html, 'utf8');

  const req = createRequire(import.meta.url);
  const pwPath = resolve(repoDir, '../../gta6-01/tools/node_modules/playwright-core');
  const { chromium } = req(pwPath);

  const browser = await chromium.launch({
    executablePath: '/var/lib/openbot/.cache/ms-playwright/chromium-1255/chrome-linux-arm64/chrome',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
  });
  try {
    const page = await browser.newPage({ viewport: { width: 1024, height: 1024 }, deviceScaleFactor: 1 });
    await page.setContent(html, { waitUntil: 'networkidle' });
    await page.evaluate(() => document.fonts.ready);

    const metrics = await page.evaluate(() => {
      const p = document.querySelector('.page');
      const heroRow = document.querySelector('.hero-row');
      const sec1 = document.querySelector('.sec-row.row1');
      const sec2 = document.querySelector('.sec-row.row2');
      const bottom = document.querySelector('.bottom');
      const dc = document.querySelector('.date-check');
      const foot = document.querySelector('.footer');
      const briefCols = [...document.querySelectorAll('.brief-col')];
      const briefTxts = [...document.querySelectorAll('.b-txt')];
      const places = [...document.querySelectorAll('.place-txt')];
      const mapLeg = document.querySelector('.map-legend');
      const truncatedBriefs = briefTxts
        .filter((b) => b.scrollWidth > b.clientWidth + 1)
        .map((b) => `${b.textContent} (${b.scrollWidth}>${b.clientWidth})`);
      const truncatedPlaces = places
        .filter((el) => el.scrollWidth > el.clientWidth + 1)
        .map((el) => el.textContent);
      return {
        scrollH: p.scrollHeight,
        clientH: p.clientHeight,
        heroBottom: Math.round(heroRow.getBoundingClientRect().bottom),
        sec1Bottom: Math.round(sec1.getBoundingClientRect().bottom),
        sec2Bottom: Math.round(sec2.getBoundingClientRect().bottom),
        bottomTop: Math.round(bottom.getBoundingClientRect().top),
        bottomH: Math.round(bottom.getBoundingClientRect().height),
        colBottoms: briefCols.map((c) => Math.round(c.getBoundingClientRect().bottom)),
        mapLegBottom: Math.round(mapLeg.getBoundingClientRect().bottom),
        dcTop: Math.round(dc.getBoundingClientRect().top),
        dcBottom: Math.round(dc.getBoundingClientRect().bottom),
        footerBottom: Math.round(foot.getBoundingClientRect().bottom),
        truncatedBriefs,
        truncatedPlaces,
      };
    });

    const outPath = resolve(repoDir, 'entry.png');
    await page.screenshot({ path: outPath, type: 'png', clip: { x: 0, y: 0, width: 1024, height: 1024 } });
    const bytes = statSync(outPath).size;
    console.log(JSON.stringify({ outPath, bytes, pinStats, metrics }, null, 2));
  } finally {
    await browser.close();
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
