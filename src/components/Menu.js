import React from 'react';
import MenuItem from "./MenuItem";
import '.././styles/App.css';
import { connect } from 'react-redux';
import { fetchMenu } from '../actions/index'

class Menu extends React.Component {
    componentDidMount() {
        this.props.fetchMenu();
    }

    render() {
        const menuItems = this.props.items.map((item, key) =>
            <MenuItem key={key} id={item.id} name={item.item_name} description={item.description} price={item.price} photo={item.photo} />);
        return (
            <div>
                <header>Menu</header>
                <div className="menu">
                    {menuItems}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    items: state.items.menu
})

export default connect(mapStateToProps, { fetchMenu })(Menu);