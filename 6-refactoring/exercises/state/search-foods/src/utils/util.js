/**
 *
 */
const search = (foods, query) => {
    const results = foods
        .filter((food) => food.includes(query))
        .map((food) => `\n- ${food}`)
        .join('');
    return results;
};
export default search;
