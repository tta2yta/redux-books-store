const initialState = [];

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_BOOK':
      return [...state,
        { ...action.payLoad, progress: Math.floor(Math.random * 100) }];
    case 'REMOVE_BOOK':
      return state.filter((item) => item.item_id !== action.payLoad);
    case 'FETCH_BOOKS_API': {
      const loadedBooks = Object.entries(action.payLoad).map(([key, value]) => {
        console.log(action.payLoad);
        return {
          item_id: key,
          ...value,
          // author: authors[Math.floor(Math.random() * authors.length)],
          progress: Math.floor(Math.random() * 100),
          // currentChapter: currentChapter[Math.floor(Math.random() * currentChapter.length)],
        };
      });

      return loadedBooks;
    }
    default:
      return state;
  }
};

export default bookReducer;
