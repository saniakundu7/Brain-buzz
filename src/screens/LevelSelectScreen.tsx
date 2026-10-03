import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  Lock,
  Star,
  Home,
  Coins,
  Flame,
  Compass,
  Gift,
  Trophy,
  Flag,
  Eye,
  Crown,
  Sparkles,
} from "lucide-react";
import { PlayerProgress } from "../types";
import { sound } from "../utils/audio";
import {
  MAP_CONFIG,
  getMapHeight,
  getAllMapPoints,
  generateSvgPath,
  getLevelPoint,
} from "../utils/mapPath";
import { MAP_ZONES, MAP_SCENERY_ITEMS, MapZone } from "../data/mapZones";
import { MapScenery } from "../components/MapScenery";
import { MapZoneBanner } from "../components/MapZoneBanner";
import { MapZoneBiome } from "../components/MapZoneBiome";
import { SpinWheelModal } from "../components/SpinWheelModal";
import { JumpToLevelModal } from "../components/JumpToLevelModal";
import { Search } from "lucide-react";
import { getThemeForLevel, levelThemes } from "../utils/theme";

interface Props {
  progress: PlayerProgress;
  onSelectLevel: (levelId: number) => void;
  onGoHome: () => void;
  onGoDaily?: () => void;
  onUpdateProgress?: (newProgress: PlayerProgress) => void;
}

export const LevelSelectScreen: React.FC<Props> = ({
  progress,
  onSelectLevel,
  onGoHome,
  onGoDaily,
  onUpdateProgress,
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const currentTheme = getThemeForLevel(progress.unlockedLevel);
  const tooltipTimerRef = useRef<number | null>(null);

  // Floating tooltip for locked nodes
  const [lockedTooltip, setLockedTooltip] = useState<{
    levelId: number;
    requiredLevel: number;
    x: number;
    y: number;
  } | null>(null);

  // Jump to current level FAB visibility
  const [showJumpToCurrent, setShowJumpToCurrent] = useState<boolean>(false);

  // Modals state
  const [showSpinWheel, setShowSpinWheel] = useState<boolean>(false);
  const [showJumpModal, setShowJumpModal] = useState<boolean>(false);

  // Precompute map points and paths
  const allPoints = useMemo(() => getAllMapPoints(), []);
  const fullMapPath = useMemo(() => generateSvgPath(allPoints, 200), [allPoints]);
  const conqueredPath = useMemo(
    () => generateSvgPath(allPoints, Math.min(200, progress.unlockedLevel)),
    [allPoints, progress.unlockedLevel]
  );
  const totalMapHeight = useMemo(() => getMapHeight(), []);

  // Precompute 20-level territory biome section backdrops
  const zoneBiomes = useMemo(() => {
    return MAP_ZONES.map((zone) => {
      const pStart = getLevelPoint(zone.startLevel);
      const pEnd = getLevelPoint(zone.endLevel);
      const topY = zone.id === 10 ? 0 : Math.max(0, pEnd.y - 48);
      const bottomY = zone.id === 1 ? totalMapHeight : pStart.y + 48;
      const height = Math.max(120, bottomY - topY);
      return { zone, topY, height };
    });
  }, [totalMapHeight]);

  // Zone banner vertical midpoints
  const zoneBanners = useMemo(() => {
    return MAP_ZONES.map((zone) => {
      if (zone.id === 1) {
        // Zone 1 start ribbon near level 1
        const p1 = getLevelPoint(1);
        return { zone, y: p1.y + 70 };
      }
      // Midpoint between previous zone's last level and this zone's start level
      const prevLast = getLevelPoint(zone.startLevel - 1);
      const curFirst = getLevelPoint(zone.startLevel);
      const y = Math.round((prevLast.y + curFirst.y) / 2);
      return { zone, y };
    });
  }, []);

  // Auto-scroll to current level on open
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const currentLvl = Math.min(200, Math.max(1, progress.unlockedLevel));
    const currentY = (200 - currentLvl) * MAP_CONFIG.STEP_Y + MAP_CONFIG.TOP_PADDING;
    const containerHeight = container.clientHeight || window.innerHeight;
    const targetScroll = Math.max(0, currentY - containerHeight / 2);

    // Initial instant placement
    container.scrollTop = targetScroll;

    // Settle after layout render
    const timer = setTimeout(() => {
      if (container) {
        container.scrollTop = targetScroll;
      }
    }, 60);

    return () => clearTimeout(timer);
  }, [progress.unlockedLevel]);

  // Clean up tooltip timer
  useEffect(() => {
    return () => {
      if (tooltipTimerRef.current) clearTimeout(tooltipTimerRef.current);
    };
  }, []);

  // Scroll listener for "Jump to Current" FAB
  const handleScroll = () => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const currentLvl = Math.min(200, Math.max(1, progress.unlockedLevel));
    const currentY = (200 - currentLvl) * MAP_CONFIG.STEP_Y + MAP_CONFIG.TOP_PADDING;
    const currentCenter = container.scrollTop + container.clientHeight / 2;
    const distance = Math.abs(currentCenter - currentY);

    setShowJumpToCurrent(distance > 480);
  };

  // Jump to Current button action
  const handleJumpToCurrent = () => {
    sound.playTap();
    const container = scrollContainerRef.current;
    if (!container) return;

    const currentLvl = Math.min(200, Math.max(1, progress.unlockedLevel));
    const currentY = (200 - currentLvl) * MAP_CONFIG.STEP_Y + MAP_CONFIG.TOP_PADDING;
    const containerHeight = container.clientHeight || window.innerHeight;

    container.scrollTo({
      top: Math.max(0, currentY - containerHeight / 2),
      behavior: "smooth",
    });
  };

  // Handle level node tap
  const handleNodeClick = (lvlId: number, x: number, y: number) => {
    const isCompleted = progress.completedLevels.includes(lvlId);
    const isUnlocked = lvlId <= progress.unlockedLevel || isCompleted;

    if (!isUnlocked) {
      sound.playWrong();
      setLockedTooltip({
        levelId: lvlId,
        requiredLevel: lvlId - 1,
        x,
        y,
      });

      if (tooltipTimerRef.current) clearTimeout(tooltipTimerRef.current);
      tooltipTimerRef.current = window.setTimeout(() => {
        setLockedTooltip(null);
      }, 2500);
      return;
    }

    // Dismiss tooltip if any
    setLockedTooltip(null);
    sound.playTap();
    onSelectLevel(lvlId);
  };

  // Global Keyboard Shortcuts for Desktop / Laptop / iPad with Keyboard
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        return;
      }

      if (e.key === "Escape" || e.key === "h" || e.key === "H") {
        e.preventDefault();
        sound.playTap();
        onGoHome();
      } else if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        sound.playTap();
        onSelectLevel(progress.unlockedLevel);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onGoHome, onSelectLevel, progress.unlockedLevel]);

  // Coordinates for the Daily Reward floating chest beside current level
  const currentPoint = useMemo(
    () => getLevelPoint(progress.unlockedLevel),
    [progress.unlockedLevel]
  );
  const chestSide = currentPoint.x >= MAP_CONFIG.CENTER_X ? "left" : "right";
  const chestX = chestSide === "left" ? 64 : MAP_CONFIG.WIDTH - 64;
  const chestY = currentPoint.y - 12;

  const completedCount = progress.completedLevels.length;
  const revealedCount = (progress.revealedLevels || []).length;
  const solvedCount = Math.max(0, completedCount - revealedCount);

  return (
    <div className={`relative z-10 w-full h-[100dvh] flex flex-col ${currentTheme.bg} select-none overflow-hidden transition-colors duration-700`}>
      {/* PERSISTENT TOP BAR */}
      <header className={`sticky top-0 z-40 w-full ${currentTheme.mainBg95} backdrop-blur-md border-b-2 ${currentTheme.border30} px-4 py-2.5 flex items-center justify-between shadow-xs`}>
        {/* Left: Coin Counter */}
        <div className="flex items-center gap-1.5 px-3 py-1.5 bg-[#FEF3C7] border-2 border-[#D97706]/70 rounded-full shadow-2xs">
          <Coins className="w-4 h-4 text-[#78350F] fill-[#FBBF24]" />
          <span className="font-heading font-extrabold text-xs text-[#78350F]">
            {progress.coins}
          </span>
        </div>

        {/* Center: Current Progress & Realm Indicator */}
        <div className={`flex items-center gap-2 px-3 py-1.5 ${currentTheme.mainBg} border-2 ${currentTheme.border40} rounded-full text-xs shadow-2xs`}>
          <span className="font-explorer font-bold text-[#451A03]">
            Level {progress.unlockedLevel}
          </span>
          <span className={`text-[10px] font-explorer font-extrabold uppercase tracking-wider px-1.5 py-0.5 rounded-sm ${currentTheme.accent} ${currentTheme.text}`}>
            {currentTheme.name}
          </span>
          {progress.streak > 0 && (
            <span className={`flex items-center gap-0.5 font-heading font-extrabold text-[#D97706] pl-1.5 border-l ${currentTheme.border30}`}>
              <Flame className="w-3.5 h-3.5 fill-[#EA580C] text-[#EA580C]" />
              {progress.streak}
            </span>
          )}
        </div>

        {/* Right: Home Button */}
        <button
          onClick={() => {
            sound.playTap();
            onGoHome();
          }}
          className={`w-10 h-10 min-w-[40px] min-h-[40px] flex items-center justify-center rounded-xl bg-gradient-to-b from-[#FAF3E3] to-[#F5EEDB] hover:brightness-95 active:scale-95 transition-all border-2 ${currentTheme.border50} ${currentTheme.text} shadow-2xs cursor-pointer touch-manipulation`}
          aria-label="Home"
          title="Return to Home (Esc / H)"
        >
          <Home className="w-4.5 h-4.5 stroke-[2.2]" />
        </button>
      </header>

      {/* SCROLLABLE WINDING MAP CONTAINER */}
      <div
        ref={scrollContainerRef}
        onScroll={handleScroll}
        className="flex-1 w-full overflow-y-auto overflow-x-hidden relative scroll-smooth focus:outline-none"
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        {/* Centered Map Canvas Column */}
        <div
          className="relative mx-auto"
          style={{
            width: `${MAP_CONFIG.WIDTH}px`,
            height: `${totalMapHeight}px`,
          }}
        >
          {/* THEMED BIOME BACKGROUND BACKDROPS (Each 20-level territory) */}
          {zoneBiomes.map(({ zone, topY, height }) => (
            <MapZoneBiome
              key={`biome-${zone.id}`}
              zone={zone}
              topY={topY}
              height={height}
            />
          ))}

          {/* SVG WINDING TRAIL BACKGROUND */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            width={MAP_CONFIG.WIDTH}
            height={totalMapHeight}
            viewBox={`0 0 ${MAP_CONFIG.WIDTH} ${totalMapHeight}`}
            aria-hidden="true"
          >
            {/* Trail shadow / earth trench */}
            <path
              d={fullMapPath}
              fill="none"
              stroke="#C4A87C"
              strokeWidth="28"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="0.8"
            />

            {/* Weathered sand & dirt trail main surface */}
            <path
              d={fullMapPath}
              fill="none"
              stroke="#FBF7EC"
              strokeWidth="22"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Inner trail edge borders */}
            <path
              d={fullMapPath}
              fill="none"
              stroke="#E2D4B7"
              strokeWidth="16"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Dashed explorer expedition footsteps/cobblestone path */}
            <path
              d={fullMapPath}
              fill="none"
              stroke="#8C6239"
              strokeWidth="4"
              strokeDasharray="6 8"
              strokeLinecap="round"
            />

            {/* Conquered / Golden Trail up to current unlocked level */}
            {conqueredPath && (
              <>
                {/* Conquered golden aura glow */}
                <path
                  d={conqueredPath}
                  fill="none"
                  stroke="#F59E0B"
                  strokeWidth="10"
                  strokeLinecap="round"
                  className="opacity-40"
                />
                {/* Conquered golden expedition thread */}
                <path
                  d={conqueredPath}
                  fill="none"
                  stroke="#D97706"
                  strokeWidth="5"
                  strokeDasharray="4 6"
                  strokeLinecap="round"
                  className="opacity-95"
                />
              </>
            )}
          </svg>

          {/* SUMMIT SUMMIT MARKER (Top of Map, Level 200) */}
          <div
            className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center select-none pointer-events-none z-10"
            style={{ top: "30px" }}
          >
            <div className="relative flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-tr from-[#B45309] via-[#D97706] to-[#FDE047] border-3 border-[#FEF08A] shadow-xl shadow-amber-950/30 mb-1.5 animate-pulse">
              <Trophy className="w-8 h-8 text-[#451A03] drop-shadow-md stroke-[2.2]" />
              <div className="absolute -top-1.5 -right-1.5 w-6 h-6 bg-[#FEF08A] rounded-full border border-[#B45309] flex items-center justify-center shadow-xs">
                <Crown className="w-3.5 h-3.5 text-[#B45309] fill-[#F59E0B]" />
              </div>
            </div>
            <div className="px-4 py-1.5 bg-gradient-to-r from-[#FAF3E3] via-[#FEF08A] to-[#FAF3E3] border-2 border-[#D97706] rounded-full text-[11px] font-explorer font-black text-[#451A03] uppercase tracking-wider shadow-md flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#D97706]" />
              <span>Final Treasure • Level 200</span>
              <Sparkles className="w-3.5 h-3.5 text-[#D97706]" />
            </div>
          </div>

          {/* SECTION RIBBON BANNERS (Every 20-25 Levels) */}
          {zoneBanners.map(({ zone, y }) => (
            <MapZoneBanner key={`zone-banner-${zone.id}`} zone={zone} y={y} />
          ))}

          {/* DECORATIVE SCENERY ELEMENTS (Every 10-15 Levels) */}
          {MAP_SCENERY_ITEMS.map((item) => {
            const anchorPoint = getLevelPoint(item.levelAnchor);
            const sceneryX =
              item.side === "left" ? 64 : MAP_CONFIG.WIDTH - 64;
            return (
              <MapScenery
                key={item.id}
                item={item}
                x={sceneryX}
                y={anchorPoint.y}
              />
            );
          })}

          {/* FLOATING DAILY REWARD CHEST (Beside Current Level) */}
          {onGoDaily && (
            <div
              className="absolute z-20 transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-300"
              style={{ left: `${chestX}px`, top: `${chestY}px` }}
            >
              <button
                onClick={() => {
                  sound.playTap();
                  onGoDaily();
                }}
                className="relative group p-2.5 bg-gradient-to-tr from-[#B45309] via-[#D97706] to-[#F59E0B] border-2 border-[#FEF3C7] rounded-2xl shadow-lg shadow-amber-950/30 active:scale-95 transition-all flex flex-col items-center text-center cursor-pointer"
                title="Open Daily Reward"
              >
                {/* Gentle bounce notification badge */}
                <div className="w-8 h-8 flex items-center justify-center text-[#FEF3C7] animate-bounce">
                  <Gift className="w-6 h-6 stroke-[2.4]" />
                </div>
                <span className="text-[9px] font-explorer font-bold text-[#451A03] uppercase tracking-tight bg-[#FEF3C7] px-1.5 py-0.5 rounded-md mt-0.5 whitespace-nowrap shadow-2xs border border-[#D97706]">
                  Daily Gift
                </span>
                {/* Pulsing ring indicator */}
                <span className="absolute -inset-1 rounded-2xl border-2 border-amber-400/60 animate-ping pointer-events-none opacity-40" />
              </button>
            </div>
          )}

          {/* 200 LEVEL NODES */}
          {allPoints.map((point) => {
            const lvlId = point.levelId;
            const isBoss = lvlId % 20 === 0;
            const nodeTheme = getThemeForLevel(lvlId);
            const isCompleted = progress.completedLevels.includes(lvlId);
            const isAnswerShown = (progress.revealedLevels || []).includes(lvlId);
            const isCurrent = lvlId === progress.unlockedLevel && !isCompleted;
            const isUnlocked = lvlId <= progress.unlockedLevel || isCompleted;
            const hintsUsed = progress.hintsUsedPerLevel[lvlId] ?? 0;
            const isNoHint = isCompleted && !isAnswerShown && hintsUsed === 0;

            return (
              <div
                key={`map-node-${lvlId}`}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 z-20"
                style={{ left: `${point.x}px`, top: `${point.y}px` }}
              >
                <button
                  id={`map_level_node_${lvlId}`}
                  onClick={() => handleNodeClick(lvlId, point.x, point.y)}
                  className={`relative flex flex-col items-center justify-center rounded-full transition-all select-none ${
                    isBoss
                      ? isCurrent
                        ? "w-16 h-16 bg-gradient-to-tr from-[#B45309] via-[#D97706] to-[#FDE047] text-white shadow-xl shadow-amber-950/40 ring-4 ring-[#FDE047] ring-offset-2 ring-offset-[#FAF3E3] border-b-4 border-[#78350F] active:border-b-0 active:translate-y-1 scale-110 cursor-pointer"
                        : isCompleted
                        ? "w-15 h-15 bg-gradient-to-tr from-[#FEF08A] to-[#FDE047] border-3 border-[#CA8A04] border-b-4 border-b-[#854D0E] text-[#451A03] shadow-md shadow-amber-950/20 active:border-b-0 active:translate-y-1 cursor-pointer"
                        : isUnlocked
                        ? "w-15 h-15 bg-[#FEF3C7] border-3 border-[#D97706] border-b-4 border-b-[#92400E] text-[#78350F] shadow-sm active:border-b-0 active:translate-y-1 cursor-pointer"
                        : "w-14 h-14 bg-[#E7DEC8] border-3 border-[#C9AD84] border-b-4 border-b-[#8C7E6A] text-[#8C7E6A] cursor-pointer active:scale-95"
                      : isCurrent
                      ? "w-14 h-14 bg-gradient-to-tr from-[#B45309] via-[#D97706] to-[#F59E0B] text-white shadow-xl shadow-amber-950/40 ring-4 ring-[#FBBF24]/80 ring-offset-2 ring-offset-[#FAF3E3] border-b-4 border-[#78350F] active:border-b-0 active:translate-y-1 scale-105 cursor-pointer"
                      : isCompleted
                      ? isAnswerShown
                        ? "w-13 h-13 bg-[#F0FDF4] hover:bg-[#DCFCE7] border-2 border-[#16A34A] border-b-4 border-b-[#15803D] text-[#14532D] shadow-xs active:border-b-0 active:translate-y-1 cursor-pointer"
                        : `w-13 h-13 ${nodeTheme.mainBg} hover:opacity-95 border-2 ${nodeTheme.border} border-b-4 border-b-[#8C6239] ${nodeTheme.text} shadow-xs active:border-b-0 active:translate-y-1 cursor-pointer`
                      : isUnlocked
                      ? `w-13 h-13 ${nodeTheme.mainBg} hover:opacity-90 border-2 ${nodeTheme.border50} border-b-4 border-b-[#C9AD84] ${nodeTheme.text} shadow-xs active:border-b-0 active:translate-y-1 cursor-pointer`
                      : "w-12 h-12 bg-[#E7DEC8] border-2 border-[#C9AD84] border-b-4 border-b-[#8C7E6A] text-[#8C7E6A] cursor-pointer active:scale-95"
                  }`}
                  aria-label={`Level ${lvlId}${
                    isCompleted ? (isAnswerShown ? " Answer Shown" : " Completed") : isCurrent ? " Current" : !isUnlocked ? " Locked" : ""
                  }`}
                >
                  {/* Inner top gloss shine */}
                  <div className="absolute top-1 left-2.5 right-2.5 h-2 rounded-full bg-white/35 pointer-events-none" />

                  {/* Boss / Milestone Crest on Level 20, 40, 60... */}
                  {isBoss && (
                    <div
                      className="absolute -top-3 left-1/2 -translate-x-1/2 px-2 py-0.2 bg-gradient-to-r from-[#B45309] to-[#D97706] border border-[#FEF08A] rounded-full flex items-center gap-0.5 shadow-xs"
                      title="Territory Milestone"
                    >
                      <Crown className="w-2.5 h-2.5 text-[#FEF08A] fill-[#FDE047]" />
                      <span className="text-[7.5px] font-explorer font-black text-[#FEF08A] uppercase tracking-wider">
                        CHEST
                      </span>
                    </div>
                  )}

                  {/* Current Level: Animated "YOU" Explorer Pin */}
                  {isCurrent && (
                    <div className="absolute -top-8.5 left-1/2 -translate-x-1/2 flex flex-col items-center pointer-events-none z-30 animate-bounce">
                      <div className="flex items-center gap-1 px-2.5 py-0.5 bg-[#451A03] text-[9px] font-explorer font-black text-[#FEF08A] rounded-full shadow-md tracking-wider uppercase border border-[#FDE047]">
                        <Compass className="w-2.5 h-2.5 text-[#FDE047] animate-spin" style={{ animationDuration: "5s" }} />
                        <span>YOU</span>
                      </div>
                      <div className="w-1.5 h-1.5 bg-[#451A03] rotate-45 -mt-1 border-r border-b border-[#FDE047]" />
                    </div>
                  )}

                  {/* Distinct Answer Shown Badge: Eye Icon */}
                  {isCompleted && isAnswerShown && (
                    <div
                      className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-[#DCFCE7] border border-[#16A34A] rounded-full flex items-center justify-center shadow-2xs"
                      title="Answer Shown (Zero coins earned)"
                    >
                      <Eye className="w-2.5 h-2.5 text-[#15803D] stroke-[2.4]" />
                    </div>
                  )}

                  {/* Solved by Player Badge: Gold Star Icon */}
                  {isCompleted && !isAnswerShown && (
                    <div
                      className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-[#FEF3C7] border border-[#D97706] rounded-full flex items-center justify-center shadow-2xs"
                      title={isNoHint ? "Solved without clues" : "Solved"}
                    >
                      <Star
                        className={`w-3 h-3 ${
                          isNoHint
                            ? "text-[#D97706] fill-[#F59E0B]"
                            : "text-[#D97706] fill-[#FCD34D]"
                        }`}
                      />
                    </div>
                  )}

                  {/* Node Content */}
                  {!isUnlocked ? (
                    <>
                      <Lock className="w-3.5 h-3.5 text-[#8C7E6A] stroke-[2.2]" />
                      <span className="text-[10px] font-heading font-bold text-[#8C7E6A] leading-none mt-0.5">
                        {lvlId}
                      </span>
                    </>
                  ) : (
                    <>
                      <span
                        className={`font-explorer ${
                          isBoss
                            ? "text-sm sm:text-base font-black text-[#451A03] drop-shadow-2xs"
                            : isCurrent
                            ? "text-base font-black text-white"
                            : isAnswerShown
                            ? "text-xs font-bold text-[#14532D]"
                            : `text-xs font-bold ${nodeTheme.text}`
                        }`}
                      >
                        {lvlId}
                      </span>
                      {isAnswerShown && (
                        <span className="text-[7px] font-extrabold text-[#15803D] uppercase -mt-0.5 leading-none">
                          Revealed
                        </span>
                      )}
                    </>
                  )}
                </button>
              </div>
            );
          })}

          {/* TRAILHEAD START BASECAMP (Bottom of Map, Level 1) */}
          <div
            className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center select-none pointer-events-none z-10"
            style={{ top: `${totalMapHeight - 85}px` }}
          >
            <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#FAF3E3] via-[#FEF3C7] to-[#FAF3E3] border-2 border-[#16A34A] rounded-2xl shadow-md text-xs font-explorer font-extrabold text-[#14532D]">
              <div className="w-5 h-5 rounded-full bg-[#DCFCE7] flex items-center justify-center border border-[#16A34A]">
                <Flag className="w-3 h-3 text-[#16A34A]" />
              </div>
              <span>Start • Level 1</span>
            </div>
          </div>

          {/* LOCKED TOOLTIP */}
          {lockedTooltip && (
            <div
              className="absolute z-40 transform -translate-x-1/2 -translate-y-full mb-3 pointer-events-none animate-in fade-in zoom-in-95 duration-150"
              style={{
                left: `${lockedTooltip.x}px`,
                top: `${lockedTooltip.y - 32}px`,
              }}
            >
              <div className={`relative px-3.5 py-2 bg-[#451A03] text-[#FEF3C7] border ${currentTheme.border} rounded-xl shadow-xl text-xs font-explorer font-semibold flex items-center gap-2 whitespace-nowrap`}>
                <Lock className="w-3.5 h-3.5 text-[#FBBF24] shrink-0" />
                <span>Solve Level {lockedTooltip.requiredLevel} to unlock</span>
                <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-0.5 border-4 border-transparent border-t-[#451A03]" />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* FLOATING "JUMP TO CURRENT" FAB */}
      {showJumpToCurrent && (
        <button
          onClick={handleJumpToCurrent}
          className="absolute bottom-5 right-4 z-40 flex items-center gap-1.5 px-4 py-2.5 bg-gradient-to-r from-[#451A03] to-[#5B2609] border-2 border-[#D97706] hover:brightness-110 text-[#FEF3C7] rounded-full shadow-xl active:scale-95 transition-all text-xs font-explorer font-bold animate-in fade-in slide-in-from-bottom-3 cursor-pointer"
          aria-label="Go to Current Level"
        >
          <Compass className="w-4 h-4 text-[#FBBF24] animate-spin-slow" />
          <span>Level {progress.unlockedLevel}</span>
        </button>
      )}

      {/* FAB: Daily Spin */}
      <div className="absolute bottom-20 left-4 z-40">
        <button
          onClick={() => {
            sound.playTap();
            setShowSpinWheel(true);
          }}
          className="flex items-center gap-2 px-3 py-2.5 bg-gradient-to-tr from-[#D97706] to-[#F59E0B] border-2 border-[#FEF3C7] rounded-full shadow-lg shadow-amber-950/20 active:scale-95 transition-all text-[#451A03] font-bold text-xs cursor-pointer"
        >
          <Gift className="w-4 h-4" />
          <span className="font-heading tracking-wide">Spin</span>
        </button>
      </div>

      {/* FAB: Jump to Level */}
      <div className="absolute bottom-20 right-4 z-40">
        <button
          onClick={() => {
            sound.playTap();
            setShowJumpModal(true);
          }}
          className={`w-10 h-10 flex items-center justify-center ${currentTheme.mainBg} border-2 ${currentTheme.border50} rounded-full shadow-lg shadow-amber-950/20 active:scale-95 transition-all text-[#78350F] cursor-pointer`}
        >
          <Search className="w-4 h-4" />
        </button>
      </div>

      {/* BOTTOM MINI LEGEND */}
      <footer className={`sticky bottom-0 z-30 w-full ${currentTheme.mainBg95} backdrop-blur-md border-t-2 ${currentTheme.border30} px-4 py-2 flex items-center justify-around text-[10px] text-[#78350F] font-semibold`}>
        <div className="flex items-center gap-1">
          <Star className="w-3 h-3 text-[#D97706] fill-[#F59E0B]" />
          <span>{solvedCount} Solved</span>
        </div>
        {revealedCount > 0 && (
          <div className="flex items-center gap-1">
            <Eye className="w-3 h-3 text-[#15803D] stroke-[2.2]" />
            <span>{revealedCount} Revealed</span>
          </div>
        )}
        <div className="flex items-center gap-1">
          <div className="w-2.5 h-2.5 rounded-full bg-[#D97706] ring-2 ring-[#FBBF24]" />
          <span>Current ({progress.unlockedLevel})</span>
        </div>
        <div className="flex items-center gap-1">
          <Lock className="w-3 h-3 text-[#8C7E6A]" />
          <span>Locked</span>
        </div>
      </footer>
      {/* Modals */}
      <SpinWheelModal
        isOpen={showSpinWheel}
        onClose={() => setShowSpinWheel(false)}
        progress={progress}
        onReward={(coins) => {
          if (onUpdateProgress) {
            onUpdateProgress({
              ...progress,
              coins: progress.coins + coins,
            });
          }
        }}
      />
      
      <JumpToLevelModal
        isOpen={showJumpModal}
        onClose={() => setShowJumpModal(false)}
        onJump={(lvl) => {
          const pt = getLevelPoint(lvl);
          if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollTo({
              top: pt.y - window.innerHeight / 2,
              behavior: "smooth"
            });
          }
        }}
        unlockedLevel={progress.unlockedLevel}
      />
    </div>
  );
};
