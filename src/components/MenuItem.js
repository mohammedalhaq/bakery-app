import React from 'react';
import '.././styles/Menu.css';
import { useSelector, useDispatch } from 'react-redux'
import { addToCart } from '../actions';

function MenuItem(props) {
    const dispatch = useDispatch();
    const menuItem = props;

    return (
        <div className="menuItem">
            <img className="menuImg" src={props.photo}></img>
            <p className="menuName">{props.name}</p>
            <p className="menuDesc">{props.description}</p>
            <button onClick={() => dispatch(addToCart(menuItem))} className="price">${props.price}</button>
        </div>
    );
}

export default MenuItem;