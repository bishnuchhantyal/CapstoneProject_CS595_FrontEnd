import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductList from './components/ProductList';
import Cart from "./components/cart/Cart";
import Checkout from "./components/Checkout";
import Login from './components/auth/Login';
import AddProduct from './components/admin/products/AddProduct';
import EditProduct from './components/admin/products/EditProduct';
import ListProduct from './components/admin/products/ListProduct';
import AdminNavbar from './components/admin/AdminNavbar';
import ListOrder from './components/admin/orders/ListOrder';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      roleName:''
    }
  }

  componentDidMount (){
    let usersSession = localStorage.getItem('aimsUser');
    console.log('user seession: '+usersSession)
    if (usersSession === null) {
      this.setState({roleName:'ROLE_CUSTOMER'})
    } else {
      this.setState({roleName:localStorage.getItem('roleName')})
    }
  }
 
  render (){
    console.log('roleName '+this.state.roleName)
    return (
      <BrowserRouter>
        <div className="container-fluid app">
          {(this.state.roleName === 'ROLE_ADMIN') ? <AdminNavbar /> : <Navbar />}
          <Switch>
            <Route exact path="/" component={ProductList} />
            <Route exact path="/my-cart" component={Cart} />
            <Route exact path="/checkout" component={Checkout} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/product-add" component={AddProduct} />
            <Route exact path="/product-edit" component={EditProduct} />
            <Route exact path="/product-list" component={ListProduct} />
            <Route exact path="/order-list" component={ListOrder} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
