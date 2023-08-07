import { capSwap } from '../utils/util.js';

export const capSwapHandler = () => {
    // read & process user input
    let userInput = null;
    while (userInput === null) {
        userInput = prompt('enter a string to cap-swap');
    }

    // execute core logic
    const capSwapped = capSwap(userInput.valueOf());

    // communicate result to user
    alert(capSwapped);
};
