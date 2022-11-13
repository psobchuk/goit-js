function makeTask(data) {
  const completed = false;
  const category = "General";
  const priority = "Normal";
  // Change code below this line
  const newObject = {
    completed,
    category,
    priority,
    ...data,
  };
  return newObject;
  // Change code above this line
}
