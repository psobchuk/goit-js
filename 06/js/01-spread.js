const numbers = [1, 2, 3].concat([4, 5, 6], [7, 8, 9]);

console.log(numbers);

// spread
const numbers2 = [0, 5, 10, ...[1, 2, 3], 4, 5];

console.log(numbers2);

// Пошук найбільшої і найменшої температури
const temps = [18, 14, 12, 21, 17, 29, 24];

console.log(Math.max(...temps)); // Math.max(18, 14, 12, 21, 17, 29, 24)
console.log(Math.min(...temps));

const a = [{ a: 1 }, 1, { b: 2 }, 2, { c: 3 }, 3];
const b = [...a];
const c = a;

console.log(a);
console.log(b);
console.log(c);

console.log(a[0] === b[0]);
console.log(a === b);

a.pop();

console.log(a);
console.log(b);
console.log(c);

// розпилення масивів
const lastWeekTemps = [1, 2, 3];
const currentWeekTemps = [4, 5, 6];
const nextWeekTemps = [7, 8, 9];

const allTemps = [...lastWeekTemps, ...currentWeekTemps, ...nextWeekTemps];
console.log(allTemps);

// розпилення об'єктів
const objectA = { x: 1, y: 2 };
const objectB = { x: 0, z: 3 };

const objectC = {
  ...objectA,
  x: 10,
  ...objectB,
  y: 20,
};

console.log(objectC);
