import dom from '../dom.js';
import mouseOutHandler from '../handlers/mouseOutHandler.js';

const mouseOutListener = () => {
    dom.text.addEventListener('mouseout', mouseOutHandler);
};

export default mouseOutListener;
