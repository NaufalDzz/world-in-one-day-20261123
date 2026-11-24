// Verified, strictly single-day world news dataset for Monday 23 November 2026 (00:00–23:59 UTC).
// Every story occurred or was first officially reported on Monday 23 November 2026.

export const EDITION = {
  kickerLeft: 'THE WORLD IN ONE DAY · ONE PAGE',
  masthead: 'Monday 23 November 2026',
  beatsCount: 16,
  geoRegionsCount: 7,
};

export const REGION_META = {
  Europe:          { color: '#1E4E8C', label: 'Europe',        geo: true },
  'Middle East':   { color: '#B45309', label: 'Middle East',   geo: true },
  Africa:          { color: '#1F7A4C', label: 'Africa',        geo: true },
  Asia:            { color: '#B91C1C', label: 'Asia',          geo: true },
  'N. America':    { color: '#6D28D9', label: 'N. America',    geo: true },
  'Latin America': { color: '#BE185D', label: 'Latin America', geo: true },
  Oceania:         { color: '#0E7490', label: 'Oceania',       geo: true },
  Global:          { color: '#334155', label: 'Global',        geo: false },
};

export const TIMELINE_UTC = [
  { time: '04:30', label: 'NZ–India Test draw' },
  { time: '06:00', label: 'Belgium skies shut' },
  { time: '06:30', label: 'KOSPI closes −3.3%' },
  { time: '14:30', label: 'Wall St rallies on Huang' },
  { time: '21:00', label: 'Nasdaq ends +6.5%' },
];

export const HERO_STORIES = [
  {
    id: 1,
    region: 'N. America',
    place: 'NEW YORK · SANTA CLARA',
    status: 'CONFIRMED',
    headline: 'Huang returns as Nvidia CEO; Wall St surges',
    body: 'Board unanimously reverses his 12 Nov exit; Nvidia jumps 31.5% (~$1T added), lifting Nasdaq +6.5% and S&P 500 +4.7%.',
    artKey: 'nvidia',
    lat: 38.5, lon: -102.0,
  },
  {
    id: 2,
    region: 'Europe',
    place: 'BRUSSELS · POLAND',
    status: 'OFFICIAL',
    headline: 'NATO holds Poland talks, deploys AWACS',
    body: 'All 32 ambassadors meet after Fri 20 Nov Russian Kh-101 airspace breach; SACEUR orders eastern-flank radar patrol.',
    artKey: 'nato',
    lat: 52.2, lon: 21.0,
  },
  {
    id: 3,
    region: 'Europe',
    place: 'DYMER, UKRAINE',
    status: 'OFFICIAL',
    headline: 'Dymer flat strike toll reaches 11 as search ends',
    body: 'Officials confirm 11 dead, including a child, after Sunday’s hit; rescuers pull a 7-year-old boy and woman, 79, alive.',
    artKey: 'dymer',
    lat: 50.8, lon: 30.3,
  },
];

export const SECONDARY_STORIES = [
  {
    id: 4,
    region: 'Europe',
    place: 'BRUSSELS',
    status: 'OFFICIAL',
    headline: 'EU proposes 22nd Russia sanctions',
    body: 'Plan cuts ~60 banks from SWIFT, widens shadow-fleet & crypto bans.',
    artKey: 'eu_sanctions',
    lat: 50.8, lon: 4.4,
  },
  {
    id: 5,
    region: 'Middle East',
    place: 'US · IRAN',
    status: 'OFFICIAL',
    headline: 'US hits Iran fronts; Tehran warns',
    body: 'Treasury targets 24+ shadow-bank firms; Iran vows “all means” on blockade.',
    artKey: 'iran_sanctions',
    lat: 32.5, lon: 53.5,
  },
  {
    id: 6,
    region: 'Europe',
    place: 'BELGIUM',
    status: 'CONFIRMED',
    headline: 'National strike shuts Belgian skies',
    body: 'Air traffic halts 06:00–20:00 UTC over austerity, grounding major hubs.',
    artKey: 'belgium_strike',
    lat: 50.5, lon: 4.5,
  },
  {
    id: 7,
    region: 'Middle East',
    place: 'GAZA',
    status: 'CONFIRMED',
    headline: 'Strike kills UNRWA worker at well',
    body: 'Adel al-Helo slain on duty near Jabalia camp; 3 others wounded.',
    artKey: 'gaza_unrwa',
    lat: 31.5, lon: 34.5,
  },
  {
    id: 8,
    region: 'Africa',
    place: 'LUSAKA',
    status: 'OFFICIAL',
    headline: 'Zambia indicts opposition chief',
    body: 'Brian Mundubile and 13 others committed to High Court for treason.',
    artKey: 'zambia_trial',
    lat: -15.4, lon: 28.3,
  },
  {
    id: 9,
    region: 'Africa',
    place: 'DR CONGO',
    status: 'OFFICIAL',
    headline: 'DR Congo halts all cobalt exports',
    body: 'Regulator suspends shipments from 30 Nov to counter price slump.',
    artKey: 'congo_cobalt',
    lat: -4.3, lon: 15.3,
  },
  {
    id: 10,
    region: 'Asia',
    place: 'NEW DELHI',
    status: 'OFFICIAL',
    headline: 'India pledges $1.62bn flood aid to Nepal',
    body: 'Modi unveils recovery package and rail accords during PM Shah’s visit.',
    artKey: 'india_nepal',
    lat: 28.6, lon: 77.2,
  },
  {
    id: 11,
    region: 'Asia',
    place: 'INDONESIA',
    status: 'OFFICIAL',
    headline: 'Java candy plant fire toll hits 24',
    body: 'Cikande deaths confirmed at 24 as crews search ruins for missing.',
    artKey: 'indonesia_fire',
    lat: -6.2, lon: 106.4,
  },
  {
    id: 12,
    region: 'Latin America',
    place: 'COLOMBIA',
    status: 'CONFIRMED',
    headline: 'Drone strikes Cúcuta police base',
    body: 'Attack hurts civilians, including a baby, and damages ~60 homes.',
    artKey: 'colombia_drone',
    lat: 7.9, lon: -72.5,
  },
  {
    id: 13,
    region: 'Global',
    place: 'ZURICH · FIFA',
    status: 'OFFICIAL',
    headline: 'FIFA picks 2031 & 2035 WWC hosts',
    body: 'US, Mexico, Costa Rica & Jamaica win 48-team 2031; UK hosts 2035.',
    artKey: 'fifa_wwc',
    lat: 47.4, lon: 8.5,
  },
];

// 22 concise, verified Monday 23 November 2026 briefs (11 per column, zero truncation at 10.4px)
export const BRIEF_STORIES = [
  // Column 1 (#14–#24)
  { id: 14, region: 'Europe',        place: 'London',       text: 'UK recognizes Rohingya genocide, sanctions 5 generals' },
  { id: 15, region: 'Europe',        place: 'Madrid',       text: 'Supreme Court closes Puigdemont case under amnesty' },
  { id: 16, region: 'Europe',        place: 'Helsinki',     text: 'Finland summons Russian envoy over airspace breach' },
  { id: 17, region: 'Europe',        place: 'Moscow',       text: 'Accuses Estonia of aiding drone hit; Tallinn denies',    tag: 'CLAIM' },
  { id: 18, region: 'Europe',        place: 'Berlin',       text: 'NATO intel warns of Russian nuclear satellite',          tag: 'CLAIM' },
  { id: 19, region: 'Europe',        place: 'Denmark',      text: 'Top court upholds housing “ghetto law” lease cuts' },
  { id: 20, region: 'Europe',        place: 'Germany',      text: 'Hoax bomb emails hit ~450 German & Danish schools' },
  { id: 21, region: 'Europe',        place: 'Ukraine',      text: 'Zelensky urges 4-way talks with US, Europe & Russia' },
  { id: 22, region: 'Middle East',   place: 'Iran',         text: 'Singer Ahmadi & crew flogged over hijab video',          tag: 'REPORTED' },
  { id: 23, region: 'Middle East',   place: 'Yemen',        text: 'Houthis report deadly strikes in Hodeida & Lahj',        tag: 'CLAIM' },
  { id: 24, region: 'Africa',        place: 'Ituri, DRC',   text: 'WHO says fighting trapped Ebola staff for 24 hours' },

  // Column 2 (#25–#35)
  { id: 25, region: 'N. America',    place: 'Austin, US',   text: 'CrowdStrike agrees $43.9B all-stock Zscaler buyout' },
  { id: 26, region: 'Latin America', place: 'Brasília',     text: 'Lower house backs Lula spending curbs 353–128',          lat: -15.8, lon: -47.9, pin: true },
  { id: 27, region: 'N. America',    place: 'Iowa, US',     text: 'Trump pauses Army lead-azide blast pending review' },
  { id: 28, region: 'Middle East',   place: 'Israel',       text: 'Grants in-principle nod for Flydubai flights to resume' },
  { id: 29, region: 'Asia',          place: 'Seoul',        text: 'KOSPI drops 3.3% in AI sell-off before US rebound',      lat: 37.6, lon: 127.0, pin: true },
  { id: 30, region: 'Asia',          place: 'S. Korea',     text: 'Lee picks Kang Kum-sil as first female spy chief' },
  { id: 31, region: 'Asia',          place: 'Beijing',      text: 'Ex-ministry official sentenced to death for spying' },
  { id: 32, region: 'Asia',          place: 'Bangladesh',   text: 'Garment wage talks stall amid factory-zone protests' },
  { id: 33, region: 'Asia',          place: 'Tajikistan',   text: 'Dushanbe files formal notice to withdraw from ICC',      lat: 38.6, lon: 68.8, pin: true },
  { id: 34, region: 'Oceania',       place: 'Australia',    text: 'Treasurer Chalmers warns jobless rate may top 5%',       lat: -35.3, lon: 149.1, pin: true },
  { id: 35, region: 'Oceania',       place: 'Wellington',   text: 'NZ bat out 120 overs (239–5) to draw Test vs India',     lat: -41.3, lon: 174.8, pin: true },
];

export const DATE_CHECK = {
  included: 'All 35 stories happened or were first reported Mon 23 Nov 2026 (UTC).',
  excluded: 'Left out (before Mon): COP31 no-deal collapse (Sun 22), Ukraine’s Benghazi warship strike (Sun 22; Kyiv claimed Mon), Sparta II hit (Sat 21), ATP & MotoGP finals (Sun 22). Background only: Kh-101 missiles in Poland (Fri 20); Cikande fire start (Sat 21). Not yet: World Chess match (Tue 24), Taiwan polls (Sat 28).',
};

export function getStoryStats() {
  const all = [...HERO_STORIES, ...SECONDARY_STORIES, ...BRIEF_STORIES];
  return { totalStories: all.length, regionCount: EDITION.geoRegionsCount };
}
