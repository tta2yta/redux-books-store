import axios from 'axios';
import  * as BOOK_APIS  from '../api/booksApi';

const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';
const FETCH_BOOKS_API = 'FETCH_BOOKS_API';

const apiUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/cF90aS533hJGfCJadIOC/books';

export const addBook = (payLoad) => ({
  type: ADD_BOOK,
  payLoad,
});

export const removeBook = (payLoad) => ({
  type: REMOVE_BOOK,
  payLoad,
});

const fetchBooks = (payload) => ({
  type: FETCH_BOOKS_API,
  payload,
});

export const getBook = () => async (dispatch) => {
const books= await BOOK_APIS.getBooksApi();
if(books){
  dispatch()
}
};

export const addBook = () => async (dispatch) => {
  const result = createBookApi.then((res) => dispatch);
};

export const deleteBook = (id) => async (dispatch) => {
  await axios
    .delete(`${apiUrl}/${id}`, {
      headers: {
        'Access-Control-Allow-Origin': true,
      },
    })
    .then(dispatch(getBooksApi()))
    .catch(() => 'error');
};
