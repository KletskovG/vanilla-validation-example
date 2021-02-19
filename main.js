window.onload = () => {
  const form = document.querySelector(".main__form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("SUBMIT")
    const form = document.forms["sign-up"];
    const username = form["username"].value;
    const email = form["email"].value;
    const phone = form["phone"].value;
    const image = form["avatar"].files[0];
    const reader = new FileReader();
    reader.readAsDataURL(image);
    reader.onload = () => {
      console.log(reader.result)
    }
    console.log(image)
    console.log(form)
    console.log(username)
    console.log(email)
    console.log(phone)
  })  
}
