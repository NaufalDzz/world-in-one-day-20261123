// Verified, strictly single-day dataset for Monday 23 November 2026 (full day to 23:50 UTC).
// Every item occurred or was first officially reported on Monday 23 November 2026 in at least one time zone.

export const EDITION = {
  kickerLeft: 'THE WORLD IN ONE DAY',
  kickerRight: 'PRESS 23:50 UTC',
  masthead: 'Monday 23 November 2026',
  deck: 'Nvidia reinstates Jensen Huang in +31.5% rally  ·  Ukraine confirms Benghazi warship sinking & hits Russian refineries  ·  NATO deploys AWACS to Poland',
};

export const REGION_META = {
  Europe:         { color: '#1E4E79', label: 'EUROPE' },
  'Asia-Pacific': { color: '#B45309', label: 'ASIA-PACIFIC' },
  'Middle East':  { color: '#991B1B', label: 'MIDDLE EAST' },
  Americas:       { color: '#5B21B6', label: 'AMERICAS' },
  Africa:         { color: '#166534', label: 'AFRICA' },
  Oceania:        { color: '#0F766E', label: 'OCEANIA' },
  World:          { color: '#334155', label: 'WORLD' },
};

export const KEY_NUMBERS = [
  { value: '+31.5%',   label: 'Nvidia surge (~$1T added)',   accent: '#15803D' },
  { value: '$43.9B',   label: 'CrowdStrike–Zscaler deal',    accent: '#5B21B6' },
  { value: '2,400 km', label: 'Ukraine sea-drone reach',     accent: '#B91C1C' },
  { value: '14 hrs',   label: 'Belgium ATC shutdown',        accent: '#B91C1C' },
  { value: '$14.7B',   label: 'Iran shadow-bank flows',      accent: '#9A3412' },
  { value: '48 teams', label: '2031 Women’s World Cup',      accent: '#1E4E79' },
];

export const TIMELINE_UTC = [
  { time: '02:40', label: 'Vanuatu M6.5 quake' },
  { time: '04:30', label: 'NZ–India Test draw' },
  { time: '06:00', label: 'Belgium ATC shuts' },
  { time: '11:30', label: 'Huang back at Nvidia' },
  { time: '15:00', label: 'NATO AWACS & UNSC' },
  { time: '18:00', label: 'FIFA 2031/2035 hosts' },
  { time: '21:00', label: 'Nasdaq +6.51% close' },
];

export const HERO_STORIES = [
  {
    id: 1,
    region: 'Americas',
    kicker: 'SANTA CLARA, US · TECH & MARKETS',
    status: 'OFFICIAL',
    headline: 'Nvidia reinstates Jensen Huang as CEO; stock surges 31.5%',
    body: 'Nvidia’s board unanimously restores Huang 11 days after his resignation following US security assurances and President Trump’s backing, adding nearly $1 trillion in value and propelling the Nasdaq up 6.51% and S&P 500 up 4.73%.',
    sources: 'Nvidia, FT, Guardian, CBS',
    artKey: 'nvidia',
    lat: 37.35, lon: -121.95,
  },
  {
    id: 2,
    region: 'Europe',
    kicker: 'BENGHAZI & RUSSIA · WAR',
    status: 'CONFIRMED',
    headline: 'Ukraine confirms Benghazi warship sinking; hits two oil refineries',
    body: 'Zelenskyy releases footage confirming seven SBU sea drones sank Russia’s corvette Merkury and hit arms ship MV Angara 2,400 km away in Libya; Monday drone waves also strike refineries in Perm (one killed) and Rostov’s Novoshakhtinsk.',
    sources: 'Guardian, Reuters, Kyiv Indep., Moscow Times',
    artKey: 'ukraine',
    lat: 32.12, lon: 20.07,
  },
  {
    id: 3,
    region: 'Europe',
    kicker: 'BRUSSELS & WARSAW · SECURITY',
    status: 'OFFICIAL',
    headline: 'NATO deploys AWACS to Poland; EU advances 22nd sanctions',
    body: 'Emergency North Atlantic Council talks hold Russia responsible for 20 Nov Polish airspace violations and order forward AWACS radar cover; the EU unveils its 22nd sanctions package targeting Russian crypto networks and banks.',
    sources: 'NATO, Guardian, United24',
    artKey: 'nato',
    lat: 52.23, lon: 21.01,
  },
];

export const SECONDARY_STORIES = [
  {
    id: 4,
    region: 'Europe',
    kicker: 'BRUSSELS · ATC',
    status: 'CONFIRMED',
    headline: 'Belgium strike shuts airspace 14 hours',
    body: 'ATC provider Skeyes halts flights 07:00–21:00 local, grounding Brussels and Charleroi hubs.',
    sources: 'Al Jazeera, AA',
    artKey: 'belgium',
    lat: 50.85, lon: 4.35,
  },
  {
    id: 5,
    region: 'Europe',
    kicker: 'MADRID · COURT',
    status: 'OFFICIAL',
    headline: 'Spain top court grants Puigdemont amnesty',
    body: 'Supreme Court closes 2017 embezzlement case days before election, clearing exile return.',
    sources: 'CNN, AA',
    artKey: 'spain',
    lat: 40.42, lon: -3.70,
  },
  {
    id: 6,
    region: 'Middle East',
    kicker: 'US · TREASURY',
    status: 'OFFICIAL',
    headline: 'US sanctions 25+ Iran shadow-bank fronts',
    body: 'FinCEN flags $14.7B in covert flows via UAE, Turkey & Hong Kong; OFAC blacklists fronts.',
    sources: 'US Treasury, ToI',
    artKey: 'treasury',
    lat: 38.90, lon: -77.04,
  },
  {
    id: 7,
    region: 'World',
    kicker: 'ZURICH · FIFA',
    status: 'OFFICIAL',
    headline: 'FIFA names 2031 & 2035 Women’s WC hosts',
    body: 'US, Mexico, Costa Rica & Jamaica win 48-team 2031 finals; UK four nations host 2035.',
    sources: 'FIFA, CNN',
    artKey: 'fifa',
    lat: 47.37, lon: 8.54,
  },
  {
    id: 8,
    region: 'Asia-Pacific',
    kicker: 'SEOUL · CABINET',
    status: 'OFFICIAL',
    headline: 'South Korea taps first female spy chief',
    body: 'President Lee nominates Kang Kum-sil for NIS plus new foreign and unification chiefs.',
    sources: 'Korea Times, Xinhua',
    artKey: 'korea',
    lat: 37.57, lon: 126.98,
  },
  {
    id: 9,
    region: 'Asia-Pacific',
    kicker: 'DELHI · NEPAL',
    status: 'OFFICIAL',
    headline: 'India pledges $1.62B pact to Nepal PM Shah',
    body: 'Modi & Shah launch Ayodhya–Janakpur train, 8 MoUs, 2-port access & planned Nepal IIT.',
    sources: 'MEA, The Hindu',
    artKey: 'nepal',
    lat: 28.61, lon: 77.21,
  },
  {
    id: 10,
    region: 'Middle East',
    kicker: 'GAZA · UNRWA',
    status: 'REPORTED',
    headline: 'UNRWA worker killed; Oxfam warns of toxic Gaza',
    body: 'Jabalia well strike kills UNRWA staffer & 2 others; Oxfam flags toxic markers across >99%.',
    sources: 'Al Jazeera, Oxfam',
    artKey: 'gaza',
    lat: 31.52, lon: 34.48,
  },
  {
    id: 11,
    region: 'Asia-Pacific',
    kicker: 'JAVA · FIRE',
    status: 'CONFIRMED',
    headline: 'Indonesia candy-factory fire toll hits 24+',
    body: 'Rescuers recover 24–26 body bags from unstable PT Fonusa ruins; dozens remain missing.',
    sources: 'CNA, Guardian',
    artKey: 'indonesia',
    lat: -6.20, lon: 106.35,
  },
  {
    id: 12,
    region: 'Middle East',
    kicker: 'TEHRAN · RIGHTS',
    status: 'CONFIRMED',
    headline: 'Iranian singer Ahmadi given 74 lashes',
    body: 'Parastoo Ahmadi and four crew flogged and given 2-year bans over hijab-free concert.',
    sources: 'BBC, CNN',
    artKey: 'iran_singer',
    lat: 35.69, lon: 51.39,
  },
  {
    id: 13,
    region: 'Oceania',
    kicker: 'WELLINGTON · TEST',
    status: 'OFFICIAL',
    headline: 'NZ hold India to dramatic 1st Test draw',
    body: 'Daryl Mitchell (49*) & Glenn Phillips (26) bat out Day 5 after India’s 720/9d; NZ 3rd WTC.',
    sources: 'CNA, ICC',
    artKey: 'cricket',
    lat: -41.29, lon: 174.78,
  },
];

export const BRIEF_STORIES = [
  // Column 1 (14..25)
  { id: 14, region: 'Europe',       place: 'Denmark & Germany', text: 'Hundreds of schools receive coordinated email bomb threats; police deem hoaxes non-credible and keep classes open.', sources: 'Reuters' },
  { id: 15, region: 'Europe',       place: 'Russia–Estonia',    text: 'Moscow accuses Tallinn of nearing "open war" over Ukraine drone claims; Estonia denies; Latvia summons Russian envoy.', sources: 'Guardian, MFA LV', tag: 'CLAIM' },
  { id: 16, region: 'Europe',       place: 'Rome, Italy',       text: 'A 58-year-old student dies on hunger strike at Sapienza University protesting missing campus housing.', sources: 'Fanpage' },
  { id: 17, region: 'Europe',       place: 'France & Germany',  text: 'Anti-austerity, housing and student marches sweep Paris, Berlin, Cologne and Munich alongside Belgium’s strike.', sources: 'Al Jazeera' },
  { id: 18, region: 'Middle East',  place: 'Turkey–Iraq',       text: 'Turkish intelligence says PKK fighters evacuated 14 additional bases in northern Iraq under ongoing disarmament.', sources: 'AFP', tag: 'REPORTED' },
  { id: 19, region: 'Middle East',  place: 'US–Iran',           text: 'President Trump warns strikes on Iran could resume after New Year; Tehran vows "all available means" against US blockade.', sources: 'AA, CBS' },
  { id: 20, region: 'Middle East',  place: 'Israel',            text: 'Designated PM Gadi Eisenkot breaks with Netanyahu, seeing "no direct and immediate threat" from Iran for rushed strikes.', sources: 'AA' },
  { id: 21, region: 'Middle East',  place: 'West Bank',         text: 'Israeli forces raid Al-Amari refugee camp near Ramallah, converting its youth centre for field interrogations.', sources: 'Arab News' },
  { id: 22, region: 'Asia-Pacific', place: 'Tajikistan',        text: 'Dushanbe formally begins withdrawing from the International Criminal Court, the 4th state to leave amid US pressure.', sources: 'Reuters' },
  { id: 23, region: 'Asia-Pacific', place: 'Bangladesh',        text: 'Rival BNP clashes in Jhenaidah hurt 15; banned Awami League factions detonate four crude bombs in Gopalganj, hurting 20.', sources: 'Daily Star, TBS' },
  { id: 24, region: 'Asia-Pacific', place: 'Punjab, Pakistan',  text: 'An overturned stone-laden truck crushes a minitruck, killing seven people and injuring two.', sources: 'Xinhua' },
  { id: 25, region: 'Asia-Pacific', place: 'Asia Power Index',  text: 'Lowy Institute 2026 index puts the US lead over China (78.9 vs 73.6) at its narrowest margin since 2018.', sources: 'Lowy Inst.' },

  // Column 2 (26..36)
  { id: 26, region: 'Asia-Pacific', place: 'Singapore–Australia', text: 'PM Lawrence Wong lands on SIA’s inaugural flight to Western Sydney International Airport for talks with Albanese.', sources: 'CNA, PMO' },
  { id: 27, region: 'World',        place: 'UN Security Council', text: 'Meeting 10277 (chaired by Latvia’s Rinkēvičs) warns Ukraine grid strikes and WFP’s "triple chokepoint" threaten global food.', sources: 'UN, WFP' },
  { id: 28, region: 'Americas',     place: 'CrowdStrike–Zscaler', text: 'CrowdStrike agrees to acquire Zscaler in a $43.9B all-stock cybersecurity mega-merger uniting endpoint and Zero Trust.', sources: 'CrowdStrike' },
  { id: 29, region: 'Americas',     place: 'Wall Street & Markets', text: 'S&P 500 +4.73% (7,237), Nasdaq +6.51% (24,090), Dow +3.01% (49,595); gold +3% to $3,640, Bitcoin +3.6% (~$63k), oil -3–4%.', sources: 'Investing.com' },
  { id: 30, region: 'Americas',     place: 'US AI & Lawsuits',  text: 'Virginia & Oregon AGs sue SpaceX/xAI over Grok image guardrails; US banks tighten controls on internal AI agents.', sources: 'Al Jazeera, Reuters' },
  { id: 31, region: 'Americas',     place: 'US Policy & Chips', text: 'Trump pauses Army detonation of 9,500 lb lead azide in Iowa; Treasury Sec. Bessent presses Nvidia on past China compliance.', sources: 'PBS, CBS' },
  { id: 32, region: 'Africa',       place: 'DR Congo',          text: 'WHO chief Tedros urges peace after fighting near an Ituri hospital traps Ebola staff and patients in a maternity ward 24h+.', sources: 'WHO, Al Jazeera' },
  { id: 33, region: 'Africa',       place: 'Addis Ababa',       text: '5th International Conference on Public Health in Africa (CPHIA 2026) opens on health sovereignty and local manufacturing.', sources: 'Africa CDC' },
  { id: 34, region: 'Africa',       place: 'Lagos, Nigeria',    text: 'President Bola Tinubu formally declares his 2027 re-election bid at a town hall with Ndigbo leaders and traders.', sources: 'State House, Legit' },
  { id: 35, region: 'Oceania',      place: 'Vanuatu & Macquarie', text: 'Deep M6.5 quake shakes Vanuatu region at 02:40 UTC (598 km deep, no tsunami); M5.5 hits west of Macquarie Island (08:01 UTC).', sources: 'USGS' },
  { id: 36, region: 'Oceania',      place: 'NZ & Australia',    text: 'New Zealand becomes the first partner to join NATO’s airworthiness pact (17 states); Australia embeds AI in Quad foreign policy.', sources: 'NATO, DFAT' },
];

export const DATE_CHECK_TEXT =
  'Full day to 23:50 UTC, Mon 23 Nov 2026: every item occurred or was first officially reported on Mon 23 Nov 2026 (Benghazi Merkury sinking confirmed & footage released Mon 23 Nov; Cikande fire toll rose to 24+ Mon 23 Nov). ' +
  'Left out on purpose (earlier days): COP31 Antalya collapse (Sun 22 Nov), Russia 186-drone Dymer strike (Sun 22 Nov), Hong Kong 98.79% poll (Sun 22 Nov), Verstappen Las Vegas GP & Alcaraz ATP Finals (Sun 22 Nov), ' +
  'Don Toliver Manchester evacuation (Sun 22 Nov), DRC–Kenya Oyo summit (Sun 22 Nov), S. Korea Choi Kyo-jin resignation (Sun 22 Nov), El Chapo Isidro raid & BepiColombo Mercury burn (Sat 21 Nov), Bayelsa boat sinking & Bolsonaro ICU (Fri–Sat 20–21 Nov), Florida Learjet crash (1 Nov).';

export function computeRegions() {
  const counts = {};
  for (const r of Object.keys(REGION_META)) counts[r] = 0;
  for (const s of [...HERO_STORIES, ...SECONDARY_STORIES, ...BRIEF_STORIES]) {
    counts[s.region] = (counts[s.region] || 0) + 1;
  }
  return Object.entries(REGION_META).map(([name, meta]) => ({
    name,
    label: meta.label,
    color: meta.color,
    count: counts[name] || 0,
  })).filter(r => r.count > 0);
}
