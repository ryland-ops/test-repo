/**
 * Adds two numbers.
 *
 * @param {number} a - The first addend.
 * @param {number} b - The second addend.
 * @returns {number} The sum of a and b.
 *
 * @example
 * add(2, 3); // 5
 */
function add(a, b) {
  return a + b;
}

/**
 * Subtracts the second number from the first.
 *
 * @param {number} a - The minuend.
 * @param {number} b - The subtrahend.
 * @returns {number} The difference a - b.
 *
 * @example
 * subtract(5, 3); // 2
 */
function subtract(a, b) {
  return a - b;
}

module.exports = { add, subtract };
