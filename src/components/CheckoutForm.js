import React from 'react';
import { connect } from 'react-redux';
import { resetCart } from '../actions/index';
import { Redirect } from 'react-router-dom';
import CartItem from './CartItem';
import '.././styles/Form.css';
import Title from './Title';

class CheckoutForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            address: "",
            country: "",
            province: "",
            city: "",
            postal: "",
            phone: "",
            complete: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        this.props.resetCart();
        this.setState({
            complete: false
        });
        return (
            <Redirect to="/" />
        )
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        const cartItems = this.props.cart.map((item, key) => {
            return (
                <CartItem key={key} id={item.id} name={item.name} description={item.description} price={item.price} photo={item.photo} quantity={item.quantity} summary={true} />
            )
        });
        if (this.state.complete == false) {
            return (
                <div >
                    <Title title="Checkout" />
                    <div style={{ marginTop: '2rem' }}>
                        <div className="summary" style={{ paddingBottom: '6rem', height: 'fitContent' }}>
                            {cartItems}
                        </div>
                        <div className="form">
                            <form onSubmit={this.handleSubmit}>
                                <label>
                                    Name
                        <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
                                </label>
                                <label>
                                    Address
                        <input type="text" name="address" value={this.state.address} onChange={this.handleChange} />
                                </label>
                                <label>
                                    Postal Code
                        <input type="text" name="postal" value={this.state.postal} onChange={this.handleChange} />
                                </label>
                                <label>
                                    Country
                        <input type="text" name="country" value={this.state.country} onChange={this.handleChange} />
                                </label>
                                <label>
                                    Province
                        <input type="text" name="province" value={this.state.province} onChange={this.handleChange} />
                                </label>
                                <label>
                                    City
                        <input type="text" name="city" value={this.state.city} onChange={this.handleChange} />
                                </label>
                                <label>
                                    Phone
                        <input type="text" name="phone" value={this.state.phone} onChange={this.handleChange} />
                                </label>
                                <input type="submit" value="Continue to billing" />
                            </form>
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div>
                    <Title title="Your order has been placed" />
                </div>
            )
        }
    }
}

const mapStateToProps = state => {
    return {
        cart: state.items.cart
    }
};


export default connect(mapStateToProps, { resetCart })(CheckoutForm);