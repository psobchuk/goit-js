const atTheOldToad = {
  potions: ["Speed potion", "Dragon breath", "Stone skin"],
  removePotion(potionName) {
    const potionIndex = this.potions.indexOf(potionName);
    this.potions.splice(potionIndex, 1);

    // Change code above this line
  },
};

console.log(atTheOldToad);
