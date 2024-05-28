import React from 'react';
import { Routes } from '../../assets';

const Navbar = () => {
    console.log('Routes:', Routes); // Debugging line

    // Use a fallback to ensure Routes is always an array
    const routesArray = Array.isArray(Routes) ? Routes : [];

    return (
        <div>
            <div className='LogoContainer'>
                <img src="" alt="" />
            </div>
        <ul className='BarContainer'>
            {routesArray.map((route, index) => (
                <li key={index}>
                    <a href={route.href}>{route.title}</a>
                </li>
            ))}
        </ul>
        </div>
    );
};

export default Navbar;
