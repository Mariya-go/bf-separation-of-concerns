import { reverseAndUpper } from '../utils/util.js';
import { reversedUppercasedInput } from '../components/component.js';

export const reverseAndUpperHandler = (event) => {
    debugger;
    // read and process user input
    const input = event.target.value;

    // execute core logic
    const reversedUppercase = reverseAndUpper(input);

    // render result for user
    reversedUppercasedInput(reversedUppercase);

    // log result for developers
    console.log('\n --- user action ---');
    console.log('input:', input);
    console.log('reversedUppercase:', reversedUppercase);
};
