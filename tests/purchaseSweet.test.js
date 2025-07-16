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
});
