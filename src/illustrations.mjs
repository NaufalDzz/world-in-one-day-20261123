// Original flat-vector editorial illustrations and world atlas generated purely in code.
// Pass 2: taller 118px hero scenes & 70px secondary scenes, bolder 21-28px callout ribbons
// tuned for instant legibility at 300px, distinct visual silhouettes, and zero-overlap atlas pins.

import { REGION_META } from './stories.mjs';

export function renderHeroArt(key) {
  switch (key) {
    case 'nvidia':
      return `<svg viewBox="0 0 326 118" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="nvDark" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#0B192C"/>
            <stop offset="100%" stop-color="#14304B"/>
          </linearGradient>
          <linearGradient id="nvFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#22C55E" stop-opacity="0.40"/>
            <stop offset="100%" stop-color="#22C55E" stop-opacity="0.03"/>
          </linearGradient>
        </defs>
        <rect width="326" height="118" fill="url(#nvDark)"/>
        <g stroke="#294866" stroke-width="0.9" stroke-dasharray="3 3">
          <line x1="12" y1="36" x2="314" y2="36"/>
          <line x1="12" y1="64" x2="314" y2="64"/>
          <line x1="12" y1="92" x2="314" y2="92"/>
        </g>
        <!-- Iconic GPU Silicon Die Left -->
        <g transform="translate(20,38)">
          <g stroke="#94A3B8" stroke-width="2.6" stroke-linecap="round">
            <line x1="16" y1="0" x2="16" y2="9"/><line x1="28" y1="0" x2="28" y2="9"/><line x1="40" y1="0" x2="40" y2="9"/><line x1="52" y1="0" x2="52" y2="9"/>
            <line x1="16" y1="57" x2="16" y2="66"/><line x1="28" y1="57" x2="28" y2="66"/><line x1="40" y1="57" x2="40" y2="66"/><line x1="52" y1="57" x2="52" y2="66"/>
            <line x1="0" y1="16" x2="9" y2="16"/><line x1="0" y1="28" x2="9" y2="28"/><line x1="0" y1="40" x2="9" y2="40"/><line x1="0" y1="52" x2="9" y2="52"/>
            <line x1="59" y1="16" x2="68" y2="16"/><line x1="59" y1="28" x2="68" y2="28"/><line x1="59" y1="40" x2="68" y2="40"/><line x1="59" y1="52" x2="68" y2="52"/>
          </g>
          <rect x="9" y="9" width="50" height="48" rx="4" fill="#1E293B" stroke="#4ADE80" stroke-width="2.2"/>
          <rect x="15" y="15" width="38" height="36" rx="2.5" fill="#15803D"/>
          <text x="34" y="37" text-anchor="middle" font-family="Noto Sans" font-weight="900" font-size="11.5" letter-spacing="0.4" fill="#DCFCE7">NVDA</text>
        </g>
        <!-- Stock Rally Bars & Steep Breakout -->
        <g opacity="0.88">
          <rect x="112" y="84" width="11" height="16" rx="1.5" fill="#EF4444"/>
          <rect x="132" y="90" width="11" height="10" rx="1.5" fill="#EF4444"/>
          <rect x="152" y="92" width="11" height="8" rx="1.5" fill="#F97316"/>
          <rect x="176" y="70" width="12" height="30" rx="1.5" fill="#22C55E"/>
          <rect x="199" y="53" width="12" height="47" rx="1.5" fill="#22C55E"/>
          <rect x="222" y="40" width="12" height="60" rx="1.5" fill="#4ADE80"/>
          <rect x="245" y="29" width="12" height="71" rx="1.5" fill="#4ADE80"/>
          <rect x="268" y="19" width="12" height="81" rx="1.5" fill="#86EFAC"/>
        </g>
        <path d="M108,82 L138,91 L158,94 L182,66 L205,49 L228,36 L251,25 L274,15 L304,10 L304,102 L108,102 Z" fill="url(#nvFill)"/>
        <polyline points="108,82 138,91 158,94" fill="none" stroke="#F87171" stroke-width="3.2" stroke-linejoin="round"/>
        <polyline points="158,94 182,66 205,49 228,36 251,25 274,15 304,10" fill="none" stroke="#4ADE80" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round"/>
        <polygon points="313,8 295,5 301,20" fill="#86EFAC"/>
        <!-- Bold Top-Left Callout Banner -->
        <rect x="0" y="0" width="176" height="29" fill="#A91D22"/>
        <text x="10" y="20" font-family="Noto Sans" font-weight="900" font-size="15.5" letter-spacing="0.4" fill="#FFFFFF">HUANG RETURNS</text>
        <!-- Bold Bottom-Right Metric Tag -->
        <rect x="122" y="90" width="198" height="23" rx="2.5" fill="#08121E" fill-opacity="0.94" stroke="#4ADE80" stroke-width="1.2"/>
        <text x="221" y="105.5" text-anchor="middle" font-family="Noto Sans" font-weight="900" font-size="11.6" fill="#FFFFFF">NVDA <tspan fill="#86EFAC">+31.5%</tspan> · NASDAQ <tspan fill="#FDE047">+6.5%</tspan></text>
      </svg>`;

    case 'nato':
      return `<svg viewBox="0 0 326 118" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="natoSky" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#112749"/>
            <stop offset="100%" stop-color="#1E467E"/>
          </linearGradient>
        </defs>
        <rect width="326" height="118" fill="url(#natoSky)"/>
        <!-- Radar sweep rings right -->
        <g fill="none" stroke="#60A5FA" stroke-opacity="0.38" stroke-width="1.3">
          <circle cx="256" cy="54" r="24"/>
          <circle cx="256" cy="54" r="42"/>
          <circle cx="256" cy="54" r="60"/>
        </g>
        <path d="M256,54 L310,25 A60,60 0 0,1 312,80 Z" fill="#38BDF8" fill-opacity="0.24"/>
        <!-- NATO 32-nation circular council table -->
        <g transform="translate(106,71)">
          <ellipse cx="0" cy="0" rx="79" ry="32" fill="#0C1C36" stroke="#60A5FA" stroke-width="1.3" stroke-opacity="0.55"/>
          <ellipse cx="0" cy="0" rx="66" ry="24.5" fill="#C49A68" stroke="#EDD2AC" stroke-width="1.6"/>
          <ellipse cx="0" cy="0" rx="43" ry="14" fill="#17345E"/>
          <polygon points="0,-10 2.8,-2.8 12,0 2.8,2.8 0,10 -2.8,2.8 -12,0 -2.8,-2.8" fill="#FFFFFF"/>
          ${Array.from({ length: 32 }, (_, i) => {
            const a = (i * Math.PI * 2) / 32;
            const cx = Math.cos(a) * 73;
            const cy = Math.sin(a) * 28;
            return `<circle cx="${cx.toFixed(1)}" cy="${cy.toFixed(1)}" r="2.8" fill="#F8FAFC"/>`;
          }).join('')}
        </g>
        <!-- AWACS E-3 radar aircraft -->
        <g transform="translate(202,22)">
          <path d="M12,24 L80,24 L98,19 L102,24 L80,29 L12,29 L0,14 L8,14 Z" fill="#FFFFFF" stroke="#0F203D" stroke-width="1.2"/>
          <path d="M40,24 L56,3 L64,3 L56,24 Z" fill="#E2E8F0" stroke="#0F203D" stroke-width="0.9"/>
          <path d="M40,29 L56,49 L64,49 L56,29 Z" fill="#CBD5E1" stroke="#0F203D" stroke-width="0.9"/>
          <line x1="36" y1="16" x2="36" y2="24" stroke="#94A3B8" stroke-width="2.8"/>
          <ellipse cx="36" cy="14.5" rx="19" ry="5.5" fill="#38BDF8" stroke="#FFFFFF" stroke-width="1.8"/>
        </g>
        <!-- Bold Top-Left Callout Banner -->
        <rect x="0" y="0" width="176" height="29" fill="#A91D22"/>
        <text x="10" y="20" font-family="Noto Sans" font-weight="900" font-size="15.5" letter-spacing="0.4" fill="#FFFFFF">32 ALLIES MEET</text>
        <!-- Bold Bottom-Right Tag -->
        <rect x="180" y="90" width="140" height="23" rx="2.5" fill="#091322" fill-opacity="0.94" stroke="#60A5FA" stroke-width="1.2"/>
        <text x="250" y="105.5" text-anchor="middle" font-family="Noto Sans" font-weight="900" font-size="11.6" fill="#FFFFFF">AWACS TO POLAND</text>
      </svg>`;

    case 'dymer':
      return `<svg viewBox="0 0 326 118" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="dymSky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#1E2C45"/>
            <stop offset="100%" stop-color="#3E506E"/>
          </linearGradient>
        </defs>
        <rect width="326" height="118" fill="url(#dymSky)"/>
        <!-- Rescue searchlight beams -->
        <polygon points="58,118 118,22 156,22 100,118" fill="#FEF08A" opacity="0.14"/>
        <polygon points="248,118 190,26 226,26 286,118" fill="#FEF08A" opacity="0.12"/>
        <!-- Crescent moon -->
        <circle cx="294" cy="23" r="9" fill="#FDE68A" opacity="0.92"/>
        <circle cx="299" cy="21" r="8" fill="#23334F"/>
        <!-- Ground base -->
        <rect x="0" y="96" width="326" height="22" fill="#141B26"/>
        <!-- Five-story residential block -->
        <g transform="translate(82,16)">
          <rect x="0" y="4" width="96" height="76" fill="#465670" stroke="#64748B" stroke-width="1.2"/>
          <!-- Bright warm windows -->
          <g fill="#FCD34D">
            <rect x="10" y="13" width="12" height="9" rx="1"/>
            <rect x="50" y="13" width="12" height="9" rx="1"/>
            <rect x="30" y="29" width="12" height="9" rx="1"/>
            <rect x="70" y="29" width="12" height="9" rx="1"/>
            <rect x="10" y="45" width="12" height="9" rx="1"/>
            <rect x="50" y="61" width="12" height="9" rx="1"/>
          </g>
          <g fill="#1E293B">
            <rect x="30" y="13" width="12" height="9" rx="1"/>
            <rect x="70" y="13" width="12" height="9" rx="1"/>
            <rect x="10" y="29" width="12" height="9" rx="1"/>
            <rect x="50" y="29" width="12" height="9" rx="1"/>
            <rect x="30" y="45" width="12" height="9" rx="1"/>
            <rect x="70" y="45" width="12" height="9" rx="1"/>
            <rect x="10" y="61" width="12" height="9" rx="1"/>
            <rect x="30" y="61" width="12" height="9" rx="1"/>
            <rect x="70" y="61" width="12" height="9" rx="1"/>
          </g>
          <!-- Sheared collapsed right section -->
          <polygon points="96,4 140,4 130,24 114,38 148,52 164,80 96,80" fill="#2B364A" stroke="#475569" stroke-width="1.2"/>
          <polygon points="100,80 124,55 148,66 168,54 192,80" fill="#525F73"/>
          <polygon points="118,80 138,63 158,80" fill="#748296"/>
          <!-- Warm amber rescue glow -->
          <circle cx="132" cy="56" r="10" fill="#F97316" opacity="0.72"/>
          <circle cx="132" cy="56" r="5" fill="#FDE047"/>
        </g>
        <!-- Rescue crane & truck left -->
        <line x1="34" y1="96" x2="64" y2="42" stroke="#FACC15" stroke-width="3.8" stroke-linecap="round"/>
        <line x1="64" y1="42" x2="104" y2="52" stroke="#FACC15" stroke-width="2.8" stroke-linecap="round"/>
        <rect x="14" y="82" width="38" height="14" rx="2" fill="#DC2626"/>
        <rect x="40" y="85" width="9" height="5" fill="#DBEAFE"/>
        <circle cx="28" cy="80" r="3.5" fill="#60A5FA"/>
        <!-- Bold Top-Left Callout Banner -->
        <rect x="0" y="0" width="118" height="29" fill="#A91D22"/>
        <text x="10" y="20" font-family="Noto Sans" font-weight="900" font-size="16" letter-spacing="0.4" fill="#FFFFFF">11 DEAD</text>
        <!-- Bold Bottom-Right Tag -->
        <rect x="198" y="90" width="122" height="23" rx="2.5" fill="#091322" fill-opacity="0.94" stroke="#FBBF24" stroke-width="1.2"/>
        <text x="259" y="105.5" text-anchor="middle" font-family="Noto Sans" font-weight="900" font-size="11.6" fill="#FFFFFF">KYIV REGION</text>
      </svg>`;

    default:
      return `<svg viewBox="0 0 326 118" xmlns="http://www.w3.org/2000/svg"><rect width="326" height="118" fill="#E2E8F0"/></svg>`;
  }
}

function cardRibbon(text, bg = '#151D29') {
  const w = Math.max(82, Math.round(text.length * 8.4 + 16));
  return `<rect x="0" y="0" width="${w}" height="21" fill="${bg}"/>
          <text x="7" y="14.8" font-family="Noto Sans" font-weight="900" font-size="11.5" letter-spacing="0.3" fill="#FFFFFF">${text}</text>`;
}

export function renderCardArt(key) {
  switch (key) {
    case 'eu_sanctions':
      return `<svg viewBox="0 0 192 70" xmlns="http://www.w3.org/2000/svg">
        <rect width="192" height="70" fill="#183668"/>
        <g fill="#FACC15" opacity="0.92">
          ${Array.from({ length: 12 }, (_, i) => {
            const a = (i * Math.PI * 2) / 12 - Math.PI / 2;
            const cx = 44 + Math.cos(a) * 19;
            const cy = 46 + Math.sin(a) * 19;
            return `<circle cx="${cx.toFixed(1)}" cy="${cy.toFixed(1)}" r="2"/>`;
          }).join('')}
        </g>
        <g transform="translate(98,17)">
          <polygon points="0,15 39,2 78,15" fill="#E2E8F0"/>
          <rect x="6" y="17" width="8" height="26" fill="#FFFFFF"/>
          <rect x="25" y="17" width="8" height="26" fill="#FFFFFF"/>
          <rect x="45" y="17" width="8" height="26" fill="#FFFFFF"/>
          <rect x="64" y="17" width="8" height="26" fill="#FFFFFF"/>
          <rect x="0" y="43" width="78" height="5" fill="#CBD5E1"/>
        </g>
        <circle cx="137" cy="42" r="22" fill="none" stroke="#DC2626" stroke-width="4.4"/>
        <line x1="121" y1="26" x2="153" y2="58" stroke="#DC2626" stroke-width="4.4" stroke-linecap="round"/>
        ${cardRibbon('60 BANKS')}
      </svg>`;

    case 'iran_sanctions':
      return `<svg viewBox="0 0 192 70" xmlns="http://www.w3.org/2000/svg">
        <rect width="192" height="70" fill="#E9DFC9"/>
        <rect x="0" y="45" width="192" height="25" fill="#2A5478"/>
        <path d="M0,55 Q28,51 56,55 T112,55 T192,55" fill="none" stroke="#93C5FD" stroke-width="1.3" opacity="0.65"/>
        <!-- Tanker silhouette left -->
        <g transform="translate(14,34)">
          <polygon points="0,11 72,11 66,19 6,19" fill="#1E293B"/>
          <rect x="10" y="4" width="15" height="7" fill="#475569"/>
          <rect x="31" y="7" width="26" height="4" fill="#991B1B"/>
        </g>
        <!-- Brass Padlock right (clear of ribbon) -->
        <g transform="translate(128,17)">
          <path d="M12,18 V11 A12,12 0 0,1 36,11 V18" fill="none" stroke="#1E293B" stroke-width="4.6"/>
          <rect x="6" y="18" width="36" height="29" rx="4" fill="#C26A0E" stroke="#1E293B" stroke-width="2"/>
          <circle cx="24" cy="30" r="4" fill="#1E293B"/>
          <rect x="22.3" y="33" width="3.4" height="7" fill="#1E293B"/>
        </g>
        ${cardRibbon('SHADOW BANKS')}
      </svg>`;

    case 'belgium_strike':
      return `<svg viewBox="0 0 192 70" xmlns="http://www.w3.org/2000/svg">
        <rect width="192" height="70" fill="#CFE0EC"/>
        <rect x="0" y="47" width="192" height="23" fill="#475569"/>
        <line x1="8" y1="59" x2="184" y2="59" stroke="#F8FAFC" stroke-width="1.6" stroke-dasharray="10 6"/>
        <!-- ATC Tower left -->
        <rect x="22" y="33" width="10" height="16" fill="#64748B"/>
        <polygon points="15,24 39,24 34,33 20,33" fill="#1E293B"/>
        <rect x="19" y="26.5" width="16" height="3.5" fill="#93C5FD"/>
        <!-- Grounded Jet center (cleanly separated from departures board) -->
        <g transform="translate(42,34) scale(0.92)">
          <path d="M4,13 L68,13 L82,9 L85,13 L68,17 L4,17 L0,8 L8,8 Z" fill="#FFFFFF" stroke="#0F172A" stroke-width="1.2"/>
          <path d="M30,13 L42,2 L48,2 L42,13 Z" fill="#CBD5E1"/>
        </g>
        <!-- Crisp red HALTS / departures board right (distinct from EU circle-slash) -->
        <g transform="translate(132,14)">
          <rect x="0" y="0" width="52" height="38" rx="3" fill="#1E293B" stroke="#0F172A" stroke-width="1.2"/>
          <rect x="4" y="5" width="44" height="8" rx="1" fill="#DC2626"/>
          <text x="26" y="11.5" text-anchor="middle" font-family="Noto Sans" font-weight="900" font-size="6.8" fill="#FFFFFF">GROUNDED</text>
          <rect x="5" y="17" width="24" height="3" fill="#94A3B8"/>
          <rect x="33" y="17" width="14" height="3" fill="#F87171"/>
          <rect x="5" y="24" width="24" height="3" fill="#94A3B8"/>
          <rect x="33" y="24" width="14" height="3" fill="#F87171"/>
          <rect x="5" y="31" width="24" height="3" fill="#94A3B8"/>
          <rect x="33" y="31" width="14" height="3" fill="#F87171"/>
        </g>
        ${cardRibbon('14H SHUTDOWN')}
      </svg>`;

    case 'gaza_unrwa':
      return `<svg viewBox="0 0 192 70" xmlns="http://www.w3.org/2000/svg">
        <rect width="192" height="70" fill="#E8DEC8"/>
        <rect x="0" y="53" width="192" height="17" fill="#C2B297"/>
        <polygon points="10,53 10,28 48,28 58,36 68,53" fill="#8C8375"/>
        <rect x="18" y="36" width="10" height="10" fill="#475569"/>
        <rect x="35" y="36" width="10" height="10" fill="#475569"/>
        <!-- UN Blue Water Tank right -->
        <g transform="translate(100,19)">
          <rect x="8" y="8" width="48" height="30" rx="3" fill="#1D70B8" stroke="#0F3C66" stroke-width="1.5"/>
          <text x="32" y="28.5" text-anchor="middle" font-family="Noto Sans" font-weight="900" font-size="15" fill="#FFFFFF">UN</text>
          <rect x="14" y="38" width="6" height="9" fill="#334155"/>
          <rect x="44" y="38" width="6" height="9" fill="#334155"/>
          <path d="M56,25 L68,25 L68,36" fill="none" stroke="#334155" stroke-width="3.2"/>
          <path d="M68,38 C65,42 65,45 68,45 C71,45 71,42 68,38 Z" fill="#0284C7"/>
        </g>
        ${cardRibbon('UNRWA KILLED')}
      </svg>`;

    case 'zambia_trial':
      return `<svg viewBox="0 0 192 70" xmlns="http://www.w3.org/2000/svg">
        <rect width="192" height="70" fill="#EAE1CE"/>
        <rect x="0" y="64" width="192" height="6" fill="#198A00"/>
        <!-- Higher-contrast courthouse left -->
        <g transform="translate(12,25)">
          <polygon points="0,12 42,1 84,12" fill="#6F6759"/>
          <rect x="8" y="13" width="9" height="24" fill="#9A907E"/>
          <rect x="27" y="13" width="9" height="24" fill="#9A907E"/>
          <rect x="48" y="13" width="9" height="24" fill="#9A907E"/>
          <rect x="67" y="13" width="9" height="24" fill="#9A907E"/>
          <rect x="0" y="37" width="84" height="5" fill="#4B463D"/>
        </g>
        <!-- Judge gavel right -->
        <g transform="translate(116,20)">
          <g transform="rotate(-32 24 20)">
            <rect x="8" y="6" width="30" height="13" rx="2.5" fill="#5C2F16"/>
            <rect x="21" y="19" width="6.5" height="27" rx="1.5" fill="#7D4423"/>
          </g>
          <rect x="6" y="40" width="48" height="6.5" rx="2" fill="#3B1F0F"/>
        </g>
        ${cardRibbon('TREASON CASE')}
      </svg>`;

    case 'congo_cobalt':
      return `<svg viewBox="0 0 192 70" xmlns="http://www.w3.org/2000/svg">
        <rect width="192" height="70" fill="#E6DEC8"/>
        <rect x="0" y="50" width="192" height="20" fill="#9A886D"/>
        <!-- Cobalt ore crate & mineral pile left (well below ribbon) -->
        <g transform="translate(14,27)">
          <rect x="0" y="10" width="48" height="23" rx="2" fill="#1D4ED8" stroke="#1E3A8A" stroke-width="1.6"/>
          <text x="24" y="26" text-anchor="middle" font-family="Noto Sans" font-weight="900" font-size="12" fill="#FFFFFF">Co</text>
          <polygon points="53,33 66,14 80,22 94,33" fill="#1E3A8A"/>
          <polygon points="66,33 78,18 96,33" fill="#2563EB"/>
        </g>
        <!-- Lowered striped customs barrier gate right -->
        <rect x="116" y="24" width="8" height="34" fill="#334155"/>
        <g transform="translate(106,34)">
          <rect x="0" y="0" width="76" height="10" rx="1.5" fill="#DC2626"/>
          <rect x="14" y="0" width="10" height="10" fill="#FFFFFF"/>
          <rect x="36" y="0" width="10" height="10" fill="#FFFFFF"/>
          <rect x="58" y="0" width="10" height="10" fill="#FFFFFF"/>
        </g>
        <circle cx="152" cy="19" r="9.5" fill="#B91C1C"/>
        <rect x="146" y="17.5" width="12" height="3.2" fill="#FFFFFF"/>
        ${cardRibbon('COBALT HALT')}
      </svg>`;

    case 'india_nepal':
      return `<svg viewBox="0 0 192 70" xmlns="http://www.w3.org/2000/svg">
        <rect width="192" height="70" fill="#F2E7D3"/>
        <polygon points="0,53 38,18 76,53" fill="#7D8FA3"/>
        <polygon points="25,30 38,18 51,30 42,28 38,32 33,28" fill="#FFFFFF"/>
        <polygon points="48,53 94,13 140,53" fill="#5B6E85"/>
        <polygon points="79,26 94,13 109,26 99,24 94,29 88,24" fill="#FFFFFF"/>
        <rect x="0" y="53" width="192" height="17" fill="#3B536E"/>
        <rect x="12" y="47" width="92" height="12" rx="2.5" fill="#1E40AF"/>
        <rect x="12" y="56" width="92" height="2.8" fill="#F97316"/>
        <rect x="20" y="50" width="14" height="4.2" rx="1" fill="#DBEAFE"/>
        <rect x="40" y="50" width="14" height="4.2" rx="1" fill="#DBEAFE"/>
        <rect x="60" y="50" width="14" height="4.2" rx="1" fill="#DBEAFE"/>
        <rect x="80" y="50" width="16" height="4.2" rx="1" fill="#FDE047"/>
        <g transform="translate(128,19)">
          <ellipse cx="24" cy="37" rx="21" ry="6.5" fill="#B45309"/>
          <rect x="3" y="26" width="42" height="11" fill="#D97706"/>
          <ellipse cx="24" cy="26" rx="21" ry="6.5" fill="#F59E0B"/>
          <rect x="3" y="15" width="42" height="11" fill="#D97706"/>
          <ellipse cx="24" cy="15" rx="21" ry="6.5" fill="#FBBF24" stroke="#92400E" stroke-width="1"/>
          <text x="24" y="18.8" text-anchor="middle" font-family="Noto Sans" font-weight="900" font-size="10.5" fill="#78350F">$</text>
        </g>
        ${cardRibbon('$1.62BN AID')}
      </svg>`;

    case 'indonesia_fire':
      return `<svg viewBox="0 0 192 70" xmlns="http://www.w3.org/2000/svg">
        <rect width="192" height="70" fill="#272A34"/>
        <circle cx="98" cy="16" r="15" fill="#4B5563" opacity="0.65"/>
        <circle cx="122" cy="11" r="17" fill="#6B7280" opacity="0.52"/>
        <circle cx="148" cy="18" r="14" fill="#4B5563" opacity="0.58"/>
        <rect x="150" y="16" width="13" height="45" fill="#475569"/>
        <polygon points="16,61 16,38 46,27 46,38 76,27 76,38 106,27 106,38 144,38 144,61" fill="#1E293B"/>
        <rect x="0" y="60" width="192" height="10" fill="#111827"/>
        <path d="M56,60 L69,22 L82,44 L96,17 L110,41 L122,26 L134,60 Z" fill="#EA580C"/>
        <path d="M68,60 L79,33 L91,50 L102,30 L114,48 L122,60 Z" fill="#FACC15"/>
        <rect x="24" y="46" width="11" height="8" fill="#F59E0B" opacity="0.75"/>
        <rect x="41" y="46" width="11" height="8" fill="#F59E0B" opacity="0.75"/>
        ${cardRibbon('24 DEAD', '#A91D22')}
      </svg>`;

    case 'colombia_drone':
      return `<svg viewBox="0 0 192 70" xmlns="http://www.w3.org/2000/svg">
        <rect width="192" height="70" fill="#D4E2EC"/>
        <path d="M0,49 L38,27 L84,46 L138,22 L192,44 L192,70 L0,70 Z" fill="#9BB0C1"/>
        <rect x="10" y="46" width="32" height="24" fill="#EBE3D5"/>
        <polygon points="8,46 26,36 44,46" fill="#B45309"/>
        <rect x="50" y="41" width="56" height="29" fill="#CBD5E1" stroke="#334155" stroke-width="1.2"/>
        <rect x="63" y="49" width="30" height="11" fill="#1E3A8A"/>
        <rect x="114" y="48" width="32" height="22" fill="#EBE3D5"/>
        <polygon points="112,48 130,38 148,48" fill="#B45309"/>
        <!-- Bold Quadcopter Silhouette right -->
        <g transform="translate(114,10)">
          <line x1="6" y1="10" x2="54" y2="10" stroke="#0F172A" stroke-width="3.4"/>
          <rect x="22" y="6" width="16" height="8" rx="2" fill="#0F172A"/>
          <line x1="0" y1="6" x2="18" y2="6" stroke="#1E293B" stroke-width="2.6"/>
          <line x1="42" y1="6" x2="60" y2="6" stroke="#1E293B" stroke-width="2.6"/>
          <path d="M30,17 L25,29 L35,29 Z" fill="#DC2626"/>
        </g>
        <circle cx="88" cy="39" r="9" fill="#DC2626" opacity="0.88"/>
        <circle cx="88" cy="39" r="4.5" fill="#FDE047"/>
        ${cardRibbon('DRONE STRIKE')}
      </svg>`;

    case 'fifa_wwc':
      return `<svg viewBox="0 0 192 70" xmlns="http://www.w3.org/2000/svg">
        <rect width="192" height="70" fill="#142E52"/>
        <rect x="0" y="38" width="192" height="32" fill="#157347"/>
        <line x1="0" y1="49" x2="192" y2="49" stroke="#BBF7D0" stroke-width="1.3" opacity="0.72"/>
        <ellipse cx="96" cy="49" rx="34" ry="8.5" fill="none" stroke="#BBF7D0" stroke-width="1.3" opacity="0.72"/>
        <!-- Golden Trophy center -->
        <g transform="translate(74,15)">
          <path d="M4,2 L28,2 L25,24 C24,31 20,34 16,36 C12,34 8,31 7,24 Z" fill="#F59E0B" stroke="#FEF08A" stroke-width="1.4"/>
          <rect x="12" y="35" width="8" height="8" fill="#D97706"/>
          <rect x="6" y="42" width="20" height="5" rx="1" fill="#92400E"/>
        </g>
        <!-- Crisp Classic Football right -->
        <g transform="translate(144,40)">
          <circle cx="0" cy="0" r="15" fill="#FFFFFF" stroke="#0F172A" stroke-width="1.5"/>
          <polygon points="0,-6.5 6,-2 3.8,5 -3.8,5 -6,-2" fill="#0F172A"/>
          <line x1="0" y1="-6.5" x2="0" y2="-15" stroke="#0F172A" stroke-width="1.2"/>
          <line x1="6" y1="-2" x2="14" y2="-5.5" stroke="#0F172A" stroke-width="1.2"/>
          <line x1="-6" y1="-2" x2="-14" y2="-5.5" stroke="#0F172A" stroke-width="1.2"/>
          <line x1="3.8" y1="5" x2="9.5" y2="12" stroke="#0F172A" stroke-width="1.2"/>
          <line x1="-3.8" y1="5" x2="-9.5" y2="12" stroke="#0F172A" stroke-width="1.2"/>
        </g>
        ${cardRibbon('2031 & 2035')}
      </svg>`;

    default:
      return `<svg viewBox="0 0 192 70" xmlns="http://www.w3.org/2000/svg"><rect width="192" height="70" fill="#E2E8F0"/></svg>`;
  }
}

// Clean equirectangular world atlas (268x172) with 17 strictly non-overlapping numbered pins
function project(lat, lon) {
  const x = 6 + ((lon + 180) / 360) * 256;
  const y = 6 + ((82 - lat) / 140) * 160;
  return [x, y];
}

// Geographically faithful coordinates matched cleanly to our stylized world atlas with zero overlap
const PIN_COORDS = {
  1:  [41.0, -116.0],   // US (centered on North America)
  12: [7.5,  -85.0],    // Colombia (northern South America)
  26: [-16.0, -64.0],   // Brazil (central-east South America)
  4:  [55.5,  -2.5],    // Brussels / EU (#4 & #6)
  13: [40.5,   4.0],    // Zurich / FIFA
  2:  [56.5,  21.0],    // Poland / NATO
  3:  [51.0,  40.0],    // Dymer, Ukraine
  7:  [29.5,  33.0],    // Gaza
  5:  [33.5,  55.5],    // Iran
  9:  [-2.5,  15.5],    // DR Congo
  8:  [-18.5, 29.0],    // Zambia
  33: [43.0,  71.5],    // Tajikistan
  10: [22.5,  80.0],    // India–Nepal
  11: [-7.0, 107.0],    // Java, Indonesia
  29: [37.0, 129.0],    // Seoul, S. Korea
  34: [-33.0, 148.0],   // Australia
  35: [-42.5, 169.5],   // Wellington, NZ
};

export function checkPinSpacing(stories) {
  const pts = stories
    .filter((s) => PIN_COORDS[s.id])
    .map((s) => {
      const [lat, lon] = PIN_COORDS[s.id];
      const [x, y] = project(lat, lon);
      const r = s.id <= 3 ? 6.8 : 5.8;
      return { id: s.id, x, y, r };
    });
  let minGap = Infinity;
  let closest = null;
  for (let i = 0; i < pts.length; i++) {
    for (let j = i + 1; j < pts.length; j++) {
      const d = Math.hypot(pts[i].x - pts[j].x, pts[i].y - pts[j].y);
      const gap = d - (pts[i].r + pts[j].r);
      if (gap < minGap) {
        minGap = gap;
        closest = [pts[i].id, pts[j].id, Number(gap.toFixed(1))];
      }
    }
  }
  return { pinCount: pts.length, minGap: Number(minGap.toFixed(1)), closest };
}

export function renderWorldMap(stories) {
  const land = [
    // North & Central America
    'M 15,23 L 36,15 L 58,19 L 77,27 L 91,35 L 87,47 L 76,56 L 68,66 L 59,74 L 55,83 L 49,80 L 44,68 L 36,60 L 29,44 L 17,37 L 11,29 Z',
    // Greenland
    'M 91,8 L 115,7 L 121,18 L 108,30 L 96,25 Z',
    // Cuba
    'M 62,72 L 72,73 L 72,76 L 62,75 Z',
    // South America
    'M 65,85 L 81,84 L 97,97 L 103,108 L 95,128 L 83,152 L 78,160 L 74,154 L 74,132 L 67,112 L 62,97 Z',
    // UK & Ireland
    'M 127,30 L 132,30 L 133,41 L 126,41 Z',
    // Iceland
    'M 116,19 L 123,19 L 122,24 L 115,23 Z',
    // Eurasia
    'M 124,51 L 130,43 L 136,41 L 138,23 L 149,15 L 165,18 L 193,15 L 225,19 L 253,24 L 250,37 L 236,47 L 230,55 L 233,64 L 222,73 L 214,85 L 208,75 L 199,88 L 193,88 L 187,75 L 179,71 L 172,78 L 164,75 L 160,65 L 152,60 L 144,55 L 140,61 L 138,55 L 131,57 L 124,55 Z',
    // Africa
    'M 126,60 L 140,57 L 156,63 L 165,73 L 172,85 L 166,105 L 158,128 L 146,140 L 139,132 L 137,108 L 129,95 L 121,85 L 121,69 Z',
    // Madagascar
    'M 169,115 L 173,115 L 171,129 L 167,127 Z',
    // Japan
    'M 236,47 L 240,43 L 242,54 L 237,60 Z',
    // Philippines
    'M 223,82 L 228,83 L 228,93 L 223,92 Z',
    // Indonesia
    'M 208,95 L 223,99 L 237,100 L 236,106 L 219,105 L 206,98 Z',
    // Australia
    'M 214,114 L 236,111 L 247,125 L 242,141 L 227,143 L 214,133 Z',
    // New Zealand
    'M 252,138 L 259,136 L 261,150 L 253,153 Z',
  ];

  const pinStories = stories.filter((s) => PIN_COORDS[s.id]);
  const pins = pinStories.map((s) => {
    const [lat, lon] = PIN_COORDS[s.id];
    const [x, y] = project(lat, lon);
    const col = REGION_META[s.region]?.color || '#334155';
    const isHero = s.id <= 3;
    const r = isHero ? 6.8 : 5.8;
    const fs = isHero ? 8.0 : 6.9;
    return `<g>
      <circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${r}" fill="${col}" stroke="#FFFFFF" stroke-width="1.3"/>
      <text x="${x.toFixed(1)}" y="${(y + fs * 0.35).toFixed(1)}" text-anchor="middle" font-family="Noto Sans" font-weight="900" font-size="${fs}" fill="#FFFFFF">${s.id}</text>
    </g>`;
  }).join('');

  return `<svg viewBox="0 0 268 172" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">
    <rect width="268" height="172" rx="3" fill="#E6EFF4" stroke="#CBD5DC" stroke-width="1"/>
    <g stroke="#D3E0E8" stroke-width="0.6">
      <line x1="0" y1="43" x2="268" y2="43"/>
      <line x1="0" y1="99" x2="268" y2="99" stroke-dasharray="3 3"/>
      <line x1="0" y1="140" x2="268" y2="140"/>
      <line x1="70" y1="0" x2="70" y2="172"/>
      <line x1="134" y1="0" x2="134" y2="172"/>
      <line x1="198" y1="0" x2="198" y2="172"/>
    </g>
    <g fill="#DCD4C0" stroke="#B6AC96" stroke-width="0.7" stroke-linejoin="round">
      ${land.map((d) => `<path d="${d}"/>`).join('')}
    </g>
    ${pins}
  </svg>`;
}
