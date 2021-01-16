import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import '.././styles/App.css';
import Menu from './Menu';
import Home from "./Home";
import Footer from './Footer';
import Header from './Header';
import Gallery from './Gallery';
import Contact from './Contact';

function App() {
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

export default App;
