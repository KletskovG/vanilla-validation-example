window.addEventListener("load" , () => {
  const submitButton = document.querySelector(".submit");
  submitButton.addEventListener("click", () => {
    const form = document.forms["sign-up"];
    validateForm(form);
  });
});

function validateForm() {
  const form = document.forms["sign-up"];
  // Check whole form and display native error messages
  if (form.checkValidity() === false) {
    form.reportValidity();
    return;
  }
  successAlert(form);
}


