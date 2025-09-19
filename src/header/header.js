import React, { useState } from 'react'
import './style.css'
import mylogo from '../assets/logos.png'


import { Link } from 'react-scroll';
import Skills from './../skills/Skills';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className='header'>
            <img src={mylogo} id='mylogo'/>
            <div className='burger-menu' onClick={() => setMenuOpen(!menuOpen)}>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <ul className={`menu ${menuOpen ? 'open' : ''}`}>
                <li>
                    <Link to="portfolio" smooth={true} duration={500}>
                        Portfolio
                    </Link>
                </li>
                <li>
                    <Link to="about" smooth={true} duration={500}>
                        About
                    </Link>
                </li>
                <li>
                    <Link to="skills" smooth={true} duration={500}>
                       Skills
                    </Link>
                </li>
                <li>
                    <Link to="experiences" smooth={true} duration={500}>
                        Experiences
                    </Link>
                </li>
                <li>
                    <Link to="testimonials" smooth={true} duration={500}>
                        Testimonials
                    </Link>
                </li>
                <li>
                    <Link to="contact" smooth={true} duration={500}>
                        <button >Let's Talk</button>
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Header;
