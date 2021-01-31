import React from 'react';
import { useSelector } from 'react-redux';
import { connect } from 'react-redux';
import { fetchMenu } from '../actions/index'
import CartItem from "./CartItem";
import '.././styles/Checkout.css';
import { Link } from 'react-router-dom';
import Title from './Title';

var total = 0;
class Checkout extends React.Component {
    constructor(props) {
        super()

    }

    componentDidMount() {

        this.props.fetchMenu();
    }


    render() {
        const cartItems = this.props.cart.map((item, key) =>
            <CartItem key={key} id={item.id} name={item.name} description={item.description} price={item.price} photo={item.photo} quantity={item.quantity} />
        );

        this.props.cart.map((item) =>
            total += (item.price/3 * item.quantity)
        );

        if (cartItems.length > 0) {
            return (
                <div className="cart">
                    <Title title="Your Cart" />
                    {cartItems}
                    <div style={{ float: 'right' }}>
                        <p>Subtotal  ${total}</p>
                        <p>GST/HST  $0.00</p>
                        <p>Delivery Fee  $0.00</p>
                        <button>
                            <Link to="/checkout/details" style={{ textDecoration: 'none', color: 'black' }}>
                                Checkout
                        </Link>
                        </button>
                    </div>
                </div>
            )
        } else {
            return (
                <div>
                    <p>
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