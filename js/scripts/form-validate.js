
const form = document.querySelector(".contact-form");
let span = document.querySelector(".error-message");

function hasUpperCase(input) {
  console.log(input);
  return input.toLowerCase() !== input;
}
form.addEventListener("submit",(event)=> {
  if(hasUpperCase(form.elements["email"].value)) {
    event.preventDefault()
    span.style.display = "block";
    span.innerHTML = "Please make sure that email is lower case"
  }
})
