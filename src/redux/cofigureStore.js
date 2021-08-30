import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import bookReducer from './book/reducer/bookReducer';

const reducer = combineReducers({
  books: bookReducer,
});

const store = createStore(
  reducer,
  applyMiddleware(logger),
);

export default store;
