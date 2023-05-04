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

// const userMenuBtn = document.querySelector(".user-btn");
// const userMenu = document.querySelector(".mini-user-menu");
// const languageBtn = document.querySelector(".language-btn");
// const languageMenu = document.querySelector(".language-menu");

// userMenuBtn.addEventListener('click', function(event) {
//   event.preventDefault();
//   userMenu.classList.toggle('expand');
// });

// languageBtn.addEventListener('click', function(event) {
//   event.preventDefault();
//   languageMenu.classList.toggle('expand');
// });

// main.addEventListener('click', function(event) {
//   event.preventDefault();
//   userMenu.classList.remove('expand');
//   languageMenu.classList.remove('expand');
// });

