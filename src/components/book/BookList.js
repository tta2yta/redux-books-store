import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBooks } from '../../redux/book/action/bookAction';
import AddRemove from './addRemove';
import Progress from './Progress';

const bookList = () => {
  // const [books, setBooks] = useState([]);
  const bookLists = useSelector((state) => state.books);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, []);

  // useEffect(() => {
  //   if (books !== bookLists) setBooks(bookLists);
  // });

  return (
    <>
      <div className="bookList">
        {bookLists.map((item) => (
          <>
            <div key={item.item_id} className="list-item">
              <div className="book-category">{item.category}</div>
              <div className="book-title">{item.title}</div>
              <div className="book-author">{item.author}</div>
              <AddRemove item_id={item.item_id} />
            </div>

            <div className="perc-completed">
              <Progress value="90" />
            </div>
            <div className="chapter">chapter</div>
          </>

        ))}

      </div>
    </>
  );
};

export default bookList;
