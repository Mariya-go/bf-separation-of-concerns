import dom from '../dom.js';
import inputHandler from '../handlers/inputHandler.js';

const inputListener = () => {
    dom.input.addEventListener('change', inputHandler);
};

export default inputListener;
