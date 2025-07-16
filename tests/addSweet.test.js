const { addSweet, getSweets, clearSweets } = require('../src/sweetManager');

beforeEach(() => {
  clearSweets(); // Reset state before each test
});

//add sweets
describe('Sweet Shop Management', () => {
  test('should add multiple sweets to the sweet list', () => {
    addSweet({
      id: 1001,
      name: 'Kaju Katli',
      category: 'Nut-Based',
      price: 50,
      quantity: 20,
    });

    addSweet({
      id: 1002,
      name: 'Gajar Halwa',
      category: 'Vegetable-Based',
      price: 30,
      quantity: 15,
    });

    addSweet({
      id: 1003,
      name: 'Gulab Jamun',
      category: 'Milk-Based',
      price: 10,
      quantity: 50,
    });

    const sweets = getSweets();//for verification 

    expect(sweets.length).toBe(3);
    expect(sweets[0].name).toBe('Kaju Katli');
    expect(sweets[1].name).toBe('Gajar Halwa');
    expect(sweets[2].name).toBe('Gulab Jamun');
  });
});

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