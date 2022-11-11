// Запиши у змінну keys масив ключів власних властивостей об'єкта apartment, а у змінну values - масив всіх значень його властивостей. Використовуй методи Object.keys() і Object.values().

function countProps(object) {
  // Change code below this line
  let propCount = 0;

  // for (const key of Object.keys(object)) {
  //     propCount += 1;
  // }

  propCount = Object.keys(object).length;

  return propCount;
  // Change code above this line
}

const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  rating: 8.38,
};

console.log(countProps(book));
