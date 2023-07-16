let counterValue = 0;

const incrementBtn = document.querySelector(`button[data-action="increment"]`);
const decrementBtn = document.querySelector('button[data-action="decrement"]');

incrementBtn.addEventListener("click", () => countValue(1));
decrementBtn.addEventListener("click", () => countValue(-1));

const countValue = (step) => {
  counterValue += step;
  valueDisplay.textContent = counterValue;
};
const valueDisplay = document.querySelector("#value");
