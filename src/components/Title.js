import React from 'react';
import '.././styles/Title.css';

class Title extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <header>
                {this.props.title}
            </header>
        )
    }
}

export default Title;