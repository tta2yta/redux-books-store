
const apiUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/cF90aS533hJGfCJadIOC/books';

export const  addBook = async (book) => {
    console.log(book);
   const response= await fetch(apiUrl, {
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