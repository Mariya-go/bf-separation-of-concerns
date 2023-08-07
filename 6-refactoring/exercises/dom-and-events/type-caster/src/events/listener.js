import { dom } from '../dom.js';
import { castTheValue } from '../handlers/handler.js';

export const buttonListener = () => {
    dom.userAction.addEventListener('click', (e) => {
        castTheValue(e);
    });
};
