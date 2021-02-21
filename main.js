window.onload = () => {
  const form = document.forms["sign-up"]; // TODO: MAKE LOOKS SAME
  
  form.addEventListener("submit", (event) => {
    validateForm(event, form)
  });
  handleFileInput();
}

function validateForm(event, form) {
  event.preventDefault();
  let isFormValid = true;

  const fields = [
    {
      name: "username",
      value: form["username"].value,
      isValid() {
        if (this.value !== undefined && this.value !== null) {
          return this.value.length > 3
        }
        return false;
      },
    },
    {
      name: "email",
      value: form["email"].value,
      isValid() {
        const emailRegExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (this.value !== undefined && this.value !== null) {
          return emailRegExp.test(this.value)
        }
        return false;
      },
    },
    {
      name: "phone",
      value: form["phone"].value,
      isValid() {
        if (this.value !== undefined && this.value !== null) {
          return /^\d+$/.test(this.value) && this.value.length === 11
        }
        return false;
      }
    },
    {
      name: "avatar",
      value: form["avatar"].files[0],
      isValid() {
        // Because input for avatar only accepts images we should only check that file exists
        return this.value !== undefined && this.value !== null;
      },
    }
  ]

  fields.forEach(field => {
    if (field.isValid() === false) {
      isFormValid = false;
      const errorBlock = document.querySelector(`input[name=${field.name}] ~ .form__error`);
      if (errorBlock) {
        errorBlock.classList.toggle("hidden", false);
      }
    } 
  });

  if (isFormValid) {
    [...document.querySelectorAll(".form__error")]
      .forEach(el => el.classList.toggle("hidden", true));
    
    successAlert();
  } else {
    event.preventDefault();
    return;
  }
}

// Shows name of the file in avatar input
function handleFileInput() {
  const fileInput = document.querySelector("#avatar");
  fileInput.addEventListener("change", () => {
    const fileNameElement = document.querySelector(".filename");
    if (fileNameElement) {
      fileNameElement.innerHTML = fileInput.files[0].name;
    }
  });
}

function successAlert() {
  const submitButton = document.querySelector("button[type='submit']");
  submitButton.classList.toggle("success", true);
  submitButton.textContent = "Заполнено верно";

  setTimeout(() => {
    reset();
  }, 2000)
}

function reset() {
  const submitButton = document.querySelector("button[type='submit']");
  submitButton.classList.toggle("success", false);
  submitButton.textContent = "Отправить";

  // Hide erros
  [...document.querySelectorAll(".form__error")].forEach(el => el.classList.toggle("hidden", true));

  // Clear inputs
  const form = document.forms["sign-up"];
  form["username"].value = "";
  form["email"].value = "";
  form["avatar"].files[0] = null;
  form["avatar"].value = null;
  document.querySelector(".filename").textContent = "";
  form["phone"].value = null;
}
