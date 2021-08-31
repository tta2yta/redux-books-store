import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBookApi, getBooksApi } from '../../redux/book/action/bookAction';

const bookForm = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('fiction');
  const dispatch = useDispatch();

  const submitBookToStore = () => {
    const newBook = {
      item_id: Math.floor(Math.random() * 100),
      title,
      author,
      category,
    };
    dispatch(addBookApi(newBook));
  };

  const handleOnChangeTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleOnChangeAuthor = (e) => {
    setAuthor(e.target.value);
  };

  const handleOnSelect = (e) => {
    setCategory(e.target.value);
  };
  return (
    <div className="add-book">
      <h4>ADD NEW BOOK</h4>
      <form>
        <input type="text" placeholder="Book Title" value={title} onChange={handleOnChangeTitle} />
        <input type="text" placeholder="Author Name" value={author} onChange={handleOnChangeAuthor} />
        <select name="categories" id="categories" onChange={handleOnSelect}>
          <option value="fiction" defaultValue={category}>Fiction</option>
          <option value="scifiction">Science Fiction</option>

          <option value="romance">Romance</option>

          <option value="tech">Technology</option>

        </select>
        <input type="button" value="ADD BOOK" onClick={submitBookToStore} />
      </form>
    </div>
  );
};
export default bookForm;
