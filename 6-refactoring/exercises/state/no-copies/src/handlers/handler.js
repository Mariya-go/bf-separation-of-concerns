import { saveNoCopies } from '../utils/util.js';
import { data } from '../data.js';
import { message } from '../components/component.js';

export const saveNoCopiesHandler = () => {
    // read & process user input
    let userInput = null;
    while (userInput === null) {
        userInput = prompt('enter a string to save');
    }

    // execute core logic
    const savedInputs = saveNoCopies(userInput);

    // communicate result to user
    message(savedInputs);

    // log interaction
    console.log(data);
};
