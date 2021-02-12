import React from 'react';
import { useDispatch } from 'react-redux'
import { addToCart } from '../actions';
import '.././styles/MenuItem.css';

function MenuItem(props) {
    const dispatch = useDispatch();
    const menuItem = props;
    return (
        <div className="menuitem">
            <div className="card">
                <img src={props.photo} alt="bakery item" />
                <div className="box">
                    <h3 title={props.name}></h3>
                    <p>{props.description}</p>
                    <h4>${props.price.toFixed(2)}</h4>
                    <button onClick={() => dispatch(addToCart(menuItem))} >Add to cart</button>
                </div>
            </div>
        </div >
    );
}

export default MenuItem;