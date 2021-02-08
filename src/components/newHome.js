import React from 'react';
import '.././styles/Home.css';

const Home = () => {
    return (
        <div className="mainpage">
            <Introduction />
            {/* <Pagetwo /> */}
        </div>
    )
}

const Logo = (props) => {
    return (
        <div className={props.className} >
            <div className="small-div">
                <i className={props.className}></i>
                <img className={props.classNameimg} src={props.img} alt=''>
                </img>
            </div>
        </div>
    )
}

const Introduction = () => {
    return (
        <div className="introduction">
            <div className="row">
                <div className="column">
                    <div className="columnLeft">
                        <Logo
                            classNameimg='mainpagelogo'
                            img='./logo.PNG'
                        />
                    </div>
                </div>
                <div className="column">
                    <div className="columnRight">
                        <h2>Bakery Bazaar</h2>
                        <h2>Bakery Bazaar</h2>
                        <h2>Bakery Bazaar</h2>
                        <h2>Bakery Bazaar</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

const Pagetwo = () => {
    return (
        <div>
            <h1>How it works</h1>
        </div>
    )
}

export default Home;