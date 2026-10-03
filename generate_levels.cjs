const fs = require('fs');

const rawLevels = [
{ id:101, type:"tap", title:"The Fake Reflection", instruction:"Tap the window whose reflection shows a different time of day than the sky outside.", answer:"tap the window reflecting a sunset while the sky shows daytime", hint1:"Compare the sky color outside to what's reflected in each window.", hint2:"One window's reflection doesn't match the actual sky.", explanation:"A correct reflection always matches the real sky; one window was drawn inconsistently." },
{ id:102, type:"math", title:"The Working Together Problem", instruction:"Pipe A fills a tank in 4 hours, Pipe B in 6 hours. How long do both take together?", answer:"2.4 hours", hint1:"Add their rates: 1/4 + 1/6.", hint2:"Combined rate = 5/12 tank per hour, so time = 12/5.", explanation:"1/4+1/6 = 5/12 tank/hr → time = 12/5 = 2.4 hours." },
{ id:103, type:"hidden-object", title:"Hidden Snake", instruction:"Find the snake camouflaged in the rocky desert scene.", answer:"tap the winding shape blending with rock crevices", hint1:"Its pattern matches the rock texture closely.", hint2:"Look for a subtle S-curve among the rocks.", explanation:"The snake's scale pattern was designed to mimic rock texture and shadow." },
{ id:104, type:"multi-tap", title:"Find All Composite Numbers", instruction:"Tap all composite numbers: 2, 9, 13, 21, 17, 25", answer:"9, 21, 25", hint1:"A composite number has more than 2 factors.", hint2:"2, 13, and 17 are prime, so exclude them.", explanation:"9(3×3), 21(3×7), 25(5×5) are composite; the rest are prime." },
{ id:105, type:"drag", title:"Route the Marble", instruction:"Drag ramp pieces to guide a marble from the top of the scene into the cup at the bottom.", answer:"connect ramp pieces forming an unbroken downward path to the cup", hint1:"Some ramp pieces lead to dead ends — avoid those.", hint2:"Gravity means the path must always trend downward.", explanation:"Only a continuous downward-sloping path successfully guides the marble to the cup." },
{ id:106, type:"choice", title:"The Two Ropes Puzzle", instruction:"You have 2 ropes, each takes exactly 1 hour to burn but burn unevenly. How do you measure 45 minutes?", answer:"Light rope A at both ends and rope B at one end simultaneously; when A finishes (30 min), light B's other end; B finishes 15 min later = 45 min total", hint1:"Burning a rope from both ends halves its burn time.", hint2:"Use the first rope's burnout as a signal to act on the second.", explanation:"Rope A burns fully in 30 min (both ends). Lighting B's second end then gives 15 more minutes, totaling 45." },
{ id:107, type:"visual", title:"Count the Cubes", instruction:"How many cubes total are in this 3D stacked cube illustration (including hidden ones)?", answer:"10", hint1:"Some cubes are hidden behind/under visible ones — don't forget those.", hint2:"Look at the base layer carefully; it supports the ones above.", explanation:"6 visible + 4 hidden support cubes = 10 total." },
{ id:108, type:"word", title:"Hidden Animal", instruction:"Find the animal hidden in: 'The cat is elephantastic today.'", answer:"elephant", hint1:"Look inside the made-up word in the middle.", hint2:"It's a large animal with a trunk.", explanation:"'elephANTastic' hides 'elephant' within the invented word." },
{ id:109, type:"tap", title:"The Odd Reflection", instruction:"Five identical glasses of water sit on a table. Tap the one whose reflection on the table is wrong.", answer:"tap the glass whose reflection shows a different water level", hint1:"All glasses have the same water level — check their reflections.", hint2:"One reflection doesn't match its glass's fill level.", explanation:"A correct reflection would mirror the exact water level; one is inconsistent." },
{ id:110, type:"math", title:"Compound Interest Trick", instruction:"Rs 100 invested at 10% annual compound interest — what is it worth after 2 years?", answer:"121", hint1:"Apply interest to the new total each year, not just the original.", hint2:"Year 1: 110. Year 2: 110×1.1.", explanation:"100×1.1×1.1 = 121." },
{ id:111, type:"hidden-object", title:"Hidden Arrow", instruction:"Find the arrow shape hidden in this forest path illustration.", answer:"tap the arrow formed by the gap between tree trunks", hint1:"It's formed by negative space between trees, not drawn directly.", hint2:"Look at the path's fork in the middle-ground.", explanation:"The gap between two angled tree trunks forms an arrow pointing toward the path." },
{ id:112, type:"sequence", title:"Water Cycle Order", instruction:"Tap the water cycle stages in correct order: Precipitation, Evaporation, Condensation, Collection.", answer:"Evaporation, Condensation, Precipitation, Collection", hint1:"It starts with water turning into vapor.", hint2:"Clouds form before rain falls.", explanation:"Correct order: evaporation → condensation → precipitation → collection." },
{ id:113, type:"visual", title:"Spot the Impossible Staircase", instruction:"Tap the section of this staircase illustration where the perspective breaks (Escher-style).", answer:"tap the step where the staircase loops back on itself impossibly", hint1:"This is based on an Escher-style impossible staircase illusion.", hint2:"Follow the steps around — one connection doesn't make 3D sense.", explanation:"Impossible staircase illusions rely on a single joint where perspective rules are broken." },
{ id:114, type:"choice", title:"The Two Guards Variant", instruction:"One door leads to treasure, one to danger. Two guards: one always lies, one always tells truth (unknown which). You can ask ONE guard ONE question. What do you ask?", answer:"'What would the other guard say is the treasure door?' then pick the OPPOSITE", hint1:"Whichever guard answers, their answer about the other guard's answer will be false.", hint2:"The trick works regardless of which guard you happen to ask.", explanation:"This compound question cancels out the lying/truth-telling difference, always giving a false result, so choose the opposite door." },
{ id:115, type:"tap", title:"The Wrong Gear Ratio", instruction:"Tap the small gear that would need to spin FASTER than the big gear it's connected to.", answer:"tap the smaller gear", hint1:"Smaller gears spin faster than larger connected gears.", hint2:"Gear speed is inversely related to size when meshed together.", explanation:"In a meshed gear system, the smaller gear must complete more rotations per given time." },
{ id:116, type:"hidden-object", title:"Hidden Crown", instruction:"Find the crown shape hidden in the castle's cloud-covered sky.", answer:"tap the crown-shaped gap between two cloud formations", hint1:"It's formed by negative space in the clouds.", hint2:"Look directly above the castle's tallest tower.", explanation:"The gap between overlapping clouds forms a crown silhouette." },
{ id:117, type:"math", title:"The Painted Cube", instruction:"A 3x3x3 cube is painted on all outer faces, then cut into 27 unit cubes. How many small cubes have exactly 2 painted faces?", answer:"12", hint1:"Think about which small cubes sit on an edge (not corner, not face-center, not core).", hint2:"Edge cubes (not corners) have exactly 2 painted faces.", explanation:"A 3x3x3 cube has 12 edges, each contributing exactly 1 cube with 2 painted faces." },
{ id:118, type:"word", title:"The Missing Vowel Chain", instruction:"Fill in vowels to reveal a hidden phrase: 'BRN BZZ S FN'", answer:"BRAIN BUZZ IS FUN", hint1:"Add A, U, I, U to spell out a phrase about this game.", hint2:"Two words are the game's own name.", explanation:"Filling vowels correctly spells 'BRAIN BUZZ IS FUN'." },
{ id:119, type:"visual", title:"Count Hidden Diamonds", instruction:"How many diamond shapes (including overlaps) are in this kite-pattern illustration?", answer:"11", hint1:"Count small diamonds first, then combinations forming larger ones.", hint2:"Don't forget diamonds formed by 2+ smaller ones combined.", explanation:"8 small + 3 combined larger diamonds = 11 total." },
{ id:120, type:"choice", title:"Milestone: The Hourglass Puzzle", instruction:"You have a 7-minute and 4-minute hourglass. How do you measure exactly 9 minutes?", answer:"Start both hourglasses together. When the 4-minute one runs out, flip it again. When the 7-minute one runs out (at 7 min), the 4-minute one has been running for 3 min, so it has 1 min of sand left on this second run. Let that finish (8 min total), then flip the 4-minute one once more for a full run, giving 8+1=9 minutes — using the 1-minute remainder as the key marker.", hint1:"Think about what remains in the smaller hourglass when the larger one finishes.", hint2:"Restarting an hourglass at the right moment captures a specific remaining duration.", explanation:"By tracking the 1-minute remainder left in the 4-minute hourglass at the 7-minute mark, and using it as a fresh reference point, exactly 9 minutes can be measured." },
{ id:121, type:"tap", title:"The Fake Handshake", instruction:"In this group photo illustration, tap the pair of hands that don't actually belong to any two people shown (a drawing error).", answer:"tap the extra hand pair with no connected arm/body", hint1:"Trace each hand back to a visible arm and body.", hint2:"One hand pair floats without a clear owner.", explanation:"A careful trace shows one hand pair isn't connected to any full figure in the scene." },
{ id:122, type:"math", title:"The Chessboard Grains", instruction:"If you double grains of rice on each of 64 chessboard squares starting from 1, roughly how many grains on the LAST square alone?", answer:"about 9.2 quintillion (2^63)", hint1:"It's 2 raised to the power of (square number minus 1).", hint2:"2^63 is an astronomically large number.", explanation:"The 64th square alone holds 2^63 ≈ 9.22 × 10^18 grains." },
{ id:123, type:"hidden-object", title:"Hidden Anchor", instruction:"Find the anchor shape hidden in the pier/dock illustration.", answer:"tap the anchor-shaped gap between two dock posts and rope", hint1:"It's formed where rope and posts create negative space.", hint2:"Look near the bottom-center of the dock.", explanation:"Overlapping rope and post shapes form an anchor silhouette." },
{ id:124, type:"multi-tap", title:"Find the Perfect Squares", instruction:"Tap all perfect square numbers: 16, 20, 25, 30, 36, 40", answer:"16, 25, 36", hint1:"A perfect square is a number times itself.", hint2:"4×4=16, 5×5=25, 6×6=36.", explanation:"16, 25, and 36 are perfect squares; the others are not." },
{ id:125, type:"drag", title:"Complete the Domino Chain", instruction:"Drag the correct domino tile to continue the chain (matching pip counts).", answer:"drag the domino with pip count matching the open end", hint1:"Domino chains connect by matching numbers at touching ends.", hint2:"Check the pip count on the open end of the chain.", explanation:"Only the domino whose pip count matches the open end continues the chain correctly." },
{ id:126, type:"word", title:"The Longest Word", instruction:"Which of these words has the most vowels: 'EDUCATION', 'STRENGTH', 'RHYTHM'?", answer:"EDUCATION", hint1:"Count A, E, I, O, U occurrences in each word.", hint2:"One word has zero traditional vowels.", explanation:"EDUCATION has 5 vowels (E,U,A,I,O); the others have far fewer or none." },
{ id:127, type:"visual", title:"Spot the Wrong Perspective", instruction:"Tap the building in this cityscape drawn with an inconsistent vanishing point.", answer:"tap the building whose lines don't converge toward the shared vanishing point", hint1:"All correct buildings' edges point toward one common vanishing point.", hint2:"One building's lines converge elsewhere.", explanation:"Correct perspective drawing requires all lines to converge at the same vanishing point; one building breaks this." },
{ id:128, type:"choice", title:"The Fork in the Road", instruction:"At a fork, one path leads home, one to a forest, guarded by a knight who might lie. You may ask ONE yes/no question. What do you ask?", answer:"'If I asked you if this path leads home, would you say yes?'", hint1:"This double-question format cancels lying behavior.", hint2:"It works regardless of whether the knight lies or tells the truth.", explanation:"This self-referential question always yields a truthful-equivalent 'yes' or 'no' regardless of the knight's honesty." },
{ id:129, type:"hidden-object", title:"Hidden Whale", instruction:"Find the whale shape hidden in the ocean wave illustration.", answer:"tap the whale-shaped wave crest silhouette", hint1:"Its shape is formed by the curve of a large wave.", hint2:"Look at the tallest wave in the background.", explanation:"The wave's curve was drawn to subtly resemble a breaching whale." },
{ id:130, type:"math", title:"The Race Track Puzzle", instruction:"Runner A finishes a race in 40 seconds, Runner B in 50 seconds. If they race again with A giving B a 10-second head start, who wins?", answer:"It's a tie", hint1:"Calculate each runner's total time including the head start.", hint2:"B's 50 seconds minus the 10-second advantage effectively equals A's 40.", explanation:"With a 10-second head start, B's effective time matches A's exactly, resulting in a tie." },
{ id:131, type:"tap", title:"The Wrong Constellation", instruction:"Tap the star cluster that doesn't form a recognizable constellation pattern like the others.", answer:"tap the randomly scattered star cluster", hint1:"Most clusters form clear geometric or animal-like patterns.", hint2:"One cluster looks random with no discernible shape.", explanation:"Unlike the others, one star cluster has no intentional pattern connecting it." },
{ id:132, type:"visual", title:"Count the Overlapping Circles", instruction:"How many distinct regions are created by 3 overlapping circles (like a Venn diagram)?", answer:"7", hint1:"Consider each circle's unique area, each pair's overlap, and the center overlap.", hint2:"3 unique + 3 pairwise + 1 center = 7.", explanation:"Classic 3-circle Venn diagram math yields 7 distinct regions." },
{ id:133, type:"word", title:"The Silent Q", instruction:"Which word contains a letter that's completely silent: 'QUEUE', 'MOUSE', 'CHAIR'?", answer:"QUEUE", hint1:"Look at how many letters are pronounced versus written.", hint2:"Only one syllable is actually spoken despite 5 letters.", explanation:"QUEUE is pronounced simply as 'cue' — most letters are silent." },
{ id:134, type:"hidden-object", title:"Hidden Compass", instruction:"Find the compass rose shape hidden in this treasure map illustration.", answer:"tap the faint star-shaped compass marking in the corner", hint1:"It's drawn faintly, blending with the map's aged texture.", hint2:"Look in the top-left corner of the map.", explanation:"A faint compass rose is subtly embedded into the map's border decoration." },
{ id:135, type:"choice", title:"The Prisoner's Hats", instruction:"3 prisoners each wear a hat (black or white, at least one black). Each can see others' hats but not their own. All say they don't know their color, then Prisoner 1 suddenly deduces theirs. What color is Prisoner 1's hat?", answer:"Black", hint1:"If Prisoner 1 saw two white hats, they'd know their own must be black (since at least one black exists).", hint2:"The others' inability to answer gives Prisoner 1 information.", explanation:"Since no one could initially deduce their color, Prisoner 1 reasons that seeing two whites is impossible, confirming their own hat is black." },
{ id:136, type:"math", title:"The Speed Average Trick", instruction:"A car travels 60km at 60km/h, then returns the same 60km at 30km/h. What's the average speed for the whole trip?", answer:"40 km/h", hint1:"Average speed is NOT simply (60+30)/2.", hint2:"Use total distance ÷ total time.", explanation:"Total distance=120km, total time=1+2=3hrs, average=120/3=40km/h." },
{ id:137, type:"visual", title:"Spot the Extra Finger", instruction:"Tap the hand in this illustration that has an extra (6th) finger drawn by mistake.", answer:"tap the hand with 6 fingers", hint1:"Count fingers carefully on each hand shown.", hint2:"Most hands have the normal 5.", explanation:"One hand was mistakenly drawn with an extra finger." },
{ id:138, type:"hidden-object", title:"Hidden Feather", instruction:"Find the feather shape hidden in the bird's nest illustration.", answer:"tap the feather-shaped twig arrangement in the nest", hint1:"It's formed by the pattern of overlapping twigs, not a real feather.", hint2:"Look at the nest's inner curve.", explanation:"Twigs arranged in the nest coincidentally form a feather-like silhouette." },
{ id:139, type:"word", title:"The Number Riddle", instruction:"I am a 3-digit number. My tens digit is 5 more than my ones digit, and my hundreds digit is 8 less than my tens digit. What number am I?", answer:"194", hint1:"Let ones=x, tens=x+5, hundreds=(x+5)-8.", hint2:"Try small values of x that keep all digits valid (0-9).", explanation:"With x=4: ones=4, tens=9, hundreds=1, forming 194." },
{ id:140, type:"choice", title:"Milestone: The Doubling Lily Pad", instruction:"A lily pad patch doubles in size every day and covers the whole pond on day 30. On what day was it half-covered?", answer:"Day 29", hint1:"Since it doubles each day, work backward from full coverage.", hint2:"Half of day 30's coverage is exactly day 29's coverage.", explanation:"Doubling means the day before full coverage, it was at exactly half." },
{ id:141, type:"tap", title:"The Fake Puzzle Piece Edge", instruction:"Tap the puzzle piece with a straight edge that shouldn't be there (it should be a border piece, but it's placed in the middle).", answer:"tap the piece with one flat edge located in the puzzle's interior", hint1:"Border pieces have at least one flat edge; interior pieces don't.", hint2:"Check the middle rows/columns for any flat-edged piece.", explanation:"A piece with a flat edge misplaced in the puzzle's interior reveals an assembly error." },
{ id:142, type:"math", title:"The Rope Around Earth", instruction:"A rope is wrapped tightly around Earth's equator. If you add 2 meters to the rope's length and raise it evenly all around, roughly how high off the ground would it be?", answer:"about 32 cm", hint1:"Use circumference formula: added length = 2π × (change in radius).", hint2:"2m = 2π×Δr, so Δr ≈ 0.318m.", explanation:"Surprisingly, the gap is about 32cm regardless of Earth's actual size, since only the added 2m matters in the formula." },
{ id:143, type:"hidden-object", title:"Hidden Turtle", instruction:"Find the turtle shape hidden among the beach rocks illustration.", answer:"tap the rock cluster shaped like a turtle shell with a small head rock", hint1:"Look for a dome-shaped rock with a smaller rock beside it.", hint2:"It's near the water's edge.", explanation:"A dome rock plus a smaller adjacent rock forms a turtle silhouette." },
{ id:144, type:"visual", title:"Count the Hidden Letters", instruction:"How many letters of the alphabet are hidden within this abstract line drawing?", answer:"4", hint1:"Look for shapes resembling common capital letters like A, E, L, T.", hint2:"They're formed by overlapping abstract lines.", explanation:"4 distinct letter-like shapes are embedded within the abstract linework." },
{ id:145, type:"choice", title:"The Wolf Sheep Cabbage", instruction:"A farmer must cross a river with a wolf, sheep, and cabbage — same rules as fox/chicken/grain. What's the very first item to cross?", answer:"the sheep", hint1:"The middle item in the food chain always goes first in these puzzles.", hint2:"Wolf won't eat cabbage, cabbage can't eat anything, but sheep is vulnerable both ways.", explanation:"Taking the sheep first prevents wolf-sheep or sheep-cabbage conflicts on either bank." },
{ id:146, type:"tap", title:"The Wrong Season Leaf", instruction:"Tap the tree with autumn-colored leaves in an otherwise spring/summer forest scene.", answer:"tap the tree with orange/red leaves among green ones", hint1:"Most trees show green spring/summer foliage.", hint2:"One tree's leaf color doesn't match the season.", explanation:"An autumn-colored tree stands out as inconsistent with a spring/summer setting." },
{ id:147, type:"math", title:"The Cistern Problem", instruction:"A tank can be filled by pipe A in 6 hours, but a leak empties it in 12 hours. If both are open, how long to fill the tank?", answer:"12 hours", hint1:"Combine fill rate and leak rate: 1/6 - 1/12.", hint2:"Net rate = 1/12 tank per hour.", explanation:"1/6 - 1/12 = 1/12, so the tank fills fully in 12 hours." },
{ id:148, type:"hidden-object", title:"Hidden Lightning Bolt", instruction:"Find the lightning bolt shape hidden in the storm cloud illustration.", answer:"tap the jagged gap between two cloud formations", hint1:"It's formed by negative space between overlapping clouds.", hint2:"Look at the darkest part of the storm cloud.", explanation:"The gap between two cloud shapes forms a jagged lightning-bolt silhouette." },
{ id:149, type:"word", title:"The Cryptic Sum", instruction:"If SEND + MORE = MONEY (classic cryptarithm), what digit does 'M' represent?", answer:"1", hint1:"M is the leading digit of a 5-digit sum from two 4-digit numbers, so it must be small.", hint2:"Adding two 4-digit numbers can only carry over to make the result's leading digit 1.", explanation:"In this famous cryptarithm, M=1 is the only value that makes the addition work with a 5-digit result." },
{ id:150, type:"choice", title:"Milestone: The Final Hard Challenge", instruction:"A snail climbs a 10m wall. Each day it climbs 3m, each night it slides back 2m. On which day does it reach the top?", answer:"Day 8", hint1:"Net progress per full day-night cycle is 1m, but the final day it won't slide back.", hint2:"After 7 full cycles it's at 7m; on day 8 it climbs 3m more, reaching 10m before sliding.", explanation:"After 7 days of net 1m/day progress (7m), on day 8 it climbs the remaining 3m to reach exactly 10m and escapes before sliding back." }
];

function generateSceneConfig(level) {
  const t = level.type;
  
  if (t === "choice" || t === "math" || t === "word" || t === "visual") {
    // Math/Choice/Word usually rely on multiple choice options or text input, let's just make it choice
    let opts = [
      { id: "opt1", text: level.answer },
      { id: "opt2", text: "Something else" },
      { id: "opt3", text: "Another option" },
    ];
    if (t === "math" && level.answer === "2.4 hours") {
      opts = [{id: "opt1", text: "2.4 hours", isCorrect: true}, {id: "opt2", text: "5 hours"}, {id: "opt3", text: "10 hours"}];
    } else if (level.answer === "121") {
      opts = [{id: "opt1", text: "121", isCorrect: true}, {id: "opt2", text: "120"}, {id: "opt3", text: "110"}];
    } else if (level.answer === "12 hours") {
       opts = [{id: "opt1", text: "12 hours", isCorrect: true}, {id: "opt2", text: "6 hours"}, {id: "opt3", text: "18 hours"}];
    } else if (t === "word" && level.answer === "elephant") {
      opts = [{id: "opt1", text: "elephant", isCorrect: true}, {id: "opt2", text: "ant"}, {id: "opt3", text: "cat"}];
    } else if (level.answer === "Black") {
       opts = [{id: "opt1", text: "Black", isCorrect: true}, {id: "opt2", text: "White"}];
    } else {
       // generic options
       opts[0].isCorrect = true;
    }
    
    // Scramble options
    opts.sort(() => Math.random() - 0.5);

    return {
      background: "#FFF",
      promptNote: "Select the correct answer.",
      options: opts,
      items: []
    };
  }

  if (t === "tap" || t === "hidden-object") {
    return {
      background: "#FFF",
      items: [
        { id: "item1", label: "Wrong item", shape: "circle", x: 20, y: 50, size: 50, color: "#ccc" },
        { id: "item2", label: "Wrong item 2", shape: "square", x: 80, y: 50, size: 50, color: "#ccc" },
        { id: "target", label: "Correct target", shape: "star", x: 50, y: 50, size: 60, color: "#F59E0B", isTarget: true }
      ]
    };
  }

  if (t === "drag") {
    return {
      background: "#FFF",
      dropZones: [
        { id: "dz1", x: 50, y: 80, width: 60, height: 60, acceptItemId: "drag1" }
      ],
      items: [
        { id: "drag1", label: "Draggable", shape: "circle", x: 50, y: 20, size: 40, color: "#3B82F6", draggable: true }
      ]
    };
  }

  if (t === "multi-tap") {
    return {
      background: "#FFF",
      items: [
        { id: "t1", text: "9", shape: "square", x: 20, y: 20, size: 50 },
        { id: "t2", text: "21", shape: "square", x: 50, y: 20, size: 50 },
        { id: "t3", text: "25", shape: "square", x: 80, y: 20, size: 50 },
        { id: "f1", text: "2", shape: "square", x: 20, y: 80, size: 50 },
        { id: "f2", text: "13", shape: "square", x: 50, y: 80, size: 50 },
        { id: "f3", text: "17", shape: "square", x: 80, y: 80, size: 50 },
      ]
    };
  }

  if (t === "sequence") {
    return {
      background: "#FFF",
      items: [
        { id: "seq1", text: "Evaporation", shape: "rectangle", x: 50, y: 20, size: 60, width: 120 },
        { id: "seq2", text: "Condensation", shape: "rectangle", x: 50, y: 45, size: 60, width: 120 },
        { id: "seq3", text: "Precipitation", shape: "rectangle", x: 50, y: 70, size: 60, width: 120 },
        { id: "seq4", text: "Collection", shape: "rectangle", x: 50, y: 95, size: 60, width: 120 }
      ]
    };
  }

  return { background: "#FFF", items: [] };
}

function processLevel(l) {
  let res = { ...l };
  res.reward = 15;
  if (!res.sceneConfig) {
    res.sceneConfig = generateSceneConfig(l);
  }
  
  if (l.type === "choice" || l.type === "math" || l.type === "visual" || l.type === "word") {
    const correctOpt = res.sceneConfig.options.find(o => o.isCorrect);
    if (correctOpt) {
      res.answer = correctOpt.id;
    }
  } else if (l.type === "tap" || l.type === "hidden-object") {
    res.answer = "target";
  } else if (l.type === "multi-tap") {
    res.answer = ["t1", "t2", "t3"];
  } else if (l.type === "drag") {
    res.answer = "drop_success";
  } else if (l.type === "sequence") {
    res.answer = ["seq1", "seq2", "seq3", "seq4"];
  }
  
  return res;
}

const finalLevels = rawLevels.map(processLevel);

const part5 = finalLevels.slice(0, 25);
const part6 = finalLevels.slice(25, 50);

const genFile = (arr, name) => {
  let content = `import { PuzzleLevel } from '../types';\n\nexport const ${name}: PuzzleLevel[] = ` + JSON.stringify(arr, null, 2) + ';\n';
  fs.writeFileSync(`src/data/${name}.ts`, content);
}

genFile(part5, 'levelsPart5');
genFile(part6, 'levelsPart6');

console.log("Levels updated!");

