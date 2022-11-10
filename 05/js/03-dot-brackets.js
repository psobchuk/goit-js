const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  isPublic: false,
  rating: 0,
  data: {
    a: 1,
    b: {
      test: "test!!!",
    },
    c: 3,
  },
};

const authorName = "author";
const a = book.title;
console.log(a);

console.log(book.genres);
console.log(book["genres"]);
// console.log(book[genres]); // пошук змінної genres
// console.log(book.name) // undefined
console.log(book[authorName]); // Bernard Cornwell
console.log(book["author"]); // Bernard Cornwell

console.log(book["data"]["a"]);
