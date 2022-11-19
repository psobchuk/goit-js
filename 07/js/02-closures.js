// const fnA = function (parameter) {
//   const innerVariable = "значення внутрішньої змінної fnA";

//   const innerFunction = function () {
//     console.log(parameter);
//     console.log(innerVariable);
//     console.log("Це виклик innerFunction");
//   };

//   return innerFunction;
// };

// const fnB = fnA(555);
// fnB();
// console.log(fnB);

/**
  |============================
  | Приготування страви
  |============================
*/

// const makeDish = function (sheffName, dish) {
//   console.log(`${sheffName} готує ${dish}`);
// };

// makeDish("Mango", "пиріжок");
// makeDish("Mango", "омлет");
// makeDish("Mango", "чай");

// makeDish("Poly", "котлети");
// makeDish("Poly", "суп");
// makeDish("Poly", "кава");

// const makeSheff = function (name) {
//   const makeDish = function (dish) {
//     console.log(`${name} готує ${dish}`);
//   };

//   return makeDish;
// };

// const mango = makeSheff("Mango");
// console.log(mango);

// mango("котлети");
// mango("пиріжок");

// const poly = makeSheff("Poly");
// console.log(poly);

// poly("котлети");
// poly("пиріжок");

/**
  |============================
  | Округлятор
  |============================
*/

// const floatingPoint = 3.456789;
// const someInt = Math.round(floatingPoint);
// const withDecimals = Number(floatingPoint.toFixed(2));

// const rounder = function (number, places) {
//   return Number(number.toFixed(places));
// };

// console.log(rounder(3.4567, 2));
// console.log(rounder(3.4567, 3));
// console.log(rounder(3.4567, 4));

const rounder = function (places) {
  return function (number) {
    return Number(number.toFixed(places));
  };
};

const rounder2 = rounder(2);
const rounder3 = rounder(3);

console.log(rounder2(3.4567));
console.log(rounder3(3.4567));

/**
  |============================
  | Приватні дані та функції
  |============================
*/

// salary
const salaryManagerFactory = function (employeeName, baseSalary) {
  let salary = baseSalary;

  return {
    raise(amount) {
      if (amount > 1000) {
        return "Ти очманів?";
      }
      salary += amount;
    },
    lower(amount) {
      salary -= amount;
    },
    current() {
      return `Поточна зарплата ${employeeName} = ${salary}`;
    },
  };
};

const salaryManager = salaryManagerFactory("Mango", 5000);
console.log(salaryManager.current());
console.log(salaryManager.raise(1000000));
console.log(salaryManager.current());
// console.dir(salaryManager.raise);

// factory
const myLibFactory = function () {
  let value = 0;

  const add = function (num) {
    value += num;
  };

  return {
    add: add,
    getValue() {
      return value;
    },
  };
};

const myLib = myLibFactory();

console.dir(myLib.getValue);

console.log(myLib);
console.log(myLib.getValue());
myLib.add(10);
console.log(myLib.getValue());
