const message = (query, results) => {
    const newMessage = `foods matching "${query}":${results}`;
    return alert(newMessage);
};

export default message;
