import React, { Component } from "react";
import Product from "./Product";
import { connect } from "react-redux";
import { addToCart } from "../store/actions/cartActions";
import { listProduct } from "../store/actions/productActions"

class ProductList extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.listProduct();
  }

  addToCart = (product) => {
    this.props.addToCart(product);
  }



  render() {
    return (
      <div className="container">
        <h2>Product List</h2>
        <br />
        <div className="row">
          {this.props.products.map(product => <Product product={product} addToCart={this.addToCart} inCart={this.props.cart.length > 0 && this.props.cart.filter(e => e.product.id === product.id).length > 0} key={product.id} />)
          }
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.products.products,
    cart: state.cart.cart
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    listProduct: () => { dispatch(listProduct()) },
    addToCart: (product) => {
      dispatch(addToCart(product));
    }
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
