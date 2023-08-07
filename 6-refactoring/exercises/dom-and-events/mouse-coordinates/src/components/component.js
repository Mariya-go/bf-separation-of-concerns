import { dom } from '../dom.js';

export const output = (formattedCoordinates) => {
    const mouseOutput = (dom.mousePosition.innerHTML = formattedCoordinates);
    return mouseOutput;
};
