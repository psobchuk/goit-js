function changeEven(numbers, value) {
  // Change code below this line
  const newNumbers = [...numbers];
  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] % 2 === 0) {
      newNumbers[i] = numbers[i] + value;
    }
  }
  return newNumbers;
  // Change code above this line
}

console.log(changeEven([1, 2, 3, 4, 5], 10));
