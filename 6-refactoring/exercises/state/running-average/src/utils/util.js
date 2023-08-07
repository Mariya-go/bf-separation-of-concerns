/**
 *
 */
export const average = (numbersArr, newNumber) => {
    numbersArr.push(newNumber);
    const averageOfNum =
        numbersArr.reduce((sum, next) => sum + next, 0) / numbersArr.length;
    return averageOfNum;
};
