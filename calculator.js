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

/**
 * Multiplies two numbers.
 *
 * @param {number} a - The first factor.
 * @param {number} b - The second factor.
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
 * @returns {number} The quotient a / b.
 * @throws {RangeError} If b is zero.
 *
 * @example
 * divide(6, 3); // 2
 */
function divide(a, b) {
  if (b === 0) {
    throw new RangeError('Division by zero');
  }
  return a / b;
}

module.exports = { add, subtract, multiply, divide };
