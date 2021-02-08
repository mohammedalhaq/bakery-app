import React from 'react';
import '.././styles/Home.css';

const Home = () => {
    return (
        <div className="mainpage">
            <Header />
            <Logo
                className='mainpagelogo'
                classNameimg='mainpagelogo2'
                img='./logo.PNG'
            />
            <Tagline />
            <Introduction />
        </div>
    )
}

const Header = () => {
    return (
        <div className='header'>
            <span className='header-title'>
                Vaughan Bakes
            </span>
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

const Tagline = () => {
    return (
        <div className='tagline'>
            <span className='taglinetext'>
                Fresh baked goods delivered to your door
            </span>
        </div>
    )
}

const Introduction = () => {
    return (
        <div className="introduction">
            <h1>HOW TO GET YOUR DELIVERY</h1>
            <div>
                <div class='row'>
                    <div class='column'>
                        <p>Some Text in Column One</p>
                    </div>
                    <div class='column'>
                        <p>Some Text in Column Two</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;