import React from "react";
import { MapZone } from "../data/mapZones";

interface Props {
  zone: MapZone;
  topY: number;
  height: number;
}

export const MapZoneBiome: React.FC<Props> = ({ zone, topY, height }) => {
  const renderBiomeIllustration = () => {
    switch (zone.id) {
      case 1: // Zone 1: Castaway Coral Beach (1–20)
        return (
          <div
            className="w-full h-full relative overflow-hidden rounded-3xl"
            style={{
              background: "linear-gradient(180deg, #E6F4EA 0%, #FAF3E3 45%, #F4ECD8 100%)",
            }}
          >
            {/* Ambient water and sand texture */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-25" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="beach-waves" width="80" height="30" patternUnits="userSpaceOnUse">
                  <path d="M0 15 Q20 8 40 15 T80 15" fill="none" stroke="#10B981" strokeWidth="1.5" strokeOpacity="0.4" />
                  <path d="M0 25 Q20 20 40 25 T80 25" fill="none" stroke="#F59E0B" strokeWidth="1" strokeOpacity="0.25" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#beach-waves)" />
            </svg>

            {/* LEFT FLANK: Lush Palm Trees, Tropical Sandbank & Driftwood */}
            <div className="absolute left-1 top-8 pointer-events-none select-none">
              <svg width="110" height="220" viewBox="0 0 110 220" fill="none">
                {/* Sandbank mound */}
                <ellipse cx="40" cy="205" rx="55" ry="14" fill="#FDE68A" opacity="0.7" />
                <ellipse cx="38" cy="203" rx="42" ry="10" fill="#FEF3C7" />
                {/* Curved Palm Trunk */}
                <path d="M42 200 C35 150 48 100 32 60" stroke="#92400E" strokeWidth="9" strokeLinecap="round" />
                <path d="M42 200 C35 150 48 100 32 60" stroke="#B45309" strokeWidth="5" strokeLinecap="round" />
                {/* Trunk rings */}
                <path d="M38 175 Q43 173 44 177" stroke="#78350F" strokeWidth="2" />
                <path d="M36 150 Q41 148 43 152" stroke="#78350F" strokeWidth="2" />
                <path d="M37 125 Q42 123 44 127" stroke="#78350F" strokeWidth="2" />
                <path d="M36 100 Q41 98 42 102" stroke="#78350F" strokeWidth="2" />
                {/* Coconuts */}
                <circle cx="31" cy="62" r="5" fill="#78350F" />
                <circle cx="36" cy="65" r="4.5" fill="#92400E" />
                <circle cx="28" cy="67" r="4" fill="#78350F" />
                {/* Palm Fronds */}
                <path d="M32 60 C15 45 -5 55 -15 80" stroke="#047857" strokeWidth="4" strokeLinecap="round" fill="none" />
                <path d="M32 60 C15 40 5 15 0 -5" stroke="#059669" strokeWidth="4.5" strokeLinecap="round" fill="none" />
                <path d="M32 60 C40 35 60 25 85 30" stroke="#10B981" strokeWidth="4" strokeLinecap="round" fill="none" />
                <path d="M32 60 C55 50 80 65 95 85" stroke="#059669" strokeWidth="4" strokeLinecap="round" fill="none" />
                <path d="M32 60 C40 68 65 95 60 115" stroke="#047857" strokeWidth="3.5" strokeLinecap="round" fill="none" />
                {/* Starfish & Shell on Sand */}
                <path d="M22 200 L24 195 L27 197 L29 193 L31 197 L34 196 L33 200 L36 203 L32 204 L32 208 L29 205 L26 207 L27 203 Z" fill="#F43F5E" />
                <ellipse cx="62" cy="204" rx="5" ry="3.5" fill="#FDE047" stroke="#D97706" strokeWidth="1" />
              </svg>
            </div>

            {/* RIGHT FLANK: Tropical Waves, Leaping Dolphin & Buried Treasure Chest */}
            <div className="absolute right-1 top-24 pointer-events-none select-none">
              <svg width="115" height="230" viewBox="0 0 115 230" fill="none">
                {/* Ocean Waves */}
                <path d="M15 65 C40 45 70 75 115 55" stroke="#38BDF8" strokeWidth="3" strokeLinecap="round" />
                <path d="M35 85 C65 70 90 95 115 75" stroke="#0284C7" strokeWidth="2.5" strokeLinecap="round" />
                {/* Leaping Dolphin Silhouette */}
                <path d="M55 45 C65 25 85 25 95 38 C90 42 80 43 72 45 C78 48 85 52 82 56 C74 54 66 50 55 45 Z" fill="#0284C7" />
                <path d="M80 32 L88 28 L84 35 Z" fill="#0369A1" />
                {/* Buried Pirate Chest in Sand */}
                <ellipse cx="75" cy="185" rx="35" ry="12" fill="#FDE68A" />
                {/* Chest base */}
                <rect x="55" y="162" width="40" height="22" rx="3" fill="#92400E" stroke="#78350F" strokeWidth="2" />
                {/* Chest arched lid */}
                <path d="M53 162 C53 150 97 150 97 162 Z" fill="#B45309" stroke="#78350F" strokeWidth="2" />
                {/* Gold bands & keyhole */}
                <line x1="62" y1="154" x2="62" y2="184" stroke="#FBBF24" strokeWidth="2" />
                <line x1="88" y1="154" x2="88" y2="184" stroke="#FBBF24" strokeWidth="2" />
                <circle cx="75" cy="168" r="3" fill="#FBBF24" stroke="#78350F" strokeWidth="1" />
                {/* Sparkles */}
                <circle cx="50" cy="155" r="1.5" fill="#F59E0B" />
                <circle cx="98" cy="152" r="2" fill="#F59E0B" />
                <circle cx="75" cy="148" r="2" fill="#FEF08A" />
              </svg>
            </div>

            {/* MID SCENERY: Coral Reef Cluster (Left bottom) */}
            <div className="absolute left-2 bottom-12 pointer-events-none select-none">
              <svg width="90" height="90" viewBox="0 0 90 90" fill="none">
                <path d="M15 80 C20 60 10 50 18 35 C24 50 35 55 30 80" fill="#FB7185" stroke="#E11D48" strokeWidth="1.5" />
                <path d="M28 80 C32 65 45 60 40 45 C48 55 52 70 48 80" fill="#38BDF8" stroke="#0284C7" strokeWidth="1.5" />
                <circle cx="20" cy="34" r="3" fill="#FFE4E6" />
                <circle cx="40" cy="44" r="3" fill="#E0F2FE" />
                <circle cx="58" cy="75" r="4" fill="#FBBF24" />
              </svg>
            </div>
          </div>
        );

      case 2: // Zone 2: Golden Sunken Dunes (21–40)
        return (
          <div
            className="w-full h-full relative overflow-hidden rounded-3xl"
            style={{
              background: "linear-gradient(180deg, #FDE68A 0%, #FEF3C7 50%, #FFFBEB 100%)",
            }}
          >
            {/* Dune Ridge Wind Textures */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="dune-lines" width="100" height="40" patternUnits="userSpaceOnUse">
                  <path d="M0 25 Q50 5 100 25" fill="none" stroke="#D97706" strokeWidth="1.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#dune-lines)" />
            </svg>

            {/* LEFT FLANK: Ancient Sandstone Pyramid with Glowing Golden Capstone */}
            <div className="absolute left-2 top-10 pointer-events-none select-none">
              <svg width="125" height="180" viewBox="0 0 125 180" fill="none">
                {/* Desert Horizon Dunes */}
                <path d="M-10 140 Q40 115 120 140" fill="#FCD34D" opacity="0.6" />
                {/* Great Pyramid Base & Sunlit Face */}
                <polygon points="50,45 10,135 70,135" fill="#F59E0B" stroke="#B45309" strokeWidth="2" />
                {/* Shadowed Face */}
                <polygon points="50,45 70,135 110,128" fill="#D97706" stroke="#92400E" strokeWidth="2" />
                {/* Golden Pyramidion (Capstone) */}
                <polygon points="50,45 42,65 58,65" fill="#FDE047" stroke="#CA8A04" strokeWidth="1.5" />
                <polygon points="50,45 58,65 67,63" fill="#FACC15" stroke="#CA8A04" strokeWidth="1.5" />
                {/* Sun Radiance Rays */}
                <line x1="50" y1="40" x2="50" y2="20" stroke="#F59E0B" strokeWidth="2" strokeDasharray="3 3" />
                <line x1="40" y1="42" x2="25" y2="28" stroke="#F59E0B" strokeWidth="1.8" strokeDasharray="3 3" />
                <line x1="60" y1="42" x2="75" y2="28" stroke="#F59E0B" strokeWidth="1.8" strokeDasharray="3 3" />
                {/* Date Palms at Oasis Base */}
                <path d="M22 145 C20 130 25 120 22 110" stroke="#78350F" strokeWidth="3" strokeLinecap="round" />
                <path d="M22 110 Q10 105 5 115" stroke="#15803D" strokeWidth="2.5" strokeLinecap="round" />
                <path d="M22 110 Q22 95 24 105" stroke="#16A34A" strokeWidth="2.5" strokeLinecap="round" />
                <path d="M22 110 Q32 105 38 115" stroke="#15803D" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
            </div>

            {/* RIGHT FLANK: Sphinx Silhouette & Camel Caravan */}
            <div className="absolute right-2 top-28 pointer-events-none select-none">
              <svg width="120" height="200" viewBox="0 0 120 200" fill="none">
                {/* Sun disc */}
                <circle cx="85" cy="50" r="22" fill="#FDE047" opacity="0.5" />
                <circle cx="85" cy="50" r="16" fill="#FCD34D" opacity="0.8" />
                {/* Desert Ridge */}
                <path d="M5 160 Q60 130 125 155 L125 200 L5 200 Z" fill="#F59E0B" opacity="0.4" />
                {/* Camel Caravan Silhouette */}
                <g fill="#78350F" transform="translate(45, 120) scale(0.75)">
                  {/* Camel 1 */}
                  <ellipse cx="30" cy="22" rx="14" ry="9" />
                  <ellipse cx="28" cy="12" rx="6" ry="6" /> {/* Hump */}
                  <path d="M40 22 Q48 15 46 6 Q44 2 40 4" stroke="#78350F" strokeWidth="4" strokeLinecap="round" fill="none" />
                  <ellipse cx="40" cy="5" rx="4" ry="2.5" />
                  <line x1="22" y1="28" x2="20" y2="44" stroke="#78350F" strokeWidth="3" strokeLinecap="round" />
                  <line x1="26" y1="28" x2="28" y2="44" stroke="#78350F" strokeWidth="2.5" strokeLinecap="round" />
                  <line x1="36" y1="28" x2="35" y2="44" stroke="#78350F" strokeWidth="3" strokeLinecap="round" />
                  <line x1="40" y1="28" x2="42" y2="44" stroke="#78350F" strokeWidth="2.5" strokeLinecap="round" />
                </g>
                {/* Desert Mirage Oasis Spring */}
                <ellipse cx="45" cy="175" rx="30" ry="10" fill="#38BDF8" stroke="#0284C7" strokeWidth="1.5" />
                <ellipse cx="45" cy="175" rx="22" ry="6" fill="#BAE6FD" />
              </svg>
            </div>
          </div>
        );

      case 3: // Zone 3: Abyssal Whispering Lagoon (41–60)
        return (
          <div
            className="w-full h-full relative overflow-hidden rounded-3xl"
            style={{
              background: "linear-gradient(180deg, #BAE6FD 0%, #7DD3FC 30%, #38BDF8 70%, #0284C7 100%)",
            }}
          >
            {/* Underwater Light Rays */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30" xmlns="http://www.w3.org/2000/svg">
              <polygon points="0,0 80,0 120,600 0,600" fill="#E0F2FE" opacity="0.4" />
              <polygon points="150,0 260,0 350,600 200,600" fill="#E0F2FE" opacity="0.3" />
              <polygon points="280,0 400,0 420,600 320,600" fill="#E0F2FE" opacity="0.25" />
            </svg>

            {/* LEFT FLANK: Sunken Pirate Shipwreck with Coral & Bubbles */}
            <div className="absolute left-2 top-12 pointer-events-none select-none">
              <svg width="120" height="210" viewBox="0 0 120 210" fill="none">
                {/* Bubbles */}
                <circle cx="35" cy="40" r="3.5" fill="#E0F2FE" opacity="0.8" stroke="#0284C7" strokeWidth="0.8" />
                <circle cx="48" cy="25" r="5" fill="#E0F2FE" opacity="0.7" stroke="#0284C7" strokeWidth="1" />
                <circle cx="42" cy="70" r="2.5" fill="#E0F2FE" opacity="0.9" />
                {/* Sunken Galleon Hull */}
                <path d="M10 160 C25 150 70 152 90 175 L80 195 C50 198 20 195 10 185 Z" fill="#451A03" stroke="#270F02" strokeWidth="2" />
                {/* Broken Mast & Tattered Sail */}
                <line x1="45" y1="160" x2="40" y2="85" stroke="#78350F" strokeWidth="4" strokeLinecap="round" />
                <line x1="28" y1="110" x2="58" y2="105" stroke="#78350F" strokeWidth="2.5" strokeLinecap="round" />
                <path d="M30 110 Q42 125 56 106 Q45 135 30 110 Z" fill="#F1F5F9" opacity="0.75" />
                {/* Pirate Skull Emblem on Flag */}
                <rect x="36" y="85" width="18" height="12" fill="#0F172A" />
                <circle cx="44" cy="90" r="2" fill="#F8FAFC" />
                <line x1="41" y1="94" x2="47" y2="94" stroke="#F8FAFC" strokeWidth="1" />
                {/* Coral Overgrowth */}
                <path d="M60 170 C65 150 80 148 78 135 C88 145 92 165 85 180" fill="#F43F5E" stroke="#BE123C" strokeWidth="1.5" />
                <circle cx="78" cy="133" r="3" fill="#FDA4AF" />
              </svg>
            </div>

            {/* RIGHT FLANK: Giant Sea Turtle & Bioluminescent Jellyfish */}
            <div className="absolute right-2 top-24 pointer-events-none select-none">
              <svg width="120" height="210" viewBox="0 0 120 210" fill="none">
                {/* Sea Turtle */}
                <g transform="translate(25, 20) rotate(-15)">
                  {/* Flippers */}
                  <ellipse cx="15" cy="20" rx="14" ry="5" fill="#047857" transform="rotate(-35 15 20)" />
                  <ellipse cx="55" cy="20" rx="14" ry="5" fill="#047857" transform="rotate(35 55 20)" />
                  <ellipse cx="18" cy="50" rx="9" ry="4" fill="#047857" />
                  <ellipse cx="52" cy="50" rx="9" ry="4" fill="#047857" />
                  {/* Head */}
                  <ellipse cx="35" cy="10" rx="6" ry="8" fill="#10B981" />
                  {/* Shell */}
                  <ellipse cx="35" cy="35" rx="18" ry="22" fill="#065F46" stroke="#047857" strokeWidth="2" />
                  <ellipse cx="35" cy="35" rx="13" ry="16" fill="#059669" />
                  <circle cx="35" cy="35" r="5" fill="#10B981" />
                </g>
                {/* Glowing Jellyfish */}
                <g transform="translate(40, 115)">
                  <path d="M10 25 C10 10 45 10 45 25 C45 28 10 28 10 25 Z" fill="#C084FC" opacity="0.9" stroke="#A855F7" strokeWidth="1.5" />
                  <path d="M15 25 C14 42 20 55 18 68" stroke="#E9D5FF" strokeWidth="1.5" fill="none" />
                  <path d="M22 25 C24 45 22 58 26 70" stroke="#F472B6" strokeWidth="1.8" fill="none" />
                  <path d="M30 25 C28 42 34 56 32 72" stroke="#E9D5FF" strokeWidth="1.8" fill="none" />
                  <path d="M38 25 C40 44 36 58 40 68" stroke="#F472B6" strokeWidth="1.5" fill="none" />
                  <circle cx="28" cy="18" r="2.5" fill="#FFFFFF" opacity="0.8" />
                </g>
              </svg>
            </div>
          </div>
        );

      case 4: // Zone 4: Volcanic Obsidian Caldera (61–80)
        return (
          <div
            className="w-full h-full relative overflow-hidden rounded-3xl"
            style={{
              background: "linear-gradient(180deg, #1C1917 0%, #450A0A 35%, #7F1D1D 70%, #991B1B 100%)",
            }}
          >
            {/* Magma crack grid */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 100 L50 140 L30 220 L80 280 L60 360 L120 420" stroke="#F97316" strokeWidth="1.8" fill="none" />
              <path d="M380 80 L340 160 L370 230 L320 310 L350 400" stroke="#EF4444" strokeWidth="1.8" fill="none" />
            </svg>

            {/* LEFT FLANK: Active Erupting Volcano with Molten Lava Rivers */}
            <div className="absolute left-2 top-8 pointer-events-none select-none">
              <svg width="125" height="210" viewBox="0 0 125 210" fill="none">
                {/* Smoke Plume */}
                <ellipse cx="55" cy="35" rx="28" ry="16" fill="#292524" opacity="0.85" />
                <ellipse cx="68" cy="22" rx="22" ry="14" fill="#44403C" opacity="0.7" />
                <ellipse cx="42" cy="18" rx="18" ry="12" fill="#57534E" opacity="0.6" />
                {/* Embers */}
                <circle cx="50" cy="40" r="2" fill="#FBBF24" />
                <circle cx="65" cy="32" r="1.8" fill="#F97316" />
                <circle cx="38" cy="28" r="2.2" fill="#EF4444" />
                {/* Volcano Cone */}
                <polygon points="55,55 10,180 105,180" fill="#1C1917" stroke="#450A0A" strokeWidth="2" />
                <polygon points="55,55 65,180 105,180" fill="#292524" />
                {/* Glowing Caldera Mouth */}
                <ellipse cx="55" cy="55" rx="16" ry="6" fill="#EF4444" stroke="#F97316" strokeWidth="2" />
                <ellipse cx="55" cy="55" rx="10" ry="3" fill="#FDE047" />
                {/* Molten Lava Cascade */}
                <path d="M55 58 Q48 90 52 120 Q56 150 48 180" stroke="#F97316" strokeWidth="5" strokeLinecap="round" fill="none" />
                <path d="M55 58 Q48 90 52 120 Q56 150 48 180" stroke="#FEF08A" strokeWidth="2" strokeLinecap="round" fill="none" />
                <path d="M58 80 Q68 110 64 140 Q62 165 70 180" stroke="#EF4444" strokeWidth="3" strokeLinecap="round" fill="none" />
              </svg>
            </div>

            {/* RIGHT FLANK: Hexagonal Basalt Pillars & Ancient Skull */}
            <div className="absolute right-2 top-24 pointer-events-none select-none">
              <svg width="120" height="200" viewBox="0 0 120 200" fill="none">
                {/* Basalt Columns */}
                <g fill="#1C1917" stroke="#450A0A" strokeWidth="1.5">
                  <polygon points="50,110 65,102 80,110 80,180 65,188 50,180" />
                  <polygon points="75,80 90,72 105,80 105,170 90,178 75,170" fill="#292524" />
                  <polygon points="30,130 45,122 60,130 60,195 45,203 30,195" />
                </g>
                {/* Column Tops */}
                <polygon points="50,110 65,102 80,110 65,118" fill="#44403C" stroke="#78716C" strokeWidth="1" />
                <polygon points="75,80 90,72 105,80 90,88" fill="#57534E" stroke="#78716C" strokeWidth="1" />
                <polygon points="30,130 45,122 60,130 45,138" fill="#44403C" stroke="#78716C" strokeWidth="1" />
                {/* Dragon / Titan Fossil Horn */}
                <path d="M55 90 C70 65 95 65 110 45 C100 68 82 85 65 95 Z" fill="#E7E5E4" stroke="#A8A29E" strokeWidth="1.2" />
                {/* Magma glow pool */}
                <ellipse cx="65" cy="188" rx="35" ry="10" fill="#EA580C" opacity="0.6" />
                <ellipse cx="65" cy="188" rx="22" ry="5" fill="#FACC15" opacity="0.8" />
              </svg>
            </div>
          </div>
        );

      case 5: // Zone 5: Mystic Twilight Glade (81–100)
        return (
          <div
            className="w-full h-full relative overflow-hidden rounded-3xl"
            style={{
              background: "linear-gradient(180deg, #2E1065 0%, #3B0764 40%, #581C87 80%, #701A75 100%)",
            }}
          >
            {/* Enchanted Firefly motes */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40" xmlns="http://www.w3.org/2000/svg">
              <circle cx="40" cy="120" r="3" fill="#FACC15" />
              <circle cx="85" cy="80" r="2" fill="#E879F9" />
              <circle cx="320" cy="160" r="3" fill="#67E8F9" />
              <circle cx="350" cy="240" r="2" fill="#FACC15" />
              <circle cx="60" cy="300" r="2.5" fill="#A855F7" />
            </svg>

            {/* LEFT FLANK: Bioluminescent Giant Mushrooms & Fairy Hollow Tree */}
            <div className="absolute left-2 top-10 pointer-events-none select-none">
              <svg width="120" height="210" viewBox="0 0 120 210" fill="none">
                {/* Big Mushroom Stem */}
                <path d="M42 180 C40 140 38 120 50 110 C58 120 54 140 54 180 Z" fill="#F5D0FE" stroke="#C084FC" strokeWidth="1.5" />
                {/* Big Mushroom Cap */}
                <path d="M20 112 C20 65 76 65 76 112 C76 118 20 118 20 112 Z" fill="#9333EA" stroke="#7E22CE" strokeWidth="2" />
                {/* Glowing spots */}
                <circle cx="36" cy="85" r="4.5" fill="#67E8F9" />
                <circle cx="58" cy="82" r="5" fill="#E879F9" />
                <circle cx="48" cy="100" r="3.5" fill="#FDF4FF" />
                <circle cx="28" cy="102" r="3" fill="#F472B6" />
                {/* Small Turquoise Mushroom */}
                <path d="M68 185 C66 160 65 145 74 138 C80 145 78 160 78 185 Z" fill="#CFFAFE" />
                <path d="M58 140 C58 110 92 110 92 140 Z" fill="#06B6D4" stroke="#0891B2" strokeWidth="1.5" />
                <circle cx="75" cy="125" r="3" fill="#FEF08A" />
                {/* Magic Spores Glow */}
                <circle cx="48" cy="60" r="1.5" fill="#FDF4FF" />
                <circle cx="30" cy="65" r="2" fill="#E879F9" />
              </svg>
            </div>

            {/* RIGHT FLANK: Stonehenge Rune Monolith with Glowing Glyphs */}
            <div className="absolute right-2 top-20 pointer-events-none select-none">
              <svg width="120" height="200" viewBox="0 0 120 200" fill="none">
                {/* Left Monolith Pillar */}
                <polygon points="35,180 40,75 55,70 52,180" fill="#334155" stroke="#1E293B" strokeWidth="1.5" />
                {/* Right Monolith Pillar */}
                <polygon points="75,180 72,75 88,70 92,180" fill="#475569" stroke="#1E293B" strokeWidth="1.5" />
                {/* Cross Lintel Stone */}
                <polygon points="28,75 32,58 98,55 95,75" fill="#64748B" stroke="#334155" strokeWidth="1.5" />
                {/* Glowing Runic Carvings */}
                <path d="M46 95 L46 140 M42 110 L50 118 M42 125 L50 118" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" />
                <path d="M80 95 L80 140 M76 105 L84 105 M76 125 L84 135" stroke="#E879F9" strokeWidth="2" strokeLinecap="round" />
                {/* Floating Magic Crystal Spire */}
                <polygon points="62,110 54,140 62,165 70,140" fill="#A855F7" stroke="#E879F9" strokeWidth="1.5" opacity="0.85" />
                <circle cx="62" cy="138" r="4" fill="#FFFFFF" opacity="0.9" />
              </svg>
            </div>
          </div>
        );

      case 6: // Zone 6: Glacial Frost Peaks (101–120)
        return (
          <div
            className="w-full h-full relative overflow-hidden rounded-3xl"
            style={{
              background: "linear-gradient(180deg, #083344 0%, #164E63 35%, #0E7490 70%, #06B6D4 100%)",
            }}
          >
            {/* Drifting Snowflakes */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40" xmlns="http://www.w3.org/2000/svg">
              <circle cx="35" cy="80" r="2" fill="#FFFFFF" />
              <circle cx="95" cy="140" r="3" fill="#E0F2FE" />
              <circle cx="320" cy="100" r="2.5" fill="#FFFFFF" />
              <circle cx="360" cy="190" r="1.8" fill="#BAE6FD" />
              <circle cx="50" cy="280" r="2.2" fill="#FFFFFF" />
            </svg>

            {/* LEFT FLANK: Snow-Capped Alpine Mountain Peaks & Frozen Pines */}
            <div className="absolute left-2 top-10 pointer-events-none select-none">
              <svg width="125" height="210" viewBox="0 0 125 210" fill="none">
                {/* Back Mountain Peak */}
                <polygon points="45,40 5,160 85,160" fill="#155E75" stroke="#083344" strokeWidth="2" />
                <polygon points="45,40 30,80 50,75 45,40" fill="#FFFFFF" />
                {/* Foreground Sharp Peak */}
                <polygon points="75,25 35,170 115,170" fill="#0E7490" stroke="#164E63" strokeWidth="2" />
                <polygon points="75,25 90,170 115,170" fill="#0891B2" />
                {/* Snow Cap on foreground peak */}
                <polygon points="75,25 58,70 70,65 75,78 85,62 90,75" fill="#F0FDFA" stroke="#CFFAFE" strokeWidth="1" />
                {/* Snow-covered Pine Trees */}
                <path d="M25 140 L15 160 H35 Z" fill="#0D9488" stroke="#115E59" strokeWidth="1.2" />
                <path d="M25 136 L18 148 H32 Z" fill="#F0FDFA" />
                <path d="M42 150 L32 172 H52 Z" fill="#0D9488" stroke="#115E59" strokeWidth="1.2" />
                <path d="M42 146 L34 160 H50 Z" fill="#F0FDFA" />
              </svg>
            </div>

            {/* RIGHT FLANK: Alpine Explorer Lodge with Warm Window & Ice Crystals */}
            <div className="absolute right-2 top-24 pointer-events-none select-none">
              <svg width="120" height="200" viewBox="0 0 120 200" fill="none">
                {/* Cabin Base */}
                <rect x="35" y="115" width="55" height="42" rx="2" fill="#78350F" stroke="#451A03" strokeWidth="2" />
                {/* Snow-weighted Gable Roof */}
                <polygon points="25,118 62,80 100,118" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="2" />
                {/* Stone Chimney & Smoke */}
                <rect x="75" y="70" width="10" height="25" fill="#475569" stroke="#1E293B" strokeWidth="1" />
                <path d="M80 68 Q88 50 82 35 Q78 20 86 10" stroke="#F1F5F9" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.75" />
                {/* Warm Illuminated Window */}
                <rect x="45" y="125" width="16" height="16" rx="2" fill="#FDE047" stroke="#B45309" strokeWidth="1.5" />
                <line x1="53" y1="125" x2="53" y2="141" stroke="#B45309" strokeWidth="1.5" />
                <line x1="45" y1="133" x2="61" y2="133" stroke="#B45309" strokeWidth="1.5" />
                {/* Door */}
                <rect x="70" y="130" width="14" height="27" rx="1" fill="#451A03" />
                {/* Glacial Ice Crystal Spire in foreground */}
                <polygon points="25,160 18,185 24,195 32,185" fill="#A5F3FC" stroke="#0891B2" strokeWidth="1" opacity="0.9" />
                <polygon points="35,150 28,180 36,192 44,180" fill="#67E8F9" stroke="#0891B2" strokeWidth="1.2" opacity="0.85" />
              </svg>
            </div>
          </div>
        );

      case 7: // Zone 7: Smuggler's Iron Canyon (121–140)
        return (
          <div
            className="w-full h-full relative overflow-hidden rounded-3xl"
            style={{
              background: "linear-gradient(180deg, #7C2D12 0%, #9A3412 35%, #C2410C 70%, #EA580C 100%)",
            }}
          >
            {/* Sandstone Strata Layers */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 60 Q100 40 200 65 T400 55" stroke="#FED7AA" strokeWidth="3" fill="none" />
              <path d="M0 140 Q120 120 240 145 T400 135" stroke="#FDBA74" strokeWidth="3" fill="none" />
              <path d="M0 240 Q150 220 300 245 T400 235" stroke="#FED7AA" strokeWidth="3" fill="none" />
            </svg>

            {/* LEFT FLANK: Natural Canyon Arch & Hanging Rope Bridge */}
            <div className="absolute left-2 top-10 pointer-events-none select-none">
              <svg width="125" height="210" viewBox="0 0 125 210" fill="none">
                {/* Red Rock Mesa Arch */}
                <path d="M10 180 L15 65 C35 50 85 50 95 100 L90 180 L70 180 L72 110 C68 85 45 85 38 110 L35 180 Z" fill="#9A3412" stroke="#7C2D12" strokeWidth="2" />
                {/* Highlight strata on Arch */}
                <path d="M16 95 C38 85 75 85 88 115" stroke="#FDBA74" strokeWidth="2.5" fill="none" />
                {/* Rope Bridge spanning canyon */}
                <path d="M35 135 Q65 150 95 135" stroke="#78350F" strokeWidth="2" fill="none" />
                <path d="M35 145 Q65 160 95 145" stroke="#78350F" strokeWidth="2" fill="none" />
                {/* Bridge planks */}
                <line x1="45" y1="138" x2="45" y2="148" stroke="#451A03" strokeWidth="2" />
                <line x1="55" y1="142" x2="55" y2="152" stroke="#451A03" strokeWidth="2" />
                <line x1="65" y1="145" x2="65" y2="155" stroke="#451A03" strokeWidth="2" />
                <line x1="75" y1="144" x2="75" y2="154" stroke="#451A03" strokeWidth="2" />
                <line x1="85" y1="140" x2="85" y2="150" stroke="#451A03" strokeWidth="2" />
              </svg>
            </div>

            {/* RIGHT FLANK: Gold Mine Shaft & Overflowing Ore Cart */}
            <div className="absolute right-2 top-24 pointer-events-none select-none">
              <svg width="120" height="200" viewBox="0 0 120 200" fill="none">
                {/* Mine Entrance Portal (Wood Timber Frame) */}
                <rect x="40" y="80" width="65" height="60" fill="#451A03" stroke="#291002" strokeWidth="2" />
                <rect x="35" y="75" width="10" height="70" fill="#78350F" stroke="#451A03" strokeWidth="1.5" />
                <rect x="100" y="75" width="10" height="70" fill="#78350F" stroke="#451A03" strokeWidth="1.5" />
                <rect x="30" y="70" width="85" height="12" fill="#92400E" stroke="#451A03" strokeWidth="1.5" />
                {/* Rails */}
                <line x1="30" y1="150" x2="110" y2="150" stroke="#52525B" strokeWidth="2.5" />
                <line x1="30" y1="158" x2="110" y2="158" stroke="#52525B" strokeWidth="2.5" />
                {/* Minecart with Gold Nuggets */}
                <polygon points="50,130 95,130 90,152 55,152" fill="#71717A" stroke="#3F3F46" strokeWidth="2" />
                {/* Cart Wheels */}
                <circle cx="62" cy="154" r="5" fill="#27272A" stroke="#71717A" strokeWidth="1.5" />
                <circle cx="83" cy="154" r="5" fill="#27272A" stroke="#71717A" strokeWidth="1.5" />
                {/* Sparkling Gold Chunks */}
                <circle cx="60" cy="126" r="4" fill="#FACC15" stroke="#CA8A04" strokeWidth="1" />
                <circle cx="70" cy="122" r="5" fill="#FDE047" stroke="#CA8A04" strokeWidth="1" />
                <circle cx="82" cy="125" r="4.5" fill="#FACC15" stroke="#CA8A04" strokeWidth="1" />
                <circle cx="75" cy="116" r="3" fill="#FEF08A" />
              </svg>
            </div>
          </div>
        );

      case 8: // Zone 8: Ancient Clockwork Foundry (141–160)
        return (
          <div
            className="w-full h-full relative overflow-hidden rounded-3xl"
            style={{
              background: "linear-gradient(180deg, #0F172A 0%, #1E293B 40%, #334155 80%, #475569 100%)",
            }}
          >
            {/* Steampunk blueprint tech grid */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="foundry-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M40 0 L0 0 0 40" fill="none" stroke="#94A3B8" strokeWidth="0.8" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#foundry-grid)" />
            </svg>

            {/* LEFT FLANK: Massive Interlocking Brass & Copper Gears */}
            <div className="absolute left-2 top-8 pointer-events-none select-none">
              <svg width="125" height="210" viewBox="0 0 125 210" fill="none">
                {/* Big Brass Gear */}
                <g transform="translate(45, 75)">
                  <circle cx="0" cy="0" r="32" fill="#D97706" stroke="#92400E" strokeWidth="2.5" />
                  <circle cx="0" cy="0" r="22" fill="#B45309" />
                  <circle cx="0" cy="0" r="10" fill="#1E293B" stroke="#D97706" strokeWidth="2" />
                  {/* Gear Teeth */}
                  {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
                    <rect
                      key={deg}
                      x="-5"
                      y="-38"
                      width="10"
                      height="8"
                      rx="1"
                      fill="#D97706"
                      stroke="#92400E"
                      strokeWidth="1.5"
                      transform={`rotate(${deg})`}
                    />
                  ))}
                </g>
                {/* Interlocking Smaller Copper Gear */}
                <g transform="translate(85, 125)">
                  <circle cx="0" cy="0" r="22" fill="#EA580C" stroke="#9A3412" strokeWidth="2" />
                  <circle cx="0" cy="0" r="14" fill="#C2410C" />
                  <circle cx="0" cy="0" r="6" fill="#1E293B" stroke="#EA580C" strokeWidth="1.5" />
                  {[0, 60, 120, 180, 240, 300].map((deg) => (
                    <rect
                      key={deg}
                      x="-4"
                      y="-26"
                      width="8"
                      height="6"
                      rx="1"
                      fill="#EA580C"
                      stroke="#9A3412"
                      strokeWidth="1"
                      transform={`rotate(${deg})`}
                    />
                  ))}
                </g>
                {/* Copper Steam Pipes */}
                <path d="M10 180 L40 180 L40 140 L70 140" stroke="#F97316" strokeWidth="6" strokeLinecap="round" fill="none" />
                <path d="M10 180 L40 180 L40 140 L70 140" stroke="#FED7AA" strokeWidth="2" strokeLinecap="round" fill="none" />
                {/* Steam Puff */}
                <ellipse cx="78" cy="135" rx="8" ry="6" fill="#F1F5F9" opacity="0.6" />
                <ellipse cx="88" cy="128" rx="12" ry="8" fill="#F1F5F9" opacity="0.4" />
              </svg>
            </div>

            {/* RIGHT FLANK: Glowing Foundry Furnace & Pressure Gauge */}
            <div className="absolute right-2 top-24 pointer-events-none select-none">
              <svg width="120" height="200" viewBox="0 0 120 200" fill="none">
                {/* Industrial Boiler Furnace */}
                <rect x="35" y="90" width="65" height="85" rx="8" fill="#334155" stroke="#1E293B" strokeWidth="2" />
                {/* Furnace Grate Glowing Hot */}
                <rect x="45" y="125" width="45" height="35" rx="4" fill="#EA580C" stroke="#9A3412" strokeWidth="2" />
                <line x1="45" y1="135" x2="90" y2="135" stroke="#1E293B" strokeWidth="3" />
                <line x1="45" y1="145" x2="90" y2="145" stroke="#1E293B" strokeWidth="3" />
                <line x1="45" y1="155" x2="90" y2="155" stroke="#1E293B" strokeWidth="3" />
                {/* Molten Glow Inside */}
                <circle cx="67" cy="142" r="8" fill="#FDE047" opacity="0.8" />
                {/* Round Pressure Dial Gauge */}
                <circle cx="67" cy="75" r="14" fill="#F8FAFC" stroke="#D97706" strokeWidth="2" />
                <circle cx="67" cy="75" r="11" fill="#FEF3C7" />
                <line x1="67" y1="75" x2="73" y2="69" stroke="#DC2626" strokeWidth="2" strokeLinecap="round" />
                <circle cx="67" cy="75" r="2" fill="#1E293B" />
              </svg>
            </div>
          </div>
        );

      case 9: // Zone 9: Celestial Star Sanctuary (161–180)
        return (
          <div
            className="w-full h-full relative overflow-hidden rounded-3xl"
            style={{
              background: "linear-gradient(180deg, #090A1A 0%, #17183B 35%, #25285D 70%, #3730A3 100%)",
            }}
          >
            {/* Constellation Star Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40" xmlns="http://www.w3.org/2000/svg">
              <line x1="50" y1="80" x2="90" y2="110" stroke="#818CF8" strokeWidth="1" strokeDasharray="3 3" />
              <line x1="90" y1="110" x2="130" y2="90" stroke="#818CF8" strokeWidth="1" strokeDasharray="3 3" />
              <line x1="130" y1="90" x2="150" y2="130" stroke="#818CF8" strokeWidth="1" strokeDasharray="3 3" />
              <circle cx="50" cy="80" r="3" fill="#FFFFFF" />
              <circle cx="90" cy="110" r="3" fill="#FDE047" />
              <circle cx="130" cy="90" r="2.5" fill="#FFFFFF" />
              <circle cx="150" cy="130" r="3" fill="#A5B4FC" />
            </svg>

            {/* LEFT FLANK: Floating Island & Grecian Celestial Temple Colonnade */}
            <div className="absolute left-2 top-8 pointer-events-none select-none">
              <svg width="125" height="210" viewBox="0 0 125 210" fill="none">
                {/* Floating Island Rock Base */}
                <polygon points="15,130 95,130 80,185 45,195 25,170" fill="#1E1B4B" stroke="#312E81" strokeWidth="2" />
                <path d="M10 130 C30 125 70 125 100 130 Z" fill="#4338CA" />
                {/* White Marble Colonnade Temple */}
                <rect x="25" y="75" width="60" height="8" fill="#EEF2FF" stroke="#C7D2FE" strokeWidth="1.5" />
                <rect x="20" y="122" width="70" height="8" fill="#EEF2FF" stroke="#C7D2FE" strokeWidth="1.5" />
                <polygon points="22,75 55,50 88,75" fill="#E0E7FF" stroke="#C7D2FE" strokeWidth="1.5" />
                {/* Columns */}
                <rect x="28" y="83" width="6" height="39" fill="#F8FAFC" />
                <rect x="42" y="83" width="6" height="39" fill="#F8FAFC" />
                <rect x="60" y="83" width="6" height="39" fill="#F8FAFC" />
                <rect x="74" y="83" width="6" height="39" fill="#F8FAFC" />
                {/* Stardust Aura */}
                <circle cx="55" cy="40" r="2" fill="#FDE047" />
                <circle cx="35" cy="45" r="1.5" fill="#FFFFFF" />
                <circle cx="75" cy="42" r="2" fill="#C7D2FE" />
              </svg>
            </div>

            {/* RIGHT FLANK: Armillary Sphere Astrolabe & Radiant Crescent Moon */}
            <div className="absolute right-2 top-20 pointer-events-none select-none">
              <svg width="120" height="200" viewBox="0 0 120 200" fill="none">
                {/* Radiant Crescent Moon */}
                <path d="M70 30 C58 30 48 40 48 55 C48 70 60 80 75 80 C65 76 60 66 60 55 C60 44 65 34 70 30 Z" fill="#FDE047" stroke="#CA8A04" strokeWidth="1.5" />
                {/* Astrolabe / Armillary Rings */}
                <g transform="translate(65, 140)">
                  <circle cx="0" cy="0" r="28" fill="none" stroke="#F59E0B" strokeWidth="2.5" />
                  <ellipse cx="0" cy="0" rx="28" ry="12" fill="none" stroke="#FBBF24" strokeWidth="2" transform="rotate(30)" />
                  <ellipse cx="0" cy="0" rx="28" ry="12" fill="none" stroke="#FBBF24" strokeWidth="2" transform="rotate(-30)" />
                  <circle cx="0" cy="0" r="7" fill="#6366F1" stroke="#FDE047" strokeWidth="1.5" />
                  {/* Stand Pedestal */}
                  <line x1="0" y1="28" x2="0" y2="48" stroke="#D97706" strokeWidth="4" strokeLinecap="round" />
                  <ellipse cx="0" cy="48" rx="16" ry="6" fill="#B45309" stroke="#78350F" strokeWidth="1.5" />
                </g>
              </svg>
            </div>
          </div>
        );

      case 10: // Zone 10: El Dorado Golden Summit (181–200)
        return (
          <div
            className="w-full h-full relative overflow-hidden rounded-3xl"
            style={{
              background: "linear-gradient(180deg, #FEF08A 0%, #FDE047 30%, #FACC15 65%, #EAB308 100%)",
            }}
          >
            {/* Golden Sunburst Beams from Apex */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-35" xmlns="http://www.w3.org/2000/svg">
              <polygon points="200,0 120,400 280,400" fill="#FFFBEB" opacity="0.6" />
              <polygon points="200,0 20,400 100,400" fill="#FFFBEB" opacity="0.4" />
              <polygon points="200,0 300,400 380,400" fill="#FFFBEB" opacity="0.4" />
            </svg>

            {/* LEFT FLANK: Grand Aztec / Incan Golden Stepped Pyramid & Royal Banners */}
            <div className="absolute left-2 top-8 pointer-events-none select-none">
              <svg width="130" height="220" viewBox="0 0 130 220" fill="none">
                {/* Stepped Citadel Tiers */}
                <rect x="15" y="165" width="95" height="25" fill="#CA8A04" stroke="#854D0E" strokeWidth="2" />
                <rect x="25" y="140" width="75" height="25" fill="#EAB308" stroke="#854D0E" strokeWidth="2" />
                <rect x="35" y="115" width="55" height="25" fill="#FACC15" stroke="#A16207" strokeWidth="2" />
                <rect x="45" y="90" width="35" height="25" fill="#FDE047" stroke="#CA8A04" strokeWidth="2" />
                {/* Apex Altar */}
                <polygon points="62,65 52,90 72,90" fill="#FEF08A" stroke="#CA8A04" strokeWidth="2" />
                {/* Golden Sun Emblem atop Apex */}
                <circle cx="62" cy="55" r="10" fill="#FEF08A" stroke="#B45309" strokeWidth="2" />
                {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
                  <line
                    key={deg}
                    x1="62"
                    y1="55"
                    x2={62 + 16 * Math.cos((deg * Math.PI) / 180)}
                    y2={55 + 16 * Math.sin((deg * Math.PI) / 180)}
                    stroke="#B45309"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                ))}
                {/* Ceremonial Crimson Banners */}
                <path d="M22 140 L22 175 L28 170 L34 175 L34 140 Z" fill="#DC2626" stroke="#991B1B" strokeWidth="1" />
                <path d="M88 140 L88 175 L94 170 L100 175 L100 140 Z" fill="#DC2626" stroke="#991B1B" strokeWidth="1" />
              </svg>
            </div>

            {/* RIGHT FLANK: Overflowing El Dorado Treasure Vault, Gold Bars & Gemstones */}
            <div className="absolute right-2 top-20 pointer-events-none select-none">
              <svg width="125" height="210" viewBox="0 0 125 210" fill="none">
                {/* Vault Doorway Arch */}
                <path d="M35 180 L35 90 C35 60 95 60 95 90 L95 180 Z" fill="#B45309" stroke="#78350F" strokeWidth="3" />
                <path d="M42 180 L42 95 C42 70 88 70 88 95 L88 180 Z" fill="#78350F" />
                {/* Overflowing Gold Bullion Bars */}
                <rect x="48" y="160" width="22" height="8" rx="1" fill="#FEF08A" stroke="#CA8A04" strokeWidth="1.5" />
                <rect x="68" y="160" width="22" height="8" rx="1" fill="#FEF08A" stroke="#CA8A04" strokeWidth="1.5" />
                <rect x="58" y="152" width="22" height="8" rx="1" fill="#FEF08A" stroke="#CA8A04" strokeWidth="1.5" />
                {/* Sparkling Jewels */}
                {/* Ruby */}
                <polygon points="50,145 45,138 55,138" fill="#EF4444" stroke="#991B1B" strokeWidth="1" />
                <polygon points="50,145 45,138 55,138" fill="#F87171" />
                {/* Emerald */}
                <polygon points="75,145 70,140 75,135 80,140" fill="#10B981" stroke="#047857" strokeWidth="1" />
                {/* Diamond */}
                <polygon points="64,136 58,128 70,128" fill="#38BDF8" stroke="#0284C7" strokeWidth="1" />
                {/* Sparkles */}
                <circle cx="45" cy="115" r="2.5" fill="#FFFFFF" />
                <circle cx="85" cy="110" r="2" fill="#FEF08A" />
                <circle cx="65" cy="98" r="3" fill="#FFFFFF" />
              </svg>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div
      className="absolute left-1 right-1 pointer-events-none select-none transition-all duration-300"
      style={{
        top: `${topY}px`,
        height: `${height}px`,
      }}
    >
      {renderBiomeIllustration()}
    </div>
  );
};
