---
name: add-jsdoc
description: Use whenever you add a JavaScript function — a function declaration, function expression, arrow function, class method or object method in a .js, .mjs, .cjs or .jsx file. Writes a JSDoc comment above every new function.
---

Every JavaScript function you add gets a JSDoc block directly above it.

1. Describe what the function does in one sentence. Say what it returns or why it exists, not how it works line by line.
2. Add one `@param {Type} name` tag per parameter, in order, with a short description. Write destructured parameters as `@param {Object} options` followed by `@param {Type} options.key`. Mark optional parameters `[name]` and give defaults as `[name=default]`.
3. Add `@returns {Type}` with a short description unless the function returns nothing. Use `{Promise<Type>}` for async functions.
4. Add `@throws {ErrorType}` when the function throws on purpose.
5. Infer types from how the function is used and called. Use `*` only when any value is genuinely accepted.

Example:

```js
/**
 * Adds two numbers.
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} The sum of a and b.
 */
function add(a, b) {
  return a + b;
}
```

Add JSDoc only to functions you add in this change. Do not rewrite existing comments or document functions you did not touch.
