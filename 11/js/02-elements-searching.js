const listWithId = document.querySelector("#menu");
listWithId.style.textTransform = "uppercase";
listWithId.style.fontSize = "24px";
console.log("listWithId", listWithId);

const listWithClass = document.querySelector(".menu");
console.log("listWithClass", listWithClass);

const menuItemsByTagName = document.querySelectorAll("li");
console.log("menuItemsByTagName", menuItemsByTagName);

const menuItemsByClass = document.querySelectorAll(".menu-item");
console.log("menuItemsByClass", menuItemsByClass);

const firstMenuItem = document.querySelector(".menu-item");
firstMenuItem.style.color = "tomato";
console.log("firstMenuItem", firstMenuItem);
