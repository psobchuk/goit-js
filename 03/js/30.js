function makeTask(data) {
  const completed = false;
  const category = "General";
  const priority = "Normal";
  // Change code below this line
  const newObject = {
    completed: data.completed,
    category: data.category,
    priority: data.priority,
  };
  return newObject;
  // Change code above this line
}

console.log(
  makeTask({
    category: "Homemade",
    priority: "Low",
    text: "Take out the trash",
  })
);
