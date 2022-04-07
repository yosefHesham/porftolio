const openModalButton = document.querySelectorAll('.open-modal');
const modalPop = document.querySelector('.popup-wrapper');

const prjcts = window.projects;

function createTechList(technologies, className) {
  const langList = document.createElement('ul');
  langList.classList.add('project-lang-list');
  for (let i = 0; i < technologies.length; i += 1) {
    const element = document.createElement('li');
    element.classList.add(className[0]);
    element.classList.add(className[1]);
    element.innerHTML = technologies[i];
    langList.appendChild(element);
  }
  return langList.innerHTML;
}
function openModal(e) {
  modalPop.style.display = 'block';
  const projectId = e.target.getAttribute('data');
  const project = prjcts.find((e) => e.id === projectId);
  const temp = document.createElement('template');

  temp.innerHTML = `<section class="modal-content">
  <div class="cancel-with-image">
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
${createTechList(project.mobilePopupTech, ['mob-list-item', 'lang'])}
<!-- Desktop items -->
${createTechList(project.desktopPopupTech, ['desktop-list-item', 'lang'])}

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
  </div></section>`;
  modalPop.innerHTML = temp.innerHTML;
}
function closeModal() {
  modalPop.style.display = 'none';
}

openModalButton.forEach((e) => e.addEventListener('click', openModal));

modalPop.addEventListener('click', (e) => {
  if (
    e.target.classList.contains('popup-wrapper')
    || e.target.classList.contains('cancel-icon')
  ) {
    closeModal();
  }
});
