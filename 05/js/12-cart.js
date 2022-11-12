const cart = {
  items: [],
  getItems() {
    return this.items;
  },
  add(product) {
    product.quantity = 1;
  },
  remove(productName) {},
  clear() {},
  countTotalPrice() {},
  increaseQuantity(productName) {},
  decreaseQuantity(productName) {},
};

console.table(cart.getItems());

cart.add({ name: "tomato", price: "50" });
cart.add({ name: "lemon", price: "50" });
cart.add({ name: "lemon", price: "60" });
cart.add({ name: "tomato", price: "110" });

console.table(cart.getItems());
