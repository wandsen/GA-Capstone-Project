import React from 'react';
import { hot } from 'react-hot-loader';

import Cookies from 'universal-cookie'

import Counter from './components/counter/counter';
import ProductList from './components/Product/product';
import Cart from './components/Cart/cart';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      username: '',
      cartItem: []
    };

    this.userData = this.userData.bind(this);
    this.addToCart = this.addToCart.bind(this);

  }

  //Set user id in nav bar
  userData(data){
    this.setState({ username: data});
  }

  componentDidMount() {
    const cookies = new Cookies();

    let currentUser = cookies.get('username')
    this.userData(currentUser)
  }


  addToCart(item){
    console.log("App add to cart", item)
    this.setState( {cartItem: this.state.cartItem.concat( [item] )} )
  }


  render() {
    console.log('App render cart item', this.state.cartItem)

    return (
      <div>
        <h1>Welcome {this.state.username}</h1>
        <h1>SubMe!</h1>



        <button className="ui button">
            <a href="/users/new">Register</a>
        </button>

        <button className="ui button">
            <a href="/users/login">Log In</a>
        </button>

        <Cart item={this.state.cartItem}/>

        <form action="/users/logout" method="post">
          <input className="ui button" type="submit" value="logout"/>
        </form>

        <ProductList addToCart={this.addToCart}/>
      </div>
    );
  }
}

export default hot(module)(App);
