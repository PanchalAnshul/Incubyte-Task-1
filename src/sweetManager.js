let sweets = [];

function addSweet(sweet) {
  sweets.push(sweet);
}

function getSweets() {
  return sweets;
}

module.exports = { addSweet, getSweets };
