import React from 'react';

// import styles from './style.scss';


//Specifc product page and data
class ProductPage extends React.Component {

    constructor(){
        super()


    this.retrievePackage = this.retrievePackage.bind(this)

    }

    retrievePackage() {

        let reactThis = this;

        function reqListener() {

            const data = JSON.parse(this.responseText);
            reactThis.setState({ items: data.rows });
        }


        var oReq = new XMLHttpRequest();
        oReq.addEventListener("load", reqListener);

        oReq.open("GET", "/subscriptions");
        oReq.send();

    }

    render() {
        return (
            <div>
            <h1>{this.props.item.name}</h1>
                {this.props.item.name}
                {this.props.item.description}
                {this.props.item.brand}
                {this.props.item.price}

            </div>

        )
    }
}


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
        console.log(id)
        this.setState({itemId: id})
    }




    render() {

        let search = [];

        if (this.state.items !== undefined) {

            search = this.state.items.map((item, index) => {
                return <CardCreator onClickRetrieveId = {this.onClickRetrieveId} key ={index} item={item}/>
            })
        }

        //search for item that user click and pass into ProductPage


        let productPage = []
        if (this.state.itemId !== ""){

        let specificItem = this.state.items.find( item => item.id === this.state.itemId );
        console.log(specificItem)

        productPage = <ProductPage item={specificItem}/>
        }


        return (
            <div>
              {this.state.itemId}

                <h1>Product Catalogue </h1>
                    <div className="ui grid stackable six cards">
                    {search}
                    </div>

                    {productPage}

            </div>
        );
    }
}

export default ProductList;