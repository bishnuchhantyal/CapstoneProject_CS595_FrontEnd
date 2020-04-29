import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateProduct, getProductById } from "../../../store/actions/productActions"

class EditProduct extends Component {

    constructor(props) {
        super(props);

        this.state = {
            id: '',
            title: '',
            description: '',
            price: '',
            image: '',
        }

    }
    componentDidMount() {
        this.getProductById();
    }

    getProductById = () => {

        getProductById(window.localStorage.getItem('id'))
            .then(p => {
                let product = p.data.params.product;
                this.setState({
                    id: product.id,
                    title: product.title,
                    description: product.description,
                    price: product.price,
                    image: product.image, 
                })
            }).catch((error) => {
                console.log("AXIOS ERROR: ", error);
            })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    updateProduct = (e) => {
        e.preventDefault();

        let product = {
            id: this.state.id,
            title: this.state.title,
            description: this.state.description,
            price: this.state.price,
            image: this.state.image,
        }
        this.props.updateProduct(product);
        this.props.history.push('/product-list');
    }

    render() {
        return (
            <div className="container">
                <div className="panel panel-default">
                    <div className="panel-body">
                        <div className="row jumbotron">
                            <div className="col-md-2"></div>
                            <div className="col-md-6">
                                <form className="form-horizontal">
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
        updateProduct: (product) => { dispatch(updateProduct(product)) },
    }
}

export default connect(null, mapDispatchToProps)(EditProduct);