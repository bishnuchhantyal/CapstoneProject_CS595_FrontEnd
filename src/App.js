import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductList from './components/ProductList';
import Cart from "./components/cart/Cart";
import Checkout from "./components/Checkout";
import Login from './components/auth/Login';
import AddProduct from './components/admin/products/AddProduct';
import ListProduct from './components/admin/products/ListProduct';
import AdminNavbar from './components/admin/AdminNavbar';

function App() {
  let usersSession = localStorage.getItem('aimsUser');
  let roleName;
  if (usersSession === null) {
    roleName = 'ROLE_CUSTOMER';
  } else {
    roleName = localStorage.getItem('roleName');
  }
  return (
    <BrowserRouter>
      <div className="container-fluid app">
        {(roleName === 'ROLE_ADMIN') ? <AdminNavbar /> : <Navbar />}
        <Switch>
          <Route exact path="/" component={ProductList} />
          <Route exact path="/my-cart" component={Cart} />
          <Route exact path="/checkout" component={Checkout} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/product" component={AddProduct} />
          <Route exact path="/product-list" component={ListProduct} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
