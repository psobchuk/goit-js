// Явне повернення
const add = (a, b) => {
  console.log("qwe");
  return a + b;
};

console.log(add(2, 3));

const logMessage = (message) => {
  console.log(message);
};

logMessage("Hello");

// Без аргументів
const greet = () => {
  console.log("Hello, wowr");
};

greet();

// Неявне повернення
const add2 = (a, b) => a + b;

console.log(add(2, 3));

// Псевдомасив arguments
const add3 = (...args) => console.log(args);
add3(2, 3, 4, 5);

/**
  |============================
  | this
  |============================
*/
const showThis = () => {
  console.log("this in showThis: ", this);
};

showThis(); // this in showThis: window

const user = { name: "Mango" };
user.showContext = showThis;

user.showContext(); // this in showThis

/**
  |============================
  | Стрілки як методи об'єкта
  |============================
*/

const user2 = {
  fullName: "Mango",
  showName() {
    console.log("this:", this);
    console.log("this.fullName:", this.fullName);

    // const inner = function () {
    //   console.log("this in inner:", this); // undefined
    // };

    const inner = () => {
      console.log("this in inner:", this); // {fullName: 'Mango', showName: ƒ}
    };

    inner();
  },
};

user2.showName();
