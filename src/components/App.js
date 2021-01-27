import React from'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import '.././styles/App.css';
import Menu from './Menu';
import Home from "./Home";
import Footer from './Footer';
import Header from './Header';
import About from './About';
import Contact from './Contact';
import Checkout from './Checkout';

class App extends React.Component{
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
              <Menu parentCallback={this.addPrice}/>
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/checkout">
              <Checkout />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;
