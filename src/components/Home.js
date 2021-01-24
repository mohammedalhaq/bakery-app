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

const Tagline = (props) => {
    return (
        <div className='tagline'>
            <span className='taglinetext'>
                Fresh baked goods delivered to your door
            </span>
        </div>
    )
}

export default Home;