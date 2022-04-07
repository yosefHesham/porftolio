var isModalShown = false;
let openModalButton = document.querySelectorAll(".open-modal")
let modalPop = document.querySelector(".popup-wrapper")



var projects = [
  {
    id:"1",
    name: "Multi-Post Stories Gain+Glory",
    technologies: ["Ruby on rails", "css", "Javascript" ,"html"],
    desktopPopupTech: [
      "Codekit",
      "Github",
      "Javascript",
      "Bootstrap",
      "Terminal",
      "Codepen",
    ],
    mobilePopupTech: ["Ruby on rails",  "css","javascript"],
    title: "Keeping track of hundreds of components",
    popUpImageDesktop: "assets/images/snapshot-desktop.png",
    popUpImageMobile: "assets/images/snapshoot-portfolio.png",
  },
  {
    id:"2",
    name: "Multi-Post Stories Gain+Glory",
    technologies: ["Ruby on rails", "css", "Javascript" ,"html"],
    desktopPopupTech: [
      "Codekit",
      "Github",
      "Javascript",
      "Bootstrap",
      "Terminal",
      "Codepen",
    ],
    mobilePopupTech: ["Ruby on rails",  "css","javascript"],
    title: "Keeping track of hundreds of components",
    popUpImageDesktop: "assets/images/snapshot-desktop.png",
    popUpImageMobile: "assets/images/snapshoot-portfolio.png",
  },
  {
    id:"3",
    name: "Multi-Post Stories Gain+Glory",
    technologies: ["Ruby on rails", "css", "Javascript" ,"html"],
    desktopPopupTech: [
      "Codekit",
      "Github",
      "Javascript",
      "Bootstrap",
      "Terminal",
      "Codepen",
    ],
    mobilePopupTech: ["Ruby on rails",  "css","javascript"],
    title: "Keeping track of hundreds of components",
    popUpImageDesktop: "assets/images/snapshot-desktop.png",
    popUpImageMobile: "assets/images/snapshoot-portfolio.png",
  },
  {
    id:"4",
    name: "Multi-Post Stories Gain+Glory",
    technologies: ["Ruby on rails", "css", "Javascript" ,"html"],
    desktopPopupTech: [
      "Codekit",
      "Github",
      "Javascript",
      "Bootstrap",
      "Terminal",
      "Codepen",
    ],
    mobilePopupTech: ["Ruby on rails",  "css","javascript"],
    title: "Keeping track of hundreds of components",
    popUpImageDesktop: "assets/images/snapshot-desktop.png",
    popUpImageMobile: "assets/images/snapshoot-portfolio.png",
  },
  {
    id:"5",
    name: "Multi-Post Stories Gain+Glory",
    technologies: ["Ruby on rails", "css", "Javascript" ,"html"],
    desktopPopupTech: [
      "Codekit",
      "Github",
      "Javascript",
      "Bootstrap",
      "Terminal",
      "Codepen",
    ],
    mobilePopupTech: ["Ruby on rails",  "css","javascript"],
    title: "Keeping track of hundreds of components",
    popUpImageDesktop: "assets/images/snapshot-desktop.png",
    popUpImageMobile: "assets/images/snapshoot-portfolio.png",
  },
  {
    id:"6",
    name: "Multi-Post Stories Gain+Glory",
    technologies: ["Ruby on rails", "css", "Javascript" ,"html"],
    desktopPopupTech: [
      "Codekit",
      "Github",
      "Javascript",
      "Bootstrap",
      "Terminal",
      "Codepen",
    ],
    mobilePopupTech: ["Ruby on rails",  "css","javascript"],
    title: "Keeping track of hundreds of components",
    popUpImageDesktop: "assets/images/snapshot-desktop.png",
    popUpImageMobile: "assets/images/snapshoot-portfolio.png",
  },
];


function closeModal () {
  if(isModalShown) {
    modalPop.style.display = "none";
    isModalShown = false
  }
}

function openModal() {
  if(isModalShown) {
    modalPop.style.display = "none";
    isModalShown = false;
  }
  else {
    modalPop.style.display = "block";
    isModalShown = true;
  }
}



openModalButton.forEach((e) => e.addEventListener('click',openModal))

modalPop.addEventListener('click',function(e) {
  if(e.target.classList.contains("popup-wrapper")) {
    openModal()
;  }
}, )

