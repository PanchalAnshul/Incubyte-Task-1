let sweets = [];

function addSweet(sweet) {
  const nameExists = sweets.some(
    (s) => s.name.trim().toLowerCase() === sweet.name.trim().toLowerCase()
  );

  const idExists = sweets.some((s) => s.id === sweet.id);

  if (nameExists) {
    throw new Error('Sweet with the same name already exists.');
  }

  if (idExists) {
    throw new Error('Sweet with the same ID already exists.');
  }

  sweets.push(sweet);
}

function getSweets() {
  return sweets;
}

function deleteSweet(id) {
  const index = sweets.findIndex((s) => s.id === id);
  
  if (index === -1) {
    throw new Error(`Sweet with ID ${id} not found.`);
  }

  sweets.splice(index, 1); // Remove 1 item at position `index`
}

function searchSweets({ name, category, minPrice, maxPrice }) {
  return sweets.filter((s) => {
    const matchesName = name ? s.name.toLowerCase().includes(name.toLowerCase()) : true;
    const matchesCategory = category ? s.category.toLowerCase() === category.toLowerCase() : true;
    const matchesMinPrice = minPrice !== undefined ? s.price >= minPrice : true;
    const matchesMaxPrice = maxPrice !== undefined ? s.price <= maxPrice : true;

    return matchesName && matchesCategory && matchesMinPrice && matchesMaxPrice;
  });
}

function sortSweets(by) {
  const sorted = [...sweets]; // shallow copy
  if (by === "name") {
    sorted.sort((a, b) => a.name.localeCompare(b.name));
  } else if (by === "price") {
    sorted.sort((a, b) => a.price - b.price);
  } else if (by === "quantity") {
    sorted.sort((a, b) => a.quantity - b.quantity);
  }
  return sorted;
}


function clearSweets() {
  sweets = [];
}

module.exports = { addSweet, getSweets, clearSweets, deleteSweet, searchSweets, sortSweets };
