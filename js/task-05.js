const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

const changeName = (e) => {
  if (e.currentTarget.value === "") {
    output.textContent = "Anonymous";
  } else {
    output.textContent = e.currentTarget.value;
  }
};
input.addEventListener("input", changeName);
