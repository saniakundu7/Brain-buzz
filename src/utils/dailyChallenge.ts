import { PuzzleLevel } from "../types";

/**
 * Deterministic daily challenge generator based on date string (YYYY-MM-DD).
 * Ensures every player across the world gets the exact same daily puzzle on any given date.
 */

function simpleHash(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash |= 0;
  }
  return Math.abs(hash);
}

export function getTodayDateString(): string {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export function getDailyPuzzle(dateStr: string = getTodayDateString()): PuzzleLevel {
  const seed = simpleHash(dateStr);
  const puzzleTypeIndex = seed % 4;

  const dateObj = new Date(dateStr + "T00:00:00");
  const formattedDate = dateObj.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  if (puzzleTypeIndex === 0) {
    // Honeycomb Math Puzzle
    const a = (seed % 6) + 3;
    const b = ((seed >> 2) % 5) + 2;
    const correctSum = a * b;
    const fake1 = correctSum + (seed % 3 === 0 ? 3 : -2);
    const fake2 = correctSum + (seed % 2 === 0 ? -4 : 5);

    return {
      id: 999901,
      type: "choice",
      title: `Daily Challenge (${formattedDate})`,
      instruction: `Each hive frame produces ${a} drops, across ${b} combs. How many sweet honey drops in total?`,
      sceneConfig: {
        background: "#FFFDF9",
        promptNote: `Date: ${formattedDate} • Special Daily Riddle`,
        options: [
          { id: "opt_fake1", text: `${fake1} Drops` },
          { id: "opt_correct", text: `${correctSum} Drops`, isCorrect: true },
          { id: "opt_fake2", text: `${fake2} Drops` },
        ],
        items: [
          {
            id: "daily_honey",
            label: "Honeycomb",
            type: "svg-doodle",
            shape: "bee",
            x: 50,
            y: 35,
            size: 80,
            color: "#FFD43B",
          },
        ],
      },
      answer: "opt_correct",
      hint1: `Multiply ${a} by ${b}.`,
      hint2: `Calculation: ${a} × ${b} = ${correctSum}.`,
      explanation: `Great arithmetic! ${a} drops times ${b} combs equals exactly ${correctSum} honey drops.`,
      reward: 50,
    };
  } else if (puzzleTypeIndex === 1) {
    // Hidden Clover / Object
    const cloverX = 20 + ((seed * 7) % 60);
    const cloverY = 30 + ((seed * 11) % 40);

    return {
      id: 999902,
      type: "hidden-object",
      title: `Daily Challenge (${formattedDate})`,
      instruction: "Find and tap the hidden 4-Leaf Lucky Clover in the garden!",
      sceneConfig: {
        background: "#FFFDF9",
        promptNote: `Date: ${formattedDate} • Keen Eye Challenge`,
        items: [
          {
            id: "clover_target",
            label: "4-Leaf Clover",
            type: "svg-doodle",
            shape: "heart",
            x: cloverX,
            y: cloverY,
            size: 48,
            color: "#51CF66",
            isTarget: true,
          },
          {
            id: "decoy_1",
            label: "Normal Leaf",
            type: "svg-doodle",
            shape: "star",
            x: 18,
            y: 40,
            size: 40,
            color: "#94D82D",
          },
          {
            id: "decoy_2",
            label: "Flower",
            type: "svg-doodle",
            shape: "star",
            x: 75,
            y: 60,
            size: 44,
            color: "#FF922B",
          },
          {
            id: "decoy_3",
            label: "Flower 2",
            type: "svg-doodle",
            shape: "circle",
            x: 40,
            y: 70,
            size: 38,
            color: "#FCC419",
          },
        ],
      },
      answer: "clover_target",
      hint1: "Look around the green shapes scattered on the canvas.",
      hint2: `It is nestled around the ${cloverX > 50 ? "right" : "left"} side of the paper.`,
      explanation: "You spotted the lucky clover! Your sharp eyes bring great fortune today.",
      reward: 50,
    };
  } else if (puzzleTypeIndex === 2) {
    // Sequence Buzz
    const nums = [
      ((seed * 3) % 15) + 2,
      ((seed * 5) % 20) + 18,
      ((seed * 7) % 25) + 40,
    ].sort((a, b) => a - b);

    return {
      id: 999903,
      type: "sequence",
      title: `Daily Challenge (${formattedDate})`,
      instruction: "Tap the numbered pollen grains in ascending numerical order!",
      sceneConfig: {
        background: "#FFFDF9",
        promptNote: `Date: ${formattedDate} • Rapid Memory Challenge`,
        items: [
          {
            id: "pollen_b",
            label: `Pollen ${nums[1]}`,
            text: `${nums[1]}`,
            type: "button",
            x: 25,
            y: 45,
            size: 68,
            color: "#FFA94D",
          },
          {
            id: "pollen_c",
            label: `Pollen ${nums[2]}`,
            text: `${nums[2]}`,
            type: "button",
            x: 55,
            y: 30,
            size: 68,
            color: "#74C0FC",
          },
          {
            id: "pollen_a",
            label: `Pollen ${nums[0]}`,
            text: `${nums[0]}`,
            type: "button",
            x: 75,
            y: 60,
            size: 68,
            color: "#69DB7C",
          },
        ],
        sequenceTargets: ["pollen_a", "pollen_b", "pollen_c"],
      },
      answer: ["pollen_a", "pollen_b", "pollen_c"],
      hint1: `First tap the lowest value (${nums[0]}).`,
      hint2: `Sequence: ${nums[0]} -> ${nums[1]} -> ${nums[2]}.`,
      explanation: "Ascending order mastered! Clean logic wins the day.",
      reward: 50,
    };
  } else {
    // Drag Queen Bee to Hive
    return {
      id: 999904,
      type: "drag",
      title: `Daily Challenge (${formattedDate})`,
      instruction: "Guide the Queen Bee back home to her cozy hive!",
      sceneConfig: {
        background: "#FFFDF9",
        promptNote: `Date: ${formattedDate} • Royal Escort`,
        items: [
          {
            id: "daily_queen",
            label: "Queen Bee",
            type: "svg-doodle",
            shape: "bee",
            x: 20,
            y: 65,
            size: 78,
            color: "#FFD43B",
            draggable: true,
            targetDropZone: "daily_hive",
          },
        ],
        dropZones: [
          {
            id: "daily_hive",
            label: "The Royal Hive",
            x: 72,
            y: 30,
            width: 95,
            height: 95,
            acceptItemId: "daily_queen",
            bgColor: "#FFF3BF",
            borderColor: "#2D2A26",
          },
        ],
      },
      answer: "daily_hive",
      hint1: "Drag the Queen Bee across the screen.",
      hint2: "Place her into the golden hive box at the top right.",
      explanation: "The queen is safe in her warm hive! The whole colony buzzes in celebration.",
      reward: 50,
    };
  }
}
