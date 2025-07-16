const { addSweet,getSweets, clearSweets,sortSweets } = require("../src/sweetManager");

beforeEach(() => {
  clearSweets();
});


//Sort sweets
test("should sort sweets by name, price, and quantity", () => {
  clearSweets();

  addSweet({ id: 1, name: "Peda", category: "Milk-Based", price: 25, quantity: 15 });
  addSweet({ id: 2, name: "Kaju Katli", category: "Nut-Based", price: 50, quantity: 10 });
  addSweet({ id: 3, name: "Chikki", category: "Nut-Based", price: 15, quantity: 30 });
  addSweet({id:4 , name:"Basundi", category:"Milk-Based", price: 35, quantity: 20});

  // Sort by name
  let sorted = sortSweets("name");
  expect(sorted[0].name).toBe("Basundi");
  expect(sorted[1].name).toBe("Chikki");
  expect(sorted[2].name).toBe("Kaju Katli");
  expect(sorted[3].name).toBe("Peda");

  // Sort by price
  sorted = sortSweets("price");
  expect(sorted[0].price).toBe(15);
  expect(sorted[2].price).toBe(35);
  expect(sorted[3].price).toBe(50);

  // Sort by quantity
  sorted = sortSweets("quantity");
  expect(sorted[2].quantity).toBe(20);
  expect(sorted[0].quantity).toBe(10);

});