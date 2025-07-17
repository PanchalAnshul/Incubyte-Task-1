const { addSweet,getSweets, clearSweets } = require("../src/sweetManager");

beforeEach(() => {
  clearSweets();
});

//View sweets
test("should view all sweets currently in the shop", () => {
  clearSweets();
  addSweet({
    id: 1008,
    name: "Barfi",
    category: "Milk-Based",
    price: 25,
    quantity: 18,
  });
  addSweet({
    id: 1009,
    name: "Peda",
    category: "Milk-Based",
    price: 22,
    quantity: 12,
  });
  addSweet({
    id: 1010,
    name: "Chikki",
    category: "Nut-Based",
    price: 18,
    quantity: 14,
  });

  const sweets = getSweets();

  expect(sweets.length).toBe(3);
  expect(sweets[0].name).toBe("Barfi");
  expect(sweets[1].name).toBe("Peda");
  expect(sweets[2].name).toBe("Chikki");
});
