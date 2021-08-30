import { Route, Switch } from 'react-router-dom';
import './App.css';
import BookForm from './components/book/BookForm';
import BookList from './components/book/BookList';
import Categories from './redux/categories/categories';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <BookList />
          <BookForm />
        </Route>
        <Route exact path="/categories">
          <Categories />
        </Route>
      </Switch>

    </div>
  );
}

export default App;
