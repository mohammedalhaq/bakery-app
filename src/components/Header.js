import React from 'react';
import '.././styles/App.css';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Menu from './Menu';
import Home from './Home';

class Header extends React.Component {

    render() {
        return (
            <Router>
                <div>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/menu">
                                    Menu
                                </Link>
                            </li>
                            <li>
                                <Link to="/gallery">
                                    Gallery
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </nav>

                </div>
            </Router>
        )
    }
}
/*                
                <Switch>
                    <Route path="/">
                        <Home />
                    </Route>
                    <Route path="/menu">
                        <Menu />
                    </Route>
                </Switch*/
export default Header;