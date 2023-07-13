const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredient = [];

for (let i = 0; i < ingredients.length; i += 1) {
  const item = document.createElement("li");
  item.textContent = ingredients[i];
  item.classList.add("item");

  ingredient.push(item);
}

console.log(ingredient);

const list = document.querySelector("#ingredients");

list.append(...ingredient);
