import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.css';

const Header = () => {
    return (
        <div>
            <NavLink to = '/' activeClassName='is-active'
            exact ={true}> Home </NavLink>
            <NavLink to = '/newanimal' activeClassName= 'is-active' id='header'> Register animal</NavLink>
            <NavLink to = '/contactus' activeClassName='is-active' id='header'>Contact Us</NavLink>
            
        </div>
      );
};
 
export default Header;