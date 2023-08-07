import { typeCaster } from '../utils/util.js';
import { output } from '../components/component.js';

export const castTheValue = (event) => {
    debugger;
    // read & process user input
    const form = event.target.form;
    const intendedType = form.type.value;
    const stringToCast = form.value.value;

    // execute core logic
    const casted = typeCaster(intendedType, stringToCast);

    // communicate result to user
    output(casted);

    // log action for developers
    console.log('\n-- user action --');
    console.log('stringToCast:', stringToCast);
    console.log('intendedType:', intendedType);
    console.log('newValue:', newValue);
};
