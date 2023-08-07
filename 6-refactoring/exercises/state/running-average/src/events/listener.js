import { runningAverageHandler } from '../handlers/handler.js';
import { dom } from '../dom.js';

export const buttonListener = () => {
    dom.button.addEventListener('click', runningAverageHandler);
};
