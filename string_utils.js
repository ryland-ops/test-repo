/**
 * Capitalizes the first character of a string.
 *
 * @param {string} str - The input string.
 * @returns {string} The string with its first character uppercased.
 * @throws {TypeError} If str is not a string.
 *
 * @example
 * capitalize('hello'); // 'Hello'
 */
function capitalize(str) {
  if (typeof str !== 'string') throw new TypeError('str must be a string');
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Reverses a string (Unicode code point aware).
 *
 * @param {string} str - The input string.
 * @returns {string} The reversed string.
 * @throws {TypeError} If str is not a string.
 *
 * @example
 * reverse('abc'); // 'cba'
 */
function reverse(str) {
  if (typeof str !== 'string') throw new TypeError('str must be a string');
  return Array.from(str).reverse().join('');
}

module.exports = { capitalize, reverse };
