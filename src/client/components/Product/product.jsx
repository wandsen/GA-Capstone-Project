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
            <div class='row'>

                <div class='three wide column'>
                    <div className={styles.subImage}><img src={currentItem.image} className='ui huge bordered image'/></div>
                </div>
                <div class='ten wide column'>
                    <h5>{currentItem.name}</h5>
                    <p>{currentItem.description}</p>
                </div>
                <div class='three wide column'>
                    <button class='ui primary button' role='button' onClick={this.addCart}>Add to Cart</button>
                </div>
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
            itemId: this.props.item.name
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

      if (this.props.item.id !== prevProps.item.id){
        this.retrievePackage(this.props.item.id)
      }
    }


    render() {
                console.log("render test", this.props.item)


        // console.log("package displayed", this.state.packages)
        // let search = [];

            let search = this.state.packages.map((item, index) => {
                // console.log(item)
                return <SubscriptionCreator addToCart={this.props.addToCart} key ={index} item={item}/>
            })


        return (
        <div>

        <div class='ui vertically divided grid'>
          <div class='ui stackable two column row'>
        <div class='column'>

                <img className={styles.productImage} src={this.props.item.image}/>
        </div>
          <div class='column'>
                <h1>{this.props.item.name}</h1>
                <p>{this.props.item.description}</p>
            <div>

                <h2>Subscription Packages</h2>
                <div class='ui celled grid'>
                {search}
                </div>

            </div>
          </div>

           </div>
        </div>
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
            itemId: "",
            displayProduct: false
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
        this.setState({itemId: id, displayProduct: true})
    }




    render() {

        let search = [];

        if (this.state.items !== undefined && this.state.displayProduct === false) {

            search =  this.state.items.map((item, index) => {
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