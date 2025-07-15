let sweets = [];

function addSweet(sweet) {
  sweets.push(sweet);
}

function getSweets() {
  return sweets;
}

// function deleteSweet(id) {
//   sweets = sweets.filter((s) => s.id !== id);
// }


module.exports = { addSweet, getSweets };
