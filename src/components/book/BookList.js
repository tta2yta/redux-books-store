const bookList = () => {
  const books = [
    {
      item_id: 1,
      title: 'Book-1',
      author: 'AAA',
      categories: 'category -1',
    },
    {
      item_id: 2,
      title: 'Book-2',
      author: 'BBB',
      categories: 'category -2',
    },
    {
      item_id: 3,
      title: 'Book-3',
      author: 'CCC',
      categories: 'category -3',
    },
  ];

  return (
    <>
      <div className="bookList">
        {books.map((item) => (
          <div key={item.item_id} className="list-item">
            <div className="book-category">{item.category}</div>
            <div className="book-title">{item.title}</div>
            <div className="book-author">{item.author}</div>
          </div>

        ))}

      </div>
    </>
  );
};

export default bookList;
