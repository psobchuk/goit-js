const fn = function () {
  console.log("hello");
};

fn.hello = ":)";

console.dir(fn);
console.dir(fn.hello);
