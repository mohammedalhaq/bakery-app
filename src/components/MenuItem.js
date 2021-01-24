import React from 'react';
import '.././styles/Menu.css';
import { useSelector, useDispatch } from 'react-redux'
import { addToCart } from '../actions';

function MenuItem(props) {
    const dispatch = useDispatch();

    return (
        <div className="item">
            <img src={props.photo}></img>
            <p className="name">{props.name}</p>
            <p className="description">{props.description}</p>
            <button onClick={() => dispatch(addToCart(props.id))} className="price">${props.price}</button>
        </div>
    );
}

export default MenuItem;