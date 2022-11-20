const players = [
  { name: "Mango", playtime: 1270, gamesPlayed: 4 },
  { name: "Poly", playtime: 469, gamesPlayed: 2 },
  { name: "Ajax", playtime: 690, gamesPlayed: 3 },
  { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
];

// Change code below this line
const totalPlaytime = players.reduce((total, player) => {
  return total + player.playtime;
}, 0);

const totalGamesPlayed = players.reduce((total, player) => {
  return total + player.gamesPlayed;
}, 0);

// const totalAveragePlaytimePerGame = totalPlaytime / totalGamesPlayed;

const totalAveragePlaytimePerGame = players.reduce((playtime, gamesPlayed) => {
  return playeplaytime / gam;
});

console.log(totalAveragePlaytimePerGame);
