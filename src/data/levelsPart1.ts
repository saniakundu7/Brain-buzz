import { PuzzleLevel } from '../types';

export const levelsPart1: PuzzleLevel[] = [
  {
    "id": 1,
    "type": "choice",
    "title": "Who is the Biggest?",
    "instruction": "Which of these is the biggest in real life?",
    "sceneConfig": {
      "background": "#FFFDF9",
      "items": [
        {
          "id": "bumblebee_giant",
          "shape": "bee",
          "text": "🐝",
          "label": "Big Bee",
          "x": 20,
          "y": 35,
          "size": 85,
          "color": "#F59E0B"
        },
        {
          "id": "ant_giant",
          "shape": "bee",
          "text": "🐜",
          "label": "Big Ant",
          "x": 50,
          "y": 35,
          "size": 80,
          "color": "#10B981"
        },
        {
          "id": "elephant_mini",
          "shape": "circle",
          "text": "🐘",
          "label": "Baby Elephant",
          "x": 80,
          "y": 35,
          "size": 48,
          "color": "#94A3B8"
        },
        {
          "id": "dragonfly_decoy",
          "shape": "bee",
          "text": "🦗",
          "label": "Dragonfly",
          "x": 50,
          "y": 70,
          "size": 75,
          "color": "#6366F1"
        }
      ],
      "options": [
        {
          "id": "opt_bee",
          "text": "The Big Bee"
        },
        {
          "id": "opt_ant",
          "text": "The Big Ant"
        },
        {
          "id": "opt_elephant",
          "text": "The Baby Elephant",
          "isCorrect": true
        },
        {
          "id": "opt_dragonfly",
          "text": "The Dragonfly"
        }
      ]
    },
    "answer": "opt_elephant",
    "hint1": "Don't be tricked by how large the drawings look on your screen!",
    "hint2": "Think about real life. Even a baby elephant weighs hundreds of kilograms, far bigger than any insect!",
    "explanation": "Even a tiny drawing of an elephant represents a massive animal far bigger than any insect!",
    "reward": 10
  },
  {
    "id": 2,
    "type": "drag",
    "title": "Light the Hive",
    "instruction": "Turn on the lantern.",
    "sceneConfig": {
      "background": "#FFFDF9",
      "items": [
        {
          "id": "bulb_drag",
          "shape": "lightbulb",
          "label": "Lightbulb",
          "x": 22,
          "y": 70,
          "size": 65,
          "color": "#F59E0B",
          "draggable": true,
          "targetDropZone": "lantern_zone"
        },
        {
          "id": "tallow_candle",
          "shape": "box",
          "text": "🕯️",
          "label": "Candle",
          "x": 50,
          "y": 70,
          "size": 55,
          "color": "#FEF3C7",
          "draggable": true
        },
        {
          "id": "lantern_frame",
          "shape": "cup",
          "label": "Lantern Frame",
          "x": 75,
          "y": 30,
          "size": 75,
          "color": "#CBD5E1"
        }
      ],
      "dropZones": [
        {
          "id": "lantern_zone",
          "label": "Lantern Socket",
          "x": 75,
          "y": 30,
          "width": 85,
          "height": 85,
          "acceptItemId": "bulb_drag"
        }
      ]
    },
    "answer": "lantern_zone",
    "hint1": "A candle needs a match, but the electric bulb fits right into the lantern socket.",
    "hint2": "Drag the glowing lightbulb directly into the lantern frame at the top right.",
    "explanation": "Click! The bulb snaps into place and lights up the hive with a warm golden glow!",
    "reward": 10
  },
  {
    "id": 3,
    "type": "sequence",
    "title": "Count the Honey Jars",
    "instruction": "Tap the jars in order from smallest number to largest.",
    "sceneConfig": {
      "background": "#FFFDF9",
      "items": [
        {
          "id": "jar_1",
          "shape": "cup",
          "text": "3",
          "label": "Jar 3",
          "x": 18,
          "y": 45,
          "size": 78,
          "color": "#F59E0B"
        },
        {
          "id": "jar_2",
          "shape": "cup",
          "text": "7",
          "label": "Jar 7",
          "x": 42,
          "y": 35,
          "size": 64,
          "color": "#FBBF24"
        },
        {
          "id": "jar_3",
          "shape": "cup",
          "text": "12",
          "label": "Jar 12",
          "x": 65,
          "y": 55,
          "size": 52,
          "color": "#FCD34D"
        },
        {
          "id": "jar_4",
          "shape": "cup",
          "text": "27",
          "label": "Jar 27",
          "x": 86,
          "y": 40,
          "size": 44,
          "color": "#FEF08A"
        },
        {
          "id": "jar_cracked",
          "shape": "cup",
          "text": "88",
          "label": "Cracked Urn",
          "x": 50,
          "y": 78,
          "size": 58,
          "color": "#E2E8F0"
        }
      ],
      "sequenceTargets": [
        "jar_1",
        "jar_2",
        "jar_3",
        "jar_4"
      ]
    },
    "answer": [
      "jar_1",
      "jar_2",
      "jar_3",
      "jar_4"
    ],
    "hint1": "Ignore how large or small the jars are drawn — look at the numbers on them!",
    "hint2": "Tap them in order of value: 3 first, then 7, then 12, and finally 27.",
    "explanation": "Jar 3 was drawn large while Jar 27 was drawn tiny, but mathematics decided the true order!",
    "reward": 10
  },
  {
    "id": 4,
    "type": "multi-tap",
    "title": "Hatch the Egg",
    "instruction": "Help the baby chick hatch!",
    "sceneConfig": {
      "background": "#FFFDF9",
      "items": [
        {
          "id": "egg_target",
          "shape": "egg",
          "label": "Nest Egg",
          "x": 42,
          "y": 45,
          "size": 85,
          "color": "#FEF08A",
          "tapCountRequired": 5
        },
        {
          "id": "river_pebble",
          "shape": "circle",
          "label": "River Pebble",
          "text": "🪨",
          "x": 74,
          "y": 48,
          "size": 68,
          "color": "#94A3B8"
        }
      ]
    },
    "answer": "egg_target",
    "hint1": "A single tap won't be enough to break through the shell.",
    "hint2": "Tap the egg 5 times quickly to help it hatch!",
    "explanation": "Crack! Crack! Out pops a happy newborn chick greeting the sunshine!",
    "reward": 10
  },
  {
    "id": 5,
    "type": "drag",
    "title": "Eclipse the Sun",
    "instruction": "Make it dark so the owl can sleep.",
    "sceneConfig": {
      "background": "#FFFDF9",
      "items": [
        {
          "id": "cloud_storm",
          "shape": "cloud",
          "label": "Raincloud",
          "x": 22,
          "y": 28,
          "size": 70,
          "color": "#94A3B8",
          "draggable": true,
          "targetDropZone": "sun_zone"
        },
        {
          "id": "parasol_decoy",
          "shape": "box",
          "text": "🏖️",
          "label": "Beach Umbrella",
          "x": 50,
          "y": 70,
          "size": 60,
          "color": "#F472B6",
          "draggable": true
        },
        {
          "id": "sun_target",
          "shape": "sun",
          "label": "Blazing Sun",
          "x": 78,
          "y": 25,
          "size": 80,
          "color": "#F59E0B"
        },
        {
          "id": "owl_spectator",
          "shape": "circle",
          "text": "🦉",
          "label": "Sleepy Owl",
          "x": 25,
          "y": 70,
          "size": 55,
          "color": "#78350F"
        }
      ],
      "dropZones": [
        {
          "id": "sun_zone",
          "label": "Sun",
          "x": 78,
          "y": 25,
          "width": 90,
          "height": 90,
          "acceptItemId": "cloud_storm"
        }
      ]
    },
    "answer": "sun_zone",
    "hint1": "An umbrella only shades the ground, not the sky.",
    "hint2": "Drag the dark cloud directly over the sun to block out the light.",
    "explanation": "The cloud drifted over the sun, dusk fell, and the sleepy owl drifted off to sleep!",
    "reward": 10
  },
  {
    "id": 6,
    "type": "drag",
    "title": "Save the Balloon",
    "instruction": "Move the sharp cactus away to keep the balloon safe!",
    "sceneConfig": {
      "background": "#FFFDF9",
      "items": [
        {
          "id": "cactus_spikes",
          "shape": "star",
          "text": "🌵",
          "label": "Prickly Cactus",
          "x": 48,
          "y": 45,
          "size": 70,
          "color": "#16A34A",
          "draggable": true,
          "targetDropZone": "safe_clearing"
        },
        {
          "id": "rose_thorn_decoy",
          "shape": "flower",
          "text": "🌹",
          "label": "Wild Rose",
          "x": 80,
          "y": 70,
          "size": 50,
          "color": "#E11D48"
        },
        {
          "id": "floating_balloon",
          "shape": "balloon",
          "label": "Red Balloon",
          "x": 50,
          "y": 20,
          "size": 65,
          "color": "#EF4444"
        }
      ],
      "dropZones": [
        {
          "id": "safe_clearing",
          "label": "Safe Zone",
          "x": 18,
          "y": 75,
          "width": 85,
          "height": 85,
          "acceptItemId": "cactus_spikes"
        }
      ]
    },
    "answer": "safe_clearing",
    "hint1": "Balloons pop easily near sharp needles.",
    "hint2": "Drag the prickly cactus down into the safe corner zone at the bottom.",
    "explanation": "Danger averted! The cactus is safely moved away and the balloon floats peacefully!",
    "reward": 10
  },
  {
    "id": 7,
    "type": "choice",
    "title": "Firefighter's Choice",
    "instruction": "A fire starts, and a match burns your thumb! What do you put out first?",
    "sceneConfig": {
      "background": "#FFFDF9",
      "items": [
        {
          "id": "cabin_rafter",
          "shape": "box",
          "text": "🪵",
          "label": "Roof Beam",
          "x": 25,
          "y": 25,
          "size": 55,
          "color": "#B45309"
        },
        {
          "id": "window_curtain",
          "shape": "box",
          "text": "🪟",
          "label": "Curtain",
          "x": 75,
          "y": 25,
          "size": 55,
          "color": "#DC2626"
        },
        {
          "id": "match_finger",
          "shape": "fire",
          "text": "🔥",
          "label": "Burning Match",
          "x": 50,
          "y": 60,
          "size": 65,
          "color": "#F59E0B"
        }
      ],
      "options": [
        {
          "id": "opt_roof",
          "text": "The roof beam"
        },
        {
          "id": "opt_curtain",
          "text": "The curtain"
        },
        {
          "id": "opt_match",
          "text": "The match in your hand",
          "isCorrect": true
        },
        {
          "id": "opt_hearth",
          "text": "The fireplace"
        }
      ]
    },
    "answer": "opt_match",
    "hint1": "Think about what is actively burning your own skin right now.",
    "hint2": "Put out what burns your own fingers first before anything else in the room.",
    "explanation": "Ouch! Put out the match burning your own hand first, or you cannot fight any other fire!",
    "reward": 10
  },
  {
    "id": 8,
    "type": "choice",
    "title": "Which Way?",
    "instruction": "Which way is the school bus traveling?",
    "sceneConfig": {
      "background": "#FFFDF9",
      "items": [
        {
          "id": "bus_body",
          "shape": "box",
          "text": "🚌",
          "label": "School Bus",
          "x": 50,
          "y": 40,
          "size": 100,
          "color": "#FBBF24"
        },
        {
          "id": "exhaust_plume",
          "shape": "cloud",
          "label": "Vapor Trail",
          "x": 85,
          "y": 45,
          "size": 40,
          "color": "#E2E8F0"
        }
      ],
      "options": [
        {
          "id": "opt_left",
          "text": "Toward the Left",
          "isCorrect": true
        },
        {
          "id": "opt_right",
          "text": "Toward the Right"
        },
        {
          "id": "opt_reverse",
          "text": "Reversing Backwards"
        },
        {
          "id": "opt_idle",
          "text": "Parked at the Curb"
        }
      ]
    },
    "answer": "opt_left",
    "hint1": "Inspect the side of the bus facing you. What key part is missing?",
    "hint2": "Because no passenger boarding doors are visible on this side, they must be facing the curb on the other side. That means the front faces Left!",
    "explanation": "Bus doors are on the curb side. Since none are visible here, the doors are on the opposite side, meaning the front faces Left!",
    "reward": 10
  },
  {
    "id": 9,
    "type": "tap",
    "title": "Find the Lucky Clover",
    "instruction": "Find the rare 4-leaf clover!",
    "sceneConfig": {
      "background": "#FFFDF9",
      "items": [
        {
          "id": "clover_1",
          "shape": "circle",
          "text": "☘️",
          "label": "3-Leaf Clover",
          "x": 22,
          "y": 30,
          "size": 55,
          "color": "#16A34A"
        },
        {
          "id": "clover_2",
          "shape": "circle",
          "text": "☘️",
          "label": "3-Leaf Clover",
          "x": 74,
          "y": 30,
          "size": 55,
          "color": "#16A34A"
        },
        {
          "id": "clover_3",
          "shape": "circle",
          "text": "☘️",
          "label": "3-Leaf Clover",
          "x": 30,
          "y": 65,
          "size": 55,
          "color": "#16A34A"
        },
        {
          "id": "clover_decoy",
          "shape": "circle",
          "text": "🌿",
          "label": "Green Sprig",
          "x": 50,
          "y": 35,
          "size": 50,
          "color": "#15803D"
        },
        {
          "id": "clover_lucky",
          "shape": "circle",
          "text": "🍀",
          "label": "4-Leaf Clover",
          "x": 70,
          "y": 68,
          "size": 58,
          "color": "#16A34A",
          "isTarget": true
        }
      ]
    },
    "answer": "clover_lucky",
    "hint1": "Most clovers in this field have 3 leaves, but one lucky clover has 4.",
    "hint2": "Look near the bottom right for the clover with four heart-shaped leaves!",
    "explanation": "You found the rare lucky four-leaf clover nestled among standard three-leaf clovers!",
    "reward": 10
  },
  {
    "id": 10,
    "type": "hold",
    "title": "Crack the Safe",
    "instruction": "Press and hold the safe dial to open it.",
    "sceneConfig": {
      "background": "#FFFDF9",
      "holdDurationMs": 1400,
      "items": [
        {
          "id": "vault_dial",
          "shape": "circle",
          "text": "🔒",
          "label": "Safe Dial",
          "x": 50,
          "y": 40,
          "size": 90,
          "color": "#475569"
        },
        {
          "id": "tamper_tripwire",
          "shape": "box",
          "text": "⚡",
          "label": "Alarm Tripwire",
          "x": 22,
          "y": 68,
          "size": 50,
          "color": "#DC2626"
        },
        {
          "id": "digital_keypad",
          "shape": "box",
          "text": "🔢",
          "label": "Keypad",
          "x": 78,
          "y": 68,
          "size": 50,
          "color": "#0284C7"
        }
      ]
    },
    "answer": "hold_success",
    "hint1": "Quick tapping won't unlock the safe — you need continuous pressure.",
    "hint2": "Press and keep holding your finger on the round dial until the lock clicks!",
    "explanation": "Sustained pressure aligned the tumblers smoothly, unlocking the reinforced safe!",
    "reward": 10
  },
  {
    "id": 11,
    "type": "drag",
    "title": "Feed the Puppy",
    "instruction": "Feed the hungry puppy the right food.",
    "sceneConfig": {
      "background": "#FFFDF9",
      "items": [
        {
          "id": "marrow_bone",
          "shape": "circle",
          "text": "🦴",
          "label": "Marrow Bone",
          "x": 22,
          "y": 65,
          "size": 60,
          "color": "#F1F5F9",
          "draggable": true,
          "targetDropZone": "puppy_bowl"
        },
        {
          "id": "fiery_chili",
          "shape": "circle",
          "text": "🌶️",
          "label": "Spicy Chili",
          "x": 50,
          "y": 65,
          "size": 55,
          "color": "#EF4444",
          "draggable": true
        },
        {
          "id": "puppy_sentry",
          "shape": "circle",
          "text": "🐶",
          "label": "Cute Pup",
          "x": 75,
          "y": 35,
          "size": 65,
          "color": "#D97706"
        }
      ],
      "dropZones": [
        {
          "id": "puppy_bowl",
          "label": "Feeding Dish",
          "x": 75,
          "y": 65,
          "width": 85,
          "height": 85,
          "acceptItemId": "marrow_bone"
        }
      ]
    },
    "answer": "puppy_bowl",
    "hint1": "Spicy peppers will upset the puppy's stomach!",
    "hint2": "Drag the bone directly into the puppy's feeding bowl on the right.",
    "explanation": "The happy pup wags its tail enthusiastically over the delicious bone!",
    "reward": 10
  },
  {
    "id": 12,
    "type": "tap",
    "title": "Spot the Bee Queen",
    "instruction": "Find the Queen Bee!",
    "sceneConfig": {
      "background": "#FFFDF9",
      "items": [
        {
          "id": "worker_1",
          "shape": "bee",
          "text": "🐝",
          "label": "Scout Bee",
          "x": 22,
          "y": 30,
          "size": 52,
          "color": "#F59E0B"
        },
        {
          "id": "worker_2",
          "shape": "bee",
          "text": "🐝",
          "label": "Nurse Bee",
          "x": 76,
          "y": 30,
          "size": 52,
          "color": "#F59E0B"
        },
        {
          "id": "drone_heavy",
          "shape": "bee",
          "text": "🐝",
          "label": "Heavy Drone",
          "x": 30,
          "y": 65,
          "size": 68,
          "color": "#D97706"
        },
        {
          "id": "queen_bee",
          "shape": "bee",
          "text": "👑",
          "label": "Queen Bee 👑",
          "x": 55,
          "y": 48,
          "size": 72,
          "color": "#F59E0B",
          "isTarget": true
        },
        {
          "id": "hornet_decoy",
          "shape": "bee",
          "text": "🐝",
          "label": "Amber Bee",
          "x": 80,
          "y": 65,
          "size": 60,
          "color": "#B45309"
        }
      ]
    },
    "answer": "queen_bee",
    "hint1": "Look for the royal crown, not just the bee's size.",
    "hint2": "Tap the central bee distinguished by the sparkling golden crown.",
    "explanation": "Hail the Queen! The hive hums with loyalty around their crowned sovereign.",
    "reward": 10
  },
  {
    "id": 13,
    "type": "swipe",
    "title": "Clear the Storm",
    "instruction": "Swipe the storm clouds away to reveal the sun!",
    "sceneConfig": {
      "background": "#FFFDF9",
      "swipeDirection": "right",
      "items": [
        {
          "id": "storm_clouds",
          "shape": "cloud",
          "label": "Stormcloud",
          "x": 50,
          "y": 40,
          "size": 90,
          "color": "#475569"
        },
        {
          "id": "lightning_rod",
          "shape": "box",
          "text": "⚡",
          "label": "Lightning Rod",
          "x": 80,
          "y": 70,
          "size": 45,
          "color": "#FBBF24"
        }
      ]
    },
    "answer": "right",
    "hint1": "Tapping won't move the clouds — push them aside like a gust of wind!",
    "hint2": "Swipe your finger horizontally from left to right across the screen.",
    "explanation": "A fresh breeze swept across, scattering the storm clouds and revealing azure skies!",
    "reward": 10
  },
  {
    "id": 14,
    "type": "choice",
    "title": "How Many Holes?",
    "instruction": "A shirt has 2 holes cut straight through it. How many holes are there in total?",
    "sceneConfig": {
      "background": "#FFFDF9",
      "items": [
        {
          "id": "shirt_doodle",
          "text": "👕",
          "label": "Cut T-Shirt",
          "shape": "circle",
          "x": 50,
          "y": 35,
          "size": 85,
          "color": "#E0E7FF"
        }
      ],
      "options": [
        {
          "id": "opt_4",
          "text": "4 Holes"
        },
        {
          "id": "opt_6",
          "text": "6 Holes"
        },
        {
          "id": "opt_8",
          "text": "8 Holes",
          "isCorrect": true
        },
        {
          "id": "opt_10",
          "text": "10 Holes"
        }
      ]
    },
    "answer": "opt_8",
    "hint1": "Count every opening necessary to wear the shirt, plus the cuts.",
    "hint2": "4 base openings (neck, waist, 2 sleeves) plus 4 cut edges (2 in front, 2 in back) = 8 total!",
    "explanation": "Every shirt has 4 base openings. The 2 cuts pass through both front and back fabric layers, adding 4 more holes for 8 total!",
    "reward": 10
  },
  {
    "id": 15,
    "type": "choice",
    "title": "Pond Duck Count",
    "instruction": "How many LIVING ducks are in the pond?",
    "sceneConfig": {
      "background": "#FFFDF9",
      "items": [
        {
          "id": "duck_1",
          "text": "🦆",
          "label": "Living Duck",
          "x": 18,
          "y": 28,
          "size": 55,
          "color": "#BAE6FD"
        },
        {
          "id": "duck_2",
          "text": "🦆",
          "label": "Living Duck",
          "x": 48,
          "y": 22,
          "size": 55,
          "color": "#BAE6FD"
        },
        {
          "id": "duck_3",
          "text": "🦆",
          "label": "Living Duck",
          "x": 80,
          "y": 32,
          "size": 55,
          "color": "#BAE6FD"
        },
        {
          "id": "duck_4",
          "text": "🦆",
          "label": "Living Duck",
          "x": 28,
          "y": 58,
          "size": 55,
          "color": "#BAE6FD"
        },
        {
          "id": "duck_toy",
          "text": "🐥",
          "label": "Rubber Float",
          "x": 72,
          "y": 58,
          "size": 55,
          "color": "#FEF08A"
        },
        {
          "id": "wooden_decoy",
          "text": "🪵",
          "label": "Carved Decoy",
          "x": 50,
          "y": 72,
          "size": 45,
          "color": "#B45309"
        }
      ],
      "options": [
        {
          "id": "opt_3",
          "text": "3 Living Ducks"
        },
        {
          "id": "opt_4",
          "text": "4 Living Ducks",
          "isCorrect": true
        },
        {
          "id": "opt_5",
          "text": "5 Living Ducks"
        },
        {
          "id": "opt_6",
          "text": "6 Living Ducks"
        }
      ]
    },
    "answer": "opt_4",
    "hint1": "Toys and wood carvings aren't living birds!",
    "hint2": "Exclude both the rubber bath duck and the carved wooden decoy from the count.",
    "explanation": "Four real mallards swim alongside the bath toy and wooden decoy, making exactly 4 living ducks!",
    "reward": 10
  },
  {
    "id": 16,
    "type": "multi-tap",
    "title": "Ring the Bell",
    "instruction": "Ring the bell 3 times!",
    "sceneConfig": {
      "background": "#FFFDF9",
      "items": [
        {
          "id": "brass_bell",
          "text": "🔔",
          "label": "Bronze Bell",
          "shape": "circle",
          "x": 45,
          "y": 45,
          "size": 80,
          "color": "#FEF08A",
          "tapCountRequired": 3
        },
        {
          "id": "sandglass_timer",
          "text": "⏳",
          "label": "Hourglass",
          "shape": "circle",
          "x": 78,
          "y": 48,
          "size": 55,
          "color": "#CBD5E1"
        }
      ]
    },
    "answer": "brass_bell",
    "hint1": "Tap directly on the shiny bronze bell.",
    "hint2": "Tap the bell 3 times in a row: Ding, Ding, Ding!",
    "explanation": "Ding! Dong! Ding! Three resonant strikes ring out, gathering everyone together!",
    "reward": 10
  },
  {
    "id": 17,
    "type": "drag",
    "title": "Fill the Water Glass",
    "instruction": "Fill the glass with clean drinking water.",
    "sceneConfig": {
      "background": "#FFFDF9",
      "items": [
        {
          "id": "water_pitcher",
          "text": "🫗",
          "label": "Water Pitcher",
          "shape": "circle",
          "x": 22,
          "y": 60,
          "size": 65,
          "color": "#E0F2FE",
          "draggable": true,
          "targetDropZone": "glass_zone"
        },
        {
          "id": "oil_flask",
          "text": "🛢️",
          "label": "Lamp Oil",
          "shape": "circle",
          "x": 50,
          "y": 60,
          "size": 55,
          "color": "#334155",
          "draggable": true
        },
        {
          "id": "empty_glass",
          "shape": "cup",
          "label": "Empty Glass",
          "x": 78,
          "y": 50,
          "size": 60,
          "color": "#F1F5F9"
        }
      ],
      "dropZones": [
        {
          "id": "glass_zone",
          "label": "Glass Opening",
          "x": 78,
          "y": 50,
          "width": 85,
          "height": 85,
          "acceptItemId": "water_pitcher"
        }
      ]
    },
    "answer": "glass_zone",
    "hint1": "Only clear spring water quenches thirst — avoid the dark lamp oil!",
    "hint2": "Drag the blue water pitcher directly over the empty glass.",
    "explanation": "Splash! Crisp mountain spring water fills the glass to the brim!",
    "reward": 10
  },
  {
    "id": 18,
    "type": "sequence",
    "title": "Traffic Light Sequence",
    "instruction": "Tap the traffic lights in standard driving order!",
    "sceneConfig": {
      "background": "#FFFDF9",
      "items": [
        {
          "id": "light_yellow",
          "text": "🟡",
          "label": "Yellow Light",
          "shape": "circle",
          "x": 50,
          "y": 30,
          "size": 60,
          "color": "#FEF08A"
        },
        {
          "id": "light_red",
          "text": "🔴",
          "label": "Red Light",
          "shape": "circle",
          "x": 20,
          "y": 52,
          "size": 60,
          "color": "#FECACA"
        },
        {
          "id": "light_green",
          "text": "🟢",
          "label": "Green Light",
          "shape": "circle",
          "x": 80,
          "y": 52,
          "size": 60,
          "color": "#BBF7D0"
        },
        {
          "id": "beacon_blue",
          "text": "🔵",
          "label": "Blue Beacon",
          "shape": "circle",
          "x": 50,
          "y": 72,
          "size": 50,
          "color": "#93C5FD"
        }
      ],
      "sequenceTargets": [
        "light_red",
        "light_yellow",
        "light_green"
      ]
    },
    "answer": [
      "light_red",
      "light_yellow",
      "light_green"
    ],
    "hint1": "Think of the standard traffic sequence: Stop first, then prepare, then go!",
    "hint2": "Tap Red (Stop) first, then Yellow (Prepare), then Green (Go).",
    "explanation": "Red halt, Yellow caution, Green proceed! Safe transit preserved!",
    "reward": 10
  },
  {
    "id": 19,
    "type": "tap",
    "title": "Find the Black Sheep",
    "instruction": "Find the black sheep in the meadow!",
    "sceneConfig": {
      "background": "#FFFDF9",
      "items": [
        {
          "id": "sheep_1",
          "text": "🐑",
          "label": "White Sheep",
          "x": 20,
          "y": 25,
          "size": 55,
          "color": "#F8FAFC"
        },
        {
          "id": "sheep_2",
          "text": "🐑",
          "label": "White Sheep",
          "x": 75,
          "y": 25,
          "size": 55,
          "color": "#F8FAFC"
        },
        {
          "id": "sheep_3",
          "text": "🐑",
          "label": "White Sheep",
          "x": 50,
          "y": 50,
          "size": 55,
          "color": "#F8FAFC"
        },
        {
          "id": "charcoal_boulder",
          "text": "🪨",
          "label": "Dark Rock",
          "x": 72,
          "y": 70,
          "size": 50,
          "color": "#64748B"
        },
        {
          "id": "sheep_black",
          "text": "🐑",
          "label": "Black Sheep",
          "x": 28,
          "y": 70,
          "size": 55,
          "color": "#1E293B",
          "isTarget": true
        }
      ]
    },
    "answer": "sheep_black",
    "hint1": "Dark wool stands distinct from white fleece and lifeless stone.",
    "hint2": "Look at the living sheep on the lower left, not the hard basalt stone.",
    "explanation": "Baa! The unique black sheep bleats happily upon discovery!",
    "reward": 10
  },
  {
    "id": 20,
    "type": "hold",
    "title": "Keep It Steady",
    "instruction": "Hold the scale steady to balance it!",
    "sceneConfig": {
      "background": "#FFFDF9",
      "holdDurationMs": 1500,
      "items": [
        {
          "id": "scale_icon",
          "text": "⚖️",
          "label": "Gold Scales",
          "shape": "circle",
          "x": 50,
          "y": 35,
          "size": 80,
          "color": "#E2E8F0"
        },
        {
          "id": "lead_weight",
          "text": "🪙",
          "label": "Counterweight",
          "shape": "circle",
          "x": 78,
          "y": 65,
          "size": 45,
          "color": "#94A3B8"
        }
      ]
    },
    "answer": "hold_success",
    "hint1": "Tapping will tip the balance — steady continuous pressure is required.",
    "hint2": "Keep your finger firmly pressed on the center of the scale until the balance locks!",
    "explanation": "Perfect balance! Both trays are now equal, completing the level!",
    "reward": 10
  },
  {
    "id": 21,
    "type": "choice",
    "title": "The Heavy Gold",
    "instruction": "Which is heavier: 1kg of gold or 1kg of feathers?",
    "sceneConfig": {
      "background": "#FFFDF9",
      "items": [
        {
          "id": "gold_bar",
          "text": "🥇",
          "label": "1 kg Bullion",
          "x": 30,
          "y": 40,
          "size": 65,
          "color": "#FEF08A"
        },
        {
          "id": "feathers",
          "text": "🪶",
          "label": "1 kg Plumage",
          "x": 70,
          "y": 40,
          "size": 65,
          "color": "#E0E7FF"
        }
      ],
      "options": [
        {
          "id": "opt_gold",
          "text": "The Bullion (due to density)"
        },
        {
          "id": "opt_feathers",
          "text": "The Plumage (due to air resistance)"
        },
        {
          "id": "opt_equal",
          "text": "Both gravimetric burdens are identical",
          "isCorrect": true
        },
        {
          "id": "opt_pressure",
          "text": "Dependent on barometric altitude"
        }
      ]
    },
    "answer": "opt_equal",
    "hint1": "Do not conflate spatial density or visual bulk with calibrated mass.",
    "hint2": "A kilogram remains exactly one kilogram, regardless of elemental composition.",
    "explanation": "A timeless logic riddle: one kilogram of mass equals one kilogram of mass, regardless of matter!",
    "reward": 10
  },
  {
    "id": 22,
    "type": "tap",
    "title": "Pop the Red Balloon",
    "instruction": "Pop the red balloon.",
    "sceneConfig": {
      "background": "#FFFDF9",
      "items": [
        {
          "id": "bal_blue",
          "shape": "balloon",
          "label": "Cobalt",
          "x": 18,
          "y": 40,
          "size": 62,
          "color": "#3B82F6"
        },
        {
          "id": "bal_green",
          "shape": "balloon",
          "label": "Emerald",
          "x": 40,
          "y": 30,
          "size": 62,
          "color": "#10B981"
        },
        {
          "id": "bal_orange",
          "shape": "balloon",
          "label": "Amber",
          "x": 62,
          "y": 50,
          "size": 62,
          "color": "#F97316"
        },
        {
          "id": "bal_red",
          "shape": "balloon",
          "label": "Crimson",
          "x": 84,
          "y": 40,
          "size": 62,
          "color": "#EF4444",
          "isTarget": true
        }
      ]
    },
    "answer": "bal_red",
    "hint1": "Recall the low-frequency, long-wave red terminus of the visible light spectrum.",
    "hint2": "Distinguish pure crimson red from secondary orange on the far right.",
    "explanation": "Pop! The crimson balloon explodes with the longest visible wavelength (~700nm)!",
    "reward": 10
  },
  {
    "id": 23,
    "type": "drag",
    "title": "Catch the Golden Fish",
    "instruction": "Catch the golden fish.",
    "sceneConfig": {
      "background": "#FFFDF9",
      "items": [
        {
          "id": "fishing_hook",
          "text": "🪝",
          "label": "Iron Tackle",
          "shape": "circle",
          "x": 22,
          "y": 25,
          "size": 60,
          "color": "#CBD5E1",
          "draggable": true,
          "targetDropZone": "fish_pond"
        },
        {
          "id": "sunken_boot",
          "text": "👢",
          "label": "Waterlogged Boot",
          "shape": "box",
          "x": 45,
          "y": 65,
          "size": 50,
          "color": "#78350F",
          "draggable": true
        },
        {
          "id": "gold_fish",
          "shape": "fish",
          "label": "Auric Swimmer",
          "x": 75,
          "y": 65,
          "size": 65,
          "color": "#F59E0B"
        }
      ],
      "dropZones": [
        {
          "id": "fish_pond",
          "label": "Tide Pool",
          "x": 75,
          "y": 65,
          "width": 85,
          "height": 85,
          "acceptItemId": "fishing_hook",
          "bgColor": "#E0F2FE"
        }
      ]
    },
    "answer": "fish_pond",
    "hint1": "Lower the metallic barb directly toward the shimmering reflection in the tide pool.",
    "hint2": "Drag the hook straight onto the designated fishing target zone around the golden fish.",
    "explanation": "Strike! The rare golden fish takes the lure and leaps from the water!",
    "reward": 10
  },
  {
    "id": 24,
    "type": "sequence",
    "title": "Starlight Constellation",
    "instruction": "Connect the stars from 1 to 5.",
    "sceneConfig": {
      "background": "#FFFDF9",
      "items": [
        {
          "id": "star_3",
          "text": "3",
          "shape": "circle",
          "x": 22,
          "y": 32,
          "size": 58,
          "color": "#FEF08A"
        },
        {
          "id": "star_1",
          "text": "1",
          "shape": "circle",
          "x": 76,
          "y": 25,
          "size": 58,
          "color": "#FEF08A"
        },
        {
          "id": "star_4",
          "text": "4",
          "shape": "circle",
          "x": 32,
          "y": 65,
          "size": 58,
          "color": "#FEF08A"
        },
        {
          "id": "star_2",
          "text": "2",
          "shape": "circle",
          "x": 72,
          "y": 62,
          "size": 58,
          "color": "#FEF08A"
        },
        {
          "id": "star_comet",
          "text": "☄️",
          "shape": "circle",
          "x": 50,
          "y": 48,
          "size": 48,
          "color": "#BAE6FD"
        }
      ],
      "sequenceTargets": [
        "star_1",
        "star_2",
        "star_3",
        "star_4"
      ]
    },
    "answer": [
      "star_1",
      "star_2",
      "star_3",
      "star_4"
    ],
    "hint1": "Begin at prime unity and avoid erratic meteoric distractions.",
    "hint2": "Trace in exact cardinal progression: Star 1, Star 2, Star 3, Star 4.",
    "explanation": "The celestial lines connect to reveal the Ancient Pathfinder constellation!",
    "reward": 10
  },
  {
    "id": 25,
    "type": "swipe",
    "title": "Cool the Tea",
    "instruction": "Cool down the hot tea.",
    "sceneConfig": {
      "background": "#FFFDF9",
      "swipeDirection": "right",
      "items": [
        {
          "id": "hot_cup",
          "shape": "cup",
          "label": "Scalding Infusion",
          "x": 48,
          "y": 45,
          "size": 80,
          "color": "#F97316"
        },
        {
          "id": "ice_shard",
          "text": "🧊",
          "label": "Decoy Frost",
          "x": 80,
          "y": 70,
          "size": 45,
          "color": "#E0F2FE"
        }
      ]
    },
    "answer": "right",
    "hint1": "Forced aerodynamic convection accelerates boundary layer heat loss.",
    "hint2": "Swipe horizontally rightward directly across the rising vapor plume.",
    "explanation": "A brisk gust of air cools the tea to the perfect drinking temperature!",
    "reward": 10
  }
];
