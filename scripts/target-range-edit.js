const numShot = document.getElementById('shot-num');
const rngShot = document.getElementById('shot-range');
const numContour = document.getElementById('contour-num');
const rngContour = document.getElementById('contour-range');

const setFrame = val => {
  numShot.value = val;
  rngShot.value = val;
}

const setSide = val => {
  numContour.value = val;
  rngContour.value = val;
}

rngShot.addEventListener('input', () => setFrame(rngShot.value));
numShot.addEventListener('change', () => setFrame(numShot.value));
rngContour.addEventListener('input', () => setSide(rngContour.value));
numContour.addEventListener('change', () => setSide(numContour.value));

// const slider = document.querySelector('.range');
// const progress = document.querySelector('.progress');

// slider.oninput = function(){
//   progress.style.width = `${this.value}px`;
//   console.log(`${this.value}px`)
// };