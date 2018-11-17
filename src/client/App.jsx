import React from 'react';
import { hot } from 'react-hot-loader';

import Counter from './components/counter/counter';
import ProductList from './components/Product/product';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      message: 'hello',
    };
  }

  render() {
    return (
      <div>
        <h1>SubMe!</h1>
        <ProductList />
        Welcome.
        <Counter message={this.state.message} />
      </div>
    );
  }
}

export default hot(module)(App);
