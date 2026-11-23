// Renders the 1024x1024 archival broadsheet PNG for Monday 23 November 2026 via headless Chromium.
// Pass 2 polish: larger 51px serif masthead, 114px hero art, 60px full-frame pictorial secondary cards,
// larger brief typography reclaiming bottom gap, and zero clipping at 1024px and 300px.

import { createRequire } from 'node:module';
import { writeFileSync, statSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  EDITION,
  REGION_META,
  KEY_NUMBERS,
  TIMELINE_UTC,
  HERO_STORIES,
  SECONDARY_STORIES,
  BRIEF_STORIES,
  DATE_CHECK_TEXT,
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

  const kpiHtml = KEY_NUMBERS.map(
    (k) => `<div class="kpi">
      <div class="kpi-val" style="color:${k.accent}">${esc(k.value)}</div>
      <div class="kpi-lbl">${esc(k.label)}</div>
    </div>`
  ).join('');

  const regionBarHtml = regions.map(
    (r) => `<div class="rseg" style="flex:${r.count};background:${r.color}">${esc(r.label)} ${r.count}</div>`
  ).join('');

  const timelineHtml = TIMELINE_UTC.map(
    (t) => `<div class="tl-item"><span class="tl-t">${esc(t.time)}</span><span class="tl-l">${esc(t.label)}</span></div>`
  ).join('');

  const heroHtml = HERO_STORIES.map((s) => {
    const col = REGION_META[s.region]?.color || '#1E293B';
    return `<article class="hero-card">
      <div class="hero-art">${renderHeroArt(s.artKey)}</div>
      <div class="meta-row">
        <span class="num-dot" style="background:${col}">${s.id}</span>
        <span class="kicker" style="color:${col}">${esc(s.kicker)}</span>
        ${statusBadge(s.status)}
      </div>
      <h2 class="hero-hl">${esc(s.headline)}</h2>
      <p class="hero-body">${esc(s.body)} <em class="src">(${esc(s.sources)})</em></p>
    </article>`;
  }).join('');

  const secHtml = SECONDARY_STORIES.map((s) => {
    const col = REGION_META[s.region]?.color || '#1E293B';
    return `<article class="sec-card">
      <div class="sec-art">${renderCardArt(s.artKey)}</div>
      <div class="meta-row meta-tight">
        <span class="num-dot sm" style="background:${col}">${s.id}</span>
        <span class="kicker sm" style="color:${col}">${esc(s.kicker)}</span>
        ${statusBadge(s.status)}
      </div>
      <h3 class="sec-hl">${esc(s.headline)}</h3>
      <p class="sec-body">${esc(s.body)} <em class="src">(${esc(s.sources)})</em></p>
    </article>`;
  }).join('');

  const col1 = BRIEF_STORIES.slice(0, 12);
  const col2 = BRIEF_STORIES.slice(12);
  const renderBrief = (b) => {
    const col = REGION_META[b.region]?.color || '#1E293B';
    const tag = b.tag ? ` ${statusBadge(b.tag)}` : '';
    return `<div class="brief">
      <span class="b-num" style="background:${col}">${b.id}</span>
      <span class="b-txt"><strong class="b-place" style="color:${col}">${esc(b.place)}:</strong> ${esc(b.text)} <em class="src">(${esc(b.sources)})</em>${tag}</span>
    </div>`;
  };

  const mapLegend = regions.map(
    (r) => `<span class="leg-item"><i style="background:${r.color}"></i>${esc(r.name)} ${r.count}</span>`
  ).join('');

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
    background: #FAF8F2;
    color: #0F172A;
    font-family: "Noto Sans", "DejaVu Sans", sans-serif;
    -webkit-font-smoothing: antialiased;
  }
  .page {
    width: 1024px;
    height: 1024px;
    display: flex;
    flex-direction: column;
    padding: 0 12px 5px 12px;
  }

  .topbar {
    margin: 0 -12px;
    height: 18px;
    background: #0F1C2E;
    color: #F8FAFC;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 14px;
    font-size: 8.5px;
    font-weight: 800;
    letter-spacing: 0.6px;
  }
  .topbar .mid { color: #FDE68A; letter-spacing: 0.7px; }

  .masthead {
    text-align: center;
    padding: 1px 0 3px 0;
    border-bottom: 2px solid #0F172A;
  }
  .masthead h1 {
    font-family: "C059", "DejaVu Serif", serif;
    font-size: 51px;
    font-weight: 700;
    line-height: 0.98;
    letter-spacing: -0.8px;
    color: #0B1320;
  }
  .deck {
    font-family: "C059", "DejaVu Serif", serif;
    font-style: italic;
    font-size: 11.4px;
    font-weight: 700;
    color: #8C1D18;
    margin-top: 2px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .kpis {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    border-bottom: 1px solid #CBD5E1;
    padding: 3px 0;
    gap: 4px;
  }
  .kpi {
    text-align: center;
    border-right: 1px solid #E2DDD0;
    padding: 0 2px;
  }
  .kpi:last-child { border-right: none; }
  .kpi-val {
    font-family: "C059", "DejaVu Serif", serif;
    font-size: 18px;
    font-weight: 700;
    line-height: 1.03;
  }
  .kpi-lbl {
    font-size: 8.1px;
    font-weight: 700;
    color: #334155;
    line-height: 1.12;
    margin-top: 1px;
  }

  .rbar {
    display: flex;
    height: 14px;
    margin-top: 3px;
    border-radius: 2px;
    overflow: hidden;
  }
  .rseg {
    color: #FFFFFF;
    font-size: 7.4px;
    font-weight: 800;
    letter-spacing: 0.3px;
    display: flex;
    align-items: center;
    justify-content: center;
    white-space: nowrap;
    padding: 0 3px;
    border-right: 1px solid rgba(255,255,255,0.28);
  }
  .rseg:last-child { border-right: none; }

  .tl {
    display: flex;
    align-items: center;
    gap: 7px;
    background: #132238;
    color: #F1F5F9;
    height: 17px;
    padding: 0 6px;
    margin-top: 3px;
    border-radius: 2px;
    font-size: 7.8px;
  }
  .tl-tag {
    background: #B91C1C;
    color: #FFFFFF;
    font-weight: 900;
    padding: 1px 5px;
    border-radius: 2px;
    font-size: 7.4px;
    letter-spacing: 0.3px;
    flex-shrink: 0;
  }
  .tl-items {
    display: flex;
    flex: 1;
    justify-content: space-between;
    align-items: center;
    overflow: hidden;
  }
  .tl-item { white-space: nowrap; }
  .tl-t { color: #FDE047; font-weight: 800; margin-right: 2.5px; }
  .tl-l { color: #E2E8F0; font-weight: 600; }

  .heroes {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
    margin-top: 5px;
    padding-bottom: 5px;
    border-bottom: 1.5px solid #0F172A;
  }
  .hero-card { display: flex; flex-direction: column; }
  .hero-art {
    width: 100%;
    height: 112px;
    border: 1px solid #94A3B8;
    border-radius: 2px;
    overflow: hidden;
    background: #FFFFFF;
  }
  .hero-art svg { width: 100%; height: 100%; display: block; }
  .meta-row {
    display: flex;
    align-items: center;
    gap: 4px;
    margin-top: 3.5px;
  }
  .meta-tight { margin-top: 2.5px; gap: 3px; }
  .num-dot {
    width: 14px;
    height: 14px;
    border-radius: 50%;
    color: #FFFFFF;
    font-size: 8.5px;
    font-weight: 900;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }
  .num-dot.sm { width: 12.5px; height: 12.5px; font-size: 7.5px; }
  .kicker {
    font-size: 7.9px;
    font-weight: 800;
    letter-spacing: 0.25px;
    flex: 1;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .kicker.sm { font-size: 7.2px; }
  .st {
    font-size: 6.7px;
    font-weight: 900;
    padding: 0.8px 3.5px;
    border-radius: 2px;
    letter-spacing: 0.25px;
    flex-shrink: 0;
  }
  .st-confirmed { background: #166534; color: #FFFFFF; }
  .st-official  { background: #1E40AF; color: #FFFFFF; }
  .st-reported  { background: #475569; color: #FFFFFF; }
  .st-claim     { background: #B45309; color: #FFFFFF; }

  .hero-hl {
    font-family: "C059", "DejaVu Serif", serif;
    font-size: 16.2px;
    font-weight: 700;
    line-height: 1.1;
    color: #0B1320;
    margin-top: 2.5px;
  }
  .hero-body {
    font-size: 9.2px;
    line-height: 1.24;
    color: #1E293B;
    margin-top: 2.5px;
  }
  .src { color: #64748B; font-style: italic; font-size: 8.1px; }

  .secs {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    column-gap: 8px;
    row-gap: 6px;
    margin-top: 5px;
    padding-bottom: 5px;
    border-bottom: 1.5px solid #0F172A;
  }
  .sec-card { display: flex; flex-direction: column; }
  .sec-art {
    width: 100%;
    height: 60px;
    border: 1px solid #94A3B8;
    border-radius: 2px;
    overflow: hidden;
  }
  .sec-art svg { width: 100%; height: 100%; display: block; }
  .sec-hl {
    font-family: "C059", "DejaVu Serif", serif;
    font-size: 12.4px;
    font-weight: 700;
    line-height: 1.1;
    color: #0B1320;
    margin-top: 2px;
  }
  .sec-body {
    font-size: 8.25px;
    line-height: 1.19;
    color: #1E293B;
    margin-top: 1.8px;
  }

  .bottom {
    display: grid;
    grid-template-columns: 316px 1fr;
    gap: 10px;
    margin-top: 4px;
    flex: 1;
    min-height: 0;
  }
  .sec-hdr {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    border-bottom: 1px solid #94A3B8;
    padding-bottom: 2px;
    margin-bottom: 3.5px;
  }
  .sec-hdr h4 {
    font-size: 9.2px;
    font-weight: 900;
    letter-spacing: 0.4px;
    color: #0F172A;
  }
  .sec-hdr span {
    font-size: 7.7px;
    font-style: italic;
    color: #475569;
  }
  .map-wrap svg { width: 316px; height: 174px; display: block; }
  .map-legend {
    display: flex;
    flex-wrap: wrap;
    gap: 3px 8px;
    margin-top: 4px;
    font-size: 7.9px;
    font-weight: 700;
    color: #1E293B;
  }
  .leg-item { display: inline-flex; align-items: center; gap: 3px; }
  .leg-item i { width: 7px; height: 7px; border-radius: 50%; display: inline-block; }

  .brief-cols {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 9px;
  }
  .brief-col {
    display: flex;
    flex-direction: column;
    gap: 2.1px;
  }
  .brief {
    display: flex;
    align-items: flex-start;
    gap: 4px;
    font-size: 7.95px;
    line-height: 1.16;
    color: #1E293B;
  }
  .b-num {
    width: 13px;
    height: 13px;
    border-radius: 50%;
    color: #FFFFFF;
    font-size: 7.0px;
    font-weight: 900;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    margin-top: 0.5px;
  }
  .b-place { font-weight: 800; }
  .brief .st { font-size: 6.1px; padding: 0.3px 2.5px; vertical-align: middle; }

  .date-check {
    display: flex;
    align-items: stretch;
    border: 1.5px solid #991B1B;
    background: #FDF4F4;
    border-radius: 2px;
    margin-top: 3px;
    overflow: hidden;
  }
  .dc-label {
    background: #991B1B;
    color: #FFFFFF;
    font-size: 8.2px;
    font-weight: 900;
    letter-spacing: 0.4px;
    padding: 3px 7px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    line-height: 1.1;
    width: 58px;
    flex-shrink: 0;
  }
  .dc-text {
    font-size: 7.45px;
    line-height: 1.22;
    color: #3F1212;
    padding: 3px 7px;
  }

  .footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 2.5px;
    padding-top: 2px;
    border-top: 1px solid #CBD5E1;
    font-size: 7.3px;
    color: #475569;
  }
  .footer .f-left { display: flex; align-items: center; gap: 5px; }
</style>
</head>
<body>
<div class="page">
  <header class="topbar">
    <span>${esc(EDITION.kickerLeft)}</span>
    <span class="mid">${totalStories} DATED STORIES · ${regions.length} REGIONS · FULL DAY MONDAY 23 NOVEMBER 2026</span>
    <span>${esc(EDITION.kickerRight)}</span>
  </header>

  <section class="masthead">
    <h1>${esc(EDITION.masthead)}</h1>
    <div class="deck">${esc(EDITION.deck)}</div>
  </section>

  <section class="kpis">${kpiHtml}</section>
  <section class="rbar">${regionBarHtml}</section>
  <section class="tl">
    <span class="tl-tag">THE DAY IN UTC</span>
    <div class="tl-items">${timelineHtml}</div>
  </section>

  <section class="heroes">${heroHtml}</section>
  <section class="secs">${secHtml}</section>

  <section class="bottom">
    <div class="atlas-col">
      <div class="sec-hdr">
        <h4>WHERE IT HAPPENED</h4>
        <span>pins match stories 1–13</span>
      </div>
      <div class="map-wrap">${renderWorldMap([...HERO_STORIES, ...SECONDARY_STORIES])}</div>
      <div class="map-legend">${mapLegend}</div>
    </div>
    <div class="briefs-wrap">
      <div class="sec-hdr">
        <h4>ALSO ON MONDAY 23 NOVEMBER — ${BRIEF_STORIES.length} MORE STORIES</h4>
        <span>all dated 23 Nov 2026 · ${regions.length} regions</span>
      </div>
      <div class="brief-cols">
        <div class="brief-col">${col1.map(renderBrief).join('')}</div>
        <div class="brief-col">${col2.map(renderBrief).join('')}</div>
      </div>
    </div>
  </section>

  <section class="date-check">
    <div class="dc-label">DATE<br/>CHECK</div>
    <div class="dc-text">${esc(DATE_CHECK_TEXT)}</div>
  </section>

  <footer class="footer">
    <div class="f-left">
      <span class="st st-confirmed">CONFIRMED</span><span>2+ wires</span>
      <span class="st st-official">OFFICIAL</span><span>govt / agency / result</span>
      <span class="st st-reported">REPORTED</span><span>single outlet</span>
      <span class="st st-claim">CLAIM</span><span>contested account</span>
    </div>
    <div>Original vector graphics &amp; atlas generated in code · Sources: Reuters, AP, AFP, BBC, Guardian, FT, Al Jazeera, NATO, UN, USGS, FIFA, WHO</div>
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
      const briefCols = [...document.querySelectorAll('.brief-col')];
      const kickers = [...document.querySelectorAll('.kicker')];
      const truncatedKickers = kickers.filter(k => k.scrollWidth > k.clientWidth + 1).map(k => k.textContent);
      return {
        scrollH: p.scrollHeight,
        clientH: p.clientHeight,
        footerBottom: Math.round(foot.getBoundingClientRect().bottom),
        dcTop: Math.round(dc.getBoundingClientRect().top),
        dcBottom: Math.round(dc.getBoundingClientRect().bottom),
        bottomH: Math.round(bottom.getBoundingClientRect().height),
        colBottoms: briefCols.map(c => Math.round(c.getBoundingClientRect().bottom)),
        truncatedKickers,
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
