function calculateTotalPrice(orderedItems) {
  let totalPrice = 0;
  // Change code below this line

  // for (let i = 0; i < orderedItems.length; i += 1) {
  //   totalPrice += orderedItems[i];
  // }

  orderedItems.forEach(function (item, index) {
    totalPrice += orderedItems[index];
  });

  // Change code above this line
  return totalPrice;
}

calculateTotalPrice([1, 2, 3, 4, 5]);
