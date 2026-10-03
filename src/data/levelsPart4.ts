import { PuzzleLevel } from '../types';

export const levelsPart4: PuzzleLevel[] = [
  {
    "id": 76,
    "type": "drag",
    "title": "Complete the Bridge",
    "instruction": "Fix the bridge.",
    "sceneConfig": {
      "background": "#FFFDF9",
      "items": [
        {
          "id": "plank_short",
          "shape": "box",
          "text": "Under-span Plank",
          "label": "Deficient Plank Decoy",
          "x": 20,
          "y": 70,
          "size": 45,
          "color": "#92400E",
          "draggable": true
        },
        {
          "id": "plank_exact",
          "shape": "box",
          "text": "Calibrated Span",
          "label": "True Timber",
          "x": 50,
          "y": 70,
          "size": 60,
          "color": "#B45309",
          "draggable": true,
          "targetDropZone": "chasm_gap"
        },
        {
          "id": "plank_wide",
          "shape": "box",
          "text": "Over-gauge Beam",
          "label": "Bulky Beam Decoy",
          "x": 80,
          "y": 70,
          "size": 75,
          "color": "#78350F",
          "draggable": true
        },
        {
          "id": "bridge_span",
          "shape": "box",
          "text": "Chasm Abyss",
          "label": "Canyon Chasm",
          "x": 50,
          "y": 30,
          "size": 85,
          "color": "#334155"
        }
      ],
      "dropZones": [
        {
          "id": "chasm_gap",
          "label": "Structural Gap",
          "x": 50,
          "y": 30,
          "width": 85,
          "height": 75,
          "acceptItemId": "plank_exact"
        }
      ]
    },
    "answer": "chasm_gap",
    "hint1": "An under-sized timber falls through the gorge; an oversized timber fails to seat in the joists.",
    "hint2": "Drag the middle calibrated timber plank squarely into the bridge gap.",
    "explanation": "Thump! The calibrated timber seats into the bridge joists, restoring safe passage across the chasm.",
    "reward": 15
  },
  {
    "id": 77,
    "type": "word",
    "title": "Reverse Word",
    "instruction": "What is 'STRESSED' spelled backwards?",
    "sceneConfig": {
      "background": "#FFFDF9",
      "items": [
        {
          "id": "stressed_sign",
          "shape": "box",
          "text": "STRESSED",
          "label": "Cipher Banner",
          "x": 50,
          "y": 35,
          "size": 85,
          "color": "#DC2626"
        }
      ],
      "options": [
        {
          "id": "opt_desserts",
          "text": "Desserts",
          "isCorrect": true
        },
        {
          "id": "opt_distress",
          "text": "Distress"
        },
        {
          "id": "opt_dresses",
          "text": "Dresses"
        },
        {
          "id": "opt_desert",
          "text": "Desert"
        }
      ]
    },
    "answer": "opt_desserts",
    "hint1": "Read each glyph starting from terminal letter 'D' back to initial letter 'S'.",
    "hint2": "S-T-R-E-S-S-E-D backwards produces a beloved sugary post-dinner treat.",
    "explanation": "Spelled in reverse, S-T-R-E-S-S-E-D spells D-E-S-S-E-R-T-S! A sweet linguistic reversal.",
    "reward": 15
  },
  {
    "id": 78,
    "type": "visual",
    "title": "Count the Stars",
    "instruction": "Count the stars.",
    "sceneConfig": {
      "background": "#FFFDF9",
      "items": [
        {
          "id": "star_1",
          "shape": "star",
          "text": "★",
          "label": "Sirius",
          "x": 18,
          "y": 25,
          "size": 45,
          "color": "#FEF08A"
        },
        {
          "id": "star_2",
          "shape": "star",
          "text": "★",
          "label": "Vega",
          "x": 45,
          "y": 20,
          "size": 45,
          "color": "#FEF08A"
        },
        {
          "id": "star_3",
          "shape": "star",
          "text": "★",
          "label": "Altair",
          "x": 78,
          "y": 28,
          "size": 45,
          "color": "#FEF08A"
        },
        {
          "id": "star_4",
          "shape": "star",
          "text": "★",
          "label": "Rigel",
          "x": 25,
          "y": 55,
          "size": 45,
          "color": "#FEF08A"
        },
        {
          "id": "star_5",
          "shape": "star",
          "text": "★",
          "label": "Betelgeuse",
          "x": 55,
          "y": 48,
          "size": 45,
          "color": "#FEF08A"
        },
        {
          "id": "star_6",
          "shape": "star",
          "text": "★",
          "label": "Polaris",
          "x": 82,
          "y": 58,
          "size": 45,
          "color": "#FEF08A"
        },
        {
          "id": "star_7",
          "shape": "star",
          "text": "★",
          "label": "Spica",
          "x": 40,
          "y": 75,
          "size": 45,
          "color": "#FEF08A"
        },
        {
          "id": "sky_cloud",
          "shape": "cloud",
          "label": "Nebula Mist Decoy",
          "x": 65,
          "y": 72,
          "size": 55,
          "color": "#475569"
        }
      ],
      "options": [
        {
          "id": "opt_5",
          "text": "5 Stars"
        },
        {
          "id": "opt_6",
          "text": "6 Stars"
        },
        {
          "id": "opt_7",
          "text": "7 Stars",
          "isCorrect": true
        },
        {
          "id": "opt_8",
          "text": "8 Stars"
        }
      ]
    },
    "answer": "opt_7",
    "hint1": "Look at the sky carefully and count only the stars.",
    "hint2": "Count the yellow stars: 3 at top, 3 in middle, and 1 at bottom = 7.",
    "explanation": "Seven 5-pointed stars light up the night sky!",
    "reward": 15
  },
  {
    "id": 79,
    "type": "choice",
    "title": "River Crossing Animals",
    "instruction": "Who must cross the river first?",
    "sceneConfig": {
      "background": "#FFFDF9",
      "items": [
        {
          "id": "river_boat",
          "shape": "box",
          "text": "🛶",
          "label": "Ferry Skiff",
          "x": 50,
          "y": 35,
          "size": 85,
          "color": "#B45309"
        }
      ],
      "options": [
        {
          "id": "opt_wolf",
          "text": "Take the Wolf first"
        },
        {
          "id": "opt_chicken",
          "text": "Take the Goose (Chicken) first",
          "isCorrect": true
        },
        {
          "id": "opt_grain",
          "text": "Take the Sack of Grain first"
        },
        {
          "id": "opt_alone",
          "text": "Cross alone to scout the opposite bank"
        }
      ]
    },
    "answer": "opt_chicken",
    "hint1": "Identify the single entity that cannot be safely left alone with either of the other two companions.",
    "hint2": "The wolf will not eat grain; only the goose poses a threat to grain and is threatened by the wolf.",
    "explanation": "The goose must cross first! Leaving wolf with grain is completely peaceful, breaking the chain of conflict.",
    "reward": 15
  },
  {
    "id": 80,
    "type": "tap",
    "title": "True Reflection",
    "instruction": "Find the correct reflection.",
    "sceneConfig": {
      "background": "#FFFDF9",
      "items": [
        {
          "id": "girl_shore",
          "shape": "circle",
          "text": "🙋‍♀️",
          "label": "Shore Explorer (Left Raised)",
          "x": 50,
          "y": 25,
          "size": 65,
          "color": "#6366F1"
        },
        {
          "id": "reflection_fake",
          "shape": "circle",
          "text": "🙋‍♀️",
          "label": "Translated Clone Decoy",
          "x": 25,
          "y": 65,
          "size": 60,
          "color": "#93C5FD"
        },
        {
          "id": "reflection_true",
          "shape": "circle",
          "text": "🙋",
          "label": "Specular Reflection",
          "x": 75,
          "y": 65,
          "size": 60,
          "color": "#38BDF8",
          "isTarget": true
        },
        {
          "id": "water_lily",
          "shape": "flower",
          "text": "🪷",
          "label": "Pond Flora Decoy",
          "x": 50,
          "y": 70,
          "size": 45,
          "color": "#F472B6"
        }
      ]
    },
    "answer": "reflection_true",
    "hint1": "Planar reflection inverts lateral parallax relative to the facing viewer.",
    "hint2": "Facing you, the reflection must show the arm raised on the corresponding mirrored side.",
    "explanation": "True reflection inverts horizontal axes: when facing a mirrored image, a raised left hand appears on the right side of the reflection!",
    "reward": 15
  },
  {
    "id": 81,
    "type": "math",
    "title": "Age Reversal",
    "instruction": "How old is the apprentice?",
    "sceneConfig": {
      "background": "#FFFDF9",
      "items": [
        {
          "id": "age_chart",
          "shape": "box",
          "text": "M = 4A | M+20 = 2(A+20)",
          "label": "Temporal Ledger",
          "x": 50,
          "y": 35,
          "size": 85,
          "color": "#6366F1"
        }
      ],
      "options": [
        {
          "id": "opt_8",
          "text": "8 Years Old"
        },
        {
          "id": "opt_10",
          "text": "10 Years Old",
          "isCorrect": true
        },
        {
          "id": "opt_12",
          "text": "12 Years Old"
        },
        {
          "id": "opt_15",
          "text": "15 Years Old"
        }
      ]
    },
    "answer": "opt_10",
    "hint1": "Formulate the algebraic relation: 4A + 20 = 2A + 40.",
    "hint2": "Subtract 2A from both sides to solve 2A = 20.",
    "explanation": "Let apprentice = A. Master = 4A. In 20 years: 4A + 20 = 2(A + 20) -> 2A = 20 -> A = 10 years old (Master is 40)!",
    "reward": 15
  },
  {
    "id": 82,
    "type": "hidden-object",
    "title": "Hidden Butterfly",
    "instruction": "Find the hidden bee.",
    "sceneConfig": {
      "background": "#FFFDF9",
      "items": [
        {
          "id": "flower_petal_1",
          "shape": "flower",
          "text": "🌹",
          "label": "Briar Blossom",
          "x": 20,
          "y": 35,
          "size": 60,
          "color": "#E11D48"
        },
        {
          "id": "camo_butterfly",
          "shape": "bee",
          "text": "🦋",
          "label": "Rosette Swallowtail",
          "x": 46,
          "y": 48,
          "size": 28,
          "color": "#BE123C",
          "isTarget": true
        },
        {
          "id": "flower_petal_2",
          "shape": "flower",
          "text": "🌹",
          "label": "Briar Blossom",
          "x": 75,
          "y": 35,
          "size": 60,
          "color": "#E11D48"
        },
        {
          "id": "petal_curl_decoy",
          "shape": "circle",
          "text": "🍂",
          "label": "Faded Leaf Decoy",
          "x": 75,
          "y": 70,
          "size": 45,
          "color": "#B45309"
        },
        {
          "id": "flower_petal_3",
          "shape": "flower",
          "text": "🌹",
          "label": "Briar Blossom",
          "x": 25,
          "y": 70,
          "size": 60,
          "color": "#E11D48"
        }
      ]
    },
    "answer": "camo_butterfly",
    "hint1": "Look for bilateral antenna symmetry breaking the organic irregularity of flower petals.",
    "hint2": "Between the upper-left and center roses, notice the small crimson wings blending into the petals.",
    "explanation": "Incredible camouflage! The crimson swallowtail used the rose petals as perfect defensive mimicry.",
    "reward": 15
  },
  {
    "id": 83,
    "type": "multi-tap",
    "title": "Find All Even Numbers",
    "instruction": "Tap all the even numbers.",
    "sceneConfig": {
      "background": "#FFFDF9",
      "items": [
        {
          "id": "ev_3",
          "shape": "circle",
          "text": "3",
          "label": "Odd Three",
          "x": 18,
          "y": 30,
          "size": 55,
          "color": "#E2E8F0"
        },
        {
          "id": "ev_8",
          "shape": "circle",
          "text": "8",
          "label": "Even Eight",
          "x": 42,
          "y": 30,
          "size": 55,
          "color": "#FEF08A",
          "isTarget": true
        },
        {
          "id": "ev_15",
          "shape": "circle",
          "text": "15",
          "label": "Odd Fifteen",
          "x": 68,
          "y": 30,
          "size": 55,
          "color": "#E2E8F0"
        },
        {
          "id": "ev_22",
          "shape": "circle",
          "text": "22",
          "label": "Even Twenty-Two",
          "x": 88,
          "y": 30,
          "size": 55,
          "color": "#FEF08A",
          "isTarget": true
        },
        {
          "id": "ev_7",
          "shape": "circle",
          "text": "7",
          "label": "Odd Seven",
          "x": 18,
          "y": 65,
          "size": 55,
          "color": "#E2E8F0"
        },
        {
          "id": "ev_40",
          "shape": "circle",
          "text": "40",
          "label": "Even Forty",
          "x": 42,
          "y": 65,
          "size": 55,
          "color": "#FEF08A",
          "isTarget": true
        },
        {
          "id": "ev_11",
          "shape": "circle",
          "text": "11",
          "label": "Odd Eleven",
          "x": 68,
          "y": 65,
          "size": 55,
          "color": "#E2E8F0"
        },
        {
          "id": "ev_16",
          "shape": "circle",
          "text": "16",
          "label": "Even Sixteen",
          "x": 88,
          "y": 65,
          "size": 55,
          "color": "#FEF08A",
          "isTarget": true
        }
      ]
    },
    "answer": "ev_8, ev_22, ev_40, ev_16",
    "hint1": "Examine solely the final least significant digit of each numeral.",
    "hint2": "Select only the values ending in 8, 2, 0, or 6.",
    "explanation": "8, 22, 40, and 16 are all cleanly divisible by two without remainder!",
    "reward": 15
  },
  {
    "id": 84,
    "type": "drag",
    "title": "Sort by Weight",
    "instruction": "Balance the animals by weight.",
    "sceneConfig": {
      "background": "#FFFDF9",
      "items": [
        {
          "id": "ani_elephant",
          "shape": "circle",
          "text": "🐘",
          "label": "Pachyderm",
          "x": 20,
          "y": 25,
          "size": 65,
          "color": "#94A3B8",
          "draggable": true,
          "targetDropZone": "seesaw_far_end"
        },
        {
          "id": "ani_horse",
          "shape": "circle",
          "text": "🐴",
          "label": "Equine",
          "x": 50,
          "y": 25,
          "size": 60,
          "color": "#D97706",
          "draggable": true
        },
        {
          "id": "ani_dog",
          "shape": "circle",
          "text": "🐕",
          "label": "Canine",
          "x": 80,
          "y": 25,
          "size": 55,
          "color": "#B45309",
          "draggable": true
        },
        {
          "id": "ani_mouse",
          "shape": "circle",
          "text": "🐁",
          "label": "Rodent Decoy",
          "x": 50,
          "y": 70,
          "size": 45,
          "color": "#CBD5E1",
          "draggable": true
        },
        {
          "id": "seesaw_bar",
          "shape": "box",
          "text": "Balance Fulcrum",
          "label": "Seesaw Beam",
          "x": 50,
          "y": 55,
          "size": 85,
          "color": "#64748B"
        }
      ],
      "dropZones": [
        {
          "id": "seesaw_far_end",
          "label": "Torque Terminus",
          "x": 20,
          "y": 55,
          "width": 85,
          "height": 75,
          "acceptItemId": "ani_elephant"
        }
      ]
    },
    "answer": "seesaw_far_end",
    "hint1": "Maximum rotational torque requires the heaviest mass positioned at the greatest distance from the pivot.",
    "hint2": "Drag the heavy elephant to the far terminus of the balance beam.",
    "explanation": "Leverage locked! The elephant's mass anchors the beam firmly downward.",
    "reward": 15
  },
  {
    "id": 85,
    "type": "word",
    "title": "Hidden Country",
    "instruction": "Find the hidden country name in: 'I ran ice cold water.'",
    "sceneConfig": {
      "background": "#FFFDF9",
      "items": [
        {
          "id": "phrase_banner",
          "shape": "box",
          "text": "I ran ice cold water.",
          "label": "Inscribed Banner",
          "x": 50,
          "y": 35,
          "size": 85,
          "color": "#6366F1"
        }
      ],
      "options": [
        {
          "id": "opt_iran",
          "text": "Iran",
          "isCorrect": true
        },
        {
          "id": "opt_nice",
          "text": "Nice (France)"
        },
        {
          "id": "opt_cold",
          "text": "Cold"
        },
        {
          "id": "opt_iceland",
          "text": "Iceland"
        }
      ]
    },
    "answer": "opt_iran",
    "hint1": "Combine the initial two words without intervening whitespace.",
    "hint2": "Look at the phrase opening: 'I' and 'ran' merge directly into 'Iran'.",
    "explanation": "'I ran' seamlessly spells the country IRAN!",
    "reward": 15
  },
  {
    "id": 86,
    "type": "choice",
    "title": "The Gold Bar Trick",
    "instruction": "How many weighings to find the fake coin out of 8?",
    "sceneConfig": {
      "background": "#FFFDF9",
      "items": [
        {
          "id": "gold_bars",
          "shape": "circle",
          "text": "🥇",
          "label": "Treasury Ingots",
          "x": 50,
          "y": 35,
          "size": 85,
          "color": "#F59E0B"
        }
      ],
      "options": [
        {
          "id": "opt_4_4",
          "text": "Weigh 4 ingots against 4 ingots"
        },
        {
          "id": "opt_3_3",
          "text": "Weigh 3 against 3, reserving 2 aside",
          "isCorrect": true
        },
        {
          "id": "opt_1_1",
          "text": "Weigh 1 against 1"
        },
        {
          "id": "opt_2_2",
          "text": "Weigh 2 against 2"
        }
      ]
    },
    "answer": "opt_3_3",
    "hint1": "Exploit the scale's three potential states (left light, right light, or equal balance) by setting candidates aside.",
    "hint2": "If 3 equals 3, the fake is in the 2 set aside (weighed in step 2). If not, the lighter 3 holds the fake (weigh 1 vs 1 in step 2)!",
    "explanation": "Weighing 3 against 3 divides 8 candidates into ternary branches, guaranteeing detection in just 2 weighings!",
    "reward": 15
  },
  {
    "id": 87,
    "type": "visual",
    "title": "Spot Wrong Gear",
    "instruction": "Which gear stops the machine from spinning?",
    "sceneConfig": {
      "background": "#FFFDF9",
      "items": [
        {
          "id": "gear_1",
          "shape": "star",
          "text": "⚙️ ↷",
          "label": "Drive Cog (CW)",
          "x": 20,
          "y": 40,
          "size": 55,
          "color": "#64748B"
        },
        {
          "id": "gear_2",
          "shape": "star",
          "text": "⚙️ ↶",
          "label": "Idler Cog (CCW)",
          "x": 42,
          "y": 40,
          "size": 55,
          "color": "#64748B"
        },
        {
          "id": "gear_wrong",
          "shape": "star",
          "text": "⚙️ ↶",
          "label": "Fault Cog (CCW)",
          "x": 65,
          "y": 40,
          "size": 55,
          "color": "#EF4444",
          "isTarget": true
        },
        {
          "id": "gear_4",
          "shape": "star",
          "text": "⚙️ ↷",
          "label": "Driven Cog (CW)",
          "x": 86,
          "y": 40,
          "size": 55,
          "color": "#64748B"
        },
        {
          "id": "belt_pulley",
          "shape": "box",
          "text": "Pulley",
          "label": "Tensioner Decoy",
          "x": 50,
          "y": 72,
          "size": 45,
          "color": "#94A3B8"
        }
      ]
    },
    "answer": "gear_wrong",
    "hint1": "Intermeshed tooth gears must alternate rotation vectors in strict sequence: CW, CCW, CW, CCW.",
    "hint2": "The third gear shows counter-clockwise rotation while meshed with another counter-clockwise gear!",
    "explanation": "Directly meshed gears must rotate in opposite directions! The third gear is spinning the wrong way, jamming the train.",
    "reward": 15
  },
  {
    "id": 88,
    "type": "tap",
    "title": "The Real Match",
    "instruction": "Find the lit match.",
    "sceneConfig": {
      "background": "#FFFDF9",
      "items": [
        {
          "id": "match_1",
          "shape": "box",
          "text": "Sulfur Red Tip",
          "label": "Dormant Match",
          "x": 20,
          "y": 40,
          "size": 55,
          "color": "#EF4444"
        },
        {
          "id": "match_2",
          "shape": "box",
          "text": "Carbonized Tip",
          "label": "Burnt Match",
          "x": 42,
          "y": 40,
          "size": 55,
          "color": "#1E293B"
        },
        {
          "id": "match_flame",
          "shape": "fire",
          "text": "Active Flame 🔥",
          "label": "Combusting Match",
          "x": 68,
          "y": 35,
          "size": 60,
          "color": "#F59E0B",
          "isTarget": true
        },
        {
          "id": "match_4",
          "shape": "box",
          "text": "Yellow Head",
          "label": "Phosphorus Match",
          "x": 88,
          "y": 40,
          "size": 55,
          "color": "#FBBF24"
        },
        {
          "id": "match_box",
          "shape": "box",
          "text": "Striker Strip",
          "label": "Friction Decoy",
          "x": 50,
          "y": 72,
          "size": 45,
          "color": "#78350F"
        }
      ]
    },
    "answer": "match_flame",
    "hint1": "Differentiate chemical pigment dye on raw wood from an active plasma plume.",
    "hint2": "Only one splinter displays an active flickering flame with heat distortion.",
    "explanation": "That match is actively blazing! The others were either unlit colored sulfur heads or cold charred charcoal.",
    "reward": 15
  },
  {
    "id": 89,
    "type": "math",
    "title": "Percentage Trick",
    "instruction": "What is the total discount after taking 20% off twice?",
    "sceneConfig": {
      "background": "#FFFDF9",
      "items": [
        {
          "id": "shirt_tag",
          "shape": "box",
          "text": "-20% then -20%",
          "label": "Discount Seal",
          "x": 50,
          "y": 35,
          "size": 85,
          "color": "#10B981"
        }
      ],
      "options": [
        {
          "id": "opt_40",
          "text": "40% Discount"
        },
        {
          "id": "opt_36",
          "text": "36% Discount",
          "isCorrect": true
        },
        {
          "id": "opt_32",
          "text": "32% Discount"
        },
        {
          "id": "opt_38",
          "text": "38% Discount"
        }
      ]
    },
    "answer": "opt_36",
    "hint1": "The secondary reduction applies to 80% of the principal, not the full 100%.",
    "hint2": "0.80 multiplied by 0.80 leaves 0.64 (64% remaining price), which equals a 36% net deduction.",
    "explanation": "Successive discounts compound: 100 * 0.80 = 80; 80 * 0.80 = 64. The final price is 64, making the total discount 36%, not 40%!",
    "reward": 15
  },
  {
    "id": 90,
    "type": "hidden-object",
    "title": "Hidden Boat",
    "instruction": "Find the boat on the horizon.",
    "sceneConfig": {
      "background": "#FFFDF9",
      "items": [
        {
          "id": "sea_wave_left",
          "shape": "cloud",
          "text": "🌊",
          "label": "Ocean Swell",
          "x": 20,
          "y": 45,
          "size": 65,
          "color": "#38BDF8"
        },
        {
          "id": "sea_wave_right",
          "shape": "cloud",
          "text": "🌊",
          "label": "Ocean Swell",
          "x": 80,
          "y": 45,
          "size": 65,
          "color": "#38BDF8"
        },
        {
          "id": "tiny_boat",
          "shape": "circle",
          "text": "⛵",
          "label": "Distant Vessel",
          "x": 54,
          "y": 38,
          "size": 28,
          "color": "#0284C7",
          "isTarget": true
        },
        {
          "id": "white_cap_wave",
          "shape": "cloud",
          "text": "🌊",
          "label": "Whitecap Crest Decoy",
          "x": 35,
          "y": 40,
          "size": 45,
          "color": "#E0F2FE"
        },
        {
          "id": "distant_buoy",
          "shape": "circle",
          "text": "📍",
          "label": "Navigational Buoy Decoy",
          "x": 72,
          "y": 40,
          "size": 30,
          "color": "#DC2626"
        },
        {
          "id": "driftwood_spar",
          "shape": "box",
          "text": "🪵",
          "label": "Drifting Spar Decoy",
          "x": 50,
          "y": 70,
          "size": 45,
          "color": "#78350F"
        },
        {
          "id": "sun_horizon",
          "shape": "sun",
          "label": "Horizon Glow",
          "x": 50,
          "y": 22,
          "size": 55,
          "color": "#FDE047"
        }
      ]
    },
    "answer": "tiny_boat",
    "hint1": "Distinguish genuine canvas rigging from foaming surf crests.",
    "hint2": "Where sea meets sky, a pale vessel silhouette casts a faint reflection against the swells.",
    "explanation": "The vessel's tiny triangular mainsail is visible right along the horizon line among the sea swells!",
    "reward": 15
  },
  {
    "id": 91,
    "type": "sequence",
    "title": "Life Cycle Order",
    "instruction": "Order the butterfly life cycle.",
    "sceneConfig": {
      "background": "#FFFDF9",
      "items": [
        {
          "id": "cycle_butterfly",
          "shape": "bee",
          "text": "🦋",
          "label": "Winged Imago",
          "x": 20,
          "y": 40,
          "size": 60,
          "color": "#A855F7"
        },
        {
          "id": "cycle_caterpillar",
          "shape": "circle",
          "text": "🐛",
          "label": "Feeding Larva",
          "x": 42,
          "y": 65,
          "size": 60,
          "color": "#22C55E"
        },
        {
          "id": "cycle_egg",
          "shape": "egg",
          "text": "🥚",
          "label": "Leaf Ovum",
          "x": 65,
          "y": 30,
          "size": 60,
          "color": "#FEF08A"
        },
        {
          "id": "cycle_cocoon",
          "shape": "box",
          "text": "🥥",
          "label": "Silk Chrysalis",
          "x": 85,
          "y": 55,
          "size": 60,
          "color": "#D97706"
        },
        {
          "id": "empty_shell_decoy",
          "shape": "box",
          "text": "🍂",
          "label": "Hollow Husk Decoy",
          "x": 50,
          "y": 45,
          "size": 45,
          "color": "#94A3B8"
        }
      ],
      "sequenceTargets": [
        "cycle_egg",
        "cycle_caterpillar",
        "cycle_cocoon",
        "cycle_butterfly"
      ]
    },
    "answer": [
      "cycle_egg",
      "cycle_caterpillar",
      "cycle_cocoon",
      "cycle_butterfly"
    ],
    "hint1": "Embryonic ovum yields feeding larva; pupal metamorphosis precedes winged flight.",
    "hint2": "Leaf Ovum first, then Feeding Larva, followed by Silk Chrysalis, concluding with Winged Imago.",
    "explanation": "Egg, caterpillar, chrysalis, butterfly! Nature's miraculous transformation unfolds in perfect order.",
    "reward": 15
  },
  {
    "id": 92,
    "type": "visual",
    "title": "Count Hidden Rectangles",
    "instruction": "Count all the rectangles.",
    "sceneConfig": {
      "background": "#FFFDF9",
      "items": [
        {
          "id": "window_grid",
          "shape": "box",
          "text": "🪟",
          "label": "2x2 Casement",
          "x": 50,
          "y": 35,
          "size": 90,
          "color": "#64748B"
        }
      ],
      "options": [
        {
          "id": "opt_4",
          "text": "4 Rectangles"
        },
        {
          "id": "opt_6",
          "text": "6 Rectangles"
        },
        {
          "id": "opt_9",
          "text": "9 Rectangles",
          "isCorrect": true
        },
        {
          "id": "opt_12",
          "text": "12 Rectangles"
        }
      ]
    },
    "answer": "opt_9",
    "hint1": "All squares satisfy rectangular definition. Combine panes across rows and columns.",
    "hint2": "4 individual panes + 2 horizontal pairs + 2 vertical pairs + 1 outer boundary = 9 total.",
    "explanation": "4 single panes + 2 horizontal doubles + 2 vertical doubles + 1 full outer frame = 9 rectangles!",
    "reward": 15
  },
  {
    "id": 93,
    "type": "choice",
    "title": "The Poisoned Wine",
    "instruction": "Can you find the poisoned barrel using 10 testers in 24 hours?",
    "sceneConfig": {
      "background": "#FFFDF9",
      "items": [
        {
          "id": "wine_cellar",
          "shape": "box",
          "text": "🍷",
          "label": "Royal Cellar",
          "x": 50,
          "y": 35,
          "size": 85,
          "color": "#991B1B"
        }
      ],
      "options": [
        {
          "id": "opt_impossible",
          "text": "No, at least 100 test subjects are mathematically required"
        },
        {
          "id": "opt_binary",
          "text": "Yes, by assigning each cask a 10-bit binary address tested across the 10 subjects",
          "isCorrect": true
        },
        {
          "id": "opt_batches",
          "text": "Only if testing casks in sequential batches of 100"
        },
        {
          "id": "opt_luck",
          "text": "Only by pure statistical luck"
        }
      ]
    },
    "answer": "opt_binary",
    "hint1": "Consider positional binary notation: calculate 2 raised to the 10th power.",
    "hint2": "2¹⁰ = 1,024 permutations, which comfortably encodes addresses for 1,000 casks across 10 bits simultaneously!",
    "explanation": "Using binary encoding, 10 test subjects represent 2¹⁰ = 1024 unique states, allowing exact identification of any cask from 1 to 1000 in a single round!",
    "reward": 15
  },
  {
    "id": 94,
    "type": "tap",
    "title": "The Wrong Puzzle Piece",
    "instruction": "Find the odd tile out.",
    "sceneConfig": {
      "background": "#FFFDF9",
      "items": [
        {
          "id": "piece_pastel_1",
          "shape": "box",
          "text": "Earth Umber",
          "label": "Muted Ochre",
          "x": 20,
          "y": 35,
          "size": 55,
          "color": "#B45309"
        },
        {
          "id": "piece_pastel_2",
          "shape": "box",
          "text": "Slate Terra",
          "label": "Muted Clay",
          "x": 50,
          "y": 25,
          "size": 55,
          "color": "#78350F"
        },
        {
          "id": "piece_neon_mismatch",
          "shape": "box",
          "text": "Synthetic Glow",
          "label": "Neon Glaze",
          "x": 80,
          "y": 35,
          "size": 55,
          "color": "#22D3EE",
          "isTarget": true
        },
        {
          "id": "piece_pastel_4",
          "shape": "box",
          "text": "Forest Moss",
          "label": "Muted Lichen",
          "x": 30,
          "y": 65,
          "size": 55,
          "color": "#15803D"
        },
        {
          "id": "piece_shadow",
          "shape": "box",
          "text": "Shadow Terra",
          "label": "Muted Silt",
          "x": 70,
          "y": 65,
          "size": 55,
          "color": "#475569"
        }
      ]
    },
    "answer": "piece_neon_mismatch",
    "hint1": "Notice the chromatic saturation and synthetic spectral reflectance.",
    "hint2": "One fragment glows with electric cyan luminescence against natural earth pigments.",
    "explanation": "The neon-cyan piece belongs to a modern graphic set, clashing with the ancient hand-painted earth mosaic!",
    "reward": 15
  },
  {
    "id": 95,
    "type": "drag",
    "title": "Complete the Circuit",
    "instruction": "Turn on the beacon.",
    "sceneConfig": {
      "background": "#FFFDF9",
      "items": [
        {
          "id": "copper_wire",
          "shape": "star",
          "text": "Copper Jumper",
          "label": "Conductive Wire",
          "x": 22,
          "y": 70,
          "size": 60,
          "color": "#F59E0B",
          "draggable": true,
          "targetDropZone": "bulb_terminal"
        },
        {
          "id": "rubber_cord",
          "shape": "box",
          "text": "Polymer Sleeve",
          "label": "Dielectric Insulator Decoy",
          "x": 50,
          "y": 70,
          "size": 50,
          "color": "#1E293B",
          "draggable": true
        },
        {
          "id": "circuit_battery",
          "shape": "box",
          "text": "Galvanic Cell 🔋",
          "label": "DC Cell",
          "x": 22,
          "y": 30,
          "size": 65,
          "color": "#10B981"
        },
        {
          "id": "circuit_bulb",
          "shape": "lightbulb",
          "text": "Filament 💡",
          "label": "Beacon Filament",
          "x": 78,
          "y": 40,
          "size": 70,
          "color": "#CBD5E1"
        }
      ],
      "dropZones": [
        {
          "id": "bulb_terminal",
          "label": "Cathode Terminal",
          "x": 78,
          "y": 40,
          "width": 85,
          "height": 85,
          "acceptItemId": "copper_wire"
        }
      ]
    },
    "answer": "bulb_terminal",
    "hint1": "Dielectric rubber halts electron flow; pure copper conducts.",
    "hint2": "Drag the metallic copper jumper wire directly into the bulb's cathode terminal.",
    "explanation": "Click! Electrons surge through the copper lead, igniting the beacon lamp with brilliant light!",
    "reward": 15
  },
  {
    "id": 96,
    "type": "word",
    "title": "Palindrome Check",
    "instruction": "Which word is a palindrome?",
    "sceneConfig": {
      "background": "#FFFDF9",
      "items": [
        {
          "id": "palindrome_mirror",
          "shape": "box",
          "text": "Mirrored Lexicon",
          "label": "Lexical Speculum",
          "x": 50,
          "y": 35,
          "size": 85,
          "color": "#6366F1"
        }
      ],
      "options": [
        {
          "id": "opt_level",
          "text": "LEVEL",
          "isCorrect": true
        },
        {
          "id": "opt_house",
          "text": "HOUSE"
        },
        {
          "id": "opt_world",
          "text": "WORLD"
        },
        {
          "id": "opt_river",
          "text": "RIVER"
        }
      ]
    },
    "answer": "opt_level",
    "hint1": "Orthographic symmetry pivots squarely upon the central consonant 'V'.",
    "hint2": "L-E-V-E-L spelled backwards is L-E-V-E-L!",
    "explanation": "LEVEL is a symmetrical palindrome: forwards or backwards, every letter matches perfectly!",
    "reward": 15
  },
  {
    "id": 97,
    "type": "math",
    "title": "The Bat and Ball",
    "instruction": "A staff and compass cost 110. The staff is 100 more than the compass. How much is the compass?",
    "sceneConfig": {
      "background": "#FFFDF9",
      "items": [
        {
          "id": "bat_ball_card",
          "shape": "box",
          "text": "Total: 110 | Staff = Compass + 100",
          "label": "Merchant Receipt",
          "x": 50,
          "y": 35,
          "size": 85,
          "color": "#F59E0B"
        }
      ],
      "options": [
        {
          "id": "opt_10",
          "text": "10 coins"
        },
        {
          "id": "opt_5",
          "text": "5 coins",
          "isCorrect": true
        },
        {
          "id": "opt_1",
          "text": "1 coin"
        },
        {
          "id": "opt_15",
          "text": "15 coins"
        }
      ]
    },
    "answer": "opt_5",
    "hint1": "If the compass were 10 coins, the staff would be 110 coins, totaling 120 coins.",
    "hint2": "Let C = compass. C + (C + 100) = 110 -> 2C = 10 -> C = 5 coins.",
    "explanation": "The intuitive trap is 10, but if the compass is 5 and staff is 105, the difference is 100 and the sum is 110!",
    "reward": 15
  },
  {
    "id": 98,
    "type": "hidden-object",
    "title": "Hidden Star",
    "instruction": "Find the hidden star shape in the mountains.",
    "sceneConfig": {
      "background": "#FFFDF9",
      "items": [
        {
          "id": "mountain_peak_1",
          "shape": "star",
          "text": "⛰️",
          "label": "Glacial Crag West",
          "x": 28,
          "y": 45,
          "size": 70,
          "color": "#64748B"
        },
        {
          "id": "mountain_star",
          "shape": "star",
          "text": "✨",
          "label": "Negative Space Star",
          "x": 50,
          "y": 35,
          "size": 26,
          "color": "#FEF08A",
          "isTarget": true
        },
        {
          "id": "mountain_peak_2",
          "shape": "star",
          "text": "⛰️",
          "label": "Glacial Crag East",
          "x": 72,
          "y": 45,
          "size": 70,
          "color": "#64748B"
        },
        {
          "id": "snow_patch_decoy",
          "shape": "cloud",
          "text": "❄️",
          "label": "Rime Patch Decoy",
          "x": 50,
          "y": 70,
          "size": 45,
          "color": "#E0F2FE"
        }
      ]
    },
    "answer": "mountain_star",
    "hint1": "Do not inspect the dark stone; examine the sky profile between converging crag pinnacles.",
    "hint2": "The jagged gap between the two central peaks forms a crisp five-pointed star silhouette.",
    "explanation": "Brilliant spatial perception! The empty sky between mountain peaks outlines a hidden five-pointed star.",
    "reward": 15
  },
  {
    "id": 99,
    "type": "visual",
    "title": "Which Path is Shortest",
    "instruction": "Which path is the shortest?",
    "sceneConfig": {
      "background": "#FFFDF9",
      "items": [
        {
          "id": "path_cottage",
          "shape": "box",
          "text": "Refuge 🏠",
          "label": "Alpine Refuge",
          "x": 50,
          "y": 20,
          "size": 65,
          "color": "#78350F"
        },
        {
          "id": "path_a",
          "shape": "box",
          "text": "Trail Alpha (6 S-Bends)",
          "label": "Tight Serpent Trail",
          "x": 22,
          "y": 55,
          "size": 55,
          "color": "#B45309"
        },
        {
          "id": "path_b",
          "shape": "box",
          "text": "Trail Beta (2 Broad Arcs)",
          "label": "Direct Gradient Trail",
          "x": 50,
          "y": 55,
          "size": 55,
          "color": "#16A34A",
          "isTarget": true
        },
        {
          "id": "path_c",
          "shape": "box",
          "text": "Trail Gamma (5 Wide Loops)",
          "label": "Perimeter Trail",
          "x": 78,
          "y": 55,
          "size": 55,
          "color": "#B45309"
        },
        {
          "id": "canyon_cleft",
          "shape": "box",
          "text": "Gorge Rift",
          "label": "Gorge Decoy",
          "x": 50,
          "y": 80,
          "size": 45,
          "color": "#334155"
        }
      ]
    },
    "answer": "path_b",
    "hint1": "All the extra zig-zag turns make paths much longer than they look.",
    "hint2": "Count the curves: Path B has only two gentle curves, making it the shortest.",
    "explanation": "Path B has far fewer twists and turns, making it the fastest way through!",
    "reward": 15
  },
  {
    "id": 100,
    "type": "choice",
    "title": "Milestone Challenge: The Weighing Puzzle",
    "instruction": "Can you find the fake gem in 3 weighings?",
    "sceneConfig": {
      "background": "#FFFDF9",
      "items": [
        {
          "id": "milestone_scale",
          "shape": "circle",
          "text": "⚖️",
          "label": "Balance Scale",
          "x": 50,
          "y": 35,
          "size": 90,
          "color": "#F59E0B"
        }
      ],
      "options": [
        {
          "id": "opt_3_possible",
          "text": "Yes — mathematically solvable in exactly 3 weighings via 4-4-4 ternary division",
          "isCorrect": true
        },
        {
          "id": "opt_4_needed",
          "text": "No — at least 4 weighings are required when the direction of deviation is unknown"
        },
        {
          "id": "opt_heavier_only",
          "text": "Only solvable if the counterfeit is known to be heavier beforehand"
        },
        {
          "id": "opt_impossible",
          "text": "Impossible without a reference standard weight"
        }
      ]
    },
    "answer": "opt_3_possible",
    "hint1": "3 ternary balance outcomes provide 3³ = 27 total information states against 24 potential states (12 gems x 2 possibilities).",
    "hint2": "Weighing 4 against 4 in round 1 isolates the anomaly to 4 candidates in all branches, resolving cleanly in 3 operations!",
    "explanation": "Because 3³ = 27 and there are 24 possible outcomes (12 stones x heavier/lighter), 3 weighings provide sufficient information capacity!",
    "reward": 25
  }
];
