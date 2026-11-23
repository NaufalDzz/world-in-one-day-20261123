// Original editorial vector illustrations and world atlas generated purely in code.
// Pass 2 upgrade: full-frame pictorial editorial mini-scenes across all 13 illustrated stories + precision coastlines.

import { REGION_META } from './stories.mjs';

export function renderHeroArt(key) {
  switch (key) {
    case 'nvidia':
      return `<svg viewBox="0 0 320 114" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="nvBg" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#EEF7F0"/>
            <stop offset="100%" stop-color="#DAEBE0"/>
          </linearGradient>
          <linearGradient id="nvFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#16A34A" stop-opacity="0.30"/>
            <stop offset="100%" stop-color="#16A34A" stop-opacity="0.03"/>
          </linearGradient>
        </defs>
        <rect width="320" height="114" fill="url(#nvBg)"/>
        <g stroke="#B8D4C0" stroke-width="0.8" stroke-dasharray="3 3">
          <line x1="12" y1="26" x2="308" y2="26"/>
          <line x1="12" y1="50" x2="308" y2="50"/>
          <line x1="12" y1="74" x2="308" y2="74"/>
          <line x1="12" y1="96" x2="308" y2="96"/>
        </g>
        <!-- GPU Silicon Die Left -->
        <g transform="translate(14,28)">
          <rect x="6" y="6" width="44" height="44" rx="5" fill="#0F172A" stroke="#15803D" stroke-width="2"/>
          <rect x="14" y="14" width="28" height="28" rx="3" fill="#16A34A"/>
          <rect x="20" y="20" width="16" height="16" rx="2" fill="#DCFCE7"/>
          <g stroke="#334155" stroke-width="2">
            <line x1="16" y1="0" x2="16" y2="6"/><line x1="28" y1="0" x2="28" y2="6"/><line x1="40" y1="0" x2="40" y2="6"/>
            <line x1="16" y1="50" x2="16" y2="56"/><line x1="28" y1="50" x2="28" y2="56"/><line x1="40" y1="50" x2="40" y2="56"/>
            <line x1="0" y1="16" x2="6" y2="16"/><line x1="0" y1="28" x2="6" y2="28"/><line x1="0" y1="40" x2="6" y2="40"/>
            <line x1="50" y1="16" x2="56" y2="16"/><line x1="50" y1="28" x2="56" y2="28"/><line x1="50" y1="40" x2="56" y2="40"/>
          </g>
          <text x="28" y="68" text-anchor="middle" font-family="Noto Sans" font-weight="900" font-size="8.5" fill="#0F172A">NVDA</text>
        </g>
        <!-- Area & Line Chart: clean separation so green spike never collides with boxes -->
        <path d="M80,64 L110,73 L138,83 L164,87 L186,89 L196,35 L242,30 L300,22 L300,96 L80,96 Z" fill="url(#nvFill)"/>
        <polyline points="80,64 110,73 138,83 164,87 186,89" fill="none" stroke="#991B1B" stroke-width="2.6" stroke-linejoin="round"/>
        <polyline points="186,89 196,35 242,30 300,22" fill="none" stroke="#15803D" stroke-width="3.6" stroke-linejoin="round"/>
        <circle cx="186" cy="89" r="3.4" fill="#991B1B"/>
        <circle cx="300" cy="22" r="5" fill="#15803D" stroke="#FFFFFF" stroke-width="2"/>
        <line x1="186" y1="24" x2="186" y2="96" stroke="#15803D" stroke-width="1.2" stroke-dasharray="3 2"/>
        <text x="132" y="107" text-anchor="middle" font-family="Noto Sans" font-weight="700" font-size="7.4" fill="#7F1D1D">NOV 12 EXIT DIP</text>
        <text x="250" y="107" text-anchor="middle" font-family="Noto Sans" font-weight="800" font-size="7.4" fill="#14532D">MON 23 REINSTATEMENT</text>
        <!-- Top Callouts (cleanly above curve) -->
        <rect x="82" y="6" width="96" height="22" rx="3" fill="#14532D"/>
        <text x="130" y="21.5" text-anchor="middle" font-family="Noto Sans" font-weight="900" font-size="14" fill="#FFFFFF">+31.48%</text>
        <rect x="184" y="6" width="124" height="15" rx="2.5" fill="#0F172A"/>
        <text x="246" y="16.5" text-anchor="middle" font-family="Noto Sans" font-weight="800" font-size="8.2" fill="#FDE047">BOARD UNANIMOUS</text>
        <!-- Bottom-right close box (cleanly below green line at y=55..88) -->
        <rect x="204" y="53" width="104" height="33" rx="3" fill="#FFFFFF" stroke="#15803D" stroke-width="1.5"/>
        <text x="256" y="67.5" text-anchor="middle" font-family="Noto Sans" font-weight="900" font-size="11.5" fill="#14532D">$165.05 CLOSE</text>
        <text x="256" y="80" text-anchor="middle" font-family="Noto Sans" font-weight="800" font-size="8.4" fill="#15803D">~$1T VALUE ADDED</text>
      </svg>`;

    case 'ukraine':
      return `<svg viewBox="0 0 320 114" xmlns="http://www.w3.org/2000/svg">
        <rect width="320" height="114" fill="#D4E6F4"/>
        <!-- Regional sea labels -->
        <text x="168" y="39" font-family="Noto Sans" font-style="italic" font-weight="700" font-size="6.2" fill="#446D90">BLACK SEA</text>
        <text x="148" y="74" font-family="Noto Sans" font-style="italic" font-weight="700" font-size="6.1" fill="#446D90">MEDITERRANEAN</text>
        <!-- Europe / Ukraine coast -->
        <path d="M0,0 L222,0 L222,30 L196,33 L172,24 L144,32 L116,25 L92,34 L66,24 L34,28 L0,22 Z" fill="#E6DEC8" stroke="#9C927B" stroke-width="1"/>
        <!-- Turkey -->
        <path d="M138,44 L222,42 L222,62 L178,64 L142,57 Z" fill="#E6DEC8" stroke="#9C927B" stroke-width="1"/>
        <!-- Libya coast -->
        <path d="M0,78 L50,76 L78,86 L116,88 L140,80 L192,84 L222,82 L222,114 L0,114 Z" fill="#F0E5C9" stroke="#9C927B" stroke-width="1"/>
        <!-- Long-range sea-drone arc Ukraine -> Benghazi -->
        <path d="M148,16 C132,42 114,62 96,80" fill="none" stroke="#B91C1C" stroke-width="2.4" stroke-dasharray="4 3"/>
        <circle cx="148" cy="16" r="3.8" fill="#1D4ED8" stroke="#FFFFFF" stroke-width="1.2"/>
        <text x="155" y="16" font-family="Noto Sans" font-weight="800" font-size="8" fill="#0F172A">UKRAINE</text>
        <!-- 2,400 km callout -->
        <rect x="6" y="36" width="72" height="19" rx="3" fill="#991B1B"/>
        <text x="42" y="49" text-anchor="middle" font-family="Noto Sans" font-weight="900" font-size="10.5" fill="#FFFFFF">2,400 KM</text>
        <text x="42" y="63" text-anchor="middle" font-family="Noto Sans" font-weight="800" font-size="7.2" fill="#0F172A">7 SEA DRONES</text>
        <!-- 3 tiny incoming drone wakes -->
        <g stroke="#FFFFFF" stroke-width="1.2" opacity="0.85">
          <line x1="126" y1="68" x2="136" y2="62"/>
          <line x1="130" y1="74" x2="142" y2="70"/>
        </g>
        <polygon points="124,69 128,67 127,71" fill="#0F172A"/>
        <polygon points="128,75 132,73 131,77" fill="#0F172A"/>
        <!-- Listing corvette Merkury + blast -->
        <g transform="translate(82,66)">
          <g transform="rotate(-14 20 14)">
            <polygon points="0,12 36,10 39,17 4,19" fill="#1E293B"/>
            <rect x="13" y="4" width="12" height="7" fill="#334155"/>
            <line x1="19" y1="0" x2="19" y2="5" stroke="#334155" stroke-width="1.5"/>
          </g>
          <path d="M13,8 L18,-4 L23,5 L29,-1 L26,10 Z" fill="#EF4444"/>
          <path d="M16,8 L19,0 L22,7 Z" fill="#FDE047"/>
        </g>
        <text x="108" y="100" text-anchor="middle" font-family="Noto Sans" font-weight="900" font-size="9" fill="#7F1D1D">BENGHAZI, LIBYA</text>
        <text x="108" y="110" text-anchor="middle" font-family="Noto Sans" font-weight="700" font-size="7.4" fill="#334155">MERKURY SUNK · ANGARA HIT</text>
        <!-- Right inset: 2 Russian oil refineries hit -->
        <rect x="222" y="0" width="98" height="114" fill="#1B263B"/>
        <rect x="222" y="0" width="98" height="19" fill="#991B1B"/>
        <text x="271" y="13" text-anchor="middle" font-family="Noto Sans" font-weight="900" font-size="8.4" fill="#FFFFFF">2 REFINERIES HIT</text>
        <g transform="translate(232,28)">
          <circle cx="30" cy="10" r="10" fill="#475569" opacity="0.65"/>
          <circle cx="42" cy="6" r="8" fill="#64748B" opacity="0.5"/>
          <rect x="6" y="25" width="11" height="27" fill="#64748B"/>
          <rect x="22" y="18" width="12" height="34" fill="#94A3B8"/>
          <rect x="42" y="29" width="28" height="23" rx="3" fill="#475569"/>
          <path d="M16,20 L24,5 L30,17 L37,8 L38,24 L16,24 Z" fill="#F97316"/>
          <path d="M21,20 L26,10 L32,20 Z" fill="#FDE047"/>
          <circle cx="56" cy="24" r="8" fill="#EF4444" opacity="0.9"/>
          <circle cx="56" cy="24" r="4" fill="#FDE047"/>
        </g>
        <text x="271" y="93" text-anchor="middle" font-family="Noto Sans" font-weight="800" font-size="8.5" fill="#F8FAFC">PERM (1 KILLED)</text>
        <text x="271" y="105" text-anchor="middle" font-family="Noto Sans" font-weight="700" font-size="7.7" fill="#CBD5E1">NOVOSHAKHTINSK</text>
      </svg>`;

    case 'nato':
      return `<svg viewBox="0 0 320 114" xmlns="http://www.w3.org/2000/svg">
        <rect width="320" height="114" fill="#E9EFF7"/>
        <!-- Left half: NATO AWACS radar -->
        <rect x="0" y="0" width="188" height="114" fill="#153257"/>
        <g fill="none" stroke="#60A5FA" stroke-opacity="0.4" stroke-width="1.2">
          <circle cx="96" cy="58" r="21"/>
          <circle cx="96" cy="58" r="37"/>
          <circle cx="96" cy="58" r="53"/>
        </g>
        <path d="M96,58 L142,26 A53,53 0 0,1 148,76 Z" fill="#38BDF8" fill-opacity="0.25"/>
        <!-- Radar blips -->
        <circle cx="136" cy="44" r="2.6" fill="#FDE047"/>
        <circle cx="141" cy="60" r="2.2" fill="#FB923C"/>
        <!-- AWACS aircraft -->
        <g transform="translate(46,38)">
          <path d="M12,24 L68,24 L82,20 L86,24 L68,28 L12,28 L2,16 L8,16 Z" fill="#F8FAFC"/>
          <path d="M36,24 L48,4 L54,4 L48,24 Z" fill="#E2E8F0"/>
          <path d="M36,28 L48,46 L54,46 L48,28 Z" fill="#CBD5E1"/>
          <ellipse cx="32" cy="18" rx="14" ry="4.5" fill="#38BDF8" stroke="#FFFFFF" stroke-width="1.4"/>
        </g>
        <rect x="8" y="7" width="114" height="17" rx="2.5" fill="#0284C7"/>
        <text x="65" y="18.5" text-anchor="middle" font-family="Noto Sans" font-weight="900" font-size="8.8" fill="#FFFFFF">NATO AWACS DEPLOY</text>
        <text x="94" y="104" text-anchor="middle" font-family="Noto Sans" font-weight="800" font-size="8.4" fill="#E0F2FE">POLAND EASTERN FLANK</text>
        <!-- Right half: EU 22nd Sanctions -->
        <rect x="188" y="0" width="132" height="114" fill="#EFF4FB"/>
        <line x1="188" y1="0" x2="188" y2="114" stroke="#CBD5E1" stroke-width="1.5"/>
        <circle cx="254" cy="44" r="26" fill="#003399"/>
        <g fill="#FFCC00">
          ${Array.from({ length: 12 }, (_, i) => {
            const a = (i * Math.PI * 2) / 12 - Math.PI / 2;
            const cx = 254 + Math.cos(a) * 17.5;
            const cy = 44 + Math.sin(a) * 17.5;
            return `<circle cx="${cx.toFixed(1)}" cy="${cy.toFixed(1)}" r="2.1"/>`;
          }).join('')}
        </g>
        <text x="254" y="48.5" text-anchor="middle" font-family="Noto Sans" font-weight="900" font-size="11.5" fill="#FFFFFF">22nd</text>
        <rect x="198" y="77" width="112" height="16" rx="2.5" fill="#991B1B"/>
        <text x="254" y="88" text-anchor="middle" font-family="Noto Sans" font-weight="900" font-size="8.5" fill="#FFFFFF">EU SANCTIONS PKG</text>
        <text x="254" y="105" text-anchor="middle" font-family="Noto Sans" font-weight="700" font-size="7.8" fill="#1E293B">CRYPTO · BANKS · VISAS</text>
      </svg>`;

    default:
      return `<svg viewBox="0 0 320 114" xmlns="http://www.w3.org/2000/svg"><rect width="320" height="114" fill="#E2E8F0"/></svg>`;
  }
}

export function renderCardArt(key) {
  switch (key) {
    case 'belgium':
      // Full-frame Brussels tarmac + ATC tower + 3 grounded jets + red stop X + clean corner badge
      return `<svg viewBox="0 0 192 60" xmlns="http://www.w3.org/2000/svg">
        <rect width="192" height="60" fill="#DDE7F2"/>
        <!-- Horizon & Terminal -->
        <rect x="0" y="34" width="192" height="26" fill="#475569"/>
        <rect x="0" y="44" width="192" height="16" fill="#334155"/>
        <line x1="6" y1="52" x2="186" y2="52" stroke="#F8FAFC" stroke-width="1.4" stroke-dasharray="8 6"/>
        <!-- ATC Tower -->
        <rect x="14" y="18" width="9" height="18" fill="#64748B"/>
        <polygon points="8,10 29,10 25,18 12,18" fill="#1E293B"/>
        <rect x="11" y="12" width="15" height="4" fill="#93C5FD"/>
        <!-- 3 Grounded passenger jets parked in row -->
        <g transform="translate(38,24)">
          <path d="M2,12 L34,12 L42,9 L44,12 L34,15 L2,15 L0,9 L4,9 Z" fill="#F8FAFC" stroke="#0F172A" stroke-width="0.9"/>
          <path d="M16,12 L22,5 L26,5 L22,12 Z" fill="#CBD5E1"/>
        </g>
        <g transform="translate(88,24)">
          <path d="M2,12 L34,12 L42,9 L44,12 L34,15 L2,15 L0,9 L4,9 Z" fill="#F8FAFC" stroke="#0F172A" stroke-width="0.9"/>
          <path d="M16,12 L22,5 L26,5 L22,12 Z" fill="#CBD5E1"/>
        </g>
        <g transform="translate(138,24)">
          <path d="M2,12 L34,12 L42,9 L44,12 L34,15 L2,15 L0,9 L4,9 Z" fill="#F8FAFC" stroke="#0F172A" stroke-width="0.9"/>
          <path d="M16,12 L22,5 L26,5 L22,12 Z" fill="#CBD5E1"/>
        </g>
        <!-- Red prohibition cross over middle jet -->
        <line x1="96" y1="22" x2="124" y2="44" stroke="#DC2626" stroke-width="3.2" stroke-linecap="round"/>
        <line x1="124" y1="22" x2="96" y2="44" stroke="#DC2626" stroke-width="3.2" stroke-linecap="round"/>
        <!-- Compact top-right stat pill -->
        <rect x="112" y="4" width="76" height="15" rx="2.5" fill="#991B1B"/>
        <text x="150" y="14.5" text-anchor="middle" font-family="Noto Sans" font-weight="900" font-size="9" fill="#FFFFFF">14h SHUTDOWN</text>
      </svg>`;

    case 'spain':
      // Full-frame Supreme Court neoclassical facade + golden scales + green AMNESTY stamp on case file
      return `<svg viewBox="0 0 192 60" xmlns="http://www.w3.org/2000/svg">
        <rect width="192" height="60" fill="#F5EFE3"/>
        <rect x="0" y="0" width="192" height="4" fill="#AA151B"/>
        <rect x="0" y="4" width="192" height="2.5" fill="#F1BF00"/>
        <!-- Courthouse portico left -->
        <g transform="translate(10,12)">
          <polygon points="0,12 36,2 72,12" fill="#CBD5E1" stroke="#475569" stroke-width="1"/>
          <rect x="6" y="13" width="6" height="28" fill="#E2E8F0" stroke="#64748B" stroke-width="0.8"/>
          <rect x="22" y="13" width="6" height="28" fill="#E2E8F0" stroke="#64748B" stroke-width="0.8"/>
          <rect x="44" y="13" width="6" height="28" fill="#E2E8F0" stroke="#64748B" stroke-width="0.8"/>
          <rect x="60" y="13" width="6" height="28" fill="#E2E8F0" stroke="#64748B" stroke-width="0.8"/>
          <rect x="0" y="41" width="72" height="5" fill="#64748B"/>
          <!-- Scales inside -->
          <line x1="36" y1="16" x2="36" y2="38" stroke="#92400E" stroke-width="1.8"/>
          <line x1="27" y1="21" x2="45" y2="21" stroke="#92400E" stroke-width="1.6"/>
          <path d="M27,21 L24,29 L30,29 Z" fill="#D97706"/>
          <path d="M45,21 L42,29 L48,29 Z" fill="#D97706"/>
        </g>
        <!-- Case file + tilted green AMNESTY stamp right -->
        <g transform="translate(94,11)">
          <rect x="4" y="2" width="84" height="44" rx="2" fill="#FFFFFF" stroke="#94A3B8" stroke-width="1"/>
          <line x1="12" y1="12" x2="62" y2="12" stroke="#CBD5E1" stroke-width="2"/>
          <line x1="12" y1="19" x2="78" y2="19" stroke="#E2E8F0" stroke-width="1.8"/>
          <line x1="12" y1="36" x2="66" y2="36" stroke="#E2E8F0" stroke-width="1.8"/>
          <g transform="rotate(-7 46 25)">
            <rect x="8" y="15" width="76" height="20" rx="2.5" fill="#ECFDF5" stroke="#15803D" stroke-width="2"/>
            <text x="46" y="29" text-anchor="middle" font-family="Noto Sans" font-weight="900" font-size="11" fill="#15803D">AMNESTY</text>
          </g>
        </g>
      </svg>`;

    case 'treasury':
      // Full-frame shadow-banking flow diagram (IRAN -> UAE / TR / HK) cut by red OFAC sanctions + $14.7B pill
      return `<svg viewBox="0 0 192 60" xmlns="http://www.w3.org/2000/svg">
        <rect width="192" height="60" fill="#F4EDE6"/>
        <!-- Subtle world grid -->
        <g stroke="#E2D6C8" stroke-width="0.7">
          <line x1="0" y1="20" x2="192" y2="20"/><line x1="0" y1="40" x2="192" y2="40"/>
          <line x1="64" y1="0" x2="64" y2="60"/><line x1="128" y1="0" x2="128" y2="60"/>
        </g>
        <!-- Money-flow arcs -->
        <path d="M28,36 Q56,14 84,22" fill="none" stroke="#9A3412" stroke-width="2" stroke-dasharray="3 2"/>
        <path d="M28,36 Q60,52 94,45" fill="none" stroke="#9A3412" stroke-width="2" stroke-dasharray="3 2"/>
        <path d="M84,22 Q122,20 156,42" fill="none" stroke="#9A3412" stroke-width="2" stroke-dasharray="3 2"/>
        <!-- Hub nodes -->
        <circle cx="28" cy="36" r="12" fill="#7F1D1D"/><text x="28" y="39" text-anchor="middle" font-family="Noto Sans" font-weight="900" font-size="7.2" fill="#FFF">IRAN</text>
        <circle cx="84" cy="22" r="9.5" fill="#1E293B"/><text x="84" y="25" text-anchor="middle" font-family="Noto Sans" font-weight="800" font-size="6.8" fill="#FFF">UAE</text>
        <circle cx="94" cy="45" r="9.5" fill="#1E293B"/><text x="94" y="48" text-anchor="middle" font-family="Noto Sans" font-weight="800" font-size="6.8" fill="#FFF">TR</text>
        <circle cx="156" cy="42" r="9.5" fill="#1E293B"/><text x="156" y="45" text-anchor="middle" font-family="Noto Sans" font-weight="800" font-size="6.8" fill="#FFF">HK</text>
        <!-- Bold OFAC sanction cut -->
        <line x1="56" y1="14" x2="66" y2="52" stroke="#DC2626" stroke-width="3.2" stroke-linecap="round"/>
        <rect x="116" y="4" width="72" height="18" rx="2.5" fill="#7F1D1D"/>
        <text x="152" y="16.5" text-anchor="middle" font-family="Noto Sans" font-weight="900" font-size="11.5" fill="#FDE68A">$14.7B</text>
      </svg>`;

    case 'fifa':
      // Full-frame football pitch arc + gleaming golden trophy + 2031 Americas / 2035 UK plaques
      return `<svg viewBox="0 0 192 60" xmlns="http://www.w3.org/2000/svg">
        <rect width="192" height="60" fill="#1E3A5F"/>
        <!-- Green pitch base & white markings -->
        <ellipse cx="96" cy="64" rx="108" ry="26" fill="#15803D"/>
        <ellipse cx="96" cy="64" rx="56" ry="14" fill="none" stroke="#BBF7D0" stroke-width="1.2"/>
        <!-- Golden Trophy center -->
        <g transform="translate(82,6)">
          <path d="M6,5 L22,5 L20,23 C19,29 16,32 14,33 C12,32 9,29 8,23 Z" fill="#F59E0B" stroke="#FEF08A" stroke-width="1.2"/>
          <rect x="11" y="32" width="6" height="7" fill="#D97706"/>
          <rect x="6" y="39" width="16" height="5" rx="1" fill="#92400E"/>
          <circle cx="14" cy="15" r="4.5" fill="#FEF08A"/>
        </g>
        <!-- Left 2031 pennant -->
        <rect x="7" y="8" width="66" height="32" rx="3" fill="#0F294A" stroke="#60A5FA" stroke-width="1.2"/>
        <text x="40" y="23" text-anchor="middle" font-family="Noto Sans" font-weight="900" font-size="13" fill="#FFFFFF">2031</text>
        <text x="40" y="34.5" text-anchor="middle" font-family="Noto Sans" font-weight="800" font-size="7" fill="#93C5FD">US·MX·CR·JM</text>
        <!-- Right 2035 pennant -->
        <rect x="119" y="8" width="66" height="32" rx="3" fill="#0F3D3E" stroke="#5EEAD4" stroke-width="1.2"/>
        <text x="152" y="23" text-anchor="middle" font-family="Noto Sans" font-weight="900" font-size="13" fill="#FFFFFF">2035</text>
        <text x="152" y="34.5" text-anchor="middle" font-family="Noto Sans" font-weight="800" font-size="7" fill="#99F6E4">UK 4 NATIONS</text>
      </svg>`;

    case 'korea':
      // Full-frame Seoul Blue House tiled roof + Taegeuk seal + compact 1ST FEMALE NIS badge
      return `<svg viewBox="0 0 192 60" xmlns="http://www.w3.org/2000/svg">
        <rect width="192" height="60" fill="#E8F0FA"/>
        <!-- Distant Namsan / Seoul mountain silhouette -->
        <path d="M0,44 Q42,24 92,38 T192,32 L192,60 L0,60 Z" fill="#CBD9EC"/>
        <!-- Blue House curved tiled roof -->
        <g transform="translate(8,24)">
          <path d="M0,16 Q42,4 84,16 L76,20 L8,20 Z" fill="#1E3A8A"/>
          <rect x="12" y="20" width="60" height="16" fill="#F8FAFC" stroke="#94A3B8" stroke-width="0.9"/>
          <g fill="#334155">
            <rect x="18" y="24" width="6" height="12"/><rect x="31" y="24" width="6" height="12"/>
            <rect x="47" y="24" width="6" height="12"/><rect x="60" y="24" width="6" height="12"/>
          </g>
        </g>
        <!-- Taegeuk Emblem -->
        <circle cx="152" cy="38" r="15" fill="#FFFFFF" stroke="#94A3B8" stroke-width="1"/>
        <path d="M141,38 A11,11 0 0,1 163,38 A5.5,5.5 0 0,1 152,38 A5.5,5.5 0 0,0 141,38 Z" fill="#C60C30"/>
        <path d="M163,38 A11,11 0 0,1 141,38 A5.5,5.5 0 0,1 152,38 A5.5,5.5 0 0,0 163,38 Z" fill="#003478"/>
        <!-- Compact top badge -->
        <rect x="86" y="4" width="102" height="16" rx="2.5" fill="#0F172A"/>
        <text x="137" y="15" text-anchor="middle" font-family="Noto Sans" font-weight="900" font-size="8.8" fill="#FDE047">1ST FEMALE NIS</text>
      </svg>`;

    case 'nepal':
      // Full-frame Himalayan peaks + Saryu-Kamala Express crossing bridge + India/Nepal bars + $1.62B badge
      return `<svg viewBox="0 0 192 60" xmlns="http://www.w3.org/2000/svg">
        <rect width="192" height="60" fill="#FBF2E6"/>
        <!-- Himalayan snow peaks -->
        <polygon points="0,42 36,12 72,42" fill="#94A3B8"/>
        <polygon points="24,22 36,12 48,22 40,20 36,24 31,20" fill="#FFFFFF"/>
        <polygon points="48,42 94,8 140,42" fill="#64748B"/>
        <polygon points="79,19 94,8 109,19 99,17 94,22 88,17" fill="#FFFFFF"/>
        <polygon points="118,42 158,16 192,42" fill="#94A3B8"/>
        <!-- Bridge deck & piers -->
        <rect x="0" y="44" width="192" height="4" fill="#334155"/>
        <rect x="28" y="48" width="8" height="12" fill="#475569"/>
        <rect x="92" y="48" width="8" height="12" fill="#475569"/>
        <rect x="156" y="48" width="8" height="12" fill="#475569"/>
        <!-- Express train -->
        <g transform="translate(18,28)">
          <rect x="0" y="2" width="84" height="14" rx="3" fill="#1E40AF"/>
          <rect x="0" y="12" width="84" height="3" fill="#F97316"/>
          <rect x="8" y="5" width="11" height="5" rx="1" fill="#DBEAFE"/>
          <rect x="24" y="5" width="11" height="5" rx="1" fill="#DBEAFE"/>
          <rect x="40" y="5" width="11" height="5" rx="1" fill="#DBEAFE"/>
          <rect x="56" y="5" width="18" height="5" rx="1" fill="#FDE047"/>
        </g>
        <!-- Compact corner stat -->
        <rect x="114" y="4" width="74" height="17" rx="2.5" fill="#9A3412"/>
        <text x="151" y="16" text-anchor="middle" font-family="Noto Sans" font-weight="900" font-size="10.2" fill="#FFFFFF">$1.62B PACT</text>
      </svg>`;

    case 'gaza':
      // Full-frame cracked Gaza soil + UN blue water well + dark smoke plume + >99% TOXIC gauge
      return `<svg viewBox="0 0 192 60" xmlns="http://www.w3.org/2000/svg">
        <rect width="192" height="60" fill="#EAE2D6"/>
        <!-- Smoke plume -->
        <circle cx="52" cy="18" r="13" fill="#64748B" opacity="0.55"/>
        <circle cx="68" cy="12" r="10" fill="#475569" opacity="0.4"/>
        <!-- Ruined skyline & ground -->
        <path d="M0,42 L26,42 L30,30 L42,30 L46,38 L66,38 L70,28 L84,32 L90,42 L192,42 L192,60 L0,60 Z" fill="#8C7B6B"/>
        <!-- Cracked soil lines -->
        <path d="M18,48 L36,53 L26,58 M112,48 L128,54 L144,50" stroke="#443B32" stroke-width="1.2" fill="none"/>
        <!-- Water drop & UN blue well left -->
        <g transform="translate(10,8)">
          <path d="M14,2 C14,2 24,15 24,22 A10,10 0 1,1 4,22 C4,15 14,2 14,2 Z" fill="#0284C7" stroke="#FFFFFF" stroke-width="1.2"/>
          <line x1="4" y1="8" x2="24" y2="28" stroke="#DC2626" stroke-width="2.6"/>
        </g>
        <rect x="40" y="7" width="46" height="14" rx="2" fill="#0284C7"/>
        <text x="63" y="16.8" text-anchor="middle" font-family="Noto Sans" font-weight="900" font-size="8" fill="#FFFFFF">UNRWA</text>
        <!-- Compact right toxicity gauge -->
        <rect x="96" y="6" width="90" height="30" rx="3" fill="#1F2937"/>
        <text x="141" y="19" text-anchor="middle" font-family="Noto Sans" font-weight="900" font-size="10.2" fill="#FCA5A5">&gt;99% TOXIC</text>
        <rect x="104" y="24" width="74" height="6" rx="2" fill="#374151"/>
        <rect x="104" y="24" width="72" height="6" rx="2" fill="#DC2626"/>
      </svg>`;

    case 'indonesia':
      // Full-frame wide industrial factory blaze + thick smoke + emergency ambulance + 24-26 DEAD badge
      return `<svg viewBox="0 0 192 60" xmlns="http://www.w3.org/2000/svg">
        <rect width="192" height="60" fill="#231F20"/>
        <!-- Rising smoke clouds -->
        <circle cx="48" cy="14" r="14" fill="#52525B" opacity="0.65"/>
        <circle cx="72" cy="10" r="16" fill="#3F3F46" opacity="0.7"/>
        <circle cx="96" cy="15" r="12" fill="#52525B" opacity="0.5"/>
        <!-- Sawtooth factory structure -->
        <polygon points="8,54 8,28 32,37 32,28 56,37 56,28 80,37 80,28 104,37 104,54" fill="#475569"/>
        <!-- Dramatic flames -->
        <path d="M18,34 L30,11 L42,29 L56,8 L70,27 L84,14 L94,34 Z" fill="#F97316"/>
        <path d="M28,34 L38,18 L50,31 L62,16 L76,34 Z" fill="#FDE047"/>
        <!-- Rescue ambulance right foreground -->
        <g transform="translate(124,38)">
          <rect x="0" y="3" width="44" height="14" rx="2" fill="#F8FAFC"/>
          <rect x="32" y="5" width="9" height="6" fill="#93C5FD"/>
          <rect x="12" y="6" width="8" height="2.6" fill="#DC2626"/>
          <rect x="14.7" y="3.5" width="2.6" height="8" fill="#DC2626"/>
          <circle cx="10" cy="17" r="3.2" fill="#0F172A"/>
          <circle cx="34" cy="17" r="3.2" fill="#0F172A"/>
        </g>
        <!-- Compact top-right toll badge -->
        <rect x="110" y="5" width="77" height="17" rx="2.5" fill="#991B1B"/>
        <text x="148.5" y="17" text-anchor="middle" font-family="Noto Sans" font-weight="900" font-size="10.2" fill="#FFFFFF">24–26 DEAD</text>
      </svg>`;

    case 'iran_singer':
      // Full-frame spotlight stage + vintage microphone + broken soundwaves + crimson 74 LASHES stamp
      return `<svg viewBox="0 0 192 60" xmlns="http://www.w3.org/2000/svg">
        <rect width="192" height="60" fill="#1F1924"/>
        <!-- Stage spotlight beam -->
        <polygon points="48,0 14,60 88,60" fill="#FDE68A" opacity="0.16"/>
        <!-- Vintage stage microphone -->
        <g transform="translate(36,10)">
          <rect x="7" y="4" width="12" height="18" rx="6" fill="#E2E8F0" stroke="#94A3B8" stroke-width="1"/>
          <line x1="9" y1="10" x2="17" y2="10" stroke="#64748B" stroke-width="1.2"/>
          <line x1="9" y1="14" x2="17" y2="14" stroke="#64748B" stroke-width="1.2"/>
          <path d="M4,15 A9,9 0 0,0 22,15" fill="none" stroke="#CBD5E1" stroke-width="1.6"/>
          <line x1="13" y1="24" x2="13" y2="44" stroke="#CBD5E1" stroke-width="2"/>
          <line x1="5" y1="44" x2="21" y2="44" stroke="#CBD5E1" stroke-width="2.2"/>
        </g>
        <!-- Silenced musical notes -->
        <g stroke="#FDA4AF" stroke-width="1.8" fill="none" opacity="0.85">
          <path d="M74,36 L74,20 L86,18 L86,33"/>
          <circle cx="71" cy="36" r="2.8" fill="#FDA4AF"/>
          <circle cx="83" cy="33" r="2.8" fill="#FDA4AF"/>
          <line x1="66" y1="18" x2="92" y2="40" stroke="#EF4444" stroke-width="2.4"/>
        </g>
        <!-- Compact crimson sentence stamp -->
        <rect x="104" y="14" width="80" height="28" rx="3" fill="#881337" stroke="#FDA4AF" stroke-width="1.2"/>
        <text x="144" y="29" text-anchor="middle" font-family="Noto Sans" font-weight="900" font-size="11.5" fill="#FFFFFF">74 LASHES</text>
        <text x="144" y="38.5" text-anchor="middle" font-family="Noto Sans" font-weight="700" font-size="6.8" fill="#FECDD3">HIJAB-FREE GIG</text>
      </svg>`;

    case 'cricket':
      // Full-frame Basin Reserve green oval + pitch + stumps + red ball + crisp scoreboard
      return `<svg viewBox="0 0 192 60" xmlns="http://www.w3.org/2000/svg">
        <rect width="192" height="60" fill="#CFE9D7"/>
        <!-- Stadium green oval -->
        <ellipse cx="96" cy="52" rx="112" ry="30" fill="#15803D"/>
        <!-- Pitch strip -->
        <polygon points="18,60 36,30 66,30 82,60" fill="#E5D5AC" stroke="#C5B07E" stroke-width="1"/>
        <!-- Stumps & bails -->
        <g stroke="#78350F" stroke-width="2.2">
          <line x1="44" y1="12" x2="44" y2="38"/>
          <line x1="50" y1="12" x2="50" y2="38"/>
          <line x1="56" y1="12" x2="56" y2="38"/>
          <line x1="42" y1="12" x2="58" y2="12"/>
        </g>
        <!-- Red cricket ball with white seam -->
        <circle cx="76" cy="24" r="6" fill="#B91C1C"/>
        <path d="M72,21 Q76,24 80,27" stroke="#FEF2F2" stroke-width="1.1" fill="none" stroke-dasharray="1.5 1.5"/>
        <!-- Scoreboard -->
        <rect x="94" y="6" width="92" height="32" rx="3" fill="#0F172A"/>
        <text x="140" y="20.5" text-anchor="middle" font-family="Noto Sans" font-weight="900" font-size="11.5" fill="#4ADE80">TEST DRAW</text>
        <text x="140" y="32.5" text-anchor="middle" font-family="Noto Sans" font-weight="800" font-size="7.2" fill="#F8FAFC">IND 720/9d · NZ SAVED</text>
      </svg>`;

    default:
      return `<svg viewBox="0 0 192 60" xmlns="http://www.w3.org/2000/svg"><rect width="192" height="60" fill="#E2E8F0"/></svg>`;
  }
}

// Precision equirectangular projection with 6px horizontal padding so NZ (#13) never clips right border
function project(lat, lon) {
  const x = 6 + ((lon + 180) / 360) * 304;
  const y = 4 + ((82 - lat) / 140) * 166;
  return [x, y];
}

// Clean anti-overlap pin coordinates for tight clusters (Europe & Middle East)
const PIN_OVERRIDES = {
  2: [30.5, 16.5],   // Benghazi, Libya (clean separation from Zurich & Gaza)
  3: [55.2, 26.0],   // Poland / NATO
  4: [54.2, 0.5],    // Brussels
  5: [38.0, -9.0],   // Madrid
  7: [45.5, 10.0],   // Zurich
  10: [29.8, 36.2],  // Gaza
  12: [36.2, 55.2],  // Tehran
};

export function renderWorldMap(stories) {
  // Refined multi-polygon landmasses in 316x174 equirectangular canvas
  const land = [
    // North & Central America
    'M 18,24 L 40,16 L 68,20 L 88,28 L 106,36 L 102,48 L 88,58 L 80,68 L 70,76 L 66,85 L 58,82 L 52,70 L 42,60 L 34,46 L 20,38 L 12,30 Z',
    // Greenland
    'M 108,8 L 136,6 L 142,18 L 128,31 L 114,26 Z',
    // Cuba
    'M 74,73 L 84,74 L 84,77 L 74,76 Z',
    // South America
    'M 78,86 L 94,85 L 114,98 L 122,110 L 112,130 L 98,154 L 91,164 L 86,158 L 86,136 L 79,114 L 74,98 Z',
    // UK & Ireland
    'M 149,30 L 154,30 L 155,41 L 148,41 Z',
    // Iceland
    'M 137,20 L 144,20 L 143,25 L 136,24 Z',
    // Continuous Eurasia (Iberia, France, Italy, Scandinavia, Russia, Arabia, India, SE Asia, China, Korea)
    'M 146,52 L 152,44 L 160,42 L 163,24 L 176,16 L 194,18 L 228,16 L 266,19 L 298,25 L 294,38 L 278,48 L 272,56 L 275,64 L 262,74 L 252,86 L 244,76 L 236,89 L 228,89 L 221,76 L 210,72 L 202,80 L 192,76 L 188,66 L 180,60 L 170,56 L 166,61 L 162,56 L 154,58 L 146,56 Z',
    // Sri Lanka
    'M 232,92 L 235,92 L 234,96 L 231,95 Z',
    // Africa
    'M 148,60 L 166,58 L 184,63 L 194,74 L 203,86 L 196,106 L 186,130 L 174,142 L 165,134 L 161,110 L 152,96 L 142,86 L 142,70 Z',
    // Madagascar
    'M 199,116 L 204,116 L 202,131 L 197,129 Z',
    // Japan
    'M 278,48 L 284,43 L 286,55 L 279,60 Z',
    // Taiwan & Philippines
    'M 264,74 L 267,74 L 266,79 L 264,78 Z',
    'M 263,83 L 269,84 L 269,94 L 263,93 Z',
    // Indonesia archipelago
    'M 244,96 L 262,101 L 280,102 L 278,107 L 258,106 L 242,100 Z',
    // Australia & Tasmania
    'M 252,115 L 278,113 L 290,126 L 286,143 L 268,145 L 252,135 Z',
    'M 278,148 L 283,148 L 282,152 L 278,151 Z',
    // New Zealand (cleanly inside x=298..306)
    'M 297,140 L 304,138 L 306,151 L 298,155 Z',
  ];

  const [ux, uy] = project(49.0, 32.0);
  const [bx, by] = project(32.12, 20.07);

  const pins = stories.map((s) => {
    const [lat, lon] = PIN_OVERRIDES[s.id] || [s.lat, s.lon];
    const [x, y] = project(lat, lon);
    const col = REGION_META[s.region]?.color || '#1E293B';
    const isLead = s.id <= 3;
    const r = isLead ? 7.8 : 6.5;
    return `<g>
      <circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${r}" fill="${col}" stroke="#FFFFFF" stroke-width="1.4"/>
      <text x="${x.toFixed(1)}" y="${(y + 2.8).toFixed(1)}" text-anchor="middle" font-family="Noto Sans" font-weight="900" font-size="${isLead ? 8.3 : 7.5}" fill="#FFFFFF">${s.id}</text>
    </g>`;
  }).join('');

  return `<svg viewBox="0 0 316 174" xmlns="http://www.w3.org/2000/svg">
    <rect width="316" height="174" rx="3" fill="#E8F1F7" stroke="#CBD5E1" stroke-width="1"/>
    <g stroke="#D1E1ED" stroke-width="0.6">
      <line x1="0" y1="44" x2="316" y2="44"/>
      <line x1="0" y1="101" x2="316" y2="101" stroke-dasharray="3 3"/>
      <line x1="0" y1="142" x2="316" y2="142"/>
      <line x1="82" y1="0" x2="82" y2="174"/>
      <line x1="158" y1="0" x2="158" y2="174"/>
      <line x1="234" y1="0" x2="234" y2="174"/>
    </g>
    <g fill="#DCD3C1" stroke="#B3A790" stroke-width="0.7" stroke-linejoin="round">
      ${land.map(d => `<path d="${d}"/>`).join('')}
    </g>
    <path d="M${ux.toFixed(1)},${uy.toFixed(1)} Q${((ux + bx) / 2 - 4).toFixed(1)},${((uy + by) / 2 + 4).toFixed(1)} ${bx.toFixed(1)},${by.toFixed(1)}" fill="none" stroke="#DC2626" stroke-width="1.5" stroke-dasharray="2.5 2"/>
    ${pins}
  </svg>`;
}
