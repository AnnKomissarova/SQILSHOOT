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

