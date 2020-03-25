import React, { Component } from "react";
import { isAuthenticated, getCartProducts, pay } from "../services/ApiService";
import {  Redirect, Link } from 'react-router-dom';

class Checkout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      total: 0
    };
  }

  componentDidMount() {
    // let cart = localStorage.getItem("cart");
    // if (!cart) return;
    getCartProducts().then(products => {
        console.log('products: '+products)
      let total = 0;
      for (var i = 0; i < products.length; i++) {
        total += products[i].price * products[i].amount;
      }
      this.setState({ products, total });
    });
  }

  pay = () => pay().then(data => alert(data)).catch(err => console.log(err));

  render () {
      if(!isAuthenticated()) return (<Redirect to="/login"/>);
      const { products, total } = this.state;
      return (
        <div className=" container">
        <h3 className="card-title">Checkout</h3><hr/>
        { products.map((product, index) => 
            <div key={index}>
            <p>{product.title} <small> (quantity: {product.amount})</small>
               <span className="float-right text-primary">${product.amount * product.price}
            </span></p><hr/>
            </div>
        )} <hr/>
        { products.length ? 
        <div><h4><small>Total Amount:</small><span className="float-right text-primary">
              ${total}</span></h4><hr/></div>: ''}
        { !products.length ? <h3 className="text-warning">No item on the cart</h3>: <button className="btn btn-success float-right" 
              onClick={this.pay}>Pay</button>}
        <Link to="/"><button className="btn btn-danger float-right" 
          style={{ marginRight: "10px" }}>Cancel</button></Link><br/><br/><br/>
      </div>
      );
  }
}

export default Checkout;
