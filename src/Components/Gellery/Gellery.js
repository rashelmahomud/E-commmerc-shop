import React from 'react';
import gellery from '../../images/gellery.png';
import './Gellery.css'

const Gellery = () => {
    return (
        <div className='gellery'>
            <div className='gellery-info'>
                <p className='discount'>Sale up to 70% off</p>
                <h1 className='title'>New Collection For Fall</h1>
                <p>Discover all the new arrivals of ready-to-wear collection.</p>
                <button className='gellery-btn'>SHOP NOW</button>
            </div>

            <img src={gellery} alt="" />

            
        </div>
    );
};

export default Gellery;