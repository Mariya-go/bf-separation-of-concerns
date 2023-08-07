/**
 * Cast string to selected type
 * @param {string} type - selected type
 * @param {string} string - string to cast
 * @returns {string} - casted string
 */
export const typeCaster = (type, string) => {
    let newValue;
    if (type === 'string') {
        newValue = String(string);
    } else if (type === 'number') {
        newValue = Number(string);
    } else if (type === 'boolean') {
        newValue = Boolean(string);
    } else {
        newValue = undefined;
    }
    return newValue;
};
