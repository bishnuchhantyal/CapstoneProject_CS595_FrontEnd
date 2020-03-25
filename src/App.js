import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductList from './components/ProductList';
import Cart from "./components/cart/Cart";
import Checkout from "./components/Checkout";
import Login from './components/Login';
import { isAuthenticated } from "./services/ApiService";

function App() {
  return (
    <BrowserRouter>
      <div className="container-fluid app">
        <Navbar />
        <Switch>
          <Route exact path="/" component={ProductList} />
          <Route exact path="/my-cart" component={Cart} />
          <Route exact path="/checkout" component={Checkout} />
          { (!isAuthenticated()) ? <Route exact path="/login" component={Login} /> : '' }
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
