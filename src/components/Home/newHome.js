import React from 'react';
import './Home.css';

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
/*
const Pagetwo = () => {
    return (
        <div className="pagetwo">
            <h1>How it works</h1>
            <div className='columns' style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridGap: 20 }}>
                <div>
                    <img src='./shop.png' />
                </div>
                <div>
                    <img src='./bake.png' />
                </div>
                <div>
                    <img src='./deliver.png' />
                </div>
            </div>
            <div className='columns' style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridGap: 20 }}>
                <div>
                    <p>
                        Purchase any bakery items from our Menu page
                    </p>
                </div>
                <div>
                    <p>
                        We will bake it with love in our shop
                    </p>
                </div>
                <div>
                    <p>
                        It will be delivered to you with extra care
                    </p>
                </div>
            </div>
        </div >
    )
}
**/

export default Home;