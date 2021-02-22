import React from 'react';
import '../App/App.css';
import { Link } from 'react-router-dom';
import './Header.css';
import { useSelector } from 'react-redux';

function Header() {
    const numItems = useSelector(state => state.items.cart.length);

    return (
        <div className="headerMain">
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
                    <li style={{float: "right", marginTop: "-2rem"}}>
                        <Link to="/checkout" style={{ textDecoration: 'none', color: 'black' }}>
                            Your Cart ({numItems})
                            </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Header;