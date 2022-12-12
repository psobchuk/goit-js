// Чи є хоча б один елемент, що більший або дорівнює нулю? - так
console.log([1, 2, 3, 4, 5].some((value) => value >= 0));
// Чи є хоча б один елемент, що більший або дорівнює нулю? - так
console.log([-7, -20, 3, -10, -14].some((value) => value >= 0));
// Чи є хоча б один елемент, що менший нуля? - ні
console.log([1, 2, 3, 4, 5].some((value) => value < 0));
// Чи є хоча б один елемент, що менший нуля? - так
console.log([1, 2, 3, -10, 4, 5].some((value) => value < 0));

/**
  |============================
  | Масив об'єктів
  |============================
*/

const fruits = [
  { name: "apples", amount: 100 },
  { name: "bananas", amount: 0 },
  { name: "grapes", amount: 50 },
];

const allAvailable = fruits.every((fruit) => fruit.amount > 0);
console.log(allAvailable);

const anyAvailable = fruits.some((fruit) => fruit.amount > 0);
console.log(anyAvailable);
