const hamburger = document.querySelector('#mob-menu');
const navBar = document.querySelector('.mob-nav-list');
const closeBtn = document.querySelector('.close-button');
const navItems = document.querySelectorAll('.nav-item');
let isNavVisible = false;

const projects = [
  {
    id: '1',
    name: 'Multi-Post Stories Gain+Glory I Love you !',
    technologies: ['Ruby on rails', 'css', 'Javascript', 'html'],
    desktopPopupTech: [
      'Codekit',
      'Github',
      'Javascript',
      'Bootstrap',
      'Terminal',
      'Codepen',
    ],
    mobilePopupTech: ['Ruby on rails', 'css', 'javascript'],
    title: 'Keeping track of hundreds of components',
    popUpImageDesktop: 'assets/images/snapshot-desktop.png',
    popUpImageMobile: 'assets/images/snapshoot-portfolio.png',
  },
  {
    id: '2',
    name: 'Multi-Post Stories Gain+Glory',
    technologies: ['Ruby on rails', 'css', 'Javascript', 'html'],
    desktopPopupTech: [
      'Codekit',
      'Github',
      'Javascript',
      'Bootstrap',
      'Terminal',
      'Codepen',
    ],
    mobilePopupTech: ['Ruby on rails', 'css', 'javascript'],
    title: 'Keeping track of hundreds of components',
    popUpImageDesktop: 'assets/images/snapshot-desktop.png',
    popUpImageMobile: 'assets/images/snapshoot-portfolio.png',
  },
  {
    id: '3',
    name: 'Multi-Post Stories Gain+Glory',
    technologies: ['Ruby on rails', 'css', 'Javascript', 'html'],
    desktopPopupTech: [
      'Codekit',
      'Github',
      'Javascript',
      'Bootstrap',
      'Terminal',
      'Codepen',
    ],
    mobilePopupTech: ['Ruby on rails', 'css', 'javascript'],
    title: 'Keeping track of hundreds of components',
    popUpImageDesktop: 'assets/images/snapshot-desktop.png',
    popUpImageMobile: 'assets/images/snapshoot-portfolio.png',
  },
  {
    id: '4',
    name: 'Multi-Post Stories Gain+Glory',
    technologies: ['Ruby on rails', 'css', 'Javascript', 'html'],
    desktopPopupTech: [
      'Codekit',
      'Github',
      'Javascript',
      'Bootstrap',
      'Terminal',
      'Codepen',
    ],
    mobilePopupTech: ['Ruby on rails', 'css', 'javascript'],
    title: 'Keeping track of hundreds of components',
    popUpImageDesktop: 'assets/images/snapshot-desktop.png',
    popUpImageMobile: 'assets/images/snapshoot-portfolio.png',
  },
  {
    id: '5',
    name: 'Multi-Post Stories Gain+Glory',
    technologies: ['Ruby on rails', 'css', 'Javascript', 'html'],
    desktopPopupTech: [
      'Codekit',
      'Github',
      'Javascript',
      'Bootstrap',
      'Terminal',
      'Codepen',
    ],
    mobilePopupTech: ['Ruby on rails', 'css', 'javascript'],
    title: 'Keeping track of hundreds of components',
    popUpImageDesktop: 'assets/images/snapshot-desktop.png',
    popUpImageMobile: 'assets/images/snapshoot-portfolio.png',
  },
  {
    id: '6',
    name: 'Multi-Post Stories Gain+Glory',
    technologies: ['Ruby on rails', 'css', 'Javascript', 'html'],
    desktopPopupTech: [
      'Codekit',
      'Github',
      'Javascript',
      'Bootstrap',
      'Terminal',
      'Codepen',
    ],
    mobilePopupTech: ['Ruby on rails', 'css', 'javascript'],
    title: 'Keeping track of hundreds of components',
    popUpImageDesktop: 'assets/images/snapshot-desktop.png',
    popUpImageMobile: 'assets/images/snapshoot-portfolio.png',
  },
];

function onClick() {
  if (isNavVisible) {
    navBar.style.display = 'none';
    hamburger.style.display = 'block';
    closeBtn.style.display = 'none';
    isNavVisible = false;
  } else {
    navBar.style.display = 'block';
    hamburger.style.display = 'none';
    closeBtn.style.display = 'block';
    isNavVisible = true;
  }
}
hamburger.addEventListener('click', onClick);
closeBtn.addEventListener('click', onClick);
navItems.forEach((e) => {
  e.addEventListener('click', onClick);
});

function getElement(className) {
  return document.querySelector(className);
}

function createTechList(technologies) {
  const langList = document.createElement('ul');
  langList.classList.add('project-lang-list');
  for (let i = 0; i < technologies.length; i += 1) {
    const element = document.createElement('li');
    element.classList.add('lang');
    element.innerHTML = technologies[i];
    langList.appendChild(element);
  }
  return langList.innerHTML;
}

function createWorksSection() {
  for (let i = 0; i < projects.length; i += 1) {
    const project = projects[i];
    const { technologies } = project;
    const workTemplate = document.createElement('template');
    workTemplate.innerHTML = `<article class="card">
    <div class="project-sample">
      <h4 class="project-title">${project.name}</h4>
      <ul class="project-lang-list">
      ${createTechList(technologies)}
      </ul>
       <a class="button open-modal" data=${project.id}> See Projects </a>
     </div>
   </article>`;
    getElement('.recent-works').appendChild(workTemplate.content.firstChild);
  }
}

window.onload = createWorksSection();
