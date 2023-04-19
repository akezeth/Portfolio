const form = document.getElementById('form');
const email = document.getElementById('email');
const submit = document.getElementById('submit');
const errorMessage = document.querySelector('.errorMessage');

form.addEventListener('submit', (e) => {
  if (email.value !== email.value.toLowerCase()) {
    e.preventDefault();
    errorMessage.textContent = 'Your email input must be in lowercases!';
    console.log("Aklilu Mekonnen!");
  }
  else {
    errorMessage.textContent = '';
  }
});