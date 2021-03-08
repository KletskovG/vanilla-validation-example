window.addEventListener("load" , () => {

});

function validateForm() {
  const form = document.forms["sign-up"];

  if (form.checkValidity() === false) {
    form.reportValidity();
    return;
  }
  successAlert(form);
}

