// Сортування чисел
const scores = [61, 19, 74, 35, 92, 56];
scores.sort();
console.log(scores); // [19, 35, 56, 61, 74, 92]

const scores2 = [27, 2, 41, 4, 7, 3, 75];
scores2.sort();
console.log(scores2); // [2, 27, 3, 4, 41, 7, 75]

// Сортування масиву рядків
const students = ["Віка", "Андрій", "Олег", "Юля", "Борис", "Катя"];
students.sort();
console.log(students); // [ 'Андрій', 'Борис', 'Віка', 'Катя', 'Олег', 'Юля' ]

// Свій порядок сортування чисел
const scores3 = [61, 19, 74, 35, 92, 56];
const ascendingScores = [...scores3].sort((a, b) => a - b);
console.log(ascendingScores); // [19, 35, 56, 61, 74, 92]

const descendingScores = [...scores].sort((a, b) => b - a);
console.log(descendingScores); // [92, 74, 61, 56, 35, 19]

// Свій порядок сортування рядків
const students2 = ["Віка", "Андрій", "Олег", "Юля", "Борис", "Катя"];

const inAlphabetOrder = [...students].sort((a, b) => a.localeCompare(b));
console.log(inAlphabetOrder); // ['Андрій', 'Борис', 'Віка', 'Катя', 'Олег', 'Юля']

const inReverseOrder = [...students].sort((a, b) => b.localeCompare(a));
console.log(inReverseOrder); // ['Юля', 'Олег', 'Катя', 'Віка', 'Борис', 'Андрій']

// Сортування об'єктів
const students3 = [
  { name: "Манго", score: 83 },
  { name: "Полі", score: 59 },
  { name: "Аякс", score: 37 },
  { name: "Ківі", score: 94 },
];

const inAscendingOrder = students3.sort(
  (firstStudent, secondStudent) => firstStudent.score - secondStudent.score
);
console.log("inAscendingOrder", inAscendingOrder);

const inDescendingOrder = students3.sort(
  (firstStudent, secondStudent) => secondStudent.score - firstStudent.score
);
console.log("inDescendingOrder", inDescendingOrder);

const inAlphabeticalOrder = students3.sort((firstStudent, secondStudent) =>
  firstStudent.name.localeCompare(secondStudent.name)
);
console.log("inAlphabeticalOrder", inAlphabeticalOrder);
