/**
  |============================
  | 1
  |============================
*/
const numbers = [1, 2, 3, 4, 5];

const greaterThenTwo = numbers.filter(function (num) {
  return num > 2;
});

const greaterThenTwo2 = numbers.filter((num) => num > 2);

console.log(greaterThenTwo);
console.log(greaterThenTwo2);

/**
  |============================
  | 2
  |============================
*/

const res = numbers
  .filter(function (num) {
    return num > 2;
  })
  .map(function (num) {
    return num * 3;
  })
  .sort(function (a, b) {
    return a - b;
  });

const res2 = numbers
  .filter((num) => num > 2)
  .map((num) => num * 3)
  .sort((a, b) => a - b);

console.log(res2);

/**
  |============================
  | 3
  |============================
*/

// const updatedPlayers = players.map(function (player) {
//   return {
//     ...player,
//     points: player.points + player.points * 0.1,
//   };
// });

// v1
// const updatedPlayers = players.map(player => {
//   return {
//     ...player,
//     points: player.points + player.points * 0.1,
//   };
// });

// v2 - круглі дужки - вираз
// const updatedPlayers = players.map((player) => ({
//   ...player,
//   points: player.points + player.points * 0.1,
// }));

/**
  |============================
  | 4
  |============================
*/

// v1
// const updatedPlayers = players.map((player) => {
//   return player.id === playerIdToUpdate
//     ? { ...player, timePlayed: player.timePlayed + 50 }
//     : player;
// });

// v2
const updatedPlayers = players.map((player) =>
  player.id === playerIdToUpdate
    ? { ...player, timePlayed: player.timePlayed + 50 }
    : player
);

console.table(updatedPlayers);
