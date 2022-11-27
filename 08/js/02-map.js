const numbers = [5, 10, 15, 20, 25];

const doubleNums = numbers.map((number) => {
  console.log(number);

  return number * 2;
});

console.log(doubleNums);

const players = [
  { id: "player-1", name: "Mango", timePlayed: 310, points: 54, online: false },
  { id: "player-2", name: "Poly", timePlayed: 470, points: 92, online: true },
  { id: "player-3", name: "Kiwi", timePlayed: 230, points: 48, online: true },
  { id: "player-4", name: "Ajax", timePlayed: 150, points: 71, online: false },
  { id: "player-5", name: "Chelsey", timePlayed: 80, points: 48, online: true },
];

const playerNames = players.map((player) => player.name);
console.log("playerNames", playerNames);

const updatedPlayers = players.map((player) => ({
  ...player,
  points: player.points * 1.1,
}));
console.table(updatedPlayers);
