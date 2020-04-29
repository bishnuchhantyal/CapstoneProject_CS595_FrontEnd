import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../../store/actions/authAction';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }

    }

    handleChange = e => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();

        if (localStorage.getItem('aimsUser') !== null) {
            localStorage.clear();
        }
        const { username, password } = this.state;
        this.props.login(username, password);

        // Clear State
        this.setState({
            username: '',
            password: ''
        });

    }


    render() {
        return (
            <div className="container">
                <div className="panel">
                    <div className="panel-default">
                        <div className="row">
                            <div className="col-md-2"></div>
                            <div className="col-md-8">
                                <form onSubmit={this.handleSubmit} className="form-horizontal">
                                    <div className="form-group">
                                        <label htmlFor="username">Username</label>
                                        <input type="text" className="form-control" id="username" placeholder="Enter username" onChange={this.handleChange} autoComplete='off' />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password">Password</label>
                                        <input type="password" className="form-control" id="password" placeholder="Password" onChange={this.handleChange} autoComplete="off" />
                                    </div>
                                    <div className="form-group">
                                        <button type="submit" className="btn btn-success"><i className="fa fa-snipper"></i>Sign In</button>
                                    </div>

                                </form>
                            </div>
                            <div className="col-md-2"></div>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        login: (username, password) => { dispatch(login(username, password)) }
    };
}
export default connect(null, mapDispatchToProps)(Login);
