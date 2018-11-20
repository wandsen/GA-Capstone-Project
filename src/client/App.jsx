import React from 'react';
import { hot } from 'react-hot-loader';

import Cookies from 'universal-cookie'

import Counter from './components/counter/counter';
import ProductList from './components/Product/product';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      username: ''
    };

    this.userData = this.userData.bind(this);


  }

  userData(data){
    this.setState({ username: data});
  }

  componentDidMount() {
    const cookies = new Cookies();

    let currentUser = cookies.get('username')
    this.userData(currentUser)
  }


  render() {

    return (
      <div>
        <h1>SubMe!</h1>

        <p>Welcome {this.state.username}</p>

        <button className="ui button">
            <a href="/users/new">Register</a>
        </button>

        <button className="ui button">
            <a href="/users/login">Log In</a>
        </button>

        <form action="/users/logout" method="post">
          <input className="ui button" type="submit" value="logout"/>
        </form>

        <ProductList />
      </div>
    );
  }
}

export default hot(module)(App);
