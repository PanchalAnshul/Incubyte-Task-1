const {
  addSweet,
  getSweets,
  clearSweets,
  restockSweet,
} = require("../src/sweetManager");

beforeEach(() => {
  clearSweets();
});

describe("Restock Sweet", () => {
  test("should increase quantity after restocking", () => {
    addSweet({ id: 3, name: "Rasgulla", category: "Milk-Based", price: 25, quantity: 10 });

    restockSweet(3, 5);

    const sweets = getSweets();
    expect(sweets[0].quantity).toBe(15);
  });
});
