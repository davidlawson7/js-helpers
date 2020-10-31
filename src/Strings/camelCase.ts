/**
 * Converts an array of words into single camel case word.
 * @param words 
 */
function camelCase(words: string[]): string {
  if (!Array.isArray(words)) {
    return '';
  }

  for (const word of words) {
    if (typeof word !== 'string') {
      return '';
    }
  }

  return words.reduce((camelCaseStr, word) => camelCaseStr === '' ? word.toLocaleLowerCase() : camelCaseStr + word.charAt(0).toUpperCase() + word.slice(1), '')
}

export default camelCase;
