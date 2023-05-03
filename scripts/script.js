const bodyOverlay = document.querySelector(".body-overlay");
const body = document.querySelector("body");
const collapseBtn = document.querySelector("#collapse");
const menuItems = document.querySelectorAll(".sidebar span");
const menuLinks = document.querySelectorAll(".sidebar a");

collapseBtn.addEventListener("click", function(event) {
    event.preventDefault();
    for(var i = 0; i < menuItems.length; i++) {
      menuItems[i].classList.toggle("collapse");
    }
    for(var i = 0; i < menuLinks.length; i++) {
        menuLinks[i].classList.toggle("collapse");
      }
  });

const userMenuBtn = document.querySelector(".user-btn");
const userMenu = document.querySelector(".mini-user-menu");
const main = document.querySelector("main");
const languageBtn = document.querySelector(".language-btn");
const languageMenu = document.querySelector(".language-menu");

userMenuBtn.addEventListener('click', function(event) {
  event.preventDefault();
  userMenu.classList.toggle('expand');
});

languageBtn.addEventListener('click', function(event) {
  event.preventDefault();
  languageMenu.classList.toggle('expand');
});

main.addEventListener('click', function(event) {
  event.preventDefault();
  userMenu.classList.remove('expand');
  languageMenu.classList.remove('expand');
});

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