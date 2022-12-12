const students = [
  { name: "Манго", courses: ["математика", "фізика"] },
  { name: "Полі", courses: ["інформатика", "математика"] },
  { name: "Ківі", courses: ["фізика", "біологія"] },
];

const mappedStudents = students.map((student) => student.courses);
console.log(mappedStudents);

const flatMappedStudents = students.flatMap((student) => student.courses);
console.log(flatMappedStudents);
