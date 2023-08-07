import dom from '../dom.js';

const inputHandler = () => {
    const value = dom.input.value;
    const body = document.body;
    body.style.backgroundColor = value;
};

export default inputHandler;
