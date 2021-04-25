import React from 'react';

class Title extends React.Component {
    constructor(props) {
        super(props)
    }


    render() {
        const header = {
            textAlign: 'center',
            fontSize: '1.5rem',
            paddingTop: '2rem',
            textTransform: 'uppercase',
            fontFamily: 'Rozanova'
        }
    
        return (
            <div>
                <header style={header}>
                    {this.props.title}
                </header>
                <hr style={{width: '90%'}}/>
            </div>
        )
    }
}

export default Title;