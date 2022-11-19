const cart = {
  items: [],
  getItems() {
    return this.items;
  },
  add(product) {
    console.table(this.items);

    for (const item of this.items) {
      if (item.name == product.name) {
        item.quantity += 1;
        return;
      }
    }

    const newProduct = {
      ...product,
      quantity: 1,
    };

    this.items.push(newProduct);
  },
  remove(productName) {
    const { items } = this;

    for (let i = 0; i < items.length; i += 1) {
      const { name } = items[i];

      if (name === productName) {
        console.log("Знайшли такий продукт", productName);
        console.log("Індекс: ", i);

        items.splice(i, 1);
      }
    }
  },
  clear() {
    this.items = [];
  },
  countTotalPrice() {
    const { items } = this;
    let total = 0;

    for (const { price, quantity } of items) {
      total += price * quantity;
    }

    return total;
  },
  increaseQuantity(productName) {},
  decreaseQuantity(productName) {},
};

console.table(cart.getItems());

cart.add({ name: "tomato", price: 50 });
cart.add({ name: "lemon", price: 50 });
cart.add({ name: "pear", price: 60 });
cart.add({ name: "strawberry", price: 110 });
cart.add({ name: "strawberry", price: 110 });
cart.add({ name: "strawberry", price: 110 });

console.table(cart.getItems());

console.log("Total:", cart.countTotalPrice());

cart.remove("lemon");
console.table(cart.getItems());

// Розрахунок загальної ціни
const getProductTotalPrice = function ({ price, quantity }) {
  return price * quantity;
};

console.log(getProductTotalPrice(cart.items[1]));

cart.clear();
console.log(cart.getItems());
