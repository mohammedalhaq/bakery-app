import React from 'react';
import MenuItem from "./MenuItem";
import '.././styles/App.css';
import { connect } from 'react-redux';
import { fetchMenu } from '../actions/index'
import { Col, Panel } from 'react-bootstrap';
import '.././styles/MenuItem.css';

class Menu extends React.Component {
    componentDidMount() {
        this.props.fetchMenu();
    }

    render() {
        const menuItems = this.props.items.map((item, key) =>
            <MenuItem key={key} id={item.id} name={item.item_name} description={item.description} price={item.price} photo={item.photo} quantity={1} />);
        return (
            <div>
                <header className="menuHeader">Order something from our great selection of baked goods!</header>
                <section>
                    <div className="menu">
                        <div className="products">
                            {menuItems}

                        </div>
                    </div>
                </section>

            </div >
        );
    }
}

const mapStateToProps = state => ({
    items: state.items.menu
})

export default connect(mapStateToProps, { fetchMenu })(Menu);