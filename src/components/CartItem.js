import React from 'react';
import '.././styles/Checkout.css';
import { removeFromCart } from '../actions';
import { useSelector, useDispatch } from 'react-redux'

function CartItem(props) {
    const dispatch = useDispatch();
    const cartItem = props;

    return (
        <div className="cartItem">
            <img className="cartImg" src={props.photo}></img>
            <div className="cartContent">
                <button onClick={() => dispatch(removeFromCart(cartItem))} style={{ float: 'right' }}>Remove Item</button>
                <p className="cartName">{props.name}</p>
                <p className="cartDesc">{props.description}</p>
                <p className="cartPrice">${props.price}</p>
            </div>
        </div>
    );
}

export default CartItem;