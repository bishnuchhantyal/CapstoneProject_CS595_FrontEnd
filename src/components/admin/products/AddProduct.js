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
            file: '',
        }

    }

    handleChange = (event) => {
        
        const target = event.target;
        const value = target.type === 'file' ? event.target.files[0] : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
       
    }

    saveProduct = (e) => {
        e.preventDefault();

        let product = {
            title: this.state.title,
            description: this.state.description,
            price: this.state.price,
            file:this.state.file
        }
       this.props.saveProduct(product);
       this.props.history.push('/product-list');
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
                                        <input type="text" name="title"  onChange={this.handleChange} className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <label>Description</label>
                                        <input type="text" name="description"  onChange={this.handleChange} className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <label>Price</label>
                                        <input type="number" name="price"  onChange={this.handleChange} className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <label>Image</label>
                                        <input type="file" name="file"  onChange={this.handleChange} className="form-control" />
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