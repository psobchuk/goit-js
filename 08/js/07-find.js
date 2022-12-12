const colorPickerOptions = [
  { label: "red", color: "#F44336" },
  { label: "green", color: "#4CAF50" },
  { label: "blue", color: "#2196F3" },
  { label: "pink", color: "#E91E63" },
  { label: "indigo", color: "#3F51B5" },
];

console.log(colorPickerOptions.find((option) => option.label === "blue"));
console.log(colorPickerOptions.find((option) => option.label === "pink"));
console.log(colorPickerOptions.find((option) => option.label === "white"));
