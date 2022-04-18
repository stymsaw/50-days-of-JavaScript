const obj = { key: 1 };

/**
 *
 * @param {object} obj
 * @returns
 */

function isEmpty(obj) {
  return Object.keys(obj).length == 0
}

console.log(`is empty object: ${isEmpty(obj)}`);
