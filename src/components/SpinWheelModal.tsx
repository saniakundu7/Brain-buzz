import React, { useState, useEffect } from "react";
import { X, Gift } from "lucide-react";
import { sound } from "../utils/audio";
import { PlayerProgress } from "../types";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  progress: PlayerProgress;
  onReward: (coins: number) => void;
}

const PRIZES = [10, 50, 15, 100, 20, 25];

export const SpinWheelModal: React.FC<Props> = ({ isOpen, onClose, progress, onReward }) => {
  const [isSpinning, setIsSpinning] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [wonPrize, setWonPrize] = useState<number | null>(null);

  const today = new Date().toDateString();
  const lastSpin = typeof window !== 'undefined' ? localStorage.getItem('brain_buzz_last_spin') : null;
  const canSpin = lastSpin !== today;

  useEffect(() => {
    if (isOpen) {
      setWonPrize(null);
      setIsSpinning(false);
    }
  }, [isOpen]);

  // Escape key handler
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && !isSpinning) {
        e.preventDefault();
        sound.playTap();
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, isSpinning, onClose]);

  if (!isOpen) return null;

  const handleSpin = () => {
    if (!canSpin || isSpinning) return;
    sound.playTap();
    setIsSpinning(true);
    
    // Choose a random prize
    const prizeIndex = Math.floor(Math.random() * PRIZES.length);
    const sliceAngle = 360 / PRIZES.length;
    
    // The top is at 270 degrees in standard SVG math, but let's just assume 0 is top if we rotate the container
    // We want the chosen prize slice to end up at the top pointer.
    // The center of prize slice `i` is at `i * sliceAngle + sliceAngle / 2`.
    // We need to rotate it so it lands at 0 (or 360).
    const targetRotation = rotation + 360 * 5 + (360 - (prizeIndex * sliceAngle)) - (sliceAngle / 2);
    
    setRotation(targetRotation);
    
    // Play sound during spin
    let spins = 0;
    const interval = setInterval(() => {
      sound.playTap();
      spins++;
      if (spins > 10) clearInterval(interval);
    }, 200);

    setTimeout(() => {
      sound.playFanfare();
      setWonPrize(PRIZES[prizeIndex]);
      setIsSpinning(false);
      localStorage.setItem('brain_buzz_last_spin', today);
      onReward(PRIZES[prizeIndex]);
    }, 3000);
  };

  return (
    <div
      onClick={() => {
        if (!isSpinning) onClose();
      }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-sm animate-in fade-in"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-sm max-h-[90vh] overflow-y-auto bg-[#FAF3E3] border-4 border-[#854D0E] rounded-3xl p-6 shadow-2xl relative"
      >
        <button
          onClick={() => {
            if (!isSpinning) {
              sound.playTap();
              onClose();
            }
          }}
          disabled={isSpinning}
          aria-label="Close"
          title="Close (Esc)"
          className="absolute top-4 right-4 w-10 h-10 min-w-[40px] min-h-[40px] flex items-center justify-center bg-stone-200/50 hover:bg-stone-300 rounded-full text-stone-600 transition-colors cursor-pointer touch-manipulation disabled:opacity-50"
        >
          <X className="w-5 h-5" />
        </button>

        <h2 className="text-2xl font-explorer font-bold text-[#451A03] text-center mb-2">
          Daily Fortune Spin
        </h2>
        
        {canSpin ? (
          <p className="text-center text-sm font-heading font-medium text-[#78350F] mb-6">
            Spin the wheel for your daily expedition supplies!
          </p>
        ) : (
          <p className="text-center text-sm font-heading font-medium text-[#78350F] mb-6">
            You've already claimed your daily fortune. Come back tomorrow!
          </p>
        )}

        <div className="relative w-64 h-64 mx-auto mb-6">
          {/* Wheel Pointer */}
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10 w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-t-[20px] border-t-red-600 drop-shadow-md" />
          
          {/* Wheel */}
          <div 
            className="w-full h-full rounded-full border-4 border-[#854D0E] shadow-inner bg-[#FEF3C7]"
          >
            <svg
              className="w-full h-full transition-transform duration-[3000ms] ease-[cubic-bezier(0.2,0.8,0.2,1)]"
              viewBox="0 0 100 100"
              style={{ transform: `rotate(${rotation - 90}deg)` }}
            >
              {PRIZES.map((prize, index) => {
                const sliceAngle = 360 / PRIZES.length;
                const startAngle = index * sliceAngle;
                const endAngle = startAngle + sliceAngle;
                const startX = 50 + 50 * Math.cos((Math.PI * startAngle) / 180);
                const startY = 50 + 50 * Math.sin((Math.PI * startAngle) / 180);
                const endX = 50 + 50 * Math.cos((Math.PI * endAngle) / 180);
                const endY = 50 + 50 * Math.sin((Math.PI * endAngle) / 180);
                const largeArcFlag = sliceAngle > 180 ? 1 : 0;
                
                const d = `M 50 50 L ${startX} ${startY} A 50 50 0 ${largeArcFlag} 1 ${endX} ${endY} Z`;
                const color = index % 2 === 0 ? '#F59E0B' : '#FCD34D';

                const textAngle = startAngle + sliceAngle / 2;
                const textX = 50 + 35 * Math.cos((Math.PI * textAngle) / 180);
                const textY = 50 + 35 * Math.sin((Math.PI * textAngle) / 180);

                return (
                  <g key={index}>
                    <path d={d} fill={color} stroke="#854D0E" strokeWidth="1" />
                    <text
                      x={textX}
                      y={textY}
                      fill="#451A03"
                      fontSize="8"
                      fontWeight="bold"
                      textAnchor="middle"
                      alignmentBaseline="middle"
                      transform={`rotate(${textAngle + 90}, ${textX}, ${textY})`}
                    >
                      {prize}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>
        </div>

        {wonPrize !== null ? (
          <div className="text-center animate-in zoom-in">
            <div className="inline-flex items-center gap-2 bg-[#FDE68A] border-2 border-[#D97706] px-4 py-2 rounded-xl mb-4 text-[#451A03] font-bold text-xl shadow-md">
              <Gift className="w-6 h-6 text-[#D97706]" />
              You won {wonPrize} Coins!
            </div>
          </div>
        ) : (
          <button
            onClick={handleSpin}
            disabled={!canSpin || isSpinning}
            className={`w-full py-3.5 px-6 rounded-2xl font-explorer font-bold text-lg shadow-sm transition-all border-2 ${
              canSpin && !isSpinning
                ? "bg-gradient-to-r from-[#B45309] to-[#78350F] border-[#FDE68A] text-[#FEF3C7] hover:brightness-110 active:scale-[0.98]"
                : "bg-stone-300 border-stone-400 text-stone-500 cursor-not-allowed"
            }`}
          >
            {isSpinning ? "SPINNING..." : "SPIN NOW"}
          </button>
        )}
      </div>
    </div>
  );
};
