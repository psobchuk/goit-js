// Звичайне оголошення функції
function classicAdd(a, b, c) {
  return a + b + c;
}

// Те саме стрілочною функцією
const arrowAdd = (a, b, c) => {
  console.log("Hello, world!");
  return a + b + c;
};

const add = (a) => a + 5;

console.log(classicAdd(1, 2, 3));
console.log(arrowAdd(4, 5, 6));
console.log(add(1));

const greet = () => console.log("Hello!");

console.log(greet());

// Псевдомасив arguments
const add2 = (...args) => console.log(args);
add2(1, 2, 3);

// Стрілочні функції як колбеки
const numbers = [1, 2, 3, 4, 5];

// Оголошення функції
numbers.forEach(function (number, index) {
  console.log(`Індекс ${index}, значення ${number}`);
});

const numbers2 = [10, 20, 30, 40, 50];

// Анонімна стрілочна функція
numbers2.forEach((number, index) =>
  console.log(`Індекс ${index}, значення ${number}`)
);

// Стрілочна колбек-функція як посилання
const numbers3 = [100, 200, 300, 400, 500];

const logMessage = (number, index) => {
  console.log(`Індекс ${index}, значення ${number}`);
};

numbers3.forEach(logMessage);
