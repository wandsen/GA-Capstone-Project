import React from 'react';

// import styles from './style.scss';


class CardCreator extends React.Component{
    render(){
        return(
            <div>

                <div className='ui card'>
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
      items: []
    };

    this.retrieveProduct = this.retrieveProduct.bind(this);
    // this.searchWalmart = this.searchWalmart.bind(this)

  }


  // retrieveProduct(){
  //   var reactThis = this;

  //   fetch('/products').then(function(response){
  //       console.log("this", this)

  //       return response;
  //   })
  //   .catch(function(error){
  //       console.log(error)
  //   });

  // }

    retrieveProduct() {

        var reactThis = this;

        function reqListener() {

            const data = JSON.parse(this.responseText);
            reactThis.setState({ items: data.rows });
        }


        var oReq = new XMLHttpRequest();
        oReq.addEventListener("load", reqListener);

        oReq.open("GET", "/products");
        oReq.send();

    }

    componentDidMount() {
      this.retrieveProduct()
    }


  render() {

    let search = [];

        if (this.state.items !== undefined){

            search = this.state.items.map( (item , index)=> {
                        return <CardCreator key ={index} item={item}/>
            })
        }



    return (
      <div>
      {this.state.items.image}




        <h1>Product Catalogue </h1>
            <div class="ui six cards">
            {search}
            </div>
      </div>
    );
  }
}

export default ProductList;
