const playlist = {
  name: "My super playlist",
  rating: 5,
  tracks: ["track-1", "track-2", "track-3"],
  trackCount: 3,
  //   getName: function () {
  //     console.log("Yes, this is getName");
  //   },
  // Метод об'єкта. Методи працюють з властивостями об'єкта
  getName() {
    console.log("Yes, this is getName");
  },
};

playlist.getName();

const playlist2 = {
  name: "My super playlist",
  rating: 5,
  tracks: ["track-1", "track-2", "track-3"],
  trackCount: 3,
  changeName(newName) {
    console.log("this всередині changeName:", this);
    this.name = newName; // this - посилання на об'єкт, який викликав цей метод. this є тільки у функції
  },
  addTrack(track) {
    this.tracks.push(track);
  },
  updateRating(newRating) {},
  getTrackCount() {
    return this.tracks.length;
  },
};

playlist2.changeName("New name");
console.log(playlist2);

playlist2.addTrack("new track 1");
console.log(playlist2.getTrackCount());
playlist2.addTrack("new track 2");
console.log(playlist2.getTrackCount());
