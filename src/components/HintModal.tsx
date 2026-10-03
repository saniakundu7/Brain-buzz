import React, { useState, useEffect } from "react";
import { Lightbulb, Coins, X, Check, AlertCircle, Eye } from "lucide-react";
import { sound } from "../utils/audio";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  hint1: string;
  hint2: string;
  coins: number;
  unlockedHint1: boolean;
  unlockedHint2: boolean;
  onUnlockHint1: () => void;
  onUnlockHint2: () => void;
  onShowAnswer?: () => void;
}

export const HintModal: React.FC<Props> = ({
  isOpen,
  onClose,
  hint1,
  hint2,
  coins,
  unlockedHint1,
  unlockedHint2,
  onUnlockHint1,
  onUnlockHint2,
  onShowAnswer,
}) => {
  const [confirmStep, setConfirmStep] = useState<"none" | "hint1" | "hint2">("none");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  // Close on Escape key
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

  const handleRequestHint1 = () => {
    if (unlockedHint1) return;
    if (coins < 20) {
      setErrorMsg("You need 20 coins for Hint 1. Play daily puzzles to earn more coins!");
      sound.playWrong();
      return;
    }
    setErrorMsg(null);
    setConfirmStep("hint1");
  };

  const handleRequestHint2 = () => {
    if (unlockedHint2) return;
    if (coins < 30) {
      setErrorMsg("You need 30 coins for Hint 2. Play daily puzzles to earn more coins!");
      sound.playWrong();
      return;
    }
    setErrorMsg(null);
    setConfirmStep("hint2");
  };

  const confirmPurchase = () => {
    if (confirmStep === "hint1") {
      onUnlockHint1();
      sound.playHint();
    } else if (confirmStep === "hint2") {
      onUnlockHint2();
      sound.playHint();
    }
    setConfirmStep("none");
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-150"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-sm max-h-[90vh] overflow-y-auto bg-[#FAF3E3] border-2 border-[#B45309] rounded-3xl p-5 shadow-2xl"
      >
        {/* Close button */}
        <button
          onClick={() => {
            sound.playTap();
            onClose();
          }}
          aria-label="Close"
          title="Close (Esc)"
          className="absolute top-4 right-4 w-10 h-10 min-w-[40px] min-h-[40px] flex items-center justify-center bg-gradient-to-b from-[#FAF3E3] to-[#F5EEDB] hover:brightness-95 active:scale-95 border-2 border-[#B45309]/50 rounded-xl text-[#5B2609] transition-all cursor-pointer touch-manipulation"
        >
          <X className="w-4.5 h-4.5 stroke-[2.5]" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-[#FEF3C7] border-2 border-[#D97706]/70 rounded-2xl flex items-center justify-center text-[#D97706] shadow-xs">
            <Lightbulb className="w-5 h-5 fill-[#FBBF24]/40 text-[#D97706]" />
          </div>
          <div>
            <h3 className="font-explorer font-bold text-base text-[#451A03]">
              Need a Hint?
            </h3>
            <p className="text-xs text-[#78350F]">
              Get a helpful tip to solve this puzzle!
            </p>
          </div>
        </div>

        {/* Error message */}
        {errorMsg && (
          <div className="mb-3 p-2.5 bg-rose-50 border-2 border-rose-300 rounded-xl flex items-center gap-2 text-rose-800 text-xs font-medium">
            <AlertCircle className="w-4 h-4 shrink-0 text-rose-600" />
            <span>{errorMsg}</span>
          </div>
        )}

        {/* Available coins badge */}
        <div className="flex items-center justify-between px-3.5 py-2 bg-[#FEF3C7] border-2 border-[#D97706]/60 rounded-xl mb-3 text-xs">
          <span className="text-[#78350F] font-bold">Your Coins:</span>
          <div className="flex items-center gap-1.5 font-heading font-extrabold text-[#451A03]">
            <Coins className="w-4 h-4 text-[#D97706] fill-[#FBBF24]" />
            <span>{coins} Coins</span>
          </div>
        </div>

        {/* Hint 1 Card */}
        <div className="space-y-2.5">
          <div className="p-3.5 bg-[#F5EEDB] border-2 border-[#B45309]/40 rounded-2xl">
            <div className="flex items-center justify-between mb-1.5">
              <span className="font-explorer font-bold text-xs text-[#451A03] flex items-center gap-1.5">
                <span>Hint 1: Tip</span>
                {unlockedHint1 && (
                  <span className="text-[10px] bg-emerald-100 border border-emerald-300 text-emerald-800 px-1.5 py-0.2 rounded font-bold flex items-center gap-0.5">
                    <Check className="w-2.5 h-2.5 stroke-[3]" /> Unlocked
                  </span>
                )}
              </span>
              {!unlockedHint1 && (
                <span className="text-xs font-bold text-[#D97706]">
                  20 🪙
                </span>
              )}
            </div>

            {unlockedHint1 ? (
              <p className="text-xs text-[#5B2609] leading-relaxed bg-[#FAF3E3] p-2.5 rounded-xl border border-[#B45309]/30 font-medium">
                {hint1}
              </p>
            ) : (
              <button
                onClick={handleRequestHint1}
                className="w-full mt-1 py-2 px-3 bg-gradient-to-r from-[#D97706] to-[#B45309] hover:brightness-110 active:scale-[0.98] transition-all rounded-xl font-explorer font-bold text-xs text-[#FEF3C7] shadow-sm border border-[#FDE68A] flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>Unlock Hint 1</span>
                <span className="text-[11px] opacity-90">(20 Coins)</span>
              </button>
            )}
          </div>

          {/* Hint 2 Card */}
          <div className="p-3.5 bg-[#F5EEDB] border-2 border-[#B45309]/40 rounded-2xl">
            <div className="flex items-center justify-between mb-1.5">
              <span className="font-explorer font-bold text-xs text-[#451A03] flex items-center gap-1.5">
                <span>Hint 2: Big Clue</span>
                {unlockedHint2 && (
                  <span className="text-[10px] bg-emerald-100 border border-emerald-300 text-emerald-800 px-1.5 py-0.2 rounded font-bold flex items-center gap-0.5">
                    <Check className="w-2.5 h-2.5 stroke-[3]" /> Unlocked
                  </span>
                )}
              </span>
              {!unlockedHint2 && (
                <span className="text-xs font-bold text-[#D97706]">
                  30 🪙
                </span>
              )}
            </div>

            {unlockedHint2 ? (
              <p className="text-xs text-[#5B2609] leading-relaxed bg-[#FAF3E3] p-2.5 rounded-xl border border-[#B45309]/30 font-medium">
                {hint2}
              </p>
            ) : (
              <button
                onClick={handleRequestHint2}
                className="w-full mt-1 py-2 px-3 bg-gradient-to-r from-[#D97706] to-[#B45309] hover:brightness-110 active:scale-[0.98] transition-all rounded-xl font-explorer font-bold text-xs text-[#FEF3C7] shadow-sm border border-[#FDE68A] flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>Unlock Hint 2</span>
                <span className="text-[11px] opacity-90">(30 Coins)</span>
              </button>
            )}
          </div>

          {/* Show Answer Option (Visible after both hints are unlocked) */}
          {unlockedHint1 && unlockedHint2 && onShowAnswer && (
            <div className="p-3 bg-[#FEF3C7] border-2 border-[#D97706]/70 rounded-2xl flex items-center justify-between gap-2">
              <div className="min-w-0">
                <div className="flex items-center gap-1.5 text-xs font-explorer font-bold text-[#451A03]">
                  <Eye className="w-3.5 h-3.5 text-[#D97706]" />
                  <span>Still stuck?</span>
                </div>
                <p className="text-[11px] text-[#78350F] font-medium">
                  See the full solution.
                </p>
              </div>
              <button
                onClick={() => {
                  sound.playTap();
                  onClose();
                  onShowAnswer();
                }}
                className="shrink-0 px-3 py-1.5 bg-gradient-to-r from-[#EA580C] to-[#C2410C] hover:brightness-110 active:scale-95 text-xs font-explorer font-bold text-white rounded-xl shadow-xs border border-[#FDBA74] cursor-pointer"
              >
                Show Answer
              </button>
            </div>
          )}
        </div>

        {/* Confirmation Modal Overlay inside dialog */}
        {confirmStep !== "none" && (
          <div className="absolute inset-0 bg-[#FAF3E3]/98 backdrop-blur-xs rounded-3xl p-5 flex flex-col justify-center items-center text-center animate-in fade-in duration-150 border-2 border-[#B45309]">
            <div className="w-12 h-12 bg-[#FEF3C7] border-2 border-[#D97706] rounded-2xl flex items-center justify-center text-[#D97706] mb-3 shadow-xs">
              <Coins className="w-6 h-6 fill-[#FBBF24]" />
            </div>
            <h4 className="font-explorer font-bold text-base text-[#451A03] mb-1">
              Unlock {confirmStep === "hint1" ? "Hint 1" : "Hint 2"}?
            </h4>
            <p className="text-xs text-[#78350F] mb-4 leading-relaxed max-w-xs font-medium">
              This will use{" "}
              <strong className="text-[#451A03] font-bold">
                {confirmStep === "hint1" ? "20" : "30"} coins
              </strong>
              .
            </p>

            <div className="flex gap-2 w-full">
              <button
                onClick={() => setConfirmStep("none")}
                className="flex-1 py-2.5 bg-gradient-to-b from-[#FAF3E3] to-[#F5EEDB] hover:brightness-95 border-2 border-[#B45309]/50 rounded-xl font-explorer font-bold text-xs text-[#5B2609] cursor-pointer"
              >
                Cancel
              </button>
              <button
                onClick={confirmPurchase}
                className="flex-1 py-2.5 bg-gradient-to-r from-[#D97706] to-[#B45309] hover:brightness-110 border border-[#FDE68A] rounded-xl font-explorer font-bold text-xs text-[#FEF3C7] shadow-sm cursor-pointer"
              >
                Unlock
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
