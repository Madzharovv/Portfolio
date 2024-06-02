import React from 'react';
import { Routes } from '../../constants';
import './Navbar.css';
const Navbar = () => {
    console.log('Routes:', Routes); // Debugging line

    // Use a fallback to ensure Routes is always an array
    const routesArray = Array.isArray(Routes) ? Routes : [];

    return (
        <div>

            <ul className='BarContainer'>
                {routesArray.map((route, index) => (
                    <li className='list' key={index}>
                        <a className='navLink' href={route.href}>{route.title}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Navbar;
