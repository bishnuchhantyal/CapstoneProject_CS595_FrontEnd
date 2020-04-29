import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { logout } from '../../store/actions/authAction'

class AdminNavbar extends Component {

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-inverse bg-dark">
                <NavLink className="navbar-brand" to="/">Shopping cart</NavLink>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="nav navbar-nav navbar-right">
                        <li className="nav-item">
                            <NavLink to="/product-list">Product</NavLink>
                        </li>
                        <li><NavLink to="/"
                            onClick={() => logout()}>Logout</NavLink></li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default AdminNavbar;