// Verified, strictly single-day dataset for Monday 23 November 2026 (full day 00:00–23:59 UTC).
// Every item occurred or was first officially reported on Monday 23 November 2026.

export const EDITION = {
  kickerLeft: 'THE WORLD IN ONE DAY',
  kickerRight: 'FULL DAY · 23:59 UTC',
  masthead: 'Monday 23 November 2026',
  deck: 'Nvidia reinstates Jensen Huang in +31.5% rally  ·  Ukraine claims Benghazi warship sinking  ·  NATO sends AWACS to Poland',
};

export const REGION_META = {
  Europe:        { color: '#1E4E79', label: 'EUROPE' },
  'Middle East': { color: '#991B1B', label: 'MIDDLE EAST' },
  Africa:        { color: '#166534', label: 'AFRICA' },
  Americas:      { color: '#5B21B6', label: 'AMERICAS' },
  Global:        { color: '#334155', label: 'GLOBAL' },
  'South Asia':  { color: '#B45309', label: 'SOUTH ASIA' },
  'East Asia':   { color: '#9D174D', label: 'EAST ASIA' },
  'SE Asia':     { color: '#0F766E', label: 'SE ASIA' },
  Oceania:       { color: '#0369A1', label: 'OCEANIA' },
};

export const DAY_IN_NUMBERS = [
  { value: '+31.5%',    label: 'Nvidia closes $165.05 (~$950B added)', color: '#67E8F9' },
  { value: '$43.9B',    label: 'CrowdStrike–Zscaler cyber merger',      color: '#FCD34D' },
  { value: '7 drones',  label: 'SBU sea drones hit ships in Benghazi',  color: '#FCA5A5' },
  { value: '~60 banks', label: 'Targeted in EU 22nd Russia sanctions',  color: '#67E8F9' },
  { value: '14 hours',  label: 'National strike shuts Belgian skies',   color: '#FCD34D' },
  { value: '48 teams',  label: '2031 Women’s World Cup in 4 nations',   color: '#86EFAC' },
];

export const TIMELINE_UTC = [
  { time: '02:40', label: 'Vanuatu M6.5 quake' },
  { time: '04:30', label: 'NZ–India Test draw' },
  { time: '06:00', label: 'Belgium ATC shuts' },
  { time: '11:30', label: 'Huang back at Nvidia' },
  { time: '14:00', label: 'EU 22nd sanctions' },
  { time: '21:00', label: 'Nasdaq +6.51% close' },
];

export const HERO_STORIES = [
  {
    id: 1,
    region: 'Americas',
    placeTag: 'SANTA CLARA, US',
    kicker: 'AMERICAS · MARKETS & TECH',
    status: 'OFFICIAL',
    headline: 'Nvidia reinstates Jensen Huang; stock jumps 31.5%',
    body: 'Board unanimously restores Huang 11 days after his resignation following US security assurances; shares close at $165.05 (~$950B added), lifting Nasdaq +6.51% and S&P 500 +4.73%.',
    sources: 'Nvidia · Reuters · FT · WashPost',
    artKey: 'nvidia',
    lat: 37.35, lon: -121.95,
  },
  {
    id: 2,
    region: 'Europe',
    placeTag: 'BENGHAZI & RUSSIA',
    kicker: 'EUROPE & AFRICA · WAR',
    status: 'CONFIRMED',
    headline: 'Ukraine claims Benghazi sinking; hits 2 refineries',
    body: 'Zelenskyy releases SBU footage of 7 naval drones sinking Russia’s corvette Merkury & hitting arms ship MV Angara in Libya; overnight drones also hit Perm (1 dead) & Novoshakhtinsk.',
    sources: 'Guardian · Reuters · Moscow Times',
    artKey: 'ukraine',
    lat: 32.12, lon: 20.07,
  },
  {
    id: 3,
    region: 'Europe',
    placeTag: 'BRUSSELS & WARSAW',
    kicker: 'EUROPE · SECURITY',
    status: 'OFFICIAL',
    headline: 'NATO sends AWACS; EU unveils 22nd sanctions',
    body: 'After three Russian Kh-101 missiles breached Polish airspace (20 Nov), NATO deploys radar cover; EU proposes cutting ~60 Russian banks from SWIFT, crypto curbs & sports flag bans.',
    sources: 'NATO · EU Commission · Guardian',
    artKey: 'nato',
    lat: 52.23, lon: 21.01,
  },
];

export const SECONDARY_STORIES = [
  {
    id: 4,
    region: 'Americas',
    placeTag: 'AUSTIN, US',
    kicker: 'AMERICAS · CYBER M&A',
    status: 'OFFICIAL',
    headline: 'CrowdStrike in $43.9B deal to buy Zscaler',
    body: 'Record all-stock cybersecurity merger unites endpoint and Zero Trust cloud defense.',
    sources: 'CrowdStrike · Reuters',
    artKey: 'cyber',
    lat: 30.27, lon: -97.74,
  },
  {
    id: 5,
    region: 'Europe',
    placeTag: 'LONDON',
    kicker: 'EUROPE · INT’L LAW',
    status: 'OFFICIAL',
    headline: 'UK recognizes Rohingya genocide, hits Myanmar',
    body: 'Foreign Sec. Miliband expels attaché & sanctions 5 generals and jet fuel after ICJ ruling.',
    sources: 'UK Gov · BBC · Guardian',
    artKey: 'uk_myanmar',
    lat: 51.51, lon: -0.13,
  },
  {
    id: 6,
    region: 'Europe',
    placeTag: 'BRUSSELS',
    kicker: 'EUROPE · AVIATION',
    status: 'CONFIRMED',
    headline: 'National strike shuts Belgian skies 14 hours',
    body: 'ATC provider Skeyes halts flights 07:00–21:00, grounding Brussels and Charleroi hubs.',
    sources: 'Al Jazeera · AP · AA',
    artKey: 'belgium',
    lat: 50.85, lon: 4.35,
  },
  {
    id: 7,
    region: 'Europe',
    placeTag: 'MADRID',
    kicker: 'EUROPE · COURTS',
    status: 'OFFICIAL',
    headline: 'Spain’s top court grants Puigdemont amnesty',
    body: 'Supreme Court closes 2017 embezzlement case, clearing Catalan leader’s return.',
    sources: 'Reuters · CNN',
    artKey: 'spain',
    lat: 40.42, lon: -3.70,
  },
  {
    id: 8,
    region: 'Middle East',
    placeTag: 'TEHRAN',
    kicker: 'MIDDLE EAST · RIGHTS',
    status: 'CONFIRMED',
    headline: 'Iranian singer Parastoo Ahmadi given 74 lashes',
    body: 'Singer and four crew flogged over hijab-free YouTube gig, rights groups report.',
    sources: 'BBC · Guardian · CNN',
    artKey: 'iran_singer',
    lat: 35.69, lon: 51.39,
  },
  {
    id: 9,
    region: 'East Asia',
    placeTag: 'SEOUL',
    kicker: 'EAST ASIA · CABINET',
    status: 'OFFICIAL',
    headline: 'South Korea taps first female spy chief',
    body: 'President Lee Jae Myung nominates ex-justice minister Kang Kum-sil to lead NIS.',
    sources: 'Chosun · Hankyoreh',
    artKey: 'korea',
    lat: 37.57, lon: 126.98,
  },
  {
    id: 10,
    region: 'South Asia',
    placeTag: 'NEW DELHI',
    kicker: 'SOUTH ASIA · DIPLOMACY',
    status: 'OFFICIAL',
    headline: 'India signs aid & rail pact with Nepal PM Shah',
    body: 'Modi and Balen Shah launch Ayodhya–Janakpur train and reconstruction accords.',
    sources: 'MEA · India Today',
    artKey: 'nepal',
    lat: 28.61, lon: 77.21,
  },
  {
    id: 11,
    region: 'SE Asia',
    placeTag: 'JAKARTA',
    kicker: 'SE ASIA · POLITICS',
    status: 'OFFICIAL',
    headline: 'Indonesia names ex-police chief plot suspect',
    body: 'Listyo Sigit Prabowo and five officers named in alleged wiretapping conspiracy.',
    sources: 'CNA · Kompas',
    artKey: 'indonesia_plot',
    lat: -6.21, lon: 106.85,
  },
  {
    id: 12,
    region: 'Global',
    placeTag: 'ZURICH · FIFA',
    kicker: 'GLOBAL · SPORT',
    status: 'OFFICIAL',
    headline: 'FIFA names 2031 & 2035 Women’s WC hosts',
    body: 'US, Mexico, Costa Rica & Jamaica win 48-team 2031; UK four nations host 2035.',
    sources: 'FIFA · CNN',
    artKey: 'fifa',
    lat: 47.37, lon: 8.54,
  },
  {
    id: 13,
    region: 'Africa',
    placeTag: 'LAGOS',
    kicker: 'AFRICA · POLITICS',
    status: 'OFFICIAL',
    headline: 'Tinubu declares 2027 Nigeria re-election bid',
    body: 'Announces second-term run in Lagos; also urges decriminalizing attempted suicide.',
    sources: 'State House · AllAfrica',
    artKey: 'nigeria',
    lat: 6.52, lon: 3.38,
  },
];

// Ultra-crisp single-line briefs (10 per column) tuned for zero truncation at 8.85px
export const BRIEF_STORIES = [
  // Column 1 (14..23)
  { id: 14, region: 'Europe',      place: 'Russia–Estonia',  text: 'Moscow claims drone aid; Tallinn denies',          sources: 'Guardian',   tag: 'CLAIM' },
  { id: 15, region: 'Europe',      place: 'Germany/Denmark', text: 'Email bomb threats hit 100s of schools; hoaxes',   sources: 'Reuters' },
  { id: 16, region: 'Europe',      place: 'London, UK',      text: 'Compass Group plans primary listing move to NY',   sources: 'FT' },
  { id: 17, region: 'Middle East', place: 'US–Iran',         text: 'US sanctions 25+ Iran shadow-bank fronts',         sources: 'Treasury' },
  { id: 18, region: 'Middle East', place: 'Gaza',            text: 'Jabalia well strike kills UNRWA worker al-Helo',   sources: 'AJ',         tag: 'REPORTED' },
  { id: 19, region: 'Middle East', place: 'Turkey–Iraq',     text: 'Turkish intel says PKK quit 14 N. Iraq bases',     sources: 'AFP',        tag: 'REPORTED' },
  { id: 20, region: 'Africa',      place: 'Benghazi, Libya', text: 'UNSMIL & Libya demand UN probe of port hits',      sources: 'UN · AA' },
  { id: 21, region: 'Africa',      place: 'Addis Ababa',     text: '5th Africa Public Health summit (CPHIA) opens',    sources: 'Africa CDC', lat: 9.03, lon: 38.74, pin: true },
  { id: 22, region: 'Africa',      place: 'Sudan',           text: 'UN OCHA warns food costs & clashes deepen famine', sources: 'UN OCHA' },
  { id: 23, region: 'Global',      place: 'UN Council',      text: 'Meeting 10277 warns Ukraine grid hits risk food',  sources: 'UN · WFP' },

  // Column 2 (24..33)
  { id: 24, region: 'Americas',    place: 'Colombia',        text: 'Cúcuta police-base drone hurts 3, hits 60 homes',  sources: 'AJ',         lat: 7.89, lon: -72.50, pin: true },
  { id: 25, region: 'Americas',    place: 'Iowa, US',        text: 'Trump pauses Army lead-azide blast for review',    sources: 'CNN · AP' },
  { id: 26, region: 'Global',      place: 'Science',         text: 'PNAS finds ancient core carbon leak at Kilauea',   sources: 'PNAS',       lat: 19.41, lon: -155.29, pin: true },
  { id: 27, region: 'Global',      place: 'Tajikistan',      text: 'Dushanbe starts formal ICC withdrawal process',    sources: 'Reuters',    lat: 38.56, lon: 68.78, pin: true },
  { id: 28, region: 'South Asia',  place: 'Bangladesh',      text: 'BNP & Awami League clashes injure dozens',         sources: 'Daily Star' },
  { id: 29, region: 'South Asia',  place: 'Pakistan',        text: 'Overturned stone truck kills 7 in Punjab crash',   sources: 'Xinhua',     tag: 'REPORTED' },
  { id: 30, region: 'East Asia',   place: 'Beijing',         text: 'China curbs tunnel-borer exports; Dutch FM visits',sources: 'Asia Times', lat: 39.90, lon: 116.41, pin: true },
  { id: 31, region: 'SE Asia',     place: 'Sydney',          text: 'Singapore PM Wong lands for Albanese talks',       sources: 'CNA' },
  { id: 32, region: 'Oceania',     place: 'Wellington',      text: 'NZ bat out 120 overs to hold India to Test draw',  sources: 'ICC · CNA',  lat: -41.29, lon: 174.78, pin: true },
  { id: 33, region: 'Oceania',     place: 'Vanuatu',         text: 'Deep M6.5 quake (601 km) hits; no tsunami',        sources: 'USGS · AA',  lat: -17.73, lon: 168.32, pin: true },
];

export const DATE_CHECK_INCLUDED =
  'Every story on this page happened, or was first officially reported, on Monday 23 November 2026 (00:00–23:59 UTC). Ukraine’s official claim and SBU footage of the Benghazi strike were released Mon 23 Nov.';

export const DATE_CHECK_EXCLUDED =
  'Left out as earlier days’ news: Sun 22 Nov — COP31 Antalya no-deal collapse, Russia’s 186-drone strike near Kyiv, Hong Kong 98.79% poll, Verstappen’s Las Vegas GP & Alcaraz’s ATP Finals, Trump’s Iran-strike warning, Cikande 24-body-bag toll, Ituri Ebola clinic clash & Choi Kyo-jin resignation; Sat 21 Nov — Sparta II hit, El Chapo Isidro arrest & BepiColombo burn; Fri 20 Nov — Peru M6.7 quake & Kh-101 missiles in Poland.';

export function computeRegions() {
  const counts = {};
  for (const r of Object.keys(REGION_META)) counts[r] = 0;
  for (const s of [...HERO_STORIES, ...SECONDARY_STORIES, ...BRIEF_STORIES]) {
    counts[s.region] = (counts[s.region] || 0) + 1;
  }
  return Object.entries(REGION_META)
    .map(([name, meta]) => ({
      name,
      label: meta.label,
      color: meta.color,
      count: counts[name] || 0,
    }))
    .filter((r) => r.count > 0);
}
