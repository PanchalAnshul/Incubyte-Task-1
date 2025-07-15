const { addSweet, getSweets } = require('../src/sweetManager');

describe('Sweet Shop Management', () => {
  test('should add a sweet with ID, name, category, price, and quantity', () => {
    addSweet({
      id: 1001,
      name: 'Kaju Katli',
      category: 'Nut-Based',
      price: 50,
      quantity: 20,
    });

    const sweets = getSweets();

    expect(sweets.length).toBe(1);
    expect(sweets[0].name).toBe('Kaju Katli');
    expect(sweets[0].price).toBe(50);
    expect(sweets[0].quantity).toBe(20);
  });
});
