'use strict';

const ulEl = document.createElement('ul');
ulEl.innerHTML = `
  <li> toad </li>
  <li>Frog</li>
  <li>salad</li>
`;
console.log(ulEl.nodeName, ulEl.cloneNode(true));

// --- write some code ---
ulEl.querySelectorAll('li')[2].innerHTML = 'salamander';
ulEl.querySelectorAll('li')[1].innerHTML = 'frog';
ulEl.querySelectorAll('li')[0].innerHTML = 'toad';


// --- --- --- --- --- ---

console.log(ulEl.nodeName, ulEl.cloneNode(true));

const expectedInnerHTMLs = ['toad', 'frog', 'salamander'];
for (let i = 0; i < expectedInnerHTMLs.length; i++) {
    const actual = ulEl.children[i].innerHTML;
    const expected = expectedInnerHTMLs[i];
    console.assert(actual === expected, `Test child ${i}`);
}
