/**
  |============================
  | Метод addEventListener
  |============================
*/
// const button = document.querySelector(".my-button");

// button.addEventListener("click", () => {
//   console.log("Button was clicked");
// });

/**
  |============================
  | Для колбека можна (і бажано) використовувати окрему функцію і передавати на неї посилання.
  |============================
*/

// const button = document.querySelector(".my-button");

// const handleClick = () => {
//   console.log("Button was clicked");
// };

// button.addEventListener("click", handleClick);

/**
  |============================
  | На одному елементі може бути будь-яка кількість обробників подій, навіть подій одного типу. Колбек-функції будуть викликатися у порядку їх реєстрації в коді.
  |============================
*/

// const singleBtn = document.querySelector("#single");

// const handleClick = () => {
//   console.log("click event listener callback");
// };

// singleBtn.addEventListener("click", handleClick);

// ===============================================
const multiBtn = document.querySelector("#multiple");

const firstCallback = () => {
  console.log("First callback!");
};
const secondCallback = () => {
  console.log("Second callback!");
};
const thirdCallback = () => {
  console.log("Third callback!");
};

multiBtn.addEventListener("click", firstCallback);
multiBtn.addEventListener("click", secondCallback);
multiBtn.addEventListener("click", thirdCallback);

/**
  |============================
  | Метод removeEventListener()
  |============================
*/

const addListenerBtn = document.querySelector('[data-action="add"]');
const removeListenerBtn = document.querySelector('[data-action="remove"]');
const btn = document.querySelector("#btn");

const handleClick = () => {
  console.log("click event listener callback");
};

addListenerBtn.addEventListener("click", () => {
  btn.addEventListener("click", handleClick);
  console.log("click event listener was added to btn");
});

removeListenerBtn.addEventListener("click", () => {
  btn.removeEventListener("click", handleClick);
  console.log("click event listener was removed from btn");
});

/**
  |============================
  | Ключове слово this
  |============================
*/

const mango = {
  username: "Mango",
  showUsername() {
    console.log(this);
    console.log(`My username is: ${this.username}`);
  },
};

const btn2 = document.querySelector(".js-btn");

// ✅ Працює
mango.showUsername();

// ❌ this буде посилатися на button, якщо використовувати showUsername як callback
// btn2.addEventListener("click", mango.showUsername); // не працює

// ✅ Не забувайте прив'язувати контекст методів об'єкта
btn2.addEventListener("click", mango.showUsername.bind(mango));
