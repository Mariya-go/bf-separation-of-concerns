import dom from '../dom.js';
import textHandler from '../handlers/textHandler.js';

const textListener = () => {
    dom.text.addEventListener('mouseover', textHandler);
};

export default textListener;
