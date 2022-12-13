console.log(document);

const body = document.body;
console.log("document.body", body);

const list = body.firstElementChild;
console.log("body.firstElementChild", list);

const bodyLastElementChild = body.lastElementChild;
console.log("body.lastElementChild", bodyLastElementChild);

const bodyFirstChild = body.firstChild;
console.log("body.firstChild", bodyFirstChild);

const bodyLastChild = body.lastChild;
console.log("body.lastChild", bodyLastChild);

const parent = list.parentNode;
console.log("list.parentNode", parent);

const firstListItem = list.firstElementChild;
console.log("list.firstElementChild", firstListItem);

const listItems = list.children;
console.log("list.children", listItems);

const listChildNodes = list.childNodes;
console.log("list.childNodes", listChildNodes);
