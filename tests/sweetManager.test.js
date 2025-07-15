const { addSweet, getSweets } = require('../src/sweetManager');

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

    const sweets = getSweets();
    
    expect(sweets.length).toBe(3);
    expect(sweets[0].name).toBe('Kaju Katli');
    expect(sweets[1].name).toBe('Gajar Halwa');
    expect(sweets[2].name).toBe('Gulab Jamun');
  });
});
