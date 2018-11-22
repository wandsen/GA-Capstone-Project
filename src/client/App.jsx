import React from 'react';
import { hot } from 'react-hot-loader';

import Cookies from 'universal-cookie'

import Counter from './components/counter/counter';
import ProductList from './components/Product/product';
import Cart from './components/Cart/cart';
import About from './components/About/about';
import CoverImage from './components/CoverImage/coverimage'
import styles from './style.scss';

class LoginOrLogout extends React.Component {
  constructor() {
    super();
    this.sendLogout = this.sendLogout.bind(this);
  }

  sendLogout(){
    console.log("sending logout")
    this.props.submitLogout()
  }

  render() {
    let loginLogoutButton = '';

    if (this.props.isLoggedIn === "true"){
        loginLogoutButton =  <a className ="item" onClick={ ()=>{this.sendLogout()} }>Logout</a>
    }else{
        console.log('displayling login', this.props.isLoggedIn)
        loginLogoutButton =  <a className='item' href="/users/login">Login</a>
    }


    return (
        <React.Fragment>
        {loginLogoutButton}
        </React.Fragment>

    );
  }
}


class App extends React.Component {
  constructor() {
    super();

    const cookies = new Cookies();

    this.state = {
      username: cookies.get('username'),
      isLoggedIn: cookies.get('loggedInStatus'),
      cartItem: [],
      content: 'Products'
    };

    this.userData = this.userData.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.removeFromCart = this.removeFromCart.bind(this);
    this.submitLogout = this.submitLogout.bind(this);
    this.contentDisplay = this.contentDisplay.bind(this);
  }

  //Set user id in nav bar
  userData(data){
    this.setState({ username: data});
  }

  loginStatus(status){
    console.log('App running login status', status)
    this.setState({ isLoggedIn: status})
  }

  submitLogout(){

    console.log("submit logout")
    const cookies = new Cookies();

    cookies.remove('loggedInStatus')
    cookies.remove('loggedIn')
    cookies.remove('username')

    this.userData('Guest')
    this.loginStatus('False')

  }

//Cart Functions
  addToCart(item){
    console.log("add item", item)
    this.setState( {cartItem: this.state.cartItem.concat( [item] )} )
  }

  removeFromCart(itemId){
    console.log("item", itemId)

    let newCart = this.state.cartItem.filter( function(item){
        return item !== itemId})

    this.setState({ cartItem: newCart})
  }

//Display Main Content

  contentDisplay(event){
    this.setState({content: event})
  }




  render() {

    let mainContent = '';

        if (this.state.content === 'Products'){
            mainContent = <ProductList addToCart={this.addToCart}/>
        }else if (this.state.content === 'Cart'){
            mainContent = <Cart item={this.state.cartItem} removeFromCart={this.removeFromCart}/>
        }else if (this.state.content === 'About'){
            mainContent = <About/>
        }


    return (
      <div>
        <h1>SubMe!</h1>


        <div>
          <div className='ui pointing secondary menu'>
            <a className='item'>
                <i aria-hidden='true' className='gamepad icon' />
            </a>
            <a className='item' value='Products' onClick ={() => {this.contentDisplay('Products')}}>Products</a>
            <a className='item' value='About' onClick ={() => {this.contentDisplay('About')}}>About</a>
            <div className='right menu'>
              <div className='item'>
                <div className='ui icon input'>
                  <input type='text' placeholder='Search Product...' />
                  <i aria-hidden='true' className='search icon' />
                </div>
              </div>
              <a className='item' value='Cart' onClick ={() => {this.contentDisplay('Cart')}}>Cart</a>
              <a className='item' href="/users/new">Register</a>
              <LoginOrLogout submitLogout={this.submitLogout} isLoggedIn={this.state.isLoggedIn}/>
              <a className='item'>{this.state.username}</a>
            </div>
          </div>
             <CoverImage/>

          <div className='ui segment'>
            {mainContent}
            <div className={styles.footerSpace}></div>
          </div>
        </div>

        <div class='ui inverted vertical footer segment'>
            <div class='ui center aligned container'>
                <div class='ui stackable inverted divided grid'>
                    <div class='eight wide column'>
                        <h4 class='ui inverted header'>GrocerSub!</h4>
                        <p>GrocerSub was founded with one ambition - to reinvent how bulk purchasing works. We package together Products at a competitive price point, without compromising on quality. By cutting out the middleman and keeping our inventory lean we can keep our costs down and extend the savings to you. </p>
                    </div>
                    <div class='four wide column'>
                        <h4 class='ui inverted header'>About Us</h4>
                        <div class='ui inverted link list'>
                            <a href='#' class="item">Our Story</a>
                            <a href='#' class="item">Careers</a>
                            <a href='#' class="item">Press and Media</a>
                            <a href='#' class="item">Contact Us</a>
                        </div>
                    </div>
                    <div class='four wide column'>
                        <h4 class='ui inverted header'>Shopping With Us</h4>
                        <div class='ui inverted link list'>
                            <a href='#' class="item">How to Buy</a>
                            <a href='#' class="item">Shipping and Delivery</a>
                            <a href='#' class="item">Privacy Policy</a>
                            <a href='#' class="item">Terms and Conditions</a>
                        </div>
                    </div>

                </div>
                <div class='ui inverted section divider'></div>
                <div><i class="orange large shopping basket icon"></i></div>
                <div class='ui horizontal inverted small divided link list'>
                    <a href='#' class="item">Site Map</a>
                    <a href='#' class="item">Contact Us</a>
                    <a href='#' class="item">Terms and Condition</a>
                    <a href='#' class="item">Privacy Policy</a>
                </div>

            </div>
        </div>

      </div>
    );
  }
}

export default hot(module)(App);
