import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addCarts } from "../store/actions/cartActions"

class Checkout extends Component {

  constructor(props) {
    super(props);
    this.state = {
      products: [],
      total: 0
    };
  }

  componentDidMount() {
    let products = this.props.location.state.products; 
    let total = 0;
    products.map( prod =>{
      console.log('prod is: '+JSON.stringify(prod));
      total += prod.product.price * prod.quantity;
    })
    this.setState({ products, total });
    
  }

  pay = () => {
    console.log(this.state);
    this.props.addCarts(this.state);
    alert('payemnt success');
  };

  render() {
    const { products, total } = this.state;
    return (
      <div className=" container">
        <h3 className="card-title">Checkout</h3><hr />
        {products.map((p) =>
          <div key={p.product.id}>
            <p>{p.product.title} <small> (quantity: {p.quantity})</small>
              <span className="float-right text-primary">${p.quantity * p.product.price}
              </span></p><hr />
          </div>
        )} <hr />
        {products.length ?
          <div><h4><small>Total Amount:</small><span className="float-right text-primary">
            ${total}</span></h4><hr /></div> : ''}
        {!products.length ? <h3 className="text-warning">No item on the cart</h3> : <button className="btn btn-success float-right"
          onClick={this.pay}>Pay</button>}
        <Link to="/"><button className="btn btn-danger float-right"
          style={{ marginRight: "10px" }}>Cancel</button></Link><br /><br /><br />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) =>{

  return {
    addCarts: (products)=>{ dispatch(addCarts(products))}
  }
}



export default connect(null, mapDispatchToProps) (Checkout);
