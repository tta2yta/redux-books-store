import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBooksApi } from '../../redux/book/action/bookAction';
import AddRemove from './addRemove';

const bookList = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooksApi());
  }, []);

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
