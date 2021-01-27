import React from 'react';
import '.././styles/App.css';
import { Link } from 'react-router-dom';
import '.././styles/Header.css';
import { useSelector } from 'react-redux';

function Header() {
    const numItems = useSelector(state => state.items.cart.length);
    
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
                        <Link to="/about" style={{ textDecoration: 'none', color: 'black' }}>
                            About
                                </Link>
                    </li>
                    <li>
                        <Link to="/contact" style={{ textDecoration: 'none', color: 'black' }}>
                            Contact
                                </Link>
                    </li>
                    <li>
                        <Link to="/checkout" style={{ textDecoration: 'none', color: 'black' }}>
                            Checkout ({numItems})
                            </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Header;