import React from 'react';
import ".././selection.json";
import MenuItem from "./MenuItem";
import '.././styles/App.css';

class Menu extends React.Component {
    constructor(props) {
        super()
        this.state = {
            items: {},
        }
        
        this.addPrice = this.addPrice.bind(this);
    }

    componentDidMount() {
        fetch("https://gist.githubusercontent.com/mohammedalhaq/80fc63af2fdea8fb860e2f58934accff/raw/099c906e63cfae19179da6649cd27a097920ccf5/gistfile1.txt")
            .then(response => response.json())
            .then(data => {
                this.setState({
                    items: data.selection
                })
            })

    }

    addPrice = (price) => {
        this.props.parentCallback(price);
    }

    render() {
        try {
            const menuItems = this.state.items.map((item, key) =>
                <MenuItem key={key} name={item.item_name} description={item.description} price={item.price} photo={item.photo} 
                    parentCallback = {this.addPrice}/>);
            return (
                <div>
                    <header>Menu</header>
                    <div className="menu">
                        {menuItems}
                    </div>
                </div>
            );
        } catch (error) {
            return (
                <div>
                    <header>Error</header>
                </div>
            );
        }

    }
}

export default Menu;