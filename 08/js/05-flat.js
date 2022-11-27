const array = [1, 2, [4, [5]], [6, [7, 8, [9]]]];
console.log(array.flat(2));

const tweets = [
  { id: "000", likes: 5, tags: ["js", "nodejs"] },
  { id: "001", likes: 2, tags: ["html", "css"] },
  { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
  { id: "003", likes: 8, tags: ["css", "react"] },
  { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
];

// const tags = tweets.map((t) => t.tags).flat();
const tags = tweets
  .flatMap((t) => t.tags)
  .reduce(
    (acc, tag) => ({
      ...acc,
      [tag]: acc[tag] ? acc[tag] + 1 : 1,
    }),
    {}
  );
console.log(tags);
