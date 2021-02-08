import { faRProject } from '@fortawesome/free-brands-svg-icons';
import React from 'react';
import { useSelector } from 'react-redux';
import { connect } from 'react-redux';
import { resetCart } from '../actions/index';
import { Redirect } from 'react-router-dom';

class CheckoutForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            address: "",
            country: "",
            province: "",
            city: "",
            postal: ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        this.props.resetCart();
        <Redirect to="/" />
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        return (
            <div>
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
                        <input type="submit" value="Continue to billing" />
                    </form>
                </div>
                <div className="summary">

                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    cart: state.cart
});


export default connect(mapStateToProps, { resetCart })(CheckoutForm);