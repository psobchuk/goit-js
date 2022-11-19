/**
  |============================
  | Стрілочні функції
  |============================
*/

// Явне повернення
const add = function (a, b, c) {
  console.log(a, b, c);
  return a + b + c;
};

// Явне повернення
const addArrow = (a, b, c) => {
  console.log(a, b, c);
  return a + b + c;
};

// НеЯвне повернення
const add2 = function (a, b, c) {
  return a + b + c;
};

// НеЯвне повернення
const addArrow2 = (a, b, c) => a + b + c;

console.log(add(5, 10, 15));

// Доступ до аргументів
const add3 = function (a, b, c) {
  console.log(arguments);
  return a + b + c;
};

// Доступ до аргументів
const addArrow3 = (...args) => {
  console.log(args);
};

console.log(add3(5, 10, 15));
console.log(addArrow3(5, 10, 15));

const fnA = function () {
  return {
    a: 5,
  };
};

const arrowFnA = () => ({ arrowA: 5 }); // Повернути об'єкт. Огорнути в вираз.

console.log(arrowFnA());

/**
    |============================
    | Фільтр
    |============================
  */

// 1. Потрібно передати функцію
// 2. Функція отримує елемент масиву
// 3. Якщо елемент масиву задовільняє умові, то функція поверне true
// 4. Якщо елемент масиву не задовільняє умові, то функція поверне false

const filter = function (array, test) {
  const filteredArray = [];

  for (const el of array) {
    console.log(el);
    const passed = test(el);

    if (passed) {
      filteredArray.push(el);
    }
  }

  return filteredArray;
};

// const callback1 = (value) => value >= 3;
// const result1 = filter([1, 2, 3, 4, 5], callback1);

const result1 = filter([1, 2, 3, 4, 5], (value) => value >= 3);
console.log(result1);

// const callback2 = (value) => value <= 4;

const result2 = filter([1, 2, 3, 4, 5, 6, 7, 8], (value) => value <= 4);
console.log(result2);

const fruits = [
  { name: "apples", quantity: 200, isFresh: true },
  { name: "grapes", quantity: 200, isFresh: false },
  { name: "bananas", quantity: 200, isFresh: true },
];

// const getFruitsWithQuantity = fruit => fruit.quantity >= 120;

const result3 = filter(fruits, (fruit) => fruit.quantity >= 120);
console.log(result3);
