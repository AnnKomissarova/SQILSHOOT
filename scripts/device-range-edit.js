const numFrame = document.getElementById('frame-num');
const rngFrame = document.getElementById('frame-range');
const numSide = document.getElementById('side-num');
const rngSide = document.getElementById('side-range');

const setFrame = val => {
  numFrame.value = val;
  rngFrame.value = val;
}

const setSide = val => {
  numSide.value = val;
  rngSide.value = val;
}

rngFrame.addEventListener('input', () => setFrame(rngFrame.value));
numFrame.addEventListener('change', () => setFrame(numFrame.value));
rngSide.addEventListener('input', () => setSide(rngSide.value));
numSide.addEventListener('change', () => setSide(numSide.value));