import React, { useState, useEffect } from "react";
import { ArrowLeft, Volume2, VolumeX, RotateCcw, AlertTriangle, Trophy, Coins, Check, CheckCircle2, Keyboard } from "lucide-react";
import { PlayerProgress } from "../types";
import { sound } from "../utils/audio";
import { TOTAL_LEVELS } from "../data/levels";

interface Props {
  progress: PlayerProgress;
  onToggleSound: () => void;
  onToggleHaptics: () => void;
  onResetProgress: () => void;
  onGoHome: () => void;
}

export const SettingsScreen: React.FC<Props> = ({
  progress,
  onToggleSound,
  onToggleHaptics,
  onResetProgress,
  onGoHome,
}) => {
  const [showConfirmReset, setShowConfirmReset] = useState<boolean>(false);
  const [resetSuccessNotice, setResetSuccessNotice] = useState<boolean>(false);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        sound.playTap();
        onGoHome();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onGoHome]);

  const handleConfirmReset = () => {
    sound.playTap();
    onResetProgress();
    setShowConfirmReset(false);
    setResetSuccessNotice(true);
    setTimeout(() => {
      setResetSuccessNotice(false);
    }, 2500);
  };

  const completedCount = progress.completedLevels.length;

  return (
    <div className="relative z-10 w-full max-w-md mx-auto flex flex-col justify-between min-h-[90vh] p-4 pb-[max(env(safe-area-inset-bottom),1rem)] select-none">
      {/* Top bar */}
      <div className="flex items-center justify-between pb-3 border-b border-stone-100">
        <button
          onClick={() => {
            sound.playTap();
            onGoHome();
          }}
          aria-label="Back"
          title="Back (Esc)"
          className="w-10 h-10 min-w-[40px] min-h-[40px] flex items-center justify-center bg-stone-50 hover:bg-stone-100 active:scale-95 transition-all border border-stone-200/80 rounded-xl shadow-xs text-stone-700 cursor-pointer touch-manipulation"
        >
          <ArrowLeft className="w-4.5 h-4.5 stroke-[2.2]" />
        </button>

        <h2 className="font-heading font-bold text-lg text-stone-900 tracking-tight">
          Settings
        </h2>

        <div className="w-10" />
      </div>

      {/* Main Settings Cards */}
      <div className="my-auto space-y-3.5 py-4">
        {/* Reset Success notification banner */}
        {resetSuccessNotice && (
          <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-2xl flex items-center gap-2 text-emerald-800 text-xs font-semibold animate-in fade-in">
            <Check className="w-4 h-4 text-emerald-600" />
            Game progress has been reset successfully.
          </div>
        )}

        {/* Audio Toggle Card */}
        <div className="p-4 bg-white border border-stone-200/90 rounded-2xl shadow-xs flex items-center justify-between">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 bg-amber-50 border border-amber-200/60 rounded-xl flex items-center justify-center text-amber-700">
              {progress.soundEnabled ? (
                <Volume2 className="w-5 h-5 stroke-[2.2]" />
              ) : (
                <VolumeX className="w-5 h-5 stroke-[2.2] text-stone-400" />
              )}
            </div>
            <div>
              <h3 className="font-heading font-bold text-sm text-stone-900">
                Sound Effects (SFX)
              </h3>
              <p className="text-xs text-stone-400">
                Chimes, correct fanfare & tactile feedback
              </p>
            </div>
          </div>
          <button
            onClick={() => {
              sound.playTap();
              onToggleSound();
            }}
            className={`w-12 h-7 rounded-full p-0.5 transition-colors duration-200 flex items-center ${
              progress.soundEnabled ? "bg-amber-500 justify-end" : "bg-stone-200 justify-start"
            }`}
          >
            <div className="w-6 h-6 rounded-full bg-white shadow-sm" />
          </button>
        </div>

        {/* Haptics Toggle Card */}
        <div className="p-4 bg-white border border-stone-200/90 rounded-2xl shadow-xs flex items-center justify-between">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 bg-amber-50 border border-amber-200/60 rounded-xl flex items-center justify-center text-amber-700">
              <svg className={`w-5 h-5 stroke-[2.2] ${!progress.hapticsEnabled && "text-stone-400"}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 8h16" />
                <path d="M4 16h16" />
                <rect x="7" y="4" width="10" height="16" rx="2" />
              </svg>
            </div>
            <div>
              <h3 className="font-heading font-bold text-sm text-stone-900">
                Vibration (Haptics)
              </h3>
              <p className="text-xs text-stone-400">
                Device vibration feedback
              </p>
            </div>
          </div>
          <button
            onClick={() => {
              onToggleHaptics();
            }}
            className={`w-12 h-7 rounded-full p-0.5 transition-colors duration-200 flex items-center ${
              progress.hapticsEnabled ? "bg-amber-500 justify-end" : "bg-stone-200 justify-start"
            }`}
          >
            <div className="w-6 h-6 rounded-full bg-white shadow-sm" />
          </button>
        </div>

        {/* Player Stats Bento Card */}
        <div className="p-4 bg-white border border-stone-200/90 rounded-2xl shadow-xs">
          <h3 className="font-heading font-bold text-xs text-stone-400 uppercase tracking-wider mb-3">
            Brain Records & Stats
          </h3>
          <div className="grid grid-cols-3 gap-2 text-center">
            <div className="p-3 bg-stone-50 border border-stone-200/70 rounded-xl">
              <span className="block text-[11px] font-medium text-stone-400">
                Completed
              </span>
              <span className="font-heading font-bold text-base text-stone-900 mt-0.5 block">
                {completedCount}/{TOTAL_LEVELS}
              </span>
            </div>

            <div className="p-3 bg-stone-50 border border-stone-200/70 rounded-xl">
              <span className="block text-[11px] font-medium text-stone-400">
                Coins
              </span>
              <div className="flex items-center justify-center gap-1 mt-0.5">
                <Coins className="w-3.5 h-3.5 text-amber-600" />
                <span className="font-heading font-bold text-base text-stone-900">
                  {progress.coins}
                </span>
              </div>
            </div>

            <div className="p-3 bg-stone-50 border border-stone-200/70 rounded-xl">
              <span className="block text-[11px] font-medium text-stone-400">
                Badges
              </span>
              <div className="flex items-center justify-center gap-1 mt-0.5">
                <Trophy className="w-3.5 h-3.5 text-amber-600" />
                <span className="font-heading font-bold text-base text-stone-900">
                  {progress.unlockedAchievements.length}
                </span>
              </div>
            </div>
          </div>

          {(progress.revealedLevels || []).length > 0 && (
            <div className="mt-2.5 pt-2.5 border-t border-stone-100 flex items-center justify-between text-xs text-stone-600 px-1">
              <span className="text-stone-400">Answers revealed (replay anytime):</span>
              <span className="font-bold text-sky-800">
                {(progress.revealedLevels || []).length} levels
              </span>
            </div>
          )}
        </div>

        {/* Desktop Keyboard Controls Guide */}
        <div className="p-4 bg-stone-50/70 border border-stone-200/80 rounded-2xl">
          <div className="flex items-center gap-2 mb-2">
            <Keyboard className="w-4 h-4 text-amber-700" />
            <h3 className="font-heading font-bold text-sm text-stone-800">
              Keyboard Shortcuts (Laptop / PC)
            </h3>
          </div>
          <div className="grid grid-cols-2 gap-2 text-[11px] text-stone-600">
            <div className="flex items-center justify-between p-1.5 bg-white rounded-lg border border-stone-200/60">
              <span>Play / Next</span>
              <kbd className="px-1.5 py-0.5 font-mono font-semibold bg-stone-100 rounded text-stone-800 text-[10px]">Enter / Space</kbd>
            </div>
            <div className="flex items-center justify-between p-1.5 bg-white rounded-lg border border-stone-200/60">
              <span>Clue / Hint</span>
              <kbd className="px-1.5 py-0.5 font-mono font-semibold bg-stone-100 rounded text-stone-800 text-[10px]">H</kbd>
            </div>
            <div className="flex items-center justify-between p-1.5 bg-white rounded-lg border border-stone-200/60">
              <span>Restart Level</span>
              <kbd className="px-1.5 py-0.5 font-mono font-semibold bg-stone-100 rounded text-stone-800 text-[10px]">R</kbd>
            </div>
            <div className="flex items-center justify-between p-1.5 bg-white rounded-lg border border-stone-200/60">
              <span>Levels Map</span>
              <kbd className="px-1.5 py-0.5 font-mono font-semibold bg-stone-100 rounded text-stone-800 text-[10px]">M</kbd>
            </div>
            <div className="flex items-center justify-between p-1.5 bg-white rounded-lg border border-stone-200/60">
              <span>Select Options</span>
              <kbd className="px-1.5 py-0.5 font-mono font-semibold bg-stone-100 rounded text-stone-800 text-[10px]">1, 2, 3, 4</kbd>
            </div>
            <div className="flex items-center justify-between p-1.5 bg-white rounded-lg border border-stone-200/60">
              <span>Zoom In / Out</span>
              <kbd className="px-1.5 py-0.5 font-mono font-semibold bg-stone-100 rounded text-stone-800 text-[10px]">Ctrl +/-</kbd>
            </div>
            <div className="flex items-center justify-between p-1.5 bg-white rounded-lg border border-stone-200/60">
              <span>Reset Zoom</span>
              <kbd className="px-1.5 py-0.5 font-mono font-semibold bg-stone-100 rounded text-stone-800 text-[10px]">Ctrl 0</kbd>
            </div>
            <div className="flex items-center justify-between p-1.5 bg-white rounded-lg border border-stone-200/60">
              <span>Back / Home</span>
              <kbd className="px-1.5 py-0.5 font-mono font-semibold bg-stone-100 rounded text-stone-800 text-[10px]">Esc</kbd>
            </div>
          </div>
          <div className="mt-2.5 pt-2 border-t border-stone-200/60 flex items-center justify-between text-[11px] text-stone-500">
            <span>Mobile & Touch:</span>
            <span className="font-medium text-amber-900 bg-amber-50 px-1.5 py-0.5 rounded border border-amber-200/60">2-finger pinch & drag to zoom/pan</span>
          </div>
        </div>

        {/* Data Management Section */}
        <div className="p-4 bg-stone-50/70 border border-stone-200/80 rounded-2xl">
          <h3 className="font-heading font-bold text-sm text-stone-800 mb-1">
            Data Management
          </h3>
          <p className="text-xs text-stone-500 mb-3">
            Reset solved levels, unlocked badges, and coin balance.
          </p>

          <button
            onClick={() => {
              sound.playWrong();
              setShowConfirmReset(true);
            }}
            className="w-full py-2.5 px-4 min-h-[44px] bg-white hover:bg-rose-50 active:scale-[0.98] transition-all border border-rose-200 rounded-xl font-heading font-semibold text-xs text-rose-600 shadow-xs flex items-center justify-center gap-2 cursor-pointer touch-manipulation"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset All Progress</span>
          </button>
        </div>
      </div>

      {/* Return to Home button */}
      <button
        onClick={() => {
          sound.playTap();
          onGoHome();
        }}
        title="Back to Home (Esc)"
        className="w-full py-3.5 px-6 min-h-[50px] bg-stone-900 hover:bg-stone-800 active:scale-[0.98] transition-all rounded-2xl font-heading font-bold text-sm text-white shadow-xs cursor-pointer touch-manipulation flex items-center justify-center gap-2"
      >
        <span>Back to Home</span>
        <kbd className="hidden sm:inline-block ml-1 px-1.5 py-0.5 text-xs font-mono bg-stone-700 text-stone-200 rounded">Esc</kbd>
      </button>

      {/* Reset Confirmation Modal */}
      {showConfirmReset && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/40 backdrop-blur-xs animate-in fade-in">
          <div className="w-full max-w-xs bg-white border border-stone-200 rounded-3xl p-5 text-center shadow-xl">
            <div className="w-11 h-11 bg-rose-50 border border-rose-200 rounded-2xl mx-auto flex items-center justify-center text-rose-600 mb-3">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <h3 className="font-heading font-bold text-base text-stone-900 mb-1">
              Reset All Progress?
            </h3>
            <p className="text-xs text-stone-500 mb-4 leading-relaxed">
              This will reset your solved levels, coin balance, and badges. This cannot be undone.
            </p>

            <div className="flex gap-2">
              <button
                onClick={() => setShowConfirmReset(false)}
                className="flex-1 py-2 bg-stone-100 hover:bg-stone-200/80 rounded-xl font-heading font-semibold text-xs text-stone-700 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirmReset}
                className="flex-1 py-2 bg-rose-600 hover:bg-rose-700 rounded-xl font-heading font-bold text-xs text-white shadow-xs transition-colors"
              >
                Yes, Reset
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
