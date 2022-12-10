/**
  |============================
  | Властивості та атрибути
  |============================
*/

// console.log("Властивості та атрибути");
// //===================================================
// const message = document.querySelector("#message");
// console.log(message.value); // Default textarea message

// //===================================================
// const activeLink = document.querySelector(".btn.active");
// console.log(activeLink.href); // https://s.codepen.io/about

// //===================================================
// const image = document.querySelector(".image");
// console.log(image.src); // https://placeimg.com/640/480/animals
// image.src = "https://placeimg.com/640/480/tech";

/**
  |============================
  | Властивість textContent
  |============================
*/
// console.log("Властивість textContent");

// const text = document.querySelector(".article-text");
// console.log(text.textContent); // text inside p.article-text

// const title = document.querySelector(".article-title");
// title.textContent = "Welcome to Bahamas!";

/**
  |============================
  | Властивість classList
  |============================
*/

console.log("Властивість classList");

const text = document.querySelector("#paragraph");

console.log("text.classList", text.classList); // ["text", "red", "big", value: "text red big"]

console.log("text.classList.contains('red')", text.classList.contains("red")); // true

text.classList.remove("big");
console.log("text.classList", text.classList); // ["text", "red", value: "text red"]

text.classList.add("new-class");
console.log("text.classList", text.classList); // ["text", "red", "new-class", value: "text red new-class"]

// Can add multiple classes
text.classList.add("a", "b", "c");
console.log("text.classList", text.classList);

text.classList.toggle("is-hidden"); // will add is-hidden class
console.log("text.classList", text.classList);

text.classList.toggle("is-hidden"); // will remove is-hidden class
console.log(text.classList);

// classList has a forEach method
text.classList.forEach((cls) => {
  console.log("forEach cls:", cls); // text, red, new-class
});

/**
  |============================
  | Властивість style
  |============================
*/

// const button = document.querySelector(".btn");

// button.style.backgroundColor = "teal";
// button.style.fontSize = "24px";
// button.style.textAlign = "center";

// console.log("button.style", button.style); // inline styles object

/**
  |============================
  | Атрибути
  |============================
*/

console.log("атрибути");
const image = document.querySelector(".image");

console.log("image.attributes", image.attributes); // NamedNodeMap {0: class, 1: src, 2: alt, length: 3}

console.log("image.hasAttribute('src')", image.hasAttribute("src")); // true

console.log('image.getAttribute("alt")', image.getAttribute("alt")); // "Lake and clouds"

image.setAttribute("alt", "Amazing nature");

console.log('image.getAttribute("alt")', image.getAttribute("alt")); // Amazing nature

/**
  |============================
  | data-атрибути
  |============================
*/

console.log("data-атрибути");
const saveBtn = document.querySelector('.editor button[data-action="save"]');
const closeBtn = document.querySelector('.editor button[data-action="close"]');

console.log("saveBtn.dataset.action:", saveBtn.dataset.action); //save
console.log("closeBtn.dataset.action:", closeBtn.dataset.action); //close

const dishes = document.querySelectorAll(".dishes > li");
dishes.forEach((dish) => {
  console.log("dish.dataset.id: ", dish.dataset.id);
});
