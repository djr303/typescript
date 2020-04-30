var getWellRead = function (book, page) {
    if (book && !page)
        return "book";
    if (book && page)
        return "book & page";
};
var book = getWellRead("bible");
var bookPage = getWellRead("bible", 1);
console.log('book', book);
console.log('bookPage', bookPage);
