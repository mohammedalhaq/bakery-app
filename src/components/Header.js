import React from 'react';
import '.././styles/App.css';
import { Link } from 'react-router-dom';

class Header extends React.Component {
    render() {
        return (
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
        )
    }
}

export default Header;