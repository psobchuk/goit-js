/**
  |============================
  | Читання
  |============================
*/
const article = document.querySelector(".article");
console.log("article.innerHTML: ", article.innerHTML);

const title = document.querySelector(".article .title");
console.log("title.innerHTML: ", title.innerHTML);

const text = document.querySelector(".article .text");
console.log("text.innerHTML:", text.innerHTML);

const link = document.querySelector(".article .link");
console.log("link.innerHTML: ", link.innerHTML);

/**
  |============================
  | Зміна
  |============================
*/

const title2 = document.querySelector(".article .title");
title2.innerHTML = 'New and <span class="accent">improved</span> title';

/**
  |============================
  | Шаблонізація
  |============================
*/

const technologies = ["HTML", "CSS", "JavaScript", "React", "Node"];
const list = document.querySelector(".list");

const markup = technologies
  .map((technology) => `<li class="list-item">${technology}</li>`)
  .join("");

// Check the console, you'll see a single string with HTML tags
console.log(markup);

// Adding all the markup in one operation
list.innerHTML = markup;

/**
  |============================
  | Додавання
  |============================
*/

const article2 = document.querySelector(".article");
const htmlString = `<p class="article-text">Nullam quis ante. Vestibulum dapibus nunc ac augue. In consectetuer turpis ut velit.</p>
   <a class="link" href="#">Read more...</a>`;

// Replace += with = operator. See the difference?
// Article title is lost because we overwrite element content.
article2.innerHTML += htmlString;
