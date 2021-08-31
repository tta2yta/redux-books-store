const initialState = [];

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_BOOK':
      return [...state, action.payLoad];
    case 'REMOVE_BOOK':
      return state.filter((item) => item.item_id !== action.payLoad);
    case 'FETCH_BOOKS_API':
      return { ...state, books: action.payLoad };
    default:
      return state;
  }
};

export default bookReducer;
