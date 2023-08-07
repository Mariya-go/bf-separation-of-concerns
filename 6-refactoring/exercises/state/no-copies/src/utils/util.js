import { data } from '../data.js';

/**
 *
 */
export const saveNoCopies = (userInput) => {
    const alreadySaved = data.noCopies.includes(userInput);
    if (!alreadySaved) {
        data.noCopies.push(userInput);
    }
    return data.noCopies;
};
