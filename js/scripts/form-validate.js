const form = document.querySelector('.contact-form');
const span = document.querySelector('.error-message');

function hasUpperCase(input) {
  return input.toLowerCase() !== input;
}

form.addEventListener('submit', (event) => {
  if (hasUpperCase(form.elements.email.value)) {
    event.preventDefault();
    span.style.display = 'block';
    span.innerHTML = 'Please make sure that email is lower case';
  }
});

let formData = {
  name: '',
  email: '',
  message: '',
};
const  fetchLocalData = () => {
  if (localStorage.getItem('formData') !== null) {
    formData = JSON.parse(localStorage.getItem('formData'));
  }
  form.elements.name.value = formData.name;
  form.elements.email.value = formData.email;
  form.elements.message.value = formData.message;
}
fetchLocalData();
form.addEventListener('input', () => {
  formData.name = form.elements.name.value;
  formData.email = form.elements.email.value;
  formData.message = form.elements.message.value;

  localStorage.setItem('formData', JSON.stringify(formData));
});
