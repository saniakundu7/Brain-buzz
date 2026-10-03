import React, { useEffect } from "react";
import { Play, Route, Flag, Settings, Flame, Trophy, Coins, Volume2, VolumeX, Sparkles, ChevronRight, Gift } from "lucide-react";
import { PlayerProgress, ScreenState } from "../types";
import { sound } from "../utils/audio";
import { TOTAL_LEVELS } from "../data/levels";

interface Props {
  progress: PlayerProgress;
  onNavigate: (screen: ScreenState) => void;
  onOpenAchievements: () => void;
  onToggleSound: () => void;
}

const getPlayerRank = (count: number): string => {
  if (count >= 200) return "Mind Legend";
  if (count >= 150) return "Grand Master";
  if (count >= 100) return "Mind Champion";
  if (count >= 60) return "Riddle Master";
  if (count >= 30) return "Puzzle Pioneer";
  if (count >= 10) return "Apprentice Sleuth";
  return "Rookie Detective";
};

export const HomeScreen: React.FC<Props> = ({
  progress,
  onNavigate,
  onOpenAchievements,
  onToggleSound,
}) => {
  const completedCount = progress.completedLevels.length;
  const progressPercent = Math.min(100, Math.round((completedCount / TOTAL_LEVELS) * 100));
  const currentRank = getPlayerRank(completedCount);

  // Global Keyboard Shortcuts on Home Screen for Laptop / Desktop / Tablet keyboards
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        return;
      }

      if (e.key === "Enter" || e.key === " " || e.key === "p" || e.key === "P") {
        e.preventDefault();
        sound.playTap();
        onNavigate("game");
      } else if (e.key === "m" || e.key === "M") {
        e.preventDefault();
        sound.playTap();
        onNavigate("levels");
      } else if (e.key === "d" || e.key === "D") {
        e.preventDefault();
        sound.playTap();
        onNavigate("daily");
      } else if (e.key === "s" || e.key === "S") {
        e.preventDefault();
        sound.playTap();
        onNavigate("settings");
      } else if (e.key === "a" || e.key === "A") {
        e.preventDefault();
        sound.playTap();
        onOpenAchievements();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onNavigate, onOpenAchievements]);

  return (
    <div className="relative z-10 w-full max-w-md mx-auto flex flex-col justify-between h-full max-h-[100dvh] p-3 sm:p-5 pb-[max(env(safe-area-inset-bottom),0.75rem)] select-none overflow-y-auto sm:overflow-visible">
      {/* Top Status Bar: Sound toggle & Expedition Chips */}
      <div className="flex items-center justify-between">
        {/* Carved Wood Sound Button */}
        <button
          onClick={() => {
            sound.playTap();
            onToggleSound();
          }}
          aria-label="Toggle Sound"
          title="Toggle Sound (M)"
          className="w-10 h-10 flex items-center justify-center bg-gradient-to-b from-[#854D0E] to-[#582407] hover:brightness-110 active:scale-95 transition-all border-2 border-[#D97706]/70 rounded-xl shadow-md shadow-amber-950/20 text-[#FEF3C7] cursor-pointer touch-manipulation"
        >
          {progress.soundEnabled ? (
            <Volume2 className="w-4.5 h-4.5 stroke-[2.2] text-[#FDE68A]" />
          ) : (
            <VolumeX className="w-4.5 h-4.5 stroke-[2.2] text-[#D4D4D8]" />
          )}
        </button>

        {/* Expedition Streak & Gold Coins status chips */}
        <div className="flex items-center gap-2">
          {/* Torch Flame Streak pill - Clear and unambiguous */}
          <div className="flex items-center gap-1.5 px-3 py-1.5 bg-[#FEF3C7]/95 border-2 border-[#D97706]/70 rounded-full shadow-xs">
            <span className="text-sm">🔥</span>
            <span className="font-heading font-extrabold text-xs text-[#78350F]">
              {progress.streak > 0 ? `${progress.streak} Day Streak` : "1 Day Streak"}
            </span>
          </div>

          {/* Treasure Coin Pouch pill */}
          <div className="flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-[#FEF3C7] to-[#FDE68A] border-2 border-[#D97706]/80 rounded-full shadow-xs">
            <div className="w-4 h-4 rounded-full bg-gradient-to-tr from-[#D97706] to-[#FBBF24] flex items-center justify-center shadow-xs border border-amber-300">
              <Coins className="w-2.5 h-2.5 text-[#451A03] stroke-[2.5]" />
            </div>
            <span className="font-heading font-extrabold text-xs text-[#78350F]">
              {progress.coins}
            </span>
          </div>
        </div>
      </div>

      {/* Hero Branding Section: Jungle Clearing / Ancient Map & Carved Wooden Signboard */}
      <div className="flex flex-col items-center text-center my-auto py-3">
        {/* Original Adventure Art Emblem: Antique Brass Explorer Compass & Jungle Palm Foliage */}
        <div
          className="relative mb-4 cursor-pointer group"
          onClick={() => sound.playTap()}
        >
          {/* Ambient Warm Golden Campfire Halo */}
          <div className="absolute inset-0 bg-[#F59E0B]/20 rounded-full blur-2xl group-hover:bg-[#F59E0B]/35 transition-all duration-500" />

          {/* Ancient Compass Emblem with Jungle Palm Leaves */}
          <div className="relative w-28 h-28 flex items-center justify-center">
            {/* Background Jungle Palm Fronds */}
            <svg
              className="absolute -top-3 -left-3 w-16 h-16 text-[#15803D] opacity-90 drop-shadow-sm pointer-events-none"
              viewBox="0 0 60 60"
              fill="currentColor"
            >
              <path d="M30 40 C 20 25, 5 25, 0 10 C 15 15, 25 28, 30 40 Z" />
              <path d="M30 40 C 25 20, 15 10, 5 0 C 20 5, 28 22, 30 40 Z" fill="#166534" />
            </svg>
            <svg
              className="absolute -bottom-2 -right-3 w-16 h-16 text-[#166534] opacity-85 drop-shadow-sm pointer-events-none"
              viewBox="0 0 60 60"
              fill="currentColor"
            >
              <path d="M30 20 C 40 35, 55 35, 60 50 C 45 45, 35 32, 30 20 Z" />
              <path d="M30 20 C 35 40, 45 50, 55 60 C 40 55, 32 38, 30 20 Z" fill="#14532D" />
            </svg>

            {/* Brass / Bronze Navigator's Compass Dial */}
            <div className="relative w-24 h-24 rounded-full bg-gradient-to-b from-[#B45309] via-[#78350F] to-[#451A03] p-1 shadow-xl shadow-amber-950/35 border-2 border-[#FDE68A] flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
              {/* Aged Parchment Compass Face */}
              <div className="w-full h-full rounded-full bg-[#FAF3E3] border border-[#B45309]/50 flex items-center justify-center relative overflow-hidden shadow-inner">
                {/* Nautical Star Compass Rose (Original Art) */}
                <svg
                  className="w-16 h-16 animate-spin-slow text-[#78350F]"
                  viewBox="0 0 100 100"
                  fill="none"
                >
                  <circle cx="50" cy="50" r="44" stroke="#D97706" strokeWidth="1" strokeDasharray="2 3" />
                  <circle cx="50" cy="50" r="40" stroke="#78350F" strokeWidth="1.2" />
                  {/* North Pointer with Ruby Gem accent */}
                  <polygon points="50,6 55,50 50,45 45,50" fill="#DC2626" />
                  <polygon points="50,6 45,50 50,45" fill="#991B1B" />
                  {/* South Pointer */}
                  <polygon points="50,94 55,50 50,55 45,50" fill="#D97706" />
                  <polygon points="50,94 45,50 50,55" fill="#92400E" />
                  {/* East Pointer */}
                  <polygon points="94,50 50,55 55,50 50,45" fill="#D97706" />
                  <polygon points="94,50 50,45 55,50" fill="#92400E" />
                  {/* West Pointer */}
                  <polygon points="6,50 50,55 45,50 50,45" fill="#D97706" />
                  <polygon points="6,50 50,45 45,50" fill="#92400E" />
                  {/* Center Brass Hub */}
                  <circle cx="50" cy="50" r="5" fill="#F59E0B" stroke="#78350F" strokeWidth="1.5" />
                  <circle cx="50" cy="50" r="2" fill="#451A03" />
                </svg>

                {/* Subtle glass lens reflection */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/30 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Top Torch Sparkle Emblem */}
              <div className="absolute -top-1.5 -right-1.5 bg-[#78350F] text-[#FDE68A] p-1.5 rounded-full border border-[#D97706] shadow-sm">
                <Sparkles className="w-3.5 h-3.5 fill-[#FDE68A]" />
              </div>
            </div>
          </div>
        </div>

        {/* Title: Styled like a carved wooden signboard with rope hangers and iron nails */}
        <div className="relative w-full max-w-xs mt-1">
          {/* Hanging Ropes */}
          <div className="flex justify-between px-10 mb-1 pointer-events-none">
            <div className="w-1.5 h-4 bg-gradient-to-b from-[#78350F] via-[#92400E] to-[#451A03] border-x border-[#FDE68A]/30 rounded-xs shadow-xs" />
            <div className="w-1.5 h-4 bg-gradient-to-b from-[#78350F] via-[#92400E] to-[#451A03] border-x border-[#FDE68A]/30 rounded-xs shadow-xs" />
          </div>

          {/* Carved Wood Signboard */}
          <div className="relative bg-gradient-to-b from-[#854D0E] via-[#5B2609] to-[#3B1503] border-3 border-[#D97706] rounded-2xl py-3 px-4 shadow-xl shadow-amber-950/30">
            {/* Bronze Corner Rivets / Nails */}
            <div className="absolute top-2 left-2.5 w-2 h-2 rounded-full bg-[#FBBF24] border border-[#78350F] shadow-xs" />
            <div className="absolute top-2 right-2.5 w-2 h-2 rounded-full bg-[#FBBF24] border border-[#78350F] shadow-xs" />
            <div className="absolute bottom-2 left-2.5 w-2 h-2 rounded-full bg-[#FBBF24] border border-[#78350F] shadow-xs" />
            <div className="absolute bottom-2 right-2.5 w-2 h-2 rounded-full bg-[#FBBF24] border border-[#78350F] shadow-xs" />

            <h1 className="font-explorer font-black text-2xl sm:text-3xl text-[#FEF3C7] tracking-wider drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] leading-tight">
              BRAIN BUZZ
            </h1>
          </div>

          {/* Subtitle: Hanging Weathered Parchment Banner */}
          <div className="relative -mt-2 mx-auto inline-block z-10">
            <div className="relative px-4 py-1 bg-[#FAF3E3] border-2 border-[#B45309] rounded-lg shadow-md text-center">
              <span className="font-explorer font-bold text-[11px] sm:text-xs text-[#78350F] tracking-wider uppercase block">
                Fun Mind Puzzles
              </span>
            </div>
          </div>
        </div>

        {/* Progress Plaque: Mind Master Quest */}
        <div className="w-full max-w-xs mt-6 p-3.5 bg-[#FAF3E3]/95 border-2 border-[#B45309]/40 rounded-2xl shadow-sm">
          <div className="flex justify-between items-center text-xs font-semibold mb-2">
            <span className="font-heading font-bold text-[#78350F] flex items-center gap-1.5">
              <Trophy className="w-3.5 h-3.5 text-[#D97706]" />
              <span>Rank: <strong className="text-[#92400E] font-black">{currentRank}</strong></span>
            </span>
            <span className="text-[#92400E] font-heading font-extrabold">
              Quest: {completedCount}/{TOTAL_LEVELS}
            </span>
          </div>
          <div className="w-full h-2.5 bg-[#E6D7BD] rounded-full overflow-hidden p-0.5 border border-[#B45309]/30">
            <div
              className="h-full bg-gradient-to-r from-[#D97706] to-[#F59E0B] rounded-full transition-all duration-700 ease-out shadow-xs"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>
      </div>

      {/* Navigation Buttons Stack */}
      <div className="space-y-3 w-full max-w-xs mx-auto pb-2">
        {/* Hero PLAY Button - Glowing Radiant Gold */}
        <button
          onClick={() => {
            sound.playTap();
            onNavigate("game");
          }}
          title="Play Now (Enter / Space)"
          className="w-full py-4 px-6 min-h-[56px] bg-gradient-to-r from-[#FFD700] via-[#FBBF24] to-[#F59E0B] hover:brightness-105 active:scale-[0.98] transition-all rounded-2xl border-2 border-yellow-200 font-explorer font-black text-lg text-[#5B2609] shadow-lg animate-golden-glow flex items-center justify-center gap-2.5 group cursor-pointer touch-manipulation"
        >
          <div className="w-8 h-8 rounded-full bg-[#78350F] flex items-center justify-center shadow-md shrink-0">
            <Play className="w-4 h-4 fill-[#FFD700] text-[#FFD700] ml-0.5" />
          </div>
          <span className="tracking-wider text-xl font-black drop-shadow-xs">PLAY NOW</span>
          <kbd className="hidden sm:inline-block ml-1 px-1.5 py-0.5 text-xs font-mono font-bold bg-[#78350F]/20 text-[#5B2609] rounded-md">↵ Enter</kbd>
          <ChevronRight className="w-5 h-5 text-[#78350F] group-hover:translate-x-1 transition-transform stroke-[3]" />
        </button>

        {/* LEVELS MAP Button - Trail Route Icon */}
        <button
          onClick={() => {
            sound.playTap();
            onNavigate("levels");
          }}
          title="Open Map (M)"
          className="w-full py-3.5 px-5 min-h-[52px] bg-[#FAF3E3] hover:bg-[#F5EADB] active:scale-[0.98] transition-all border-2 border-[#B45309]/50 rounded-2xl font-heading font-bold text-sm text-[#451A03] shadow-sm flex items-center justify-between cursor-pointer touch-manipulation"
        >
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-[#D97706] to-[#F59E0B] flex items-center justify-center text-white shadow-2xs shrink-0">
              <Route className="w-4.5 h-4.5 stroke-[2.5]" />
            </div>
            <div className="text-left">
              <div className="flex items-center gap-1.5">
                <span className="font-explorer tracking-wide font-bold block text-sm">Levels Map</span>
                <kbd className="hidden sm:inline-block px-1 py-0.2 text-[9px] font-mono text-stone-500 bg-stone-200/80 rounded">M</kbd>
              </div>
              <span className="text-[10px] text-[#78350F]/70 font-medium flex items-center gap-1">
                <Flag className="w-2.5 h-2.5 text-amber-600" />
                <span>200 Adventure Puzzles</span>
              </span>
            </div>
          </div>
          <span className="text-xs font-extrabold text-[#92400E] bg-[#FEF3C7] px-2.5 py-1 rounded-lg border border-[#D97706]/40">
            Level {progress.unlockedLevel}
          </span>
        </button>

        {/* DAILY PUZZLE Button - Free Coins Gift */}
        <button
          onClick={() => {
            sound.playTap();
            onNavigate("daily");
          }}
          title="Daily Challenge (D)"
          className="w-full py-3 px-4 min-h-[52px] bg-gradient-to-r from-[#FEF3C7] via-[#FFFBEB] to-[#FEF3C7] hover:brightness-95 active:scale-[0.98] transition-all border-2 border-[#D97706]/70 rounded-2xl font-heading font-bold text-sm text-[#451A03] shadow-sm flex items-center justify-between cursor-pointer touch-manipulation"
        >
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-[#EA580C] to-[#F59E0B] flex items-center justify-center text-white shadow-2xs shrink-0">
              <Gift className="w-4 h-4 animate-bounce" />
            </div>
            <div className="text-left">
              <div className="flex items-center gap-1.5">
                <span className="font-explorer tracking-wide font-bold block text-[#451A03]">Daily Puzzle</span>
                <kbd className="hidden sm:inline-block px-1 py-0.2 text-[9px] font-mono text-amber-700 bg-amber-200/60 rounded">D</kbd>
              </div>
              <span className="text-[10px] text-emerald-800 font-semibold block">Tap to Unlock Daily Gift</span>
            </div>
          </div>
          <span className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white text-[11px] font-heading font-extrabold px-3 py-1.5 rounded-full shadow-xs border border-emerald-400/50 flex items-center gap-1 shrink-0">
            🎁 Claim +50 Free Coins!
          </span>
        </button>

        {/* Secondary Row: Badges & Settings */}
        <div className="grid grid-cols-2 gap-2.5 pt-1">
          <button
            onClick={() => {
              sound.playTap();
              onOpenAchievements();
            }}
            title="Badges (A)"
            className="py-2.5 px-3 min-h-[46px] bg-[#FAF3E3] hover:bg-[#F5EADB] active:scale-[0.98] transition-all border-2 border-[#B45309]/40 rounded-xl font-heading font-bold text-xs text-[#5B2609] shadow-xs flex items-center justify-center gap-1.5 cursor-pointer touch-manipulation"
          >
            <Trophy className="w-3.5 h-3.5 text-[#D97706] shrink-0" />
            <span>Badges ({progress.unlockedAchievements.length})</span>
            <kbd className="hidden sm:inline-block px-1 py-0.2 text-[8px] font-mono text-stone-500 bg-stone-200/80 rounded">A</kbd>
          </button>

          <button
            onClick={() => {
              sound.playTap();
              onNavigate("settings");
            }}
            title="Settings (S)"
            className="py-2.5 px-3 min-h-[46px] bg-[#FAF3E3] hover:bg-[#F5EADB] active:scale-[0.98] transition-all border-2 border-[#B45309]/40 rounded-xl font-heading font-bold text-xs text-[#5B2609] shadow-xs flex items-center justify-center gap-1.5 cursor-pointer touch-manipulation"
          >
            <Settings className="w-3.5 h-3.5 text-[#78350F] shrink-0" />
            <span>Settings</span>
            <kbd className="hidden sm:inline-block px-1 py-0.2 text-[8px] font-mono text-stone-500 bg-stone-200/80 rounded">S</kbd>
          </button>
        </div>
      </div>
    </div>
  );
};

