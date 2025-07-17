const {
  addSweet,
  getSweets,
  clearSweets,
  purchaseSweet,
} = require("../src/sweetManager");

beforeEach(() => {
  clearSweets();
});

describe("Purchase Sweet", () => {
  test("should reduce quantity after successful purchase", () => {
    addSweet({ id: 1, name: "Kaju Katli", category: "Nut-Based", price: 50, quantity: 10 });

    purchaseSweet(1, 3);

    const sweets = getSweets();
    expect(sweets[0].quantity).toBe(7);
  });

  test("should throw error if stock is insufficient", () => {
    addSweet({ id: 2, name: "Gulab Jamun", category: "Milk-Based", price: 20, quantity: 5 });

    expect(() => {
      purchaseSweet(2, 10);
    }).toThrow("Not enough stock to complete purchase.");
  });

  test("should throw error if sweet ID does not exist", () => {
    expect(() => {
      purchaseSweet(999, 1);
    }).toThrow("Sweet with ID 999 not found.");
  });

  test("should allow purchasing by sweet name (case-insensitive)", () => {
  addSweet({ id: 3, name: "Rasgulla", category: "Milk-Based", price: 30, quantity: 8 });

  purchaseSweet("rasgulla", 2);

  const sweets = getSweets();
  expect(sweets[0].quantity).toBe(6);
});
});
