const playlist1 = {
  name: [1, 2, 3],
  b: 5,
  c: 20,
  c: 10, // Перекриє попереднє значення
};

console.log(playlist1);

// Літерал об'єкта з правого боку від присвоювання
const playlist2 = {
  name: "My super playlist",
  rating: 5,
  tracks: ["track-1", "track-2", "track-3"],
  trackCount: 3,
};

console.log(playlist2);

const x = {};
console.log({});

const fn = function (myObject) {
  // MyObject = {a: 1, b: 2}
  console.log(myObject);
};

fn({ a: 1, b: 2 });

const rtfn = function () {
  return { a: 5 };
};

console.log(rtfn());
