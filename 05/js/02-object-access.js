const playlist = {
  name: "My super playlist",
  rating: 5,
  tracks: ["track-1", "track-2", "track-3"],
  trackCount: 3,
};

console.log(playlist.tracks);
console.log(playlist.name);
console.log(playlist.trackCount);

const propertyName = "tracks";
console.log(playlist.propertyName); // Знайти властивість propertyName
console.log(playlist[propertyName]); // Знайти змінну propertyName
