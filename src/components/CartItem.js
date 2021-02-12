import React from 'react';
import '.././styles/Checkout.css';
import { removeFromCart, addOne, removeOne } from '../actions';
import { useDispatch } from 'react-redux'

function CartItem(props) {
    const dispatch = useDispatch();
    const cartItem = props;

    return (
        <div className="cartItem">
            <img className="cartImg" src={props.photo} style={{ width: '13rem', objectFit: 'cover' }}></img>
            <div className="cartContent">
                <p className="cartName" style={{ paddingTop: '0.5rem' }}>{props.name}</p>
                <button className="cartRemove" onClick={() => dispatch(removeFromCart(cartItem))} style={{ display: 'inline' }}>Remove</button>
                <p className="cartPrice">${(props.price * props.quantity).toFixed(2)}</p>
                <div style={{ display: 'inline' }}>
                    <button className='quantity' onClick={() => dispatch(addOne(cartItem))} style={{ marginRight: '0.5rem', borderRadius: '50%', border: 'none', width: '3vh', height: '3vh' }}>+</button>
                    {props.quantity}
                    <button className='quantity' onClick={() => dispatch(removeOne(cartItem))} style={{ marginLeft: '0.5rem', borderRadius: '50%', border: 'none', width: '3vh', height: '3vh' }}>-</button>
                </div>
            </div>
        </div>
    );
}

export default CartItem;