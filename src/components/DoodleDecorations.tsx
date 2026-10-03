import React from "react";
import { LevelTheme } from "../utils/theme";

interface Props {
  theme?: LevelTheme;
}

export const DoodleDecorations: React.FC<Props> = ({ theme }) => {
  const category = theme?.category || "parchment";
  const glow = theme?.glowColor || "#F59E0B";
  const accent = theme?.accentColor || "#D97706";

  const renderCategoryDoodles = () => {
    switch (category) {
      case "sea":
        return (
          <>
            {/* Top Right: Seashell & Coral Sprig */}
            <svg
              className="absolute -top-2 right-2 w-32 h-32 opacity-35 text-teal-800"
              viewBox="0 0 100 100"
              fill="none"
              stroke="currentColor"
            >
              {/* Sea Shell */}
              <path
                d="M60 20 C45 20, 30 35, 40 55 C45 65, 55 70, 65 65 C80 58, 85 35, 75 22 Z"
                strokeWidth="1.8"
                fill="#CCFBF1"
                opacity="0.5"
              />
              <path d="M50 35 L40 55 M60 28 L55 60 M70 30 L65 65" strokeWidth="1.2" opacity="0.6" />
              {/* Starfish */}
              <polygon
                points="25,45 28,52 35,53 30,58 32,65 25,60 18,65 20,58 15,53 22,52"
                fill="#F43F5E"
                stroke="#E11D48"
                strokeWidth="1"
                opacity="0.6"
              />
            </svg>

            {/* Bottom Left: Gentle Nautical Sea Swells */}
            <svg
              className="absolute bottom-6 left-6 w-32 h-20 opacity-30 text-teal-800"
              viewBox="0 0 120 60"
              fill="none"
              stroke="currentColor"
            >
              <path d="M5 30 Q20 20, 35 30 T65 30 T95 30 T125 30" strokeWidth="2" strokeLinecap="round" />
              <path d="M15 45 Q30 38, 45 45 T75 45 T105 45" strokeWidth="1.5" strokeLinecap="round" />
              <circle cx="35" cy="20" r="2" fill="#2DD4BF" opacity="0.6" />
              <circle cx="75" cy="22" r="1.5" fill="#2DD4BF" opacity="0.5" />
            </svg>
          </>
        );

      case "desert":
        return (
          <>
            {/* Top Right: Sun-baked Dune Crest & Saguaro silhouette */}
            <svg
              className="absolute top-2 right-4 w-32 h-32 opacity-35 text-amber-900"
              viewBox="0 0 100 100"
              fill="none"
              stroke="currentColor"
            >
              {/* Desert Sun */}
              <circle cx="75" cy="25" r="14" fill="#FDE68A" opacity="0.6" strokeWidth="1.5" stroke="#D97706" />
              <line x1="75" y1="5" x2="75" y2="0" strokeWidth="1.5" stroke="#D97706" />
              <line x1="95" y1="25" x2="100" y2="25" strokeWidth="1.5" stroke="#D97706" />
              <line x1="89" y1="11" x2="93" y2="7" strokeWidth="1.5" stroke="#D97706" />
              {/* Sand Dune Ridge */}
              <path d="M10 80 Q40 50, 75 70 T110 65" strokeWidth="2" stroke="#B45309" />
              {/* Mini Cactus */}
              <path d="M30 75 V55 M25 62 H30 M25 58 V62 M30 65 H35 M35 60 V65" strokeWidth="2.2" strokeLinecap="round" stroke="#92400E" />
            </svg>

            {/* Bottom Left: Terracotta Mesa & Sand Ripples */}
            <svg
              className="absolute bottom-6 left-6 w-32 h-20 opacity-30 text-amber-900"
              viewBox="0 0 120 60"
              fill="none"
              stroke="currentColor"
            >
              <path d="M10 50 L30 30 H60 L75 50 Z" fill="#FDE68A" opacity="0.4" strokeWidth="1.8" stroke="#B45309" />
              <path d="M50 48 Q70 42, 90 48 T120 48" strokeWidth="1.5" stroke="#D97706" />
            </svg>
          </>
        );

      case "forest":
        return (
          <>
            {/* Top Right: Pine Boughs & Forest Canopy */}
            <svg
              className="absolute top-2 right-2 w-36 h-36 opacity-35 text-emerald-900"
              viewBox="0 0 120 120"
              fill="none"
              stroke="currentColor"
            >
              {/* Pine Branch */}
              <path d="M120 10 Q80 30, 40 70" strokeWidth="2.5" stroke="#065F46" />
              {/* Pine needles */}
              <path d="M90 25 L80 15 M90 25 L75 22 M80 35 L68 25 M80 35 L65 35 M70 45 L55 40 M70 45 L55 48" strokeWidth="1.8" stroke="#059669" strokeLinecap="round" />
              {/* Forest Acorn */}
              <circle cx="48" cy="65" r="5" fill="#78350F" opacity="0.7" />
              <path d="M44 63 Q48 58, 52 63" strokeWidth="2" stroke="#451A03" />
            </svg>

            {/* Bottom Left: Woodland Mushrooms */}
            <svg
              className="absolute bottom-6 left-6 w-28 h-20 opacity-30 text-emerald-900"
              viewBox="0 0 100 60"
              fill="none"
              stroke="currentColor"
            >
              {/* Big Mushroom */}
              <path d="M25 45 C25 25, 55 25, 55 45 Z" fill="#F87171" opacity="0.6" stroke="#991B1B" strokeWidth="1.8" />
              <circle cx="35" cy="35" r="2" fill="#FAF5FF" />
              <circle cx="45" cy="33" r="2.2" fill="#FAF5FF" />
              <path d="M38 45 V55 H42 V45" fill="#FEF3C7" stroke="#92400E" strokeWidth="1.5" />
              {/* Small Mushroom */}
              <path d="M60 48 C60 36, 78 36, 78 48 Z" fill="#FBBF24" opacity="0.6" stroke="#B45309" strokeWidth="1.5" />
              <path d="M68 48 V55 H70 V48" fill="#FEF3C7" stroke="#92400E" strokeWidth="1.2" />
            </svg>
          </>
        );

      case "volcanic":
        return (
          <>
            {/* Top Right: Smoking Volcanic Peak & Ember Sparks */}
            <svg
              className="absolute top-2 right-2 w-32 h-32 opacity-35 text-rose-950"
              viewBox="0 0 100 100"
              fill="none"
              stroke="currentColor"
            >
              {/* Volcano silhouette */}
              <path d="M30 85 L55 35 H65 L90 85 Z" fill="#450A0A" opacity="0.5" stroke="#991B1B" strokeWidth="2" />
              {/* Lava crater glow */}
              <ellipse cx="60" cy="35" rx="5" ry="2" fill="#F59E0B" />
              <path d="M58 35 Q56 45, 58 55" stroke="#EF4444" strokeWidth="1.8" strokeLinecap="round" />
              {/* Sparks */}
              <circle cx="62" cy="20" r="1.5" fill="#F59E0B" />
              <circle cx="54" cy="14" r="1.2" fill="#EF4444" />
              <circle cx="70" cy="18" r="1.4" fill="#F97316" />
            </svg>

            {/* Bottom Left: Basalt Fractures */}
            <svg
              className="absolute bottom-6 left-6 w-28 h-20 opacity-30 text-rose-950"
              viewBox="0 0 100 60"
              fill="none"
              stroke="currentColor"
            >
              <path d="M10 50 L35 30 L60 45 L85 25" strokeWidth="2" stroke="#DC2626" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="35" cy="30" r="2.5" fill="#F97316" opacity="0.6" />
              <circle cx="60" cy="45" r="2" fill="#F59E0B" opacity="0.6" />
            </svg>
          </>
        );

      case "frost":
        return (
          <>
            {/* Top Right: Ice Crystal Snowflake & Icicles */}
            <svg
              className="absolute top-2 right-2 w-32 h-32 opacity-35 text-cyan-900"
              viewBox="0 0 100 100"
              fill="none"
              stroke="currentColor"
            >
              {/* 6-point Snowflake */}
              <g transform="translate(65, 35)">
                <line x1="0" y1="-22" x2="0" y2="22" stroke="#0891B2" strokeWidth="1.8" strokeLinecap="round" />
                <line x1="-19" y1="-11" x2="19" y2="11" stroke="#0891B2" strokeWidth="1.8" strokeLinecap="round" />
                <line x1="-19" y1="11" x2="19" y2="-11" stroke="#0891B2" strokeWidth="1.8" strokeLinecap="round" />
                <circle cx="0" cy="0" r="3" fill="#A5F3FC" stroke="#0891B2" strokeWidth="1" />
              </g>
              {/* Hanging Icicles */}
              <polygon points="15,0 18,25 21,0" fill="#CFFAFE" opacity="0.7" stroke="#0891B2" strokeWidth="1" />
              <polygon points="25,0 27,18 29,0" fill="#CFFAFE" opacity="0.7" stroke="#0891B2" strokeWidth="1" />
            </svg>

            {/* Bottom Left: Alpine Mountain Peaks */}
            <svg
              className="absolute bottom-6 left-6 w-32 h-20 opacity-30 text-cyan-900"
              viewBox="0 0 120 60"
              fill="none"
              stroke="currentColor"
            >
              <polygon points="10,55 45,15 80,55" fill="#ECFEFF" opacity="0.6" stroke="#0891B2" strokeWidth="1.8" />
              <polygon points="45,15 55,28 45,26 35,28" fill="#A5F3FC" />
              <polygon points="65,55 90,25 115,55" fill="#ECFEFF" opacity="0.5" stroke="#0891B2" strokeWidth="1.5" />
            </svg>
          </>
        );

      case "metallic":
        return (
          <>
            {/* Top Right: Clockwork Gear & Caliper drafting lines */}
            <svg
              className="absolute top-2 right-2 w-32 h-32 opacity-35 text-slate-800"
              viewBox="0 0 100 100"
              fill="none"
              stroke="currentColor"
            >
              {/* Gear wheel */}
              <g transform="translate(65, 35)">
                <circle cx="0" cy="0" r="18" stroke="#475569" strokeWidth="2.5" fill="#E2E8F0" opacity="0.5" />
                <circle cx="0" cy="0" r="8" stroke="#334155" strokeWidth="2" fill="#CBD5E1" />
                <line x1="0" y1="-22" x2="0" y2="-18" stroke="#334155" strokeWidth="3.5" />
                <line x1="0" y1="18" x2="0" y2="22" stroke="#334155" strokeWidth="3.5" />
                <line x1="-22" y1="0" x2="-18" y2="0" stroke="#334155" strokeWidth="3.5" />
                <line x1="18" y1="0" x2="22" y2="0" stroke="#334155" strokeWidth="3.5" />
              </g>
            </svg>

            {/* Bottom Left: Blueprint measurement lines */}
            <svg
              className="absolute bottom-6 left-6 w-28 h-20 opacity-30 text-slate-800"
              viewBox="0 0 100 60"
              fill="none"
              stroke="currentColor"
            >
              <line x1="10" y1="35" x2="90" y2="35" stroke="#475569" strokeWidth="1.5" strokeDasharray="3,3" />
              <line x1="10" y1="28" x2="10" y2="42" stroke="#334155" strokeWidth="2" />
              <line x1="90" y1="28" x2="90" y2="42" stroke="#334155" strokeWidth="2" />
              <circle cx="50" cy="35" r="4" fill="#CBD5E1" stroke="#334155" strokeWidth="1.5" />
            </svg>
          </>
        );

      case "celestial":
        return (
          <>
            {/* Top Right: Crescent Moon & Constellation Star Chart */}
            <svg
              className="absolute top-2 right-2 w-32 h-32 opacity-35 text-indigo-900"
              viewBox="0 0 100 100"
              fill="none"
              stroke="currentColor"
            >
              {/* Crescent Moon */}
              <path
                d="M70 15 C55 20, 50 45, 68 55 C50 52, 45 30, 60 12 Z"
                fill="#FEF08A"
                stroke="#EAB308"
                strokeWidth="1.5"
                opacity="0.8"
              />
              {/* Star constellation */}
              <line x1="20" y1="35" x2="35" y2="25" stroke="#6366F1" strokeWidth="1" strokeDasharray="2,3" />
              <line x1="35" y1="25" x2="48" y2="40" stroke="#6366F1" strokeWidth="1" strokeDasharray="2,3" />
              <circle cx="20" cy="35" r="2.2" fill="#FBBF24" />
              <circle cx="35" cy="25" r="2.5" fill="#818CF8" />
              <circle cx="48" cy="40" r="2.2" fill="#FBBF24" />
            </svg>

            {/* Bottom Left: Saturn Orbit Rings */}
            <svg
              className="absolute bottom-6 left-6 w-28 h-20 opacity-30 text-indigo-900"
              viewBox="0 0 100 60"
              fill="none"
              stroke="currentColor"
            >
              <ellipse cx="50" cy="30" rx="30" ry="10" transform="rotate(-15 50 30)" stroke="#818CF8" strokeWidth="1.8" />
              <circle cx="50" cy="30" r="12" fill="#C7D2FE" stroke="#4F46E5" strokeWidth="1.5" opacity="0.6" />
            </svg>
          </>
        );

      case "golden":
        return (
          <>
            {/* Top Right: Royal Sunburst & Laurel Sprig */}
            <svg
              className="absolute top-2 right-2 w-32 h-32 opacity-35 text-amber-900"
              viewBox="0 0 100 100"
              fill="none"
              stroke="currentColor"
            >
              {/* Radiant Sunburst */}
              <g transform="translate(65, 35)">
                <circle cx="0" cy="0" r="10" fill="#FDE047" stroke="#CA8A04" strokeWidth="1.8" />
                <path
                  d="M0 -18 L0 -12 M0 12 L0 18 M-18 0 L-12 0 M12 0 L18 0 M-13 -13 L-8 -8 M8 8 L13 13 M-13 13 L-8 8 M8 -8 L13 -13"
                  stroke="#EAB308"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </g>
            </svg>

            {/* Bottom Left: Golden Laurel Crown */}
            <svg
              className="absolute bottom-6 left-6 w-28 h-20 opacity-30 text-amber-900"
              viewBox="0 0 100 60"
              fill="none"
              stroke="currentColor"
            >
              <path d="M20 45 C30 15, 70 15, 80 45" stroke="#CA8A04" strokeWidth="2.5" fill="none" />
              <circle cx="50" cy="20" r="3" fill="#F59E0B" />
              <polygon points="50,12 47,19 53,19" fill="#FBBF24" />
            </svg>
          </>
        );

      case "parchment":
      default:
        return (
          <>
            {/* Top Right: Hanging Jungle Vines & Tropical Palm Leaves */}
            <svg
              className="absolute -top-2 right-0 w-36 h-36 opacity-35 text-emerald-800"
              viewBox="0 0 120 120"
              fill="none"
              stroke="currentColor"
            >
              <path d="M120,0 C100,20 90,40 105,70 C110,85 100,105 85,115" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M110,25 C85,20 70,35 65,45 C75,40 95,35 110,25 Z" fill="#15803D" opacity="0.6" />
              <path d="M98,50 C75,52 62,70 60,82 C70,72 88,62 98,50 Z" fill="#166534" opacity="0.6" />
              <path d="M102,78 C80,85 70,105 72,118 C80,105 92,95 102,78 Z" fill="#14532D" opacity="0.6" />
              <path d="M118,12 C105,10 95,18 92,24 C98,20 110,16 118,12 Z" fill="#22C55E" opacity="0.5" />
            </svg>

            {/* Bottom Right: Mini Treasure Chest with Gold Sparkles */}
            <svg
              className="absolute bottom-6 right-8 w-20 h-20 opacity-30 text-amber-800"
              viewBox="0 0 80 80"
              fill="none"
              stroke="currentColor"
            >
              <ellipse cx="40" cy="65" rx="30" ry="6" fill="#D4B988" opacity="0.4" />
              <path d="M22 42 H58 V60 H22 Z" fill="#78350F" stroke="#451A03" strokeWidth="2" />
              <path d="M20 42 C20 30, 60 30, 60 42 Z" fill="#92400E" stroke="#451A03" strokeWidth="2" />
              <path d="M30 33 V60" stroke="#F59E0B" strokeWidth="2" />
              <path d="M50 33 V60" stroke="#F59E0B" strokeWidth="2" />
              <circle cx="40" cy="46" r="2.5" fill="#FDE047" />
            </svg>
          </>
        );
    }
  };

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 select-none">
      {/* Dynamic atmospheric lighting tinted by theme */}
      <div
        className="absolute -top-32 -left-32 w-[28rem] h-[28rem] rounded-full blur-3xl transition-colors duration-700 opacity-25"
        style={{ backgroundColor: glow }}
      />
      <div
        className="absolute top-1/4 -right-40 w-96 h-96 rounded-full blur-3xl transition-colors duration-700 opacity-15"
        style={{ backgroundColor: accent }}
      />
      <div
        className="absolute -bottom-32 left-1/3 w-[30rem] h-[30rem] rounded-full blur-3xl transition-colors duration-700 opacity-20"
        style={{ backgroundColor: glow }}
      />

      {/* Topographic Contour Lines Watermark */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.05] text-stone-900 pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M-50 120 C 150 60, 250 200, 500 150 S 750 80, 1000 140"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeDasharray="4 6"
        />
        <path
          d="M-30 220 C 180 180, 280 320, 560 250 S 800 200, 1050 260"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M-80 380 C 120 340, 260 480, 520 400 S 780 320, 1100 420"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
        />
        <path
          d="M-40 560 C 160 500, 320 640, 600 580 S 860 480, 1080 600"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeDasharray="6 6"
        />
      </svg>

      {/* Top Left: Antique 8-Point Compass Rose Watermark */}
      <div className="absolute top-6 left-6 opacity-25 text-stone-800 pointer-events-none">
        <svg
          className="w-24 h-24 animate-spin-slow"
          viewBox="0 0 100 100"
          fill="none"
          stroke="currentColor"
        >
          <circle cx="50" cy="50" r="42" strokeWidth="1" strokeDasharray="2 3" />
          <circle cx="50" cy="50" r="38" strokeWidth="0.8" />
          <polygon points="50,8 54,42 50,38 46,42" fill="#78350F" strokeWidth="0.5" />
          <polygon points="50,8 46,42 50,38" fill="#B45309" strokeWidth="0.5" />
          <polygon points="50,92 54,58 50,62 46,58" fill="#78350F" strokeWidth="0.5" />
          <polygon points="92,50 58,54 62,50 58,46" fill="#78350F" strokeWidth="0.5" />
          <polygon points="8,50 42,54 38,50 42,46" fill="#78350F" strokeWidth="0.5" />
          <circle cx="50" cy="50" r="3.5" fill={accent} />
        </svg>
      </div>

      {/* Thematic Category Hand-Drawn Doodles */}
      {renderCategoryDoodles()}
    </div>
  );
};
