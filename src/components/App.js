import React from'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import '.././styles/App.css';
import Menu from './Menu';
import Home from "./Home";
import Footer from './Footer';
import Header from './Header';
import Gallery from './Gallery';
import Contact from './Contact';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      subtotal: 0
    }
  }

  addPrice = (price) => {
    this.setState({subtotal: this.state.subtotal+price})
  }

  render() {
    return (
      <div>
        <Router>
          <Header subtotal={this.state.subtotal}/>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/menu">
              <Menu parentCallback={this.addPrice}/>
            </Route>
            <Route path="/gallery">
              <Gallery />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </div>
    );  
  }
}

export default App;
