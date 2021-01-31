import React from 'react';
import '.././styles/Checkout.css';
import { removeFromCart, addOne, removeOne } from '../actions';
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
                <div style={{display: 'inline'}}>
                    <p>Quantity: {props.quantity}</p>
                    <button onClick={() => dispatch(addOne(cartItem))}>Add</button>
                    <button onClick={() => dispatch(removeOne(cartItem))}>Remove</button>
                </div>
                <p className="cartPrice">${props.price * props.quantity}</p>
            </div>
        </div>
    );
}

export default CartItem;