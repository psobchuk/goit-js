console.log(document);

const body = document.body;
console.log("document.body", body);

const list = body.firstElementChild;
console.log("body.firstElementChild", list);

const firstListItem = list.firstElementChild;
console.log("list.firstElementChild", firstListItem);

const listItems = list.children;
console.log("list.children", listItems);
