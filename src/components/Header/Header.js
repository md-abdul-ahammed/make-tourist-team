import React from 'react';
import './Header.css'
// header-area-add-here
const Header = () => {
    return (
        <div className='primary-bg-color text-center p-3'>
            <h1>Make Tourist Team</h1>
            <p>I have plan for travelling all over the world. So need some partner.</p>
            <h1>Minimum Budget For Next Trip: <span className='fw-bold text-warning'><i className="fas fa-fighter-jet me-2 ms-3"></i>$1500</span></h1>
        </div>
    );
};

export default Header;