function validateNumbers(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new TypeError("Both operands must be numbers.");
  }
}

function add(a, b) {
  validateNumbers(a, b);
  return a + b;
}

function subtract(a, b) {
  validateNumbers(a, b);
  return a - b;
}

function multiply(a, b) {
  validateNumbers(a, b);
  return a * b;
}

function divide(a, b) {
  validateNumbers(a, b);

  if (b === 0) {
    throw new Error("Division by zero is not allowed.");
  }

  return a / b;
}

module.exports = {
  add,
  subtract,
  multiply,
  divide
};
