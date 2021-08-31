import * as BOOK_APIS from '../api/booksApi';

const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';
const FETCH_BOOKS_API = 'FETCH_BOOKS_API';

export const addBooks = (payLoad) => ({
  type: ADD_BOOK,
  payLoad,
});

export const removeBook = (payLoad) => ({
  type: REMOVE_BOOK,
  payLoad,
});

const fetchBooks = (payLoad) => ({
  type: FETCH_BOOKS_API,
  payLoad,
});

export const getBooks = () => async (dispatch) => {
  const books = await BOOK_APIS.getBooksApi();
  if (books) {
    dispatch(fetchBooks(books));
  }
};

export const createBook = (book) => async (dispatch) => {
  const result = await BOOK_APIS.createBookApi(book);
  if (result) {
    dispatch(addBooks(book));
  }
};

export const deleteBook = (id) => async (dispatch) => {
  const res = await BOOK_APIS.deleteBookApi(id);
  if (res) {
    dispatch(removeBook(id));
  }
};
