import React from 'react';
import '.././styles/Menu.css';

class MenuItem extends React.Component {
    constructor(props){
        super(props)
        
        this.addPrice = this.addPrice.bind(this);
    }

    addPrice(){
        this.props.parentCallback(this.props.price);
    }

    render() {
        return (
            <div className="item">
                <img src={this.props.photo}></img>
                <p className="name">{this.props.name}</p>
                <p className="description">{this.props.description}</p>
                <button onClick={this.addPrice} className="price">${this.props.price}</button>
            </div>
        );
    }
}

export default MenuItem;