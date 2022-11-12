const a = { x: 1, y: 2 }; // змінна зберігає посилання на об'єкт
const b = a;

console.log("Порівняння адрес: ", b === a); // true. same address in memory

a.c = 100; // b.c = 100

console.log("b:", b);

b.c = 150;

console.log("a:", a);

console.log("Порівняння різних об'єктів: ", { a: 1 } === { a: 1 });
console.log("Порівняння різних масивів:", [] === []);
