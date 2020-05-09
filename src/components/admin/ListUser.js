import React, { Component } from 'react';
import { connect } from 'react-redux';
import { listUser, deleteUser} from "../../store/actions/userAction"


class ListUser extends Component {

    componentDidMount() {
        this.props.listUser();
    }

    addUser = () => {
        this.props.history.push('/sign-up');
    }

    editUser = (id) => {
    //   let p=  this.props.products.filter(product =>{
    //          return product.id === id;
    //     })
    //     this.props.history.push('/product-edit', {product: p});
    }

    render() {
        return (
            <div>
                <h1>User List</h1>
                <button className="btn btn-primary" onClick={() => this.addUser()}>Add New User</button>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Full Name</th>
                            <th>Username</th>
                            <th>Password</th>
                            <th>Email</th>
                            <th>DOB</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.users.map(user =>
                                <tr key={user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.fullName}</td>
                                    <td>{user.userName}</td>
                                    <td>{user.password}</td>
                                    <td>{user.email}</td>
                                    <td>{user.dob}</td>
                                    {<td>
                                        <button className="btn btn-primary" onClick={() => this.editUser(user.id)}>Edit</button>
                                        <button className="btn btn-danger" onClick={() => this.props.deleteUser(user.id)}>Delete</button>
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
    console.log(JSON.stringify(state))
    return {
        users: state.user.users,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        listUser: () => { dispatch(listUser()) },
        deleteUser: (id) => { dispatch(deleteUser(id)) },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListUser);
