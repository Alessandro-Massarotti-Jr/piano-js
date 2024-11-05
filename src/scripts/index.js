const tones = [
  {
    octave: 0,
    notes: {
      C: 16.35,
      "C#": 17.32,
      D: 18.35,
      "D#": 19.45,
      E: 20.6,
      F: 21.83,
      "F#": 23.12,
      G: 24.5,
      "G#": 25.96,
      A: 27.5,
      "A#": 29.14,
      B: 30.87,
    },
  },
  {
    octave: 1,
    notes: {
      C: 32.7,
      "C#": 34.65,
      D: 36.71,
      "D#": 38.89,
      E: 41.2,
      F: 43.65,
      "F#": 46.25,
      G: 49.0,
      "G#": 51.91,
      A: 55.0,
      "A#": 58.27,
      B: 61.74,
    },
  },
  {
    octave: 2,
    notes: {
      C: 65.41,
      "C#": 69.3,
      D: 73.42,
      "D#": 77.78,
      E: 82.41,
      F: 87.31,
      "F#": 92.5,
      G: 98.0,
      "G#": 103.8,
      A: 110.0,
      "A#": 116.5,
      B: 123.5,
    },
  },
  {
    octave: 3,
    notes: {
      C: 130.8,
      "C#": 138.6,
      D: 146.8,
      "D#": 155.6,
      E: 164.8,
      F: 174.6,
      "F#": 185.0,
      G: 196.0,
      "G#": 207.7,
      A: 220.0,
      "A#": 233.1,
      B: 246.9,
    },
  },
  {
    octave: 4,
    notes: {
      C: 261.6,
      "C#": 277.2,
      D: 293.7,
      "D#": 311.1,
      E: 329.6,
      F: 349.2,
      "F#": 370.0,
      G: 392.0,
      "G#": 415.3,
      A: 440.0,
      "A#": 466.2,
      B: 493.9,
    },
  },
  {
    octave: 5,
    notes: {
      C: 523.3,
      "C#": 554.4,
      D: 587.3,
      "D#": 622.3,
      E: 659.3,
      F: 698.5,
      "F#": 740.0,
      G: 784.0,
      "G#": 830.6,
      A: 880.0,
      "A#": 932.3,
      B: 987.8,
    },
  },
  {
    octave: 6,
    notes: {
      C: 1047,
      "C#": 1109,
      D: 1175,
      "D#": 1245,
      E: 1319,
      F: 1397,
      "F#": 1480,
      G: 1568,
      "G#": 1661,
      A: 1760,
      "A#": 1865,
      B: 1976,
    },
  },
  {
    octave: 7,
    notes: {
      C: 2093,
      "C#": 2217,
      D: 2349,
      "D#": 2489,
      E: 2637,
      F: 2794,
      "F#": 2960,
      G: 3136,
      "G#": 3322,
      A: 3520,
      "A#": 3729,
      B: 3951,
    },
  },
  {
    octave: 8,
    notes: {
      C: 4186,
      "C#": 4435,
      D: 4699,
      "D#": 4978,
      E: 5274,
      F: 5588,
      "F#": 5920,
      G: 6272,
      "G#": 6645,
      A: 7040,
      "A#": 7459,
      B: 7902,
    },
  },
];

let firstOctave = 2;
let middleOctave = 3;
let lastOctave = 4;

let pressedKeys = [];
let currentContexts = {};
const context = new AudioContext();

// Isso aqui ainda não ficou bom, esta com um xiado estranho ao final do audio
// const real = new Float32Array([0, 1, 0.5, 0.25, 0.1, 0.05]);
// const imag = new Float32Array(real.length);
// const wave = context.createPeriodicWave(real, imag);

const displayOctave = () => {
  const octave = document.querySelector(".octave");
  octave.innerHTML = `Oitavas: ${firstOctave} - ${middleOctave} - ${lastOctave}`;
};

const playTone = (tone) => {
  const keysNodeMap = {
    KeyQ: tones[firstOctave].notes["C"],
    KeyW: tones[firstOctave].notes["C#"],
    KeyE: tones[firstOctave].notes["D"],
    KeyR: tones[firstOctave].notes["D#"],
    KeyT: tones[firstOctave].notes["E"],
    KeyY: tones[firstOctave].notes["F"],
    KeyU: tones[firstOctave].notes["F#"],
    KeyI: tones[firstOctave].notes["G"],
    KeyO: tones[firstOctave].notes["G#"],
    KeyP: tones[firstOctave].notes["A"],
    BracketLeft: tones[firstOctave].notes["A#"],
    BracketRight: tones[firstOctave].notes["B"],
    KeyA: tones[middleOctave].notes["C"],
    KeyS: tones[middleOctave].notes["C#"],
    KeyD: tones[middleOctave].notes["D"],
    KeyF: tones[middleOctave].notes["D#"],
    KeyG: tones[middleOctave].notes["E"],
    KeyH: tones[middleOctave].notes["F"],
    KeyJ: tones[middleOctave].notes["F#"],
    KeyK: tones[middleOctave].notes["G"],
    KeyL: tones[middleOctave].notes["G#"],
    Semicolon: tones[middleOctave].notes["A"],
    Quote: tones[middleOctave].notes["A#"],
    Backslash: tones[middleOctave].notes["B"],
    IntlBackslash: tones[lastOctave].notes["C"],
    KeyZ: tones[lastOctave].notes["C#"],
    KeyX: tones[lastOctave].notes["D"],
    KeyC: tones[lastOctave].notes["D#"],
    KeyV: tones[lastOctave].notes["E"],
    KeyB: tones[lastOctave].notes["F"],
    KeyN: tones[lastOctave].notes["F#"],
    KeyM: tones[lastOctave].notes["G"],
    Comma: tones[lastOctave].notes["G#"],
    Period: tones[lastOctave].notes["A"],
    Slash: tones[lastOctave].notes["A#"],
    IntlRo: tones[lastOctave].notes["B"],
  };
  if (pressedKeys.includes(tone)) return;
  if (!keysNodeMap[tone]) return;
  pressedKeys.push(tone);
  const contextGain = context.createGain();
  const oscillator = context.createOscillator();
  const clickedKey = document.querySelector(`[data-key="${tone}"]`);
  clickedKey.classList.add("active");
  currentContexts[tone] = contextGain;
  oscillator.connect(contextGain);
  contextGain.connect(context.destination);
  //   oscillator.setPeriodicWave(wave);
  oscillator.type = "square";
  oscillator.frequency.value = keysNodeMap[tone];
  oscillator.start(0);
};

const stopTone = (tone) => {
  if (!currentContexts[tone]) return;
  pressedKeys = pressedKeys.filter((pressed) => pressed !== tone);
  currentContexts[tone].gain.exponentialRampToValueAtTime(
    0.00001,
    context.currentTime + 3
  );
  const clickedKey = document.querySelector(`[data-key="${tone}"]`);
  clickedKey.classList.remove("active");
  currentContexts[tone] = undefined;
};

const upOctave = () => {
  if (lastOctave === tones.length - 1) return;
  firstOctave = firstOctave + 1;
  middleOctave = middleOctave + 1;
  lastOctave = lastOctave + 1;
  displayOctave();
};

const downOctave = () => {
  if (firstOctave === 0) return;
  firstOctave = firstOctave - 1;
  middleOctave = middleOctave - 1;
  lastOctave = lastOctave - 1;
  displayOctave();
};

document.addEventListener("keydown", (key) => {
  if (key.code === "ArrowUp") {
    upOctave();
    return;
  }

  if (key.code === "ArrowDown") {
    downOctave();
    return;
  }

  playTone(key.code);
});

document.addEventListener("keyup", (key) => {
  stopTone(key.code);
});

const pianoKeys = document.querySelectorAll(".piano-keys .key");
pianoKeys.forEach((pianoKey) => {
  pianoKey.addEventListener("mousedown", () => {
    playTone(pianoKey.getAttribute("data-key"));
  });

  pianoKey.addEventListener("mouseup", () => {
    stopTone(pianoKey.getAttribute("data-key"));
  });

  pianoKey.addEventListener("touchstart", () => {
    playTone(pianoKey.getAttribute("data-key"));
  });

  pianoKey.addEventListener("touchend", () => {
    stopTone(pianoKey.getAttribute("data-key"));
  });
});

const upOctaveButton = document.querySelector(".octave-button.up");
const downOctaveButton = document.querySelector(".octave-button.down");

upOctaveButton.addEventListener("mousedown", () => {
  upOctave();
});

upOctaveButton.addEventListener("touchstart", () => {
  upOctave;
});

downOctaveButton.addEventListener("mousedown", () => {
  downOctave();
});

downOctaveButton.addEventListener("touchstart", () => {
  downOctave;
});

displayOctave();
