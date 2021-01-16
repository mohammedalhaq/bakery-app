import React from 'react';
import ".././selection.json";
import MenuItem from "./MenuItem";
import Header from "./Header";

class Menu extends React.Component {
    constructor() {
        super()
        this.state = {
            items: {}
        }
    }

    componentDidMount() {
        fetch("https://gist.githubusercontent.com/mohammedalhaq/80fc63af2fdea8fb860e2f58934accff/raw/099c906e63cfae19179da6649cd27a097920ccf5/gistfile1.txt")
            .then(response => response.json())
            .then(data => {
                console.log(data);
                this.setState({
                    items: data.selection
                })
            })

    }

    //https://stackoverflow.com/questions/22876978/loop-inside-react-jsx
    render() {
        try {
            const menuItems = this.state.items.map((item, key) =>
            <MenuItem key={key} name={item.item_name} description={item.description} price={item.price} photo={item.photo} />);
            return (
                <div>
                    {menuItems}
                </div>
            );
        } catch (error) {
            return (
                <div>
                </div>
            );
        }
  
    }
}

export default Menu;