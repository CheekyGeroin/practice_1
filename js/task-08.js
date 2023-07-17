const form = document.querySelector(".login-form");

let formData = {};

const submitForm = (e) => {
  e.preventDefault();
  const {
    elements: { email, password },
  } = e.currentTarget;

  if (email.value === " " || password.value === "") {
    return alert("Please fill the all fields!");
  } else {
    formData = {
      email: email.value,
      password: password.value,
    };
  }
  console.log(formData);
  return form.reset();
};

form.addEventListener("submit", submitForm);
