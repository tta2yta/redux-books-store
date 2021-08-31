import { useSelector } from 'react-redux';
import AddRemove from './addRemove';

const bookList = () => {
  const books = useSelector((state) => state.books);

  return (
    <>
      <div className="bookList">
        {books.map((item) => (
          <div key={item.item_id} className="list-item">
            <div className="book-category">{item.category}</div>
            <div className="book-title">{item.title}</div>
            <div className="book-author">{item.author}</div>
            <AddRemove item_id={item.item_id} />
          </div>

        ))}

      </div>
    </>
  );
};

export default bookList;
