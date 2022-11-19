const fnA = function (message, callback) {
  console.log(message);
  callback(100);
};

const fnB = function (number) {
  console.log("Це лог при виклику", number);
};

fnA("qwe", fnB);

/**
  |============================
  | Функція doMath
  |============================
*/

const doMath = function (a, b, callback) {
  const result = callback(a, b);
};

const add = function (x, y) {
  return x + y;
};

const sub = function (x, y) {
  return x - y;
};

// Виклик функції
doMath(2, 3, add);
doMath(10, 8, sub);

// Інлайн функція. Одноразова. Анонімна.
doMath(2, 3, function (x, y) {
  return x + y;
});

doMath(10, 8, function (x, y) {
  return x - y;
});

/**
  |============================
  | Відкладений виклик: реєстрація подій
  |============================
*/

const buttonRef = document.querySelector(".js-button");

// Версія 1
const handleButtonClick = function () {
  console.log("Клік по кнопці" + Date.now());
};

buttonRef.addEventListener("click", handleButtonClick);

// Версія 2
buttonRef.addEventListener("click", function () {
  console.log("Клік по кнопці" + Date.now());
});

/**
  |============================
  | Відкладений виклик: геолокація
  |============================
*/

// const onGetPositionSuccesss = function (position) {
//   console.log("Це виклик onGetPositionSuccess");
//   console.log(position);
// };

// const onGetPositionError = function (error) {
//   console.log(error);
// };

// window.navigator.geolocation.getCurrentPosition(
//   onGetPositionSuccesss,
//   onGetPositionError
// );

/**
  |============================
  | Відкладений виклик: інтервали
  |============================
*/

// const callback = function () {
//   console.log("Через 2 секунди всередині колбеку в таймауті");
// };

// console.log("В коді перед таймаутом");

// setTimeout(callback, 2000);

// console.log("В коді після таймауту");

/**
  |============================
  | Відкладений виклик: http - запит
  |============================
*/

// const onRequestSuccess = function (response) {
//   console.log(
//     "Виклик функції onRequestSuccess після успішної відповіді бекенду"
//   );
//   console.log(response);
// };

// fetch("https//pokeapi.co/api/v2/pokemon")
//   .then((res) => res.json())
//   .then(onRequestSuccess);

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

const callback1 = function (value) {
  return value >= 3;
};

const result1 = filter([1, 2, 3, 4, 5], callback1);
console.log(result1);

const callback2 = function (value) {
  return value <= 4;
};

const result2 = filter([1, 2, 3, 4, 5, 6, 7, 8], function (value) {
  return value <= 4;
});
console.log(result2);

const fruits = [
  { name: "apples", quantity: 200, isFresh: true },
  { name: "grapes", quantity: 200, isFresh: false },
  { name: "bananas", quantity: 200, isFresh: true },
];

const getFruitsWithQuantity = function (fruit) {
  return fruit.quantity >= 120;
};

const result3 = filter(fruits, getFruitsWithQuantity);
console.log(result3);
