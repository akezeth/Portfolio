const formInputs = document.querySelectorAll('.form-input');

const formInputsArr = Array.from(formInputs);

const formStorage = {
  firstname: '',
  lastname: '',
  email: '',
  opinion: '',
};

function loadLocalStorage() {
  const formStr = localStorage.getItem('formData');
  if (formStr) {
    const formData = JSON.parse(formStr);
    formInputsArr.forEach((formInput) => {
      formInput.value = formData[formInput.attributes.name.value];
    });
  }
}
formInputsArr.forEach((formInput) => {
  formInput.addEventListener('keyup', (e) => {
    const input = e.target.attributes.name.value;
    formStorage[input] = e.target.value;
    const formStorageStr = JSON.stringify(formStorage);
    localStorage.setItem('formData', formStorageStr);
  });
});

window.addEventListener('load', loadLocalStorage);