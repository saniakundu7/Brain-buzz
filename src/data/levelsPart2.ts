import { PuzzleLevel } from '../types';

export const levelsPart2: PuzzleLevel[] = [
  {
    "id": 26,
    "type": "drag",
    "title": "Plant the Flower",
    "instruction": "Plant the seed.",
    "sceneConfig": {
      "background": "#FFFDF9",
      "items": [
        {
          "id": "seed_item",
          "text": "🌰",
          "label": "Fertile Seed",
          "shape": "circle",
          "x": 22,
          "y": 70,
          "size": 55,
          "color": "#92400E",
          "draggable": true,
          "targetDropZone": "flower_pot"
        },
        {
          "id": "pebble_decoy",
          "text": "🪨",
          "label": "River Shingle",
          "shape": "circle",
          "x": 50,
          "y": 70,
          "size": 50,
          "color": "#64748B",
          "draggable": true
        },
        {
          "id": "pot_item",
          "shape": "cup",
          "label": "Terracotta Pot",
          "x": 75,
          "y": 55,
          "size": 70,
          "color": "#B45309"
        }
      ],
      "dropZones": [
        {
          "id": "flower_pot",
          "label": "Soil Basin",
          "x": 75,
          "y": 55,
          "width": 85,
          "height": 85,
          "acceptItemId": "seed_item"
        }
      ]
    },
    "answer": "flower_pot",
    "hint1": "Sterile river shingles cannot germinate root structures.",
    "hint2": "Deposit the botanical seed directly into the terracotta soil planter.",
    "explanation": "The seed settles into moist earth, ready to germinate in the morning sun!",
    "reward": 10
  },
  {
    "id": 27,
    "type": "drag",
    "title": "Water the Sprout",
    "instruction": "Water the plant.",
    "sceneConfig": {
      "background": "#FFFDF9",
      "items": [
        {
          "id": "watering_can",
          "text": "🫖",
          "label": "Garden Sprinkler",
          "shape": "cup",
          "x": 22,
          "y": 35,
          "size": 65,
          "color": "#38BDF8",
          "draggable": true,
          "targetDropZone": "sprout_zone"
        },
        {
          "id": "tannin_flagon",
          "text": "🍾",
          "label": "Bitter Tannin",
          "shape": "cup",
          "x": 50,
          "y": 35,
          "size": 55,
          "color": "#78350F",
          "draggable": true
        },
        {
          "id": "sprout_item",
          "shape": "star",
          "label": "Tender Shoot",
          "x": 75,
          "y": 65,
          "size": 60,
          "color": "#22C55E"
        }
      ],
      "dropZones": [
        {
          "id": "sprout_zone",
          "label": "Root Mound",
          "x": 75,
          "y": 65,
          "width": 85,
          "height": 85,
          "acceptItemId": "watering_can"
        }
      ]
    },
    "answer": "sprout_zone",
    "hint1": "Pure freshwater is essential; acidic tannin will scorch tender roots.",
    "hint2": "Invert the blue watering sprinkler directly over the sprout's root mound.",
    "explanation": "Refreshing water droplets seep into the loam, and the sprout unfurls a vibrant green leaf!",
    "reward": 10
  },
  {
    "id": 28,
    "type": "multi-tap",
    "title": "Knock Knock",
    "instruction": "Knock on the door 4 times.",
    "sceneConfig": {
      "background": "#FFFDF9",
      "items": [
        {
          "id": "wooden_door",
          "shape": "box",
          "label": "Reinforced Gate",
          "x": 45,
          "y": 45,
          "size": 85,
          "color": "#78350F",
          "tapCountRequired": 4
        },
        {
          "id": "iron_grate",
          "shape": "box",
          "text": "🪟",
          "label": "Sentry Peephole",
          "x": 78,
          "y": 45,
          "size": 50,
          "color": "#334155"
        }
      ]
    },
    "answer": "wooden_door",
    "hint1": "A solitary rap is dismissed as wind rattled against the wood.",
    "hint2": "Deliver exactly four rhythmic taps upon the wooden portal.",
    "explanation": "Thud! Thud! Thud! Thud! The heavy crossbar slides back and the gateway swings wide.",
    "reward": 10
  },
  {
    "id": 29,
    "type": "choice",
    "title": "Sweetest of All",
    "instruction": "Which fruit is the sweetest?",
    "sceneConfig": {
      "background": "#FFFDF9",
      "items": [
        {
          "id": "lemon",
          "shape": "circle",
          "text": "🍋",
          "label": "Canyon Citron",
          "x": 20,
          "y": 40,
          "size": 55,
          "color": "#FEF08A"
        },
        {
          "id": "apple",
          "shape": "apple",
          "label": "Orchard Crisp",
          "x": 50,
          "y": 40,
          "size": 55,
          "color": "#EF4444"
        },
        {
          "id": "honeycomb",
          "shape": "star",
          "text": "🍯",
          "label": "Wild Honeycomb",
          "x": 80,
          "y": 40,
          "size": 55,
          "color": "#F59E0B"
        }
      ],
      "options": [
        {
          "id": "opt_lemon",
          "text": "Canyon Citron"
        },
        {
          "id": "opt_apple",
          "text": "Orchard Crisp"
        },
        {
          "id": "opt_honey",
          "text": "Wild Honeycomb",
          "isCorrect": true
        },
        {
          "id": "opt_dates",
          "text": "Sun-Dried Dates"
        }
      ]
    },
    "answer": "opt_honey",
    "hint1": "Consider what industrious insects distill from thousands of concentrated blossoms.",
    "hint2": "Pure raw honeycomb contains over 80% natural sugars, far outpacing fresh orchard fruits.",
    "explanation": "Honeycomb is nature's most concentrated sugar source, distilled by bees to over 80% sugar content!",
    "reward": 10
  },
  {
    "id": 30,
    "type": "hold",
    "title": "Quiet in the Library",
    "instruction": "Make it completely quiet.",
    "sceneConfig": {
      "background": "#FFFDF9",
      "holdDurationMs": 1500,
      "items": [
        {
          "id": "shh_icon",
          "shape": "circle",
          "text": "🤫",
          "label": "Silence Glyph",
          "x": 45,
          "y": 40,
          "size": 80,
          "color": "#6366F1"
        },
        {
          "id": "parchment_scroll",
          "shape": "box",
          "text": "📜",
          "label": "Reading Desk",
          "x": 78,
          "y": 45,
          "size": 50,
          "color": "#FEF3C7"
        }
      ]
    },
    "answer": "hold_success",
    "hint1": "A fleeting shush fails to calm echoing whispers in the stone vault.",
    "hint2": "Press and hold the silence glyph continuously until the acoustic meter stabilizes.",
    "explanation": "Total stillness descends upon the ancient library archives.",
    "reward": 10
  },
  {
    "id": 31,
    "type": "drag",
    "title": "The Golden Key",
    "instruction": "Unlock the treasure chest.",
    "sceneConfig": {
      "background": "#FFFDF9",
      "items": [
        {
          "id": "golden_key",
          "shape": "key",
          "label": "Auric Key",
          "x": 22,
          "y": 35,
          "size": 60,
          "color": "#F59E0B",
          "draggable": true,
          "targetDropZone": "keyhole_target"
        },
        {
          "id": "rusted_tack",
          "shape": "circle",
          "text": "🗝️",
          "label": "Corroded Iron",
          "x": 22,
          "y": 65,
          "size": 55,
          "color": "#64748B",
          "draggable": true
        },
        {
          "id": "chest_target",
          "shape": "box",
          "text": "🔒",
          "label": "Locked Chest",
          "x": 75,
          "y": 50,
          "size": 75,
          "color": "#78350F"
        }
      ],
      "dropZones": [
        {
          "id": "keyhole_target",
          "label": "Keyhole",
          "x": 75,
          "y": 50,
          "width": 85,
          "height": 85,
          "acceptItemId": "golden_key"
        }
      ]
    },
    "answer": "keyhole_target",
    "hint1": "The rusty iron key won't work — only the golden key fits the lock.",
    "hint2": "Drag the golden key into the keyhole on the chest.",
    "explanation": "Click! The golden key turns and unlocks the treasure chest!",
    "reward": 10
  },
  {
    "id": 32,
    "type": "drag",
    "title": "Light the Campfire",
    "instruction": "Start the campfire.",
    "sceneConfig": {
      "background": "#FFFDF9",
      "items": [
        {
          "id": "lit_flame",
          "shape": "fire",
          "label": "Burning Taper",
          "x": 22,
          "y": 40,
          "size": 60,
          "color": "#EF4444",
          "draggable": true,
          "targetDropZone": "wood_zone"
        },
        {
          "id": "damp_lichen",
          "shape": "circle",
          "text": "🌿",
          "label": "Wet Lichen",
          "x": 50,
          "y": 70,
          "size": 50,
          "color": "#15803D",
          "draggable": true
        },
        {
          "id": "wood_logs",
          "shape": "box",
          "text": "🪵",
          "label": "Seasoned Hearth",
          "x": 75,
          "y": 55,
          "size": 75,
          "color": "#B45309"
        }
      ],
      "dropZones": [
        {
          "id": "wood_zone",
          "label": "Kindling Pit",
          "x": 75,
          "y": 55,
          "width": 85,
          "height": 85,
          "acceptItemId": "lit_flame"
        }
      ]
    },
    "answer": "wood_zone",
    "hint1": "Moist lichen chokes the draft; direct ignition must touch dry kindling.",
    "hint2": "Drag the burning taper directly onto the seasoned hearth logs.",
    "explanation": "Crackling embers surge into a warm campfire, warding off the alpine chill!",
    "reward": 10
  },
  {
    "id": 33,
    "type": "drag",
    "title": "Sort the Recycling",
    "instruction": "Put the plastic bottle in the recycling bin.",
    "sceneConfig": {
      "background": "#FFFDF9",
      "items": [
        {
          "id": "plastic_bottle",
          "shape": "cup",
          "text": "🧴",
          "label": "PET Flask",
          "x": 20,
          "y": 60,
          "size": 60,
          "color": "#38BDF8",
          "draggable": true,
          "targetDropZone": "green_bin"
        },
        {
          "id": "apple_core",
          "shape": "apple",
          "text": "🍏",
          "label": "Organic Compost",
          "x": 50,
          "y": 60,
          "size": 55,
          "color": "#84CC16",
          "draggable": true
        },
        {
          "id": "bin_item",
          "shape": "box",
          "text": "♻️",
          "label": "Polymer Reclaim",
          "x": 78,
          "y": 45,
          "size": 75,
          "color": "#16A34A"
        }
      ],
      "dropZones": [
        {
          "id": "green_bin",
          "label": "Reclaim Hopper",
          "x": 78,
          "y": 45,
          "width": 85,
          "height": 85,
          "acceptItemId": "plastic_bottle"
        }
      ]
    },
    "answer": "green_bin",
    "hint1": "Organic compost contaminates dry polymer re-granulation lines.",
    "hint2": "Deposit the blue synthetic flask into the green recycling hopper.",
    "explanation": "Sorted! Recovered polymers are cleanly diverted for reprocessing.",
    "reward": 10
  },
  {
    "id": 34,
    "type": "sequence",
    "title": "Morning Routine",
    "instruction": "Order the morning routine.",
    "sceneConfig": {
      "background": "#FFFDF9",
      "items": [
        {
          "id": "step_eat",
          "shape": "cup",
          "text": "🥣",
          "label": "Ration Breakfast",
          "x": 22,
          "y": 45,
          "size": 60,
          "color": "#FEF08A"
        },
        {
          "id": "step_wake",
          "shape": "sun",
          "text": "🌅",
          "label": "Dawn Awakening",
          "x": 50,
          "y": 30,
          "size": 65,
          "color": "#F97316"
        },
        {
          "id": "step_brush",
          "shape": "box",
          "text": "🪥",
          "label": "Dental Hygiene",
          "x": 78,
          "y": 45,
          "size": 60,
          "color": "#93C5FD"
        },
        {
          "id": "step_sleep",
          "shape": "circle",
          "text": "🌙",
          "label": "Night Rest Decoy",
          "x": 50,
          "y": 72,
          "size": 50,
          "color": "#475569"
        }
      ],
      "sequenceTargets": [
        "step_wake",
        "step_brush",
        "step_eat"
      ]
    },
    "answer": [
      "step_wake",
      "step_brush",
      "step_eat"
    ],
    "hint1": "Consciousness precedes sanitation; sanitation precedes ingestion of rations.",
    "hint2": "Dawn Awakening first, followed by Dental Hygiene, concluding with Ration Breakfast.",
    "explanation": "Awaken, cleanse, and nourish! The expedition sets out refreshed and prepared.",
    "reward": 10
  },
  {
    "id": 35,
    "type": "tap",
    "title": "The Bitten Apple",
    "instruction": "Find the bitten apple.",
    "sceneConfig": {
      "background": "#FFFDF9",
      "items": [
        {
          "id": "app_1",
          "shape": "apple",
          "label": "Pristine Crisp",
          "x": 20,
          "y": 35,
          "size": 60,
          "color": "#EF4444"
        },
        {
          "id": "app_2",
          "shape": "apple",
          "label": "Unblemished Sweet",
          "x": 75,
          "y": 35,
          "size": 60,
          "color": "#EF4444"
        },
        {
          "id": "app_russet",
          "shape": "apple",
          "label": "Russet Spot",
          "x": 25,
          "y": 68,
          "size": 58,
          "color": "#B45309"
        },
        {
          "id": "app_bitten",
          "shape": "apple",
          "label": "Compromised Fruit",
          "x": 72,
          "y": 68,
          "size": 60,
          "color": "#DC2626",
          "isTarget": true
        }
      ]
    },
    "answer": "app_bitten",
    "hint1": "Surface skin russeting is natural; look for a sharp missing arc of flesh.",
    "hint2": "Inspect the lower-right apple for the distinct crescent dental notch.",
    "explanation": "Found! Someone sneaked a crisp bite from this sweet provisions apple!",
    "reward": 10
  },
  {
    "id": 36,
    "type": "hold",
    "title": "Melt the Ice",
    "instruction": "Melt the ice cube.",
    "sceneConfig": {
      "background": "#FFFDF9",
      "holdDurationMs": 1600,
      "items": [
        {
          "id": "ice_cube",
          "shape": "box",
          "text": "🧊",
          "label": "Permafrost Core",
          "x": 45,
          "y": 40,
          "size": 85,
          "color": "#BAE6FD"
        },
        {
          "id": "salt_crystal",
          "shape": "circle",
          "text": "🧂",
          "label": "Salt Mineral Decoy",
          "x": 78,
          "y": 45,
          "size": 50,
          "color": "#CBD5E1"
        }
      ]
    },
    "answer": "hold_success",
    "hint1": "Intermittent taps cause zero thermal conduction into frozen crystal lattices.",
    "hint2": "Maintain firm, unbroken pressure upon the permafrost core until it melts completely.",
    "explanation": "Body heat conducts through the crystal matrix, melting it into crystal clear water!",
    "reward": 10
  },
  {
    "id": 37,
    "type": "drag",
    "title": "The Tall Giraffe",
    "instruction": "Give the giraffe the leaf.",
    "sceneConfig": {
      "background": "#FFFDF9",
      "items": [
        {
          "id": "apple_item",
          "shape": "apple",
          "label": "Canopy Apple",
          "x": 22,
          "y": 25,
          "size": 60,
          "color": "#EF4444",
          "draggable": true,
          "targetDropZone": "giraffe_mouth"
        },
        {
          "id": "hornet_nest",
          "shape": "circle",
          "text": "🪹",
          "label": "Wild Briar Nest",
          "x": 50,
          "y": 25,
          "size": 50,
          "color": "#78350F",
          "draggable": true
        },
        {
          "id": "giraffe_item",
          "shape": "circle",
          "text": "🦒",
          "label": "Savanna Giraffe",
          "x": 75,
          "y": 55,
          "size": 80,
          "color": "#F59E0B"
        }
      ],
      "dropZones": [
        {
          "id": "giraffe_mouth",
          "label": "Feeding Muzzle",
          "x": 75,
          "y": 45,
          "width": 85,
          "height": 85,
          "acceptItemId": "apple_item"
        }
      ]
    },
    "answer": "giraffe_mouth",
    "hint1": "Avoid disturbing stinging nests nestled among the canopy foliage.",
    "hint2": "Drag the crisp red apple down to the giraffe's feeding muzzle.",
    "explanation": "Munch! The tall savanna traveler chews happily on the sweet apple.",
    "reward": 10
  },
  {
    "id": 38,
    "type": "swipe",
    "title": "Turn on the Fan",
    "instruction": "Turn on the fan.",
    "sceneConfig": {
      "background": "#FFFDF9",
      "swipeDirection": "up",
      "items": [
        {
          "id": "room_fan",
          "shape": "star",
          "text": "💨",
          "label": "Ventilation Shutter",
          "x": 50,
          "y": 40,
          "size": 85,
          "color": "#38BDF8"
        },
        {
          "id": "toggle_decoy",
          "shape": "box",
          "text": "🔘",
          "label": "Fuse Switch",
          "x": 80,
          "y": 70,
          "size": 45,
          "color": "#64748B"
        }
      ]
    },
    "answer": "up",
    "hint1": "A physical upward flick triggers the master aerodynamic damper.",
    "hint2": "Swipe vertically upward across the center ventilation shutter.",
    "explanation": "Whirrr! Cool mountain air rushes through the turbine, refreshing the entire room.",
    "reward": 10
  },
  {
    "id": 39,
    "type": "choice",
    "title": "Star Triangles",
    "instruction": "How many triangles are in this star?",
    "sceneConfig": {
      "background": "#FFFDF9",
      "items": [
        {
          "id": "star_drawing",
          "shape": "star",
          "label": "Pentagram",
          "x": 50,
          "y": 35,
          "size": 90,
          "color": "#F59E0B"
        }
      ],
      "options": [
        {
          "id": "opt_5",
          "text": "5 Triangles"
        },
        {
          "id": "opt_8",
          "text": "8 Triangles"
        },
        {
          "id": "opt_10",
          "text": "10 Triangles",
          "isCorrect": true
        },
        {
          "id": "opt_12",
          "text": "12 Triangles"
        }
      ]
    },
    "answer": "opt_10",
    "hint1": "Account for both the 5 exterior radiating tips and the 5 larger overlapping triangles.",
    "hint2": "Each point forms an acute triangle (5), and combining two adjacent points forms a broader triangle (5) = 10 total!",
    "explanation": "There are 5 small outer triangles plus 5 large overlapping obtuse triangles, equaling 10 triangles in total!",
    "reward": 10
  },
  {
    "id": 40,
    "type": "swipe",
    "title": "Blow the Dandelion",
    "instruction": "Blow the dandelion seeds away.",
    "sceneConfig": {
      "background": "#FFFDF9",
      "swipeDirection": "right",
      "items": [
        {
          "id": "dandelion_flower",
          "shape": "circle",
          "text": "🌾",
          "label": "Seed Head",
          "x": 48,
          "y": 40,
          "size": 80,
          "color": "#CBD5E1"
        },
        {
          "id": "bumblebee_decoy",
          "shape": "bee",
          "text": "🐝",
          "label": "Foraging Worker",
          "x": 80,
          "y": 65,
          "size": 45,
          "color": "#F59E0B"
        }
      ]
    },
    "answer": "right",
    "hint1": "A lateral air current dislodges delicate pappus filaments from the receptacle.",
    "hint2": "Flick rightward across the seed head to scatter the seeds across the meadow.",
    "explanation": "Whoosh! Silken parachutes drift into the air, carrying wishes across the hills.",
    "reward": 10
  },
  {
    "id": 41,
    "type": "drag",
    "title": "Plug in the Charger",
    "instruction": "Connect the battery.",
    "sceneConfig": {
      "background": "#FFFDF9",
      "items": [
        {
          "id": "power_plug",
          "text": "🔌",
          "label": "Grounded Terminal",
          "shape": "circle",
          "x": 22,
          "y": 65,
          "size": 60,
          "color": "#3B82F6",
          "draggable": true,
          "targetDropZone": "wall_socket"
        },
        {
          "id": "aux_cord",
          "text": "🎧",
          "label": "Acoustic Jack",
          "shape": "circle",
          "x": 50,
          "y": 65,
          "size": 50,
          "color": "#64748B",
          "draggable": true
        },
        {
          "id": "outlet_item",
          "shape": "box",
          "label": "Mains Socket",
          "x": 75,
          "y": 40,
          "size": 65,
          "color": "#CBD5E1"
        }
      ],
      "dropZones": [
        {
          "id": "wall_socket",
          "label": "Mains Terminal",
          "x": 75,
          "y": 40,
          "width": 85,
          "height": 85,
          "acceptItemId": "power_plug"
        }
      ]
    },
    "answer": "wall_socket",
    "hint1": "Acoustic audio jacks cannot deliver alternating current.",
    "hint2": "Slide the dual-prong power terminal squarely into the mains receptacle.",
    "explanation": "Snap! Current flows into the accumulator, charging the expedition radio!",
    "reward": 10
  },
  {
    "id": 42,
    "type": "sequence",
    "title": "Alchemist's Potion",
    "instruction": "Mix the potions: Water, Leaf, Stone.",
    "sceneConfig": {
      "background": "#FFFDF9",
      "items": [
        {
          "id": "ing_crystal",
          "shape": "star",
          "text": "💎",
          "label": "Resonant Quartz",
          "x": 20,
          "y": 40,
          "size": 60,
          "color": "#A855F7"
        },
        {
          "id": "ing_water",
          "shape": "cup",
          "text": "💧",
          "label": "Glacial Solvent",
          "x": 50,
          "y": 30,
          "size": 60,
          "color": "#38BDF8"
        },
        {
          "id": "ing_herb",
          "shape": "circle",
          "text": "🌿",
          "label": "Botanical Essence",
          "x": 80,
          "y": 40,
          "size": 60,
          "color": "#22C55E"
        },
        {
          "id": "ing_brimstone",
          "shape": "box",
          "text": "🌋",
          "label": "Volcanic Sulfur Decoy",
          "x": 50,
          "y": 70,
          "size": 50,
          "color": "#F59E0B"
        }
      ],
      "sequenceTargets": [
        "ing_water",
        "ing_herb",
        "ing_crystal"
      ]
    },
    "answer": [
      "ing_water",
      "ing_herb",
      "ing_crystal"
    ],
    "hint1": "The solvent prepares the vessel; botanicals infuse; crystalline resonance seals.",
    "hint2": "Tap Glacial Solvent first, then Botanical Essence, and finish with Resonant Quartz.",
    "explanation": "The tincture bubbles with luminescence! The ancient elixir of endurance is brewed.",
    "reward": 10
  },
  {
    "id": 43,
    "type": "multi-tap",
    "title": "Pump the Bicycle Tire",
    "instruction": "Pump up the tire.",
    "sceneConfig": {
      "background": "#FFFDF9",
      "items": [
        {
          "id": "air_pump",
          "text": "⛽",
          "label": "Piston Pump",
          "shape": "circle",
          "x": 45,
          "y": 45,
          "size": 85,
          "color": "#EF4444",
          "tapCountRequired": 7
        },
        {
          "id": "tire_gauge",
          "text": "🧭",
          "label": "Pressure Dial Decoy",
          "shape": "circle",
          "x": 78,
          "y": 45,
          "size": 50,
          "color": "#94A3B8"
        }
      ]
    },
    "answer": "air_pump",
    "hint1": "Pneumatic displacement requires multiple deliberate compression cycles.",
    "hint2": "Depress the piston pump seven consecutive times without pause.",
    "explanation": "Pshht! Seven solid strokes inflate the tube to optimum road pressure!",
    "reward": 10
  },
  {
    "id": 44,
    "type": "tap",
    "title": "Catch the Blue Butterfly",
    "instruction": "Catch the blue butterfly.",
    "sceneConfig": {
      "background": "#FFFDF9",
      "items": [
        {
          "id": "bfly_yellow",
          "shape": "bee",
          "text": "🦋",
          "label": "Sulfur Wing",
          "x": 20,
          "y": 35,
          "size": 55,
          "color": "#FBBF24"
        },
        {
          "id": "bfly_pink",
          "shape": "bee",
          "text": "🦋",
          "label": "Rosette Wing",
          "x": 45,
          "y": 65,
          "size": 55,
          "color": "#F472B6"
        },
        {
          "id": "bfly_cyan_decoy",
          "shape": "bee",
          "text": "🦋",
          "label": "Pastel Teal Decoy",
          "x": 50,
          "y": 25,
          "size": 55,
          "color": "#67E8F9"
        },
        {
          "id": "bfly_blue",
          "shape": "bee",
          "text": "🦋",
          "label": "Deep Morpho",
          "x": 78,
          "y": 45,
          "size": 58,
          "color": "#2563EB",
          "isTarget": true
        }
      ]
    },
    "answer": "bfly_blue",
    "hint1": "Look for deep radiant sapphire iridescence rather than pale chalky teal.",
    "hint2": "Tap the rich royal blue butterfly fluttering on the right.",
    "explanation": "Caught! The rare Blue Morpho reveals brilliant structural scales on its wings.",
    "reward": 10
  },
  {
    "id": 45,
    "type": "swipe",
    "title": "Wipe the Steamy Mirror",
    "instruction": "Wipe the fog off the mirror.",
    "sceneConfig": {
      "background": "#FFFDF9",
      "swipeDirection": "left",
      "items": [
        {
          "id": "steamy_glass",
          "shape": "box",
          "text": "🌫️",
          "label": "Fogged Speculum",
          "x": 48,
          "y": 45,
          "size": 85,
          "color": "#94A3B8"
        },
        {
          "id": "steam_vent",
          "shape": "circle",
          "text": "♨️",
          "label": "Thermal Vent Decoy",
          "x": 80,
          "y": 70,
          "size": 45,
          "color": "#CBD5E1"
        }
      ]
    },
    "answer": "left",
    "hint1": "A lateral wiping motion across the pane shears condensed micro-droplets.",
    "hint2": "Swipe firmly toward the left across the frosted speculum.",
    "explanation": "Clear as crystal! The wiped glass reflects a determined explorer staring back.",
    "reward": 10
  },
  {
    "id": 46,
    "type": "drag",
    "title": "Balance the Cargo",
    "instruction": "Balance the boat.",
    "sceneConfig": {
      "background": "#FFFDF9",
      "items": [
        {
          "id": "heavy_crate",
          "shape": "box",
          "text": "📦",
          "label": "Ironwood Crate",
          "x": 22,
          "y": 25,
          "size": 65,
          "color": "#92400E",
          "draggable": true,
          "targetDropZone": "raft_center"
        },
        {
          "id": "anchor_stone",
          "shape": "circle",
          "text": "⚓",
          "label": "Stern Weight Decoy",
          "x": 50,
          "y": 70,
          "size": 50,
          "color": "#475569",
          "draggable": true
        },
        {
          "id": "wood_raft",
          "shape": "box",
          "text": "🛶",
          "label": "Timber Raft",
          "x": 75,
          "y": 55,
          "size": 75,
          "color": "#B45309"
        }
      ],
      "dropZones": [
        {
          "id": "raft_center",
          "label": "Raft Center",
          "x": 75,
          "y": 55,
          "width": 85,
          "height": 85,
          "acceptItemId": "heavy_crate"
        }
      ]
    },
    "answer": "raft_center",
    "hint1": "Place the heavy crate right in the center so the raft stays balanced.",
    "hint2": "Drag the heavy crate onto the center of the raft.",
    "explanation": "The raft is balanced and ready to sail!",
    "reward": 10
  },
  {
    "id": 47,
    "type": "swipe",
    "title": "Open the Theater Curtain",
    "instruction": "Open the curtains.",
    "sceneConfig": {
      "background": "#FFFDF9",
      "swipeDirection": "right",
      "items": [
        {
          "id": "stage_curtain",
          "shape": "box",
          "text": "🎭",
          "label": "Curtain",
          "x": 48,
          "y": 40,
          "size": 90,
          "color": "#991B1B"
        },
        {
          "id": "footlight",
          "shape": "circle",
          "text": "💡",
          "label": "Proscenium Lamp",
          "x": 80,
          "y": 70,
          "size": 45,
          "color": "#FEF08A"
        }
      ]
    },
    "answer": "right",
    "hint1": "Operate the traveller rigging along the horizontal stage track.",
    "hint2": "Slide the crimson velvet drapery rightward toward the stage wings.",
    "explanation": "Curtain up! Applause echoes through the hall as the performance begins.",
    "reward": 10
  },
  {
    "id": 48,
    "type": "choice",
    "title": "The Speed Champion",
    "instruction": "Which bird is the fastest?",
    "sceneConfig": {
      "background": "#FFFDF9",
      "items": [
        {
          "id": "cheetah",
          "shape": "circle",
          "text": "🐆",
          "label": "Cheetah",
          "x": 25,
          "y": 40,
          "size": 60,
          "color": "#FBBF24"
        },
        {
          "id": "falcon",
          "shape": "circle",
          "text": "🦅",
          "label": "Peregrine",
          "x": 75,
          "y": 40,
          "size": 60,
          "color": "#64748B"
        }
      ],
      "options": [
        {
          "id": "opt_cheetah",
          "text": "Cheetah (Terrestrial Sprint)"
        },
        {
          "id": "opt_falcon",
          "text": "Peregrine Falcon (Hunting Stoop)",
          "isCorrect": true
        },
        {
          "id": "opt_sailfish",
          "text": "Black Marlin (Ocean Sprint)"
        },
        {
          "id": "opt_eagle",
          "text": "Golden Eagle (Ridge Glide)"
        }
      ]
    },
    "answer": "opt_falcon",
    "hint1": "Gravity-assisted aerodynamic stoop far exceeds physiological muscle sprint speed.",
    "hint2": "The Peregrine Falcon reaches speeds exceeding 380 km/h in its signature hunting dive.",
    "explanation": "The Peregrine Falcon is the fastest member of the animal kingdom, clocking over 389 km/h in a hunting dive!",
    "reward": 10
  },
  {
    "id": 49,
    "type": "hold",
    "title": "Defuse the Clock",
    "instruction": "Stop the ticking clock.",
    "sceneConfig": {
      "background": "#FFFDF9",
      "holdDurationMs": 2000,
      "items": [
        {
          "id": "safety_clamp",
          "text": "🛑",
          "label": "Escapement Brake",
          "shape": "circle",
          "x": 45,
          "y": 40,
          "size": 80,
          "color": "#DC2626"
        },
        {
          "id": "wire_clipper",
          "text": "✂️",
          "label": "Snip Shears Decoy",
          "shape": "circle",
          "x": 78,
          "y": 45,
          "size": 50,
          "color": "#475569"
        }
      ]
    },
    "answer": "hold_success",
    "hint1": "Cutting wires trips the anti-tamper latch; mechanical brake clamping is mandatory.",
    "hint2": "Hold down the crimson escapement brake continuously for two full seconds.",
    "explanation": "Tick... silence! The escapement wheel stops dead and the timer is safely defused.",
    "reward": 10
  },
  {
    "id": 50,
    "type": "choice",
    "title": "Summit Master Vault",
    "instruction": "Find the right key.",
    "sceneConfig": {
      "background": "#FFFDF9",
      "items": [
        {
          "id": "vault_chest",
          "shape": "box",
          "text": "🧰",
          "label": "Treasure Chest",
          "x": 50,
          "y": 35,
          "size": 90,
          "color": "#475569"
        }
      ],
      "options": [
        {
          "id": "opt_bronze_12",
          "text": "Key #12"
        },
        {
          "id": "opt_silver_25",
          "text": "Key #25"
        },
        {
          "id": "opt_gold_49",
          "text": "Key #49"
        },
        {
          "id": "opt_master_50",
          "text": "Key #50",
          "isCorrect": true
        }
      ]
    },
    "answer": "opt_master_50",
    "hint1": "Look at your current level number!",
    "hint2": "Pick Key #50 since you are on Level 50!",
    "explanation": "Key #50 unlocks the chest! You have reached Level 50!",
    "reward": 10
  }
];
