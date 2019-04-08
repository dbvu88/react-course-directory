import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <header>
        <span className="">My App</span>
        <ul className="main-nav">
            <li><NavLink exact to="/">HOME</NavLink></li>
            <li><NavLink to="/about" activeClassName="about-active">ABOUT</NavLink></li>
            <li><NavLink to="/teachers">TEACHERS</NavLink></li>
            <li><NavLink to="/courses">COURSES</NavLink></li>
        </ul>
    </header>
)
  
export default Header;
  