const {
  addSweet,
  getSweets,
  clearSweets,
  deleteSweet,
  searchSweets,
  sortSweets,
} = require("../src/sweetManager");

beforeEach(() => {
  clearSweets();
});

//Add sweets
test("should add sweets and throw error if duplicate name or ID is added", () => {
  const sweetInputs = [
    {
      id: 1001,
      name: "Kaju Katli",
      category: "Nut-Based",
      price: 50,
      quantity: 20,
    },
    {
      id: 1002,
      name: "Gajar Halwa",
      category: "Veg-Based",
      price: 30,
      quantity: 15,
    },
    {
      id: 1003,
      name: "Gulab Jamun",
      category: "Milk-Based",
      price: 10,
      quantity: 50,
    },
    {
      id: 1004,
      name: "Rasgulla",
      category: "Milk-Based",
      price: 20,
      quantity: 25,
    },
    {
      id: 1005,
      name: "Kesar Penda",
      category: "Milk-Based",
      price: 80,
      quantity: 10,
    },

    // Duplicate name
    {
      id: 1006,
      name: "Kaju Katli",
      category: "Nut-Based",
      price: 55,
      quantity: 10,
    },

    // Duplicate ID
    {
      id: 1002,
      name: "MotiChoor Ladoo",
      category: "Nut-Based",
      price: 15,
      quantity: 30,
    },

    {
      id: 1007,
      name: "Besan Ladoo",
      category: "Nut-Based",
      price: 12,
      quantity: 22,
    }, //will not count because error occured
  ];

  // let addedCount = 0;
  let errorCaught = false;

  for (let i = 0; i < sweetInputs.length; i++) {
    try {
      addSweet(sweetInputs[i]);
      // addedCount++;
    } catch (err) {
      console.log(`Error at index ${i}: ${err.message}`);
      errorCaught = true;
      break; // stop at first error
    }
  }

  expect(errorCaught).toBe(true); // We expect a duplicate error
  expect(getSweets().length).toBe(5);
});

//Delete sweets
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

//Search sweets
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

//Sort sweets
test("should sort sweets by name", () => {
  clearSweets();

  addSweet({ id: 1, name: "Peda", category: "Milk-Based", price: 25, quantity: 15 });
  addSweet({ id: 2, name: "Kaju Katli", category: "Nut-Based", price: 50, quantity: 10 });
  addSweet({ id: 3, name: "Chikki", category: "Nut-Based", price: 15, quantity: 30 });

  // Sort by name
  let sorted = sortSweets("name");
  expect(sorted[0].name).toBe("Chikki");
  expect(sorted[1].name).toBe("Kaju Katli");
  expect(sorted[2].name).toBe("Peda");
});
