import { average } from '../utils/util.js';
import { data } from '../data.js';
import { message } from '../components/component.js';

export const runningAverageHandler = () => {
    // read & process user input
    const userInput = prompt('add a number to the running average');
    if (userInput === null) {
        alert('good bye');
        return;
    }

    const newNumber = Number(userInput);
    if (Number.isNaN(newNumber) || userInput === '') {
        alert(`"${userInput}" is not a valid number`);
        return;
    }

    // execute core logic
    const newAverage = average(data.numbers, newNumber);
    data.average = newAverage;

    // communicate result to user
    message(data.average);

    // log interaction
    console.log(data);
};
