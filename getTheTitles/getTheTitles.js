const getTheTitles = function(books) {
    const newBooks = books.map((entry) => {
        return entry.title;
    })
    return newBooks;
};

module.exports = getTheTitles;
