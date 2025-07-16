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


function clearSweets() {
  sweets = [];
}

module.exports = { addSweet, getSweets, clearSweets, deleteSweet };
