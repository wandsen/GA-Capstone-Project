import React from 'react';


class CartList extends React.Component {

    constructor(props){
        super(props)

        this.removeItem = this.removeItem.bind(this);
    }

    removeItem(event){
        console.log('removing item in cartlist', event)
        this.props.removeFromCart(event)
    }


    render() {
        let currentItem = this.props.item

        return (
              <div role='listitem' class='item'>
                <div class='right floated content'>
                  <button value={currentItem.id} onClick={ () => {this.removeItem(currentItem)} }  class='ui button' role='button'>
                    Remove
                  </button>
                </div>
                <img src={currentItem.image} class='ui avatar image' />
                <div class='content'>{currentItem.name}: {currentItem.description}</div>
              </div>

        )
    }
}


class Cart extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            products: this.props.item
        };
    }

    render() {

        let cartList = this.props.item.map((item, index)=>{
            return <CartList key={index} item={item} removeFromCart={this.props.removeFromCart} />
        })

        return (
            <div>
            <h1>Cart</h1>
                <div role='list' class='ui divided middle aligned list'>
                {cartList}
                </div>
            </div>

        )
    }
}

export default Cart;