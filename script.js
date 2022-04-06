const hamburger = document.querySelector("#mob-menu");
const navBar = document.querySelector(".mob-nav-list");
const closeBtn = document.querySelector(".close-button");
const navItems = document.querySelectorAll(".nav-item");
let isNavVisible = false;

function onClick() {
  if (isNavVisible) {
    navBar.style.display = "none";
    hamburger.style.display = "block";
    closeBtn.style.display = "none";
    isNavVisible = false;
  } else {
    navBar.style.display = "block";
    hamburger.style.display = "none";
    closeBtn.style.display = "block";
    isNavVisible = true;
  }
}
hamburger.addEventListener("click", onClick);
closeBtn.addEventListener("click", onClick);
navItems.forEach((e) => {
  e.addEventListener("click", onClick);
});

const projects = [
  {
    name: "Multi-Post Stories Gain+Glory",
    technologies: ["Ruby on rails, css, Javascript ,html"],
    desktopPopupTech: [
      "Codekit",
      "Github",
      "Javascript",
      "Bootstrap",
      "Terminal",
      "Codepen",
    ],
    mobilePopupTech: ["Ruby on rails,  css,javascript"],
    title: "Keeping track of hundreds of components",
    popUpImageDesktop: "assets/images/snapshot-desktop.png",
    popUpImageMobile: "assets/images/snapshoot-portfolio.png",
  },
  {
    name: "Multi-Post Stories Gain+Glory",
    technologies: ["Ruby on rails, css, Javascript ,html"],
    desktopPopupTech: [
      "Codekit",
      "Github",
      "Javascript",
      "Bootstrap",
      "Terminal",
      "Codepen",
    ],
    mobilePopupTech: ["Ruby on rails,  css,javascript"],
    title: "Keeping track of hundreds of components",
    popUpImageDesktop: "assets/images/snapshot-desktop.png",
    popUpImageMobile: "assets/images/snapshoot-portfolio.png",
  },
  {
    name: "Multi-Post Stories Gain+Glory",
    technologies: ["Ruby on rails, css, Javascript ,html"],
    desktopPopupTech: [
      "Codekit",
      "Github",
      "Javascript",
      "Bootstrap",
      "Terminal",
      "Codepen",
    ],
    mobilePopupTech: ["Ruby on rails,  css,javascript"],
    title: "Keeping track of hundreds of components",
    popUpImageDesktop: "assets/images/snapshot-desktop.png",
    popUpImageMobile: "assets/images/snapshoot-portfolio.png",
  },
  {
    name: "Multi-Post Stories Gain+Glory",
    technologies: ["Ruby on rails, css, Javascript ,html"],
    desktopPopupTech: [
      "Codekit",
      "Github",
      "Javascript",
      "Bootstrap",
      "Terminal",
      "Codepen",
    ],
    mobilePopupTech: ["Ruby on rails,  css,javascript"],
    title: "Keeping track of hundreds of components",
    popUpImageDesktop: "assets/images/snapshot-desktop.png",
    popUpImageMobile: "assets/images/snapshoot-portfolio.png",
  },
  {
    name: "Multi-Post Stories Gain+Glory",
    technologies: ["Ruby on rails, css, Javascript ,html"],
    desktopPopupTech: [
      "Codekit",
      "Github",
      "Javascript",
      "Bootstrap",
      "Terminal",
      "Codepen",
    ],
    mobilePopupTech: ["Ruby on rails,  css,javascript"],
    title: "Keeping track of hundreds of components",
    popUpImageDesktop: "assets/images/snapshot-desktop.png",
    popUpImageMobile: "assets/images/snapshoot-portfolio.png",
  },
  {
    name: "Multi-Post Stories Gain+Glory",
    technologies: ["Ruby on rails, css, Javascript ,html"],
    desktopPopupTech: [
      "Codekit",
      "Github",
      "Javascript",
      "Bootstrap",
      "Terminal",
      "Codepen",
    ],
    mobilePopupTech: ["Ruby on rails,  css,javascript"],
    title: "Keeping track of hundreds of components",
    popUpImageDesktop: "assets/images/snapshot-desktop.png",
    popUpImageMobile: "assets/images/snapshoot-portfolio.png",
  },
];
