import { dom } from '../dom.js';

export const output = (value) => {
    const output = (dom.output.innerHTML = typeof value + ': ' + value);
    return output;
};
