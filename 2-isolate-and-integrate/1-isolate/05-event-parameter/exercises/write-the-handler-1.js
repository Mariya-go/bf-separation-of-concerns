'use strict';

const buttonEl = document.createElement('button');
buttonEl.innerHTML = '12345';
console.log('initial button:', buttonEl.cloneNode(true));

const reverseInnerHTMLHandler = (e) => {
    // write code to reverse the target element's innerHTML
   e.target.innerHTML = e.target.innerHTML.split('').reverse().join('');
    
};

buttonEl.addEventListener('click', (event) => {reverseInnerHTMLHandler(event)});

// "click" the button once
const clickEvent1 = new Event('click');
buttonEl.dispatchEvent(clickEvent1);
console.log('after 1st click:', buttonEl.cloneNode(true));
console.assert(buttonEl.innerHTML === '54321', 'Test 1: after first click');

// "click" the button again
const clickEvent2 = new Event('click');
buttonEl.dispatchEvent(clickEvent2);
console.log('after 2nd click:', buttonEl.cloneNode(true));
console.assert(buttonEl.innerHTML === '12345', 'Test 2: after second click');
