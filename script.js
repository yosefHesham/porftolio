let navButton = document.querySelector("#mob-menu");
let navBar = document.querySelector(".nav-list");
var isNavVisible = false


function onClick() {
  console.log(isNavVisible);
  if(isNavVisible) {
    navBar.style.display = "none";
    navButton.style.display = "block";
    isNavVisible = false;
  }
  
  else {
    navBar.style.display = "block"
    navButton.style.display = "none";
    isNavVisible = true;
  }
 
}
navButton.addEventListener("click" , onClick);
