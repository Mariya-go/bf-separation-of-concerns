import { formatCoordinates } from '../utils/util.js';
import { output } from '../components/component.js';

export const showMouseCoordinates = (event) => {
    // debugger;
    // read & process user input
    const xValue = event.pageX;
    const yValue = event.pageY;

    // execute core logic
    const formattedCoordinates = formatCoordinates(xValue, yValue);

    // render result for user
    output(formattedCoordinates);

    // log action for developers
    console.log('\n--- new coordinates ---');
    console.log('x:', xValue);
    console.log('y:', yValue);
};
