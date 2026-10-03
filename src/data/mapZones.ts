export interface MapZone {
  id: number;
  name: string;
  tagline: string;
  startLevel: number;
  endLevel: number;
  accentColor: string; // Tailwind color class or hex
  badgeBg: string;
  badgeBorder: string;
  textColor: string;
}

export interface MapSceneryItem {
  id: string;
  levelAnchor: number; // Anchor level for vertical coordinate
  side: "left" | "right";
  type:
    | "cottage"
    | "trees"
    | "rocks"
    | "windmill"
    | "mushrooms"
    | "beehive"
    | "monolith"
    | "cloud"
    | "pond"
    | "campfire"
    | "cairn"
    | "observatory"
    | "summit";
  label?: string;
}

export const MAP_ZONES: MapZone[] = [
  {
    id: 1,
    name: "Coral Beach",
    tagline: "Sandy beach & fun puzzles",
    startLevel: 1,
    endLevel: 20,
    accentColor: "emerald",
    badgeBg: "bg-emerald-50",
    badgeBorder: "border-emerald-300",
    textColor: "text-emerald-900",
  },
  {
    id: 2,
    name: "Desert Dunes",
    tagline: "Pyramids & desert puzzles",
    startLevel: 21,
    endLevel: 40,
    accentColor: "amber",
    badgeBg: "bg-amber-50",
    badgeBorder: "border-amber-300",
    textColor: "text-amber-900",
  },
  {
    id: 3,
    name: "Blue Ocean",
    tagline: "Deep water & sea puzzles",
    startLevel: 41,
    endLevel: 60,
    accentColor: "sky",
    badgeBg: "bg-sky-50",
    badgeBorder: "border-sky-300",
    textColor: "text-sky-900",
  },
  {
    id: 4,
    name: "Lava Volcano",
    tagline: "Hot magma & fire puzzles",
    startLevel: 61,
    endLevel: 80,
    accentColor: "rose",
    badgeBg: "bg-rose-50",
    badgeBorder: "border-rose-300",
    textColor: "text-rose-900",
  },
  {
    id: 5,
    name: "Magic Forest",
    tagline: "Glowing trees & secret woods",
    startLevel: 81,
    endLevel: 100,
    accentColor: "purple",
    badgeBg: "bg-purple-50",
    badgeBorder: "border-purple-300",
    textColor: "text-purple-900",
  },
  {
    id: 6,
    name: "Snow Mountain",
    tagline: "Ice caves & snowy trails",
    startLevel: 101,
    endLevel: 120,
    accentColor: "cyan",
    badgeBg: "bg-cyan-50",
    badgeBorder: "border-cyan-300",
    textColor: "text-cyan-900",
  },
  {
    id: 7,
    name: "Rocky Canyon",
    tagline: "Red rocks & canyon river",
    startLevel: 121,
    endLevel: 140,
    accentColor: "orange",
    badgeBg: "bg-orange-50",
    badgeBorder: "border-orange-300",
    textColor: "text-orange-900",
  },
  {
    id: 8,
    name: "Gear Factory",
    tagline: "Moving gears & iron machines",
    startLevel: 141,
    endLevel: 160,
    accentColor: "slate",
    badgeBg: "bg-slate-100",
    badgeBorder: "border-slate-300",
    textColor: "text-slate-900",
  },
  {
    id: 9,
    name: "Star Sky",
    tagline: "Twinkling stars & night sky",
    startLevel: 161,
    endLevel: 180,
    accentColor: "indigo",
    badgeBg: "bg-indigo-50",
    badgeBorder: "border-indigo-300",
    textColor: "text-indigo-900",
  },
  {
    id: 10,
    name: "Golden Peak",
    tagline: "Final golden treasure mountain",
    startLevel: 181,
    endLevel: 200,
    accentColor: "yellow",
    badgeBg: "bg-yellow-50",
    badgeBorder: "border-yellow-300",
    textColor: "text-yellow-900",
  },
];

export const MAP_SCENERY_ITEMS: MapSceneryItem[] = [
  // Zone 1: Coral Beach (1-20)
  { id: "scenery-1", levelAnchor: 4, side: "left", type: "trees", label: "Palm Grove" },
  { id: "scenery-2", levelAnchor: 10, side: "right", type: "beehive", label: "Wild Bees" },
  { id: "scenery-3", levelAnchor: 16, side: "left", type: "cottage", label: "Beach Hut" },

  // Zone 2: Desert Dunes (21-40)
  { id: "scenery-4", levelAnchor: 26, side: "right", type: "rocks", label: "Dune Arch" },
  { id: "scenery-5", levelAnchor: 34, side: "left", type: "campfire", label: "Camp" },

  // Zone 3: Blue Ocean (41-60)
  { id: "scenery-6", levelAnchor: 46, side: "left", type: "pond", label: "Coral Reef" },
  { id: "scenery-7", levelAnchor: 54, side: "right", type: "rocks", label: "Sea Rocks" },

  // Zone 4: Lava Volcano (61-80)
  { id: "scenery-8", levelAnchor: 66, side: "right", type: "rocks", label: "Lava Rocks" },
  { id: "scenery-9", levelAnchor: 74, side: "left", type: "campfire", label: "Lava Fire" },

  // Zone 5: Magic Forest (81-100)
  { id: "scenery-10", levelAnchor: 86, side: "left", type: "mushrooms", label: "Magic Mushrooms" },
  { id: "scenery-11", levelAnchor: 94, side: "right", type: "trees", label: "Tall Pines" },

  // Zone 6: Snow Mountain (101-120)
  { id: "scenery-12", levelAnchor: 106, side: "right", type: "cottage", label: "Snow Cabin" },
  { id: "scenery-13", levelAnchor: 114, side: "left", type: "cairn", label: "Stone Marker" },

  // Zone 7: Rocky Canyon (121-140)
  { id: "scenery-14", levelAnchor: 126, side: "left", type: "rocks", label: "Canyon Wall" },
  { id: "scenery-15", levelAnchor: 134, side: "right", type: "windmill", label: "Windmill" },

  // Zone 8: Gear Factory (141-160)
  { id: "scenery-16", levelAnchor: 146, side: "right", type: "monolith", label: "Iron Pillar" },
  { id: "scenery-17", levelAnchor: 154, side: "left", type: "windmill", label: "Water Wheel" },

  // Zone 9: Star Sky (161-180)
  { id: "scenery-18", levelAnchor: 166, side: "left", type: "observatory", label: "Stargazer Dome" },
  { id: "scenery-19", levelAnchor: 174, side: "right", type: "monolith", label: "Moon Pillar" },

  // Zone 10: Golden Peak (181-200)
  { id: "scenery-20", levelAnchor: 186, side: "left", type: "cloud", label: "Sky Clouds" },
  { id: "scenery-21", levelAnchor: 196, side: "right", type: "summit", label: "Gold Temple" },
];

export function getZoneForLevel(level: number): MapZone {
  const safeLevel = Math.max(1, Math.min(200, level));
  const zone = MAP_ZONES.find((z) => safeLevel >= z.startLevel && safeLevel <= z.endLevel);
  return zone || MAP_ZONES[0];
}
