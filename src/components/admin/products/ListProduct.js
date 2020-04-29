import React, { Component } from 'react';
import { connect } from 'react-redux';
import { listProduct, deleteProduct} from "../../../store/actions/productActions"


class ListProduct extends Component {

    componentDidMount() {
        this.props.listProduct();
    }

    addProduct = () => {
        this.props.history.push('/product-add');
    }

    editProduct = (id) => {
        window.localStorage.setItem('id', id);
        this.props.history.push('/product-edit');
    }

    render() {
        return (
            <div>
                <h1>Product List</h1>
                <button className="btn btn-primary" onClick={() => this.addProduct()}>Add New Product</button>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Descriptions</th>
                            <th>Price</th>
                            <th>Image</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.products.map(product =>
                                <tr key={product.id}>
                                    <td>{product.id}</td>
                                    <td>{product.title}</td>
                                    <td>{product.description}</td>
                                    <td>{product.price}</td>
                                    <td>{product.image}</td>
                                    {<td>
                                        <button className="btn btn-primary" onClick={() => this.editProduct(product.id)}>Edit</button>
                                        <button className="btn btn-danger" onClick={() => this.props.deleteProduct(product.id)}>Delete</button>
                                    </td>}
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.product.products
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        listProduct: () => { dispatch(listProduct()) },
        deleteProduct: (id) => { dispatch(deleteProduct(id)) },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListProduct);
