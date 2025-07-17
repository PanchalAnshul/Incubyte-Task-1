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

   test("should increase quantity after restocking by name", () => {
    addSweet({ id: 4, name: "Barfi", category: "Milk-Based", price: 30, quantity: 8 });

    restockSweet("Barfi", 4);

    const sweets = getSweets();
    expect(sweets[0].quantity).toBe(12);
  });

  test("should throw error if sweet ID does not exist for restocking", () => {
    expect(() => {
      restockSweet(404, 10);
    }).toThrow("Sweet with ID 404 not found.");
  });

   test("should throw error if sweet name does not exist for restocking", () => {
    expect(() => {
      restockSweet("Halwa", 10);
    }).toThrow('Sweet with name "Halwa" not found.');
  });
});
