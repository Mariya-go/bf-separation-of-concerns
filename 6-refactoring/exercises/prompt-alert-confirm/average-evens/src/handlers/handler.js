import { averageEvens } from '../utils/util.js';
import { message } from '../components/component.js';

export const averageEvensHandler = () => {
    // read & process user input
    const allNumbers = [];
    let acceptingInput = true;
    while (acceptingInput) {
        const nextInput = prompt('enter a number');
        if (nextInput === null || nextInput === '') {
            acceptingInput = false;
            continue;
        }

        const nextNumber = Number(nextInput);
        if (Number.isNaN(nextNumber)) {
            alert(`"${nextInput}" is not a valid number`);
        } else {
            allNumbers.push(nextNumber);
        }
    }

    // execute core logic
    const average = averageEvens(allNumbers);
    console.log(average);

    // communicate result to user
    message(average);
};
