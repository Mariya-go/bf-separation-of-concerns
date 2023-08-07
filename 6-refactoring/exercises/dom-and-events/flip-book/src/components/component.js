import { dom } from '../dom.js';

export const reversedUppercasedInput = (input) => {
    const output = (dom.output.innerHTML = input);
    return output;
};
