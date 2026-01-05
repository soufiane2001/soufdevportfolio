import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';
import './style.css';
import mylogo from '../assets/logos.png';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef(null);
    const burgerRef = useRef(null);

    // Close menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                menuOpen &&
                menuRef.current &&
                burgerRef.current &&
                !menuRef.current.contains(event.target) &&
                !burgerRef.current.contains(event.target)
            ) {
                setMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('touchstart', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('touchstart', handleClickOutside);
        };
    }, [menuOpen]);

    // Prevent body scroll when menu is open
    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [menuOpen]);

    // Close menu when clicking on a link
    const handleLinkClick = () => {
        setMenuOpen(false);
    };

    return (
        <motion.header 
            className="header"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            {/* Logo */}
            <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="header-logo"
            >
                <Link to="home" smooth={true} duration={500} offset={0}>
                    <motion.img 
                        src={mylogo} 
                        alt="Soufiane Dev Logo"
                        whileHover={{ scale: 1.05, rotate: 2 }}
                        transition={{ duration: 0.3 }}
                    />
                </Link>
            </motion.div>

            {/* Burger Menu */}
            <motion.div 
                ref={burgerRef}
                className={`burger-menu ${menuOpen ? 'active' : ''}`}
                onClick={() => setMenuOpen(!menuOpen)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                <span></span>
                <span></span>
                <span></span>
            </motion.div>

            {/* Navigation Menu */}
            <motion.nav 
                ref={menuRef}
                className={`nav-menu ${menuOpen ? 'open' : ''}`}
                initial={false}
                animate={menuOpen ? { opacity: 1 } : { opacity: 1 }}
            >
                <ul>
                    <motion.li
                        initial={false}
                        whileHover={{ scale: 1.05, y: -2 }}
                        transition={{ duration: 0.2 }}
                    >
                        <Link 
                            to="portfolio" 
                            smooth={true} 
                            duration={500}
                            offset={-50}
                            onClick={handleLinkClick}
                            className="nav-link"
                        >
                            Portfolio
                        </Link>
                    </motion.li>

                    <motion.li
                        initial={false}
                        whileHover={{ scale: 1.05, y: -2 }}
                        transition={{ duration: 0.2 }}
                    >
                        <Link 
                            to="about" 
                            smooth={true} 
                            duration={500}
                            offset={-50}
                            onClick={handleLinkClick}
                            className="nav-link"
                        >
                            About
                        </Link>
                    </motion.li>

                    <motion.li
                        initial={false}
                        whileHover={{ scale: 1.05, y: -2 }}
                        transition={{ duration: 0.2 }}
                    >
                        <Link 
                            to="skills" 
                            smooth={true} 
                            duration={500}
                            offset={-50}
                            onClick={handleLinkClick}
                            className="nav-link"
                        >
                            Skills
                        </Link>
                    </motion.li>

                    <motion.li
                        initial={false}
                        whileHover={{ scale: 1.05, y: -2 }}
                        transition={{ duration: 0.2 }}
                    >
                        <Link 
                            to="experiences" 
                            smooth={true} 
                            duration={500}
                            offset={-50}
                            onClick={handleLinkClick}
                            className="nav-link"
                        >
                            Experiences
                        </Link>
                    </motion.li>

                    <motion.li
                        initial={false}
                        whileHover={{ scale: 1.05, y: -2 }}
                        transition={{ duration: 0.2 }}
                    >
                        <Link 
                            to="testimonials" 
                            smooth={true} 
                            duration={500}
                            offset={-50}
                            onClick={handleLinkClick}
                            className="nav-link"
                        >
                            Testimonials
                        </Link>
                    </motion.li>

                    <motion.li
                        initial={false}
                        whileHover={{ scale: 1.08 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Link 
                            to="contact" 
                            smooth={true} 
                            duration={500}
                            offset={-50}
                            onClick={handleLinkClick}
                        >
                            <button className="cta-button">Let's Talk</button>
                        </Link>
                    </motion.li>
                </ul>
            </motion.nav>
        </motion.header>
    );
};

export default Header;
