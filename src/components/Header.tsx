import React from "react";
import { ArrowLeft, Volume2, VolumeX, Coins, Lightbulb } from "lucide-react";
import { sound } from "../utils/audio";

interface Props {
  onGoHome?: () => void;
  title?: string;
  subtitle?: string;
  coins: number;
  soundEnabled: boolean;
  onToggleSound: () => void;
  onOpenHint?: () => void;
  showHintButton?: boolean;
}

export const Header: React.FC<Props> = ({
  onGoHome,
  title,
  subtitle,
  coins,
  soundEnabled,
  onToggleSound,
  onOpenHint,
  showHintButton = false,
}) => {
  return (
    <header className="w-full max-w-md mx-auto flex items-center justify-between py-2 sm:py-3 px-3 sm:px-4 select-none border-b-2 border-[#B45309]/30 bg-[#FAF3E3]/90 backdrop-blur-md sticky top-0 z-20 shadow-xs">
      {/* Left controls: Home / Back + Sound Toggle */}
      <div className="flex items-center gap-1.5 sm:gap-2">
        {onGoHome && (
          <button
            onClick={() => {
              sound.playTap();
              onGoHome();
            }}
            aria-label="Back / Map"
            title="Back to Levels (Esc)"
            className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center bg-gradient-to-b from-[#FAF3E3] to-[#F5EEDB] hover:brightness-95 active:scale-95 transition-all border-2 border-[#B45309]/50 rounded-xl shadow-xs text-[#5B2609] cursor-pointer touch-manipulation"
          >
            <ArrowLeft className="w-4 h-4 sm:w-4.5 sm:h-4.5 stroke-[2.5]" />
          </button>
        )}

        <button
          onClick={() => {
            sound.playTap();
            onToggleSound();
          }}
          aria-label={soundEnabled ? "Mute audio" : "Unmute audio"}
          title={soundEnabled ? "Mute (M)" : "Unmute (M)"}
          className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center bg-gradient-to-b from-[#FAF3E3] to-[#F5EEDB] hover:brightness-95 active:scale-95 transition-all border-2 border-[#B45309]/50 rounded-xl shadow-xs text-[#5B2609] cursor-pointer touch-manipulation"
        >
          {soundEnabled ? (
            <Volume2 className="w-4 h-4 sm:w-4.5 sm:h-4.5 stroke-[2.2] text-[#78350F]" />
          ) : (
            <VolumeX className="w-4 h-4 sm:w-4.5 sm:h-4.5 stroke-[2.2] text-[#A8A29E]" />
          )}
        </button>
      </div>

      {/* Center Title or Level Indicator */}
      {title && (
        <div className="text-center flex-1 px-3 min-w-0">
          <div className="font-explorer font-extrabold text-sm sm:text-base text-[#451A03] tracking-wide leading-tight truncate">
            {title}
          </div>
          {subtitle && (
            <div className="text-[10px] font-heading font-extrabold text-[#92400E] tracking-widest uppercase">
              {subtitle}
            </div>
          )}
        </div>
      )}

      {/* Right controls: Coins pill + optional Hint button */}
      <div className="flex items-center gap-2">
        {/* Coin pill styled as gold explorer pouch */}
        <div className="flex items-center gap-1.5 px-2.5 py-1 bg-[#FEF3C7] border-2 border-[#D97706]/70 rounded-full shadow-xs">
          <div className="w-4 h-4 rounded-full bg-gradient-to-tr from-[#D97706] to-[#FBBF24] flex items-center justify-center shadow-xs">
            <Coins className="w-2.5 h-2.5 text-[#451A03] stroke-[2.5]" />
          </div>
          <span className="font-heading font-extrabold text-xs text-[#78350F] tracking-tight">
            {coins}
          </span>
        </div>

        {/* Hint button if in puzzle screen */}
        {showHintButton && onOpenHint && (
          <button
            onClick={() => {
              sound.playTap();
              onOpenHint();
            }}
            aria-label="Hint"
            title="Hint (H)"
            className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center bg-gradient-to-b from-[#D97706] to-[#B45309] hover:brightness-110 active:scale-95 transition-all rounded-xl shadow-xs shadow-amber-950/20 text-[#FEF3C7] border border-[#FDE68A] cursor-pointer touch-manipulation"
          >
            <Lightbulb className="w-4 h-4 sm:w-4.5 sm:h-4.5 fill-[#FDE68A]/30 stroke-[2.2]" />
          </button>
        )}
      </div>
    </header>
  );
};

