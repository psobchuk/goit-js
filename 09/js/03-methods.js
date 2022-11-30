/**
  |============================
  | Метод call
  |============================
*/

// function greetGuest(greeting) {
//   console.log(`${greeting}, ${this.username}.`);
// }

// const mango = {
//   username: "Манго",
// };
// const poly = {
//   username: "Полі",
// };

// greetGuest.call(mango, "Ласкаво просимо"); // Ласкаво просимо, Манго.
// greetGuest.call(poly, "З прибуттям"); // З прибуттям, Полі.

/**
  |============================
  | Метод apply
  |============================
*/

function greetGuest(greeting) {
  console.log(`${greeting}, ${this.username}.`);
}

const mango = {
  username: "Манго",
};
const poly = {
  username: "Полі",
};

greetGuest.apply(mango, ["Ласкаво просимо"]); // Ласкаво просимо, Манго.
greetGuest.apply(poly, ["З прибуттям"]); // З прибуттям, Полі.

/**
  |============================
  | Метод bind
  |============================
*/

function greet(clientName) {
  return `${clientName}, ласкаво просимо в «${this.service}».`;
}

const steam = {
  service: "Steam",
};
const steamGreeter = greet.bind(steam);
console.log(steamGreeter("Манго")); // "Манго, ласкаво просимо в «Steam»."

const gmail = {
  service: "Gmail",
};
const gmailGreeter = greet.bind(gmail);
console.log(gmailGreeter("Полі")); // "Полі, ласкаво просимо в «Gmail»."

/**
  |============================
  | Bind і методи об'єкта
  |============================
*/

const customer = {
  firstName: "Jacob",
  lastName: "Mercer",
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

function makeMessage(callback) {
  // callback() - це виклик методу getFullName без об'єкта
  console.log(`Обробляємо заявку від ${callback()}.`);
}

// ❌ Було
// makeMessage(customer.getFullName); // Виникне помилка на момент виклику функції

// ✅ Стало
makeMessage(customer.getFullName.bind(customer)); // Обробляємо заявку від Jacob Mercer.
