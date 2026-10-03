import React from "react";
import { MapSceneryItem } from "../data/mapZones";

interface Props {
  item: MapSceneryItem;
  x: number;
  y: number;
}

export const MapScenery: React.FC<Props> = ({ item, x, y }) => {
  // Render high-fidelity vector illustration based on item.type
  const renderIllustration = () => {
    switch (item.type) {
      case "mushrooms":
        return (
          <div className="flex flex-col items-center select-none pointer-events-none drop-shadow-md">
            <svg width="68" height="52" viewBox="0 0 68 52" fill="none" className="overflow-visible">
              {/* Soft ground shadow */}
              <ellipse cx="34" cy="46" rx="28" ry="5" fill="#D4C29A" opacity="0.6" />
              {/* Main Mushroom Stem */}
              <path d="M26 32 C26 42 22 46 32 46 C42 46 38 42 38 32 Z" fill="#FDFBF7" stroke="#D5C8AE" strokeWidth="1.5" />
              {/* Main Mushroom Cap (Rich Gradient Style) */}
              <path d="M12 32 C12 14 52 14 52 32 C52 35 12 35 12 32 Z" fill="#E11D48" stroke="#9F1239" strokeWidth="2" />
              <path d="M14 30 C16 18 48 18 50 30" stroke="#FB7185" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.7" />
              {/* Glowing Spots */}
              <circle cx="22" cy="24" r="3" fill="#FFFFFF" />
              <circle cx="32" cy="20" r="3.5" fill="#FFFFFF" />
              <circle cx="42" cy="26" r="2.5" fill="#FFFFFF" />
              <circle cx="32" cy="28" r="1.5" fill="#FFE4E6" />
              {/* Secondary Baby Mushroom */}
              <path d="M42 38 C42 44 46 46 49 46 C52 46 52 44 52 38 Z" fill="#FDFBF7" stroke="#D5C8AE" strokeWidth="1.2" />
              <path d="M40 38 C40 28 55 28 55 38 Z" fill="#F59E0B" stroke="#B45309" strokeWidth="1.5" />
              <circle cx="47" cy="33" r="1.8" fill="#FEF3C7" />
              {/* Tiny Spores / Firefly dots */}
              <circle cx="16" cy="18" r="1.2" fill="#FDE047" />
              <circle cx="50" cy="16" r="1" fill="#FDE047" />
              {/* Lush Grass tufts */}
              <path d="M10 46 C12 38 16 36 18 46" stroke="#10B981" strokeWidth="1.8" strokeLinecap="round" />
              <path d="M54 46 C56 38 60 40 62 46" stroke="#10B981" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
            <span className="text-[9px] font-explorer font-bold text-[#78350F] tracking-wide mt-0.5 bg-[#FAF3E3]/90 px-1.5 py-0.5 rounded-full border border-[#D97706]/40 shadow-2xs">
              Toadstools
            </span>
          </div>
        );

      case "beehive":
        return (
          <div className="flex flex-col items-center select-none pointer-events-none drop-shadow-md">
            <svg width="64" height="56" viewBox="0 0 64 56" fill="none">
              {/* Branch */}
              <path d="M4 12 C24 10 42 6 62 14" stroke="#78350F" strokeWidth="4" strokeLinecap="round" />
              {/* Leaves on Branch */}
              <ellipse cx="20" cy="8" rx="6" ry="3" fill="#16A34A" transform="rotate(-20 20 8)" />
              <ellipse cx="48" cy="9" rx="6" ry="3" fill="#15803D" transform="rotate(25 48 9)" />
              {/* Suspension string */}
              <line x1="34" y1="11" x2="34" y2="20" stroke="#A8A29E" strokeWidth="1.5" strokeDasharray="2 2" />
              {/* Tiered Honey Hive */}
              <path d="M26 20 H42 C44 20 44 24 42 24 H26 C24 24 24 20 26 20 Z" fill="#FDE047" stroke="#CA8A04" strokeWidth="1.5" />
              <path d="M22 24 H46 C49 24 49 30 46 30 H22 C19 30 19 24 22 24 Z" fill="#FACC15" stroke="#D97706" strokeWidth="1.5" />
              <path d="M24 30 H44 C46 30 46 36 44 36 H24 C22 36 22 30 24 30 Z" fill="#F59E0B" stroke="#B45309" strokeWidth="1.5" />
              <path d="M28 36 H40 C41 36 41 40 40 40 H28 C27 40 27 36 28 36 Z" fill="#D97706" stroke="#92400E" strokeWidth="1.5" />
              {/* Honey Drip */}
              <path d="M38 40 C38 43 40 44 40 42 C40 40 38 40 38 40 Z" fill="#FDE047" />
              {/* Entrance hole */}
              <circle cx="34" cy="31" r="2.8" fill="#451A03" />
              {/* Friendly Bumblebee */}
              <ellipse cx="50" cy="24" rx="4" ry="3" fill="#FACC15" stroke="#78350F" strokeWidth="1" />
              <line x1="48" y1="21" x2="52" y2="21" stroke="#78350F" strokeWidth="1.2" />
              <ellipse cx="52" cy="19" rx="2" ry="3" fill="#E0F2FE" opacity="0.8" />
            </svg>
            <span className="text-[9px] font-explorer font-bold text-[#78350F] tracking-wide mt-0.5 bg-[#FAF3E3]/90 px-1.5 py-0.5 rounded-full border border-[#D97706]/40 shadow-2xs">
              Wild Hive
            </span>
          </div>
        );

      case "cottage":
        return (
          <div className="flex flex-col items-center select-none pointer-events-none drop-shadow-md">
            <svg width="68" height="56" viewBox="0 0 68 56" fill="none">
              <ellipse cx="34" cy="52" rx="28" ry="4" fill="#D4C29A" opacity="0.6" />
              {/* Chimney & Curling Smoke */}
              <rect x="46" y="16" width="6" height="12" fill="#B91C1C" stroke="#7F1D1D" strokeWidth="1.2" />
              <path d="M49 14 Q53 8 50 4 T54 0" stroke="#E2E8F0" strokeWidth="2" strokeLinecap="round" strokeDasharray="2 3" />
              {/* Timber Cabin Walls */}
              <rect x="18" y="26" width="34" height="24" rx="2" fill="#FFFBEB" stroke="#B45309" strokeWidth="2" />
              {/* Timber lines */}
              <line x1="18" y1="34" x2="52" y2="34" stroke="#FDE68A" strokeWidth="1" />
              <line x1="18" y1="42" x2="52" y2="42" stroke="#FDE68A" strokeWidth="1" />
              {/* Cedar Gable Roof */}
              <polygon points="12,28 35,12 58,28" fill="#EA580C" stroke="#9A3412" strokeWidth="2" />
              <polygon points="17,26 35,14 53,26" fill="#F97316" />
              {/* Round Attic Window */}
              <circle cx="35" cy="20" r="3.5" fill="#FEF08A" stroke="#CA8A04" strokeWidth="1.2" />
              {/* Door */}
              <rect x="30" y="36" width="10" height="14" rx="1" fill="#78350F" stroke="#451A03" strokeWidth="1.5" />
              <circle cx="38" cy="43" r="0.8" fill="#FDE047" />
            </svg>
            <span className="text-[9px] font-explorer font-bold text-[#78350F] tracking-wide mt-0.5 bg-[#FAF3E3]/90 px-1.5 py-0.5 rounded-full border border-[#D97706]/40 shadow-2xs">
              Explorer Cabin
            </span>
          </div>
        );

      case "pond":
        return (
          <div className="flex flex-col items-center select-none pointer-events-none drop-shadow-md">
            <svg width="68" height="48" viewBox="0 0 68 48" fill="none">
              {/* Pond Shoreline */}
              <path d="M8 24 C8 12 60 12 60 26 C60 40 12 40 8 24 Z" fill="#38BDF8" stroke="#0284C7" strokeWidth="2" />
              <path d="M12 24 C12 16 56 16 56 26 C56 36 16 36 12 24 Z" fill="#7DD3FC" />
              {/* Water ripple */}
              <path d="M22 22 Q34 18 46 22" stroke="#BAE6FD" strokeWidth="1.5" strokeLinecap="round" />
              {/* Lily pad 1 */}
              <ellipse cx="26" cy="26" rx="5" ry="4" fill="#16A34A" stroke="#14532D" strokeWidth="1" />
              <circle cx="27" cy="25" r="1.8" fill="#F43F5E" />
              {/* Lily pad 2 */}
              <ellipse cx="44" cy="28" rx="4" ry="3" fill="#22C55E" />
              {/* Cattail Reeds */}
              <line x1="52" y1="36" x2="52" y2="14" stroke="#15803D" strokeWidth="1.8" strokeLinecap="round" />
              <rect x="51" y="12" width="2.5" height="9" rx="1" fill="#78350F" />
            </svg>
            <span className="text-[9px] font-explorer font-bold text-[#78350F] tracking-wide mt-0.5 bg-[#FAF3E3]/90 px-1.5 py-0.5 rounded-full border border-[#D97706]/40 shadow-2xs">
              Lotus Spring
            </span>
          </div>
        );

      case "trees":
        return (
          <div className="flex flex-col items-center select-none pointer-events-none drop-shadow-md">
            <svg width="66" height="56" viewBox="0 0 66 56" fill="none">
              <ellipse cx="28" cy="50" rx="20" ry="4" fill="#D4C29A" opacity="0.6" />
              <ellipse cx="48" cy="50" rx="14" ry="3.5" fill="#D4C29A" opacity="0.5" />
              {/* Tree 1 Trunk */}
              <rect x="25" y="40" width="6" height="12" fill="#78350F" rx="1" />
              {/* Layered Pine Foliage */}
              <polygon points="28,10 14,24 42,24" fill="#047857" stroke="#065F46" strokeWidth="1.5" />
              <polygon points="28,20 12,34 44,34" fill="#059669" stroke="#047857" strokeWidth="1.5" />
              <polygon points="28,28 10,42 46,42" fill="#10B981" stroke="#059669" strokeWidth="1.5" />
              {/* Tree 2 Secondary */}
              <rect x="47" y="42" width="4" height="10" fill="#78350F" rx="1" />
              <polygon points="49,20 38,32 60,32" fill="#047857" stroke="#065F46" strokeWidth="1.2" />
              <polygon points="49,28 36,44 62,44" fill="#059669" stroke="#047857" strokeWidth="1.2" />
            </svg>
            <span className="text-[9px] font-explorer font-bold text-[#78350F] tracking-wide mt-0.5 bg-[#FAF3E3]/90 px-1.5 py-0.5 rounded-full border border-[#D97706]/40 shadow-2xs">
              Ancient Pines
            </span>
          </div>
        );

      case "campfire":
        return (
          <div className="flex flex-col items-center select-none pointer-events-none drop-shadow-md">
            <svg width="60" height="52" viewBox="0 0 60 52" fill="none">
              <ellipse cx="30" cy="46" rx="20" ry="4.5" fill="#D4C29A" opacity="0.6" />
              {/* Stone Ring */}
              <circle cx="18" cy="44" r="3.5" fill="#78716C" stroke="#44403C" strokeWidth="1" />
              <circle cx="26" cy="46" r="3.8" fill="#A8A29E" stroke="#57534E" strokeWidth="1" />
              <circle cx="36" cy="46" r="3.8" fill="#78716C" stroke="#44403C" strokeWidth="1" />
              <circle cx="44" cy="44" r="3.5" fill="#A8A29E" stroke="#57534E" strokeWidth="1" />
              {/* Logs */}
              <line x1="20" y1="46" x2="42" y2="38" stroke="#78350F" strokeWidth="4" strokeLinecap="round" />
              <line x1="42" y1="46" x2="20" y2="38" stroke="#92400E" strokeWidth="4" strokeLinecap="round" />
              {/* Roaring Flame (Triple Layer) */}
              <path d="M30 14 C36 22 40 28 35 38 C31 40 21 38 23 30 C23 24 30 18 30 14 Z" fill="#F59E0B" stroke="#D97706" strokeWidth="1.5" />
              <path d="M30 22 C33 26 35 30 33 36 C30 37 25 36 26 31 C26 27 30 24 30 22 Z" fill="#EF4444" />
              <path d="M30 28 C31 31 32 33 31 35 C29 36 28 35 28 33 C28 31 30 29 30 28 Z" fill="#FEF08A" />
              {/* Sparks */}
              <circle cx="34" cy="10" r="1.5" fill="#FBBF24" />
              <circle cx="24" cy="12" r="1.2" fill="#F97316" />
            </svg>
            <span className="text-[9px] font-explorer font-bold text-[#78350F] tracking-wide mt-0.5 bg-[#FAF3E3]/90 px-1.5 py-0.5 rounded-full border border-[#D97706]/40 shadow-2xs">
              Base Campfire
            </span>
          </div>
        );

      case "rocks":
        return (
          <div className="flex flex-col items-center select-none pointer-events-none drop-shadow-md">
            <svg width="66" height="52" viewBox="0 0 66 52" fill="none">
              <ellipse cx="33" cy="46" rx="25" ry="4" fill="#D4C29A" opacity="0.6" />
              {/* Large Amber Boulder */}
              <polygon points="12,44 20,20 38,14 50,32 46,44" fill="#F59E0B" stroke="#B45309" strokeWidth="2" />
              <polygon points="20,20 38,14 34,44 12,44" fill="#FBBF24" />
              {/* Glowing Gem Vein */}
              <path d="M26 22 L30 18 L34 28 L28 34 Z" fill="#FEF08A" stroke="#CA8A04" strokeWidth="1.2" />
              {/* Small Foreground Rock */}
              <polygon points="42,45 46,30 58,34 56,45" fill="#D97706" stroke="#92400E" strokeWidth="1.5" />
            </svg>
            <span className="text-[9px] font-explorer font-bold text-[#78350F] tracking-wide mt-0.5 bg-[#FAF3E3]/90 px-1.5 py-0.5 rounded-full border border-[#D97706]/40 shadow-2xs">
              Amber Crag
            </span>
          </div>
        );

      case "windmill":
        return (
          <div className="flex flex-col items-center select-none pointer-events-none drop-shadow-md">
            <svg width="66" height="60" viewBox="0 0 66 60" fill="none">
              <ellipse cx="33" cy="54" rx="24" ry="4" fill="#D4C29A" opacity="0.6" />
              {/* Mill Tower */}
              <polygon points="26,52 28,26 38,26 40,52" fill="#FFFBEB" stroke="#B45309" strokeWidth="2" />
              <path d="M27 26 C27 20 39 20 39 26 Z" fill="#EA580C" stroke="#9A3412" strokeWidth="1.5" />
              {/* Hub */}
              <circle cx="33" cy="25" r="3" fill="#78350F" />
              {/* Rotating Sails (4 blades) */}
              <line x1="33" y1="25" x2="33" y2="7" stroke="#78350F" strokeWidth="2.5" strokeLinecap="round" />
              <line x1="33" y1="25" x2="33" y2="43" stroke="#78350F" strokeWidth="2.5" strokeLinecap="round" />
              <line x1="33" y1="25" x2="15" y2="25" stroke="#78350F" strokeWidth="2.5" strokeLinecap="round" />
              <line x1="33" y1="25" x2="51" y2="25" stroke="#78350F" strokeWidth="2.5" strokeLinecap="round" />
              {/* Canvas sail patches */}
              <rect x="34" y="8" width="5" height="12" fill="#FEF3C7" stroke="#D97706" strokeWidth="1" />
              <rect x="25" y="26" width="5" height="12" fill="#FEF3C7" stroke="#D97706" strokeWidth="1" />
            </svg>
            <span className="text-[9px] font-explorer font-bold text-[#78350F] tracking-wide mt-0.5 bg-[#FAF3E3]/90 px-1.5 py-0.5 rounded-full border border-[#D97706]/40 shadow-2xs">
              Windmill
            </span>
          </div>
        );

      case "cloud":
        return (
          <div className="flex flex-col items-center select-none pointer-events-none drop-shadow-md">
            <svg width="68" height="46" viewBox="0 0 68 46" fill="none">
              {/* Radiant Sun behind */}
              <circle cx="50" cy="16" r="10" fill="#FDE047" stroke="#CA8A04" strokeWidth="1.5" />
              {/* Cloud Fluffs */}
              <path
                d="M18 36 H52 C58 36 62 32 60 26 C59 20 54 19 50 20 C48 12 36 10 30 15 C26 13 18 15 17 22 C12 23 11 29 14 33 C15 35 16 36 18 36 Z"
                fill="#FFFFFF"
                stroke="#94A3B8"
                strokeWidth="2"
              />
              <path d="M24 30 Q36 28 46 30" stroke="#E2E8F0" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
            <span className="text-[9px] font-explorer font-bold text-[#78350F] tracking-wide mt-0.5 bg-[#FAF3E3]/90 px-1.5 py-0.5 rounded-full border border-[#D97706]/40 shadow-2xs">
              Summit Peak
            </span>
          </div>
        );

      case "monolith":
        return (
          <div className="flex flex-col items-center select-none pointer-events-none drop-shadow-md">
            <svg width="60" height="56" viewBox="0 0 60 56" fill="none">
              <ellipse cx="30" cy="50" rx="22" ry="4" fill="#D4C29A" opacity="0.6" />
              {/* Standing Monolith Obelisk */}
              <polygon points="22,48 24,14 36,10 38,48" fill="#475569" stroke="#1E293B" strokeWidth="2" />
              <polygon points="24,14 36,10 38,48 30,48" fill="#64748B" />
              {/* Glowing Magic Rune Inscriptions */}
              <path d="M30 22 C32 22 34 24 32 27 C30 29 27 26 30 24" stroke="#38BDF8" strokeWidth="1.8" strokeLinecap="round" fill="none" />
              <line x1="28" y1="32" x2="33" y2="32" stroke="#38BDF8" strokeWidth="1.8" strokeLinecap="round" />
              <line x1="27" y1="38" x2="34" y2="38" stroke="#38BDF8" strokeWidth="1.8" strokeLinecap="round" />
              <circle cx="30" cy="43" r="1.5" fill="#38BDF8" />
            </svg>
            <span className="text-[9px] font-explorer font-bold text-[#78350F] tracking-wide mt-0.5 bg-[#FAF3E3]/90 px-1.5 py-0.5 rounded-full border border-[#D97706]/40 shadow-2xs">
              Rune Obelisk
            </span>
          </div>
        );

      case "cairn":
        return (
          <div className="flex flex-col items-center select-none pointer-events-none drop-shadow-md">
            <svg width="60" height="54" viewBox="0 0 60 54" fill="none">
              <ellipse cx="30" cy="48" rx="20" ry="4" fill="#D4C29A" opacity="0.6" />
              {/* Stacked Balancing Stones */}
              <ellipse cx="30" cy="44" rx="16" ry="6" fill="#64748B" stroke="#334155" strokeWidth="1.5" />
              <ellipse cx="30" cy="34" rx="13" ry="5.5" fill="#94A3B8" stroke="#475569" strokeWidth="1.5" />
              <ellipse cx="30" cy="24" rx="10" ry="4.5" fill="#CBD5E1" stroke="#64748B" strokeWidth="1.5" />
              <ellipse cx="30" cy="16" rx="6" ry="3.5" fill="#F1F5F9" stroke="#94A3B8" strokeWidth="1.5" />
              {/* Golden Top Crystal */}
              <circle cx="30" cy="10" r="2.8" fill="#F59E0B" stroke="#D97706" strokeWidth="1" />
            </svg>
            <span className="text-[9px] font-explorer font-bold text-[#78350F] tracking-wide mt-0.5 bg-[#FAF3E3]/90 px-1.5 py-0.5 rounded-full border border-[#D97706]/40 shadow-2xs">
              Zen Cairns
            </span>
          </div>
        );

      case "observatory":
        return (
          <div className="flex flex-col items-center select-none pointer-events-none drop-shadow-md">
            <svg width="66" height="58" viewBox="0 0 66 58" fill="none">
              <ellipse cx="33" cy="52" rx="24" ry="4" fill="#D4C29A" opacity="0.6" />
              {/* Stargazer Colosseum Rotunda */}
              <rect x="22" y="30" width="22" height="20" rx="3" fill="#E0E7FF" stroke="#4338CA" strokeWidth="2" />
              {/* Indigo Dome */}
              <path d="M22 30 C22 16 44 16 44 30 Z" fill="#4F46E5" stroke="#3730A3" strokeWidth="2" />
              {/* Brass Telescope Barrel */}
              <line x1="33" y1="20" x2="44" y2="9" stroke="#FBBF24" strokeWidth="3.5" strokeLinecap="round" />
              <circle cx="44" cy="9" r="2" fill="#FDE047" />
            </svg>
            <span className="text-[9px] font-explorer font-bold text-[#78350F] tracking-wide mt-0.5 bg-[#FAF3E3]/90 px-1.5 py-0.5 rounded-full border border-[#D97706]/40 shadow-2xs">
              Astrolabe Dome
            </span>
          </div>
        );

      case "summit":
      default:
        return (
          <div className="flex flex-col items-center select-none pointer-events-none drop-shadow-md">
            <svg width="70" height="58" viewBox="0 0 70 58" fill="none">
              <ellipse cx="35" cy="52" rx="26" ry="4" fill="#CA8A04" opacity="0.5" />
              {/* Golden Stepped Pedestal */}
              <polygon points="14,48 22,34 48,34 56,48" fill="#FDE047" stroke="#CA8A04" strokeWidth="2" />
              {/* Legendary Chalice Trophy */}
              <path d="M28 34 V26 C28 18 42 18 42 26 V34 Z" fill="#FACC15" stroke="#B45309" strokeWidth="1.5" />
              <path d="M24 22 C18 22 18 30 25 30" stroke="#B45309" strokeWidth="1.8" fill="none" strokeLinecap="round" />
              <path d="M46 22 C52 22 52 30 45 30" stroke="#B45309" strokeWidth="1.8" fill="none" strokeLinecap="round" />
              {/* Radiance Stars */}
              <circle cx="35" cy="14" r="3" fill="#F59E0B" />
              <circle cx="22" cy="12" r="2" fill="#FDE047" />
              <circle cx="48" cy="12" r="2" fill="#FDE047" />
            </svg>
            <span className="text-[9px] font-explorer font-bold text-[#451A03] tracking-wide mt-0.5 bg-[#FEF08A] px-2 py-0.5 rounded-full border border-[#CA8A04] shadow-2xs">
              Crown Spire
            </span>
          </div>
        );
    }
  };

  return (
    <div
      className="absolute transform -translate-x-1/2 -translate-y-1/2 z-10 transition-transform duration-300"
      style={{ left: `${x}px`, top: `${y}px` }}
      aria-hidden="true"
    >
      {renderIllustration()}
    </div>
  );
};
