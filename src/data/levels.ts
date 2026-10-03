import { PuzzleLevel } from "../types";
import { levelsPart1 } from "./levelsPart1";
import { levelsPart2 } from "./levelsPart2";
import { levelsPart3 } from "./levelsPart3";
import { levelsPart4 } from "./levelsPart4";
import { levelsPart5 } from "./levelsPart5";
import { levelsPart6 } from "./levelsPart6";

/**
 * BRAIN BUZZ - 150 HAND-CRAFTED UNIQUE LEVELS
 *
 * All 150 levels (ids 1–150) are fully populated with distinct puzzles, titles,
 * instructions, custom original scene configurations, hints, and explanations.
 */
export const LEVELS: PuzzleLevel[] = [
  ...levelsPart1,
  ...levelsPart2,
  ...levelsPart3,
  ...levelsPart4,
  ...levelsPart5,
  ...levelsPart6,
];

// Log loaded levels count to console for confirmation
console.log(`[Brain Buzz] Total unique levels loaded in array: ${LEVELS.length}`);

export const TOTAL_LEVELS = 200;

export function getLevelById(id: number): PuzzleLevel | null {
  const found = LEVELS.find((lvl) => lvl.id === id);
  if (found) return found;

  // Fallback placeholder for levels above 100 (up to 200)
  if (id >= 1 && id <= TOTAL_LEVELS) {
    return {
      id,
      type: "tap",
      title: `Puzzle #${id}`,
      instruction: `Tap the lucky star to clear stage ${id}!`,
      sceneConfig: {
        background: "#FFFDF9",
        promptNote: `Level ${id} preview. Ready for additional custom level batches!`,
        items: [
          {
            id: `star_${id}`,
            label: "Star",
            shape: "star",
            x: 50,
            y: 45,
            size: 80,
            color: "#FFD13B",
            isTarget: true,
          },
        ],
      },
      answer: `star_${id}`,
      hint1: "Simply tap the bright golden star in the center.",
      hint2: "The golden star is waiting for your touch!",
      explanation: `Level ${id} completed!`,
      reward: 10,
    };
  }

  return null;
}
