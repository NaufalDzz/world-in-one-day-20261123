// Renders the 1024x1024 archival broadsheet PNG for Monday 23 November 2026 via headless Chromium.
// Pass 3: full vertical space utilization (100px hero art, 18.6px hero headlines, 72px secondary art,
// 14.3px secondary headlines, crisp 8.85px single-line briefs with min-width:0 overflow protection,
// and balanced 290x172 all-continent world map).

import { createRequire } from 'node:module';
import { writeFileSync, statSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  EDITION,
  REGION_META,
  DAY_IN_NUMBERS,
  TIMELINE_UTC,
  HERO_STORIES,
  SECONDARY_STORIES,
  BRIEF_STORIES,
  DATE_CHECK_INCLUDED,
  DATE_CHECK_EXCLUDED,
  computeRegions,
} from './stories.mjs';
import { renderHeroArt, renderCardArt, renderWorldMap } from './illustrations.mjs';

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
  const regions = computeRegions();
  const totalStories = regions.reduce((a, b) => a + b.count, 0);

  const regionPillsHtml = regions.map(
    (r) => `<span class="rpill" style="background:${r.color}">${esc(r.label)} <b>${r.count}</b></span>`
  ).join('');

  const timelineHtml = TIMELINE_UTC.map(
    (t) => `<span class="tl-item"><b class="tl-t">${esc(t.time)}</b> ${esc(t.label)}</span>`
  ).join('<span class="tl-sep">·</span>');

  const heroHtml = HERO_STORIES.map((s) => {
    const col = REGION_META[s.region]?.color || '#1E293B';
    return `<article class="hero-card" style="border-top:3px solid ${col}">
      <div class="art-box hero-art">
        ${renderHeroArt(s.artKey)}
        <div class="place-pill"><span class="p-num" style="background:${col}">${s.id}</span>${esc(s.placeTag)}</div>
        <div class="st-overlay">${statusBadge(s.status)}</div>
      </div>
      <div class="card-pad">
        <div class="kicker" style="color:${col}">${esc(s.kicker)}</div>
        <h2 class="hero-hl">${esc(s.headline)}</h2>
        <p class="hero-body">${esc(s.body)}</p>
        <div class="src-line">${esc(s.sources)}</div>
      </div>
    </article>`;
  }).join('');

  const numbersHtml = DAY_IN_NUMBERS.map(
    (n) => `<div class="num-row">
      <div class="num-val" style="color:${n.color}">${esc(n.value)}</div>
      <div class="num-lbl">${esc(n.label)}</div>
    </div>`
  ).join('');

  const secHtml = SECONDARY_STORIES.map((s) => {
    const col = REGION_META[s.region]?.color || '#1E293B';
    return `<article class="sec-card" style="border-top:2.5px solid ${col}">
      <div class="art-box sec-art">
        ${renderCardArt(s.artKey)}
        <div class="place-pill sm"><span class="p-num sm" style="background:${col}">${s.id}</span>${esc(s.placeTag)}</div>
        <div class="st-overlay">${statusBadge(s.status)}</div>
      </div>
      <div class="card-pad sm">
        <div class="kicker sm" style="color:${col}">${esc(s.kicker)}</div>
        <h3 class="sec-hl">${esc(s.headline)}</h3>
        <p class="sec-body">${esc(s.body)}</p>
        <div class="src-line sm">${esc(s.sources)}</div>
      </div>
    </article>`;
  }).join('');

  const col1 = BRIEF_STORIES.slice(0, 10);
  const col2 = BRIEF_STORIES.slice(10);
  const renderBrief = (b) => {
    const col = REGION_META[b.region]?.color || '#1E293B';
    const tag = b.tag ? ` ${statusBadge(b.tag)}` : '';
    return `<div class="brief">
      <span class="b-num" style="background:${col}">${b.id}</span>
      <div class="b-txt"><strong class="b-place" style="color:${col}">${esc(b.place)}</strong> ${esc(b.text)} <em class="b-src">${esc(b.sources)}</em>${tag}</div>
    </div>`;
  };

  const mapStories = [
    ...HERO_STORIES,
    ...SECONDARY_STORIES,
    ...BRIEF_STORIES.filter((b) => b.pin),
  ];

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
    background: #F6F2E9;
    color: #0F172A;
    font-family: "Noto Sans", "DejaVu Sans", sans-serif;
    -webkit-font-smoothing: antialiased;
  }
  .page {
    width: 1024px;
    height: 1024px;
    display: flex;
    flex-direction: column;
    padding: 0 11px 4px 11px;
  }

  .topbar {
    margin: 0 -11px;
    height: 18px;
    background: #0D1B2A;
    color: #F8FAFC;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 13px;
    font-size: 8.6px;
    font-weight: 800;
    letter-spacing: 0.55px;
  }
  .topbar .mid { color: #FDE68A; letter-spacing: 0.65px; }

  .masthead {
    text-align: center;
    padding: 0 0 3px 0;
    border-bottom: 2px solid #0F172A;
  }
  .masthead h1 {
    font-family: "C059", "DejaVu Serif", serif;
    font-size: 64px;
    font-weight: 700;
    line-height: 0.96;
    letter-spacing: -1.3px;
    color: #0B1320;
  }
  .deck {
    font-family: "C059", "DejaVu Serif", serif;
    font-style: italic;
    font-size: 12.4px;
    font-weight: 700;
    color: #8C1D18;
    margin-top: 2px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .rpills {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    margin-top: 4px;
  }
  .rpill {
    color: #FFFFFF;
    font-size: 8.1px;
    font-weight: 800;
    letter-spacing: 0.3px;
    padding: 2.2px 7.5px;
    border-radius: 3px;
    white-space: nowrap;
  }
  .rpill b { font-weight: 900; margin-left: 2px; }

  .tl {
    display: flex;
    align-items: center;
    gap: 7px;
    background: #132238;
    color: #F1F5F9;
    height: 20px;
    padding: 0 7px;
    margin-top: 4px;
    border-radius: 3px;
    font-size: 8.3px;
  }
  .tl-tag {
    background: #B91C1C;
    color: #FFFFFF;
    font-weight: 900;
    padding: 1px 5.5px;
    border-radius: 2px;
    font-size: 7.9px;
    letter-spacing: 0.4px;
    flex-shrink: 0;
  }
  .tl-items {
    display: flex;
    flex: 1;
    justify-content: space-between;
    align-items: center;
    overflow: hidden;
  }
  .tl-item { white-space: nowrap; font-weight: 600; color: #E2E8F0; }
  .tl-t { color: #FDE047; font-weight: 900; margin-right: 2px; }
  .tl-sep { color: #64748B; font-weight: 900; }

  /* Row 1: 3 Hero Cards + Dark-Navy Day-in-Numbers Sidebar */
  .top-row {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 186px;
    gap: 7px;
    margin-top: 6px;
  }
  .hero-card, .sec-card {
    background: #FFFFFF;
    border: 1px solid #D5CEC0;
    border-radius: 3px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    min-width: 0;
  }
  .art-box {
    position: relative;
    width: 100%;
    overflow: hidden;
    border-bottom: 1px solid #E2DDD0;
    flex-shrink: 0;
  }
  .hero-art { height: 96px; }
  .sec-art { height: 68px; }
  .art-box svg { width: 100%; height: 100%; display: block; }

  .place-pill {
    position: absolute;
    top: 4px;
    left: 4px;
    display: inline-flex;
    align-items: center;
    gap: 4px;
    background: rgba(255, 255, 255, 0.95);
    color: #0F172A;
    font-size: 8.2px;
    font-weight: 900;
    letter-spacing: 0.25px;
    padding: 1.5px 5.5px 1.5px 2px;
    border-radius: 10px;
    box-shadow: 0 1px 2px rgba(15, 23, 42, 0.25);
    max-width: calc(100% - 8px);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .place-pill.sm { font-size: 7.5px; padding: 1.2px 5px 1.2px 1.5px; gap: 3px; }
  .p-num {
    width: 14.5px;
    height: 14.5px;
    border-radius: 50%;
    color: #FFFFFF;
    font-size: 8.3px;
    font-weight: 900;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }
  .p-num.sm { width: 13px; height: 13px; font-size: 7.4px; }

  .st-overlay {
    position: absolute;
    bottom: 4px;
    right: 4px;
    display: flex;
  }
  .st {
    font-size: 7.0px;
    font-weight: 900;
    padding: 1px 4.2px;
    border-radius: 2px;
    letter-spacing: 0.3px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.25);
  }
  .st-confirmed { background: #166534; color: #FFFFFF; }
  .st-official  { background: #1E40AF; color: #FFFFFF; }
  .st-reported  { background: #475569; color: #FFFFFF; }
  .st-claim     { background: #B45309; color: #FFFFFF; }

  .card-pad {
    padding: 5px 7px 5px 7px;
    display: flex;
    flex-direction: column;
    flex: 1;
  }
  .card-pad.sm { padding: 4px 6px 4px 6px; }

  .kicker {
    font-size: 7.8px;
    font-weight: 800;
    letter-spacing: 0.3px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .kicker.sm { font-size: 7.2px; }

  .hero-hl {
    font-family: "C059", "DejaVu Serif", serif;
    font-size: 17.5px;
    font-weight: 700;
    line-height: 1.07;
    color: #0B1320;
    margin-top: 2px;
  }
  .hero-body {
    font-size: 9.45px;
    line-height: 1.24;
    color: #1E293B;
    margin-top: 3px;
    flex: 1;
  }
  .src-line {
    font-size: 7.8px;
    font-weight: 600;
    color: #64748B;
    margin-top: 3px;
  }
  .src-line.sm { font-size: 7.3px; margin-top: 2px; }

  /* Dark-Navy Day in Numbers Sidebar */
  .numbers-box {
    background: #102033;
    color: #F8FAFC;
    border-radius: 3px;
    padding: 6.5px 8px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .num-hdr {
    font-size: 9.1px;
    font-weight: 900;
    letter-spacing: 0.5px;
    color: #FFFFFF;
    border-bottom: 1.5px solid #2A4365;
    padding-bottom: 2.5px;
    margin-bottom: 2px;
  }
  .num-row {
    border-bottom: 1px solid rgba(148, 163, 184, 0.18);
    padding: 1.8px 0;
  }
  .num-row:last-child { border-bottom: none; padding-bottom: 0; }
  .num-val {
    font-family: "C059", "DejaVu Serif", serif;
    font-size: 16.4px;
    font-weight: 700;
    line-height: 1.03;
  }
  .num-lbl {
    font-size: 7.9px;
    line-height: 1.14;
    color: #CBD5E1;
    margin-top: 0.5px;
  }

  /* Secondary 2x5 Grid */
  .secs {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 6.5px;
    margin-top: 6px;
  }
  .sec-hl {
    font-family: "C059", "DejaVu Serif", serif;
    font-size: 13.6px;
    font-weight: 700;
    line-height: 1.08;
    color: #0B1320;
    margin-top: 1.5px;
  }
  .sec-body {
    font-size: 8.95px;
    line-height: 1.20;
    color: #1E293B;
    margin-top: 2px;
    flex: 1;
  }

  /* Bottom Section: World Map + 20 Crisp Single-Line Briefs */
  .bottom {
    display: grid;
    grid-template-columns: 290px minmax(0, 1fr);
    gap: 10px;
    margin-top: 6px;
    flex: 1;
    min-height: 0;
    overflow: hidden;
  }
  .atlas-col, .briefs-wrap { min-width: 0; }
  .sec-hdr {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    border-bottom: 1.5px solid #0F172A;
    padding-bottom: 2px;
    margin-bottom: 4.5px;
  }
  .sec-hdr h4 {
    font-size: 9.5px;
    font-weight: 900;
    letter-spacing: 0.4px;
    color: #0B1320;
  }
  .sec-hdr span {
    font-size: 7.8px;
    font-style: italic;
    color: #475569;
    white-space: nowrap;
  }
  .map-wrap svg { width: 290px; height: 192px; display: block; }
  .map-note {
    font-size: 7.7px;
    color: #475569;
    margin-top: 4px;
    white-space: nowrap;
  }

  .brief-cols {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
    gap: 9px;
    min-width: 0;
  }
  .brief-col {
    display: flex;
    flex-direction: column;
    gap: 7.4px;
    min-width: 0;
  }
  .brief {
    display: flex;
    align-items: center;
    gap: 4.5px;
    font-size: 8.75px;
    line-height: 1.16;
    color: #1E293B;
    min-width: 0;
  }
  .b-num {
    width: 14.5px;
    height: 14.5px;
    border-radius: 50%;
    color: #FFFFFF;
    font-size: 7.4px;
    font-weight: 900;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }
  .b-txt {
    min-width: 0;
    flex: 1;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .b-place { font-weight: 800; margin-right: 2px; }
  .b-src { color: #64748B; font-style: italic; font-size: 7.8px; }
  .brief .st { font-size: 6.1px; padding: 0.3px 2.6px; box-shadow: none; vertical-align: middle; }

  .date-check {
    display: flex;
    align-items: stretch;
    border: 1.5px solid #991B1B;
    background: #FFFDF9;
    border-radius: 3px;
    margin-top: 4px;
    overflow: hidden;
  }
  .dc-label {
    background: #991B1B;
    color: #FFFFFF;
    font-size: 8.6px;
    font-weight: 900;
    letter-spacing: 0.4px;
    padding: 3px 7px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    line-height: 1.12;
    width: 60px;
    flex-shrink: 0;
  }
  .dc-text {
    font-size: 8.1px;
    line-height: 1.25;
    color: #2B1212;
    padding: 4px 8px;
  }
  .dc-text strong { color: #7F1D1D; }

  .footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 3px;
    padding-top: 2px;
    border-top: 1px solid #CBD5E1;
    font-size: 7.4px;
    color: #475569;
  }
  .footer .f-left { display: flex; align-items: center; gap: 5px; }
  .footer .st { box-shadow: none; }
</style>
</head>
<body>
<div class="page">
  <header class="topbar">
    <span>${esc(EDITION.kickerLeft)}</span>
    <span class="mid">${totalStories} DATED STORIES · ${regions.length} REGIONS · EVERY ONE DATED MONDAY 23 NOVEMBER 2026 (UTC)</span>
    <span>${esc(EDITION.kickerRight)}</span>
  </header>

  <section class="masthead">
    <h1>${esc(EDITION.masthead)}</h1>
    <div class="deck">${esc(EDITION.deck)}</div>
  </section>

  <section class="rpills">${regionPillsHtml}</section>

  <section class="tl">
    <span class="tl-tag">UTC</span>
    <div class="tl-items">${timelineHtml}</div>
  </section>

  <section class="top-row">
    ${heroHtml}
    <aside class="numbers-box">
      <div class="num-hdr">THE DAY IN NUMBERS</div>
      ${numbersHtml}
    </aside>
  </section>

  <section class="secs">${secHtml}</section>

  <section class="bottom">
    <div class="atlas-col">
      <div class="sec-hdr">
        <h4>WHERE IT HAPPENED</h4>
        <span>20 global story pins</span>
      </div>
      <div class="map-wrap">${renderWorldMap(mapStories)}</div>
      <div class="map-note">Pins match story numbers · Dashed arc = Benghazi strike (#2)</div>
    </div>
    <div class="briefs-wrap">
      <div class="sec-hdr">
        <h4>ALSO ON MONDAY 23 NOVEMBER — ${BRIEF_STORIES.length} MORE DATED STORIES</h4>
        <span>all 23 Nov 2026 · ${regions.length} regions</span>
      </div>
      <div class="brief-cols">
        <div class="brief-col">${col1.map(renderBrief).join('')}</div>
        <div class="brief-col">${col2.map(renderBrief).join('')}</div>
      </div>
    </div>
  </section>

  <section class="date-check">
    <div class="dc-label">DATE<br/>CHECK</div>
    <div class="dc-text"><strong>Included:</strong> ${esc(DATE_CHECK_INCLUDED)} <strong>${esc(DATE_CHECK_EXCLUDED.split(':')[0])}:</strong>${esc(DATE_CHECK_EXCLUDED.slice(DATE_CHECK_EXCLUDED.indexOf(':') + 1))}</div>
  </section>

  <footer class="footer">
    <div class="f-left">
      <span class="st st-confirmed">CONFIRMED</span><span>2+ wires</span>
      <span class="st st-official">OFFICIAL</span><span>govt / agency / result</span>
      <span class="st st-reported">REPORTED</span><span>single outlet</span>
      <span class="st st-claim">CLAIM</span><span>one side’s account</span>
    </div>
    <div>Original vector graphics &amp; world map drawn in code · Sources: Reuters, AP, AFP, BBC, Guardian, FT, WashPost, Al Jazeera, UN, NATO, USGS, FIFA</div>
  </footer>
</div>
</body>
</html>`;
}

async function main() {
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
      const foot = document.querySelector('.footer');
      const dc = document.querySelector('.date-check');
      const bottom = document.querySelector('.bottom');
      const bw = document.querySelector('.briefs-wrap');
      const topRow = document.querySelector('.top-row');
      const secs = document.querySelector('.secs');
      const briefCols = [...document.querySelectorAll('.brief-col')];
      const briefTxts = [...document.querySelectorAll('.b-txt')];
      const kickers = [...document.querySelectorAll('.kicker')];
      const placePills = [...document.querySelectorAll('.place-pill')];
      const truncatedBriefs = briefTxts.filter((b) => b.scrollWidth > b.clientWidth + 1).map((b) => b.textContent);
      const truncatedKickers = kickers.filter((k) => k.scrollWidth > k.clientWidth + 1).map((k) => k.textContent);
      const truncatedPlaces = placePills.filter((k) => k.scrollWidth > k.clientWidth + 1).map((k) => k.textContent);
      return {
        scrollH: p.scrollHeight,
        clientH: p.clientHeight,
        topRowH: Math.round(topRow.getBoundingClientRect().height),
        secsH: Math.round(secs.getBoundingClientRect().height),
        bottomTop: Math.round(bottom.getBoundingClientRect().top),
        bottomH: Math.round(bottom.getBoundingClientRect().height),
        briefsWrapRight: Math.round(bw.getBoundingClientRect().right),
        colBottoms: briefCols.map((c) => Math.round(c.getBoundingClientRect().bottom)),
        dcTop: Math.round(dc.getBoundingClientRect().top),
        dcBottom: Math.round(dc.getBoundingClientRect().bottom),
        footerBottom: Math.round(foot.getBoundingClientRect().bottom),
        truncatedBriefs,
        truncatedKickers,
        truncatedPlaces,
      };
    });

    const outPath = resolve(repoDir, 'entry.png');
    await page.screenshot({ path: outPath, type: 'png', clip: { x: 0, y: 0, width: 1024, height: 1024 } });
    const bytes = statSync(outPath).size;
    console.log(JSON.stringify({ outPath, bytes, metrics }, null, 2));
  } finally {
    await browser.close();
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
