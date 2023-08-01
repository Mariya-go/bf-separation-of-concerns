'use strict';

const actual = ({ question, answers, correct, selected }) => {
    const form = document.createElement('form');
    const pEl = document.createElement('p');
    pEl.innerText = question;
    form.append(pEl);

    answers.forEach((answer, index) => {
        const input = document.createElement('input');
        input.type = 'radio';
        input.name = 'answers';
        if (index === selected) {
            input.checked = true;
        }

        const text = document.createElement('text');
        text.innerText = answer;
        if (input.checked) {
            if (index === correct) {
                text.className = 'correct';
                text.innerText = `${answer} √`;
            } else {
                text.className = 'incorrect';
                text.innerText = `${answer} ✖`;
            }
        }

        const br = document.createElement('br');

        form.append(input, text, br);
    });

    return form;
};
