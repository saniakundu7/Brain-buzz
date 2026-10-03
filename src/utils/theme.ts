import React from "react";

export type ThemeCategory =
  | "parchment"
  | "sea"
  | "desert"
  | "forest"
  | "volcanic"
  | "frost"
  | "metallic"
  | "celestial"
  | "golden";

export interface LevelTheme {
  id: number;
  name: string;
  category: ThemeCategory;
  tagline: string;
  bg: string;
  mainBg: string;
  mainBgSm: string;
  mainBg95: string;
  accent: string;
  border: string;
  borderSm: string;
  border30: string;
  border40: string;
  border50: string;
  text: string;
  trailGlow?: string;

  // Hand-drawn enhancements
  patternDataUri: string;
  patternSize: string;
  cardPatternStyle: React.CSSProperties;
  bgPatternStyle: React.CSSProperties;
  rivetClass: string;
  accentColor: string;
  glowColor: string;
  badgeBg: string;
  badgeText: string;
  badgeBorder: string;
}

/**
 * Helper to encode an inline SVG string into a valid, optimized data URI
 * for CSS background-image patterns.
 */
function svgPattern(svg: string): string {
  return `data:image/svg+xml,${encodeURIComponent(svg.trim())}`;
}

// ---------------------------------------------------------------------------
// 20 Distinct Hand-Drawn SVG Patterns
// ---------------------------------------------------------------------------

// 0. Paper Map: Sketched cross-hatching & cartography contour curves
const SVG_PAPER_MAP = svgPattern(`
<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60">
  <path d="M0 15 Q15 12, 30 15 T60 15 M0 45 Q15 48, 30 45 T60 45" fill="none" stroke="#854D0E" stroke-width="0.8" stroke-dasharray="2,3" opacity="0.32"/>
  <path d="M10 0 L0 10 M30 0 L0 30 M50 0 L0 50 M60 10 L10 60 M60 30 L30 60 M60 50 L50 60" stroke="#B45309" stroke-width="0.55" opacity="0.25"/>
  <circle cx="45" cy="20" r="1.2" fill="#854D0E" opacity="0.35"/>
  <circle cx="15" cy="40" r="1.2" fill="#854D0E" opacity="0.35"/>
</svg>
`);

// 1. Sunny Coast: Hand-sketched wave ripples & coastal seafoam
const SVG_SUNNY_COAST = svgPattern(`
<svg xmlns="http://www.w3.org/2000/svg" width="64" height="32" viewBox="0 0 64 32">
  <path d="M0 16 C8 12, 16 12, 24 16 S40 20, 48 16 S60 12, 64 16" fill="none" stroke="#0D9488" stroke-width="1.1" stroke-linecap="round" opacity="0.35"/>
  <path d="M-8 28 C0 24, 8 24, 16 28 S32 32, 40 28 S52 24, 60 28" fill="none" stroke="#14B8A6" stroke-width="0.85" opacity="0.28"/>
  <circle cx="18" cy="10" r="1.5" fill="#0D9488" opacity="0.35"/>
  <circle cx="50" cy="22" r="1.3" fill="#0D9488" opacity="0.3"/>
</svg>
`);

// 2. Desert Dunes: Windswept sand dune ridges & stippling
const SVG_DESERT_DUNES = svgPattern(`
<svg xmlns="http://www.w3.org/2000/svg" width="60" height="40" viewBox="0 0 60 40">
  <path d="M0 20 Q15 12, 30 22 T60 18" fill="none" stroke="#D97706" stroke-width="1.1" stroke-linecap="round" opacity="0.35"/>
  <path d="M5 32 Q25 26, 45 34 T65 28" fill="none" stroke="#B45309" stroke-width="0.8" stroke-dasharray="3,3" opacity="0.32"/>
  <circle cx="12" cy="10" r="1.2" fill="#D97706" opacity="0.35"/>
  <circle cx="38" cy="14" r="1.4" fill="#D97706" opacity="0.32"/>
  <circle cx="52" cy="8" r="0.9" fill="#D97706" opacity="0.35"/>
</svg>
`);

// 3. Emerald Forest: Pine needles, botanical veins & dew
const SVG_EMERALD_FOREST = svgPattern(`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48">
  <path d="M12 4 L24 24 M24 24 L14 18 M24 24 L18 12 M24 24 L16 26 M24 24 L36 44 M36 44 L26 38 M36 44 L30 32 M36 44 L28 46" fill="none" stroke="#059669" stroke-width="0.95" stroke-linecap="round" opacity="0.32"/>
  <circle cx="8" cy="38" r="1.6" fill="#10B981" opacity="0.35"/>
  <circle cx="40" cy="12" r="1.3" fill="#10B981" opacity="0.3"/>
</svg>
`);

// 4. Deep Ocean: Oceanic vortex curls & deep water currents
const SVG_DEEP_OCEAN = svgPattern(`
<svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56">
  <path d="M10 28 C10 18, 20 12, 28 12 C36 12, 44 18, 44 26 C44 34, 38 40, 30 40 C24 40, 20 36, 20 30 C20 26, 24 22, 28 22" fill="none" stroke="#0284C7" stroke-width="1" stroke-linecap="round" opacity="0.35"/>
  <circle cx="48" cy="46" r="2.2" fill="#38BDF8" opacity="0.35"/>
  <circle cx="8" cy="10" r="1.6" fill="#38BDF8" opacity="0.3"/>
</svg>
`);

// 5. Coral Reef: Branching sea fan corals & lagoon bubbles
const SVG_CORAL_REEF = svgPattern(`
<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50">
  <path d="M25 45 V25 M25 35 Q18 30, 15 20 M25 30 Q32 25, 35 15 M15 20 Q12 12, 10 10 M35 15 Q38 8, 42 6" fill="none" stroke="#0369A1" stroke-width="1.15" stroke-linecap="round" opacity="0.32"/>
  <circle cx="10" cy="10" r="2.2" fill="#F43F5E" opacity="0.45"/>
  <circle cx="42" cy="6" r="2.4" fill="#FB923C" opacity="0.45"/>
  <circle cx="25" cy="22" r="1.6" fill="#38BDF8" opacity="0.45"/>
</svg>
`);

// 6. Volcanic Crag: Basalt fracture fissures & cooling seams
const SVG_VOLCANIC_CRAG = svgPattern(`
<svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 52 52">
  <path d="M0 12 L18 16 L28 4 L42 20 L52 14 M18 16 L24 38 L14 52 M24 38 L40 44 L52 36" fill="none" stroke="#E11D48" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" opacity="0.35"/>
  <circle cx="28" cy="4" r="1.6" fill="#F43F5E" opacity="0.45"/>
  <circle cx="40" cy="44" r="1.4" fill="#FB7185" opacity="0.45"/>
</svg>
`);

// 7. Inferno Caldera: Rising ember sparks & thermal ripples
const SVG_INFERNO_CALDERA = svgPattern(`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48">
  <path d="M24 40 Q22 28, 26 22 Q28 14, 24 8 Q32 16, 30 26 Q28 34, 32 40" fill="none" stroke="#DC2626" stroke-width="1.05" stroke-linecap="round" opacity="0.35"/>
  <circle cx="12" cy="18" r="1.8" fill="#F59E0B" opacity="0.45"/>
  <circle cx="38" cy="12" r="1.4" fill="#EF4444" opacity="0.45"/>
  <circle cx="16" cy="36" r="1.2" fill="#F97316" opacity="0.4"/>
</svg>
`);

// 8. Enchanted Woods: Botanical fairy spirals & stardust
const SVG_ENCHANTED_WOODS = svgPattern(`
<svg xmlns="http://www.w3.org/2000/svg" width="54" height="54" viewBox="0 0 54 54">
  <path d="M12 44 C12 28, 26 22, 28 14 C29 9, 25 6, 22 8 C18 10, 20 16, 24 16" fill="none" stroke="#9333EA" stroke-width="1.05" stroke-linecap="round" opacity="0.35"/>
  <path d="M42 40 L44 34 L50 32 L44 30 L42 24 L40 30 L34 32 L40 34 Z" fill="#C084FC" opacity="0.4"/>
  <circle cx="34" cy="46" r="1.6" fill="#E879F9" opacity="0.45"/>
  <circle cx="8" cy="18" r="1.3" fill="#A855F7" opacity="0.4"/>
</svg>
`);

// 9. Glow Mushroom Forest: Spore clouds & mycelium strands
const SVG_GLOW_MUSHROOM = svgPattern(`
<svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56">
  <path d="M18 36 C18 24, 38 24, 38 36 Z M28 36 V48" fill="none" stroke="#7C3AED" stroke-width="1.05" stroke-linecap="round" opacity="0.35"/>
  <circle cx="24" cy="30" r="1.2" fill="#C084FC" opacity="0.55"/>
  <circle cx="32" cy="30" r="1.2" fill="#C084FC" opacity="0.55"/>
  <circle cx="10" cy="14" r="2" fill="#8B5CF6" opacity="0.4"/>
  <circle cx="46" cy="18" r="1.4" fill="#A78BFA" opacity="0.4"/>
</svg>
`);

// 10. Frost Peaks: Hand-sketched six-point crystalline snowflake stars
const SVG_FROST_PEAKS = svgPattern(`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48">
  <path d="M24 6 V42 M6 24 H42 M11 11 L37 37 M11 37 L37 11 M24 14 L20 10 M24 14 L28 10 M24 34 L20 38 M24 34 L28 38 M14 24 L10 20 M14 24 L10 28 M34 24 L38 20 M34 24 L38 28" fill="none" stroke="#0891B2" stroke-width="0.9" stroke-linecap="round" opacity="0.35"/>
</svg>
`);

// 11. Glacial Cavern: Stalactite chevrons & hexagonal ice lattices
const SVG_GLACIAL_CAVERN = svgPattern(`
<svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44">
  <path d="M0 0 L11 22 L22 0 L33 22 L44 0 M11 22 L22 44 L33 22" fill="none" stroke="#0097A7" stroke-width="0.9" stroke-linecap="round" stroke-linejoin="round" opacity="0.32"/>
  <circle cx="22" cy="12" r="1.6" fill="#22D3EE" opacity="0.45"/>
  <circle cx="4" cy="34" r="1.3" fill="#22D3EE" opacity="0.4"/>
</svg>
`);

// 12. Sun-baked Canyon: Layered sedimentary strata & weathered rock
const SVG_ROCKY_CANYON = svgPattern(`
<svg xmlns="http://www.w3.org/2000/svg" width="60" height="36" viewBox="0 0 60 36">
  <path d="M0 8 Q15 6, 30 10 T60 7 M0 18 Q20 22, 40 16 T60 20 M0 28 Q18 26, 36 30 T60 27" fill="none" stroke="#EA580C" stroke-width="0.85" stroke-dasharray="8,3,4,3" opacity="0.35"/>
  <circle cx="16" cy="14" r="1.1" fill="#C2410C" opacity="0.42"/>
  <circle cx="48" cy="24" r="1.3" fill="#C2410C" opacity="0.38"/>
</svg>
`);

// 13. Crimson Badlands: Mesa cliff edges & dried terracotta earth
const SVG_RED_DESERT = svgPattern(`
<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50">
  <path d="M5 25 L18 18 L32 24 L45 15 M18 18 V35 M32 24 V42 M18 35 L5 42 M18 35 L32 42" fill="none" stroke="#C0392B" stroke-width="0.95" stroke-linecap="round" stroke-linejoin="round" opacity="0.35"/>
  <circle cx="38" cy="8" r="2.6" fill="#E67E22" opacity="0.4"/>
</svg>
`);

// 14. Steampunk Clockwork: Blueprint engineering grid & gear teeth
const SVG_CLOCK_TOWER = svgPattern(`
<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50">
  <path d="M0 25 H50 M25 0 V50" fill="none" stroke="#475569" stroke-width="0.55" stroke-dasharray="2,3" opacity="0.32"/>
  <circle cx="25" cy="25" r="14" fill="none" stroke="#475569" stroke-width="0.85" opacity="0.35"/>
  <path d="M25 7 V11 M25 39 V43 M7 25 H11 M39 25 H43" stroke="#334155" stroke-width="1.3" opacity="0.42"/>
  <circle cx="25" cy="25" r="3.2" fill="#64748B" opacity="0.45"/>
</svg>
`);

// 15. Forged Foundry: Diagonal steel girders & heavy industrial rivets
const SVG_IRON_FACTORY = svgPattern(`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48">
  <path d="M0 0 L48 48 M48 0 L0 48" fill="none" stroke="#34495E" stroke-width="0.8" opacity="0.32"/>
  <circle cx="24" cy="24" r="2.6" fill="#5D6D7E" opacity="0.5"/>
  <circle cx="4" cy="4" r="1.6" fill="#34495E" opacity="0.42"/>
  <circle cx="44" cy="4" r="1.6" fill="#34495E" opacity="0.42"/>
  <circle cx="4" cy="44" r="1.6" fill="#34495E" opacity="0.42"/>
  <circle cx="44" cy="44" r="1.6" fill="#34495E" opacity="0.42"/>
</svg>
`);

// 16. Starlit Observatory: Constellation charts & diamond star bursts
const SVG_STAR_SKY = svgPattern(`
<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60">
  <path d="M12 18 L28 12 L44 26 L52 14 M28 12 L36 42" fill="none" stroke="#4F46E5" stroke-width="0.8" stroke-dasharray="3,3" opacity="0.35"/>
  <path d="M28 8 L30 12 L34 14 L30 16 L28 20 L26 16 L22 14 L26 12 Z" fill="#FBBF24" opacity="0.55"/>
  <circle cx="12" cy="18" r="1.6" fill="#818CF8" opacity="0.5"/>
  <circle cx="44" cy="26" r="1.9" fill="#818CF8" opacity="0.5"/>
  <circle cx="36" cy="42" r="1.6" fill="#FBBF24" opacity="0.45"/>
</svg>
`);

// 17. Celestial Nebula: Orbital rings & cosmic stardust
const SVG_GALAXY_GATE = svgPattern(`
<svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56">
  <ellipse cx="28" cy="28" rx="22" ry="9" transform="rotate(-25 28 28)" fill="none" stroke="#6D28D9" stroke-width="0.9" opacity="0.35"/>
  <circle cx="28" cy="28" r="4.2" fill="#C084FC" opacity="0.4"/>
  <circle cx="14" cy="18" r="1.3" fill="#E879F9" opacity="0.5"/>
  <circle cx="42" cy="38" r="1.6" fill="#DDD6FE" opacity="0.55"/>
</svg>
`);

// 18. Ancient Sanctuary: Carved stone meander frets & sacred vines
const SVG_ANCIENT_TEMPLE = svgPattern(`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48">
  <path d="M6 6 H24 V18 H14 V28 H28 V12 H38 V42 H22 V34 H30" fill="none" stroke="#2E7D32" stroke-width="0.95" stroke-linecap="round" stroke-linejoin="round" opacity="0.35"/>
  <circle cx="10" cy="38" r="1.9" fill="#4ADE80" opacity="0.45"/>
  <circle cx="42" cy="10" r="1.6" fill="#86EFAC" opacity="0.45"/>
</svg>
`);

// 19. Sovereign Summit: Radiant sunburst rays & gilded laurels
const SVG_GOLDEN_SUMMIT = svgPattern(`
<svg xmlns="http://www.w3.org/2000/svg" width="54" height="54" viewBox="0 0 54 54">
  <path d="M27 4 L30 18 L44 14 L34 24 L46 32 L32 34 L36 48 L27 38 L18 48 L22 34 L8 32 L20 24 L10 14 L24 18 Z" fill="none" stroke="#CA8A04" stroke-width="0.9" opacity="0.35"/>
  <circle cx="27" cy="27" r="3.8" fill="#F59E0B" opacity="0.5"/>
  <circle cx="8" cy="8" r="1.6" fill="#FDE047" opacity="0.55"/>
  <circle cx="46" cy="46" r="1.6" fill="#FDE047" opacity="0.55"/>
</svg>
`);

// ---------------------------------------------------------------------------
// Rotating Array of 20 Curated Visual Themes
// Cycles every 10 levels to give each milestone an authentic hand-drawn realm.
// ---------------------------------------------------------------------------

export const levelThemes: LevelTheme[] = [
  // Levels 1–10: Classic Paper Map
  {
    id: 0,
    name: "Paper Map",
    category: "parchment",
    tagline: "Field Sketch & Parchment",
    bg: "bg-[#F4ECD8]",
    mainBg: "bg-[#FAF3E3]",
    mainBgSm: "sm:bg-[#FAF3E3]/95",
    mainBg95: "bg-[#FAF3E3]/95",
    accent: "bg-[#FEF3C7]",
    border: "border-[#B45309]",
    borderSm: "sm:border-[#854D0E]/30",
    border30: "border-[#B45309]/30",
    border40: "border-[#B45309]/40",
    border50: "border-[#B45309]/50",
    text: "text-[#5B2609]",
    trailGlow: "#D97706",
    patternDataUri: SVG_PAPER_MAP,
    patternSize: "60px 60px",
    cardPatternStyle: {
      backgroundImage: `url("${SVG_PAPER_MAP}")`,
      backgroundSize: "60px 60px",
      backgroundRepeat: "repeat",
    },
    bgPatternStyle: {
      backgroundImage: `url("${SVG_PAPER_MAP}")`,
      backgroundSize: "60px 60px",
      backgroundRepeat: "repeat",
    },
    rivetClass: "bg-[#D97706] border-[#78350F]",
    accentColor: "#D97706",
    glowColor: "#F59E0B",
    badgeBg: "bg-[#FEF3C7]",
    badgeText: "text-[#78350F]",
    badgeBorder: "border-[#D97706]/60",
  },

  // Levels 11–20: Sunny Coast
  {
    id: 1,
    name: "Sunny Coast",
    category: "sea",
    tagline: "Tide Pools & Seafoam",
    bg: "bg-[#E6F4EA]",
    mainBg: "bg-[#F0FDF4]",
    mainBgSm: "sm:bg-[#F0FDF4]/95",
    mainBg95: "bg-[#F0FDF4]/95",
    accent: "bg-[#DCFCE7]",
    border: "border-[#16A34A]",
    borderSm: "sm:border-[#16A34A]/30",
    border30: "border-[#16A34A]/30",
    border40: "border-[#16A34A]/40",
    border50: "border-[#16A34A]/50",
    text: "text-[#14532D]",
    trailGlow: "#10B981",
    patternDataUri: SVG_SUNNY_COAST,
    patternSize: "64px 32px",
    cardPatternStyle: {
      backgroundImage: `url("${SVG_SUNNY_COAST}")`,
      backgroundSize: "64px 32px",
      backgroundRepeat: "repeat",
    },
    bgPatternStyle: {
      backgroundImage: `url("${SVG_SUNNY_COAST}")`,
      backgroundSize: "64px 32px",
      backgroundRepeat: "repeat",
    },
    rivetClass: "bg-[#0D9488] border-[#134E4A]",
    accentColor: "#0D9488",
    glowColor: "#2DD4BF",
    badgeBg: "bg-[#CCFBF1]",
    badgeText: "text-[#115E59]",
    badgeBorder: "border-[#14B8A6]/60",
  },

  // Levels 21–30: Desert Dunes
  {
    id: 2,
    name: "Desert Dunes",
    category: "desert",
    tagline: "Windswept Sandstone",
    bg: "bg-[#FEF3C7]",
    mainBg: "bg-[#FFFBEB]",
    mainBgSm: "sm:bg-[#FFFBEB]/95",
    mainBg95: "bg-[#FFFBEB]/95",
    accent: "bg-[#FDE68A]",
    border: "border-[#D97706]",
    borderSm: "sm:border-[#D97706]/30",
    border30: "border-[#D97706]/30",
    border40: "border-[#D97706]/40",
    border50: "border-[#D97706]/50",
    text: "text-[#78350F]",
    trailGlow: "#F59E0B",
    patternDataUri: SVG_DESERT_DUNES,
    patternSize: "60px 40px",
    cardPatternStyle: {
      backgroundImage: `url("${SVG_DESERT_DUNES}")`,
      backgroundSize: "60px 40px",
      backgroundRepeat: "repeat",
    },
    bgPatternStyle: {
      backgroundImage: `url("${SVG_DESERT_DUNES}")`,
      backgroundSize: "60px 40px",
      backgroundRepeat: "repeat",
    },
    rivetClass: "bg-[#D97706] border-[#78350F]",
    accentColor: "#D97706",
    glowColor: "#FBBF24",
    badgeBg: "bg-[#FEF3C7]",
    badgeText: "text-[#78350F]",
    badgeBorder: "border-[#D97706]/60",
  },

  // Levels 31–40: Emerald Forest
  {
    id: 3,
    name: "Emerald Forest",
    category: "forest",
    tagline: "Mossy Pines & Twigs",
    bg: "bg-[#D1E7DD]",
    mainBg: "bg-[#E6F4EA]",
    mainBgSm: "sm:bg-[#E6F4EA]/95",
    mainBg95: "bg-[#E6F4EA]/95",
    accent: "bg-[#A7F3D0]",
    border: "border-[#065F46]",
    borderSm: "sm:border-[#065F46]/30",
    border30: "border-[#065F46]/30",
    border40: "border-[#065F46]/40",
    border50: "border-[#065F46]/50",
    text: "text-[#064E3B]",
    trailGlow: "#059669",
    patternDataUri: SVG_EMERALD_FOREST,
    patternSize: "48px 48px",
    cardPatternStyle: {
      backgroundImage: `url("${SVG_EMERALD_FOREST}")`,
      backgroundSize: "48px 48px",
      backgroundRepeat: "repeat",
    },
    bgPatternStyle: {
      backgroundImage: `url("${SVG_EMERALD_FOREST}")`,
      backgroundSize: "48px 48px",
      backgroundRepeat: "repeat",
    },
    rivetClass: "bg-[#059669] border-[#064E3B]",
    accentColor: "#059669",
    glowColor: "#34D399",
    badgeBg: "bg-[#D1FAE5]",
    badgeText: "text-[#065F46]",
    badgeBorder: "border-[#059669]/60",
  },

  // Levels 41–50: Deep Ocean
  {
    id: 4,
    name: "Deep Ocean",
    category: "sea",
    tagline: "Submerged Swells & Vortex",
    bg: "bg-[#E0F2FE]",
    mainBg: "bg-[#F0F9FF]",
    mainBgSm: "sm:bg-[#F0F9FF]/95",
    mainBg95: "bg-[#F0F9FF]/95",
    accent: "bg-[#BAE6FD]",
    border: "border-[#0284C7]",
    borderSm: "sm:border-[#0284C7]/30",
    border30: "border-[#0284C7]/30",
    border40: "border-[#0284C7]/40",
    border50: "border-[#0284C7]/50",
    text: "text-[#0369A1]",
    trailGlow: "#0EA5E9",
    patternDataUri: SVG_DEEP_OCEAN,
    patternSize: "56px 56px",
    cardPatternStyle: {
      backgroundImage: `url("${SVG_DEEP_OCEAN}")`,
      backgroundSize: "56px 56px",
      backgroundRepeat: "repeat",
    },
    bgPatternStyle: {
      backgroundImage: `url("${SVG_DEEP_OCEAN}")`,
      backgroundSize: "56px 56px",
      backgroundRepeat: "repeat",
    },
    rivetClass: "bg-[#0284C7] border-[#0C4A6E]",
    accentColor: "#0284C7",
    glowColor: "#38BDF8",
    badgeBg: "bg-[#E0F2FE]",
    badgeText: "text-[#075985]",
    badgeBorder: "border-[#0284C7]/60",
  },

  // Levels 51–60: Coral Reef
  {
    id: 5,
    name: "Coral Reef",
    category: "sea",
    tagline: "Tropical Fan & Lagoon",
    bg: "bg-[#D9F1FF]",
    mainBg: "bg-[#EBF8FF]",
    mainBgSm: "sm:bg-[#EBF8FF]/95",
    mainBg95: "bg-[#EBF8FF]/95",
    accent: "bg-[#B9E6FE]",
    border: "border-[#0369A1]",
    borderSm: "sm:border-[#0369A1]/30",
    border30: "border-[#0369A1]/30",
    border40: "border-[#0369A1]/40",
    border50: "border-[#0369A1]/50",
    text: "text-[#0C4A6E]",
    trailGlow: "#38BDF8",
    patternDataUri: SVG_CORAL_REEF,
    patternSize: "50px 50px",
    cardPatternStyle: {
      backgroundImage: `url("${SVG_CORAL_REEF}")`,
      backgroundSize: "50px 50px",
      backgroundRepeat: "repeat",
    },
    bgPatternStyle: {
      backgroundImage: `url("${SVG_CORAL_REEF}")`,
      backgroundSize: "50px 50px",
      backgroundRepeat: "repeat",
    },
    rivetClass: "bg-[#F43F5E] border-[#881337]",
    accentColor: "#F43F5E",
    glowColor: "#FB7185",
    badgeBg: "bg-[#FFE4E6]",
    badgeText: "text-[#9F1239]",
    badgeBorder: "border-[#F43F5E]/60",
  },

  // Levels 61–70: Volcanic Crag
  {
    id: 6,
    name: "Volcanic Crag",
    category: "volcanic",
    tagline: "Basalt Fissures & Obsidian",
    bg: "bg-[#FFE4E6]",
    mainBg: "bg-[#FFF1F2]",
    mainBgSm: "sm:bg-[#FFF1F2]/95",
    mainBg95: "bg-[#FFF1F2]/95",
    accent: "bg-[#FECDD3]",
    border: "border-[#E11D48]",
    borderSm: "sm:border-[#E11D48]/30",
    border30: "border-[#E11D48]/30",
    border40: "border-[#E11D48]/40",
    border50: "border-[#E11D48]/50",
    text: "text-[#9F1239]",
    trailGlow: "#F43F5E",
    patternDataUri: SVG_VOLCANIC_CRAG,
    patternSize: "52px 52px",
    cardPatternStyle: {
      backgroundImage: `url("${SVG_VOLCANIC_CRAG}")`,
      backgroundSize: "52px 52px",
      backgroundRepeat: "repeat",
    },
    bgPatternStyle: {
      backgroundImage: `url("${SVG_VOLCANIC_CRAG}")`,
      backgroundSize: "52px 52px",
      backgroundRepeat: "repeat",
    },
    rivetClass: "bg-[#E11D48] border-[#4C0519]",
    accentColor: "#E11D48",
    glowColor: "#FB7185",
    badgeBg: "bg-[#FFE4E6]",
    badgeText: "text-[#9F1239]",
    badgeBorder: "border-[#E11D48]/60",
  },

  // Levels 71–80: Inferno Caldera
  {
    id: 7,
    name: "Inferno Caldera",
    category: "volcanic",
    tagline: "Molten Sparks & Embers",
    bg: "bg-[#FEE2E2]",
    mainBg: "bg-[#FEF2F2]",
    mainBgSm: "sm:bg-[#FEF2F2]/95",
    mainBg95: "bg-[#FEF2F2]/95",
    accent: "bg-[#FECACA]",
    border: "border-[#DC2626]",
    borderSm: "sm:border-[#DC2626]/30",
    border30: "border-[#DC2626]/30",
    border40: "border-[#DC2626]/40",
    border50: "border-[#DC2626]/50",
    text: "text-[#991B1B]",
    trailGlow: "#EF4444",
    patternDataUri: SVG_INFERNO_CALDERA,
    patternSize: "48px 48px",
    cardPatternStyle: {
      backgroundImage: `url("${SVG_INFERNO_CALDERA}")`,
      backgroundSize: "48px 48px",
      backgroundRepeat: "repeat",
    },
    bgPatternStyle: {
      backgroundImage: `url("${SVG_INFERNO_CALDERA}")`,
      backgroundSize: "48px 48px",
      backgroundRepeat: "repeat",
    },
    rivetClass: "bg-[#DC2626] border-[#450A0A]",
    accentColor: "#DC2626",
    glowColor: "#F87171",
    badgeBg: "bg-[#FEE2E2]",
    badgeText: "text-[#991B1B]",
    badgeBorder: "border-[#DC2626]/60",
  },

  // Levels 81–90: Enchanted Woods
  {
    id: 8,
    name: "Enchanted Woods",
    category: "forest",
    tagline: "Mystic Ferns & Fairy Dust",
    bg: "bg-[#F3E8FF]",
    mainBg: "bg-[#FAF5FF]",
    mainBgSm: "sm:bg-[#FAF5FF]/95",
    mainBg95: "bg-[#FAF5FF]/95",
    accent: "bg-[#E9D5FF]",
    border: "border-[#9333EA]",
    borderSm: "sm:border-[#9333EA]/30",
    border30: "border-[#9333EA]/30",
    border40: "border-[#9333EA]/40",
    border50: "border-[#9333EA]/50",
    text: "text-[#6B21A8]",
    trailGlow: "#A855F7",
    patternDataUri: SVG_ENCHANTED_WOODS,
    patternSize: "54px 54px",
    cardPatternStyle: {
      backgroundImage: `url("${SVG_ENCHANTED_WOODS}")`,
      backgroundSize: "54px 54px",
      backgroundRepeat: "repeat",
    },
    bgPatternStyle: {
      backgroundImage: `url("${SVG_ENCHANTED_WOODS}")`,
      backgroundSize: "54px 54px",
      backgroundRepeat: "repeat",
    },
    rivetClass: "bg-[#9333EA] border-[#3B0764]",
    accentColor: "#9333EA",
    glowColor: "#C084FC",
    badgeBg: "bg-[#F3E8FF]",
    badgeText: "text-[#6B21A8]",
    badgeBorder: "border-[#9333EA]/60",
  },

  // Levels 91–100: Glow Mushroom Forest
  {
    id: 9,
    name: "Glow Mushroom Forest",
    category: "forest",
    tagline: "Luminous Spores & Roots",
    bg: "bg-[#EDE9FE]",
    mainBg: "bg-[#F5F3FF]",
    mainBgSm: "sm:bg-[#F5F3FF]/95",
    mainBg95: "bg-[#F5F3FF]/95",
    accent: "bg-[#DDD6FE]",
    border: "border-[#7C3AED]",
    borderSm: "sm:border-[#7C3AED]/30",
    border30: "border-[#7C3AED]/30",
    border40: "border-[#7C3AED]/40",
    border50: "border-[#7C3AED]/50",
    text: "text-[#5B21B6]",
    trailGlow: "#8B5CF6",
    patternDataUri: SVG_GLOW_MUSHROOM,
    patternSize: "56px 56px",
    cardPatternStyle: {
      backgroundImage: `url("${SVG_GLOW_MUSHROOM}")`,
      backgroundSize: "56px 56px",
      backgroundRepeat: "repeat",
    },
    bgPatternStyle: {
      backgroundImage: `url("${SVG_GLOW_MUSHROOM}")`,
      backgroundSize: "56px 56px",
      backgroundRepeat: "repeat",
    },
    rivetClass: "bg-[#7C3AED] border-[#2E1065]",
    accentColor: "#7C3AED",
    glowColor: "#A78BFA",
    badgeBg: "bg-[#EDE9FE]",
    badgeText: "text-[#5B21B6]",
    badgeBorder: "border-[#7C3AED]/60",
  },

  // Levels 101–110: Frost Peaks
  {
    id: 10,
    name: "Frost Peaks",
    category: "frost",
    tagline: "Glacial Stars & Alpine Ice",
    bg: "bg-[#CFFAFE]",
    mainBg: "bg-[#ECFEFF]",
    mainBgSm: "sm:bg-[#ECFEFF]/95",
    mainBg95: "bg-[#ECFEFF]/95",
    accent: "bg-[#A5F3FC]",
    border: "border-[#0891B2]",
    borderSm: "sm:border-[#0891B2]/30",
    border30: "border-[#0891B2]/30",
    border40: "border-[#0891B2]/40",
    border50: "border-[#0891B2]/50",
    text: "text-[#155E75]",
    trailGlow: "#06B6D4",
    patternDataUri: SVG_FROST_PEAKS,
    patternSize: "48px 48px",
    cardPatternStyle: {
      backgroundImage: `url("${SVG_FROST_PEAKS}")`,
      backgroundSize: "48px 48px",
      backgroundRepeat: "repeat",
    },
    bgPatternStyle: {
      backgroundImage: `url("${SVG_FROST_PEAKS}")`,
      backgroundSize: "48px 48px",
      backgroundRepeat: "repeat",
    },
    rivetClass: "bg-[#0891B2] border-[#164E63]",
    accentColor: "#0891B2",
    glowColor: "#22D3EE",
    badgeBg: "bg-[#CFFAFE]",
    badgeText: "text-[#155E75]",
    badgeBorder: "border-[#0891B2]/60",
  },

  // Levels 111–120: Glacial Cavern
  {
    id: 11,
    name: "Glacial Cavern",
    category: "frost",
    tagline: "Icicle Chevrons & Lattices",
    bg: "bg-[#E0F7FA]",
    mainBg: "bg-[#F2FCFD]",
    mainBgSm: "sm:bg-[#F2FCFD]/95",
    mainBg95: "bg-[#F2FCFD]/95",
    accent: "bg-[#B2EBF2]",
    border: "border-[#0097A7]",
    borderSm: "sm:border-[#0097A7]/30",
    border30: "border-[#0097A7]/30",
    border40: "border-[#0097A7]/40",
    border50: "border-[#0097A7]/50",
    text: "text-[#006064]",
    trailGlow: "#00BCD4",
    patternDataUri: SVG_GLACIAL_CAVERN,
    patternSize: "44px 44px",
    cardPatternStyle: {
      backgroundImage: `url("${SVG_GLACIAL_CAVERN}")`,
      backgroundSize: "44px 44px",
      backgroundRepeat: "repeat",
    },
    bgPatternStyle: {
      backgroundImage: `url("${SVG_GLACIAL_CAVERN}")`,
      backgroundSize: "44px 44px",
      backgroundRepeat: "repeat",
    },
    rivetClass: "bg-[#0097A7] border-[#004D40]",
    accentColor: "#0097A7",
    glowColor: "#4DD0E1",
    badgeBg: "bg-[#E0F7FA]",
    badgeText: "text-[#006064]",
    badgeBorder: "border-[#0097A7]/60",
  },

  // Levels 121–130: Rocky Canyon
  {
    id: 12,
    name: "Rocky Canyon",
    category: "desert",
    tagline: "Sedimentary Strata Striations",
    bg: "bg-[#FFEDD5]",
    mainBg: "bg-[#FFF7ED]",
    mainBgSm: "sm:bg-[#FFF7ED]/95",
    mainBg95: "bg-[#FFF7ED]/95",
    accent: "bg-[#FED7AA]",
    border: "border-[#EA580C]",
    borderSm: "sm:border-[#EA580C]/30",
    border30: "border-[#EA580C]/30",
    border40: "border-[#EA580C]/40",
    border50: "border-[#EA580C]/50",
    text: "text-[#9A3412]",
    trailGlow: "#F97316",
    patternDataUri: SVG_ROCKY_CANYON,
    patternSize: "60px 36px",
    cardPatternStyle: {
      backgroundImage: `url("${SVG_ROCKY_CANYON}")`,
      backgroundSize: "60px 36px",
      backgroundRepeat: "repeat",
    },
    bgPatternStyle: {
      backgroundImage: `url("${SVG_ROCKY_CANYON}")`,
      backgroundSize: "60px 36px",
      backgroundRepeat: "repeat",
    },
    rivetClass: "bg-[#EA580C] border-[#7C2D12]",
    accentColor: "#EA580C",
    glowColor: "#FB923C",
    badgeBg: "bg-[#FFEDD5]",
    badgeText: "text-[#9A3412]",
    badgeBorder: "border-[#EA580C]/60",
  },

  // Levels 131–140: Red Desert
  {
    id: 13,
    name: "Red Desert",
    category: "desert",
    tagline: "Terracotta Mesa & Adobe",
    bg: "bg-[#FDEBD0]",
    mainBg: "bg-[#FEF5E7]",
    mainBgSm: "sm:bg-[#FEF5E7]/95",
    mainBg95: "bg-[#FEF5E7]/95",
    accent: "bg-[#FAD7A0]",
    border: "border-[#C0392B]",
    borderSm: "sm:border-[#C0392B]/30",
    border30: "border-[#C0392B]/30",
    border40: "border-[#C0392B]/40",
    border50: "border-[#C0392B]/50",
    text: "text-[#78281F]",
    trailGlow: "#E67E22",
    patternDataUri: SVG_RED_DESERT,
    patternSize: "50px 50px",
    cardPatternStyle: {
      backgroundImage: `url("${SVG_RED_DESERT}")`,
      backgroundSize: "50px 50px",
      backgroundRepeat: "repeat",
    },
    bgPatternStyle: {
      backgroundImage: `url("${SVG_RED_DESERT}")`,
      backgroundSize: "50px 50px",
      backgroundRepeat: "repeat",
    },
    rivetClass: "bg-[#C0392B] border-[#641E16]",
    accentColor: "#C0392B",
    glowColor: "#E67E22",
    badgeBg: "bg-[#FDEBD0]",
    badgeText: "text-[#78281F]",
    badgeBorder: "border-[#C0392B]/60",
  },

  // Levels 141–150: Clock Tower
  {
    id: 14,
    name: "Clock Tower",
    category: "metallic",
    tagline: "Draftsman Grid & Caliper Arcs",
    bg: "bg-[#E2E8F0]",
    mainBg: "bg-[#F8FAFC]",
    mainBgSm: "sm:bg-[#F8FAFC]/95",
    mainBg95: "bg-[#F8FAFC]/95",
    accent: "bg-[#CBD5E1]",
    border: "border-[#475569]",
    borderSm: "sm:border-[#475569]/30",
    border30: "border-[#475569]/30",
    border40: "border-[#475569]/40",
    border50: "border-[#475569]/50",
    text: "text-[#1E293B]",
    trailGlow: "#64748B",
    patternDataUri: SVG_CLOCK_TOWER,
    patternSize: "50px 50px",
    cardPatternStyle: {
      backgroundImage: `url("${SVG_CLOCK_TOWER}")`,
      backgroundSize: "50px 50px",
      backgroundRepeat: "repeat",
    },
    bgPatternStyle: {
      backgroundImage: `url("${SVG_CLOCK_TOWER}")`,
      backgroundSize: "50px 50px",
      backgroundRepeat: "repeat",
    },
    rivetClass: "bg-[#475569] border-[#0F172A]",
    accentColor: "#475569",
    glowColor: "#94A3B8",
    badgeBg: "bg-[#E2E8F0]",
    badgeText: "text-[#1E293B]",
    badgeBorder: "border-[#475569]/60",
  },

  // Levels 151–160: Iron Factory
  {
    id: 15,
    name: "Iron Factory",
    category: "metallic",
    tagline: "Cross-Brace Girders & Plates",
    bg: "bg-[#D5D8DC]",
    mainBg: "bg-[#EBEDEF]",
    mainBgSm: "sm:bg-[#EBEDEF]/95",
    mainBg95: "bg-[#EBEDEF]/95",
    accent: "bg-[#BDC3C7]",
    border: "border-[#34495E]",
    borderSm: "sm:border-[#34495E]/30",
    border30: "border-[#34495E]/30",
    border40: "border-[#34495E]/40",
    border50: "border-[#34495E]/50",
    text: "text-[#17202A]",
    trailGlow: "#5D6D7E",
    patternDataUri: SVG_IRON_FACTORY,
    patternSize: "48px 48px",
    cardPatternStyle: {
      backgroundImage: `url("${SVG_IRON_FACTORY}")`,
      backgroundSize: "48px 48px",
      backgroundRepeat: "repeat",
    },
    bgPatternStyle: {
      backgroundImage: `url("${SVG_IRON_FACTORY}")`,
      backgroundSize: "48px 48px",
      backgroundRepeat: "repeat",
    },
    rivetClass: "bg-[#34495E] border-[#17202A]",
    accentColor: "#34495E",
    glowColor: "#7F8C8D",
    badgeBg: "bg-[#D5D8DC]",
    badgeText: "text-[#17202A]",
    badgeBorder: "border-[#34495E]/60",
  },

  // Levels 161–170: Star Sky
  {
    id: 16,
    name: "Star Sky",
    category: "celestial",
    tagline: "Constellation Lines & Starlight",
    bg: "bg-[#E0E7FF]",
    mainBg: "bg-[#EEF2FF]",
    mainBgSm: "sm:bg-[#EEF2FF]/95",
    mainBg95: "bg-[#EEF2FF]/95",
    accent: "bg-[#C7D2FE]",
    border: "border-[#4F46E5]",
    borderSm: "sm:border-[#4F46E5]/30",
    border30: "border-[#4F46E5]/30",
    border40: "border-[#4F46E5]/40",
    border50: "border-[#4F46E5]/50",
    text: "text-[#312E81]",
    trailGlow: "#6366F1",
    patternDataUri: SVG_STAR_SKY,
    patternSize: "60px 60px",
    cardPatternStyle: {
      backgroundImage: `url("${SVG_STAR_SKY}")`,
      backgroundSize: "60px 60px",
      backgroundRepeat: "repeat",
    },
    bgPatternStyle: {
      backgroundImage: `url("${SVG_STAR_SKY}")`,
      backgroundSize: "60px 60px",
      backgroundRepeat: "repeat",
    },
    rivetClass: "bg-[#4F46E5] border-[#1E1B4B]",
    accentColor: "#4F46E5",
    glowColor: "#818CF8",
    badgeBg: "bg-[#E0E7FF]",
    badgeText: "text-[#312E81]",
    badgeBorder: "border-[#4F46E5]/60",
  },

  // Levels 171–180: Galaxy Gate
  {
    id: 17,
    name: "Galaxy Gate",
    category: "celestial",
    tagline: "Orbital Rings & Cosmic Aurora",
    bg: "bg-[#EDE9FE]",
    mainBg: "bg-[#FAF5FF]",
    mainBgSm: "sm:bg-[#FAF5FF]/95",
    mainBg95: "bg-[#FAF5FF]/95",
    accent: "bg-[#DDD6FE]",
    border: "border-[#6D28D9]",
    borderSm: "sm:border-[#6D28D9]/30",
    border30: "border-[#6D28D9]/30",
    border40: "border-[#6D28D9]/40",
    border50: "border-[#6D28D9]/50",
    text: "text-[#4C1D95]",
    trailGlow: "#7C3AED",
    patternDataUri: SVG_GALAXY_GATE,
    patternSize: "56px 56px",
    cardPatternStyle: {
      backgroundImage: `url("${SVG_GALAXY_GATE}")`,
      backgroundSize: "56px 56px",
      backgroundRepeat: "repeat",
    },
    bgPatternStyle: {
      backgroundImage: `url("${SVG_GALAXY_GATE}")`,
      backgroundSize: "56px 56px",
      backgroundRepeat: "repeat",
    },
    rivetClass: "bg-[#6D28D9] border-[#2E1065]",
    accentColor: "#6D28D9",
    glowColor: "#A78BFA",
    badgeBg: "bg-[#EDE9FE]",
    badgeText: "text-[#4C1D95]",
    badgeBorder: "border-[#6D28D9]/60",
  },

  // Levels 181–190: Ancient Temple
  {
    id: 18,
    name: "Ancient Temple",
    category: "parchment",
    tagline: "Stone Key Frets & Overgrowth",
    bg: "bg-[#D5E8D4]",
    mainBg: "bg-[#E9F7EF]",
    mainBgSm: "sm:bg-[#E9F7EF]/95",
    mainBg95: "bg-[#E9F7EF]/95",
    accent: "bg-[#C8E6C9]",
    border: "border-[#2E7D32]",
    borderSm: "sm:border-[#2E7D32]/30",
    border30: "border-[#2E7D32]/30",
    border40: "border-[#2E7D32]/40",
    border50: "border-[#2E7D32]/50",
    text: "text-[#1B5E20]",
    trailGlow: "#43A047",
    patternDataUri: SVG_ANCIENT_TEMPLE,
    patternSize: "48px 48px",
    cardPatternStyle: {
      backgroundImage: `url("${SVG_ANCIENT_TEMPLE}")`,
      backgroundSize: "48px 48px",
      backgroundRepeat: "repeat",
    },
    bgPatternStyle: {
      backgroundImage: `url("${SVG_ANCIENT_TEMPLE}")`,
      backgroundSize: "48px 48px",
      backgroundRepeat: "repeat",
    },
    rivetClass: "bg-[#2E7D32] border-[#1B5E20]",
    accentColor: "#2E7D32",
    glowColor: "#4ADE80",
    badgeBg: "bg-[#D5E8D4]",
    badgeText: "text-[#1B5E20]",
    badgeBorder: "border-[#2E7D32]/60",
  },

  // Levels 191–200: Golden Summit
  {
    id: 19,
    name: "Golden Summit",
    category: "golden",
    tagline: "Gilded Sunburst & Imperial Laurels",
    bg: "bg-[#FEF08A]",
    mainBg: "bg-[#FEF9C3]",
    mainBgSm: "sm:bg-[#FEF9C3]/95",
    mainBg95: "bg-[#FEF9C3]/95",
    accent: "bg-[#FDE047]",
    border: "border-[#CA8A04]",
    borderSm: "sm:border-[#CA8A04]/30",
    border30: "border-[#CA8A04]/30",
    border40: "border-[#CA8A04]/40",
    border50: "border-[#CA8A04]/50",
    text: "text-[#713F12]",
    trailGlow: "#EAB308",
    patternDataUri: SVG_GOLDEN_SUMMIT,
    patternSize: "54px 54px",
    cardPatternStyle: {
      backgroundImage: `url("${SVG_GOLDEN_SUMMIT}")`,
      backgroundSize: "54px 54px",
      backgroundRepeat: "repeat",
    },
    bgPatternStyle: {
      backgroundImage: `url("${SVG_GOLDEN_SUMMIT}")`,
      backgroundSize: "54px 54px",
      backgroundRepeat: "repeat",
    },
    rivetClass: "bg-[#CA8A04] border-[#713F12]",
    accentColor: "#CA8A04",
    glowColor: "#FDE047",
    badgeBg: "bg-[#FEF08A]",
    badgeText: "text-[#713F12]",
    badgeBorder: "border-[#CA8A04]/60",
  },
];

/**
 * Returns the theme corresponding to a given level number.
 * Automatically cycles through distinct visual themes every 10 levels.
 * (Levels 1–10: Paper Map, 11–20: Sunny Coast, 21–30: Desert Dunes, etc.)
 */
export function getThemeForLevel(level: number): LevelTheme {
  const safeLevel = Math.max(1, level);
  const index = Math.floor((safeLevel - 1) / 10);
  return levelThemes[index % levelThemes.length];
}
