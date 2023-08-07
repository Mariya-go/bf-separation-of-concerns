import seachFoodsHandler from '../handlers/handler.js';
import dom from '../dom.js';

const buttonListener = () => {
    dom.button.addEventListener('click', seachFoodsHandler);
};

export default buttonListener;
