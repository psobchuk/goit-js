/**
  |============================
  | Масив
  |============================
*/
const planets = ["Earth", "Mars", "Venus", "Jupiter"];

const planetsInUpperCase = planets.map((planet) => planet.toUpperCase());
console.log(planetsInUpperCase);

const planetsInLowerCase = planets.map((planet) => planet.toLowerCase());
console.log(planetsInLowerCase);

// Оригінальний масив не змінився
console.log(planets);

/**
  |============================
  | Масив об'єктів
  |============================
*/

const students = [
  { name: "Манго", score: 83 },
  { name: "Полі", score: 59 },
  { name: "Аякс", score: 37 },
  { name: "Ківі", score: 94 },
  { name: "Х'юстон", score: 64 },
];

const names = students.map((student) => student.name);
console.log(names);

const scores = students.map((student) => student.score);
console.log(scores);
