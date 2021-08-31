import axios from 'axios';

const apiUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/cF90aS533hJGfCJadIOC/books';

export const getBooksApi = async () => {
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
  }
  return books;
};

export const createBookApi = async (book) => {
  console.log(book);
  const response = await fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      'Access-Control-Allow-Origin': true,
    },
    body: JSON.stringify({
      item_id: book.item_id, title: book.title, category: book.category,
    }),
  });
  return response.status === 201;
};

export const deleteBookApi = async (id) => {
  const res = await axios
    .delete(`${apiUrl}/${id}`, {
      headers: {
        'Access-Control-Allow-Origin': true,
      },
    })
    .then((res) => res.data);
  return res === 'The book was deleted successfully!';
};
