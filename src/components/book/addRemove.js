const addRemove = (props) => (
  <div className="crudbtn" key={props.item_id}>
    <button type="button" className="addbtn">Comments</button>
    <button type="button" className="rmvbtn">Remove</button>
    <button type="button" className="editbtn">Edit</button>
  </div>
);
export default addRemove;
