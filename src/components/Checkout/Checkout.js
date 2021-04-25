import React from 'react';
import { connect } from 'react-redux';
import { fetchMenu } from '../../actions/index'
import CartItem from "./CartItem";
import './Checkout.css';
import { Link } from 'react-router-dom';
import Title from '.././Title';
import { Button } from '@material-ui/core';

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
        total = 0;
        const cartItems = this.props.cart.map((item, key) => {
            total += (item.price * item.quantity)
            return (
                <CartItem key={key} id={item.id} name={item.name} description={item.description} price={item.price} photo={item.photo} quantity={item.quantity} summary={false} />
            )
        });



        if (cartItems.length > 0) {
            return (
                <div className="checkoutTotal">
                    <div className="total" style={{ float: 'right' }}>
                        <p>Subtotal  ${total.toFixed(2)}</p>
                        <p>Tax  $0.00</p>
                        <p>Delivery Fee  $0.00</p>
                        <p>Total  ${total.toFixed(2)}</p>
                        <Link to="/checkout/details" style={{ textDecoration: "none", display: "block" }}>
                            <Button className="checkout">
                                Checkout
                                    </Button>
                        </Link>
                    </div>
                    <div className="checkoutCart">
                        <Title title="Your Cart" />
                        {cartItems}
                    </div>
                </div>
            )
        } else {
            return (
                <div>
                    <div className="emptyCart" style={{ paddingBottom: "15vh" }}>
                        <Title title="Your cart is empty" />
                        <Button variant="contained" color="primary" href="/menu" style={{ width: "15%", textAlign: "center", display: "block", margin: "0 auto" }}>Browse the menu</Button>
                    </div>
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