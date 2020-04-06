import React, { Component } from 'react';
import {connect} from 'react-redux';
import { saveProduct } from "../../../store/actions/productActions"

class AddProduct extends Component {

    constructor(props){
        super(props);

        this.state = {
            title: '',
            description: '',
            price: '',
            image: '',
        }

    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    saveProduct = (e) => {
        e.preventDefault();

        let product = {
            title: this.state.title,
            description: this.state.description,
            price: this.state.price,
            image: this.state.image,
        }

       this.props.saveProduct(product);
    }

    render () {
        return (
            <div className="container">
                <div className="panel panel-default">
                    <div className="panel-body">
                        <div className="row jumbotron">
                            <div className="col-md-2"></div>
                            <div className="col-md-6">
                                <form className="form-horizontal">
                                <fieldset>
                                    <legend>Product Form</legend>
                                    <div className="form-group">
                                        <label>Title</label>
                                        <input type="text" name="title" value={this.state.title} onChange={this.handleChange} className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <label>Description</label>
                                        <input type="text" name="description" value={this.state.description} onChange={this.handleChange} className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <label>Price</label>
                                        <input type="number" name="price" value={this.state.price} onChange={this.handleChange} className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <label>Image</label>
                                        <input type="text" name="image" value={this.state.image} onChange={this.handleChange} className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <input type="submit" value="Submit" onClick={this.saveProduct} className="btn btn-success" />
                                    </div>
                                    </fieldset>
                                </form>
                            </div>
                            <div className="col-md-2"></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
      saveProduct: (product) =>
        dispatch(saveProduct(product)),
    };
  };
  
  export default connect(null, mapDispatchToProps)(AddProduct);