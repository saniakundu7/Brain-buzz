import React, { useState, useEffect } from "react";
import { Calendar, Lightbulb, RotateCcw, CheckCircle2, Flame, Sparkles } from "lucide-react";
import { PlayerProgress, PuzzleLevel } from "../types";
import { sound } from "../utils/audio";
import { getDailyPuzzle, getTodayDateString } from "../utils/dailyChallenge";
import { Header } from "../components/Header";
import { InteractiveScene } from "../components/InteractiveScene";
import { HintModal } from "../components/HintModal";
import { SuccessModal } from "../components/SuccessModal";
import { ErrorBoundary } from "../components/ErrorBoundary";

interface Props {
  progress: PlayerProgress;
  onUpdateProgress: (newProgress: PlayerProgress) => void;
  onGoHome: () => void;
  onToggleSound: () => void;
}

export const DailyChallengeScreen: React.FC<Props> = ({
  progress,
  onUpdateProgress,
  onGoHome,
  onToggleSound,
}) => {
  const todayStr = getTodayDateString();
  const isAlreadyCompletedToday = Boolean(progress.dailyHistory[todayStr]);

  const [puzzle, setPuzzle] = useState<PuzzleLevel>(() => getDailyPuzzle(todayStr));
  const [isSolved, setIsSolved] = useState<boolean>(isAlreadyCompletedToday);
  const [isShaking, setIsShaking] = useState<boolean>(false);
  const [showHintModal, setShowHintModal] = useState<boolean>(false);
  const [showSuccessModal, setShowSuccessModal] = useState<boolean>(false);

  const [unlockedHint1, setUnlockedHint1] = useState<boolean>(false);
  const [unlockedHint2, setUnlockedHint2] = useState<boolean>(false);

  useEffect(() => {
    const loaded = getDailyPuzzle(todayStr);
    setPuzzle(loaded);
    setIsSolved(Boolean(progress.dailyHistory[todayStr]));
  }, [todayStr, progress.dailyHistory]);

  // Keyboard navigation for desktop/laptop/tablet
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;

      if (e.key === "Escape") {
        e.preventDefault();
        sound.playTap();
        if (showHintModal) {
          setShowHintModal(false);
        } else if (showSuccessModal) {
          setShowSuccessModal(false);
          onGoHome();
        } else {
          onGoHome();
        }
      } else if (e.key === "h" || e.key === "H") {
        if (!showSuccessModal) {
          e.preventDefault();
          sound.playTap();
          setShowHintModal((prev) => !prev);
        }
      } else if (e.key === "r" || e.key === "R") {
        if (!showHintModal && !showSuccessModal) {
          e.preventDefault();
          handleRestart();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [showHintModal, showSuccessModal, onGoHome]);

  const handleRestart = () => {
    sound.playTap();
    setIsSolved(false);
    setIsShaking(false);
    setShowSuccessModal(false);
    const loaded = getDailyPuzzle(todayStr);
    setPuzzle({ ...loaded });
  };

  const handleSuccess = () => {
    if (isSolved) return;
    setIsSolved(true);

    const alreadyClaimed = Boolean(progress.dailyHistory[todayStr]);
    const coinsReward = alreadyClaimed ? 0 : (puzzle.reward ?? 50);

    let newDailyStreak = progress.dailyChallengeStreak;
    if (!alreadyClaimed) {
      newDailyStreak += 1;
    }

    const updated: PlayerProgress = {
      ...progress,
      coins: progress.coins + coinsReward,
      lastDailyChallengeDate: todayStr,
      dailyChallengeStreak: newDailyStreak,
      dailyHistory: {
        ...progress.dailyHistory,
        [todayStr]: true,
      },
    };

    onUpdateProgress(updated);
    setTimeout(() => {
      setShowSuccessModal(true);
    }, 2000);
  };

  const handleWrong = () => {
    if (isSolved) return;
    sound.playWrong();
    setIsShaking(true);
    setTimeout(() => {
      setIsShaking(false);
    }, 450);
  };

  const handleUnlockHint1 = () => {
    if (progress.coins < 20 || unlockedHint1) return;
    setUnlockedHint1(true);
    onUpdateProgress({
      ...progress,
      coins: progress.coins - 20,
    });
  };

  const handleUnlockHint2 = () => {
    if (progress.coins < 30 || unlockedHint2) return;
    setUnlockedHint2(true);
    onUpdateProgress({
      ...progress,
      coins: progress.coins - 30,
    });
  };

  const dateObj = new Date(todayStr + "T00:00:00");
  const formattedDate = dateObj.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
  });

  return (
    <div className="relative z-10 w-full max-w-md mx-auto flex flex-col justify-between min-h-[92vh] select-none">
      {/* Top Bar */}
      <Header
        onGoHome={onGoHome}
        title="DAILY CHALLENGE"
        subtitle={formattedDate}
        coins={progress.coins}
        soundEnabled={progress.soundEnabled}
        onToggleSound={onToggleSound}
        showHintButton={true}
        onOpenHint={() => setShowHintModal(true)}
      />

      {/* Center Puzzle Card */}
      <div className="my-auto px-4 py-3">
        {/* Streak banner */}
        <div className="mb-3 flex items-center justify-between px-3.5 py-2.5 bg-[#FEF3C7] border-2 border-[#D97706]/70 rounded-2xl shadow-xs">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-[#EA580C] to-[#F59E0B] flex items-center justify-center text-white shadow-2xs">
              <Flame className="w-4 h-4 fill-white" />
            </div>
            <div>
              <span className="block text-[10px] font-explorer font-bold text-[#78350F] uppercase tracking-wider">
                Daily Streak
              </span>
              <span className="font-heading font-extrabold text-xs text-[#451A03]">
                {progress.dailyChallengeStreak} Days Running
              </span>
            </div>
          </div>

          <div className="text-right">
            <span className="text-[10px] font-explorer font-bold text-[#78350F] bg-[#FAF3E3] px-2.5 py-1 rounded-full border border-[#D97706]/60 shadow-2xs">
              Reward: +50 Coins
            </span>
          </div>
        </div>

        <div
          id="puzzle_card"
          className={`relative bg-[#FAF3E3] border-2 border-[#B45309]/50 rounded-[1.75rem] p-5 shadow-lg shadow-amber-950/10 transition-all ${
            isShaking ? "animate-shake border-rose-400 ring-2 ring-rose-300 bg-rose-50/40" : ""
          }`}
        >
          {/* Decorative Corner Bronze Nails */}
          <div className="absolute top-2.5 left-2.5 w-2 h-2 rounded-full bg-[#D97706] border border-[#78350F] shadow-2xs" />
          <div className="absolute top-2.5 right-2.5 w-2 h-2 rounded-full bg-[#D97706] border border-[#78350F] shadow-2xs" />
          <div className="absolute bottom-2.5 left-2.5 w-2 h-2 rounded-full bg-[#D97706] border border-[#78350F] shadow-2xs" />
          <div className="absolute bottom-2.5 right-2.5 w-2 h-2 rounded-full bg-[#D97706] border border-[#78350F] shadow-2xs" />

          {/* Card Title & Instruction */}
          <div className="text-center mb-4">
            <div className="inline-block px-3 py-1 bg-[#FEF3C7] border border-[#D97706]/60 rounded-full text-[11px] font-explorer font-bold text-[#78350F] tracking-wider uppercase mb-2 shadow-2xs">
              {puzzle.title}
            </div>
            <h2 className="font-heading font-extrabold text-lg sm:text-xl text-[#451A03] leading-snug">
              {puzzle.instruction}
            </h2>
          </div>

          {/* ErrorBoundary wraps the active scene */}
          <ErrorBoundary onResetLevel={handleRestart} onGoHome={onGoHome}>
            <InteractiveScene
              level={puzzle}
              onSuccess={handleSuccess}
              onWrong={handleWrong}
              isSolved={isSolved}
            />
          </ErrorBoundary>

          {/* Already solved note */}
          {isAlreadyCompletedToday && (
            <div className="mt-4 p-2.5 bg-emerald-100/70 border-2 border-emerald-400 rounded-xl flex items-center justify-center gap-2 text-emerald-900 text-xs font-bold font-explorer">
              <CheckCircle2 className="w-4 h-4 text-emerald-700" />
              <span>Today's expedition conquered! (+50 Gold Claimed)</span>
            </div>
          )}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="w-full p-4 pt-1 pb-[max(env(safe-area-inset-bottom),1rem)]">
        <div className="flex gap-2">
          {/* Hint Button */}
          <button
            onClick={() => {
              sound.playTap();
              setShowHintModal(true);
            }}
            title="Open Clue (H)"
            className="flex-1 min-h-[46px] py-2.5 px-3 bg-gradient-to-b from-[#FAF3E3] to-[#F5EEDB] hover:brightness-95 active:scale-95 transition-all border-2 border-[#B45309]/50 rounded-xl font-explorer font-bold text-xs text-[#5B2609] shadow-xs flex items-center justify-center gap-1.5 cursor-pointer touch-manipulation"
          >
            <Lightbulb className="w-3.5 h-3.5 fill-[#D97706]/20 text-[#D97706] shrink-0" />
            <span>Clue</span>
            <kbd className="hidden sm:inline-block ml-0.5 px-1 py-0.5 text-[9px] font-mono font-semibold bg-stone-200/80 text-stone-600 rounded">H</kbd>
          </button>

          {/* Restart Button */}
          <button
            onClick={handleRestart}
            title="Restart Puzzle (R)"
            className="flex-1 min-h-[46px] py-2.5 px-3 bg-gradient-to-b from-[#FAF3E3] to-[#F5EEDB] hover:brightness-95 active:scale-95 transition-all border-2 border-[#B45309]/50 rounded-xl font-explorer font-bold text-xs text-[#5B2609] shadow-xs flex items-center justify-center gap-1.5 cursor-pointer touch-manipulation"
          >
            <RotateCcw className="w-3.5 h-3.5 text-[#78350F] shrink-0" />
            <span>Restart</span>
            <kbd className="hidden sm:inline-block ml-0.5 px-1 py-0.5 text-[9px] font-mono font-semibold bg-stone-200/80 text-stone-600 rounded">R</kbd>
          </button>
        </div>
      </div>

      {/* Hint Modal */}
      <HintModal
        isOpen={showHintModal}
        onClose={() => setShowHintModal(false)}
        hint1={puzzle.hint1}
        hint2={puzzle.hint2}
        coins={progress.coins}
        unlockedHint1={unlockedHint1}
        unlockedHint2={unlockedHint2}
        onUnlockHint1={handleUnlockHint1}
        onUnlockHint2={handleUnlockHint2}
      />

      {/* Success Modal */}
      <SuccessModal
        isOpen={showSuccessModal}
        explanation={puzzle.explanation}
        rewardCoins={isAlreadyCompletedToday ? 0 : (puzzle.reward ?? 50)}
        onNextLevel={onGoHome}
        onReplay={handleRestart}
        onGoLevelSelect={onGoHome}
        isDailyChallenge={true}
      />
    </div>
  );
};
