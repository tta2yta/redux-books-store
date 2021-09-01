const initialState = [];

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_BOOK':
      return [...state,
         {...action.payLoad, progress:Math.floor(Math.random * 100)}];
    case 'REMOVE_BOOK':
      return state.filter((item) => item.item_id !== action.payLoad);
    case 'FETCH_BOOKS_API':
      return action.payLoad;
    default:
      return state;
  }
};

export default bookReducer;
