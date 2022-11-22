// Change code below this line
const getNamesSortedByFriendCount = (users) => {
  return [...users]
    .sort(
      (firstUser, secondUser) =>
        firstUser.friends.length - secondUser.friends.length
    )
    .map((user) => user.name);
};
// Change code above this line
