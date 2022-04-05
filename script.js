let navButton = document.querySelector("#mob-menu");
let navBar = document.querySelector(".nav-list");
let closeBtn = document.querySelector(".close-button")
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
