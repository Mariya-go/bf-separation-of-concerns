import { data } from '../data.js';

export const message = () => {
    const outMessage = data.noCopies.join(', ');
    alert(outMessage);
};
