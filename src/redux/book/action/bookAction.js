const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

export const addBook = (payLoad) => ({
  type: ADD_BOOK,
  payLoad,
});

export const removeBook = (payLoad) => ({
  type: REMOVE_BOOK,
  payLoad,
});
