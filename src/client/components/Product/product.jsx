import React from 'react';

import styles from './style.scss';





class SubscriptionCreator extends React.Component {

    constructor(){
        super()

        this.addCart = this.addCart.bind(this)
    }


    addCart(){
        console.log('sub adding to cart')
        console.log('this props item', this.props.item)
        this.props.addToCart(this.props.item)


    }

    render() {
        let currentItem = this.props.item

        console.log("running sub creator")

        return (
            <div>

            <img src={currentItem.image} className='ui large circular image'/>
            <h1>{currentItem.name}</h1>
            {currentItem.description}

            <button onClick={this.addCart}>Add to Cart</button>

            </div>

        )
    }
}

//Specifc product page and data
class SubscriptionPage extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            packages: [],
            itemId: this.props.item.id
        };


    this.retrievePackage = this.retrievePackage.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.componentDidUpdate = this.componentDidUpdate.bind(this);
    }

    retrievePackage(id) {
        // console.log("retrievePackage", id)

        let reactThis = this;

        function reqListener() {

            const data = JSON.parse(this.responseText);
            // console.log("subscription data", data.rows)
            reactThis.setState({ packages: data.rows });
        }


        var oReq = new XMLHttpRequest();
        oReq.addEventListener("load", reqListener);

        oReq.open("GET", "/subscriptions/" + id);
        oReq.send();

    }

    //on mount use id to call ajax
    componentDidMount() {
        // console.log("component did mount")
        this.retrievePackage(this.props.item.id)
    }


    static getDerivedStateFromProps(nextProps, prevState){
        // console.log('running get derived state from props')
        if(nextProps.item.id !== prevState.itemId) {
            // console.log('subscription changing state')
            return {itemId: nextProps.item.id}
        }else{
            return null
        }
    }

    componentDidUpdate( prevProps, prevState, snapshot ) {
      // console.log( "component did update");
      // console.log( "prevState", prevState);
      // console.log( "prevProps", prevProps);
      // console.log( "current state", this.state)
      // console.log( "current props", this.props.item)

      if (this.props.item.id !== prevProps.item.id){
        // console.log("running ajax call")
        this.retrievePackage(this.props.item.id)
      }
      // console.log( "snapshot from get snapshot before update: "+snapshot);
    }


    render() {
        // console.log("render")

        // console.log("package displayed", this.state.packages)
        // let search = [];

            let search = this.state.packages.map((item, index) => {
                // console.log(item)
                return <SubscriptionCreator addToCart={this.props.addToCart} key ={index} item={item}/>
            })


        return (
            <div>
            <h1>state item id {this.state.itemId}</h1>
            {search}
            </div>
        )
    }
}


//create product cards
class CardCreator extends React.Component {

    constructor(){
        super()
        this.passIdToProductList = this.passIdToProductList.bind(this)
    }

    passIdToProductList(id){
        this.props.onClickRetrieveId(id)

    }



    render() {

        return (
            <div onClick = {()=> {this.passIdToProductList(this.props.item.id)} }>

                <div  className='ui card'>
                  <img src={this.props.item.image} className='ui image' />
                  <div className='content'>
                    <div className='header'>{this.props.item.name}</div>
                    <div className='meta'>
                      <span className='date'>{this.props.item.brand}</span>
                    </div>
                    <div className='description'>{this.props.item.description}</div>
                  </div>
                  <div className='extra content'>
                    <a>
                      <i aria-hidden='true' className='user icon' />
                      22 Bought
                    </a>
                  </div>
                </div>
            </div>

        )
    }
}





class ProductList extends React.Component {
    constructor() {
        super();
        this.state = {
            items: [],
            itemId: ""
        };

        this.retrieveProduct = this.retrieveProduct.bind(this);
        this.onClickRetrieveId = this.onClickRetrieveId.bind(this);

    }

    //gets data from /products, returns returns an object with product data
    retrieveProduct() {

        let reactThis = this;

        function reqListener() {

            const data = JSON.parse(this.responseText);
            reactThis.setState({ items: data.rows });
        }


        var oReq = new XMLHttpRequest();
        oReq.addEventListener("load", reqListener);

        oReq.open("GET", "/products");
        oReq.send();

    }

    //when component is mounted, runs AJAX call to retrieve products
    componentDidMount() {
        this.retrieveProduct()
    }


    onClickRetrieveId(id){
        // console.log("product list state id " , id)
        this.setState({itemId: id})
    }




    render() {

        let search = [];

        if (this.state.items !== undefined) {

            search = this.state.items.map((item, index) => {
                return <CardCreator onClickRetrieveId = {this.onClickRetrieveId} key ={index} item={item}/>
            })
        }

        //search for item that user click and pass into Subscription Page


        let subscriptionPage = []
        if (this.state.itemId !== ""){

        let specificItem = this.state.items.find( item => item.id === this.state.itemId );

        subscriptionPage = <SubscriptionPage addToCart={this.props.addToCart} item={specificItem}/>
        }

        return (
            <div>

                <h1 class='ui center aligned header'>Best Sellers</h1>
                    <div className={styles.topSpace}></div>
                    <div className="ui grid stackable six cards center aligned">
                    {search}
                    </div>
                    <div className="ui grid stackable six cards">
                    {subscriptionPage}
                    </div>

            </div>
        );
    }
}

export default ProductList;