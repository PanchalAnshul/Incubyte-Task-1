const {
  addSweet,
  getSweets,
  clearSweets,
  deleteSweet,
} = require("../src/sweetManager");

beforeEach(() => {
  clearSweets();
});

//delete sweets
test("should delete valid sweet and throw specific error if ID not found", () => {
  addSweet({
    id: 1001,
    name: "Kaju Katli",
    category: "Nut-Based",
    price: 50,
    quantity: 20,
  });

  addSweet({
    id: 1002,
    name: "Rasgulla",
    category: "Milk-Based",
    price: 20,
    quantity: 25,
  });

  //Delete existing sweet with ID
  deleteSweet(1002);

  const sweets = getSweets();
  expect(sweets.length).toBe(1);
  expect(sweets[0].id).toBe(1001);

  const wrongId = 1223;
  expect(() => {
    deleteSweet(wrongId);
  }).toThrow(`Sweet with ID ${wrongId} not found.`);
});
