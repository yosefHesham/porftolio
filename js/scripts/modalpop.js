var isModalShown = false;
let openModalButton = document.querySelectorAll(".open-modal")
let modalPop = document.querySelector(".popup-wrapper")
let cancelIcon = document.querySelector(".cancel-icon")



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



function openModal() {
  console.log(isModalShown);
    modalPop.style.display = "block";
    isModalShown = true;
}
function closeModal () {
    modalPop.style.display = "none";
    isModalShown = false
}




openModalButton.forEach((e) => e.addEventListener('click',openModal))

cancelIcon.addEventListener('click',closeModal)
modalPop.addEventListener('click',function(e) {
  if(e.target.classList.contains("popup-wrapper")) {
    closeModal()
;  }
}, )

