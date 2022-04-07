var isModalShown = false;
let openModalButton = document.querySelectorAll(".open-modal")
let modalPop = document.querySelector(".popup-wrapper")
let modalContent = document.querySelector(".modal-content");
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




function openModal(e) {
    modalPop.style.display = "block";
    isModalShown = true;
}
function closeModal () {
    modalPop.style.display = "none";
    isModalShown = false
}



function createTechList(technologies) {
  let langList = document.createElement("ul")
  langList.classList.add("project-lang-list");
  for(var i = 0; i < technologies.length; i ++) {
    let element = document.createElement("li");
    element.classList.add("lang")
    element.innerHTML = technologies[i];
    langList.appendChild(element);
  }
return langList.innerHTML
}


openModalButton.forEach((e) => e.addEventListener('click', function(e) {
  const projectId = e.target.getAttribute('data')
  const project = projects.find((e) => e.id === projectId);
  let temp = document.createElement("template")

  temp.innerHTML = ` <div class="cancel-with-image">
  <img  class="cancel-icon"src="assets/images/close-desktop.png" alt="close-icon">
  <img class="mobile-snap" src=${project.popUpImageMobile} alt="snapshoot" />
  <img class="desktop-snap" src=${project.popUpImageDesktop} alt="snapshoot">
</div>
<div class="desktop-hint">
  <h3 class="project-title-popup">${project.title}</h3>
    <article class="desktop-buttons">
      <div class="popup-button">
        <p>See Live</p>
        <img src="assets/images/see-live.png" alt="see-live.icon">
      </div>
      <div class="popup-button">
        <p>See Source</p>
        <img src="assets/images/github.png" alt="github-icon">
      </div>
</div>
    </article>
  <ul class="project-lang-list">
  ${project.mobilePopupTech.map((e) => `<li class="mob-list-item">${e}</li>`)}
  <!-- Desktop items -->
  ${project.desktopPopupTech.map((e) => `<li class="mob-list-item">${e}</li>`)}

  </ul>
  <p class="project-description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea</p>
  <article class="buttons">
    <div class="popup-button">
      <p>See Live</p>
      <img src="assets/images/see-live.png" alt="">
    </div>
    <div class="popup-button">
      <p>See Source</p>
      <img src="assets/images/github.png" alt="">
    </div>`

    console.log(modalContent);
    openModal()

} ))

cancelIcon.addEventListener('click',closeModal)
modalPop.addEventListener('click',function(e) {
  if(e.target.classList.contains("popup-wrapper")) {
    closeModal()
;  }
}, )

