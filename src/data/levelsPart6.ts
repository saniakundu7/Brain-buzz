import { PuzzleLevel } from '../types';

export const levelsPart6: PuzzleLevel[] = [
  {
    "id": 126,
    "type": "word",
    "title": "The Longest Word",
    "instruction": "Which of these words has the most vowels: 'EDUCATION', 'STRENGTH', 'RHYTHM'?",
    "answer": "opt1",
    "hint1": "Count A, E, I, O, U occurrences in each word.",
    "hint2": "One word has zero traditional vowels.",
    "explanation": "EDUCATION has 5 vowels (E,U,A,I,O); the others have far fewer or none.",
    "reward": 15,
    "sceneConfig": {
      "background": "#FFF",
      "promptNote": "Select the correct answer.",
      "options": [
        {
          "id": "opt1",
          "text": "EDUCATION",
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
    "id": 127,
    "type": "visual",
    "title": "Spot the Wrong Perspective",
    "instruction": "Tap the building in this cityscape drawn with an inconsistent vanishing point.",
    "answer": "opt1",
    "hint1": "All correct buildings' edges point toward one common vanishing point.",
    "hint2": "One building's lines converge elsewhere.",
    "explanation": "Correct perspective drawing requires all lines to converge at the same vanishing point; one building breaks this.",
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
          "text": "tap the building whose lines don't converge toward the shared vanishing point",
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
    "id": 128,
    "type": "choice",
    "title": "The Fork in the Road",
    "instruction": "At a fork, one path leads home, one to a forest, guarded by a knight who might lie. You may ask ONE yes/no question. What do you ask?",
    "answer": "opt1",
    "hint1": "This double-question format cancels lying behavior.",
    "hint2": "It works regardless of whether the knight lies or tells the truth.",
    "explanation": "This self-referential question always yields a truthful-equivalent 'yes' or 'no' regardless of the knight's honesty.",
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
          "text": "'If I asked you if this path leads home, would you say yes?'",
          "isCorrect": true
        }
      ],
      "items": []
    }
  },
  {
    "id": 129,
    "type": "hidden-object",
    "title": "Hidden Whale",
    "instruction": "Find the whale shape hidden in the ocean wave illustration.",
    "answer": "target",
    "hint1": "Its shape is formed by the curve of a large wave.",
    "hint2": "Look at the tallest wave in the background.",
    "explanation": "The wave's curve was drawn to subtly resemble a breaching whale.",
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
    "id": 130,
    "type": "math",
    "title": "The Race Track Puzzle",
    "instruction": "Runner A finishes a race in 40 seconds, Runner B in 50 seconds. If they race again with A giving B a 10-second head start, who wins?",
    "answer": "opt1",
    "hint1": "Calculate each runner's total time including the head start.",
    "hint2": "B's 50 seconds minus the 10-second advantage effectively equals A's 40.",
    "explanation": "With a 10-second head start, B's effective time matches A's exactly, resulting in a tie.",
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
          "id": "opt1",
          "text": "It's a tie",
          "isCorrect": true
        },
        {
          "id": "opt2",
          "text": "Option B"
        }
      ],
      "items": []
    }
  },
  {
    "id": 131,
    "type": "tap",
    "title": "The Wrong Constellation",
    "instruction": "Tap the star cluster that doesn't form a recognizable constellation pattern like the others.",
    "answer": "target",
    "hint1": "Most clusters form clear geometric or animal-like patterns.",
    "hint2": "One cluster looks random with no discernible shape.",
    "explanation": "Unlike the others, one star cluster has no intentional pattern connecting it.",
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
    "id": 132,
    "type": "visual",
    "title": "Count the Overlapping Circles",
    "instruction": "How many distinct regions are created by 3 overlapping circles (like a Venn diagram)?",
    "answer": "opt1",
    "hint1": "Consider each circle's unique area, each pair's overlap, and the center overlap.",
    "hint2": "3 unique + 3 pairwise + 1 center = 7.",
    "explanation": "Classic 3-circle Venn diagram math yields 7 distinct regions.",
    "reward": 15,
    "sceneConfig": {
      "background": "#FFF",
      "promptNote": "Select the correct answer.",
      "options": [
        {
          "id": "opt1",
          "text": "7",
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
    "id": 133,
    "type": "word",
    "title": "The Silent Q",
    "instruction": "Which word contains a letter that's completely silent: 'QUEUE', 'MOUSE', 'CHAIR'?",
    "answer": "opt1",
    "hint1": "Look at how many letters are pronounced versus written.",
    "hint2": "Only one syllable is actually spoken despite 5 letters.",
    "explanation": "QUEUE is pronounced simply as 'cue' — most letters are silent.",
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
          "text": "QUEUE",
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
    "id": 134,
    "type": "hidden-object",
    "title": "Hidden Compass",
    "instruction": "Find the compass rose shape hidden in this treasure map illustration.",
    "answer": "target",
    "hint1": "It's drawn faintly, blending with the map's aged texture.",
    "hint2": "Look in the top-left corner of the map.",
    "explanation": "A faint compass rose is subtly embedded into the map's border decoration.",
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
    "id": 135,
    "type": "choice",
    "title": "The Prisoner's Hats",
    "instruction": "3 prisoners each wear a hat (black or white, at least one black). Each can see others' hats but not their own. All say they don't know their color, then Prisoner 1 suddenly deduces theirs. What color is Prisoner 1's hat?",
    "answer": "opt1",
    "hint1": "If Prisoner 1 saw two white hats, they'd know their own must be black (since at least one black exists).",
    "hint2": "The others' inability to answer gives Prisoner 1 information.",
    "explanation": "Since no one could initially deduce their color, Prisoner 1 reasons that seeing two whites is impossible, confirming their own hat is black.",
    "reward": 15,
    "sceneConfig": {
      "background": "#FFF",
      "promptNote": "Select the correct answer.",
      "options": [
        {
          "id": "opt1",
          "text": "Black",
          "isCorrect": true
        },
        {
          "id": "opt2",
          "text": "White"
        }
      ],
      "items": []
    }
  },
  {
    "id": 136,
    "type": "math",
    "title": "The Speed Average Trick",
    "instruction": "A car travels 60km at 60km/h, then returns the same 60km at 30km/h. What's the average speed for the whole trip?",
    "answer": "opt1",
    "hint1": "Average speed is NOT simply (60+30)/2.",
    "hint2": "Use total distance ÷ total time.",
    "explanation": "Total distance=120km, total time=1+2=3hrs, average=120/3=40km/h.",
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
          "text": "40 km/h",
          "isCorrect": true
        }
      ],
      "items": []
    }
  },
  {
    "id": 137,
    "type": "visual",
    "title": "Spot the Extra Finger",
    "instruction": "Tap the hand in this illustration that has an extra (6th) finger drawn by mistake.",
    "answer": "opt1",
    "hint1": "Count fingers carefully on each hand shown.",
    "hint2": "Most hands have the normal 5.",
    "explanation": "One hand was mistakenly drawn with an extra finger.",
    "reward": 15,
    "sceneConfig": {
      "background": "#FFF",
      "promptNote": "Select the correct answer.",
      "options": [
        {
          "id": "opt1",
          "text": "tap the hand with 6 fingers",
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
    "id": 138,
    "type": "hidden-object",
    "title": "Hidden Feather",
    "instruction": "Find the feather shape hidden in the bird's nest illustration.",
    "answer": "target",
    "hint1": "It's formed by the pattern of overlapping twigs, not a real feather.",
    "hint2": "Look at the nest's inner curve.",
    "explanation": "Twigs arranged in the nest coincidentally form a feather-like silhouette.",
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
    "id": 139,
    "type": "word",
    "title": "The Number Riddle",
    "instruction": "I am a 3-digit number. My tens digit is 5 more than my ones digit, and my hundreds digit is 8 less than my tens digit. What number am I?",
    "answer": "opt1",
    "hint1": "Let ones=x, tens=x+5, hundreds=(x+5)-8.",
    "hint2": "Try small values of x that keep all digits valid (0-9).",
    "explanation": "With x=4: ones=4, tens=9, hundreds=1, forming 194.",
    "reward": 15,
    "sceneConfig": {
      "background": "#FFF",
      "promptNote": "Select the correct answer.",
      "options": [
        {
          "id": "opt1",
          "text": "194",
          "isCorrect": true
        },
        {
          "id": "opt3",
          "text": "Option C"
        },
        {
          "id": "opt2",
          "text": "Option B"
        }
      ],
      "items": []
    }
  },
  {
    "id": 140,
    "type": "choice",
    "title": "Milestone: The Doubling Lily Pad",
    "instruction": "A lily pad patch doubles in size every day and covers the whole pond on day 30. On what day was it half-covered?",
    "answer": "opt1",
    "hint1": "Since it doubles each day, work backward from full coverage.",
    "hint2": "Half of day 30's coverage is exactly day 29's coverage.",
    "explanation": "Doubling means the day before full coverage, it was at exactly half.",
    "reward": 15,
    "sceneConfig": {
      "background": "#FFF",
      "promptNote": "Select the correct answer.",
      "options": [
        {
          "id": "opt1",
          "text": "Day 29",
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
    "id": 141,
    "type": "tap",
    "title": "The Fake Puzzle Piece Edge",
    "instruction": "Tap the puzzle piece with a straight edge that shouldn't be there (it should be a border piece, but it's placed in the middle).",
    "answer": "target",
    "hint1": "Border pieces have at least one flat edge; interior pieces don't.",
    "hint2": "Check the middle rows/columns for any flat-edged piece.",
    "explanation": "A piece with a flat edge misplaced in the puzzle's interior reveals an assembly error.",
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
    "id": 142,
    "type": "math",
    "title": "The Rope Around Earth",
    "instruction": "A rope is wrapped tightly around Earth's equator. If you add 2 meters to the rope's length and raise it evenly all around, roughly how high off the ground would it be?",
    "answer": "opt1",
    "hint1": "Use circumference formula: added length = 2π × (change in radius).",
    "hint2": "2m = 2π×Δr, so Δr ≈ 0.318m.",
    "explanation": "Surprisingly, the gap is about 32cm regardless of Earth's actual size, since only the added 2m matters in the formula.",
    "reward": 15,
    "sceneConfig": {
      "background": "#FFF",
      "promptNote": "Select the correct answer.",
      "options": [
        {
          "id": "opt1",
          "text": "about 32 cm",
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
    "id": 143,
    "type": "hidden-object",
    "title": "Hidden Turtle",
    "instruction": "Find the turtle shape hidden among the beach rocks illustration.",
    "answer": "target",
    "hint1": "Look for a dome-shaped rock with a smaller rock beside it.",
    "hint2": "It's near the water's edge.",
    "explanation": "A dome rock plus a smaller adjacent rock forms a turtle silhouette.",
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
    "id": 144,
    "type": "visual",
    "title": "Count the Hidden Letters",
    "instruction": "How many letters of the alphabet are hidden within this abstract line drawing?",
    "answer": "opt1",
    "hint1": "Look for shapes resembling common capital letters like A, E, L, T.",
    "hint2": "They're formed by overlapping abstract lines.",
    "explanation": "4 distinct letter-like shapes are embedded within the abstract linework.",
    "reward": 15,
    "sceneConfig": {
      "background": "#FFF",
      "promptNote": "Select the correct answer.",
      "options": [
        {
          "id": "opt1",
          "text": "4",
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
    "id": 145,
    "type": "choice",
    "title": "The Wolf Sheep Cabbage",
    "instruction": "A farmer must cross a river with a wolf, sheep, and cabbage — same rules as fox/chicken/grain. What's the very first item to cross?",
    "answer": "opt1",
    "hint1": "The middle item in the food chain always goes first in these puzzles.",
    "hint2": "Wolf won't eat cabbage, cabbage can't eat anything, but sheep is vulnerable both ways.",
    "explanation": "Taking the sheep first prevents wolf-sheep or sheep-cabbage conflicts on either bank.",
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
          "text": "the sheep",
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
    "id": 146,
    "type": "tap",
    "title": "The Wrong Season Leaf",
    "instruction": "Tap the tree with autumn-colored leaves in an otherwise spring/summer forest scene.",
    "answer": "target",
    "hint1": "Most trees show green spring/summer foliage.",
    "hint2": "One tree's leaf color doesn't match the season.",
    "explanation": "An autumn-colored tree stands out as inconsistent with a spring/summer setting.",
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
    "id": 147,
    "type": "math",
    "title": "The Cistern Problem",
    "instruction": "A tank can be filled by pipe A in 6 hours, but a leak empties it in 12 hours. If both are open, how long to fill the tank?",
    "answer": "opt1",
    "hint1": "Combine fill rate and leak rate: 1/6 - 1/12.",
    "hint2": "Net rate = 1/12 tank per hour.",
    "explanation": "1/6 - 1/12 = 1/12, so the tank fills fully in 12 hours.",
    "reward": 15,
    "sceneConfig": {
      "background": "#FFF",
      "promptNote": "Select the correct answer.",
      "options": [
        {
          "id": "opt3",
          "text": "18 hours"
        },
        {
          "id": "opt1",
          "text": "12 hours",
          "isCorrect": true
        },
        {
          "id": "opt2",
          "text": "6 hours"
        }
      ],
      "items": []
    }
  },
  {
    "id": 148,
    "type": "hidden-object",
    "title": "Hidden Lightning Bolt",
    "instruction": "Find the lightning bolt shape hidden in the storm cloud illustration.",
    "answer": "target",
    "hint1": "It's formed by negative space between overlapping clouds.",
    "hint2": "Look at the darkest part of the storm cloud.",
    "explanation": "The gap between two cloud shapes forms a jagged lightning-bolt silhouette.",
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
    "id": 149,
    "type": "word",
    "title": "The Cryptic Sum",
    "instruction": "If SEND + MORE = MONEY (classic cryptarithm), what digit does 'M' represent?",
    "answer": "opt1",
    "hint1": "M is the leading digit of a 5-digit sum from two 4-digit numbers, so it must be small.",
    "hint2": "Adding two 4-digit numbers can only carry over to make the result's leading digit 1.",
    "explanation": "In this famous cryptarithm, M=1 is the only value that makes the addition work with a 5-digit result.",
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
          "id": "opt1",
          "text": "1",
          "isCorrect": true
        },
        {
          "id": "opt2",
          "text": "Option B"
        }
      ],
      "items": []
    }
  },
  {
    "id": 150,
    "type": "choice",
    "title": "Milestone: The Final Hard Challenge",
    "instruction": "A snail climbs a 10m wall. Each day it climbs 3m, each night it slides back 2m. On which day does it reach the top?",
    "answer": "opt1",
    "hint1": "Net progress per full day-night cycle is 1m, but the final day it won't slide back.",
    "hint2": "After 7 full cycles it's at 7m; on day 8 it climbs 3m more, reaching 10m before sliding.",
    "explanation": "After 7 days of net 1m/day progress (7m), on day 8 it climbs the remaining 3m to reach exactly 10m and escapes before sliding back.",
    "reward": 15,
    "sceneConfig": {
      "background": "#FFF",
      "promptNote": "Select the correct answer.",
      "options": [
        {
          "id": "opt1",
          "text": "Day 8",
          "isCorrect": true
        },
        {
          "id": "opt3",
          "text": "Option C"
        },
        {
          "id": "opt2",
          "text": "Option B"
        }
      ],
      "items": []
    }
  }
];
