/**
  |============================
  | Метод Object.create(obj) створює і повертає новий об'єкт, 
    зв'язуючи його з об'єктом obj.
  |============================
*/
//
//
const animal = {
  legs: 4,
};
const dog = Object.create(animal);
dog.name = "Манго";

/**
  |============================
  | Метод isPrototypeOf() перевіряє, чи є об'єкт animal прототипом для dog
  |============================
*/

console.log(dog); // { name: 'Манго', __proto__: animal }
console.log(animal.isPrototypeOf(dog)); // true

console.log(dog.hasOwnProperty("name")); // true
console.log(dog.name); // 'Манго'

console.log(dog.hasOwnProperty("legs")); // false
console.log(dog.legs); // 4

/**
  |============================
  | цикл for...in не розрізняє властивості об'єкта і його прототипу
  |============================
*/
const animal2 = { eats: true };
const dog = Object.create(animal2);
dog.barks = true;

for (const key in dog) {
  console.log(key); // barks, eats
}

/**
  |============================
  | метод obj.hasOwnProperty(prop)
  |============================
*/

const animal3 = {
  eats: true,
};
const dog = Object.create(animal3);
dog.barks = true;

for (const key in dog) {
  if (!dog.hasOwnProperty(key)) continue;

  console.log(key); // barks
}

/**
  |============================
  | Метод Object.keys(obj) поверне масив тільки власних ключів об'єкта obj
  |============================
*/

const animal4 = {
  eats: true,
};
const dog = Object.create(animal4);
dog.barks = true;

const dogKeys = Object.keys(dog);

console.log(dogKeys); // ['barks']
