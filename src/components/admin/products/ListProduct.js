import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { listProduct } from "../../../store/actions/productActions"


class ListProduct extends Component {
    render() {
        console.log('props is: '+this.props.products)
        return (
            <div>
                <h1>Product List</h1>
            </div>
        )
    }
}

const mapStateToProps = (state) =>{

    console.log('state.product '+JSON.stringify(state.product.products.params));
    return {
      products: state.product.products.params
    }
}

export default connect(mapStateToProps)(ListProduct);
