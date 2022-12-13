/**
  |============================
  | Оголошення класу
  |============================
*/

class User {
  // Тіло класу
}

const mango = new User();
console.log(mango); // {}

const poly = new User();
console.log(poly); // {}

/**
  |============================
  | Конструктор класу
  |============================
*/

class User2 {
  // Синтаксис оголошення методу класу
  constructor(name, email) {
    // Ініціалізація властивостей екземпляра
    this.name = name;
    this.email = email;
  }
}

const mango2 = new User2("Манго", "mango@mail.com");
console.log(mango2); // { name: 'Манго', email: 'mango@mail.com' }

const poly2 = new User2("Поли", "poly@mail.com");
console.log(poly2); // { name: 'Поли', email: 'poly@mail.com' }

/**
  |============================
  | Об'єкт параметрів
  |============================
*/

class User3 {
  // Деструктуризуємо об'єкт
  constructor({ name, email }) {
    this.name = name;
    this.email = email;
  }
}

const mango3 = new User3({
  name: "Манго",
  email: "mango@mail.com",
});
console.log(mango3); // { name: "Манго", email: "mango@mail.com" }

const poly3 = new User3({
  name: "Поли",
  email: "poly@mail.com",
});
console.log(poly3); // { name: "Поли", email: "poly@mail.com" }

/**
  |============================
  | Методи класу
  |============================
*/

class User4 {
  constructor({ name, email }) {
    this.name = name;
    this.email = email;
  }

  // Метод getEmail
  getEmail() {
    return this.email;
  }

  // Метод changeEmail
  changeEmail(newEmail) {
    this.email = newEmail;
  }
}

/**
  |============================
  | Приватні властивості
  |============================
*/

class User5 {
  // Необов'язкове оголошення публічних властивостей
  name;
  // Обов'язкове оголошення приватних властивостей
  #email;

  constructor({ name, email }) {
    this.name = name;
    this.#email = email;
  }

  getEmail() {
    return this.#email;
  }

  changeEmail(newEmail) {
    this.#email = newEmail;
  }
}

const mango5 = new User5({
  name: "Манго",
  email: "mango@mail.com",
});
mango5.changeEmail("mango@supermail.com");
console.log(mango5.getEmail()); // mango@supermail.com
// console.log(mango5.#email); // Виникне помилка, це приватна властивість

/**
  |============================
  | Геттери і сеттери
  |============================
*/

class User6 {
  #email;

  constructor({ name, email }) {
    this.name = name;
    this.#email = email;
  }

  // Геттер email
  get email() {
    return this.#email;
  }

  // Сеттер email
  set email(newEmail) {
    if (newEmail === "") {
      console.error("Помилка! Пошта не може бути порожнім рядком!");
      return;
    }

    this.#email = newEmail;
  }
}

const mango6 = new User6({ name: "Манго", email: "mango@mail.com" });
console.log(mango6.email); // mango@mail.com
mango6.email = "mango@supermail.com";
console.log(mango6.email); // mango@supermail.com

/**
  |============================
  | Статичні властивості
  |============================
*/

class User7 {
  // Оголошення та ініціалізація статичної властивості
  static Roles = {
    ADMIN: "admin",
    EDITOR: "editor",
  };

  #email;
  #role;

  constructor({ email, role }) {
    this.#email = email;
    this.#role = role;
  }

  get role() {
    return this.#role;
  }

  set role(newRole) {
    this.#role = newRole;
  }
}

const mango7 = new User7({
  email: "mango@mail.com",
  role: User7.Roles.ADMIN,
});

console.log(mango7.Roles); // undefined
console.log(User.Roles); // { ADMIN: "admin", EDITOR: "editor" }

console.log(mango7.role); // "admin"
mango7.role = User7.Roles.EDITOR;
console.log(mango7.role); // "editor"

/**
  |============================
  | Статичні методи
  |============================
*/

class User8 {
  static #takenEmails = [];

  static isEmailTaken(email) {
    return User8.#takenEmails.includes(email);
  }

  #email;

  constructor({ email }) {
    this.#email = email;
    User8.#takenEmails.push(email);
  }
}

const mango8 = new User8({ email: "mango@mail.com" });

console.log(User8.isEmailTaken("poly@mail.com"));
console.log(User8.isEmailTaken("mango@mail.com"));

/**
  |============================
  | Наслідування класів
  |============================
*/

class User9 {
  #email;

  constructor(email) {
    this.#email = email;
  }

  get email() {
    return this.#email;
  }

  set email(newEmail) {
    this.#email = newEmail;
  }
}

class ContentEditor extends User9 {
  // Тіло класу ContentEditor
}

const editor9 = new ContentEditor("mango@mail.com");
console.log(editor9); // { email: "mango@mail.com" }
console.log(editor9.email); // "mango@mail.com"

/**
  |============================
  | Конструктор дочірнього класу
  |============================
*/

class User10 {
  #email;

  constructor(email) {
    this.#email = email;
  }

  get email() {
    return this.#email;
  }

  set email(newEmail) {
    this.#email = newEmail;
  }
}

class ContentEditor10 extends User10 {
  constructor({ email, posts }) {
    // Виклик конструктора батьківського класу User
    super(email);
    this.posts = posts;
  }
}

const editor10 = new ContentEditor10({ email: "mango@mail.com", posts: [] });
console.log(editor10); // { email: 'mango@mail.com', posts: [] }
console.log(editor10.email); // 'mango@mail.com'

/**
  |============================
  | Методи дочірнього класу
  |============================
*/

// Уявімо, що вище є оголошення класу User

class ContentEditor11 extends User10 {
  constructor({ email, posts }) {
    super(email);
    this.posts = posts;
  }

  addPost(post) {
    this.posts.push(post);
  }
}

const editor = new ContentEditor11({ email: "mango@mail.com", posts: [] });
console.log(editor); // { email: 'mango@mail.com', posts: [] }
console.log(editor.email); // 'mango@mail.com'
editor.addPost("post-1");
console.log(editor.posts); // ['post-1']
