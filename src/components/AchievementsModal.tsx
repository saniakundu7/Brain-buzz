import React, { useEffect } from "react";
import { ACHIEVEMENTS } from "../utils/storage";
import { PlayerProgress } from "../types";
import { X, Award, CheckCircle2, Lock, Sparkles, Lightbulb, Zap, Crown, ShieldCheck } from "lucide-react";
import { sound } from "../utils/audio";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  progress: PlayerProgress;
}

export const AchievementsModal: React.FC<Props> = ({ isOpen, onClose, progress }) => {
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        sound.playTap();
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const completedCount = progress.completedLevels.length;
  const noHintCount = progress.completedLevels.filter((lvlId) => {
    return (progress.hintsUsedPerLevel[lvlId] || 0) === 0;
  }).length;

  const getIcon = (iconName: string, isUnlocked: boolean) => {
    const cls = `w-5 h-5 ${isUnlocked ? "text-amber-600" : "text-stone-400"}`;
    switch (iconName) {
      case "sparkles":
        return <Sparkles className={cls} />;
      case "lightbulb":
        return <Lightbulb className={cls} />;
      case "zap":
        return <Zap className={cls} />;
      case "award":
        return <Award className={cls} />;
      case "crown":
        return <Crown className={cls} />;
      case "shield-check":
        return <ShieldCheck className={cls} />;
      default:
        return <Award className={cls} />;
    }
  };

  const unlockedCount = progress.unlockedAchievements.length;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/40 backdrop-blur-xs animate-in fade-in duration-200"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-md max-h-[85vh] bg-[#FAF3E3] border-2 border-[#B45309] rounded-3xl p-5 shadow-2xl flex flex-col"
      >
        {/* Close button */}
        <button
          onClick={() => {
            sound.playTap();
            onClose();
          }}
          aria-label="Close"
          title="Close (Esc)"
          className="absolute top-4 right-4 w-10 h-10 min-w-[40px] min-h-[40px] flex items-center justify-center bg-gradient-to-b from-[#FAF3E3] to-[#F5EEDB] hover:brightness-95 active:scale-95 border-2 border-[#B45309]/50 rounded-xl text-[#5B2609] transition-colors cursor-pointer touch-manipulation"
        >
          <X className="w-4.5 h-4.5 stroke-[2.5]" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-4 pr-8">
          <div className="w-10 h-10 bg-amber-50 border border-amber-200/80 rounded-2xl flex items-center justify-center text-amber-600 shadow-xs">
            <Award className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-heading font-bold text-lg text-stone-900">
              Badges & Milestones
            </h3>
            <p className="text-xs text-stone-400">
              {unlockedCount} of {ACHIEVEMENTS.length} Badges Unlocked
            </p>
          </div>
        </div>

        {/* List of achievements */}
        <div className="flex-1 overflow-y-auto space-y-2.5 pr-1 py-1">
          {ACHIEVEMENTS.map((ach) => {
            const isUnlocked = progress.unlockedAchievements.includes(ach.id);
            let currentVal = completedCount;
            if (ach.id === "no_hint_hero") {
              currentVal = noHintCount;
            }
            const pct = Math.min(100, Math.round((currentVal / ach.targetCount) * 100));

            return (
              <div
                key={ach.id}
                className={`p-3.5 rounded-2xl border transition-all ${
                  isUnlocked
                    ? "bg-amber-50/50 border-amber-200/80 shadow-xs"
                    : "bg-stone-50/60 border-stone-200/70 opacity-80"
                }`}
              >
                <div className="flex items-start gap-3">
                  <div
                    className={`w-9 h-9 rounded-xl border flex items-center justify-center shrink-0 ${
                      isUnlocked
                        ? "bg-amber-100/70 border-amber-300/80 text-amber-700"
                        : "bg-white border-stone-200 text-stone-400"
                    }`}
                  >
                    {isUnlocked ? (
                      getIcon(ach.icon, true)
                    ) : (
                      <Lock className="w-4 h-4 text-stone-400 stroke-[2]" />
                    )}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h4 className="font-heading font-bold text-xs text-stone-900 truncate">
                        {ach.title}
                      </h4>
                      <span className="text-[11px] font-semibold text-amber-800 bg-amber-100/60 px-2 py-0.5 rounded-full border border-amber-200/60 shrink-0">
                        +{ach.rewardCoins} 🪙
                      </span>
                    </div>

                    <p className="text-xs text-stone-500 mt-0.5 leading-snug">
                      {ach.description}
                    </p>

                    {/* Progress indicator */}
                    {!isUnlocked && (
                      <div className="mt-2 flex items-center gap-2">
                        <div className="flex-1 h-1.5 bg-stone-200/80 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-amber-500 rounded-full transition-all duration-300"
                            style={{ width: `${pct}%` }}
                          />
                        </div>
                        <span className="text-[10px] font-medium text-stone-400">
                          {currentVal}/{ach.targetCount}
                        </span>
                      </div>
                    )}

                    {isUnlocked && (
                      <div className="mt-1 flex items-center gap-1 text-[11px] font-semibold text-emerald-700">
                        <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                        <span>Completed</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
