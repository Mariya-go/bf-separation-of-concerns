/**
 *
 */
import { data } from '../data.js';

export const list = (allInputs) => {
    let stringList = '';
    for (const input of allInputs) {
        stringList += `\n${data.bulletPoint} ${input}`;
    }
    return stringList;
};
