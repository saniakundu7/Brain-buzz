import { PuzzleLevel } from "../types";

/**
 * Returns an intuitive, player-friendly description of the puzzle solution.
 */
export function getFormattedSolution(level: PuzzleLevel): string {
  const { type, sceneConfig, answer } = level;

  try {
    // If the puzzle has choice options, prioritize showing the matching option label
    if (sceneConfig.options && sceneConfig.options.length > 0) {
      const correctOpt = sceneConfig.options.find(
        (o) => o.isCorrect || o.id === answer || o.text === answer
      );
      if (correctOpt) {
        return `Select "${correctOpt.text}"`;
      }
    }

    // If answer is already a direct natural instruction sentence (e.g. "tap ...", "drag ...")
    if (typeof answer === "string") {
      const trimmed = answer.trim();
      const lower = trimmed.toLowerCase();
      if (
        lower.startsWith("tap ") ||
        lower.startsWith("drag ") ||
        lower.startsWith("connect ") ||
        lower.startsWith("stack ") ||
        lower.startsWith("select ") ||
        lower.startsWith("spell ")
      ) {
        return trimmed.charAt(0).toUpperCase() + trimmed.slice(1);
      }
    }

    switch (type) {
      case "choice": {
        return `Select option: ${String(answer)}`;
      }

      case "drag": {
        const dropZone = sceneConfig.dropZones?.[0];
        const draggedItem = sceneConfig.items?.find(
          (i) => i.draggable || i.id === dropZone?.acceptItemId
        );
        const itemName = draggedItem?.label || draggedItem?.text || "the item";
        const zoneName = dropZone?.label || "the target area";
        return `Drag ${itemName} into ${zoneName}`;
      }

      case "sequence": {
        if (Array.isArray(answer)) {
          const names = answer.map((id) => {
            const item = sceneConfig.items?.find((i) => i.id === id);
            return item?.label || item?.text || String(id);
          });
          return names.join(" → ");
        }
        return String(answer);
      }

      case "multi-tap": {
        if (typeof answer === "string" && answer.includes(",")) {
          return `Tap all required items: ${answer}`;
        }
        const targetItem = sceneConfig.items?.find(
          (i) => i.id === answer || i.tapCountRequired !== undefined
        );
        const itemName = targetItem?.label || targetItem?.text || "the target";
        const count = targetItem?.tapCountRequired || sceneConfig.targetTapCount || 5;
        if (targetItem?.tapCountRequired && targetItem.tapCountRequired > 1) {
          return `Tap ${itemName} repeatedly (${count} times)`;
        }
        return `Tap ${itemName || String(answer)}`;
      }

      case "hold": {
        return "Press and hold the button until the meter fills completely";
      }

      case "swipe": {
        const dir = sceneConfig.swipeDirection;
        return dir ? `Swipe ${dir} across the screen` : "Swipe across the screen";
      }

      case "hidden-object":
      case "visual":
      case "tap": {
        const targetItem = sceneConfig.items?.find(
          (i) => i.id === answer || i.isTarget
        );
        if (targetItem) {
          return `Tap "${targetItem.label || targetItem.text || targetItem.id}"`;
        }
        return `Tap the target: ${String(answer)}`;
      }

      case "math": {
        return `Calculation result: ${String(answer)}`;
      }

      case "word": {
        return `Word answer: "${String(answer)}"`;
      }

      default:
        return String(answer);
    }
  } catch (e) {
    return String(answer);
  }
}
