const initialState = [];

const bookReducer = (state = initialState, action) => {
  const authors = ['William Shakespeare', 'Agatha Christie', 'Barbara Cartland', 'Stephen King', 'Penny Jordan'];
  const currentChapter = ['Introduction', 'Chapter 1', 'Chapter 2', 'Chapter 3', 'Chapter 4', 'Chapter 5'];
  switch (action.type) {
    case 'ADD_BOOK': {
      console.log({ ...action.payLoad, progress: Math.floor(Math.random() * 100) });
      return [...state, {
        ...action.payLoad,
        author: authors[Math.floor(Math.random() * authors.length)],
        progress: Math.floor(Math.random() * 100),
        currentChapter: currentChapter[Math.floor(Math.random() * currentChapter.length)],
      }];
    }
    case 'REMOVE_BOOK':
      return state.filter((item) => item.item_id !== action.payLoad);
    case 'FETCH_BOOKS_API': {
      const loadedBooks = Object.entries(action.payLoad).map(([key, value]) => {
        console.log(action.payLoad);
        return {
          item_id: key,
          ...value,
          author: authors[Math.floor(Math.random() * authors.length)],
          progress: Math.floor(Math.random() * 100),
          currentChapter: currentChapter[Math.floor(Math.random() * currentChapter.length)],
        };
      });

      return loadedBooks;
    }
    default:
      return state;
  }
};

export default bookReducer;
