import React from 'react';
import '../styles/App.scss';

const Navbar = () => {
    return (
        <nav className='navbar'>
            <div className="logo">Jammur</div>
            <button className="hamburger-menu">&#9776;</button>
        </nav>
    );
};

export default Navbar;
