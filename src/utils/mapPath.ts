export interface MapPoint {
  levelId: number;
  x: number;
  y: number;
}

export const MAP_CONFIG = {
  // Width of the SVG canvas and coordinate space
  WIDTH: 390,
  CENTER_X: 195,
  // Horizontal amplitude of the winding S-curve
  AMPLITUDE: 108,
  // Vertical spacing between consecutive levels
  STEP_Y: 96,
  // Top padding (space for summit banners & level 200)
  TOP_PADDING: 180,
  // Bottom padding (space for level 1 start milestone)
  BOTTOM_PADDING: 160,
  TOTAL_LEVELS: 200,
};

/**
 * Calculates total map height in pixels
 */
export function getMapHeight(): number {
  return (
    (MAP_CONFIG.TOTAL_LEVELS - 1) * MAP_CONFIG.STEP_Y +
    MAP_CONFIG.TOP_PADDING +
    MAP_CONFIG.BOTTOM_PADDING
  );
}

/**
 * Calculates deterministic (x, y) coordinates for a given level node.
 * Level 1 is positioned near the bottom, Level 200 at the top.
 */
export function getLevelPoint(levelId: number): MapPoint {
  const { TOTAL_LEVELS, STEP_Y, TOP_PADDING, CENTER_X, AMPLITUDE } = MAP_CONFIG;
  // Clamped level
  const lvl = Math.max(1, Math.min(TOTAL_LEVELS, levelId));
  
  // y: Level 200 is at top (TOP_PADDING), Level 1 is near the bottom
  const y = (TOTAL_LEVELS - lvl) * STEP_Y + TOP_PADDING;
  
  // x: Smooth continuous S-curve oscillation.
  // 0.72 rad per level creates a gentle meander looping every ~8.7 levels
  const x = Math.round(CENTER_X + Math.sin((lvl - 1) * 0.72) * AMPLITUDE);
  
  return { levelId: lvl, x, y };
}

/**
 * Pre-computes all 200 level points ordered from level 1 (bottom) to level 200 (top)
 */
export function getAllMapPoints(): MapPoint[] {
  const points: MapPoint[] = [];
  for (let i = 1; i <= MAP_CONFIG.TOTAL_LEVELS; i++) {
    points.push(getLevelPoint(i));
  }
  return points;
}

/**
 * Generates an SVG path 'd' string connecting all points with smooth vertical-tangent cubic bezier curves.
 * The path is constructed from level 1 (bottom) up to upToLevel.
 */
export function generateSvgPath(points: MapPoint[], upToLevel: number = 200): string {
  if (points.length === 0) return "";
  const filtered = points.filter((p) => p.levelId <= upToLevel);
  if (filtered.length < 2) return "";

  // Start at level 1
  let d = `M ${filtered[0].x} ${filtered[0].y}`;

  for (let i = 0; i < filtered.length - 1; i++) {
    const p1 = filtered[i];
    const p2 = filtered[i + 1];
    const dy = p2.y - p1.y; // Negative since climbing upwards

    // S-curve cubic control points with vertical tangents for seamless looping
    const cp1x = p1.x;
    const cp1y = Math.round(p1.y + dy * 0.5);
    const cp2x = p2.x;
    const cp2y = Math.round(p2.y - dy * 0.5);

    d += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${p2.x} ${p2.y}`;
  }

  return d;
}
