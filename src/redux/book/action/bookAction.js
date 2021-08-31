import axios from 'axios';
import { addBook } from '../api/booksApi';

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

export const getBooksApi = () => async (dispatch) => {
  const books = [];
  const response = await fetch(apiUrl,
    {
      method: 'GET',
      headers: { 'content-type': 'application/json' },
      mode: 'cors',
    }).then((res) => res.json())
    .then((err) => err);
  if (response) {
    // eslint-disable-next-line no-restricted-syntax
    for (const [key, value] of Object.entries(response)) {
      const id = key;
      const obj = value;
      const book = {
        item_id: id,
        title: obj[0].title,
        category: obj[0].category,
      };
      books.push(book);
    }

    dispatch({
      type: FETCH_BOOKS_API,
      payLoad: books,
    });
  } else {
    console.log('Unable to fetch data');
  }
};

export const addBookApi= (dispatch) => {

};

export const deleteBookApi = (id) => async (dispatch) => {
  await axios
    .delete(`${apiUrl}/${id}`, {
      headers: {
        'Access-Control-Allow-Origin': true,
      },
    })
    .then(dispatch(getBooksApi()))
    .catch(() => 'error');
};
