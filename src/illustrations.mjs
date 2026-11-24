// Original flat-vector editorial illustrations and world atlas generated purely in code.
// Pass 3: taller 100px hero scenes, taller 72px secondary scenes with generous sky/margin around
// every place pill & stamp, and a taller 290x174 all-continent world atlas with 20 non-overlapping pins.

import { REGION_META } from './stories.mjs';

export function renderHeroArt(key) {
  switch (key) {
    case 'nvidia':
      return `<svg viewBox="0 0 266 100" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="nvBg3" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#EAF6EE"/>
            <stop offset="100%" stop-color="#D4EBDC"/>
          </linearGradient>
          <linearGradient id="nvArea3" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#15803D" stop-opacity="0.28"/>
            <stop offset="100%" stop-color="#15803D" stop-opacity="0.03"/>
          </linearGradient>
        </defs>
        <rect width="266" height="100" fill="url(#nvBg3)"/>
        <g stroke="#B8D8C2" stroke-width="0.8" stroke-dasharray="3 3">
          <line x1="8" y1="30" x2="258" y2="30"/>
          <line x1="8" y1="58" x2="258" y2="58"/>
          <line x1="8" y1="86" x2="258" y2="86"/>
        </g>
        <!-- GPU Silicon Die Left -->
        <g transform="translate(14,34)">
          <rect x="6" y="6" width="38" height="38" rx="4" fill="#0F172A" stroke="#15803D" stroke-width="2"/>
          <rect x="13" y="13" width="24" height="24" rx="2.5" fill="#16A34A"/>
          <rect x="19" y="19" width="12" height="12" rx="1.5" fill="#DCFCE7"/>
          <g stroke="#334155" stroke-width="2">
            <line x1="15" y1="0" x2="15" y2="6"/><line x1="25" y1="0" x2="25" y2="6"/><line x1="35" y1="0" x2="35" y2="6"/>
            <line x1="15" y1="44" x2="15" y2="50"/><line x1="25" y1="44" x2="25" y2="50"/><line x1="35" y1="44" x2="35" y2="50"/>
            <line x1="0" y1="15" x2="6" y2="15"/><line x1="0" y1="25" x2="6" y2="25"/><line x1="0" y1="35" x2="6" y2="35"/>
            <line x1="44" y1="15" x2="50" y2="15"/><line x1="44" y1="25" x2="50" y2="25"/><line x1="44" y1="35" x2="50" y2="35"/>
          </g>
        </g>
        <!-- Stock Curve: Dip -> Vertical Breakout -->
        <path d="M76,60 L106,69 L132,79 L148,81 L160,25 L208,20 L252,13 L252,90 L76,90 Z" fill="url(#nvArea3)"/>
        <polyline points="76,60 106,69 132,79 148,81" fill="none" stroke="#991B1B" stroke-width="2.8" stroke-linejoin="round"/>
        <polyline points="148,81 160,25 208,20 252,13" fill="none" stroke="#15803D" stroke-width="4" stroke-linejoin="round"/>
        <circle cx="148" cy="81" r="3.6" fill="#991B1B"/>
        <circle cx="252" cy="13" r="5.2" fill="#15803D" stroke="#FFFFFF" stroke-width="2"/>
        <!-- Bold High-Contrast Callout -->
        <rect x="170" y="37" width="86" height="26" rx="3" fill="#14532D"/>
        <text x="213" y="55" text-anchor="middle" font-family="Noto Sans" font-weight="900" font-size="15.5" fill="#FFFFFF">+31.5%</text>
      </svg>`;

    case 'ukraine':
      return `<svg viewBox="0 0 266 100" xmlns="http://www.w3.org/2000/svg">
        <rect width="174" height="100" fill="#CFE4F4"/>
        <rect x="0" y="61" width="174" height="39" fill="#2B5B84"/>
        <path d="M0,72 Q30,68 60,72 T120,72 T174,72" fill="none" stroke="#60A5FA" stroke-width="1.4" opacity="0.6"/>
        <path d="M0,61 L0,50 L18,50 L22,44 L38,44 L42,61 Z" fill="#C7B89E"/>
        <!-- Listing Corvette Merkury -->
        <g transform="translate(48,34)">
          <g transform="rotate(-14 38 22)">
            <polygon points="0,21 74,18 80,29 8,32" fill="#1E293B"/>
            <rect x="24" y="7" width="23" height="13" fill="#334155"/>
            <line x1="35" y1="0" x2="35" y2="8" stroke="#334155" stroke-width="2.2"/>
          </g>
          <path d="M26,18 L34,-3 L42,12 L53,1 L48,23 Z" fill="#EF4444"/>
          <path d="M31,18 L36,5 L42,16 Z" fill="#FDE047"/>
          <circle cx="48" cy="1" r="9" fill="#475569" opacity="0.5"/>
        </g>
        <!-- Incoming Sea Drones -->
        <g stroke="#FFFFFF" stroke-width="1.5" opacity="0.88">
          <line x1="124" y1="80" x2="152" y2="75"/>
          <line x1="134" y1="88" x2="164" y2="83"/>
        </g>
        <polygon points="120,81 127,78 126,84" fill="#0F172A"/>
        <polygon points="130,89 137,86 136,92" fill="#0F172A"/>
        <!-- Right panel: Russian Refineries Struck -->
        <rect x="174" y="0" width="92" height="100" fill="#172336"/>
        <line x1="174" y1="0" x2="174" y2="100" stroke="#FFFFFF" stroke-width="1.5"/>
        <g transform="translate(187,27)">
          <circle cx="32" cy="8" r="10" fill="#64748B" opacity="0.55"/>
          <rect x="4" y="22" width="11" height="33" fill="#64748B"/>
          <rect x="20" y="14" width="12" height="41" fill="#94A3B8"/>
          <rect x="38" y="26" width="26" height="29" rx="3" fill="#475569"/>
          <path d="M14,22 L22,3 L29,18 L37,7 L39,26 L14,26 Z" fill="#F97316"/>
          <path d="M20,22 L25,11 L31,22 Z" fill="#FDE047"/>
        </g>
        <rect x="180" y="6" width="80" height="17" rx="2.5" fill="#991B1B"/>
        <text x="220" y="18" text-anchor="middle" font-family="Noto Sans" font-weight="900" font-size="8.8" fill="#FFFFFF">2 REFINERIES</text>
      </svg>`;

    case 'nato':
      return `<svg viewBox="0 0 266 100" xmlns="http://www.w3.org/2000/svg">
        <rect width="160" height="100" fill="#153257"/>
        <g fill="none" stroke="#60A5FA" stroke-opacity="0.38" stroke-width="1.2">
          <circle cx="88" cy="56" r="19"/>
          <circle cx="88" cy="56" r="35"/>
          <circle cx="88" cy="56" r="51"/>
        </g>
        <path d="M88,56 L136,27 A51,51 0 0,1 140,76 Z" fill="#38BDF8" fill-opacity="0.26"/>
        <circle cx="129" cy="43" r="3" fill="#FDE047"/>
        <g transform="translate(34,37)">
          <path d="M12,20 L64,20 L78,16 L82,20 L64,24 L12,24 L2,12 L8,12 Z" fill="#F8FAFC"/>
          <path d="M34,20 L46,2 L52,2 L46,20 Z" fill="#E2E8F0"/>
          <path d="M34,24 L46,41 L52,41 L46,24 Z" fill="#CBD5E1"/>
          <ellipse cx="30" cy="14" rx="14" ry="4.5" fill="#38BDF8" stroke="#FFFFFF" stroke-width="1.4"/>
        </g>
        <!-- Right: EU 22nd Sanctions (generous margin above OFFICIAL badge) -->
        <rect x="160" y="0" width="106" height="100" fill="#EEF3FA"/>
        <line x1="160" y1="0" x2="160" y2="100" stroke="#FFFFFF" stroke-width="1.5"/>
        <circle cx="213" cy="33" r="22.5" fill="#003399"/>
        <g fill="#FFCC00">
          ${Array.from({ length: 12 }, (_, i) => {
            const a = (i * Math.PI * 2) / 12 - Math.PI / 2;
            const cx = 213 + Math.cos(a) * 15.5;
            const cy = 33 + Math.sin(a) * 15.5;
            return `<circle cx="${cx.toFixed(1)}" cy="${cy.toFixed(1)}" r="1.9"/>`;
          }).join('')}
        </g>
        <text x="213" y="37.5" text-anchor="middle" font-family="Noto Sans" font-weight="900" font-size="11.5" fill="#FFFFFF">22nd</text>
        <rect x="168" y="60" width="90" height="17" rx="2.5" fill="#991B1B"/>
        <text x="213" y="71.8" text-anchor="middle" font-family="Noto Sans" font-weight="900" font-size="8.8" fill="#FFFFFF">EU SANCTIONS</text>
      </svg>`;

    default:
      return `<svg viewBox="0 0 266 100" xmlns="http://www.w3.org/2000/svg"><rect width="266" height="100" fill="#E2E8F0"/></svg>`;
  }
}

export function renderCardArt(key) {
  switch (key) {
    case 'cyber':
      return `<svg viewBox="0 0 194 72" xmlns="http://www.w3.org/2000/svg">
        <rect width="194" height="72" fill="#1C1936"/>
        <g stroke="#6D28D9" stroke-width="1.2" opacity="0.55">
          <line x1="18" y1="54" x2="58" y2="44"/><line x1="58" y1="44" x2="104" y2="54"/>
        </g>
        <g transform="translate(32,22) scale(0.84)">
          <path d="M26,2 L50,10 L48,30 C46,42 36,48 26,52 C16,48 6,42 4,30 L2,10 Z" fill="#DC2626" stroke="#FFFFFF" stroke-width="2"/>
          <path d="M26,2 L50,10 L48,30 C46,42 36,48 26,52 Z" fill="#2563EB"/>
          <path d="M18,27 L24,33 L35,20" fill="none" stroke="#FFFFFF" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
        </g>
        <rect x="104" y="16" width="82" height="26" rx="3" fill="#FDE047"/>
        <text x="145" y="34" text-anchor="middle" font-family="Noto Sans" font-weight="900" font-size="14.5" fill="#0F172A">$43.9B</text>
      </svg>`;

    case 'uk_myanmar':
      return `<svg viewBox="0 0 194 72" xmlns="http://www.w3.org/2000/svg">
        <rect width="194" height="72" fill="#DCE6F2"/>
        <g fill="#334155">
          <rect x="14" y="29" width="18" height="43"/>
          <polygon points="14,29 23,16 32,29"/>
          <rect x="32" y="46" width="44" height="26" fill="#475569"/>
        </g>
        <circle cx="23" cy="39" r="5" fill="#FEF3C7" stroke="#0F172A" stroke-width="1"/>
        <g transform="translate(74,24) scale(0.95)">
          <line x1="18" y1="4" x2="18" y2="41" stroke="#92400E" stroke-width="2.2"/>
          <line x1="4" y1="12" x2="32" y2="12" stroke="#92400E" stroke-width="2"/>
          <path d="M4,12 L0,24 L8,24 Z" fill="#D97706"/>
          <path d="M32,12 L28,24 L36,24 Z" fill="#D97706"/>
          <rect x="8" y="39" width="20" height="4" rx="1" fill="#78350F"/>
        </g>
        <rect x="112" y="15" width="76" height="24" rx="2.5" fill="#991B1B" stroke="#FFFFFF" stroke-width="1.2"/>
        <text x="150" y="31" text-anchor="middle" font-family="Noto Sans" font-weight="900" font-size="11" fill="#FFFFFF">GENOCIDE</text>
      </svg>`;

    case 'belgium':
      return `<svg viewBox="0 0 194 72" xmlns="http://www.w3.org/2000/svg">
        <rect width="194" height="72" fill="#D9E6F2"/>
        <rect x="0" y="45" width="194" height="27" fill="#475569"/>
        <line x1="6" y1="59" x2="188" y2="59" stroke="#F8FAFC" stroke-width="1.5" stroke-dasharray="8 6"/>
        <rect x="16" y="29" width="9" height="18" fill="#64748B"/>
        <polygon points="10,20 31,20 27,29 14,29" fill="#1E293B"/>
        <rect x="13" y="22.5" width="15" height="3.8" fill="#93C5FD"/>
        <g transform="translate(42,34)">
          <path d="M2,12 L38,12 L46,9 L48,12 L38,15 L2,15 L0,8 L5,8 Z" fill="#F8FAFC" stroke="#0F172A" stroke-width="1"/>
          <path d="M18,12 L25,4 L29,4 L25,12 Z" fill="#CBD5E1"/>
        </g>
        <g transform="translate(98,34)">
          <path d="M2,12 L38,12 L46,9 L48,12 L38,15 L2,15 L0,8 L5,8 Z" fill="#F8FAFC" stroke="#0F172A" stroke-width="1"/>
          <path d="M18,12 L25,4 L29,4 L25,12 Z" fill="#CBD5E1"/>
        </g>
        <line x1="62" y1="32" x2="88" y2="54" stroke="#DC2626" stroke-width="3.4" stroke-linecap="round"/>
        <line x1="88" y1="32" x2="62" y2="54" stroke="#DC2626" stroke-width="3.4" stroke-linecap="round"/>
        <rect x="114" y="7" width="74" height="20" rx="2.5" fill="#991B1B"/>
        <text x="151" y="20.8" text-anchor="middle" font-family="Noto Sans" font-weight="900" font-size="11" fill="#FFFFFF">14h SHUT</text>
      </svg>`;

    case 'spain':
      return `<svg viewBox="0 0 194 72" xmlns="http://www.w3.org/2000/svg">
        <rect width="194" height="72" fill="#F5EFE3"/>
        <rect x="0" y="0" width="194" height="4" fill="#AA151B"/>
        <rect x="0" y="4" width="194" height="2.2" fill="#F1BF00"/>
        <g transform="translate(10,24)">
          <polygon points="0,11 34,1 68,11" fill="#CBD5E1" stroke="#475569" stroke-width="1"/>
          <rect x="6" y="12" width="6" height="28" fill="#E2E8F0" stroke="#64748B" stroke-width="0.9"/>
          <rect x="22" y="12" width="6" height="28" fill="#E2E8F0" stroke="#64748B" stroke-width="0.9"/>
          <rect x="40" y="12" width="6" height="28" fill="#E2E8F0" stroke="#64748B" stroke-width="0.9"/>
          <rect x="56" y="12" width="6" height="28" fill="#E2E8F0" stroke="#64748B" stroke-width="0.9"/>
          <rect x="0" y="40" width="68" height="4.5" fill="#64748B"/>
        </g>
        <g transform="translate(90,11)">
          <rect x="4" y="2" width="88" height="42" rx="2" fill="#FFFFFF" stroke="#94A3B8" stroke-width="1"/>
          <g transform="rotate(-5 48 23)">
            <rect x="7" y="11" width="82" height="22" rx="2.5" fill="#ECFDF5" stroke="#15803D" stroke-width="2.2"/>
            <text x="48" y="26.2" text-anchor="middle" font-family="Noto Sans" font-weight="900" font-size="12.2" fill="#15803D">AMNESTY</text>
          </g>
        </g>
      </svg>`;

    case 'iran_singer':
      return `<svg viewBox="0 0 194 72" xmlns="http://www.w3.org/2000/svg">
        <rect width="194" height="72" fill="#231928"/>
        <polygon points="48,0 14,72 88,72" fill="#FDE68A" opacity="0.16"/>
        <g transform="translate(30,24) scale(0.9)">
          <rect x="7" y="2" width="12" height="19" rx="6" fill="#E2E8F0" stroke="#94A3B8" stroke-width="1"/>
          <line x1="9" y1="8" x2="17" y2="8" stroke="#64748B" stroke-width="1.2"/>
          <line x1="9" y1="13" x2="17" y2="13" stroke="#64748B" stroke-width="1.2"/>
          <path d="M4,14 A9,9 0 0,0 22,14" fill="none" stroke="#CBD5E1" stroke-width="1.6"/>
          <line x1="13" y1="23" x2="13" y2="45" stroke="#CBD5E1" stroke-width="2.2"/>
          <line x1="5" y1="45" x2="21" y2="45" stroke="#CBD5E1" stroke-width="2.4"/>
        </g>
        <g stroke="#FDA4AF" stroke-width="1.8" fill="none">
          <path d="M72,51 L72,32 L85,30 L85,48"/>
          <circle cx="69" cy="51" r="3" fill="#FDA4AF"/>
          <circle cx="82" cy="48" r="3" fill="#FDA4AF"/>
          <line x1="64" y1="30" x2="90" y2="54" stroke="#EF4444" stroke-width="2.6"/>
        </g>
        <rect x="104" y="14" width="82" height="25" rx="3" fill="#9F1239" stroke="#FDA4AF" stroke-width="1.2"/>
        <text x="145" y="30.5" text-anchor="middle" font-family="Noto Sans" font-weight="900" font-size="11.8" fill="#FFFFFF">74 LASHES</text>
      </svg>`;

    case 'korea':
      return `<svg viewBox="0 0 194 72" xmlns="http://www.w3.org/2000/svg">
        <rect width="194" height="72" fill="#E8F0FA"/>
        <path d="M0,51 Q44,28 94,45 T194,36 L194,72 L0,72 Z" fill="#CBD9EC"/>
        <g transform="translate(8,31)">
          <path d="M0,15 Q42,4 84,15 L76,19 L8,19 Z" fill="#1E3A8A"/>
          <rect x="12" y="19" width="60" height="19" fill="#F8FAFC" stroke="#94A3B8" stroke-width="0.9"/>
          <g fill="#334155">
            <rect x="18" y="24" width="6" height="14"/><rect x="32" y="24" width="6" height="14"/>
            <rect x="46" y="24" width="6" height="14"/><rect x="60" y="24" width="6" height="14"/>
          </g>
        </g>
        <circle cx="144" cy="44" r="15.5" fill="#FFFFFF" stroke="#94A3B8" stroke-width="1"/>
        <path d="M132,44 A12,12 0 0,1 156,44 A6,6 0 0,1 144,44 A6,6 0 0,0 132,44 Z" fill="#C60C30"/>
        <path d="M156,44 A12,12 0 0,1 132,44 A6,6 0 0,1 144,44 A6,6 0 0,0 156,44 Z" fill="#003478"/>
        <rect x="102" y="6" width="86" height="18" rx="2.5" fill="#0F172A"/>
        <text x="145" y="18.2" text-anchor="middle" font-family="Noto Sans" font-weight="900" font-size="9.4" fill="#FDE047">1st FEMALE NIS</text>
      </svg>`;

    case 'nepal':
      return `<svg viewBox="0 0 194 72" xmlns="http://www.w3.org/2000/svg">
        <rect width="194" height="72" fill="#FBF2E6"/>
        <polygon points="0,52 38,18 76,52" fill="#94A3B8"/>
        <polygon points="26,29 38,18 50,29 42,27 38,31 33,27" fill="#FFFFFF"/>
        <polygon points="48,52 96,14 144,52" fill="#64748B"/>
        <polygon points="81,26 96,14 111,26 101,24 96,29 90,24" fill="#FFFFFF"/>
        <polygon points="120,52 160,22 194,52" fill="#94A3B8"/>
        <rect x="0" y="54" width="194" height="4" fill="#334155"/>
        <rect x="28" y="58" width="8" height="14" fill="#475569"/>
        <rect x="92" y="58" width="8" height="14" fill="#475569"/>
        <rect x="156" y="58" width="8" height="14" fill="#475569"/>
        <g transform="translate(20,38)">
          <rect x="0" y="2" width="90" height="14" rx="3" fill="#1E40AF"/>
          <rect x="0" y="12" width="90" height="3" fill="#F97316"/>
          <rect x="8" y="5" width="12" height="5" rx="1" fill="#DBEAFE"/>
          <rect x="26" y="5" width="12" height="5" rx="1" fill="#DBEAFE"/>
          <rect x="44" y="5" width="12" height="5" rx="1" fill="#DBEAFE"/>
          <rect x="62" y="5" width="20" height="5" rx="1" fill="#FDE047"/>
        </g>
        <rect x="116" y="7" width="72" height="18" rx="2.5" fill="#9A3412"/>
        <text x="152" y="19.5" text-anchor="middle" font-family="Noto Sans" font-weight="900" font-size="9.6" fill="#FFFFFF">RAIL &amp; AID</text>
      </svg>`;

    case 'indonesia_plot':
      return `<svg viewBox="0 0 194 72" xmlns="http://www.w3.org/2000/svg">
        <rect width="194" height="72" fill="#F3EFEA"/>
        <rect x="0" y="0" width="194" height="4.5" fill="#CE1126"/>
        <g transform="translate(18,24) scale(0.86)">
          <path d="M22,2 L42,8 L40,28 C38,38 30,43 22,46 C14,43 6,38 4,28 L2,8 Z" fill="#1E293B" stroke="#D97706" stroke-width="2.2"/>
          <polygon points="22,12 25,20 33,20 27,25 29,33 22,28 15,33 17,25 11,20 19,20" fill="#F59E0B"/>
        </g>
        <g transform="translate(70,31)">
          <path d="M0,12 L6,4 L12,20 L18,2 L24,22 L30,6 L36,12" fill="none" stroke="#0F766E" stroke-width="2.2" stroke-linejoin="round"/>
          <line x1="4" y1="1" x2="34" y2="24" stroke="#DC2626" stroke-width="2.6"/>
        </g>
        <rect x="112" y="15" width="76" height="24" rx="2.5" fill="#991B1B"/>
        <text x="150" y="30.8" text-anchor="middle" font-family="Noto Sans" font-weight="900" font-size="10.6" fill="#FFFFFF">6 SUSPECTS</text>
      </svg>`;

    case 'fifa':
      return `<svg viewBox="0 0 194 72" xmlns="http://www.w3.org/2000/svg">
        <rect width="194" height="72" fill="#173254"/>
        <ellipse cx="97" cy="74" rx="112" ry="25" fill="#15803D"/>
        <ellipse cx="97" cy="74" rx="56" ry="13" fill="none" stroke="#BBF7D0" stroke-width="1.2"/>
        <g transform="translate(83,22) scale(0.95)">
          <path d="M6,4 L22,4 L20,22 C19,28 16,31 14,32 C12,31 9,28 8,22 Z" fill="#F59E0B" stroke="#FEF08A" stroke-width="1.2"/>
          <rect x="11" y="31" width="6" height="7" fill="#D97706"/>
          <rect x="6" y="38" width="16" height="5" rx="1" fill="#92400E"/>
        </g>
        <!-- Clean sky gap above 2031 & 2035 banners below 12 ZURICH · FIFA -->
        <rect x="8" y="25" width="66" height="27" rx="3" fill="#0F294A" stroke="#60A5FA" stroke-width="1.2"/>
        <text x="41" y="40.5" text-anchor="middle" font-family="Noto Sans" font-weight="900" font-size="13" fill="#FFFFFF">2031</text>
        <text x="41" y="48.5" text-anchor="middle" font-family="Noto Sans" font-weight="800" font-size="6.5" fill="#93C5FD">4 AMERICAS</text>
        <rect x="120" y="25" width="66" height="27" rx="3" fill="#0F3D3E" stroke="#5EEAD4" stroke-width="1.2"/>
        <text x="153" y="40.5" text-anchor="middle" font-family="Noto Sans" font-weight="900" font-size="13" fill="#FFFFFF">2035</text>
        <text x="153" y="48.5" text-anchor="middle" font-family="Noto Sans" font-weight="800" font-size="6.5" fill="#99F6E4">UK 4 NATIONS</text>
      </svg>`;

    case 'nigeria':
      return `<svg viewBox="0 0 194 72" xmlns="http://www.w3.org/2000/svg">
        <rect width="194" height="72" fill="#E8F4EC"/>
        <rect x="0" y="0" width="17" height="72" fill="#008751"/>
        <rect x="17" y="0" width="17" height="72" fill="#FFFFFF"/>
        <rect x="34" y="0" width="17" height="72" fill="#008751"/>
        <g fill="#1E293B" opacity="0.2">
          <rect x="58" y="32" width="13" height="40"/><rect x="75" y="21" width="15" height="51"/>
          <rect x="94" y="38" width="13" height="34"/>
        </g>
        <g transform="translate(64,29) scale(0.95)">
          <rect x="4" y="14" width="32" height="27" rx="2" fill="#0F172A"/>
          <rect x="0" y="10" width="40" height="5" rx="1" fill="#008751"/>
          <line x1="14" y1="2" x2="14" y2="10" stroke="#334155" stroke-width="2"/>
          <circle cx="14" cy="2" r="2.5" fill="#334155"/>
          <line x1="26" y1="2" x2="26" y2="10" stroke="#334155" stroke-width="2"/>
          <circle cx="26" cy="2" r="2.5" fill="#334155"/>
        </g>
        <rect x="112" y="15" width="76" height="24" rx="3" fill="#008751" stroke="#FFFFFF" stroke-width="1.2"/>
        <text x="150" y="31" text-anchor="middle" font-family="Noto Sans" font-weight="900" font-size="12" fill="#FFFFFF">2027 BID</text>
      </svg>`;

    default:
      return `<svg viewBox="0 0 194 72" xmlns="http://www.w3.org/2000/svg"><rect width="194" height="72" fill="#E2E8F0"/></svg>`;
  }
}

// Clean equirectangular world atlas (290x172) with 20 non-overlapping pins across all continents
function project(lat, lon) {
  const x = 6 + ((lon + 180) / 360) * 278;
  const y = 4 + ((82 - lat) / 140) * 164;
  return [x, y];
}

const PIN_OVERRIDES = {
  1:  [38.0, -122.0],
  4:  [26.0, -93.0],
  5:  [59.0, -10.0],
  6:  [55.5, 8.5],
  7:  [39.0, -11.5],
  12: [44.5, 11.5],
  3:  [56.5, 29.0],
  2:  [30.0, 21.0],
  8:  [35.5, 54.0],
  13: [7.0, 3.0],
  10: [24.0, 77.5],
  11: [-7.5, 107.0],
  9:  [36.5, 131.0],
  21: [8.0, 40.5],
  24: [7.5, -72.5],
  26: [19.4, -155.3],
  27: [42.0, 69.5],
  30: [42.0, 112.0],
  32: [-42.5, 173.0],
  33: [-16.5, 167.5],
};

export function renderWorldMap(stories) {
  const land = [
    // North & Central America
    'M 16,23 L 38,15 L 62,19 L 82,28 L 98,35 L 94,47 L 82,57 L 74,67 L 64,74 L 60,84 L 53,81 L 48,69 L 39,60 L 32,45 L 18,37 L 11,30 Z',
    // Greenland
    'M 99,8 L 125,7 L 131,18 L 117,31 L 104,25 Z',
    // Cuba
    'M 67,72 L 77,73 L 77,76 L 67,75 Z',
    // South America
    'M 71,85 L 87,84 L 104,97 L 111,108 L 103,128 L 90,152 L 84,161 L 80,155 L 80,133 L 73,112 L 67,97 Z',
    // UK & Ireland
    'M 137,30 L 142,30 L 143,41 L 136,41 Z',
    // Iceland
    'M 126,19 L 133,19 L 132,24 L 125,23 Z',
    // Eurasia
    'M 134,51 L 140,43 L 147,41 L 149,23 L 161,15 L 179,18 L 209,15 L 244,19 L 274,24 L 271,37 L 255,47 L 249,55 L 252,64 L 241,73 L 232,85 L 225,75 L 216,88 L 209,88 L 202,75 L 193,71 L 186,78 L 177,75 L 173,65 L 164,60 L 156,55 L 152,61 L 149,55 L 142,57 L 134,55 Z',
    // Africa
    'M 136,60 L 152,57 L 169,63 L 179,73 L 187,85 L 180,105 L 171,128 L 159,140 L 151,132 L 148,108 L 140,95 L 131,85 L 131,69 Z',
    // Madagascar
    'M 183,115 L 188,115 L 186,129 L 181,127 Z',
    // Japan
    'M 255,47 L 260,43 L 262,54 L 256,60 Z',
    // Philippines
    'M 241,82 L 247,83 L 247,93 L 241,92 Z',
    // Indonesia
    'M 225,95 L 241,99 L 256,100 L 255,106 L 237,105 L 223,98 Z',
    // Australia
    'M 232,114 L 255,111 L 267,125 L 262,141 L 246,143 L 232,133 Z',
    // New Zealand
    'M 273,138 L 280,136 L 282,150 L 274,153 Z',
  ];

  const [ux, uy] = project(49.0, 32.0);
  const [bx, by] = project(30.0, 21.0);

  const pins = stories.map((s) => {
    const [lat, lon] = PIN_OVERRIDES[s.id] || [s.lat, s.lon];
    const [x, y] = project(lat, lon);
    const col = REGION_META[s.region]?.color || '#1E293B';
    const isHero = s.id <= 3;
    const isBrief = s.id > 13;
    const r = isHero ? 7.6 : isBrief ? 5.8 : 6.6;
    const fs = isHero ? 8.2 : isBrief ? 6.6 : 7.4;
    return `<g>
      <circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${r}" fill="${col}" stroke="#FFFFFF" stroke-width="${isBrief ? 1.1 : 1.35}"/>
      <text x="${x.toFixed(1)}" y="${(y + fs * 0.34).toFixed(1)}" text-anchor="middle" font-family="Noto Sans" font-weight="900" font-size="${fs}" fill="#FFFFFF">${s.id}</text>
    </g>`;
  }).join('');

  return `<svg viewBox="0 0 290 172" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">
    <rect width="290" height="172" rx="3" fill="#E4EFF7" stroke="#C5D4E2" stroke-width="1"/>
    <g stroke="#CEE0ED" stroke-width="0.6">
      <line x1="0" y1="43" x2="290" y2="43"/>
      <line x1="0" y1="99" x2="290" y2="99" stroke-dasharray="3 3"/>
      <line x1="0" y1="140" x2="290" y2="140"/>
      <line x1="76" y1="0" x2="76" y2="172"/>
      <line x1="145" y1="0" x2="145" y2="172"/>
      <line x1="214" y1="0" x2="214" y2="172"/>
    </g>
    <g fill="#DBD1BE" stroke="#B2A58D" stroke-width="0.7" stroke-linejoin="round">
      ${land.map((d) => `<path d="${d}"/>`).join('')}
    </g>
    <path d="M${ux.toFixed(1)},${uy.toFixed(1)} Q${((ux + bx) / 2 - 4).toFixed(1)},${((uy + by) / 2 + 4).toFixed(1)} ${bx.toFixed(1)},${by.toFixed(1)}" fill="none" stroke="#DC2626" stroke-width="1.5" stroke-dasharray="2.5 2"/>
    ${pins}
  </svg>`;
}
