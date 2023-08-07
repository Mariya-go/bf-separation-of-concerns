import { reverseAndUpperHandler } from '../handlers/handler.js';
import { dom } from '../dom.js';

export const inputListener = () => {
    dom.input.addEventListener('keyup', (e) => {
        reverseAndUpperHandler(e);
    });
};
