import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBooks } from '../../redux/book/action/bookAction';
import AddRemove from './addRemove';
import Progress from './Progress';
import UpdateProgress from './UpdateProgress';

const bookList = () => {
  // const [books, setBooks] = useState([]);
  const bookLists = useSelector((state) => state.books);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
    console.log(bookLists);
  }, []);

  // useEffect(() => {
  //   if (books !== bookLists) setBooks(bookLists);
  // });
  console.log(bookLists);

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

            <div className="perc-completed" key={Math.floor(Math.random * 100)}>
              <Progress value={item.progress} />
            </div>
            <div className="chapter" key={Math.floor(Math.random * 0.1)}><UpdateProgress /></div>

          </>

        ))}

      </div>
    </>
  );
};

export default bookList;
