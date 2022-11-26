/**
  |============================
  | /Сортування чисел 1
  |============================
*/
const numbers = [1, 9, 6, 2, 3];
// numbers.sort();
// console.log("numbers", numbers);

const letters = ["b", "B", "a", "A"];
// letters.sort();
// console.log("letters", letters);

/**
  |============================
  | 2
  |============================
*/

// numbers.sort((curEl, nextEl) => {
//   return curEl - nextEl;
// });

// console.log(numbers);

/**
  |============================
  | 3
  |============================
*/

const ascSortedNumbers = [...numbers].sort((a, b) => a - b);
const descSortedNumbers = [...numbers].sort((a, b) => b - a);
console.log("ascSortedNumbers", ascSortedNumbers);
console.log("descSortedNumbers", descSortedNumbers);
console.log("numbers", numbers);

/**
  |============================
  | Сортування об'єктів. Числа
  |============================
*/

const players = [
  { id: "player-1", name: "Mango", timePlayed: 310, online: false },
  { id: "player-2", name: "Poly", timePlayed: 470, online: true },
  { id: "player-3", name: "Kiwi", timePlayed: 230, online: true },
  { id: "player-4", name: "Ajax", timePlayed: 150, online: false },
  { id: "player-5", name: "Chelsey", timePlayed: 80, online: true },
];

const sortedByBestPlayers = [...players].sort(
  (prevPlayer, nextPlayer) => nextPlayer.timePlayed - prevPlayer.timePlayed
);
console.table(sortedByBestPlayers);

const sortedByWorstPlayers = [...players].sort(
  (prevPlayer, nextPlayer) => prevPlayer.timePlayed - nextPlayer.timePlayed
);
console.table(sortedByWorstPlayers);

/**
  |============================
  | Сортування по першій літері
  |============================
*/
const byName = [...players].sort((a, b) => {
  const result = a.name[0] > b.name[0];

  if (result) {
    return 1;
  }

  if (!result) {
    return -1;
  }
});

console.table(byName);

// console.log("a" > "b");
// console.log("b" > "a");
