import React from 'react';
import '.././styles/Checkout.css';
import { removeFromCart, addOne, removeOne } from '../actions';
import { useSelector, useDispatch } from 'react-redux'

function CartItem(props) {
    const dispatch = useDispatch();
    const cartItem = props;

    return (
        <div className="cartItem">
            <img className="cartImg" src={props.photo} style={{ width: '13rem', objectFit: 'cover' }}></img>
            <div className="cartContent">
                <button onClick={() => dispatch(removeFromCart(cartItem))} style={{ margin: '0.5rem', float: 'right' }}>X</button>
                <p className="cartName" style={{ paddingTop: '0.5rem' }}>{props.name}</p>
                <p className="cartDesc">{props.description}</p>
                <div style={{ display: 'inline' }}>
                    <button onClick={() => dispatch(addOne(cartItem))} style={{ marginRight: '0.5rem' }}>+</button>
                    {props.quantity}
                    <button onClick={() => dispatch(removeOne(cartItem))} style={{ marginLeft: '0.5rem' }}>-</button>
                </div>
                <p className="cartPrice">${props.price * props.quantity}</p>
            </div>
        </div>
    );
}

export default CartItem;