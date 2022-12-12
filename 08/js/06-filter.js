const values = [51, -3, 27, 21, -68, 42, -37];

const positiveValues = values.filter((value) => value >= 0);
console.log(positiveValues);

const negativeValues = values.filter((value) => value < 0);
console.log(negativeValues);

const bigValues = values.filter((value) => value > 1000);
console.log(bigValues);

console.log(values);

/**
  |============================
  | Фільтрація унікальних елементів
  |============================
*/
console.log("Фільтрація унікальних елементів");

const students = [
  { name: "Манго", courses: ["математика", "фізика"] },
  { name: "Полі", courses: ["інформатика", "математика"] },
  { name: "Ківі", courses: ["фізика", "біологія"] },
];

const allCourses = students.flatMap((student) => student.courses);
console.log(allCourses);

// унікальні елементи
const uniqueCourses = allCourses.filter(
  (course, index, array) => array.indexOf(course) === index
);
console.log(uniqueCourses);

/**
  |============================
  | Масив об'єктів
  |============================
*/
console.log("Масив об'єктів");

const LOW_SCORE = 50;
const HIGH_SCORE = 80;
const students2 = [
  { name: "Манго", score: 83 },
  { name: "Полі", score: 59 },
  { name: "Аякс", score: 37 },
  { name: "Ківі", score: 94 },
  { name: "Х'юстон", score: 64 },
];

const best = students2.filter((student) => student.score >= HIGH_SCORE);
console.log(best);

const worst = students2.filter((student) => student.score < LOW_SCORE);
console.log(worst);

// В колбек-функції зручно деструктуризувати властивості об'єкта
const average = students2.filter(
  ({ score }) => score >= LOW_SCORE && score < HIGH_SCORE
);
console.log(average);
