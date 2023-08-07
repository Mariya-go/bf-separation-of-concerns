/**
 * Find average of evens in an array
 * @param {number []} allNumbers - array of numbers to proceed
 * @returns {number} - average of evens in an array
 */
export const averageEvens = (allNumbers) => {
    let howManyEvens = 0;
    let sumOfEvens = 0;
    for (const num of allNumbers) {
        if (num % 2 === 0) {
            sumOfEvens = sumOfEvens + num;
            howManyEvens = howManyEvens + 1;
        }
    }
    const average = howManyEvens === 0 ? 0 : sumOfEvens / howManyEvens;
    return average;
};
