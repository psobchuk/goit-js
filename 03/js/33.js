// Change code below this line
function findMatches(myArray, ...otherNumbers) {
  const matches = []; // Don't change this line
  for (const value of myArray) {
    console.log(value);
    if (otherNumbers.includes(value)) {
      matches.push(value);
    }
  }
  // Change code above this line
  return matches;
}

const arr = [2, 3, 4];

console.log(findMatches(arr, 1, 2, 3));
