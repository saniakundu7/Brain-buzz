import { PuzzleLevel } from '../types';

export const levelsPart3: PuzzleLevel[] = [
  {
    "id": 51,
    "type": "tap",
    "title": "The Fake Shadow",
    "instruction": "Which tree casts the wrong shadow?",
    "sceneConfig": {
      "background": "#FFFDF9",
      "items": [
        {
          "id": "tree_left",
          "shape": "circle",
          "text": "🌲",
          "label": "Ponderosa West",
          "x": 22,
          "y": 40,
          "size": 60,
          "color": "#15803D"
        },
        {
          "id": "tree_right",
          "shape": "circle",
          "text": "🌲",
          "label": "Ponderosa East",
          "x": 78,
          "y": 40,
          "size": 60,
          "color": "#15803D"
        },
        {
          "id": "tree_center_fake",
          "shape": "circle",
          "text": "🌲",
          "label": "Ponderosa Prime",
          "x": 50,
          "y": 40,
          "size": 60,
          "color": "#15803D",
          "isTarget": true
        },
        {
          "id": "stone_shadow",
          "shape": "circle",
          "text": "🪨",
          "label": "Field Stone",
          "x": 50,
          "y": 75,
          "size": 45,
          "color": "#64748B"
        }
      ]
    },
    "answer": "tree_center_fake",
    "hint1": "A solitary celestial sunbeam can only project cast shadows in uniform parallel vectors.",
    "hint2": "The central pine casts twin shadows sprawling in contradictory directions.",
    "explanation": "Under a single sun, shadows must cast in one direction. The middle tree had two diverging shadows!",
    "reward": 15
  },
  {
    "id": 52,
    "type": "math",
    "title": "Fraction Trap",
    "instruction": "Which is bigger: 3/4 or 5/8?",
    "sceneConfig": {
      "background": "#FFFDF9",
      "items": [
        {
          "id": "fraction_a",
          "shape": "box",
          "text": "3/4",
          "label": "Allotment Alpha",
          "x": 30,
          "y": 40,
          "size": 70,
          "color": "#F59E0B"
        },
        {
          "id": "fraction_b",
          "shape": "box",
          "text": "5/8",
          "label": "Allotment Beta",
          "x": 70,
          "y": 40,
          "size": 70,
          "color": "#3B82F6"
        }
      ],
      "options": [
        {
          "id": "opt_3_4",
          "text": "The 3/4 Allotment",
          "isCorrect": true
        },
        {
          "id": "opt_5_8",
          "text": "The 5/8 Allotment"
        },
        {
          "id": "opt_equal",
          "text": "Both Claims are Equal"
        },
        {
          "id": "opt_slope",
          "text": "Depends on Terrain Slope"
        }
      ]
    },
    "answer": "opt_3_4",
    "hint1": "Convert both fractions to eighths.",
    "hint2": "In eighths, 3/4 equals 6/8, which is more than 5/8.",
    "explanation": "3/4 = 6/8, which is larger than 5/8! 6 out of 8 is more than 5 out of 8.",
    "reward": 15
  },
  {
    "id": 53,
    "type": "multi-tap",
    "title": "Count the Squares",
    "instruction": "How many squares are there in total?",
    "sceneConfig": {
      "background": "#FFFDF9",
      "items": [
        {
          "id": "grid_drawing",
          "shape": "box",
          "text": "🔲",
          "label": "3x3 Masonry",
          "x": 50,
          "y": 35,
          "size": 90,
          "color": "#64748B"
        }
      ],
      "options": [
        {
          "id": "opt_9",
          "text": "9 Squares"
        },
        {
          "id": "opt_12",
          "text": "12 Squares"
        },
        {
          "id": "opt_14",
          "text": "14 Squares",
          "isCorrect": true
        },
        {
          "id": "opt_16",
          "text": "16 Squares"
        }
      ]
    },
    "answer": "opt_14",
    "hint1": "Sum the squares of the dimensional increments from unit size to boundary.",
    "hint2": "Calculate 1² + 2² + 3² = 1 + 4 + 9 = 14 total squares.",
    "explanation": "There are 9 (1x1) squares, 4 (2x2) overlapping squares, and 1 (3x3) enclosing square, equaling 14 in total!",
    "reward": 15
  },
  {
    "id": 54,
    "type": "drag",
    "title": "The Right Puzzle Piece",
    "instruction": "Place the missing roof piece.",
    "sceneConfig": {
      "background": "#FFFDF9",
      "items": [
        {
          "id": "house_base",
          "shape": "box",
          "text": "🏠",
          "label": "Sanctuary Frame",
          "x": 50,
          "y": 30,
          "size": 85,
          "color": "#E2E8F0"
        },
        {
          "id": "piece_square",
          "shape": "box",
          "text": "🟩",
          "label": "Square Truss Decoy",
          "x": 20,
          "y": 70,
          "size": 50,
          "color": "#3B82F6",
          "draggable": true
        },
        {
          "id": "piece_triangle",
          "shape": "star",
          "text": "🔺",
          "label": "Gable Wedge",
          "x": 50,
          "y": 70,
          "size": 55,
          "color": "#EF4444",
          "draggable": true,
          "targetDropZone": "roof_zone"
        },
        {
          "id": "piece_circle",
          "shape": "circle",
          "text": "⚪",
          "label": "Arch Ring Decoy",
          "x": 80,
          "y": 70,
          "size": 50,
          "color": "#10B981",
          "draggable": true
        }
      ],
      "dropZones": [
        {
          "id": "roof_zone",
          "label": "Gable Notch",
          "x": 50,
          "y": 22,
          "width": 85,
          "height": 75,
          "acceptItemId": "piece_triangle"
        }
      ]
    },
    "answer": "roof_zone",
    "hint1": "The roofline pitch dictates the angular polygon of the required keystone.",
    "hint2": "Drag the red triangular gable wedge into the roof notch atop the building frame.",
    "explanation": "Click! The triangular gable locks into place, completing the weather-tight roof!",
    "reward": 15
  },
  {
    "id": 55,
    "type": "word",
    "title": "Double Meaning",
    "instruction": "I hold ink, but I also hold animals. What am I?",
    "sceneConfig": {
      "background": "#FFFDF9",
      "items": [
        {
          "id": "fountain_pen",
          "shape": "circle",
          "text": "🖋️",
          "label": "Scholar's Nib",
          "x": 30,
          "y": 40,
          "size": 60,
          "color": "#6366F1"
        },
        {
          "id": "animal_fence",
          "shape": "box",
          "text": "🪵",
          "label": "Pasture Rail",
          "x": 70,
          "y": 40,
          "size": 60,
          "color": "#B45309"
        }
      ],
      "options": [
        {
          "id": "opt_corral",
          "text": "Corral"
        },
        {
          "id": "opt_quill",
          "text": "Quill"
        },
        {
          "id": "opt_pen",
          "text": "Pen",
          "isCorrect": true
        },
        {
          "id": "opt_stall",
          "text": "Stall"
        }
      ]
    },
    "answer": "opt_pen",
    "hint1": "A single syllable bridges the scholar's desk and the rancher's muddy paddock.",
    "hint2": "Constructed of split-rail fencing for livestock, or filled with fluid pigment for manuscripts.",
    "explanation": "'Pen' refers both to a writing instrument filled with ink and an outdoor fenced enclosure for livestock!",
    "reward": 15
  },
  {
    "id": 56,
    "type": "choice",
    "title": "The Bridge Crossing",
    "instruction": "What's the fastest they can cross the bridge?",
    "sceneConfig": {
      "background": "#FFFDF9",
      "items": [
        {
          "id": "lantern",
          "shape": "circle",
          "text": "🏮",
          "label": "Field Lantern",
          "x": 30,
          "y": 40,
          "size": 60,
          "color": "#F59E0B"
        },
        {
          "id": "travelers",
          "shape": "box",
          "text": "👥",
          "label": "Wanderers",
          "x": 70,
          "y": 40,
          "size": 65,
          "color": "#64748B"
        }
      ],
      "options": [
        {
          "id": "opt_19",
          "text": "19 minutes"
        },
        {
          "id": "opt_17",
          "text": "17 minutes",
          "isCorrect": true
        },
        {
          "id": "opt_21",
          "text": "21 minutes"
        },
        {
          "id": "opt_15",
          "text": "15 minutes"
        }
      ]
    },
    "answer": "opt_17",
    "hint1": "Pair the two slowest wanderers together on a single leg so their delays overlap.",
    "hint2": "1&2 cross (2), 1 returns (1), 5&10 cross (10), 2 returns (2), 1&2 cross (2): 2 + 1 + 10 + 2 + 2 = 17!",
    "explanation": "Sending 5 and 10 together saves time: 1 and 2 cross (2), 1 returns (1), 5 and 10 cross (10), 2 returns (2), 1 and 2 cross (2) = 17 min!",
    "reward": 15
  },
  {
    "id": 57,
    "type": "hidden-object",
    "title": "Hidden Fish",
    "instruction": "Find the hidden animal.",
    "sceneConfig": {
      "background": "#FFFDF9",
      "items": [
        {
          "id": "seaweed_left",
          "shape": "cloud",
          "text": "🌿",
          "label": "Kelp Frond",
          "x": 18,
          "y": 45,
          "size": 60,
          "color": "#16A34A"
        },
        {
          "id": "camo_fish",
          "shape": "fish",
          "label": "Pipefish Mimic",
          "x": 42,
          "y": 52,
          "size": 36,
          "color": "#15803D",
          "isTarget": true
        },
        {
          "id": "seaweed_center",
          "shape": "cloud",
          "text": "🌿",
          "label": "Kelp Frond",
          "x": 55,
          "y": 35,
          "size": 65,
          "color": "#15803D"
        },
        {
          "id": "driftwood_spar",
          "shape": "box",
          "text": "🪵",
          "label": "Sunken Driftwood",
          "x": 70,
          "y": 70,
          "size": 48,
          "color": "#78350F"
        },
        {
          "id": "seaweed_right",
          "shape": "cloud",
          "text": "🌿",
          "label": "Kelp Frond",
          "x": 82,
          "y": 50,
          "size": 60,
          "color": "#16A34A"
        }
      ]
    },
    "answer": "camo_fish",
    "hint1": "Look for lateral eye bead and fin seam interrupting vertical kelp strands.",
    "hint2": "Just to the left of the center kelp stalk, note the slender green fish aligned with the fronds.",
    "explanation": "Sharp eyes! The pipefish blended seamlessly with the vertical green kelp fronds.",
    "reward": 15
  },
  {
    "id": 58,
    "type": "visual",
    "title": "Impossible Triangle",
    "instruction": "Tap the impossible corner.",
    "sceneConfig": {
      "background": "#FFFDF9",
      "items": [
        {
          "id": "corner_top",
          "shape": "star",
          "label": "Apex Junction",
          "x": 50,
          "y": 22,
          "size": 55,
          "color": "#6366F1"
        },
        {
          "id": "corner_bl",
          "shape": "star",
          "label": "Left Footing",
          "x": 25,
          "y": 65,
          "size": 55,
          "color": "#6366F1"
        },
        {
          "id": "corner_impossible",
          "shape": "star",
          "label": "Contradiction Joint",
          "x": 75,
          "y": 65,
          "size": 55,
          "color": "#DC2626",
          "isTarget": true
        },
        {
          "id": "perspective_plinth",
          "shape": "box",
          "text": "📐",
          "label": "Drafting Plinth",
          "x": 50,
          "y": 82,
          "size": 45,
          "color": "#94A3B8"
        }
      ]
    },
    "answer": "corner_impossible",
    "hint1": "Trace beam depth planes continuously from foreground to background.",
    "hint2": "The lower-right corner forces a beam in front of another beam that should physically pass behind it.",
    "explanation": "The lower-right corner creates an optical illusion by connecting lines that could not touch in real life!",
    "reward": 15
  },
  {
    "id": 59,
    "type": "sequence",
    "title": "Recipe Order",
    "instruction": "Cook the egg.",
    "sceneConfig": {
      "background": "#FFFDF9",
      "items": [
        {
          "id": "step_mix",
          "shape": "circle",
          "text": "🥣",
          "label": "Combine Dry/Wet",
          "x": 18,
          "y": 40,
          "size": 58,
          "color": "#F59E0B"
        },
        {
          "id": "step_bake",
          "shape": "fire",
          "text": "🔥",
          "label": "Bake in Oven",
          "x": 42,
          "y": 65,
          "size": 58,
          "color": "#EF4444"
        },
        {
          "id": "step_pour",
          "shape": "cup",
          "text": "🫗",
          "label": "Fill Cake Pan",
          "x": 68,
          "y": 65,
          "size": 58,
          "color": "#3B82F6"
        },
        {
          "id": "step_preheat",
          "shape": "sun",
          "text": "🌡️",
          "label": "Preheat Hearth",
          "x": 82,
          "y": 35,
          "size": 58,
          "color": "#F97316"
        },
        {
          "id": "step_frost",
          "shape": "star",
          "text": "🧁",
          "label": "Sugar Glaze Decoy",
          "x": 50,
          "y": 30,
          "size": 48,
          "color": "#EC4899"
        }
      ],
      "sequenceTargets": [
        "step_preheat",
        "step_mix",
        "step_pour",
        "step_bake"
      ]
    },
    "answer": [
      "step_preheat",
      "step_mix",
      "step_pour",
      "step_bake"
    ],
    "hint1": "The oven must be heated up before the batter goes in.",
    "hint2": "Preheat oven first, mix ingredients second, pour into pan third, and bake fourth.",
    "explanation": "Preheat, mix ingredients, pour batter, then bake! The kitchen smells heavenly.",
    "reward": 15
  },
  {
    "id": 60,
    "type": "math",
    "title": "The Missing Rupee",
    "instruction": "Where is the missing coin?",
    "sceneConfig": {
      "background": "#FFFDF9",
      "items": [
        {
          "id": "hotel_ledger",
          "shape": "box",
          "text": "📖",
          "label": "Inn Ledger",
          "x": 50,
          "y": 35,
          "size": 85,
          "color": "#92400E"
        }
      ],
      "options": [
        {
          "id": "opt_manager",
          "text": "The host kept the coin in a secret till"
        },
        {
          "id": "opt_misdirection",
          "text": "Adding the 2 coins to 27 is false accounting: 27 already includes the 2",
          "isCorrect": true
        },
        {
          "id": "opt_floor",
          "text": "The coin slipped through floorboard gaps"
        },
        {
          "id": "opt_interest",
          "text": "Bank interest reduced the balance"
        }
      ]
    },
    "answer": "opt_misdirection",
    "hint1": "Determine whether the boy's pocketed coins represent an expense or a portion of the payment already rendered.",
    "hint2": "Total paid (27) = Host's till (25) + Boy's pocket (2). Adding 2 to 27 is illogical double-counting.",
    "explanation": "The 27 paid already includes the 2 stolen by the boy (25 to hotel + 2 stolen = 27). Adding 2 to 27 makes no financial sense!",
    "reward": 15
  },
  {
    "id": 61,
    "type": "tap",
    "title": "Wrong Season",
    "instruction": "Find the flower in the snow.",
    "sceneConfig": {
      "background": "#FFFDF9",
      "items": [
        {
          "id": "snowman",
          "shape": "circle",
          "text": "⛄",
          "label": "Glacial Effigy",
          "x": 22,
          "y": 40,
          "size": 60,
          "color": "#BAE6FD"
        },
        {
          "id": "pine_tree",
          "shape": "circle",
          "text": "🌲",
          "label": "Snow Pine",
          "x": 78,
          "y": 40,
          "size": 60,
          "color": "#16A34A"
        },
        {
          "id": "ice_icicle",
          "shape": "star",
          "text": "❄️",
          "label": "Permafrost Rime",
          "x": 50,
          "y": 70,
          "size": 50,
          "color": "#93C5FD"
        },
        {
          "id": "sunflower_snow",
          "shape": "circle",
          "text": "🌻",
          "label": "Golden Helianthus",
          "x": 50,
          "y": 35,
          "size": 55,
          "color": "#F59E0B",
          "isTarget": true
        }
      ]
    },
    "answer": "sunflower_snow",
    "hint1": "Identify the high-summer sun cultivar that cannot survive freezing conditions.",
    "hint2": "The blooming yellow sunflower requires summer warmth and cannot bloom in deep snow!",
    "explanation": "A sunflower blooming out of deep snow is biologically impossible in winter!",
    "reward": 15
  },
  {
    "id": 62,
    "type": "drag",
    "title": "Route the Water",
    "instruction": "Connect the pipes.",
    "sceneConfig": {
      "background": "#FFFDF9",
      "items": [
        {
          "id": "pipe_straight",
          "shape": "box",
          "text": "Straight Conduit",
          "label": "Flanged Pipe",
          "x": 20,
          "y": 70,
          "size": 60,
          "color": "#64748B",
          "draggable": true,
          "targetDropZone": "pipe_gap_zone"
        },
        {
          "id": "pipe_blocker",
          "shape": "box",
          "text": "Deadhead Cap",
          "label": "Pressure Cap Decoy",
          "x": 50,
          "y": 70,
          "size": 50,
          "color": "#DC2626",
          "draggable": true
        },
        {
          "id": "tap_source",
          "shape": "circle",
          "text": "🚰",
          "label": "High Main",
          "x": 20,
          "y": 25,
          "size": 60,
          "color": "#0284C7"
        },
        {
          "id": "bucket_dest",
          "shape": "cup",
          "text": "🪣",
          "label": "Reservoir Cistern",
          "x": 80,
          "y": 55,
          "size": 65,
          "color": "#D97706"
        }
      ],
      "dropZones": [
        {
          "id": "pipe_gap_zone",
          "label": "Conduit Union",
          "x": 50,
          "y": 35,
          "width": 85,
          "height": 75,
          "acceptItemId": "pipe_straight"
        }
      ]
    },
    "answer": "pipe_gap_zone",
    "hint1": "Continuous fluid mechanics require bridging the open breach between pipe couplings.",
    "hint2": "Drag the straight flanged pipe directly into the central breach zone.",
    "explanation": "Clang! The conduit couples tightly, directing freshwater into the cistern!",
    "reward": 15
  },
  {
    "id": 63,
    "type": "word",
    "title": "Homophone Trap",
    "instruction": "I sound like a warrior, but I bring the dark. What am I?",
    "sceneConfig": {
      "background": "#FFFDF9",
      "items": [
        {
          "id": "armor_knight",
          "shape": "circle",
          "text": "🛡️",
          "label": "Armored Champion",
          "x": 30,
          "y": 40,
          "size": 60,
          "color": "#94A3B8"
        },
        {
          "id": "moon_night",
          "shape": "circle",
          "text": "🌌",
          "label": "Night Sky",
          "x": 70,
          "y": 40,
          "size": 60,
          "color": "#1E293B"
        }
      ],
      "options": [
        {
          "id": "opt_knit",
          "text": "Knit"
        },
        {
          "id": "opt_night",
          "text": "Night",
          "isCorrect": true
        },
        {
          "id": "opt_neat",
          "text": "Neat"
        },
        {
          "id": "opt_naught",
          "text": "Naught"
        }
      ]
    },
    "answer": "opt_night",
    "hint1": "Phonetically indistinguishable, yet celestial opposite of morning light.",
    "hint2": "The silent 'k' and 'gh' distinguish knight from dark starry night.",
    "explanation": "'Knight' and 'Night' are true homophones: spoken with identical phonemes, but vastly different meanings!",
    "reward": 15
  },
  {
    "id": 64,
    "type": "visual",
    "title": "Count the Faces",
    "instruction": "Count the hidden faces.",
    "sceneConfig": {
      "background": "#FFFDF9",
      "items": [
        {
          "id": "cloud_profile",
          "shape": "cloud",
          "text": "Face I",
          "label": "Vapor Brow",
          "x": 30,
          "y": 25,
          "size": 60,
          "color": "#CBD5E1"
        },
        {
          "id": "tree_bark_profile",
          "shape": "box",
          "text": "Face II",
          "label": "Bark Contour",
          "x": 70,
          "y": 45,
          "size": 60,
          "color": "#78350F"
        },
        {
          "id": "rock_formation",
          "shape": "circle",
          "text": "Face III",
          "label": "Cliff Profile",
          "x": 35,
          "y": 68,
          "size": 60,
          "color": "#64748B"
        },
        {
          "id": "moss_knot",
          "shape": "circle",
          "text": "Knot",
          "label": "Lichen Scar Decoy",
          "x": 75,
          "y": 75,
          "size": 45,
          "color": "#15803D"
        }
      ],
      "options": [
        {
          "id": "opt_2",
          "text": "2 Profiles"
        },
        {
          "id": "opt_3",
          "text": "3 Profiles",
          "isCorrect": true
        },
        {
          "id": "opt_4",
          "text": "4 Profiles"
        },
        {
          "id": "opt_5",
          "text": "5 Profiles"
        }
      ]
    },
    "answer": "opt_3",
    "hint1": "Look for nose bridges, eye brows, and jawline contours sculpted into rock, vapor, and wood.",
    "hint2": "Exactly 3 distinct profiles: one in the cliff rock, one in the cloud, and one carved into tree bark.",
    "explanation": "Three distinct facial profiles are sculpted into nature: one in the clouds, one on the cliff, and one on the oak trunk!",
    "reward": 15
  },
  {
    "id": 65,
    "type": "choice",
    "title": "The Camel Problem",
    "instruction": "How is the 17-animal inheritance solved?",
    "sceneConfig": {
      "background": "#FFFDF9",
      "items": [
        {
          "id": "camel_flock",
          "shape": "circle",
          "text": "🐪",
          "label": "Caravan Flock",
          "x": 50,
          "y": 35,
          "size": 85,
          "color": "#D97706"
        }
      ],
      "options": [
        {
          "id": "opt_fractions",
          "text": "1/2 + 1/3 + 1/9 sums to 17/18, leaving 1/18 unallocated—the loaned beast resolved the deficit",
          "isCorrect": true
        },
        {
          "id": "opt_profit",
          "text": "The magistrate extracted hidden interest from the settlement"
        },
        {
          "id": "opt_shorted",
          "text": "The youngest heir received less than his statutory share"
        },
        {
          "id": "opt_mirage",
          "text": "Desert thermal distortion fabricated an extra animal"
        }
      ]
    },
    "answer": "opt_fractions",
    "hint1": "Add up the three fractions: 1/2 + 1/3 + 1/9.",
    "hint2": "9/18 + 6/18 + 2/18 = 17/18! The fractions do not add up to the whole number.",
    "explanation": "Because 1/2 + 1/3 + 1/9 = 17/18, exactly 1/18 was leftover! The extra animal made dividing easy without any remainder.",
    "reward": 15
  },
  {
    "id": 66,
    "type": "hidden-object",
    "title": "Hidden Moon",
    "instruction": "Find the moon.",
    "sceneConfig": {
      "background": "#FFFDF9",
      "items": [
        {
          "id": "night_cloud_1",
          "shape": "cloud",
          "label": "Night Cloud",
          "x": 25,
          "y": 35,
          "size": 70,
          "color": "#334155"
        },
        {
          "id": "night_stars",
          "shape": "star",
          "text": "✨",
          "label": "Stars",
          "x": 75,
          "y": 25,
          "size": 50,
          "color": "#FEF08A"
        },
        {
          "id": "crescent_moon",
          "shape": "circle",
          "text": "🌙",
          "label": "Crescent Moon",
          "x": 58,
          "y": 42,
          "size": 30,
          "color": "#FDE047",
          "isTarget": true
        },
        {
          "id": "meteor_streak",
          "shape": "star",
          "text": "💫",
          "label": "Shooting Star",
          "x": 25,
          "y": 70,
          "size": 45,
          "color": "#BAE6FD"
        },
        {
          "id": "night_cloud_2",
          "shape": "cloud",
          "label": "Dark Cloud",
          "x": 75,
          "y": 65,
          "size": 70,
          "color": "#1E293B"
        }
      ]
    },
    "answer": "crescent_moon",
    "hint1": "Look for a yellow curved moon near the clouds.",
    "hint2": "Look in the middle, right next to the dark cloud.",
    "explanation": "You found the yellow crescent moon peeking through the night clouds!",
    "reward": 15
  },
  {
    "id": 67,
    "type": "math",
    "title": "Sequence Logic",
    "instruction": "What is the next number: 1, 1, 2, 3, 5, 8, ?",
    "sceneConfig": {
      "background": "#FFFDF9",
      "items": [
        {
          "id": "fib_card",
          "shape": "box",
          "text": "1, 1, 2, 3, 5, 8, ?",
          "label": "Fibonacci Tablet",
          "x": 50,
          "y": 35,
          "size": 90,
          "color": "#6366F1"
        }
      ],
      "options": [
        {
          "id": "opt_11",
          "text": "11"
        },
        {
          "id": "opt_13",
          "text": "13",
          "isCorrect": true
        },
        {
          "id": "opt_14",
          "text": "14"
        },
        {
          "id": "opt_16",
          "text": "16"
        }
      ]
    },
    "answer": "opt_13",
    "hint1": "Each subsequent term represents the sum of its two immediate predecessors.",
    "hint2": "Calculate the sum of the two preceding terms: 5 plus 8.",
    "explanation": "This is the Fibonacci sequence! Each number is the sum of the two before it: 5 + 8 = 13.",
    "reward": 15
  },
  {
    "id": 68,
    "type": "tap",
    "title": "The Odd Clock",
    "instruction": "Find the broken clock.",
    "sceneConfig": {
      "background": "#FFFDF9",
      "items": [
        {
          "id": "clock_1",
          "shape": "circle",
          "text": "🕒",
          "label": "03:00 Chronometer",
          "x": 22,
          "y": 40,
          "size": 60,
          "color": "#CBD5E1"
        },
        {
          "id": "clock_odd",
          "shape": "circle",
          "text": "🕝",
          "label": "02:30 Desync",
          "x": 50,
          "y": 40,
          "size": 60,
          "color": "#CBD5E1",
          "isTarget": true
        },
        {
          "id": "clock_3",
          "shape": "circle",
          "text": "🕒",
          "label": "03:00 Chronometer",
          "x": 78,
          "y": 40,
          "size": 60,
          "color": "#CBD5E1"
        },
        {
          "id": "pendulum_decoy",
          "shape": "box",
          "text": "⏱️",
          "label": "Pocket Timer",
          "x": 50,
          "y": 72,
          "size": 45,
          "color": "#94A3B8"
        }
      ]
    },
    "answer": "clock_odd",
    "hint1": "Scrutinize the minute indicator hands against the 12 o'clock meridian.",
    "hint2": "Two clocks register exact cardinal hour alignment; the center clock's minute hand points downward.",
    "explanation": "The center clock displays 2:30 while the outer chronometers read exactly 3:00!",
    "reward": 15
  },
  {
    "id": 69,
    "type": "drag",
    "title": "Stack the Blocks",
    "instruction": "Build a stable tower.",
    "sceneConfig": {
      "background": "#FFFDF9",
      "items": [
        {
          "id": "block_base",
          "shape": "box",
          "text": "Foundation Plinth",
          "label": "Base Tier",
          "x": 75,
          "y": 65,
          "size": 80,
          "color": "#78350F"
        },
        {
          "id": "block_top_small",
          "shape": "box",
          "text": "Capstone Block",
          "label": "Apex Stone",
          "x": 25,
          "y": 35,
          "size": 50,
          "color": "#F59E0B",
          "draggable": true,
          "targetDropZone": "plinth_zone"
        },
        {
          "id": "block_inverted",
          "shape": "star",
          "text": "Unstable Wedge",
          "label": "Tilt Wedge Decoy",
          "x": 25,
          "y": 70,
          "size": 45,
          "color": "#DC2626",
          "draggable": true
        }
      ],
      "dropZones": [
        {
          "id": "plinth_zone",
          "label": "Plinth Center",
          "x": 75,
          "y": 45,
          "width": 85,
          "height": 75,
          "acceptItemId": "block_top_small"
        }
      ]
    },
    "answer": "plinth_zone",
    "hint1": "A narrow wedge cannot balance atop an inverted footing.",
    "hint2": "Drag the small gold capstone squarely atop the heavy foundation plinth.",
    "explanation": "Solid as bedrock! The capstone crowns the foundation tier with structural elegance.",
    "reward": 15
  },
  {
    "id": 70,
    "type": "word",
    "title": "Letter Math",
    "instruction": "If CAT is 24, what is DOG?",
    "sceneConfig": {
      "background": "#FFFDF9",
      "items": [
        {
          "id": "cat_example",
          "shape": "box",
          "text": "C(3)+A(1)+T(20) = 24",
          "label": "Formula Key",
          "x": 50,
          "y": 25,
          "size": 75,
          "color": "#6366F1"
        },
        {
          "id": "dog_puzzle",
          "shape": "circle",
          "text": "🐕",
          "label": "Cipher Target",
          "x": 50,
          "y": 50,
          "size": 60,
          "color": "#F59E0B"
        }
      ],
      "options": [
        {
          "id": "opt_24",
          "text": "24"
        },
        {
          "id": "opt_25",
          "text": "25"
        },
        {
          "id": "opt_26",
          "text": "26 (D=4, O=15, G=7)",
          "isCorrect": true
        },
        {
          "id": "opt_28",
          "text": "28"
        }
      ]
    },
    "answer": "opt_26",
    "hint1": "Map each consonant and vowel of DOG to its numerical position in the alphabet.",
    "hint2": "D is 4th, O is 15th, and G is 7th. Sum them together: 4 + 15 + 7.",
    "explanation": "D = 4, O = 15, G = 7. Adding them together: 4 + 15 + 7 = 26!",
    "reward": 15
  },
  {
    "id": 71,
    "type": "visual",
    "title": "Spot the Fake Coin",
    "instruction": "Find the fake coin.",
    "sceneConfig": {
      "background": "#FFFDF9",
      "items": [
        {
          "id": "coin_1",
          "shape": "circle",
          "text": "🪙",
          "label": "Mint Specie",
          "x": 20,
          "y": 30,
          "size": 55,
          "color": "#FBBF24"
        },
        {
          "id": "coin_2",
          "shape": "circle",
          "text": "🪙",
          "label": "Mint Specie",
          "x": 40,
          "y": 30,
          "size": 55,
          "color": "#FBBF24"
        },
        {
          "id": "coin_3",
          "shape": "circle",
          "text": "🪙",
          "label": "Mint Specie",
          "x": 60,
          "y": 30,
          "size": 55,
          "color": "#FBBF24"
        },
        {
          "id": "coin_4",
          "shape": "circle",
          "text": "🪙",
          "label": "Mint Specie",
          "x": 80,
          "y": 30,
          "size": 55,
          "color": "#FBBF24"
        },
        {
          "id": "coin_5",
          "shape": "circle",
          "text": "🪙",
          "label": "Mint Specie",
          "x": 20,
          "y": 65,
          "size": 55,
          "color": "#FBBF24"
        },
        {
          "id": "coin_fake",
          "shape": "circle",
          "text": "🪙",
          "label": "Off-Gauge Specie",
          "x": 40,
          "y": 65,
          "size": 44,
          "color": "#F59E0B",
          "isTarget": true
        },
        {
          "id": "coin_7",
          "shape": "circle",
          "text": "🪙",
          "label": "Mint Specie",
          "x": 60,
          "y": 65,
          "size": 55,
          "color": "#FBBF24"
        },
        {
          "id": "coin_8",
          "shape": "circle",
          "text": "🪙",
          "label": "Mint Specie",
          "x": 80,
          "y": 65,
          "size": 55,
          "color": "#FBBF24"
        }
      ]
    },
    "answer": "coin_fake",
    "hint1": "Diameter tolerance tolerances reveal illicit counterfeit strikes.",
    "hint2": "Compare circumferences carefully; one coin is marginally shrunken in outer diameter.",
    "explanation": "Eagle-eyed appraisal! The clipped counterfeit coin is noticeably smaller than official royal specie.",
    "reward": 15
  },
  {
    "id": 72,
    "type": "choice",
    "title": "Balance Puzzle",
    "instruction": "What is the fewest weighings to find the heavy coin out of 9?",
    "sceneConfig": {
      "background": "#FFFDF9",
      "items": [
        {
          "id": "scale_balls",
          "shape": "circle",
          "text": "⚖️",
          "label": "Ternary Scale",
          "x": 50,
          "y": 35,
          "size": 85,
          "color": "#64748B"
        }
      ],
      "options": [
        {
          "id": "opt_1",
          "text": "1 Operation"
        },
        {
          "id": "opt_2",
          "text": "2 Operations",
          "isCorrect": true
        },
        {
          "id": "opt_3",
          "text": "3 Operations"
        },
        {
          "id": "opt_4",
          "text": "4 Operations"
        }
      ]
    },
    "answer": "opt_2",
    "hint1": "A balance scale has three outcomes: tilt left, tilt right, or balance even.",
    "hint2": "Partition into 3 cohorts of 3. Weigh 3 vs 3 (step 1). From the heavier trio, weigh 1 vs 1 (step 2) = 2 weighings!",
    "explanation": "By dividing into three groups of three, weighing 3 vs 3 isolates the heavy trio in 1 step, and weighing 1 vs 1 isolates the ball in step 2!",
    "reward": 15
  },
  {
    "id": 73,
    "type": "hidden-object",
    "title": "Hidden Heart",
    "instruction": "Find the hidden heart shape.",
    "sceneConfig": {
      "background": "#FFFDF9",
      "items": [
        {
          "id": "flower_left",
          "shape": "flower",
          "text": "🌸",
          "label": "Orchard Rose",
          "x": 25,
          "y": 40,
          "size": 65,
          "color": "#F472B6"
        },
        {
          "id": "hidden_heart",
          "shape": "heart",
          "label": "Petal Convergence",
          "x": 52,
          "y": 46,
          "size": 28,
          "color": "#FB7185",
          "isTarget": true
        },
        {
          "id": "flower_right",
          "shape": "flower",
          "text": "🌸",
          "label": "Orchard Rose",
          "x": 75,
          "y": 40,
          "size": 65,
          "color": "#F472B6"
        },
        {
          "id": "butterfly_mimic",
          "shape": "bee",
          "text": "🦋",
          "label": "Spotted Wing Decoy",
          "x": 50,
          "y": 72,
          "size": 45,
          "color": "#A855F7"
        }
      ]
    },
    "answer": "hidden_heart",
    "hint1": "Search where two symmetrical curved petal edges meet at a tapered lower point.",
    "hint2": "Directly in the center space between the twin blossoms, look for the rosy heart silhouette.",
    "explanation": "Found it! The gentle arch of overlapping petals forms a secret heart silhouette.",
    "reward": 15
  },
  {
    "id": 74,
    "type": "multi-tap",
    "title": "Prime Number Hunt",
    "instruction": "Pick all the prime numbers.",
    "sceneConfig": {
      "background": "#FFFDF9",
      "items": [
        {
          "id": "p_4",
          "shape": "circle",
          "text": "4",
          "label": "Composite 2x2",
          "x": 18,
          "y": 35,
          "size": 55,
          "color": "#E2E8F0"
        },
        {
          "id": "p_7",
          "shape": "circle",
          "text": "7",
          "label": "Indivisible Seven",
          "x": 42,
          "y": 35,
          "size": 55,
          "color": "#FEF08A",
          "isTarget": true
        },
        {
          "id": "p_9",
          "shape": "circle",
          "text": "9",
          "label": "Composite 3x3",
          "x": 68,
          "y": 35,
          "size": 55,
          "color": "#E2E8F0"
        },
        {
          "id": "p_11",
          "shape": "circle",
          "text": "11",
          "label": "Indivisible Eleven",
          "x": 22,
          "y": 65,
          "size": 55,
          "color": "#FEF08A",
          "isTarget": true
        },
        {
          "id": "p_15",
          "shape": "circle",
          "text": "15",
          "label": "Composite 3x5",
          "x": 50,
          "y": 65,
          "size": 55,
          "color": "#E2E8F0"
        },
        {
          "id": "p_13",
          "shape": "circle",
          "text": "13",
          "label": "Indivisible Thirteen",
          "x": 78,
          "y": 65,
          "size": 55,
          "color": "#FEF08A",
          "isTarget": true
        }
      ]
    },
    "answer": "p_7, p_11, p_13",
    "hint1": "Eliminate any integer that can be broken into factors other than 1 and itself.",
    "hint2": "4 = 2x2, 9 = 3x3, and 15 = 3x5 are composite. Tap only 7, 11, and 13.",
    "explanation": "7, 11, and 13 have no divisors other than 1 and themselves, proving their prime status!",
    "reward": 15
  },
  {
    "id": 75,
    "type": "tap",
    "title": "Which Glass is Heavier",
    "instruction": "Which glass is heavier: water or honey?",
    "sceneConfig": {
      "background": "#FFFDF9",
      "items": [
        {
          "id": "glass_water",
          "shape": "cup",
          "text": "💧",
          "label": "Spring Hydration",
          "x": 30,
          "y": 45,
          "size": 65,
          "color": "#38BDF8"
        },
        {
          "id": "glass_honey",
          "shape": "cup",
          "text": "🍯",
          "label": "Golden Honey",
          "x": 70,
          "y": 45,
          "size": 65,
          "color": "#F59E0B",
          "isTarget": true
        },
        {
          "id": "tare_scale",
          "shape": "box",
          "text": "⚖️",
          "label": "Tare Cradle Decoy",
          "x": 50,
          "y": 75,
          "size": 45,
          "color": "#94A3B8"
        }
      ]
    },
    "answer": "glass_honey",
    "hint1": "Compare the specific gravimetric mass density of water versus viscous syrup.",
    "hint2": "Honey has a density of approximately 1.42 g/cm³ compared to water's 1.00 g/cm³.",
    "explanation": "Honey is roughly 40% denser than water, making the honey goblet substantially heavier at identical volume!",
    "reward": 15
  }
];
