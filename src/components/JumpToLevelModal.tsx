import React, { useState, useEffect } from "react";
import { X, Search } from "lucide-react";
import { sound } from "../utils/audio";
import { TOTAL_LEVELS } from "../data/levels";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onJump: (level: number) => void;
  unlockedLevel: number;
}

export const JumpToLevelModal: React.FC<Props> = ({ isOpen, onClose, onJump, unlockedLevel }) => {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");

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

  const handleJump = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    sound.playTap();
    const lvl = parseInt(inputValue, 10);
    if (isNaN(lvl) || lvl < 1 || lvl > TOTAL_LEVELS) {
      setError(`Please enter a valid level between 1 and ${TOTAL_LEVELS}.`);
      sound.playWrong();
      return;
    }
    if (lvl > unlockedLevel) {
      setError(`Level ${lvl} is locked. Highest unlocked is ${unlockedLevel}.`);
      sound.playWrong();
      return;
    }
    setError("");
    onJump(lvl);
    onClose();
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-sm animate-in fade-in"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-sm bg-[#FAF3E3] border-4 border-[#854D0E] rounded-3xl p-6 shadow-2xl relative"
      >
        <button
          onClick={() => {
            sound.playTap();
            onClose();
          }}
          aria-label="Close"
          title="Close (Esc)"
          className="absolute top-4 right-4 w-10 h-10 min-w-[40px] min-h-[40px] flex items-center justify-center bg-stone-200/50 hover:bg-stone-300 rounded-full text-stone-600 transition-colors cursor-pointer touch-manipulation"
        >
          <X className="w-5 h-5" />
        </button>

        <h2 className="text-xl font-explorer font-bold text-[#451A03] mb-2 flex items-center gap-2">
          <Search className="w-5 h-5" /> Jump to Level
        </h2>
        
        <p className="text-sm font-heading font-medium text-[#78350F] mb-4">
          Quickly travel to any stage you've previously unlocked.
        </p>

        <form onSubmit={handleJump} className="flex flex-col gap-3">
          <input
            type="number"
            min="1"
            max={TOTAL_LEVELS}
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value);
              setError("");
            }}
            placeholder={`Enter level (1 - ${unlockedLevel})`}
            className="w-full bg-white border-2 border-[#D97706] rounded-xl px-4 py-3 text-[#451A03] font-bold text-lg font-heading focus:outline-none focus:ring-4 focus:ring-amber-500/20 placeholder-stone-400 touch-manipulation"
            autoFocus
          />
          {error && (
            <p className="text-xs font-bold text-red-600 animate-in slide-in-from-top-1">
              {error}
            </p>
          )}
          <button
            type="submit"
            className="w-full min-h-[48px] py-3.5 px-6 rounded-2xl font-explorer font-bold text-lg shadow-sm transition-all border-2 bg-gradient-to-r from-[#B45309] to-[#78350F] border-[#FDE68A] text-[#FEF3C7] hover:brightness-110 active:scale-[0.98] cursor-pointer touch-manipulation"
          >
            GO TO LEVEL
          </button>
        </form>
      </div>
    </div>
  );
};
