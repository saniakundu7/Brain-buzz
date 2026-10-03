import React, { useEffect } from "react";
import confetti from "canvas-confetti";
import { Trophy, ArrowRight, CheckCircle2, RotateCcw, Compass } from "lucide-react";
import { sound } from "../utils/audio";

interface Props {
  isOpen: boolean;
  explanation: string;
  rewardCoins: number;
  onNextLevel: () => void;
  onReplay: () => void;
  onGoLevelSelect: () => void;
  isLastLevel?: boolean;
  isDailyChallenge?: boolean;
}

export const SuccessModal: React.FC<Props> = ({
  isOpen,
  explanation,
  rewardCoins,
  onNextLevel,
  onReplay,
  onGoLevelSelect,
  isLastLevel = false,
  isDailyChallenge = false,
}) => {
  useEffect(() => {
    if (isOpen) {
      sound.playFanfare();
      sound.playCoin();

      // Fire festive burst of colorful confetti with gold & jungle colors
      try {
        confetti({
          particleCount: 50,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#D97706", "#F59E0B", "#10B981", "#059669", "#FBBF24"],
          disableForReducedMotion: true,
        });
      } catch (e) {
        // fallback gracefully
      }
    }
  }, [isOpen]);

  // Keyboard shortcut: Press Enter or Space to go to next level
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        sound.playTap();
        if (!isLastLevel && !isDailyChallenge) {
          onNextLevel();
        } else {
          onGoLevelSelect();
        }
      } else if (e.key === "Escape") {
        e.preventDefault();
        sound.playTap();
        onGoLevelSelect();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, isLastLevel, isDailyChallenge, onNextLevel, onGoLevelSelect]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-sm max-h-[90vh] overflow-y-auto bg-[#FAF3E3] border-2 border-[#B45309] rounded-3xl p-6 text-center shadow-2xl">
        {/* Animated Badge Icon */}
        <div className="w-16 h-16 mx-auto -mt-11 bg-gradient-to-tr from-[#B45309] via-[#D97706] to-[#FBBF24] rounded-2xl flex items-center justify-center shadow-lg shadow-amber-950/30 border-2 border-[#FEF3C7]">
          <Trophy className="w-8 h-8 text-[#451A03]" />
        </div>

        {/* Heading */}
        <h2 className="mt-4 font-explorer font-extrabold text-2xl text-[#451A03] tracking-wide">
          {isDailyChallenge ? "Daily Puzzle Solved!" : "Level Solved!"}
        </h2>

        {/* Coin reward badge */}
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 my-2.5 bg-[#FEF3C7] border-2 border-[#D97706]/70 rounded-full text-xs font-explorer font-bold text-[#78350F] shadow-xs">
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 stroke-[2.5]" />
          <span>+{rewardCoins} Coins Won</span>
        </div>

        {/* Explanation text box */}
        <div className="p-3.5 bg-[#F5EEDB] border-2 border-[#B45309]/30 rounded-2xl text-left my-2">
          <span className="block text-[10px] font-explorer font-bold text-[#78350F] uppercase tracking-wider mb-1">
            How It Works
          </span>
          <p className="text-xs text-[#5B2609] leading-relaxed font-medium">
            {explanation}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="mt-4 space-y-2">
          {!isLastLevel && !isDailyChallenge && (
            <button
              onClick={() => {
                sound.playTap();
                onNextLevel();
              }}
              title="Next Level (Enter / Space)"
              className="w-full min-h-[48px] py-3 px-4 bg-gradient-to-r from-[#D97706] to-[#B45309] hover:brightness-110 active:scale-[0.98] transition-all rounded-xl font-explorer font-bold text-sm text-[#FEF3C7] shadow-md border border-[#FDE68A] flex items-center justify-center gap-2 cursor-pointer touch-manipulation"
            >
              <span>Next Level</span>
              <kbd className="hidden sm:inline-block ml-1 px-1.5 py-0.5 text-xs font-mono font-semibold bg-white/20 text-[#FEF3C7] rounded">↵ Enter</kbd>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </button>
          )}

          <div className="flex gap-2">
            <button
              onClick={() => {
                sound.playTap();
                onReplay();
              }}
              title="Replay Puzzle"
              className="flex-1 min-h-[44px] py-2.5 px-3 bg-gradient-to-b from-[#FAF3E3] to-[#F5EEDB] hover:brightness-95 active:scale-95 transition-all border-2 border-[#B45309]/50 rounded-xl font-explorer font-bold text-xs text-[#5B2609] shadow-xs flex items-center justify-center gap-1.5 cursor-pointer touch-manipulation"
            >
              <RotateCcw className="w-3.5 h-3.5 text-[#78350F]" />
              <span>Replay</span>
            </button>

            <button
              onClick={() => {
                sound.playTap();
                onGoLevelSelect();
              }}
              title="Return to Map / Home (Esc)"
              className="flex-1 min-h-[44px] py-2.5 px-3 bg-gradient-to-b from-[#FAF3E3] to-[#F5EEDB] hover:brightness-95 active:scale-95 transition-all border-2 border-[#B45309]/50 rounded-xl font-explorer font-bold text-xs text-[#5B2609] shadow-xs flex items-center justify-center gap-1.5 cursor-pointer touch-manipulation"
            >
              <Compass className="w-3.5 h-3.5 text-[#78350F]" />
              <span>{isDailyChallenge ? "Home" : "Map"}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
