// Деструктуризація об'єкта
const playlist = {
  name: "My super playlist",
  rating: 5,
  tracks: ["track-1", "track-2", "track-3"],
  trackCount: 3,
  author: "Mango",
};

const { name, rating, tracks, trackCount } = playlist;

console.log(name);
console.log(rating);
console.log(tracks);
console.log(trackCount);

// Деструктуризація неіснуючої властивості. Значення по замовчуванню
const { author = 555, author2 = 222 } = playlist;
console.log(author, author2);

// Інше ім'я змінної. Значення по замовчуванню
const { trackCount: numberOfTracks = 0 } = playlist;
console.log(numberOfTracks);

// Глибока деструктуризація
const profile = {
  name: "Jacques Gluke",
  tag: "jgluke",
  location: "Ocho Rios, Jamaica",
  avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg",
  stats: {
    followers: 5683,
    views: 4827,
    likes: 1308,
  },
};

// В деструктуризації ви витягуєте те, що необхідно
const {
  name: name2,
  tag,
  location,
  avatar,
  stats: { followers: myFollowers = 5, views, likes },
} = profile;

console.log(name2, tag, location, avatar, myFollowers, views, likes);

// те саме
// const name = profile.name;
// const tag = profile.tag;
// const views = profile.tag.views;

// Деструктуризація масиву
const [foo, bar, baz] = [1, 2, 3];

console.log(foo);
console.log(bar);
console.log(baz);

// пропуск властивості
const rgb = [233, 100, 80];
const [red, , blue] = rgb;
console.log(red, blue); // 233 100

const authors = {
  kiwi: 4,
  poly: 7,
  ajax: 9,
  mango: 6,
};

const ratings = Object.values(authors);
console.log(Math.max(...ratings));

const entries = Object.entries(authors);

for (const [name3, rating3] of entries) {
  // level 3
  // level 2
  //   const [name3, rating3] = entry;

  // level 1
  //   const name3 = entry[0];
  //   const rating3 = entry[1];

  console.log(name3, rating3);
}

// rest. Збирання недеструктуризованих змінних.
const profile2 = {
  name: "Jacques Gluke",
  tag: "jgluke",
  location: "Ocho Rios, Jamaica",
  avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg",
  stats: {
    followers: 5683,
    views: 4827,
    likes: 1308,
  },
};

const { name: name4, tag: tag4, location: location4, ...restProps } = profile2;

console.log(name4, tag4, location4);
console.log(restProps);
console.log(profile2);

// Паттерн "Об'єкт параметрів"

// const fn = function (params) {};

// fn(10, 5, true, [], {}, 6);

// fn({
//   age: 10,
//   friends: 5,
//   isOnline: true,
//   hobbies: [],
//   games: {},
//   rating: 6,
// });

// const shewProfileInfo = function (userProfile) {
//   const {
//     name,
//     tag,
//     location,
//     avatar,
//     stats: { followers, views, likes },
//   } = userProfile;
// };

const showProfileInfo = function ({
  name,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) {
  console.log(name, tag, location, avatar, followers, views, likes);
};

const profile3 = {
  name: "Jacques Gluke",
  tag: "jgluke",
  location: "Ocho Rios, Jamaica",
  avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg",
  stats: {
    followers: 5683,
    views: 4827,
    likes: 1308,
  },
};

showProfileInfo(profile3);
