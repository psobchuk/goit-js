/**
  |============================
  | Контекст 1
  |============================
*/
// Петя біжить швидко, тому що Петя намагається зловити поїзд.
const petya = {
  username: "Petya",
  showName() {
    console.log(petya.username);
  },
};

petya.showName();

/**
  |============================
  | Контекст 2
  |============================
*/
// Петя біжить швидко, тому що він (this) намагається зловити поїзд.
const petya2 = {
  username: "Petya",
  showName() {
    console.log(this.username);
  },
};

petya2.showName();

/**
  |============================
  | Колекція книг
  |============================
*/

const bookShelf = {
  authors: ["Бернард Корнуелл", "Роберт Шеклі"],
  getAuthors() {
    return this.authors;
  },
  addAuthor(authorName) {
    this.authors.push(authorName);
  },
};

console.log(bookShelf.getAuthors()); // ["Бернард Корнуелл", "Роберт Шеклі"]
bookShelf.addAuthor("Лі Таніт");
console.log(bookShelf.getAuthors()); // ["Бернард Корнуелл", "Роберт Шеклі", "Лі Таніт"]
