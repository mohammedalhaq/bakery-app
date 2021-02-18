import React from 'react';
import Title from './Title';
import '.././styles/About.css';

function About() {
    return (
        <div>
            <Title title="About" />
            <div className='columns' style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gridGap: 20 }}>
                <div>
                    <img className="image" src='owner.jpg' />
                </div>
                <div className='abouttext'>
                    <p>Bakery Bazaar is a sweet (and occasionally savory) shop that’s been baking homemade treats with love and care, shaking up the dessert scene since 2000. Bon Food magazine called us “one of the most flavourful bakeries in the country.” But you can literally just call us Bakery Bazaar. We’re not big on feeding the hype beast. But we’re super into feeding our flavorful treats to those who crave the traditional and familiar.</p>
                </div>
            </div>

        </div>
    )
}


export default About;