import React from 'react';

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
function searchSweets(query) {
  return sweets.filter(sweet =>
    sweet.name.toLowerCase().includes(query.toLowerCase())
  );
}

// Function to sort sweets based on a property
function sortSweets() {
  return [...sweets].sort((a, b) => a.name.localeCompare(b.name));
}

// Function to purchase a sweet
function purchaseSweet(identifier, qty = 1) {
  const sweet =
    typeof identifier === "number"
      ? sweets.find((s) => s.id === identifier)
      : sweets.find((s) => s.name.toLowerCase() === identifier.toLowerCase());

  if (!sweet) {
    throw new Error(
      typeof identifier === "number"
        ? `Sweet with ID ${identifier} not found.`
        : `Sweet named "${identifier}" not found.`
    );
  }

  if (sweet.quantity < qty) {
    throw new Error("Not enough stock to complete purchase.");
  }

  sweet.quantity -= qty;
}
// Function to restock a sweet
function restockSweet(id, qty) {
  if (qty <= 0) {
  throw new Error("Quantity must be greater than 0.");
}
  const sweet = sweets.find((s) => s.id === id);
  if (!sweet) {
    throw new Error(`Sweet with ID ${id} not found.`);
  }
  sweet.quantity += qty;
}


// Function to clear all sweets
function clearSweets() {
  sweets = [];
}

export {
  addSweet,
  getSweets,
  clearSweets,
  deleteSweet,
  searchSweets,
  sortSweets,
  purchaseSweet,
  restockSweet
};


