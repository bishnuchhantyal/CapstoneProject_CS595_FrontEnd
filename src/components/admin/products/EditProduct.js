import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateProduct } from "../../../store/actions/productActions"

class EditProduct extends Component {

    constructor(props) {
        super(props);

        this.state = {
                id: '',
                title: '',
                description: '',
                price: '',
                image: ''
        }

    }

    handleChange = (e) => {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        });
    }

    componentDidMount (){
        let prod = this.props.location.state.product[0];
        this.setState({
            id: prod.id,
            title: prod.title,
            description: prod.description,
            price: prod.price,
            image: prod.image

        })
    }

    updateProduct = (e) => {
        e.preventDefault();
        this.props.updateProduct(this.state);
        this.props.history.push('/product-list');
    }

    render() {
        
        return (
            <div className="container">
                <div className="panel">
                    <div className="panel-default">
                        <div className="row">
                            <div className="col-md-2"></div>
                            <div className="col-md-8 jumbotron">
                                <form action="" className="form-horizontal">
                                    <fieldset>
                                        <legend>Product Edit Form</legend>
                                        <div className="form-group">
                                            <label>ID</label>
                                            <input type="text" name="id" value={this.state.id} onChange={this.handleChange} className="form-control" readOnly />
                                        </div>
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
                                            <input type="submit" value="Submit" onClick={this.updateProduct} className="btn btn-success" />
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

const mapDispatchToProps = (dispatch) => {
    return {
        updateProduct: (product) => { dispatch(updateProduct(product)) }
    }
}

export default connect(null, mapDispatchToProps)(EditProduct);