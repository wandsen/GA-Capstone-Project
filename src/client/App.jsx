import React from 'react';
import { hot } from 'react-hot-loader';

import Counter from './components/counter/counter';
import ProductList from './components/Product/product';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      message: '',
    };

  }

  render() {
    return (
      <div>
        <h1>SubMe!</h1>

        <button className="ui button">
            <a href="/users/new">Register</a>
        </button>

        <button>
            <a href="/users/login">Log In</a>
        </button>

        <form action="/users/logout" method="post">
          <input type="submit" value="logout"/>
        </form>

        <ProductList />
      </div>
    );
  }
}

export default hot(module)(App);
