window.addEventListener("load", () => {
  handleFileInput();
 
  const submitButton = document.querySelector(".submit");
  submitButton.addEventListener("click", () => {
    const form = document.forms["sign-up"];
    validateForm(form);
  });
});

function validateForm(form) {
  // Check whole form and display native error messages
  if (form.checkValidity() === false) {
    form.reportValidity();
    return;
  }
  successAlert(form);
}
  
// Shows name of the file in avatar input
function handleFileInput() {
  const fileInput = document.forms["sign-up"]["avatar"];
  
  fileInput.addEventListener("change", () => {
    const fileNameElement = document.querySelector(".form__input_filename");
    fileNameElement.innerHTML = fileInput.files[0].name;
  });
}

function reset(form) {
  const submitButton = document.querySelector(".form__button.submit");
  submitButton.classList.toggle("success", false);
  submitButton.textContent = "Отправить";

  // Clear inputs
  form.reset();
  const filename = document.querySelector(".form__input_filename");
  filename.textContent = "";
}

function successAlert(form) {
  const submitButton = document.querySelector(".form__button.submit");
  submitButton.classList.toggle("success", true);
  submitButton.textContent = "Заполнено верно";

  setTimeout(() => {
    reset(form);
  }, 1500);
}
