let navButton = document.querySelector("#mob-menu");
let navBar = document.querySelector(".nav-list");
let closeBtn = document.querySelector(".close-button")
let navItems = document.querySelectorAll(".nav-item");
var isNavVisible = false


function onClick() {
  if(isNavVisible) {
    navBar.style.display = "none";
    navButton.style.display = "block";
    closeBtn.style.display = "none";
    isNavVisible = false;
  }
  
  else {
    navBar.style.display = "block"
    navButton.style.display = "none";
    closeBtn.style.display = "block";
    isNavVisible = true;
  }
 
}
closeBtn.addEventListener("click",onClick)
navButton.addEventListener("click" , onClick);
navItems.forEach((e) => {
  e.addEventListener("click",onClick)
});
