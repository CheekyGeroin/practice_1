const input = document.querySelector("#font-size-control");

const text = document.querySelector("#text");

text.style.fontSize = `${input.value}px`;

const changeSize = (e) => {
  text.style.fontSize = `${e.currentTarget.value}px`;
};

input.addEventListener("input", changeSize);
