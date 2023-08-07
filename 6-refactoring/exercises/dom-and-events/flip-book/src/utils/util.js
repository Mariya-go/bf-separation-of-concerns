/**
 * Reverses string and upper cases it
 *@param {string} input - string to proceed
 *@returns {string} - reversed and upper cased string
 */
export const reverseAndUpper = (input) => {
    const upperCased = input.toUpperCase();
    const splitted = upperCased.split('');
    const reversed = splitted.reverse();
    const reversedUppercase = reversed.join('');
    return reversedUppercase;
};
