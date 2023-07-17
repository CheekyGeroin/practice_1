const input = document.querySelector("#validation-input");

const validInput = (e) => {
  console.log(e.currentTarget.value.length);
  if (e.currentTarget.value.length == 6) {
    input.classList.add("valid");
    input.classList.remove("invalid");
  } else {
    input.classList.add("invalid");
    input.classList.remove("valid");
  }
};

input.addEventListener("blur", validInput);
