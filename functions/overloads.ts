type Read = {
  (book: string): string;
  (book: string, page: number): string;
}


const getWellRead: Read = (book: string, page?: number): string => {
  if (book && !page) return "book";
  if (book && page) return "book & page";
}

const book = getWellRead("bible");
const bookPage = getWellRead("bible", 1);

console.log('book', book);
console.log('bookPage', bookPage);
