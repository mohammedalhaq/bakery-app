import React from 'react';
import { connect } from 'react-redux';
import { fetchMenu } from '../actions/index'
import CartItem from "./CartItem";
import '.././styles/Checkout.css';
import { Link } from 'react-router-dom';
import Title from './Title';

var total = 0;
class Checkout extends React.Component {
    componentDidMount() {
        this.props.fetchMenu();
        /*
                this.props.cart.map((item) =>
                    total += (item.price * item.quantity)
                );*/
    }

    componentDidUpdate() {
        total = 0;

    }

    render() {
        const cartItems = this.props.cart.map((item, key) => {
            total += (item.price * item.quantity)
            return (
                <CartItem key={key} id={item.id} name={item.name} description={item.description} price={item.price} photo={item.photo} quantity={item.quantity} />
            )
        });



        if (cartItems.length > 0) {
            return (
                <div>
                    <div className="total" style={{ float: 'right' }}>
                        <p>Subtotal  ${total.toFixed(2)}</p>
                        <p>Tax  $0.00</p>
                        <p>Delivery Fee  $0.00</p>
                        <p>Total  ${total.toFixed(2)}</p>
                        <button className="checkout">
                            <Link to="/checkout/details" style={{ textDecoration: 'none', color: 'black' }}>
                                Checkout
                                    </Link>
                        </button>
                    </div>
                    <div className="cart">
                        <Title title="Your Cart" />
                        {cartItems}
                    </div>
                </div>
            )
        } else {
            return (
                <div>
                    <p className="emptyCart">
                        <Title title="Your cart is empty" />
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