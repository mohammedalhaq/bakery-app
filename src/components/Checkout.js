import React from 'react';
import { useSelector } from 'react-redux';
import { connect } from 'react-redux';
import { fetchMenu } from '../actions/index'
import CartItem from "./CartItem";
import '.././styles/Checkout.css';

class Checkout extends React.Component {
    constructor(props) {
        super()

        this.state = {
            total: 0
        }
    }

    componentDidMount() {
        this.props.fetchMenu();
    }
    
    render() {
        const cartItems = this.props.cart.map((item, key) =>
            <CartItem key={key} id={item.id} name={item.name} description={item.description} price={item.price} photo={item.photo} quantity={item.quantity}/>
        );

        this.props.cart.map((item) =>
            this.state.total += item.price
        );

        if (cartItems.length > 0) {
            return (
                <div className="cart">
                    <header>Your Cart</header>
                    <p>Subtotal  ${this.state.total}</p>
                    <button style={{ float: 'right' }}>Checkout</button>
                    {cartItems}
                </div>
            )
        } else {
            return (
                <div>
                    <p>
                        Your cart is empty
                    </p>
                </div>
            )
        }
    }
}

const mapStateToProps = state => {
    return {
        items: state.items.menu,
        cart: state.items.cart
    }
}

export default connect(mapStateToProps, { fetchMenu })(Checkout);