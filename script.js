let hamburger = document.querySelector("#mob-menu");
let navBar = document.querySelector(".mob-nav-list");
let closeBtn = document.querySelector(".close-button")
let navItems = document.querySelectorAll(".nav-item");
var isNavVisible = false


function onClick() {
  if(isNavVisible) {
    navBar.style.display = "none";
    hamburger.style.display = "block";
    closeBtn.style.display = "none";
    isNavVisible = false;
  }
  
  else {
    navBar.style.display = "block"
    hamburger.style.display = "none";
    closeBtn.style.display = "block";
    isNavVisible = true;
  }
 
}
hamburger.addEventListener("click" , onClick);
closeBtn.addEventListener("click",onClick)
navItems.forEach((e) => {
  e.addEventListener("click",onClick)
});
