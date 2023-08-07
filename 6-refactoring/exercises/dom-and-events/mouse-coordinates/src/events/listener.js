import { showMouseCoordinates } from '../handlers/handler.js';
import { dom } from '../dom.js';

export const userInterfaseListener = () => {
    dom.userInterfase.addEventListener('mousemove', (e) => {
        showMouseCoordinates(e);
    });
};
