import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBooks } from '../../redux/book/action/bookAction';
import AddRemove from './addRemove';

const bookList = () => {
  const [books, setBooks] = useState([]);
  const bookLists = useSelector((state) => state.books);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, []);

  useEffect(() => {
    if (books !== bookLists) setBooks(bookLists);
  });

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
        <div className="perc-completed">
          <div className="c100 p34 center">
            <span>34%</span>
            <div className="slice">
              <div className="bar" />
              <div className="fill" />
            </div>
          </div>
        </div>
        <div className="chapter">chapter</div>
      </div>
    </>
  );
};

export default bookList;
