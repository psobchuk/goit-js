const friends = [
  { name: "Mango", online: true },
  { name: "Kiwi", online: false },
  { name: "Poly", online: true },
  { name: "Ajax", online: false },
];

console.table(friends);

for (const friend of friends) {
  console.log(friend);

  friend.newprop = 555; // додати властивість по посиланню
}

friends[1].newprop = 222;

console.table(friends);

// Шукаємо друга за ім'ям
const findFriendByName = function (allFriends, name) {
  for (const friend of allFriends) {
    console.log(friend);
    console.log(friend.name);

    if (friend.name === name) {
      return "Знайшли!!!";
    }
  }
  return "Не знайшли";
};

console.log(findFriendByName(friends, "Poly"));
console.log(findFriendByName(friends, "Chelsy"));

// Отримати всі імена
const getAllNames = function (allFriends) {
  const names = [];
  for (const friend of allFriends) {
    console.log(friend.name);
    names.push(friend.name);
  }
  return names;
};

console.log(getAllNames(friends));

// Отримати друзів які онлайн
const getOnlineFriends = function (allFriends) {
  const onlineFriends = [];
  for (const friend of allFriends) {
    console.log(friend);
    console.log(friend.online);

    if (friend.online) {
      onlineFriends.push(friend);
    }
  }

  return onlineFriends;
};

console.log(getOnlineFriends(friends));

// Отримати друзів які офлайн
const getOfflineFriends = function (allFriends) {
  const offlineFriends = [];
  for (const friend of allFriends) {
    console.log(friend.online);

    if (!friend.online) {
      offlineFriends.push(friend);
    }
  }

  return offlineFriends;
};

console.log(getOfflineFriends(friends));

const getFriendsByOnlineStatus = function (allFriends) {
  const friendsByStatus = {
    online: [],
    offline: [],
  };

  for (const friend of allFriends) {
    if (friend.online) {
      friendsByStatus.online.push(friend);
      continue;
    }

    friendsByStatus.offline.push(friend);
  }

  return friendsByStatus;
};

console.log(getFriendsByOnlineStatus(friends));

// Кількість елементів об'єкту
const x = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
};

console.log(Object.keys(x).length);
