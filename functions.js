/**
 * Adds two numbers.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
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
 * @param {number} a - The number to subtract from.
 * @param {number} b - The number to subtract.
 * @returns {number} The difference of a and b.
 *
 * @example
 * subtract(5, 3); // 2
 */
function subtract(a, b) {
  return a - b;
}

/**
 * Multiplies two numbers.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} The product of a and b.
 *
 * @example
 * multiply(4, 3); // 12
 */
function multiply(a, b) {
  return a * b;
}

/**
 * Divides the first number by the second.
 *
 * @param {number} a - The dividend.
 * @param {number} b - The divisor.
 * @returns {number} The quotient of a and b.
 * @throws {Error} If b is zero.
 *
 * @example
 * divide(10, 2); // 5
 */
function divide(a, b) {
  if (b === 0) {
    throw new Error('Cannot divide by zero');
  }
  return a / b;
}

module.exports = { add, subtract, multiply, divide };
