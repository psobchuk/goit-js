/**
  |============================
  | Стрілки не бувають методами об'єкта
  |============================
*/

// const user = {
//   fullName: "Mango",
//   showName: () => {
//     console.log("this: ", this);
//     console.log("this.fullName: ", this.fullName);
//   },
// };

// user.showName(); // TypeError: Cannot read properties of undefined (reading 'fullName')

/**
  |============================
  | Стрілки не бувають конструкторами
  |============================
*/

// const User = (name) => {
//   this.name = name;
// };

// console.log(new User("Mango")); // TypeError: User is not a constructor

/**
  |============================
  | Стрілки не бувають методами об'єкта - 2 
  |============================
*/

const objA = {
  x: 5,
  showX() {
    console.log("this в objA.showX:", this);
    console.log(this.x);

    const objB = {
      y: 10,
      //   showThis() {
      showThis: () => {
        console.log("this в objB.showThis: ", this);
      },
    };
  },
};

objA.showX();
