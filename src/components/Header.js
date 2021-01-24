import React from 'react';
import '.././styles/App.css';
import { Link } from 'react-router-dom';
import '.././styles/Header.css';

class Header extends React.Component {
    render() {
        return (
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
                                Home
                                </Link>
                        </li>
                        <li>
                            <Link to="/menu" style={{ textDecoration: 'none', color: 'black' }}>
                                Menu
                                </Link>
                        </li>
                        <li>
                            <Link to="/gallery" style={{ textDecoration: 'none', color: 'black' }}>
                                Gallery
                                </Link>
                        </li>
                        <li>
                            <Link to="/contact" style={{ textDecoration: 'none', color: 'black' }}>
                                Contact
                                </Link>
                        </li>
                        <li>
                            <Link to="/checkout" style={{ textDecoration: 'none', color: 'black' }}>
                                Checkout (${this.props.subtotal})
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Header;