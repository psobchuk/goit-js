/**
  |============================
  | Об'єкт події
  |============================
*/

const button = document.querySelector(".btn");

const handleClick = (event) => {
  console.log("event: ", event);
  console.log("event type: ", event.type);
  console.log("currentTarget: ", event.currentTarget);
};

button.addEventListener("click", handleClick);

/**
  |============================
  | Дії браузера за замовчуванням
  |============================
*/

const form = document.querySelector(".register-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const {
    elements: { username, password },
  } = event.currentTarget;
  console.log(username.value, password.value);
});
