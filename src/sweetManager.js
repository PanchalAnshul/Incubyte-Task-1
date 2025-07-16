let sweets = [];

// Function to add a sweet
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


// Function to get all sweets
function getSweets() {
  return sweets;
}


// Function to delete a sweet by ID
function deleteSweet(id) {
  const index = sweets.findIndex((s) => s.id === id);
  
  if (index === -1) {
    throw new Error(`Sweet with ID ${id} not found.`);
  }

  sweets.splice(index, 1); // Remove 1 item at position `index`
}


// Function to search sweets based on criteria
function searchSweets({ name, category, minPrice, maxPrice }) {
  return sweets.filter((s) => {
    const matchesName = name ? s.name.toLowerCase().includes(name.toLowerCase()) : true;
    const matchesCategory = category ? s.category.toLowerCase() === category.toLowerCase() : true;
    const matchesMinPrice = minPrice !== undefined ? s.price >= minPrice : true;
    const matchesMaxPrice = maxPrice !== undefined ? s.price <= maxPrice : true;

    return matchesName && matchesCategory && matchesMinPrice && matchesMaxPrice;
  });
}


// Function to sort sweets based on a property
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

// Function to purchase a sweet
function purchaseSweet(id, qty) {
  const sweet = sweets.find((s) => s.id === id);
  sweet.quantity -= qty;
}


// Function to clear all sweets
function clearSweets() {
  sweets = [];
}

module.exports = { addSweet, getSweets, clearSweets, deleteSweet, searchSweets, sortSweets, purchaseSweet };
