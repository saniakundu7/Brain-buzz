import React, { useState, useRef, useEffect, useId, useCallback } from "react";
import { PuzzleLevel, SceneItem, DropZone, ChoiceOption } from "../types";
import { sound } from "../utils/audio";
import { Check, Hand, Sparkles, ZoomIn, ZoomOut, RotateCcw } from "lucide-react";

interface Props {
  level: PuzzleLevel;
  onSuccess: () => void;
  onWrong: () => void;
  isSolved: boolean;
}

export const InteractiveScene: React.FC<Props> = ({
  level,
  onSuccess,
  onWrong,
  isSolved,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const rawId = useId();
  const sceneId = rawId.replace(/:/g, "_");

  // State for drag
  const [draggedItem, setDraggedItem] = useState<string | null>(null);
  const [dragOffset, setDragOffset] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [itemPositions, setItemPositions] = useState<Record<string, { x: number; y: number }>>({});
  const [selectedDraggableId, setSelectedDraggableId] = useState<string | null>(null);
  const dragDistanceRef = useRef<number>(0);
  const dragStartPosRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const isHoldingKeyRef = useRef<boolean>(false);

  // High-performance touch and tap detection refs (0ms mobile tap latency)
  const itemPointerDownRef = useRef<{
    id: string;
    x: number;
    y: number;
    time: number;
  } | null>(null);
  const lastProcessedTapTimeRef = useRef<number>(0);

  // Zoom & Pan state (Supports Ctrl +/- shortcuts, on-screen controls, and 2-finger mobile pinch)
  const [zoom, setZoom] = useState<number>(1.0);
  const [pan, setPan] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isPinching, setIsPinching] = useState<boolean>(false);
  const isPanningRef = useRef<boolean>(false);
  const panStartRef = useRef<{ x: number; y: number; startPanX: number; startPanY: number }>({
    x: 0,
    y: 0,
    startPanX: 0,
    startPanY: 0,
  });
  const pinchStateRef = useRef<{
    startDistance: number;
    startZoom: number;
    startPan: { x: number; y: number };
    startCenter: { x: number; y: number };
  } | null>(null);

  // State for sequence & multi-tap selection
  const [sequenceIndex, setSequenceIndex] = useState<number>(0);
  const [tappedSequenceIds, setTappedSequenceIds] = useState<string[]>([]);
  const [userSequence, setUserSequence] = useState<(number | string)[]>([]);
  const prevSequenceLengthRef = useRef<number>(0);

  // State for multi-tap
  const [tapCounts, setTapCounts] = useState<Record<string, number>>({});

  // State for hold
  const [holding, setHolding] = useState<boolean>(false);
  const [holdProgress, setHoldProgress] = useState<number>(0);
  const holdIntervalRef = useRef<any>(null);

  // State for math
  const [mathInput, setMathInput] = useState<string>("");

  // State for word
  const [selectedLetters, setSelectedLetters] = useState<string[]>([]);

  // Sequence / Multi-Tap Levels ke liye State Update Function
  const handleMultiSelect = (itemId: number | string) => {
    setUserSequence((prevSequence) => {
      // Agar item pehle se selected nahi hai, toh use array mein ADD karein (overwrite/reset na karein)
      if (!prevSequence.includes(itemId)) {
        return [...prevSequence, itemId];
      }
      // Agar user dubara same item par tap kare, tabhi wo deselect ho
      return prevSequence.filter((id) => id !== itemId);
    });
  };

  // Zoom Controls & shortcuts (Zoom in/out/reset)
  const handleZoomIn = useCallback(() => {
    sound.playTap();
    setZoom((prev) => Math.min(2.5, Number((prev + 0.25).toFixed(2))));
  }, []);

  const handleZoomOut = useCallback(() => {
    sound.playTap();
    setZoom((prev) => Math.max(0.75, Number((prev - 0.25).toFixed(2))));
  }, []);

  const handleZoomReset = useCallback(() => {
    sound.playTap();
    setZoom(1.0);
    setPan({ x: 0, y: 0 });
  }, []);

  // Reset local interactive state whenever level changes
  useEffect(() => {
    setDraggedItem(null);
    setSelectedDraggableId(null);
    setItemPositions({});
    setSequenceIndex(0);
    setTappedSequenceIds([]);
    setUserSequence([]);
    prevSequenceLengthRef.current = 0;
    setTapCounts({});
    setHolding(false);
    setHoldProgress(0);
    setMathInput("");
    setSelectedLetters([]);
    setZoom(1.0);
    setPan({ x: 0, y: 0 });
    setIsPinching(false);
    isPanningRef.current = false;
    pinchStateRef.current = null;
    if (holdIntervalRef.current) {
      clearInterval(holdIntervalRef.current);
    }
  }, [level.id]);

  // Clean up hold timer
  useEffect(() => {
    return () => {
      if (holdIntervalRef.current) {
        clearInterval(holdIntervalRef.current);
      }
    };
  }, []);

  // Keyboard shortcut listener for Zoom (Ctrl +, Ctrl -, Ctrl 0, and single + / -)
  useEffect(() => {
    const handleZoomKeyDown = (e: KeyboardEvent) => {
      const isInput = e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement;
      const isCtrlOrCmd = e.ctrlKey || e.metaKey;

      // Zoom In: Ctrl + / Ctrl = / + key (when not in text input)
      if (
        (isCtrlOrCmd && (e.key === "=" || e.key === "+" || e.code === "Equal" || e.code === "NumpadAdd")) ||
        (!isInput && !isCtrlOrCmd && (e.key === "+" || e.key === "="))
      ) {
        e.preventDefault();
        handleZoomIn();
        return;
      }

      // Zoom Out: Ctrl - / Ctrl _ / - key (when not in text input)
      if (
        (isCtrlOrCmd && (e.key === "-" || e.key === "_" || e.code === "Minus" || e.code === "NumpadSubtract")) ||
        (!isInput && !isCtrlOrCmd && (e.key === "-" || e.key === "_"))
      ) {
        e.preventDefault();
        handleZoomOut();
        return;
      }

      // Reset Zoom: Ctrl 0 / 0 key (when not in text input and not in math answer)
      if (
        (isCtrlOrCmd && (e.key === "0" || e.code === "Digit0" || e.code === "Numpad0")) ||
        (!isInput && !isCtrlOrCmd && level.type !== "math" && e.key === "0")
      ) {
        e.preventDefault();
        handleZoomReset();
        return;
      }
    };

    window.addEventListener("keydown", handleZoomKeyDown);
    return () => window.removeEventListener("keydown", handleZoomKeyDown);
  }, [level.type, handleZoomIn, handleZoomOut, handleZoomReset]);

  // Mouse wheel with Ctrl listener on container
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      if (e.ctrlKey || e.metaKey) {
        e.preventDefault();
        const delta = e.deltaY < 0 ? 0.15 : -0.15;
        setZoom((prev) => Math.min(2.5, Math.max(0.75, Number((prev + delta).toFixed(2)))));
      }
    };

    container.addEventListener("wheel", handleWheel, { passive: false });
    return () => {
      container.removeEventListener("wheel", handleWheel);
    };
  }, []);

  // Handle Choice Option Tap
  const handleChoice = (opt: ChoiceOption) => {
    if (isSolved) return;
    sound.playTap();
    const isCorrect = opt.isCorrect ?? (opt.id === level.answer || opt.text === level.answer);
    if (isCorrect) {
      onSuccess();
    } else {
      onWrong();
    }
  };

  // Keyboard shortcut support for choice options (1-9 or A-D)
  useEffect(() => {
    const options = level.sceneConfig.options || [];
    if (options.length === 0 || isSolved) return;

    const handleChoiceKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;

      const num = parseInt(e.key, 10);
      if (!isNaN(num) && num >= 1 && num <= options.length) {
        e.preventDefault();
        handleChoice(options[num - 1]);
        return;
      }

      const char = e.key.toLowerCase();
      const letters = ["a", "b", "c", "d", "e", "f"];
      const letterIdx = letters.indexOf(char);
      if (letterIdx >= 0 && letterIdx < options.length) {
        e.preventDefault();
        handleChoice(options[letterIdx]);
      }
    };

    window.addEventListener("keydown", handleChoiceKeyDown);
    return () => window.removeEventListener("keydown", handleChoiceKeyDown);
  }, [level.sceneConfig.options, isSolved]);

  // Handle Item Tap
  const handleItemTap = (item: SceneItem) => {
    if (isSolved) return;
    sound.playTap();

    if (
      level.type === "tap" ||
      level.type === "hidden-object" ||
      level.type === "visual" ||
      level.type === "math" ||
      level.type === "word"
    ) {
      const isTarget =
        item.isTarget ||
        item.id === level.answer ||
        item.text === level.answer ||
        (Array.isArray(level.answer) && (level.answer as unknown[]).includes(item.id));
      if (isTarget) {
        onSuccess();
      } else {
        onWrong();
      }
    } else if (level.type === "sequence") {
      handleMultiSelect(item.id);
    } else if (level.type === "multi-tap") {
      // If this item has a tapCountRequired (single item tapped multiple times)
      if (item.tapCountRequired && item.tapCountRequired > 1) {
        const required = item.tapCountRequired;
        const current = (tapCounts[item.id] || 0) + 1;
        setTapCounts((prev) => ({ ...prev, [item.id]: current }));

        if (current >= required) {
          onSuccess();
        }
      } else {
        // Multi-selection multi-tap (e.g. tap all prime numbers, or tap all even numbers)
        handleMultiSelect(item.id);
      }
    }
  };

  // Sequence and Multi-Tap validation effect based on userSequence
  useEffect(() => {
    const isAddition = userSequence.length > prevSequenceLengthRef.current;
    prevSequenceLengthRef.current = userSequence.length;

    if (isSolved || userSequence.length === 0) return;

    if (level.type === "sequence") {
      const rawExpected =
        level.sceneConfig.sequenceTargets ||
        (Array.isArray(level.answer) ? level.answer : []);
      const expectedTargets = rawExpected.map((t) => String(t));

      // Check if user's current selection sequence matches expected prefix
      const isPrefixMatch = userSequence.every(
        (val, idx) => String(val) === expectedTargets[idx]
      );

      if (!isPrefixMatch) {
        // If an item was just added and broke sequence order, trigger wrong feedback
        // The user can simply tap that item again to deselect it!
        if (isAddition) {
          onWrong();
        }
      } else if (userSequence.length === expectedTargets.length && expectedTargets.length > 0) {
        onSuccess();
      }
    } else if (level.type === "multi-tap") {
      const rawTargets: (string | number)[] =
        level.sceneConfig.multiTapTargets ||
        (Array.isArray(level.answer)
          ? level.answer
          : typeof level.answer === "string" && level.answer.includes(",")
          ? level.answer.split(",").map((s: string) => s.trim())
          : [String(level.answer)]);

      const targets = rawTargets.map((t) => String(t));

      const allTargetItems = (level.sceneConfig.items || []).filter(
        (i) =>
          i.isTarget ||
          targets.includes(String(i.id)) ||
          (i.text ? targets.includes(String(i.text)) : false)
      );

      const targetIds =
        allTargetItems.length > 0
          ? allTargetItems.map((i) => String(i.id))
          : targets;

      if (isAddition) {
        const lastAdded = String(userSequence[userSequence.length - 1]);
        const isTarget =
          targetIds.includes(lastAdded) ||
          targets.includes(lastAdded) ||
          (level.sceneConfig.items?.find((i) => String(i.id) === lastAdded)?.isTarget ?? false);

        if (!isTarget) {
          onWrong();
        }
      }

      // Check if all targets are selected and no extra non-targets are selected
      const allTargetsSelected = targetIds.every((tid) =>
        userSequence.some((id) => String(id) === tid)
      );
      const noExtraSelected = userSequence.every((id) =>
        targetIds.includes(String(id))
      );

      if (allTargetsSelected && noExtraSelected && targetIds.length > 0) {
        onSuccess();
      }
    }
  }, [userSequence, level, isSolved, onSuccess, onWrong]);

  // Handle Dropping on a DropZone (works with both drag release & tap-to-place)
  const handleDropOnZone = (targetZone: DropZone, itemId: string) => {
    if (isSolved) return;
    const draggedItemObj = level.sceneConfig.items?.find((i) => i.id === itemId);
    const isCorrect =
      targetZone.acceptItemId === itemId ||
      draggedItemObj?.targetDropZone === targetZone.id ||
      targetZone.id === level.answer ||
      level.answer === "drop_success";

    if (isCorrect) {
      sound.playCorrect();
      onSuccess();
    } else {
      sound.playWrong();
      onWrong();
      setItemPositions((prev) => {
        const next = { ...prev };
        delete next[itemId];
        return next;
      });
    }
    setSelectedDraggableId(null);
  };

  // Dragging active item via global window listeners (100% reliable across mobile and desktop)
  useEffect(() => {
    if (!draggedItem) return;

    const onGlobalPointerMove = (e: PointerEvent) => {
      if (!containerRef.current) return;
      dragDistanceRef.current = Math.hypot(
        e.clientX - dragStartPosRef.current.x,
        e.clientY - dragStartPosRef.current.y
      );

      const containerRect = containerRef.current.getBoundingClientRect();
      const W = containerRect.width;
      const H = containerRect.height;
      // Calculate position inside inner zoomed/panned coordinate space
      const x = W / 2 + (e.clientX - containerRect.left - pan.x - W / 2) / zoom - dragOffset.x;
      const y = H / 2 + (e.clientY - containerRect.top - pan.y - H / 2) / zoom - dragOffset.y;

      setItemPositions((prev) => ({
        ...prev,
        [draggedItem]: { x, y },
      }));
    };

    const onGlobalPointerUp = (e: PointerEvent) => {
      const currentItemId = draggedItem;
      const wasShortTap = dragDistanceRef.current < 10;
      setDraggedItem(null);

      // Quick tap without significant movement toggles tap-to-select for mobile accessibility
      if (wasShortTap) {
        sound.playTap();
        setSelectedDraggableId((prev) => (prev === currentItemId ? null : currentItemId));
        return;
      }

      const dropZones = level.sceneConfig.dropZones || [];
      if (dropZones.length === 0) return;

      let matchedDropZone: DropZone | null = null;
      dropZones.forEach((dz) => {
        const el = document.getElementById(`dropzone_${dz.id}`);
        if (el) {
          const rect = el.getBoundingClientRect();
          const centerX = (rect.left + rect.right) / 2;
          const centerY = (rect.top + rect.bottom) / 2;
          const dist = Math.hypot(e.clientX - centerX, e.clientY - centerY);
          const radius = Math.max(rect.width, rect.height) * 0.85;
          if (dist <= radius) {
            matchedDropZone = dz;
          }
        }
      });

      if (matchedDropZone) {
        handleDropOnZone(matchedDropZone, currentItemId);
      }
    };

    window.addEventListener("pointermove", onGlobalPointerMove);
    window.addEventListener("pointerup", onGlobalPointerUp);
    window.addEventListener("pointercancel", onGlobalPointerUp);

    return () => {
      window.removeEventListener("pointermove", onGlobalPointerMove);
      window.removeEventListener("pointerup", onGlobalPointerUp);
      window.removeEventListener("pointercancel", onGlobalPointerUp);
    };
  }, [draggedItem, zoom, pan, dragOffset, level, isSolved]);

  // Global panning movement listener when zoomed in
  useEffect(() => {
    const handleGlobalPanMove = (e: PointerEvent) => {
      if (!isPanningRef.current || draggedItem) return;
      const dx = e.clientX - panStartRef.current.x;
      const dy = e.clientY - panStartRef.current.y;
      const maxPanX = containerRef.current
        ? Math.max(80, (containerRef.current.clientWidth * (zoom - 0.7)) / 2)
        : 150;
      const maxPanY = containerRef.current
        ? Math.max(80, (containerRef.current.clientHeight * (zoom - 0.7)) / 2)
        : 150;
      setPan({
        x: Math.max(-maxPanX, Math.min(maxPanX, Math.round(panStartRef.current.startPanX + dx))),
        y: Math.max(-maxPanY, Math.min(maxPanY, Math.round(panStartRef.current.startPanY + dy))),
      });
    };

    const handleGlobalPanUp = () => {
      isPanningRef.current = false;
    };

    window.addEventListener("pointermove", handleGlobalPanMove);
    window.addEventListener("pointerup", handleGlobalPanUp);
    return () => {
      window.removeEventListener("pointermove", handleGlobalPanMove);
      window.removeEventListener("pointerup", handleGlobalPanUp);
    };
  }, [zoom, draggedItem]);

  // Handle Drag & Drop start
  const handlePointerDown = (e: React.PointerEvent, itemId: string) => {
    if (isSolved) return;
    e.stopPropagation();
    sound.playTap();
    setDraggedItem(itemId);

    dragStartPosRef.current = { x: e.clientX, y: e.clientY };
    dragDistanceRef.current = 0;

    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    // Offset inside dragged item normalized by zoom
    setDragOffset({
      x: (e.clientX - rect.left) / zoom,
      y: (e.clientY - rect.top) / zoom,
    });
  };

  // Instant response touch handlers for scene items
  const handleItemPointerDown = (e: React.PointerEvent, item: SceneItem) => {
    if (isSolved) return;
    e.stopPropagation();
    if (item.draggable) {
      handlePointerDown(e, item.id);
    } else {
      itemPointerDownRef.current = {
        id: item.id,
        x: e.clientX,
        y: e.clientY,
        time: Date.now(),
      };
    }
  };

  const handleItemPointerUp = (e: React.PointerEvent, item: SceneItem) => {
    if (isSolved) return;
    e.stopPropagation();
    if (!item.draggable && itemPointerDownRef.current?.id === item.id) {
      const dist = Math.hypot(
        e.clientX - itemPointerDownRef.current.x,
        e.clientY - itemPointerDownRef.current.y
      );
      const elapsed = Date.now() - itemPointerDownRef.current.time;
      itemPointerDownRef.current = null;
      if (dist < 20 && elapsed < 800) {
        lastProcessedTapTimeRef.current = Date.now();
        handleItemTap(item);
      }
    }
  };

  const handleItemClick = (e: React.MouseEvent, item: SceneItem) => {
    e.stopPropagation();
    if (item.draggable) return;
    // Debounce if pointerup already handled the tap
    if (Date.now() - lastProcessedTapTimeRef.current < 350) return;
    lastProcessedTapTimeRef.current = Date.now();
    handleItemTap(item);
  };

  // Hold interaction
  const handleHoldStart = () => {
    if (isSolved || level.type !== "hold") return;
    setHolding(true);
    sound.playTap();

    const duration = level.sceneConfig.holdDurationMs || 1500;
    const step = 50;
    let elapsed = 0;

    if (holdIntervalRef.current) {
      clearInterval(holdIntervalRef.current);
    }

    holdIntervalRef.current = setInterval(() => {
      elapsed += step;
      const pct = Math.min(100, Math.round((elapsed / duration) * 100));
      setHoldProgress(pct);

      if (pct >= 100) {
        clearInterval(holdIntervalRef.current);
        setHolding(false);
        sound.playCorrect();
        onSuccess();
      }
    }, step);
  };

  const handleHoldEnd = () => {
    if (level.type !== "hold") return;
    setHolding(false);
    if (holdIntervalRef.current) {
      clearInterval(holdIntervalRef.current);
    }
    if (holdProgress < 100 && !isSolved) {
      setHoldProgress(0);
      onWrong();
    }
  };

  // Keyboard Space / Enter hold listener for desktop / laptops
  useEffect(() => {
    if (level.type !== "hold" || isSolved) return;

    const handleHoldKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
      if (e.key === " " || e.key === "Enter") {
        if (!isHoldingKeyRef.current) {
          isHoldingKeyRef.current = true;
          e.preventDefault();
          handleHoldStart();
        }
      }
    };

    const handleHoldKeyUp = (e: KeyboardEvent) => {
      if (e.key === " " || e.key === "Enter") {
        if (isHoldingKeyRef.current) {
          isHoldingKeyRef.current = false;
          e.preventDefault();
          handleHoldEnd();
        }
      }
    };

    window.addEventListener("keydown", handleHoldKeyDown);
    window.addEventListener("keyup", handleHoldKeyUp);
    return () => {
      window.removeEventListener("keydown", handleHoldKeyDown);
      window.removeEventListener("keyup", handleHoldKeyUp);
    };
  }, [level, isSolved]);

  // Swipe interaction (supports finger swipe, mouse drag, click pad & keyboard arrows)
  const swipeStartRef = useRef<{ x: number; y: number } | null>(null);

  const handlePerformSwipe = (dir: string) => {
    if (level.type !== "swipe" || isSolved) return;
    const expected = level.sceneConfig.swipeDirection || level.answer;
    if (String(dir).toLowerCase() === String(expected).toLowerCase()) {
      sound.playCorrect();
      onSuccess();
    } else {
      sound.playWrong();
      onWrong();
    }
  };

  const handleSwipeStart = (clientX: number, clientY: number) => {
    if (level.type !== "swipe" || isSolved) return;
    swipeStartRef.current = { x: clientX, y: clientY };
  };

  const handleSwipeEnd = (clientX: number, clientY: number) => {
    if (level.type !== "swipe" || isSolved || !swipeStartRef.current) return;
    const dx = clientX - swipeStartRef.current.x;
    const dy = clientY - swipeStartRef.current.y;
    const absX = Math.abs(dx);
    const absY = Math.abs(dy);

    if (Math.max(absX, absY) > 35) {
      let detectedDir = "";
      if (absX > absY) {
        detectedDir = dx > 0 ? "right" : "left";
      } else {
        detectedDir = dy > 0 ? "down" : "up";
      }

      handlePerformSwipe(detectedDir);
    }
    swipeStartRef.current = null;
  };

  // Keyboard Arrow Keys & WASD for Swipe levels
  useEffect(() => {
    if (level.type !== "swipe" || isSolved) return;

    const handleSwipeKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;

      if (e.key === "ArrowLeft" || e.key === "a" || e.key === "A") {
        e.preventDefault();
        handlePerformSwipe("left");
      } else if (e.key === "ArrowRight" || e.key === "d" || e.key === "D") {
        e.preventDefault();
        handlePerformSwipe("right");
      } else if (e.key === "ArrowUp" || e.key === "w" || e.key === "W") {
        e.preventDefault();
        handlePerformSwipe("up");
      } else if (e.key === "ArrowDown" || e.key === "s" || e.key === "S") {
        e.preventDefault();
        handlePerformSwipe("down");
      }
    };

    window.addEventListener("keydown", handleSwipeKeyDown);
    return () => window.removeEventListener("keydown", handleSwipeKeyDown);
  }, [level, isSolved]);

  // Keyboard number keys 1-9 for Sequence and Multi-Tap levels
  useEffect(() => {
    if (level.type !== "sequence" && level.type !== "multi-tap") return;
    if (isSolved) return;
    const items = level.sceneConfig.items || [];
    if (items.length === 0) return;

    const handleSeqKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
      const num = parseInt(e.key, 10);
      if (!isNaN(num) && num >= 1 && num <= items.length) {
        e.preventDefault();
        handleItemTap(items[num - 1]);
      }
    };

    window.addEventListener("keydown", handleSeqKeyDown);
    return () => window.removeEventListener("keydown", handleSeqKeyDown);
  }, [level, isSolved]);

  // Touch handling for mobile: supports 2-finger pinch zoom & pan, and 1-finger swipe gestures
  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 2) {
      // 2 fingers: initialize pinch zoom & pan
      const t0 = e.touches[0];
      const t1 = e.touches[1];
      const dist = Math.hypot(t0.clientX - t1.clientX, t0.clientY - t1.clientY);
      const center = {
        x: (t0.clientX + t1.clientX) / 2,
        y: (t0.clientY + t1.clientY) / 2,
      };
      pinchStateRef.current = {
        startDistance: dist,
        startZoom: zoom,
        startPan: { ...pan },
        startCenter: center,
      };
      setIsPinching(true);
    } else if (e.touches.length === 1) {
      const touch = e.touches[0];
      handleSwipeStart(touch.clientX, touch.clientY);
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length === 2 && pinchStateRef.current) {
      // Two-finger pinch: scale and pan together
      const t0 = e.touches[0];
      const t1 = e.touches[1];
      const currentDist = Math.hypot(t0.clientX - t1.clientX, t0.clientY - t1.clientY);
      const scaleRatio = currentDist / (pinchStateRef.current.startDistance || 1);
      const nextZoom = Math.min(
        2.5,
        Math.max(0.75, Number((pinchStateRef.current.startZoom * scaleRatio).toFixed(2)))
      );

      const currentCenter = {
        x: (t0.clientX + t1.clientX) / 2,
        y: (t0.clientY + t1.clientY) / 2,
      };
      const deltaX = currentCenter.x - pinchStateRef.current.startCenter.x;
      const deltaY = currentCenter.y - pinchStateRef.current.startCenter.y;

      const maxPanX = containerRef.current ? Math.max(80, (containerRef.current.clientWidth * (nextZoom - 0.7)) / 2) : 150;
      const maxPanY = containerRef.current ? Math.max(80, (containerRef.current.clientHeight * (nextZoom - 0.7)) / 2) : 150;

      setZoom(nextZoom);
      setPan({
        x: Math.max(-maxPanX, Math.min(maxPanX, Math.round(pinchStateRef.current.startPan.x + deltaX))),
        y: Math.max(-maxPanY, Math.min(maxPanY, Math.round(pinchStateRef.current.startPan.y + deltaY))),
      });
    }
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (e.touches.length < 2) {
      pinchStateRef.current = null;
      setIsPinching(false);
    }
    if (e.changedTouches.length > 0 && e.touches.length === 0) {
      const touch = e.changedTouches[0];
      handleSwipeEnd(touch.clientX, touch.clientY);
    }
  };

  const handleContainerPointerDown = (e: React.PointerEvent) => {
    if (level.type === "swipe") {
      handleSwipeStart(e.clientX, e.clientY);
    }

    // When zoomed in, dragging on empty canvas pans the view smoothly
    if (zoom > 1.0 && !draggedItem) {
      isPanningRef.current = true;
      panStartRef.current = {
        x: e.clientX,
        y: e.clientY,
        startPanX: pan.x,
        startPanY: pan.y,
      };
    }
  };

  // Helper renderer for modern item shapes
  const renderItemDoodle = (item: SceneItem) => {
    const size = item.size || 56;
    const color = item.color || "#F59E0B";

    if (item.shape === "bee") {
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" className="overflow-visible drop-shadow-xs">
          {/* Wings */}
          <path
            d="M18 16 C14 8, 8 12, 16 22"
            fill="rgba(255, 255, 255, 0.85)"
            stroke="#1C1917"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M30 16 C34 8, 40 12, 32 22"
            fill="rgba(255, 255, 255, 0.85)"
            stroke="#1C1917"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          {/* Body */}
          <ellipse cx="24" cy="26" rx="13" ry="9.5" fill={color} stroke="#1C1917" strokeWidth="2.2" />
          <path d="M21 17 L21 35" stroke="#1C1917" strokeWidth="2.2" strokeLinecap="round" />
          <path d="M27 17 L27 35" stroke="#1C1917" strokeWidth="2.2" strokeLinecap="round" />
          <polygon points="37,26 40,24.5 40,27.5" fill="#1C1917" />
          <circle cx="15" cy="24.5" r="1.5" fill="#1C1917" />
        </svg>
      );
    }

    if (item.shape === "lightbulb") {
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" className="overflow-visible drop-shadow-xs">
          <path
            d="M24 8 C15.5 8 11 14.5 11 21.5 C11 27.5 16 32.5 18 35.5 L30 35.5 C32 32.5 37 27.5 37 21.5 C37 14.5 32.5 8 24 8 Z"
            fill={color}
            stroke="#1C1917"
            strokeWidth="2"
          />
          <path d="M19 39 L29 39" stroke="#1C1917" strokeWidth="2" strokeLinecap="round" />
          <path d="M21 42 L27 42" stroke="#1C1917" strokeWidth="2" strokeLinecap="round" />
          <path d="M22 22 L24 16 L26 22" stroke="#D97706" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
    }

    if (item.shape === "star") {
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" className="overflow-visible drop-shadow-xs">
          <polygon
            points="12,2 15,8.5 22,9.2 17,14 18.5,21 12,17.5 5.5,21 7,14 2,9.2 9,8.5"
            fill={color}
            stroke="#1C1917"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </svg>
      );
    }

    if (item.shape === "heart") {
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" className="overflow-visible drop-shadow-xs">
          <path
            d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
            fill={color}
            stroke="#1C1917"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </svg>
      );
    }

    if (item.shape === "apple") {
      return (
        <svg width={size} height={size} viewBox="0 0 32 32" className="overflow-visible drop-shadow-xs">
          {/* Stem & Leaf */}
          <path d="M16 8 C16 4 18 2 20 2" stroke="#4D7C0F" strokeWidth="2" strokeLinecap="round" fill="none" />
          <path d="M18 4 C22 3 24 6 20 6 Z" fill="#65A30D" />
          {/* Apple body */}
          <path
            d="M16 9 C11 9 6 12 6 19 C6 26 12 29 16 29 C20 29 26 26 26 19 C26 12 21 9 16 9 Z"
            fill={color || "#EF4444"}
            stroke="#1C1917"
            strokeWidth="1.8"
          />
          <circle cx="12" cy="15" r="1.5" fill="white" opacity="0.6" />
        </svg>
      );
    }

    if (item.shape === "cloud") {
      return (
        <svg width={size} height={size * 0.75} viewBox="0 0 48 36" className="overflow-visible drop-shadow-xs">
          <path
            d="M14 30 L36 30 C41 30 45 26 45 21 C45 16.5 41.5 13 37 13 C36.5 8 32 4 26 4 C20.5 4 16 7.5 15 12 C10.5 12.5 7 16 7 20.5 C7 25.5 10 30 14 30 Z"
            fill={color || "#E2E8F0"}
            stroke="#1C1917"
            strokeWidth="2"
          />
        </svg>
      );
    }

    if (item.shape === "sun") {
      return (
        <svg width={size} height={size} viewBox="0 0 40 40" className="overflow-visible drop-shadow-xs">
          {/* Rays */}
          <g stroke="#F59E0B" strokeWidth="2.2" strokeLinecap="round">
            <line x1="20" y1="4" x2="20" y2="8" />
            <line x1="20" y1="32" x2="20" y2="36" />
            <line x1="4" y1="20" x2="8" y2="20" />
            <line x1="32" y1="20" x2="36" y2="20" />
            <line x1="8.7" y1="8.7" x2="11.5" y2="11.5" />
            <line x1="28.5" y1="28.5" x2="31.3" y2="31.3" />
            <line x1="8.7" y1="31.3" x2="11.5" y2="28.5" />
            <line x1="28.5" y1="11.5" x2="31.3" y2="8.7" />
          </g>
          {/* Center */}
          <circle cx="20" cy="20" r="9" fill={color || "#FBBF24"} stroke="#1C1917" strokeWidth="2" />
        </svg>
      );
    }

    if (item.shape === "cup") {
      return (
        <svg width={size} height={size} viewBox="0 0 36 36" className="overflow-visible drop-shadow-xs">
          {/* Steam */}
          <path d="M12 6 Q14 4 12 2" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round" fill="none" />
          <path d="M18 6 Q20 4 18 2" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round" fill="none" />
          {/* Mug body */}
          <rect x="8" y="10" width="16" height="18" rx="3" fill={color || "#F1F5F9"} stroke="#1C1917" strokeWidth="1.8" />
          {/* Handle */}
          <path d="M24 13 C29 13 29 23 24 23" fill="none" stroke="#1C1917" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
    }

    if (item.shape === "egg") {
      return (
        <svg width={size * 0.8} height={size} viewBox="0 0 32 40" className="overflow-visible drop-shadow-xs">
          <path
            d="M16 4 C8 4 4 16 4 26 C4 33 9 38 16 38 C23 38 28 33 28 26 C28 16 24 4 16 4 Z"
            fill={color || "#FEF3C7"}
            stroke="#1C1917"
            strokeWidth="2"
          />
        </svg>
      );
    }

    if (item.shape === "balloon") {
      return (
        <svg width={size * 0.8} height={size} viewBox="0 0 32 44" className="overflow-visible drop-shadow-xs">
          {/* String */}
          <path d="M16 32 Q14 36 17 40 Q15 42 16 44" fill="none" stroke="#64748B" strokeWidth="1.5" strokeLinecap="round" />
          {/* Knot */}
          <polygon points="14,32 18,32 16,30" fill={color || "#F43F5E"} stroke="#1C1917" strokeWidth="1" />
          {/* Balloon body */}
          <ellipse cx="16" cy="17" rx="12" ry="15" fill={color || "#F43F5E"} stroke="#1C1917" strokeWidth="1.8" />
          <ellipse cx="12" cy="11" rx="2.5" ry="4" fill="white" opacity="0.5" />
        </svg>
      );
    }

    if (item.shape === "fish") {
      return (
        <svg width={size} height={size * 0.65} viewBox="0 0 40 26" className="overflow-visible drop-shadow-xs">
          {/* Body and Tail */}
          <path
            d="M4 13 L1 7 L1 19 Z M4 13 C12 6 28 6 36 13 C28 20 12 20 4 13 Z"
            fill={color || "#F59E0B"}
            stroke="#1C1917"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <circle cx="30" cy="11" r="1.5" fill="#1C1917" />
        </svg>
      );
    }

    if (item.shape === "key") {
      return (
        <svg width={size} height={size * 0.6} viewBox="0 0 40 24" className="overflow-visible drop-shadow-xs">
          {/* Bow */}
          <circle cx="10" cy="12" r="7" fill={color || "#F59E0B"} stroke="#1C1917" strokeWidth="1.8" />
          <circle cx="10" cy="12" r="3" fill="#FFFDF9" stroke="#1C1917" strokeWidth="1.5" />
          {/* Shaft & Bit */}
          <path d="M17 12 L35 12 L35 17 M30 12 L30 16" stroke="#1C1917" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </svg>
      );
    }

    if (item.shape === "fire") {
      return (
        <svg width={size * 0.8} height={size} viewBox="0 0 32 40" className="overflow-visible drop-shadow-xs">
          <path
            d="M16 2 C16 10 26 16 26 26 C26 33 21 38 16 38 C11 38 6 33 6 26 C6 18 13 12 16 2 Z"
            fill={color || "#EF4444"}
            stroke="#1C1917"
            strokeWidth="1.8"
          />
          <path
            d="M16 16 C16 20 21 24 21 29 C21 33 19 36 16 36 C13 36 11 33 11 29 C11 25 15 22 16 16 Z"
            fill="#FBBF24"
          />
        </svg>
      );
    }

    if (item.shape === "box") {
      return (
        <svg width={size} height={size} viewBox="0 0 36 36" className="overflow-visible drop-shadow-xs">
          <rect x="6" y="10" width="24" height="20" rx="3" fill={color || "#D97706"} stroke="#1C1917" strokeWidth="1.8" />
          <rect x="4" y="8" width="28" height="6" rx="2" fill={color || "#D97706"} stroke="#1C1917" strokeWidth="1.8" />
          {/* Ribbon */}
          <line x1="18" y1="8" x2="18" y2="30" stroke="#FEF3C7" strokeWidth="2.5" />
          <line x1="6" y1="20" x2="30" y2="20" stroke="#FEF3C7" strokeWidth="2.5" />
        </svg>
      );
    }

    if (item.shape === "flower") {
      return (
        <svg width={size} height={size} viewBox="0 0 36 36" className="overflow-visible drop-shadow-xs">
          <circle cx="18" cy="11" r="5" fill={color || "#F472B6"} stroke="#1C1917" strokeWidth="1.5" />
          <circle cx="25" cy="18" r="5" fill={color || "#F472B6"} stroke="#1C1917" strokeWidth="1.5" />
          <circle cx="18" cy="25" r="5" fill={color || "#F472B6"} stroke="#1C1917" strokeWidth="1.5" />
          <circle cx="11" cy="18" r="5" fill={color || "#F472B6"} stroke="#1C1917" strokeWidth="1.5" />
          <circle cx="18" cy="18" r="4" fill="#FBBF24" stroke="#1C1917" strokeWidth="1.5" />
        </svg>
      );
    }

    // Default modern clean pill / square / circle item
    const isCircle = item.shape === "circle";
    return (
      <div
        style={{
          width: size,
          height: size,
          backgroundColor: color,
          borderRadius: isCircle ? "9999px" : "16px",
        }}
        className="flex items-center justify-center font-heading font-bold text-stone-900 border border-stone-800/80 shadow-xs select-none"
      >
        {item.text || item.label || "?"}
      </div>
    );
  };

  const items = level.sceneConfig.items || [];
  const dropZones = level.sceneConfig.dropZones || [];
  const options = level.sceneConfig.options || [];

  return (
    <div
      ref={containerRef}
      id={`scene_${sceneId}`}
      onPointerDown={handleContainerPointerDown}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      className={`relative w-full aspect-[4/3] min-h-[220px] max-h-[350px] bg-stone-50/60 rounded-xl sm:rounded-2xl border border-stone-200/80 p-2.5 sm:p-3 overflow-hidden flex flex-col justify-between select-none touch-none transition-shadow ${
        isPinching ? "ring-2 ring-amber-400 ring-offset-1" : ""
      }`}
      style={{
        backgroundColor: level.sceneConfig.background || undefined,
      }}
    >
      {/* Subtle modern dot-grid backdrop */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#1c1917 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />

      {/* Floating Zoom & Pan Controls (Always accessible, fixed to the scene frame) */}
      <div
        className="absolute top-2.5 right-2.5 z-40 flex items-center gap-0.5 bg-white/95 backdrop-blur-md rounded-xl p-1 shadow-md border border-stone-200/90 text-stone-700 select-none"
        onClick={(e) => e.stopPropagation()}
        style={{ pointerEvents: "auto" }}
      >
        <button
          type="button"
          onClick={handleZoomOut}
          disabled={zoom <= 0.75}
          aria-label="Zoom Out"
          title="Zoom Out (Ctrl -)"
          className="w-7 h-7 flex items-center justify-center rounded-lg hover:bg-stone-100 active:bg-stone-200 disabled:opacity-30 disabled:hover:bg-transparent text-stone-700 transition-colors cursor-pointer touch-manipulation"
        >
          <ZoomOut className="w-3.5 h-3.5 stroke-[2.5]" />
        </button>

        <button
          type="button"
          onClick={handleZoomReset}
          aria-label="Reset Zoom (Ctrl 0)"
          title="Reset Zoom to 100% (Ctrl 0)"
          className={`px-2 py-0.5 text-[11px] font-mono font-bold rounded-md transition-all cursor-pointer touch-manipulation flex items-center gap-1 ${
            zoom !== 1 || pan.x !== 0 || pan.y !== 0
              ? "bg-amber-100 text-amber-900 border border-amber-300 hover:bg-amber-200 shadow-2xs"
              : "text-stone-600 hover:bg-stone-100"
          }`}
        >
          <span>{Math.round(zoom * 100)}%</span>
        </button>

        <button
          type="button"
          onClick={handleZoomIn}
          disabled={zoom >= 2.5}
          aria-label="Zoom In"
          title="Zoom In (Ctrl +)"
          className="w-7 h-7 flex items-center justify-center rounded-lg hover:bg-stone-100 active:bg-stone-200 disabled:opacity-30 disabled:hover:bg-transparent text-stone-700 transition-colors cursor-pointer touch-manipulation"
        >
          <ZoomIn className="w-3.5 h-3.5 stroke-[2.5]" />
        </button>

        {(zoom !== 1 || pan.x !== 0 || pan.y !== 0) && (
          <button
            type="button"
            onClick={handleZoomReset}
            aria-label="Reset View"
            title="Reset Zoom & Pan (Ctrl 0)"
            className="ml-0.5 w-6 h-6 flex items-center justify-center rounded-lg bg-stone-100 hover:bg-amber-100 text-stone-600 hover:text-amber-800 active:scale-90 transition-all cursor-pointer touch-manipulation"
          >
            <RotateCcw className="w-3 h-3 stroke-[2.5]" />
          </button>
        )}
      </div>

      {/* Zoom / Pan Help indicator pill when zoomed */}
      {zoom > 1.0 && (
        <div className="absolute bottom-2 left-2 z-35 pointer-events-none bg-stone-900/80 text-white text-[10px] font-heading font-medium px-2 py-1 rounded-lg backdrop-blur-xs flex items-center gap-1 shadow-sm animate-in fade-in duration-200">
          <span>Pinch / Drag to pan</span>
          <span className="hidden sm:inline opacity-75">• Ctrl +/-</span>
        </div>
      )}

      {/* Active Item Picked Up Banner (Tap-to-Place accessibility) */}
      {selectedDraggableId && (
        <div className="absolute top-2 left-2 max-w-[calc(100%-120px)] z-40 bg-gradient-to-r from-amber-600 to-amber-700 text-white text-xs font-heading font-bold px-3 py-1.5 rounded-xl shadow-lg border border-amber-300 flex items-center justify-between animate-in slide-in-from-top-2 duration-200">
          <div className="flex items-center gap-1.5 truncate">
            <span className="w-2 h-2 rounded-full bg-emerald-300 animate-ping shrink-0" />
            <span className="truncate">Picked up! Tap zone</span>
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              sound.playTap();
              setSelectedDraggableId(null);
            }}
            className="ml-2 px-1.5 py-0.5 text-[10px] bg-black/25 hover:bg-black/40 rounded-lg text-white font-bold shrink-0 cursor-pointer touch-manipulation"
          >
            Cancel
          </button>
        </div>
      )}

      {/* Scalable Inner Scene Content Layer (Supports smooth zoom & pan) */}
      <div
        id={`scene_inner_${sceneId}`}
        className="absolute inset-0 w-full h-full flex flex-col justify-between p-3 pointer-events-auto origin-center"
        style={{
          transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})`,
          transformOrigin: "center center",
          transition: isPinching ? "none" : "transform 0.12s ease-out",
        }}
      >
        {/* Optional prompt note pinned to top of scene */}
        {level.sceneConfig.promptNote && (
          <div className="relative z-10 self-start px-2.5 py-1 bg-amber-50 border border-amber-200/70 rounded-lg text-xs font-medium text-amber-800 shadow-xs">
            {level.sceneConfig.promptNote}
          </div>
        )}

      {/* Render Drop Zones (if any) */}
      {dropZones.map((dz) => {
        const isSelectedTarget = Boolean(selectedDraggableId);
        return (
          <div
            key={dz.id}
            id={`dropzone_${dz.id}`}
            onPointerDown={(e) => {
              if (selectedDraggableId) {
                e.stopPropagation();
                handleDropOnZone(dz, selectedDraggableId);
              }
            }}
            onClick={(e) => {
              if (selectedDraggableId) {
                e.stopPropagation();
                handleDropOnZone(dz, selectedDraggableId);
              }
            }}
            style={{
              position: "absolute",
              left: `${dz.x}%`,
              top: `${dz.y}%`,
              width: dz.width || 80,
              height: dz.height || 80,
              transform: "translate(-50%, -50%)",
              backgroundColor: isSelectedTarget ? "#FEF3C7" : dz.bgColor || "#F8F7F4",
              borderColor: isSelectedTarget ? "#D97706" : dz.borderColor || "#D6D3D1",
            }}
            className={`border-2 border-dashed rounded-2xl flex flex-col items-center justify-center p-2 text-center transition-all z-15 shadow-xs ${
              isSelectedTarget
                ? "pointer-events-auto cursor-pointer animate-pulse border-amber-600 ring-4 ring-amber-400/50 scale-105 touch-manipulation active:scale-95"
                : "pointer-events-none"
            }`}
          >
            <span className="text-[11px] font-heading font-semibold text-stone-600">
              {dz.label}
            </span>
            {isSelectedTarget && (
              <span className="text-[9px] font-bold text-amber-800 bg-amber-200/90 px-1.5 py-0.5 rounded-md mt-1 shadow-xs">
                Tap to Place
              </span>
            )}
          </div>
        );
      })}

      {/* Render Scene Items */}
      {items.map((item, itemIdx) => {
        const isDragged = draggedItem === item.id;
        const isSelectedDraggable = selectedDraggableId === item.id;
        const pos = itemPositions[item.id];
        const isSelectedInUserSeq = userSequence.some((id) => String(id) === String(item.id));
        const seqStepIndex = userSequence.findIndex((id) => String(id) === String(item.id));
        const taps = tapCounts[item.id] || (isSelectedInUserSeq ? 1 : 0);

        const isTarget =
          item.isTarget ||
          item.id === level.answer ||
          item.text === level.answer ||
          (Array.isArray(level.answer) && (level.answer as unknown[]).includes(item.id));
        
        let solvedAnimationClass = "";
        if (isSolved) {
          if (isTarget) {
            solvedAnimationClass = "animate-bounce drop-shadow-[0_0_15px_rgba(251,191,36,0.8)] z-50";
          } else {
            solvedAnimationClass = "opacity-40 transition-opacity duration-1000";
          }
        }

        return (
          <div
            key={item.id}
            id={`item_${item.id}`}
            onPointerDown={(e) => handleItemPointerDown(e, item)}
            onPointerUp={(e) => handleItemPointerUp(e, item)}
            onClick={(e) => handleItemClick(e, item)}
            style={{
              position: "absolute",
              left: pos ? `${pos.x}px` : `${item.x ?? 50}%`,
              top: pos ? `${pos.y}px` : `${item.y ?? 50}%`,
              transform: pos ? undefined : "translate(-50%, -50%)",
              zIndex: isDragged ? 50 : isSelectedDraggable ? 40 : 20,
              cursor: item.draggable ? "grab" : "pointer",
            }}
            className={`group transition-transform select-none touch-manipulation min-w-[48px] min-h-[48px] p-1 flex items-center justify-center cursor-pointer ${
              item.draggable && isDragged
                ? "cursor-grabbing scale-110 shadow-lg"
                : isSelectedDraggable
                ? "scale-110 ring-4 ring-amber-400 ring-offset-2 rounded-2xl drop-shadow-md animate-pulse"
                : "active:scale-90 active:brightness-95"
            } ${solvedAnimationClass}`}
          >
            <div className="flex flex-col items-center relative">
              {renderItemDoodle(item)}

              {/* Text label underneath */}
              {item.label && !item.text && (
                <span className="mt-1 text-[11px] font-heading font-semibold text-stone-800 bg-white px-2 py-0.5 rounded-md border border-stone-200 shadow-xs">
                  {item.label}
                </span>
              )}

              {/* Desktop Keyboard Number Shortcut Badge (1, 2, 3...) for sequence/multi-tap */}
              {(level.type === "sequence" || level.type === "multi-tap") && (
                <span className="hidden sm:inline-block absolute -bottom-2 -left-2 bg-stone-800/80 text-white font-mono text-[9px] px-1 py-0.2 rounded border border-white/60">
                  {itemIdx + 1}
                </span>
              )}

              {/* Multi-tap badge */}
              {level.type === "multi-tap" && item.tapCountRequired && item.tapCountRequired > 1 && (
                <span className="mt-1 text-[10px] font-heading bg-amber-100 text-amber-900 border border-amber-300 px-2 py-0.5 rounded-full font-bold shadow-xs">
                  {taps} / {item.tapCountRequired}
                </span>
              )}

              {/* Multi-tap selection checkmark */}
              {level.type === "multi-tap" && (!item.tapCountRequired || item.tapCountRequired <= 1) && (isSelectedInUserSeq || taps > 0) && (
                <div className="absolute -top-1.5 -right-1.5 bg-emerald-500 text-white rounded-full p-1 shadow-xs border border-white">
                  <Check className="w-2.5 h-2.5 stroke-[3]" />
                </div>
              )}

              {/* Sequence order number badge */}
              {level.type === "sequence" && isSelectedInUserSeq && (
                <div className="absolute -top-2 -right-2 bg-amber-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-[10px] font-heading font-black shadow-xs border border-white">
                  {seqStepIndex + 1}
                </div>
              )}
            </div>
          </div>
        );
      })}

      {/* Swipe Overlay (Interactive across touch, mouse, pad, and keyboard) */}
      {level.type === "swipe" && (
        <div className="absolute inset-0 z-30 flex flex-col items-center justify-center bg-stone-900/25 pointer-events-auto backdrop-blur-[1px]">
          <div className="bg-white/95 border-2 border-amber-400 rounded-2xl p-3.5 shadow-xl flex flex-col items-center gap-2.5 animate-in zoom-in-95 max-w-xs text-center">
            <div className="flex items-center gap-1.5 text-stone-800">
              <Hand className="w-4 h-4 text-amber-600 animate-bounce" />
              <span className="text-xs font-heading font-black uppercase tracking-wider text-amber-900">
                Swipe {level.sceneConfig.swipeDirection?.toUpperCase() || "ACROSS"}
              </span>
            </div>

            {/* Interactive Direction Pad for Mouse / Touch / Trackpad clicks */}
            <div className="grid grid-cols-3 gap-1.5 w-32 select-none">
              <div />
              <button
                onClick={() => handlePerformSwipe("up")}
                aria-label="Swipe Up"
                title="Swipe Up (↑ / W)"
                className="h-8 flex items-center justify-center rounded-xl bg-stone-100 hover:bg-amber-100 active:bg-amber-200 border border-stone-300 font-bold text-stone-800 shadow-xs cursor-pointer touch-manipulation"
              >
                ↑
              </button>
              <div />

              <button
                onClick={() => handlePerformSwipe("left")}
                aria-label="Swipe Left"
                title="Swipe Left (← / A)"
                className="h-8 flex items-center justify-center rounded-xl bg-stone-100 hover:bg-amber-100 active:bg-amber-200 border border-stone-300 font-bold text-stone-800 shadow-xs cursor-pointer touch-manipulation"
              >
                ←
              </button>
              <div className="h-8 flex items-center justify-center text-[9px] text-stone-400 font-bold">
                PAD
              </div>
              <button
                onClick={() => handlePerformSwipe("right")}
                aria-label="Swipe Right"
                title="Swipe Right (→ / D)"
                className="h-8 flex items-center justify-center rounded-xl bg-stone-100 hover:bg-amber-100 active:bg-amber-200 border border-stone-300 font-bold text-stone-800 shadow-xs cursor-pointer touch-manipulation"
              >
                →
              </button>

              <div />
              <button
                onClick={() => handlePerformSwipe("down")}
                aria-label="Swipe Down"
                title="Swipe Down (↓ / S)"
                className="h-8 flex items-center justify-center rounded-xl bg-stone-100 hover:bg-amber-100 active:bg-amber-200 border border-stone-300 font-bold text-stone-800 shadow-xs cursor-pointer touch-manipulation"
              >
                ↓
              </button>
              <div />
            </div>

            <p className="text-[10px] text-stone-500 font-medium">
              Swipe with finger, click arrow buttons, or press <kbd className="font-mono bg-stone-100 px-1 py-0.5 rounded border border-stone-300">← ↑ ↓ →</kbd>
            </p>
          </div>
        </div>
      )}

      {/* Hold Button / Meter (Interactive across touch and keyboard Spacebar) */}
      {level.type === "hold" && (
        <div className="absolute bottom-3 left-0 right-0 z-30 flex flex-col items-center">
          <div className="w-52 h-2.5 bg-stone-200/90 rounded-full overflow-hidden p-0.5 mb-2 border border-stone-300/80 shadow-inner">
            <div
              className="h-full bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 rounded-full transition-all duration-75"
              style={{ width: `${holdProgress}%` }}
            />
          </div>
          <button
            onPointerDown={handleHoldStart}
            onPointerUp={handleHoldEnd}
            onPointerLeave={handleHoldEnd}
            className={`min-h-[46px] px-6 py-2.5 rounded-2xl font-heading font-bold text-xs transition-all shadow-md cursor-pointer touch-manipulation select-none flex items-center gap-1.5 ${
              holding
                ? "bg-amber-600 text-white scale-95 shadow-inner ring-4 ring-amber-400/40"
                : "bg-gradient-to-r from-amber-500 to-amber-600 hover:brightness-105 active:scale-95 text-white"
            }`}
          >
            <span>{holding ? `Holding... ${holdProgress}%` : "Press & Hold Here"}</span>
            <kbd className="hidden sm:inline-block ml-1 px-1.5 py-0.5 text-[10px] font-mono bg-black/20 text-white rounded">Spacebar</kbd>
          </button>
        </div>
      )}

      {/* Choice Options (at bottom of puzzle card if declared) */}
      {options.length > 0 && (
        <div className={`relative z-30 mt-auto pt-2 grid gap-1.5 sm:gap-2 w-full ${
          options.length === 2 ? "grid-cols-2" : options.length === 3 ? "grid-cols-3" : "grid-cols-2 sm:grid-cols-4"
        }`}>
          {options.map((opt, idx) => (
            <button
              key={opt.id}
              id={`choice_${opt.id}`}
              onPointerDown={(e) => e.stopPropagation()}
              onClick={(e) => {
                e.stopPropagation();
                handleChoice(opt);
              }}
              title={`Option ${idx + 1} (${idx + 1})`}
              className="flex items-center justify-center gap-1.5 px-2.5 py-2 min-h-[42px] bg-white hover:bg-stone-50 hover:border-amber-400 active:scale-95 transition-all border border-stone-200/90 rounded-xl font-heading font-semibold text-xs text-stone-800 shadow-xs text-center cursor-pointer touch-manipulation"
            >
              <span className="hidden sm:inline-flex w-4 h-4 rounded-md bg-stone-100 border border-stone-300 items-center justify-center text-[10px] font-mono text-stone-600 shrink-0">
                {idx + 1}
              </span>
              <span className="truncate">{opt.text}</span>
            </button>
          ))}
        </div>
      )}

      </div>

      {/* Solved Overlay State */}
      {isSolved && (
        <div className="absolute inset-0 z-40 bg-emerald-500/10 backdrop-blur-xs flex items-center justify-center pointer-events-none">
          <div className="bg-white/95 border border-emerald-200 px-5 py-2.5 rounded-2xl shadow-lg flex items-center gap-2 text-emerald-800 font-heading font-bold text-sm animate-in zoom-in-95 duration-200">
            <Sparkles className="w-4 h-4 text-amber-500 fill-amber-400" />
            <span>Solved!</span>
          </div>
        </div>
      )}
    </div>
  );
};
