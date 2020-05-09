import React, { Component } from 'react';
import {connect} from 'react-redux';
import { saveUser } from "../store/actions/userAction"

class SignUp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            fullName: '',
            email: '',
            userName: '',
            password: '',
            dob: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    saveUser = (e) => {
        e.preventDefault();
        let user = {
            fullName: this.state.fullName,
            email: this.state.email,
            userName: this.state.userName,
            password: this.state.password,
            dob: this.state.dob
        }
        this.props.saveUser(user);
        this.props.history.push('/');
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
                                        <legend>User Registration Form</legend>
                                        <div className="form-group">
                                            <label>Full Name</label>
                                            <input type="text" name="fullName" onChange={this.handleChange} className="form-control" />
                                        </div>
                                        <div className="form-group">
                                            <label>Email</label>
                                            <input type="text" name="email" onChange={this.handleChange} className="form-control" />
                                        </div>
                                        <div className="form-group">
                                            <label>Username</label>
                                            <input type="text" name="userName" onChange={this.handleChange} className="form-control" />
                                        </div>
                                        <div className="form-group">
                                            <label>Password</label>
                                            <input type="password" name="password" onChange={this.handleChange} className="form-control" />
                                        </div>
                                        <div className="form-group">
                                            <label>DOB</label>
                                            <input type="date" name="dob" onChange={this.handleChange} className="form-control" />
                                        </div>
                                        <div className="form-group">
                                            <input type="submit" value="Submit" onClick={this.saveUser} className="btn btn-success" />
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
        saveUser: (user) =>
            dispatch(saveUser(user)),
    };
};

export default connect(null, mapDispatchToProps)(SignUp);