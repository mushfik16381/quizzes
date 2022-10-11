import React from 'react';
import logo from '../../images/logo.png';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='header-container'>
            <img className='logo' src={logo} alt="Logo" />
            
            <div className='nav-container'>
            <Link to={"/"}>Home</Link>
            <Link to={"/statistics"}>Statistics</Link>
            <Link to={"/blog"}>Blog</Link>
            </div>
        </div>
    );
};

export default Header;