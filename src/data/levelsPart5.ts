import { PuzzleLevel } from '../types';

export const levelsPart5: PuzzleLevel[] = [
  {
    "id": 101,
    "type": "tap",
    "title": "The Fake Reflection",
    "instruction": "Tap the window whose reflection shows a different time of day than the sky outside.",
    "answer": "target",
    "hint1": "Compare the sky color outside to what's reflected in each window.",
    "hint2": "One window's reflection doesn't match the actual sky.",
    "explanation": "A correct reflection always matches the real sky; one window was drawn inconsistently.",
    "reward": 15,
    "sceneConfig": {
      "background": "#FFF",
      "items": [
        {
          "id": "item1",
          "label": "Wrong item",
          "shape": "circle",
          "x": 20,
          "y": 50,
          "size": 50,
          "color": "#ccc"
        },
        {
          "id": "item2",
          "label": "Wrong item 2",
          "shape": "box",
          "x": 80,
          "y": 50,
          "size": 50,
          "color": "#ccc"
        },
        {
          "id": "target",
          "label": "Correct target",
          "shape": "star",
          "x": 50,
          "y": 50,
          "size": 60,
          "color": "#F59E0B",
          "isTarget": true
        }
      ]
    }
  },
  {
    "id": 102,
    "type": "math",
    "title": "The Working Together Problem",
    "instruction": "Pipe A fills a tank in 4 hours, Pipe B in 6 hours. How long do both take together?",
    "answer": "opt1",
    "hint1": "Add their rates: 1/4 + 1/6.",
    "hint2": "Combined rate = 5/12 tank per hour, so time = 12/5.",
    "explanation": "1/4+1/6 = 5/12 tank/hr → time = 12/5 = 2.4 hours.",
    "reward": 15,
    "sceneConfig": {
      "background": "#FFF",
      "promptNote": "Select the correct answer.",
      "options": [
        {
          "id": "opt2",
          "text": "5 hours"
        },
        {
          "id": "opt1",
          "text": "2.4 hours",
          "isCorrect": true
        },
        {
          "id": "opt3",
          "text": "10 hours"
        }
      ],
      "items": []
    }
  },
  {
    "id": 103,
    "type": "hidden-object",
    "title": "Hidden Snake",
    "instruction": "Find the snake camouflaged in the rocky desert scene.",
    "answer": "target",
    "hint1": "Its pattern matches the rock texture closely.",
    "hint2": "Look for a subtle S-curve among the rocks.",
    "explanation": "The snake's scale pattern was designed to mimic rock texture and shadow.",
    "reward": 15,
    "sceneConfig": {
      "background": "#FFF",
      "items": [
        {
          "id": "item1",
          "label": "Wrong item",
          "shape": "circle",
          "x": 20,
          "y": 50,
          "size": 50,
          "color": "#ccc"
        },
        {
          "id": "item2",
          "label": "Wrong item 2",
          "shape": "box",
          "x": 80,
          "y": 50,
          "size": 50,
          "color": "#ccc"
        },
        {
          "id": "target",
          "label": "Correct target",
          "shape": "star",
          "x": 50,
          "y": 50,
          "size": 60,
          "color": "#F59E0B",
          "isTarget": true
        }
      ]
    }
  },
  {
    "id": 104,
    "type": "multi-tap",
    "title": "Find All Composite Numbers",
    "instruction": "Tap all composite numbers: 2, 9, 13, 21, 17, 25",
    "answer": [
      "t1",
      "t2",
      "t3"
    ],
    "hint1": "A composite number has more than 2 factors.",
    "hint2": "2, 13, and 17 are prime, so exclude them.",
    "explanation": "9(3×3), 21(3×7), 25(5×5) are composite; the rest are prime.",
    "reward": 15,
    "sceneConfig": {
      "background": "#FFF",
      "items": [
        {
          "id": "t1",
          "text": "9",
          "shape": "box",
          "x": 20,
          "y": 20,
          "size": 50
        },
        {
          "id": "t2",
          "text": "21",
          "shape": "box",
          "x": 50,
          "y": 20,
          "size": 50
        },
        {
          "id": "t3",
          "text": "25",
          "shape": "box",
          "x": 80,
          "y": 20,
          "size": 50
        },
        {
          "id": "f1",
          "text": "2",
          "shape": "box",
          "x": 20,
          "y": 80,
          "size": 50
        },
        {
          "id": "f2",
          "text": "13",
          "shape": "box",
          "x": 50,
          "y": 80,
          "size": 50
        },
        {
          "id": "f3",
          "text": "17",
          "shape": "box",
          "x": 80,
          "y": 80,
          "size": 50
        }
      ]
    }
  },
  {
    "id": 105,
    "type": "drag",
    "title": "Route the Marble",
    "instruction": "Drag ramp pieces to guide a marble from the top of the scene into the cup at the bottom.",
    "answer": "drop_success",
    "hint1": "Some ramp pieces lead to dead ends — avoid those.",
    "hint2": "Gravity means the path must always trend downward.",
    "explanation": "Only a continuous downward-sloping path successfully guides the marble to the cup.",
    "reward": 15,
    "sceneConfig": {
      "background": "#FFF",
      "dropZones": [
        {
          "id": "dz1",
          "x": 50,
          "y": 80,
          "label": "Drop Zone", "width": 60,
          "height": 60,
          "acceptItemId": "drag1"
        }
      ],
      "items": [
        {
          "id": "drag1",
          "label": "Draggable",
          "shape": "circle",
          "x": 50,
          "y": 20,
          "size": 40,
          "color": "#3B82F6",
          "draggable": true
        }
      ]
    }
  },
  {
    "id": 106,
    "type": "choice",
    "title": "The Two Ropes Puzzle",
    "instruction": "You have 2 ropes, each takes exactly 1 hour to burn but burn unevenly. How do you measure 45 minutes?",
    "answer": "opt1",
    "hint1": "Burning a rope from both ends halves its burn time.",
    "hint2": "Use the first rope's burnout as a signal to act on the second.",
    "explanation": "Rope A burns fully in 30 min (both ends). Lighting B's second end then gives 15 more minutes, totaling 45.",
    "reward": 15,
    "sceneConfig": {
      "background": "#FFF",
      "promptNote": "Select the correct answer.",
      "options": [
        {
          "id": "opt3",
          "text": "Option C"
        },
        {
          "id": "opt2",
          "text": "Option B"
        },
        {
          "id": "opt1",
          "text": "Light rope A at both ends and rope B at one end simultaneously; when A finishes (30 min), light B's other end; B finishes 15 min later = 45 min total",
          "isCorrect": true
        }
      ],
      "items": []
    }
  },
  {
    "id": 107,
    "type": "visual",
    "title": "Count the Cubes",
    "instruction": "How many cubes total are in this 3D stacked cube illustration (including hidden ones)?",
    "answer": "opt1",
    "hint1": "Some cubes are hidden behind/under visible ones — don't forget those.",
    "hint2": "Look at the base layer carefully; it supports the ones above.",
    "explanation": "6 visible + 4 hidden support cubes = 10 total.",
    "reward": 15,
    "sceneConfig": {
      "background": "#FFF",
      "promptNote": "Select the correct answer.",
      "options": [
        {
          "id": "opt3",
          "text": "Option C"
        },
        {
          "id": "opt2",
          "text": "Option B"
        },
        {
          "id": "opt1",
          "text": "10",
          "isCorrect": true
        }
      ],
      "items": []
    }
  },
  {
    "id": 108,
    "type": "word",
    "title": "Hidden Animal",
    "instruction": "Find the animal hidden in: 'The cat is elephantastic today.'",
    "answer": "opt1",
    "hint1": "Look inside the made-up word in the middle.",
    "hint2": "It's a large animal with a trunk.",
    "explanation": "'elephANTastic' hides 'elephant' within the invented word.",
    "reward": 15,
    "sceneConfig": {
      "background": "#FFF",
      "promptNote": "Select the correct answer.",
      "options": [
        {
          "id": "opt1",
          "text": "elephant",
          "isCorrect": true
        },
        {
          "id": "opt2",
          "text": "ant"
        },
        {
          "id": "opt3",
          "text": "cat"
        }
      ],
      "items": []
    }
  },
  {
    "id": 109,
    "type": "tap",
    "title": "The Odd Reflection",
    "instruction": "Five identical glasses of water sit on a table. Tap the one whose reflection on the table is wrong.",
    "answer": "target",
    "hint1": "All glasses have the same water level — check their reflections.",
    "hint2": "One reflection doesn't match its glass's fill level.",
    "explanation": "A correct reflection would mirror the exact water level; one is inconsistent.",
    "reward": 15,
    "sceneConfig": {
      "background": "#FFF",
      "items": [
        {
          "id": "item1",
          "label": "Wrong item",
          "shape": "circle",
          "x": 20,
          "y": 50,
          "size": 50,
          "color": "#ccc"
        },
        {
          "id": "item2",
          "label": "Wrong item 2",
          "shape": "box",
          "x": 80,
          "y": 50,
          "size": 50,
          "color": "#ccc"
        },
        {
          "id": "target",
          "label": "Correct target",
          "shape": "star",
          "x": 50,
          "y": 50,
          "size": 60,
          "color": "#F59E0B",
          "isTarget": true
        }
      ]
    }
  },
  {
    "id": 110,
    "type": "math",
    "title": "Compound Interest Trick",
    "instruction": "Rs 100 invested at 10% annual compound interest — what is it worth after 2 years?",
    "answer": "opt1",
    "hint1": "Apply interest to the new total each year, not just the original.",
    "hint2": "Year 1: 110. Year 2: 110×1.1.",
    "explanation": "100×1.1×1.1 = 121.",
    "reward": 15,
    "sceneConfig": {
      "background": "#FFF",
      "promptNote": "Select the correct answer.",
      "options": [
        {
          "id": "opt1",
          "text": "121",
          "isCorrect": true
        },
        {
          "id": "opt2",
          "text": "120"
        },
        {
          "id": "opt3",
          "text": "110"
        }
      ],
      "items": []
    }
  },
  {
    "id": 111,
    "type": "hidden-object",
    "title": "Hidden Arrow",
    "instruction": "Find the arrow shape hidden in this forest path illustration.",
    "answer": "target",
    "hint1": "It's formed by negative space between trees, not drawn directly.",
    "hint2": "Look at the path's fork in the middle-ground.",
    "explanation": "The gap between two angled tree trunks forms an arrow pointing toward the path.",
    "reward": 15,
    "sceneConfig": {
      "background": "#FFF",
      "items": [
        {
          "id": "item1",
          "label": "Wrong item",
          "shape": "circle",
          "x": 20,
          "y": 50,
          "size": 50,
          "color": "#ccc"
        },
        {
          "id": "item2",
          "label": "Wrong item 2",
          "shape": "box",
          "x": 80,
          "y": 50,
          "size": 50,
          "color": "#ccc"
        },
        {
          "id": "target",
          "label": "Correct target",
          "shape": "star",
          "x": 50,
          "y": 50,
          "size": 60,
          "color": "#F59E0B",
          "isTarget": true
        }
      ]
    }
  },
  {
    "id": 112,
    "type": "sequence",
    "title": "Water Cycle Order",
    "instruction": "Tap the water cycle stages in correct order: Precipitation, Evaporation, Condensation, Collection.",
    "answer": [
      "seq1",
      "seq2",
      "seq3",
      "seq4"
    ],
    "hint1": "It starts with water turning into vapor.",
    "hint2": "Clouds form before rain falls.",
    "explanation": "Correct order: evaporation → condensation → precipitation → collection.",
    "reward": 15,
    "sceneConfig": {
      "background": "#FFF",
      "items": [
        {
          "id": "seq1",
          "text": "Evaporation",
          "shape": "box",
          "x": 50,
          "y": 20,
          "size": 60,
          "width": 120
        },
        {
          "id": "seq2",
          "text": "Condensation",
          "shape": "box",
          "x": 50,
          "y": 45,
          "size": 60,
          "width": 120
        },
        {
          "id": "seq3",
          "text": "Precipitation",
          "shape": "box",
          "x": 50,
          "y": 70,
          "size": 60,
          "width": 120
        },
        {
          "id": "seq4",
          "text": "Collection",
          "shape": "box",
          "x": 50,
          "y": 95,
          "size": 60,
          "width": 120
        }
      ]
    }
  },
  {
    "id": 113,
    "type": "visual",
    "title": "Spot the Impossible Staircase",
    "instruction": "Tap the section of this staircase illustration where the perspective breaks (Escher-style).",
    "answer": "opt1",
    "hint1": "This is based on an Escher-style impossible staircase illusion.",
    "hint2": "Follow the steps around — one connection doesn't make 3D sense.",
    "explanation": "Impossible staircase illusions rely on a single joint where perspective rules are broken.",
    "reward": 15,
    "sceneConfig": {
      "background": "#FFF",
      "promptNote": "Select the correct answer.",
      "options": [
        {
          "id": "opt3",
          "text": "Option C"
        },
        {
          "id": "opt2",
          "text": "Option B"
        },
        {
          "id": "opt1",
          "text": "tap the step where the staircase loops back on itself impossibly",
          "isCorrect": true
        }
      ],
      "items": []
    }
  },
  {
    "id": 114,
    "type": "choice",
    "title": "The Two Guards Variant",
    "instruction": "One door leads to treasure, one to danger. Two guards: one always lies, one always tells truth (unknown which). You can ask ONE guard ONE question. What do you ask?",
    "answer": "opt1",
    "hint1": "Whichever guard answers, their answer about the other guard's answer will be false.",
    "hint2": "The trick works regardless of which guard you happen to ask.",
    "explanation": "This compound question cancels out the lying/truth-telling difference, always giving a false result, so choose the opposite door.",
    "reward": 15,
    "sceneConfig": {
      "background": "#FFF",
      "promptNote": "Select the correct answer.",
      "options": [
        {
          "id": "opt2",
          "text": "Option B"
        },
        {
          "id": "opt3",
          "text": "Option C"
        },
        {
          "id": "opt1",
          "text": "'What would the other guard say is the treasure door?' then pick the OPPOSITE",
          "isCorrect": true
        }
      ],
      "items": []
    }
  },
  {
    "id": 115,
    "type": "tap",
    "title": "The Wrong Gear Ratio",
    "instruction": "Tap the small gear that would need to spin FASTER than the big gear it's connected to.",
    "answer": "target",
    "hint1": "Smaller gears spin faster than larger connected gears.",
    "hint2": "Gear speed is inversely related to size when meshed together.",
    "explanation": "In a meshed gear system, the smaller gear must complete more rotations per given time.",
    "reward": 15,
    "sceneConfig": {
      "background": "#FFF",
      "items": [
        {
          "id": "item1",
          "label": "Wrong item",
          "shape": "circle",
          "x": 20,
          "y": 50,
          "size": 50,
          "color": "#ccc"
        },
        {
          "id": "item2",
          "label": "Wrong item 2",
          "shape": "box",
          "x": 80,
          "y": 50,
          "size": 50,
          "color": "#ccc"
        },
        {
          "id": "target",
          "label": "Correct target",
          "shape": "star",
          "x": 50,
          "y": 50,
          "size": 60,
          "color": "#F59E0B",
          "isTarget": true
        }
      ]
    }
  },
  {
    "id": 116,
    "type": "hidden-object",
    "title": "Hidden Crown",
    "instruction": "Find the crown shape hidden in the castle's cloud-covered sky.",
    "answer": "target",
    "hint1": "It's formed by negative space in the clouds.",
    "hint2": "Look directly above the castle's tallest tower.",
    "explanation": "The gap between overlapping clouds forms a crown silhouette.",
    "reward": 15,
    "sceneConfig": {
      "background": "#FFF",
      "items": [
        {
          "id": "item1",
          "label": "Wrong item",
          "shape": "circle",
          "x": 20,
          "y": 50,
          "size": 50,
          "color": "#ccc"
        },
        {
          "id": "item2",
          "label": "Wrong item 2",
          "shape": "box",
          "x": 80,
          "y": 50,
          "size": 50,
          "color": "#ccc"
        },
        {
          "id": "target",
          "label": "Correct target",
          "shape": "star",
          "x": 50,
          "y": 50,
          "size": 60,
          "color": "#F59E0B",
          "isTarget": true
        }
      ]
    }
  },
  {
    "id": 117,
    "type": "math",
    "title": "The Painted Cube",
    "instruction": "A 3x3x3 cube is painted on all outer faces, then cut into 27 unit cubes. How many small cubes have exactly 2 painted faces?",
    "answer": "opt1",
    "hint1": "Think about which small cubes sit on an edge (not corner, not face-center, not core).",
    "hint2": "Edge cubes (not corners) have exactly 2 painted faces.",
    "explanation": "A 3x3x3 cube has 12 edges, each contributing exactly 1 cube with 2 painted faces.",
    "reward": 15,
    "sceneConfig": {
      "background": "#FFF",
      "promptNote": "Select the correct answer.",
      "options": [
        {
          "id": "opt2",
          "text": "Option B"
        },
        {
          "id": "opt1",
          "text": "12",
          "isCorrect": true
        },
        {
          "id": "opt3",
          "text": "Option C"
        }
      ],
      "items": []
    }
  },
  {
    "id": 118,
    "type": "word",
    "title": "The Missing Vowel Chain",
    "instruction": "Fill in vowels to reveal a hidden phrase: 'BRN BZZ S FN'",
    "answer": "opt1",
    "hint1": "Add A, U, I, U to spell out a phrase about this game.",
    "hint2": "Two words are the game's own name.",
    "explanation": "Filling vowels correctly spells 'BRAIN BUZZ IS FUN'.",
    "reward": 15,
    "sceneConfig": {
      "background": "#FFF",
      "promptNote": "Select the correct answer.",
      "options": [
        {
          "id": "opt1",
          "text": "BRAIN BUZZ IS FUN",
          "isCorrect": true
        },
        {
          "id": "opt2",
          "text": "Option B"
        },
        {
          "id": "opt3",
          "text": "Option C"
        }
      ],
      "items": []
    }
  },
  {
    "id": 119,
    "type": "visual",
    "title": "Count Hidden Diamonds",
    "instruction": "How many diamond shapes (including overlaps) are in this kite-pattern illustration?",
    "answer": "opt1",
    "hint1": "Count small diamonds first, then combinations forming larger ones.",
    "hint2": "Don't forget diamonds formed by 2+ smaller ones combined.",
    "explanation": "8 small + 3 combined larger diamonds = 11 total.",
    "reward": 15,
    "sceneConfig": {
      "background": "#FFF",
      "promptNote": "Select the correct answer.",
      "options": [
        {
          "id": "opt1",
          "text": "11",
          "isCorrect": true
        },
        {
          "id": "opt2",
          "text": "Option B"
        },
        {
          "id": "opt3",
          "text": "Option C"
        }
      ],
      "items": []
    }
  },
  {
    "id": 120,
    "type": "choice",
    "title": "Milestone: The Hourglass Puzzle",
    "instruction": "You have a 7-minute and 4-minute hourglass. How do you measure exactly 9 minutes?",
    "answer": "opt1",
    "hint1": "Think about what remains in the smaller hourglass when the larger one finishes.",
    "hint2": "Restarting an hourglass at the right moment captures a specific remaining duration.",
    "explanation": "By tracking the 1-minute remainder left in the 4-minute hourglass at the 7-minute mark, and using it as a fresh reference point, exactly 9 minutes can be measured.",
    "reward": 15,
    "sceneConfig": {
      "background": "#FFF",
      "promptNote": "Select the correct answer.",
      "options": [
        {
          "id": "opt2",
          "text": "Option B"
        },
        {
          "id": "opt3",
          "text": "Option C"
        },
        {
          "id": "opt1",
          "text": "Start both hourglasses together. When the 4-minute one runs out, flip it again. When the 7-minute one runs out (at 7 min), the 4-minute one has been running for 3 min, so it has 1 min of sand left on this second run. Let that finish (8 min total), then flip the 4-minute one once more for a full run, giving 8+1=9 minutes — using the 1-minute remainder as the key marker.",
          "isCorrect": true
        }
      ],
      "items": []
    }
  },
  {
    "id": 121,
    "type": "tap",
    "title": "The Fake Handshake",
    "instruction": "In this group photo illustration, tap the pair of hands that don't actually belong to any two people shown (a drawing error).",
    "answer": "target",
    "hint1": "Trace each hand back to a visible arm and body.",
    "hint2": "One hand pair floats without a clear owner.",
    "explanation": "A careful trace shows one hand pair isn't connected to any full figure in the scene.",
    "reward": 15,
    "sceneConfig": {
      "background": "#FFF",
      "items": [
        {
          "id": "item1",
          "label": "Wrong item",
          "shape": "circle",
          "x": 20,
          "y": 50,
          "size": 50,
          "color": "#ccc"
        },
        {
          "id": "item2",
          "label": "Wrong item 2",
          "shape": "box",
          "x": 80,
          "y": 50,
          "size": 50,
          "color": "#ccc"
        },
        {
          "id": "target",
          "label": "Correct target",
          "shape": "star",
          "x": 50,
          "y": 50,
          "size": 60,
          "color": "#F59E0B",
          "isTarget": true
        }
      ]
    }
  },
  {
    "id": 122,
    "type": "math",
    "title": "The Chessboard Grains",
    "instruction": "If you double grains of rice on each of 64 chessboard squares starting from 1, roughly how many grains on the LAST square alone?",
    "answer": "opt1",
    "hint1": "It's 2 raised to the power of (square number minus 1).",
    "hint2": "2^63 is an astronomically large number.",
    "explanation": "The 64th square alone holds 2^63 ≈ 9.22 × 10^18 grains.",
    "reward": 15,
    "sceneConfig": {
      "background": "#FFF",
      "promptNote": "Select the correct answer.",
      "options": [
        {
          "id": "opt2",
          "text": "Option B"
        },
        {
          "id": "opt3",
          "text": "Option C"
        },
        {
          "id": "opt1",
          "text": "about 9.2 quintillion (2^63)",
          "isCorrect": true
        }
      ],
      "items": []
    }
  },
  {
    "id": 123,
    "type": "hidden-object",
    "title": "Hidden Anchor",
    "instruction": "Find the anchor shape hidden in the pier/dock illustration.",
    "answer": "target",
    "hint1": "It's formed where rope and posts create negative space.",
    "hint2": "Look near the bottom-center of the dock.",
    "explanation": "Overlapping rope and post shapes form an anchor silhouette.",
    "reward": 15,
    "sceneConfig": {
      "background": "#FFF",
      "items": [
        {
          "id": "item1",
          "label": "Wrong item",
          "shape": "circle",
          "x": 20,
          "y": 50,
          "size": 50,
          "color": "#ccc"
        },
        {
          "id": "item2",
          "label": "Wrong item 2",
          "shape": "box",
          "x": 80,
          "y": 50,
          "size": 50,
          "color": "#ccc"
        },
        {
          "id": "target",
          "label": "Correct target",
          "shape": "star",
          "x": 50,
          "y": 50,
          "size": 60,
          "color": "#F59E0B",
          "isTarget": true
        }
      ]
    }
  },
  {
    "id": 124,
    "type": "multi-tap",
    "title": "Find the Perfect Squares",
    "instruction": "Tap all perfect square numbers: 16, 20, 25, 30, 36, 40",
    "answer": [
      "t1",
      "t2",
      "t3"
    ],
    "hint1": "A perfect square is a number times itself.",
    "hint2": "4×4=16, 5×5=25, 6×6=36.",
    "explanation": "16, 25, and 36 are perfect squares; the others are not.",
    "reward": 15,
    "sceneConfig": {
      "background": "#FFF",
      "items": [
        {
          "id": "t1",
          "text": "9",
          "shape": "box",
          "x": 20,
          "y": 20,
          "size": 50
        },
        {
          "id": "t2",
          "text": "21",
          "shape": "box",
          "x": 50,
          "y": 20,
          "size": 50
        },
        {
          "id": "t3",
          "text": "25",
          "shape": "box",
          "x": 80,
          "y": 20,
          "size": 50
        },
        {
          "id": "f1",
          "text": "2",
          "shape": "box",
          "x": 20,
          "y": 80,
          "size": 50
        },
        {
          "id": "f2",
          "text": "13",
          "shape": "box",
          "x": 50,
          "y": 80,
          "size": 50
        },
        {
          "id": "f3",
          "text": "17",
          "shape": "box",
          "x": 80,
          "y": 80,
          "size": 50
        }
      ]
    }
  },
  {
    "id": 125,
    "type": "drag",
    "title": "Complete the Domino Chain",
    "instruction": "Drag the correct domino tile to continue the chain (matching pip counts).",
    "answer": "drop_success",
    "hint1": "Domino chains connect by matching numbers at touching ends.",
    "hint2": "Check the pip count on the open end of the chain.",
    "explanation": "Only the domino whose pip count matches the open end continues the chain correctly.",
    "reward": 15,
    "sceneConfig": {
      "background": "#FFF",
      "dropZones": [
        {
          "id": "dz1",
          "x": 50,
          "y": 80,
          "label": "Drop Zone", "width": 60,
          "height": 60,
          "acceptItemId": "drag1"
        }
      ],
      "items": [
        {
          "id": "drag1",
          "label": "Draggable",
          "shape": "circle",
          "x": 50,
          "y": 20,
          "size": 40,
          "color": "#3B82F6",
          "draggable": true
        }
      ]
    }
  }
];
