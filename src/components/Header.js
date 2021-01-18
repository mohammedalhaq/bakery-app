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
                            <Link to="/" style={{ textDecoration: 'none' }}>
                                Home
                                </Link>
                        </li>
                        <li>
                            <Link to="/menu" style={{ textDecoration: 'none' }}>
                                Menu
                                </Link>
                        </li>
                        <li>
                            <Link to="/gallery" style={{ textDecoration: 'none' }}>
                                Gallery
                                </Link>
                        </li>
                        <li>
                            <Link to="/contact" style={{ textDecoration: 'none' }}>
                                Contact
                                </Link>
                        </li>
                        <li>
                            Checkout {this.props.subtotal}
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Header;