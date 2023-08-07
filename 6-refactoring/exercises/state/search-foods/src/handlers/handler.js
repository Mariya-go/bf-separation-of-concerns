import search from '../utils/util.js';
import data from '../data.js';
import message from '../components/component.js';

const searchFoodsHandler = () => {
    // read & process user input
    const query = prompt('enter a search query');
    if (query === null || query === '') {
        return;
    }

    // execute core logic
    const searchResult = search(data.foods, query);

    // communicate result to user
    message(query, searchResult);
    // log the interaction
    console.log(query);
};

export default searchFoodsHandler;
