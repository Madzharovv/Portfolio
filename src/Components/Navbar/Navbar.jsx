
import React, { UseState } from 'react';
import './Navbar.css';
import images from '../../Constants/images';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useState } from 'react';


const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    const scrollToAboutSection = () => {
        const AboutSection = document.getElementById('About');
        const GallerySection = document.getElementById('Gallery');
        const ContactSection = document.getElementById('Contact');
        const MenuSection = document.getElementById('Menu');
        if (AboutSection) {
            AboutSection.scrollIntoView({ behavior: 'smooth' });
        }
        else if (GallerySection) { AboutSection.scrollIntoView({ behavior: 'smooth' }); }
        else if (MenuSection) { AboutSection.scrollIntoView({ behavior: 'smooth' }); }
        else if (ContactSection) { AboutSection.scrollIntoView({ behavior: 'smooth' }); }
    };

    return (


        <div className='NavWrapper' >
            <div className='nav'>
                <div className='vmLogo'><a href=""><img className='spinning' src={images.logo} height="50px" width="50px" alt="not working" /></a></div>
                <ul className='nav-bar-links'>
                    <li className=''>
                        <a className="menu-link">Toolset</a>
                    </li>
                    <li>
                        <a className="menu-link">Projects</a>
                    </li>
                    <li>
                        <a className="menu-link">Services</a>
                    </li>
                    <li>
                        <a className="menu-link">Contact</a>
                    </li>
                    <li>
                        <a className="menu-link">Store</a>
                    </li>
                </ul>
            </div>


            <div className='nav-smallscreen'>
                <div className='vmLogo'><a href=""><img src={images.logo} height="50px" width="50px" alt="not working" /></a></div>
                <GiHamburgerMenu className="HamButtob" color="#fff" fontsize={27} onClick={() => setToggleMenu(true)} />
                {toggleMenu && (
        <div className='app__navbar-smallscreen_overlay overlay__close'>
          
          <ul className='app__navbar-smallscreen-links'>
          <GiHamburgerMenu className="HamButtob-close" fontsize={35}  onClick={() => setToggleMenu (false)}/>
          <div>
          <li>
          
                        <a className="menu-link">Toolset</a>
                    </li>
                    <li>
                        <a className="menu-link">Projects</a>
                    </li>
                    <li>
                        <a className="menu-link">Services</a>
                    </li>
                    <li>
                        <a className="menu-link">Contact</a>
                    </li>
                    <li>
                        <a className="menu-link">Store</a>
                    </li>
                    </div>  
          </ul>
          

       

        </div>
)}
            </div>

        </div>





    )
};


export default Navbar;