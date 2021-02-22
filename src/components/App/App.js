import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import './App.css';
import Menu from '../Menu/Menu';
import Home from "../Home/newHome";
import Footer from '.././Footer';
import Header from '../Header/Header';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Checkout from '../Checkout/Checkout';
import CheckoutForm from '../Checkout/CheckoutForm';

class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/menu">
              <Menu />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route exact path="/checkout">
              <Checkout />
            </Route>
            <Route path="/checkout/details">
              <CheckoutForm />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;
