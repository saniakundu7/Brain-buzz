import React from "react";
import { Compass, Sparkles, Flame, Snowflake, Mountain, Sun, Waves, Eye, Shield, Crown } from "lucide-react";
import { MapZone } from "../data/mapZones";

interface Props {
  zone: MapZone;
  y: number;
}

export const MapZoneBanner: React.FC<Props> = ({ zone, y }) => {
  // Zone-specific styling and insignia
  const getZoneTheme = () => {
    switch (zone.id) {
      case 1:
        return {
          ribbonBg: "bg-gradient-to-r from-[#D1FAE5] via-[#ECFDF5] to-[#D1FAE5]",
          border: "border-[#059669]",
          borderEnd: "bg-[#065F46]",
          textTitle: "text-[#064E3B]",
          textTag: "text-[#047857]",
          textSub: "text-[#065F46]",
          icon: <Waves className="w-3.5 h-3.5 text-[#059669]" />,
        };
      case 2:
        return {
          ribbonBg: "bg-gradient-to-r from-[#FEF3C7] via-[#FFFBEB] to-[#FEF3C7]",
          border: "border-[#D97706]",
          borderEnd: "bg-[#92400E]",
          textTitle: "text-[#78350F]",
          textTag: "text-[#B45309]",
          textSub: "text-[#92400E]",
          icon: <Sun className="w-3.5 h-3.5 text-[#D97706]" />,
        };
      case 3:
        return {
          ribbonBg: "bg-gradient-to-r from-[#E0F2FE] via-[#F0F9FF] to-[#E0F2FE]",
          border: "border-[#0284C7]",
          borderEnd: "bg-[#075985]",
          textTitle: "text-[#0C4A6E]",
          textTag: "text-[#0369A1]",
          textSub: "text-[#075985]",
          icon: <Waves className="w-3.5 h-3.5 text-[#0284C7]" />,
        };
      case 4:
        return {
          ribbonBg: "bg-gradient-to-r from-[#FFE4E6] via-[#FFF1F2] to-[#FFE4E6]",
          border: "border-[#E11D48]",
          borderEnd: "bg-[#9F1239]",
          textTitle: "text-[#881337]",
          textTag: "text-[#BE123C]",
          textSub: "text-[#9F1239]",
          icon: <Flame className="w-3.5 h-3.5 text-[#E11D48]" />,
        };
      case 5:
        return {
          ribbonBg: "bg-gradient-to-r from-[#F3E8FF] via-[#FAF5FF] to-[#F3E8FF]",
          border: "border-[#9333EA]",
          borderEnd: "bg-[#6B21A8]",
          textTitle: "text-[#581C87]",
          textTag: "text-[#7E22CE]",
          textSub: "text-[#6B21A8]",
          icon: <Sparkles className="w-3.5 h-3.5 text-[#9333EA]" />,
        };
      case 6:
        return {
          ribbonBg: "bg-gradient-to-r from-[#CFFAFE] via-[#ECFEFF] to-[#CFFAFE]",
          border: "border-[#0891B2]",
          borderEnd: "bg-[#155E75]",
          textTitle: "text-[#164E63]",
          textTag: "text-[#0E7490]",
          textSub: "text-[#155E75]",
          icon: <Snowflake className="w-3.5 h-3.5 text-[#0891B2]" />,
        };
      case 7:
        return {
          ribbonBg: "bg-gradient-to-r from-[#FFEDD5] via-[#FFF7ED] to-[#FFEDD5]",
          border: "border-[#EA580C]",
          borderEnd: "bg-[#9A3412]",
          textTitle: "text-[#7C2D12]",
          textTag: "text-[#C2410C]",
          textSub: "text-[#9A3412]",
          icon: <Mountain className="w-3.5 h-3.5 text-[#EA580C]" />,
        };
      case 8:
        return {
          ribbonBg: "bg-gradient-to-r from-[#E2E8F0] via-[#F8FAFC] to-[#E2E8F0]",
          border: "border-[#475569]",
          borderEnd: "bg-[#1E293B]",
          textTitle: "text-[#0F172A]",
          textTag: "text-[#334155]",
          textSub: "text-[#1E293B]",
          icon: <Shield className="w-3.5 h-3.5 text-[#475569]" />,
        };
      case 9:
        return {
          ribbonBg: "bg-gradient-to-r from-[#E0E7FF] via-[#EEF2FF] to-[#E0E7FF]",
          border: "border-[#4F46E5]",
          borderEnd: "bg-[#312E81]",
          textTitle: "text-[#1E1B4B]",
          textTag: "text-[#4338CA]",
          textSub: "text-[#312E81]",
          icon: <Sparkles className="w-3.5 h-3.5 text-[#4F46E5]" />,
        };
      case 10:
      default:
        return {
          ribbonBg: "bg-gradient-to-r from-[#FEF08A] via-[#FFFBEB] to-[#FEF08A]",
          border: "border-[#CA8A04]",
          borderEnd: "bg-[#854D0E]",
          textTitle: "text-[#451A03]",
          textTag: "text-[#A16207]",
          textSub: "text-[#78350F]",
          icon: <Crown className="w-3.5 h-3.5 text-[#CA8A04]" />,
        };
    }
  };

  const theme = getZoneTheme();

  return (
    <div
      className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 w-full max-w-sm px-4 pointer-events-none select-none"
      style={{ top: `${y}px` }}
    >
      <div className="relative flex items-center justify-center filter drop-shadow-md">
        {/* Left Swallowtail Ribbon End */}
        <div
          className={`hidden sm:block absolute -left-2.5 top-1/2 -translate-y-1/2 w-5 h-11 ${theme.borderEnd} -skew-y-12 rounded-l-md shadow-inner border-l-2 border-y-2 border-white/40`}
        />

        {/* Ribbon Main Body */}
        <div
          className={`relative z-10 w-full py-2.5 px-4 ${theme.ribbonBg} border-2 ${theme.border} rounded-2xl shadow-lg text-center backdrop-blur-xs`}
        >
          {/* Top Zone Tag */}
          <div
            className={`flex items-center justify-center gap-1.5 text-[10px] font-explorer font-extrabold uppercase tracking-widest ${theme.textTag}`}
          >
            {theme.icon}
            <span>
              Territory {zone.id} • Stages {zone.startLevel}–{zone.endLevel}
            </span>
            {theme.icon}
          </div>

          {/* Zone Name */}
          <h3
            className={`font-explorer font-black text-sm sm:text-base ${theme.textTitle} tracking-wide leading-snug drop-shadow-2xs`}
          >
            {zone.name}
          </h3>

          {/* Tagline */}
          <p
            className={`text-[10px] ${theme.textSub} font-semibold tracking-tight mt-0.5 line-clamp-1`}
          >
            {zone.tagline}
          </p>
        </div>

        {/* Right Swallowtail Ribbon End */}
        <div
          className={`hidden sm:block absolute -right-2.5 top-1/2 -translate-y-1/2 w-5 h-11 ${theme.borderEnd} skew-y-12 rounded-r-md shadow-inner border-r-2 border-y-2 border-white/40`}
        />
      </div>
    </div>
  );
};
