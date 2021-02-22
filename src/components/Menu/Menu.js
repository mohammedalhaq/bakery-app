import React from 'react';
import MenuItem from "./MenuItem";
import '../App/App.css';
import { connect } from 'react-redux';
import { fetchMenu } from '../../actions/index'
import { Col, Panel } from 'react-bootstrap';
import './MenuItem.css';
import Title from '.././Title';

class Menu extends React.Component {
    componentDidMount() {
        this.props.fetchMenu();
    }

    render() {
        const menuItems = this.props.items.map((item, key) =>
            <MenuItem key={key} id={item.id} name={item.item_name} description={item.description} price={item.price} photo={item.photo} quantity={1} />);
        return (
            <div>
                <Title title="Order something from our great selection of baked goods!" />
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