import { Achievement, PlayerProgress } from "../types";

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: "first_solve",
    title: "First Solve",
    description: "Solve your very first brain teaser!",
    targetCount: 1,
    rewardCoins: 20,
    icon: "sparkles",
  },
  {
    id: "brain_starter",
    title: "Brain Starter",
    description: "Complete 10 levels across your journey.",
    targetCount: 10,
    rewardCoins: 50,
    icon: "lightbulb",
  },
  {
    id: "sharp_mind",
    title: "Sharp Mind",
    description: "Complete 50 mind-twisting levels.",
    targetCount: 50,
    rewardCoins: 100,
    icon: "zap",
  },
  {
    id: "brain_master",
    title: "Brain Master",
    description: "Conquer 100 puzzling stages.",
    targetCount: 100,
    rewardCoins: 200,
    icon: "award",
  },
  {
    id: "puzzle_legend",
    title: "Puzzle Legend",
    description: "Solve all 200 levels of Brain Buzz!",
    targetCount: 200,
    rewardCoins: 500,
    icon: "crown",
  },
  {
    id: "no_hint_hero",
    title: "No Hint Hero",
    description: "Solve 10 levels with zero hints used.",
    targetCount: 10,
    rewardCoins: 150,
    icon: "shield-check",
  },
];

const STORAGE_KEY = "brain_buzz_player_progress_v1";

export const DEFAULT_PROGRESS: PlayerProgress = {
  coins: 50, // Starter coins so player can test hints or enjoy right away!
  unlockedLevel: 1,
  completedLevels: [],
  revealedLevels: [],
  skippedLevels: [],
  hintsUsedPerLevel: {},
  streak: 1,
  lastDailyChallengeDate: null,
  dailyChallengeStreak: 0,
  dailyHistory: {},
  unlockedAchievements: [],
  soundEnabled: true,
  hapticsEnabled: true,
};

// In-memory fallback if localStorage is disabled or throws
let inMemoryState: PlayerProgress = { ...DEFAULT_PROGRESS };

export function loadProgress(): PlayerProgress {
  try {
    if (typeof window !== "undefined" && window.localStorage) {
      const data = window.localStorage.getItem(STORAGE_KEY);
      if (data) {
        const parsed = JSON.parse(data);
        return {
          ...DEFAULT_PROGRESS,
          ...parsed,
          hintsUsedPerLevel: parsed.hintsUsedPerLevel || {},
          dailyHistory: parsed.dailyHistory || {},
          unlockedAchievements: parsed.unlockedAchievements || [],
          completedLevels: parsed.completedLevels || [],
          revealedLevels: parsed.revealedLevels || [],
          skippedLevels: parsed.skippedLevels || [],
        };
      }
    }
  } catch (e) {
    console.warn("Could not read localStorage, using memory state", e);
  }
  return inMemoryState;
}

export function saveProgress(progress: PlayerProgress): void {
  inMemoryState = { ...progress };
  try {
    if (typeof window !== "undefined" && window.localStorage) {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    }
  } catch (e) {
    console.warn("Could not write to localStorage", e);
  }
}

export function resetProgress(): PlayerProgress {
  const fresh = { ...DEFAULT_PROGRESS };
  inMemoryState = fresh;
  try {
    if (typeof window !== "undefined" && window.localStorage) {
      window.localStorage.removeItem(STORAGE_KEY);
    }
  } catch (e) {}
  return fresh;
}

export function checkAchievements(progress: PlayerProgress): {
  updatedProgress: PlayerProgress;
  newlyUnlocked: Achievement[];
} {
  const newlyUnlocked: Achievement[] = [];
  const currentUnlocked = new Set(progress.unlockedAchievements);
  let totalBonusCoins = 0;

  const completedCount = progress.completedLevels.length;
  // Calculate zero-hint solves
  const noHintCount = progress.completedLevels.filter((lvlId) => {
    const hintsCount = progress.hintsUsedPerLevel[lvlId] || 0;
    return hintsCount === 0;
  }).length;

  for (const ach of ACHIEVEMENTS) {
    if (currentUnlocked.has(ach.id)) continue;

    let reached = false;
    if (ach.id === "first_solve" && completedCount >= 1) reached = true;
    if (ach.id === "brain_starter" && completedCount >= 10) reached = true;
    if (ach.id === "sharp_mind" && completedCount >= 50) reached = true;
    if (ach.id === "brain_master" && completedCount >= 100) reached = true;
    if (ach.id === "puzzle_legend" && completedCount >= 200) reached = true;
    if (ach.id === "no_hint_hero" && noHintCount >= 10) reached = true;

    if (reached) {
      currentUnlocked.add(ach.id);
      newlyUnlocked.push(ach);
      totalBonusCoins += ach.rewardCoins;
    }
  }

  if (newlyUnlocked.length > 0) {
    const updated: PlayerProgress = {
      ...progress,
      coins: progress.coins + totalBonusCoins,
      unlockedAchievements: Array.from(currentUnlocked),
    };
    saveProgress(updated);
    return { updatedProgress: updated, newlyUnlocked };
  }

  return { updatedProgress: progress, newlyUnlocked: [] };
}
