var isModalShown = false;
let openModalButton = document.querySelectorAll(".open-modal")
let modalPop = document.querySelector(".popup-wrapper")
let body = document.querySelector("body")



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
body.addEventListener('click',openModal)

