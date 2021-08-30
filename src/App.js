import { Route, Switch } from 'react-router-dom';
import './App.css';
import BookList from './components/book/BookList';
import Categories from './redux/categories/categories';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <BookList />
        </Route>
        <Route exact path="/categories">
          <Categories />
        </Route>
      </Switch>

    </div>
  );
}

export default App;
