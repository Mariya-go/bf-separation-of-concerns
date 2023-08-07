/**
 * Give formatted mouse coordinates
 * @param {number} xValue - x-coordinate
 * @param {number} yValue - y-coordinate
 * @returns {string} - formatted mouse coordinates
 */
export const formatCoordinates = (xValue, yValue) => {
    const formattedCoordinates = 'X: ' + xValue + '\nY: ' + yValue;
    return formattedCoordinates;
};
