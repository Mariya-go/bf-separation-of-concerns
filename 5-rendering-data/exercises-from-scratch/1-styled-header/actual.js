'use strict';

const actual = (level, text, styling) => {
    const el = document.createElement(`h${level}`);
    el.innerHTML = text;
    el.classList.add(styling);
    return el;
};
