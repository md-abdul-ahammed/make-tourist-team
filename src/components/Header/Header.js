import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='header-area text-center p-3'>
            <h1>Make Tourist Team</h1>
            <p>I have plan for travelling all over the world. So need some partner.</p>
            <h1>Minimum Budget for tour: <span className='fw-bold'>$2000</span></h1>
        </div>
    );
};

export default Header;