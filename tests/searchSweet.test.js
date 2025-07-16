const { addSweet,getSweets, clearSweets,searchSweets } = require("../src/sweetManager");

beforeEach(() => {
  clearSweets();
});


test("should search sweets by name, category, and price range", () => {
  clearSweets();

  addSweet({ id: 1, name: "Kaju Katli", category: "Nut-Based", price: 50, quantity: 10 });
  addSweet({ id: 2, name: "Gulab Jamun", category: "Milk-Based", price: 20, quantity: 30 });
  addSweet({ id: 3, name: "Peda", category: "Milk-Based", price: 25, quantity: 15 });
  addSweet({ id: 4, name: "Chikki", category: "Nut-Based", price: 15, quantity: 12 });

  // Search by name
  let results = searchSweets({ name: "Gulab" });
  expect(results.length).toBe(1);
  expect(results[0].name).toBe("Gulab Jamun");

  // Search by category
  results = searchSweets({ category: "Milk-Based" });
  expect(results.length).toBe(2);

  // Search by price range
  results = searchSweets({ minPrice: 20, maxPrice: 30 });
  expect(results.length).toBe(2);

  // Combined search
  results = searchSweets({ category: "Nut-Based", minPrice: 10, maxPrice: 20 });
  expect(results.length).toBe(1);
  expect(results[0].name).toBe("Chikki");
});