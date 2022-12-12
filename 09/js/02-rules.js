/**
  |============================
  | this у глобальній області видимості
  |============================
*/

function foo() {
  console.log("this у глобальній області видимості", this);
}

foo(); // window без "use strict" і undefined з "use strict"

/**
  |============================
  | this в методі об'єкта
  |============================
*/

const petya = {
  username: "Petya",
  showThis() {
    console.log("this в методі об'єкта", this);
  },
  showName() {
    console.log(this.username);
  },
};

petya.showThis(); // {username: "Petya", showThis: ƒ, showName: ƒ}
petya.showName(); // 'Petya'

/**
  |============================
  | Складніший приклад
  |============================
*/

function showThis() {
  console.log("Складніший приклад this in showThis: ", this);
}

// Викликаємо у глобальному контексті
showThis(); // this in showThis: Window

const user = {
  username: "Mango",
};

console.log(user); // {username: 'Mango'}

// Записуємо посилання на функцію у властивість об'єкта
// Зверніть увагу, що це не виклик - немає ()
user.showContext = showThis;

console.log(user); // {username: 'Mango', showContext: ƒ}

// Викликаємо функцію в контексті об'єкта
// this буде вказувати на поточний об'єкт, в контексті
// якого здійснюється виклик, а не на глобальний об'єкт.
user.showContext(); // this in showThis: {username: "Mango", showContext: ƒ}

/**
  |============================
  | this в колбек - функціях
  |============================
*/
// console.log("this в колбек - функціях");

// const customer = {
//   firstName: "Jacob",
//   lastName: "Mercer",
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };

// function makeMessage(callback) {
//   // callback() - це виклик методу getFullName без об'єкта
//   console.log(`Обробляємо заявку від ${callback()}.`);
// }

// makeMessage(customer.getFullName); // Буде помилка у виклику функції

/**
  |============================
  | this у стрілочних функціях. Приклад 1
  |============================
*/

const showThis2 = () => {
  console.log("this у стрілочних функціях. this in showThis: ", this);
};

showThis2(); // this in showThis: window

const user2 = {
  username: "Mango",
};
user.showContext = showThis2;

user.showContext(); // this in showThis: window

/**
  |============================
  | this у стрілочних функціях. Приклад 2
  |============================
*/
const hotel = {
  username: "Resort hotel",
  showThis() {
    const foo = () => {
      // Стрілки запам'ятовують контекст під час оголошення
      // з батьківської області видимості
      console.log("this in foo: ", this);
    };

    foo();
    console.log("this in showThis: ", this);
  },
};

hotel.showThis();
// this in foo: {username: 'Resort hotel', showThis: ƒ}
// this in showThis: {username: 'Resort hotel',showThis: ƒ}
