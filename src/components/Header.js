import React from 'react';
import logo from '.././images/Logo.svg'
import { Link } from 'react-router-dom';
import './Header/Header.css';
const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt=""></img>
            <div>
                <Link to="/home">Home</Link>
                <Link to="/shop">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/about">About</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/login">Login</Link>
            </div>
        </nav>
    );
};

export default Header;