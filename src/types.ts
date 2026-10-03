export type PuzzleType =
  | "tap"
  | "multi-tap"
  | "drag"
  | "swipe"
  | "hold"
  | "choice"
  | "hidden-object"
  | "sequence"
  | "math"
  | "word"
  | "visual";

export interface SceneItem {
  id: string;
  label?: string;
  type?: "rect" | "circle" | "text" | "button" | "custom" | "svg-doodle" | "shape" | "image-mock";
  x?: number; // percentage or relative px
  y?: number;
  width?: number;
  height?: number;
  color?: string;
  bgColor?: string;
  borderColor?: string;
  textColor?: string;
  text?: string;
  subtext?: string;
  rotation?: number;
  draggable?: boolean;
  targetDropZone?: string;
  isTarget?: boolean;
  tapCountRequired?: number;
  hidden?: boolean;
  size?: number;
  shape?:
    | "star"
    | "apple"
    | "bee"
    | "lightbulb"
    | "cup"
    | "heart"
    | "balloon"
    | "cloud"
    | "box"
    | "circle"
    | "sun"
    | "egg"
    | "fish"
    | "key"
    | "fire"
    | "flower"
    | "custom";
  customSvg?: string;
  extraProps?: Record<string, any>;
}

export interface DropZone {
  id: string;
  label: string;
  x: number;
  y: number;
  width?: number;
  height?: number;
  acceptItemId?: string;
  borderColor?: string;
  bgColor?: string;
}

export interface ChoiceOption {
  id: string;
  text: string;
  icon?: string;
  isCorrect?: boolean;
}

export interface SceneConfig {
  background?: string;
  promptNote?: string;
  items?: SceneItem[];
  dropZones?: DropZone[];
  options?: ChoiceOption[];
  sequenceTargets?: string[]; // IDs in correct order
  swipeDirection?: "up" | "down" | "left" | "right";
  holdDurationMs?: number;
  mathConfig?: {
    expression?: string;
    targetResult?: number | string;
    givenInputs?: number[];
  };
  wordConfig?: {
    scrambledLetters?: string[];
    targetWord?: string;
    slotsCount?: number;
  };
  customRenderType?: string;
  [key: string]: any;
}

export interface PuzzleLevel {
  id: number;
  type: PuzzleType;
  title: string;
  instruction: string;
  sceneConfig: SceneConfig;
  answer: string | string[] | number | number[];
  hint1: string;
  hint2: string;
  explanation: string;
  reward?: number; // default 10
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  targetCount: number;
  rewardCoins: number;
  icon: string;
}

export interface PlayerProgress {
  coins: number;
  unlockedLevel: number; // Highest level unlocked (1-200)
  completedLevels: number[]; // IDs of completed levels
  revealedLevels?: number[]; // IDs of levels where "Show Answer" was used (safety net, 0 coins)
  skippedLevels?: number[]; // Deprecated, kept for schema backward compatibility
  hintsUsedPerLevel: Record<number, number>; // levelId -> hints count used (0, 1, or 2)
  streak: number;
  lastDailyChallengeDate: string | null;
  dailyChallengeStreak: number;
  dailyHistory: Record<string, boolean>; // YYYY-MM-DD -> completed
  unlockedAchievements: string[];
  soundEnabled: boolean;
  hapticsEnabled: boolean;
}

export type ScreenState = "home" | "levels" | "game" | "daily" | "settings";
