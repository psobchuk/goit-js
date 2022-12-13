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

console.log("dog", dog); // { name: 'Манго', __proto__: animal }
console.log("animal.isPrototypeOf(dog)", animal.isPrototypeOf(dog)); // true

console.log('dog.hasOwnProperty("name")', dog.hasOwnProperty("name")); // true
console.log("dog.name", dog.name); // 'Манго'

console.log('dog.hasOwnProperty("legs")', dog.hasOwnProperty("legs")); // false
console.log("dog.legs", dog.legs); // 4

/**
  |============================
  | цикл for...in не розрізняє властивості об'єкта і його прототипу
  |============================
*/
const animal2 = { eats: true };
const dog2 = Object.create(animal2);
dog2.barks = true;

for (const key in dog2) {
  console.log("key in dog2", key); // barks, eats
}

/**
  |============================
  | метод obj.hasOwnProperty(prop)
  |============================
*/

const animal3 = {
  eats: true,
};
const dog3 = Object.create(animal3);
dog3.barks = true;

for (const key in dog) {
  if (!dog3.hasOwnProperty(key)) continue;

  console.log("key in dog:", key); // barks
}

/**
  |============================
  | Метод Object.keys(obj) поверне масив тільки власних ключів об'єкта obj
  |============================
*/

const animal4 = {
  eats: true,
};
const dog4 = Object.create(animal4);
dog4.barks = true;

const dogKeys = Object.keys(dog4);

console.log("dogKeys:", dogKeys); // ['barks']
