import React, { useState, useEffect } from "react";
import { Lightbulb, RotateCcw, ArrowRight, Eye } from "lucide-react";
import { PuzzleLevel, PlayerProgress } from "../types";
import { sound } from "../utils/audio";
import { getLevelById, TOTAL_LEVELS } from "../data/levels";
import { getFormattedSolution } from "../utils/answerHelper";
import { Header } from "../components/Header";
import { InteractiveScene } from "../components/InteractiveScene";
import { HintModal } from "../components/HintModal";
import { SuccessModal } from "../components/SuccessModal";
import { ErrorBoundary } from "../components/ErrorBoundary";
import { getThemeForLevel } from "../utils/theme";

interface Props {
  currentLevelId: number;
  progress: PlayerProgress;
  onUpdateProgress: (newProgress: PlayerProgress) => void;
  onGoHome: () => void;
  onGoLevelSelect: () => void;
  onSelectLevel: (lvlId: number) => void;
  onToggleSound: () => void;
}

export const GameplayScreen: React.FC<Props> = ({
  currentLevelId,
  progress,
  onUpdateProgress,
  onGoHome,
  onGoLevelSelect,
  onSelectLevel,
  onToggleSound,
}) => {
  const [level, setLevel] = useState<PuzzleLevel | null>(() => getLevelById(currentLevelId));
  const [isSolved, setIsSolved] = useState<boolean>(false);
  const [isAnswerRevealed, setIsAnswerRevealed] = useState<boolean>(false);
  const [isShaking, setIsShaking] = useState<boolean>(false);
  const [showHintModal, setShowHintModal] = useState<boolean>(false);
  const [showSuccessModal, setShowSuccessModal] = useState<boolean>(false);

  // Hints state for current level session
  const [unlockedHint1, setUnlockedHint1] = useState<boolean>(false);
  const [unlockedHint2, setUnlockedHint2] = useState<boolean>(false);

  const bothHintsUsed =
    (unlockedHint1 && unlockedHint2) ||
    (progress.hintsUsedPerLevel[currentLevelId] ?? 0) >= 2;

  // Load new level whenever levelId changes
  useEffect(() => {
    const loaded = getLevelById(currentLevelId);
    setLevel(loaded);
    setIsSolved(false);
    setIsAnswerRevealed(false);
    setIsShaking(false);
    setShowHintModal(false);
    setShowSuccessModal(false);

    // If player previously unlocked hints on this level
    const hintsCount = progress.hintsUsedPerLevel[currentLevelId] || 0;
    setUnlockedHint1(hintsCount >= 1);
    setUnlockedHint2(hintsCount >= 2);
  }, [currentLevelId]);

  // Global Keyboard Shortcuts for Desktop / Laptop / iPad with Keyboard
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't intercept if user is typing in an input
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        return;
      }

      // Enter or Space: Advance to next level if solved or answer revealed
      if (e.key === "Enter" || e.key === " ") {
        if (showSuccessModal || isSolved || isAnswerRevealed || progress.completedLevels.includes(level?.id ?? 0)) {
          e.preventDefault();
          sound.playTap();
          handleNextLevel();
          return;
        }
      }

      // 'R' or 'r': Restart level
      if (e.key === "r" || e.key === "R") {
        if (!showHintModal && !showSuccessModal) {
          e.preventDefault();
          handleRestart();
          return;
        }
      }

      // 'H' or 'h': Toggle Hint
      if (e.key === "h" || e.key === "H") {
        if (!showSuccessModal) {
          e.preventDefault();
          sound.playTap();
          setShowHintModal((prev) => !prev);
          return;
        }
      }

      // 'M' or 'm': Toggle Audio
      if (e.key === "m" || e.key === "M") {
        e.preventDefault();
        onToggleSound();
        return;
      }

      // Escape: Close modals or return to Level Select
      if (e.key === "Escape") {
        e.preventDefault();
        if (showHintModal) {
          setShowHintModal(false);
        } else if (showSuccessModal) {
          setShowSuccessModal(false);
          handleNextLevel();
        } else {
          onGoLevelSelect();
        }
        return;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [showSuccessModal, isSolved, isAnswerRevealed, showHintModal, level, progress]);

  // Restart / Reset current puzzle
  const handleRestart = () => {
    sound.playTap();
    setIsSolved(false);
    setIsAnswerRevealed(false);
    setIsShaking(false);
    setShowSuccessModal(false);
    const loaded = getLevelById(currentLevelId);
    setLevel(null);
    setTimeout(() => {
      setLevel(loaded);
    }, 10);
  };

  // Correct answer handler (player solved it)
  const handleSuccess = () => {
    if (isSolved || !level) return;
    setIsSolved(true);
    setIsAnswerRevealed(false);

    const isAlreadyCompleted = progress.completedLevels.includes(level.id);
    const reward = level.reward ?? 10;
    const hintsCountForThisLevel = (unlockedHint1 ? 1 : 0) + (unlockedHint2 ? 1 : 0);

    const nextUnlocked = Math.max(
      progress.unlockedLevel,
      Math.min(TOTAL_LEVELS, level.id + 1)
    );

    const updatedCompleted = isAlreadyCompleted
      ? progress.completedLevels
      : [...progress.completedLevels, level.id];

    // If previously marked as answer revealed, clear it so user earns their star!
    const updatedRevealed = (progress.revealedLevels || []).filter(
      (id) => id !== level.id
    );

    const updatedSkipped = (progress.skippedLevels || []).filter(
      (id) => id !== level.id
    );

    const updatedHintsMap = {
      ...progress.hintsUsedPerLevel,
      [level.id]: hintsCountForThisLevel,
    };

    const updatedProgress: PlayerProgress = {
      ...progress,
      coins: progress.coins + (isAlreadyCompleted ? Math.floor(reward / 2) : reward),
      unlockedLevel: nextUnlocked,
      completedLevels: updatedCompleted,
      revealedLevels: updatedRevealed,
      skippedLevels: updatedSkipped,
      hintsUsedPerLevel: updatedHintsMap,
    };

    onUpdateProgress(updatedProgress);
    setTimeout(() => {
      setShowSuccessModal(true);
    }, 2000);
  };

  // Wrong answer feedback
  const handleWrong = () => {
    if (isSolved) return;
    sound.playWrong();
    setIsShaking(true);
    setTimeout(() => {
      setIsShaking(false);
    }, 450);
  };

  // Stuck safety net: Show Answer handler
  // Immediately available once both hints are used (no extra failed attempts required)
  // Displays answer clearly on puzzle card, marks level completed, awards 0 coins, unlocks next
  const handleShowAnswer = () => {
    if (!level) return;
    sound.playTap();
    setIsAnswerRevealed(true);
    setIsSolved(true);

    const isAlreadyCompleted = progress.completedLevels.includes(level.id);
    const nextUnlocked = Math.max(
      progress.unlockedLevel,
      Math.min(TOTAL_LEVELS, level.id + 1)
    );

    const updatedCompleted = isAlreadyCompleted
      ? progress.completedLevels
      : [...progress.completedLevels, level.id];

    const currentRevealed = progress.revealedLevels || [];
    const updatedRevealed = currentRevealed.includes(level.id)
      ? currentRevealed
      : [...currentRevealed, level.id];

    const updatedSkipped = (progress.skippedLevels || []).filter(
      (id) => id !== level.id
    );

    const updatedProgress: PlayerProgress = {
      ...progress,
      // Zero coins awarded when answer is revealed instead of solved!
      unlockedLevel: nextUnlocked,
      completedLevels: updatedCompleted,
      revealedLevels: updatedRevealed,
      skippedLevels: updatedSkipped,
      hintsUsedPerLevel: {
        ...progress.hintsUsedPerLevel,
        [level.id]: 2,
      },
    };

    onUpdateProgress(updatedProgress);
    // Note: Do NOT auto-advance. The player reads answer and explanation first.
  };

  // Unlock Hint 1 (Costs 20 coins)
  const handleUnlockHint1 = () => {
    if (progress.coins < 20 || unlockedHint1) return;
    setUnlockedHint1(true);
    const updated: PlayerProgress = {
      ...progress,
      coins: progress.coins - 20,
      hintsUsedPerLevel: {
        ...progress.hintsUsedPerLevel,
        [currentLevelId]: Math.max(1, progress.hintsUsedPerLevel[currentLevelId] || 1),
      },
    };
    onUpdateProgress(updated);
  };

  // Unlock Hint 2 (Costs 30 coins)
  const handleUnlockHint2 = () => {
    if (progress.coins < 30 || unlockedHint2) return;
    setUnlockedHint2(true);
    const updated: PlayerProgress = {
      ...progress,
      coins: progress.coins - 30,
      hintsUsedPerLevel: {
        ...progress.hintsUsedPerLevel,
        [currentLevelId]: 2,
      },
    };
    onUpdateProgress(updated);
  };

  // Next level navigation
  const handleNextLevel = () => {
    setShowSuccessModal(false);
    setIsAnswerRevealed(false);
    if (currentLevelId < TOTAL_LEVELS) {
      onSelectLevel(currentLevelId + 1);
    } else {
      onGoLevelSelect();
    }
  };

  if (!level) {
    return (
      <div className="relative z-10 w-full max-w-md mx-auto p-8 text-center">
        <h2 className="text-lg font-heading font-bold text-stone-800">Level Not Found</h2>
        <button
          onClick={onGoHome}
          className="mt-4 px-5 py-2.5 bg-amber-500 text-white rounded-xl font-heading font-semibold text-sm shadow-sm cursor-pointer"
        >
          Return Home
        </button>
      </div>
    );
  }

  const formattedLevelNum = String(level.id).padStart(3, "0");
  const formattedSolution = getFormattedSolution(level);
  const theme = getThemeForLevel(currentLevelId);

  return (
    <div className="relative z-10 w-full max-w-md mx-auto flex flex-col justify-between h-full max-h-[100dvh] select-none overflow-y-auto sm:overflow-visible">
      {/* Top bar: Home | "LEVEL 001" | coins + hint */}
      <Header
        onGoHome={onGoHome}
        title={`LEVEL ${formattedLevelNum}`}
        subtitle={`LEVEL ${level.id} / ${TOTAL_LEVELS}`}
        coins={progress.coins}
        soundEnabled={progress.soundEnabled}
        onToggleSound={onToggleSound}
        showHintButton={true}
        onOpenHint={() => setShowHintModal(true)}
      />

      {/* Center Puzzle Card: Weathered Map Fragment / Realm Plate */}
      <div className="flex-1 min-h-0 my-auto flex flex-col justify-center px-2 sm:px-4 py-1 sm:py-2.5">
        <div
          id="puzzle_card"
          className={`relative ${theme.mainBg} border-2 ${theme.border50} rounded-2xl sm:rounded-[1.75rem] p-2.5 sm:p-4 shadow-lg shadow-black/10 transition-all overflow-hidden ${
            isShaking ? "animate-shake border-rose-400 ring-2 ring-rose-300 bg-rose-50/40" : ""
          }`}
          style={theme.cardPatternStyle}
        >
          {/* Hand-drawn texture pattern overlay */}
          {theme.patternDataUri && (
            <div
              className="absolute inset-0 pointer-events-none opacity-25 mix-blend-multiply rounded-2xl sm:rounded-[1.75rem]"
              style={{
                backgroundImage: `url("${theme.patternDataUri}")`,
                backgroundRepeat: "repeat",
                backgroundSize: theme.patternSize,
              }}
            />
          )}

          {/* Thematic Corner Rivets / Nails */}
          <div className={`absolute top-2 left-2 w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full ${theme.rivetClass} border shadow-2xs z-10`} />
          <div className={`absolute top-2 right-2 w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full ${theme.rivetClass} border shadow-2xs z-10`} />
          <div className={`absolute bottom-2 left-2 w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full ${theme.rivetClass} border shadow-2xs z-10`} />
          <div className={`absolute bottom-2 right-2 w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full ${theme.rivetClass} border shadow-2xs z-10`} />

          {/* Card Title, Realm Theme Tag & Instruction */}
          <div className="relative z-10 text-center mb-1.5 sm:mb-3">
            <div className="flex items-center justify-center gap-1.5 mb-0.5 text-[9px] sm:text-[11px] font-explorer font-bold tracking-wider uppercase opacity-85">
              <span className={theme.text}>{theme.name}</span>
              <span className="opacity-40">·</span>
              <span className={theme.text}>{theme.tagline}</span>
            </div>
            <div className={`font-explorer font-extrabold text-[10px] sm:text-xs tracking-wider uppercase mb-0.5 sm:mb-1 ${theme.text}`}>
              {level.title}
            </div>
            <h2 className="font-heading font-extrabold text-sm sm:text-lg md:text-xl text-stone-900 leading-snug">
              {level.instruction}
            </h2>
          </div>

          {/* ErrorBoundary wraps the active scene */}
          <ErrorBoundary onResetLevel={handleRestart} onGoHome={onGoHome}>
            <InteractiveScene
              level={level}
              onSuccess={handleSuccess}
              onWrong={handleWrong}
              isSolved={isSolved}
            />
          </ErrorBoundary>

          {/* Display full correct answer and explanation clearly on puzzle card when Show Answer is tapped */}
          {isAnswerRevealed && (
            <div
              id="revealed_answer_banner"
              className="mt-3 p-3 sm:p-4 bg-[#FEF3C7] border-2 border-[#B45309] rounded-xl sm:rounded-2xl shadow-sm text-left animate-in fade-in slide-in-from-bottom-2 duration-200"
            >
              <div className="flex items-start gap-2.5 mb-2">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-[#B45309] text-[#FEF3C7] flex items-center justify-center shrink-0 shadow-2xs mt-0.5 border border-[#FDE68A]">
                  <Eye className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.5]" />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-[9px] sm:text-[10px] font-explorer font-extrabold uppercase tracking-widest text-[#78350F] block leading-tight">
                    Solution
                  </span>
                  <h4 className="font-heading font-extrabold text-xs sm:text-base text-[#451A03] leading-snug break-words">
                    {formattedSolution}
                  </h4>
                </div>
              </div>

              {/* Explanation text */}
              <div className="mt-2 pt-2 border-t border-[#B45309]/30">
                <span className="text-[9px] sm:text-[10px] font-bold text-[#78350F] uppercase tracking-wider block mb-0.5">
                  How it works
                </span>
                <p className="text-xs text-[#5B2609] leading-relaxed font-medium">
                  {level.explanation}
                </p>
              </div>

              {/* Zero coins notification & manual Next Level trigger */}
              <div className="mt-2.5 pt-2 border-t border-[#B45309]/30 flex items-center justify-between gap-2">
                <span className="text-[10px] sm:text-[11px] font-bold text-[#78350F]">
                  Answer Shown • 0 Coins
                </span>
                <button
                  id="revealed_answer_next_button"
                  onClick={() => {
                    sound.playTap();
                    handleNextLevel();
                  }}
                  className="px-3 py-1.5 bg-gradient-to-r from-[#D97706] to-[#B45309] hover:brightness-110 active:scale-95 text-[#FEF3C7] text-xs font-explorer font-bold rounded-xl shadow-xs flex items-center gap-1.5 transition-all border border-[#FDE68A] cursor-pointer"
                >
                  <span>Next Level</span>
                  <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Progress Text under card */}
        <div className="mt-2 text-center text-[10px] sm:text-[11px] font-explorer font-bold text-[#92400E] tracking-widest uppercase">
          LEVEL {level.id} / {TOTAL_LEVELS}
        </div>
      </div>

      {/* Bottom Bar: Hint | Restart | Show Answer | Next Level */}
      <div className="w-full p-2.5 sm:p-4 pt-0.5 pb-[max(env(safe-area-inset-bottom),0.75rem)] shrink-0">
        <div className="flex gap-2">
          {/* Hint Button */}
          <button
            id="hint_button"
            onClick={() => {
              sound.playTap();
              setShowHintModal(true);
            }}
            title="Open Clue (H)"
            className="flex-1 min-h-[42px] sm:min-h-[46px] py-2 px-2 bg-gradient-to-b from-[#FAF3E3] to-[#F5EEDB] hover:brightness-95 active:scale-95 transition-all border-2 border-[#B45309]/50 rounded-xl font-explorer font-bold text-xs text-[#5B2609] shadow-xs flex items-center justify-center gap-1 cursor-pointer touch-manipulation"
          >
            <Lightbulb className="w-3.5 h-3.5 fill-[#D97706]/20 text-[#D97706] shrink-0" />
            <span>{bothHintsUsed ? "Clues (2/2)" : "Clue"}</span>
            <kbd className="hidden sm:inline-block ml-0.5 px-1 py-0.5 text-[9px] font-mono font-semibold bg-stone-200/80 text-stone-600 rounded">H</kbd>
          </button>

          {/* Restart Button */}
          <button
            id="restart_button"
            onClick={handleRestart}
            title="Restart Level (R)"
            className="flex-1 min-h-[42px] sm:min-h-[46px] py-2 px-2 bg-gradient-to-b from-[#FAF3E3] to-[#F5EEDB] hover:brightness-95 active:scale-95 transition-all border-2 border-[#B45309]/50 rounded-xl font-explorer font-bold text-xs text-[#5B2609] shadow-xs flex items-center justify-center gap-1 cursor-pointer touch-manipulation"
          >
            <RotateCcw className="w-3.5 h-3.5 text-[#78350F] shrink-0" />
            <span>Restart</span>
            <kbd className="hidden sm:inline-block ml-0.5 px-1 py-0.5 text-[9px] font-mono font-semibold bg-stone-200/80 text-stone-600 rounded">R</kbd>
          </button>

          {/* Show Answer button */}
          {bothHintsUsed && !isSolved && !isAnswerRevealed && (
            <button
              id="show_answer_button"
              onClick={handleShowAnswer}
              className="flex-1 min-h-[42px] sm:min-h-[46px] py-2 px-2 bg-gradient-to-r from-[#EA580C] to-[#C2410C] hover:brightness-110 active:scale-95 transition-all rounded-xl border border-[#FDBA74] font-explorer font-bold text-xs text-white shadow-sm shadow-orange-950/20 flex items-center justify-center gap-1 cursor-pointer touch-manipulation"
            >
              <Eye className="w-3.5 h-3.5 shrink-0" />
              <span>Reveal</span>
            </button>
          )}

          {/* Next Level Button */}
          {(isSolved || isAnswerRevealed || progress.completedLevels.includes(level.id)) && (
            <button
              id="next_level_button"
              onClick={() => {
                sound.playTap();
                handleNextLevel();
              }}
              title="Next Level (Space / Enter)"
              className="flex-1 min-h-[42px] sm:min-h-[46px] py-2 px-2 bg-gradient-to-r from-[#B45309] to-[#78350F] hover:brightness-110 active:scale-95 transition-all rounded-xl border-2 border-[#FDE68A] font-explorer font-bold text-xs text-[#FEF3C7] shadow-sm shadow-amber-950/25 flex items-center justify-center gap-1 cursor-pointer touch-manipulation"
            >
              <span>Next</span>
              <ArrowRight className="w-3.5 h-3.5 stroke-[2.5] shrink-0" />
              <kbd className="hidden sm:inline-block ml-0.5 px-1 py-0.5 text-[9px] font-mono font-semibold bg-white/20 text-[#FEF3C7] rounded">↵</kbd>
            </button>
          )}
        </div>
      </div>

      {/* Hint Modal */}
      <HintModal
        isOpen={showHintModal}
        onClose={() => setShowHintModal(false)}
        hint1={level.hint1}
        hint2={level.hint2}
        coins={progress.coins}
        unlockedHint1={unlockedHint1}
        unlockedHint2={unlockedHint2}
        onUnlockHint1={handleUnlockHint1}
        onUnlockHint2={handleUnlockHint2}
        onShowAnswer={handleShowAnswer}
      />

      {/* Success Modal */}
      <SuccessModal
        isOpen={showSuccessModal}
        explanation={level.explanation}
        rewardCoins={level.reward ?? 10}
        onNextLevel={handleNextLevel}
        onReplay={handleRestart}
        onGoLevelSelect={onGoLevelSelect}
        isLastLevel={level.id >= TOTAL_LEVELS}
      />
    </div>
  );
};
