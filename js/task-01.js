const countedItems = document.querySelectorAll(".item");
console.log(`Number of categories: ${countedItems.length}`);

countedItems.forEach((el) => {
  return console.log(`Category: ${el.querySelector("h2").textContent};
  Elements: ${el.querySelectorAll("li").length}`);
});
