import React from 'react';
import '.././styles/Menu.css';

class MenuItem extends React.Component {
    render() {
        return (
            <div className="item">
                <img src={this.props.photo}></img>
                <p className="name">{this.props.name}</p>
                <p className="description">{this.props.description}</p>
                <p className="price">${this.props.price}</p>
            </div>
        );
    }
}

export default MenuItem;