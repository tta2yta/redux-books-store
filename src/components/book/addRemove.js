import { useDispatch } from 'react-redux';
import { deleteBook } from '../../redux/book/action/bookAction';

const addRemove = (props) => {
  const id = props.item_id;
  const dispatch = useDispatch();
  const removeBookItem = () => {
    dispatch(deleteBook(id));
  };
  return (
    <div className="crudbtn" key={props.item_id}>
      <button type="button" className="addbtn">Comments</button>
      <button type="button" className="rmvbtn" onClick={removeBookItem}>Remove</button>
      <button type="button" className="editbtn">Edit</button>
    </div>
  );
};
export default addRemove;
