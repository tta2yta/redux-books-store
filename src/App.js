import { Route, Switch } from 'react-router-dom';
import './App.scss';
import BookForm from './components/book/BookForm';
import BookList from './components/book/BookList';
import NavBar from './components/NavBar';
import Categories from './redux/categories/categories';

function App() {
  return (
    <div className="App">
      <NavBar />
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
