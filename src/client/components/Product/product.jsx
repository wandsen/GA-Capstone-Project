import React from 'react';

// import styles from './style.scss';




class ProductList extends React.Component {
  constructor() {
    super();
    this.state = {
      items: '',
    };
  }


  render() {


    return (
      <div>
        <button className="ui button">
            <a href="/users/new">Register</a>
        </button>

        <button>
            <a href="/users/login">Log In</a>
        </button>

        <p>{this.state.items}</p>
      </div>
    );
  }
}

export default ProductList;
