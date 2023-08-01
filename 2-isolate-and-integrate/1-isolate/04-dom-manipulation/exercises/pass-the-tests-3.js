'use strict';

const divEl = document.createElement('ul');
divEl.innerHTML = `
  <table>
    <tbody>
      <tr></tr>
      <tr></tr>
    </tbody>
  </table>
`;
console.log(divEl.nodeName + ' (before)', divEl.cloneNode(true));

// --- write some code ---
//  you need to create a 2x2 table with a, b, c, d in the squares
const tdEl = document.createElement('td');
const cloneTd = tdEl.cloneNode(true);
const cloneTd1 = tdEl.cloneNode(true);
const cloneTd2 = tdEl.cloneNode(true);

const tbodyEl = divEl.children[0].children[0];
tbodyEl.children[0].append(tdEl, cloneTd);
tbodyEl.children[1].append(cloneTd1, cloneTd2)

tbodyEl.children[0].children[0].innerHTML = 'a';
tbodyEl.children[0].children[1].innerHTML = 'b';
tbodyEl.children[1].children[0].innerHTML = 'c';
tbodyEl.children[1].children[1].innerHTML = 'd';

// --- --- --- --- --- ---

console.log(divEl.nodeName + ' (after)', divEl.cloneNode(true));

const expectedInnerHTMLs = ['a', 'b', 'c', 'd'];
for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 2; j++) {
        const tbodyEL = divEl.children[0].children[0];
        const trEl = tbodyEL.children[i];
        const tdEl = trEl.children[j];
        const actual = tdEl.innerHTML;
        const expected = expectedInnerHTMLs.shift();
        console.assert(actual === expected, `expected "${expected}"`);
    }
}
