const feedback = {
  good: 5,
  neutral: 10,
  bad: 3,
};

const keys = Object.keys(feedback);

let totalFeedback = 0;

for (const key of keys) {
  console.log(feedback[key]);
  console.log(key);
  totalFeedback += feedback[key];
}

totalFeedback = 0;

const values = Object.values(feedback);
console.log(values);

for (const value of values) {
  console.log(value);
  totalFeedback += value;
}

console.log("totalFeedback:", totalFeedback);
