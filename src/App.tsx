import { useState, useEffect } from "react";
import { ScreenState, PlayerProgress, Achievement } from "./types";
import {
  loadProgress,
  saveProgress,
  resetProgress,
  checkAchievements,
} from "./utils/storage";
import { sound } from "./utils/audio";
import { getThemeForLevel } from "./utils/theme";
import { DoodleDecorations } from "./components/DoodleDecorations";
import { HomeScreen } from "./screens/HomeScreen";
import { LevelSelectScreen } from "./screens/LevelSelectScreen";
import { GameplayScreen } from "./screens/GameplayScreen";
import { DailyChallengeScreen } from "./screens/DailyChallengeScreen";
import { SettingsScreen } from "./screens/SettingsScreen";
import { AchievementsModal } from "./components/AchievementsModal";
import { Sparkles } from "lucide-react";

export default function App() {
  const [screen, setScreen] = useState<ScreenState>("home");
  const [progress, setProgress] = useState<PlayerProgress>(() => loadProgress());
  const [currentLevelId, setCurrentLevelId] = useState<number>(() => {
    const p = loadProgress();
    return p.unlockedLevel || 1;
  });
  const [isAchievementsOpen, setIsAchievementsOpen] = useState<boolean>(false);
  const [achievementToast, setAchievementToast] = useState<Achievement | null>(null);

  // Sync audio engine with sound state
  useEffect(() => {
    sound.setEnabled(progress.soundEnabled);
    sound.setHapticsEnabled(progress.hapticsEnabled);
  }, [progress.soundEnabled, progress.hapticsEnabled]);

  // Update progress helper that automatically evaluates achievements
  const handleUpdateProgress = (newProgress: PlayerProgress) => {
    const { updatedProgress, newlyUnlocked } = checkAchievements(newProgress);
    setProgress(updatedProgress);
    saveProgress(updatedProgress);

    if (newlyUnlocked.length > 0) {
      sound.playFanfare();
      setAchievementToast(newlyUnlocked[0]);
      setTimeout(() => {
        setAchievementToast(null);
      }, 3500);
    }
  };

  const handleToggleSound = () => {
    const updated: PlayerProgress = {
      ...progress,
      soundEnabled: !progress.soundEnabled,
    };
    setProgress(updated);
    saveProgress(updated);
    sound.setEnabled(updated.soundEnabled);
  };

  const handleToggleHaptics = () => {
    const updated: PlayerProgress = {
      ...progress,
      hapticsEnabled: !progress.hapticsEnabled,
    };
    setProgress(updated);
    saveProgress(updated);
    sound.setHapticsEnabled(updated.hapticsEnabled);
    if (updated.hapticsEnabled) {
      sound.vibrate(15);
    }
  };

  const handleResetProgress = () => {
    const fresh = resetProgress();
    setProgress(fresh);
    setCurrentLevelId(1);
  };

  const handleSelectLevel = (lvlId: number) => {
    setCurrentLevelId(lvlId);
    setScreen("game");
  };

  const currentTheme = getThemeForLevel(currentLevelId);

  return (
    <div className={`min-h-[100dvh] ${currentTheme.bg} flex flex-col items-center justify-center p-0 sm:p-4 text-amber-950 relative selection:bg-amber-200 selection:text-amber-950 transition-colors duration-700`}>
      {/* Subtle modern ambient decorations */}
      <DoodleDecorations theme={currentTheme} />

      {/* Responsive main application frame styled like an explorer's field map/tablet */}
      <main className={`w-full max-w-md md:max-w-lg h-[100dvh] max-h-[100dvh] sm:min-h-[720px] sm:max-h-[920px] sm:h-auto ${currentTheme.mainBg} ${currentTheme.mainBgSm} backdrop-blur-xl sm:border-2 ${currentTheme.borderSm} sm:rounded-[2rem] sm:shadow-[0_25px_60px_-15px_rgba(69,26,3,0.18)] relative z-10 flex flex-col justify-between overflow-y-auto overflow-x-hidden transition-colors duration-700`}>
        {/* Achievement Toast Banner */}
        {achievementToast && (
          <div className="absolute top-4 left-4 right-4 z-50 p-3.5 bg-[#451A03] text-[#FAF3E3] rounded-2xl shadow-xl shadow-amber-950/30 border border-amber-600/40 flex items-center gap-3 animate-in slide-in-from-top-4 duration-300">
            <div className="w-9 h-9 bg-amber-500/20 border border-amber-400/50 rounded-xl flex items-center justify-center text-amber-300 shrink-0">
              <Sparkles className="w-5 h-5 fill-amber-400/40" />
            </div>
            <div className="flex-1 min-w-0">
              <span className="block text-[10px] font-heading font-bold text-amber-400 uppercase tracking-widest">
                Badge Unlocked!
              </span>
              <h4 className="font-heading font-bold text-sm text-[#FAF3E3] truncate">
                {achievementToast.title}
              </h4>
            </div>
            <span className="text-xs font-bold text-amber-300 bg-amber-900/60 px-2.5 py-1 rounded-lg border border-amber-500/40">
              +{achievementToast.rewardCoins} 🪙
            </span>
          </div>
        )}

        {/* Screen Switcher */}
        {screen === "home" && (
          <HomeScreen
            progress={progress}
            onNavigate={(target) => {
              if (target === "game") {
                // Play from highest unlocked level
                setCurrentLevelId(progress.unlockedLevel);
              }
              setScreen(target);
            }}
            onOpenAchievements={() => setIsAchievementsOpen(true)}
            onToggleSound={handleToggleSound}
          />
        )}

        {screen === "levels" && (
          <LevelSelectScreen
            progress={progress}
            onSelectLevel={handleSelectLevel}
            onGoHome={() => setScreen("home")}
            onGoDaily={() => setScreen("daily")}
            onUpdateProgress={handleUpdateProgress}
          />
        )}

        {screen === "game" && (
          <GameplayScreen
            currentLevelId={currentLevelId}
            progress={progress}
            onUpdateProgress={handleUpdateProgress}
            onGoHome={() => setScreen("home")}
            onGoLevelSelect={() => setScreen("levels")}
            onSelectLevel={(id) => setCurrentLevelId(id)}
            onToggleSound={handleToggleSound}
          />
        )}

        {screen === "daily" && (
          <DailyChallengeScreen
            progress={progress}
            onUpdateProgress={handleUpdateProgress}
            onGoHome={() => setScreen("home")}
            onToggleSound={handleToggleSound}
          />
        )}

        {screen === "settings" && (
          <SettingsScreen
            progress={progress}
            onToggleSound={handleToggleSound}
            onToggleHaptics={handleToggleHaptics}
            onResetProgress={handleResetProgress}
            onGoHome={() => setScreen("home")}
          />
        )}
      </main>

      {/* Desktop / Laptop Keyboard Quick Navigation Helper */}
      <footer className="hidden sm:flex items-center gap-4 mt-3 text-xs text-stone-600/90 font-medium z-10 select-none">
        <span className="flex items-center gap-1">
          <kbd className="px-1.5 py-0.5 text-[10px] font-mono bg-stone-200/90 text-stone-700 rounded border border-stone-300">↵ Enter</kbd> Play / Next
        </span>
        <span className="flex items-center gap-1">
          <kbd className="px-1.5 py-0.5 text-[10px] font-mono bg-stone-200/90 text-stone-700 rounded border border-stone-300">H</kbd> Clue
        </span>
        <span className="flex items-center gap-1">
          <kbd className="px-1.5 py-0.5 text-[10px] font-mono bg-stone-200/90 text-stone-700 rounded border border-stone-300">R</kbd> Restart
        </span>
        <span className="flex items-center gap-1">
          <kbd className="px-1.5 py-0.5 text-[10px] font-mono bg-stone-200/90 text-stone-700 rounded border border-stone-300">M</kbd> Map
        </span>
        <span className="flex items-center gap-1">
          <kbd className="px-1.5 py-0.5 text-[10px] font-mono bg-stone-200/90 text-stone-700 rounded border border-stone-300">Esc</kbd> Back
        </span>
      </footer>

      {/* Global Achievements Modal */}
      <AchievementsModal
        isOpen={isAchievementsOpen}
        onClose={() => setIsAchievementsOpen(false)}
        progress={progress}
      />
    </div>
  );
}
