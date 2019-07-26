/**
 * Finds and tallies all the unique strings within a given array.
 * @param {string[]} collection A array of strings to search through
 * @returns {Result} A object with two fields. `total`, the total number of unique strings, and `unique`, a object containing all unique
 * and the number of times they occured.
 */
export const distinct = (collection) => {
  if (!Array.isArray(collection)) {
    throw TypeError('The collection must be of type array');
  }

  let total = 0;
  let unique = {};

  for (let index = 0; index < collection.length; index += 1) {
    const item = collection[index];

    if (typeof item !== 'string') {
      throw TypeError('Each item in the collection must be of type string');
    }

    if (!unique[item]) {
      unique = {
        ...unique,
        [item]: 1
      };
      total += 1;
      continue;
    };

    unique[item] += 1;
  }

  return { total, unique };
}

/**
 * @typedef {Object} Result
 * @property {number} total The total number of unique strings in the given array.
 * @property {Object} unique All unique string instances and their tally.
 */
