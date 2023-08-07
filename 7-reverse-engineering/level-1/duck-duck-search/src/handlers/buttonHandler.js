import dom from '../dom.js';

const buttonHandler = () => {
    const value = dom.input.value;
    const link = `https://duckduckgo.com/?q=${value}&ia=web`;

    window.open(link);
};

export default buttonHandler;
