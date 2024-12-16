import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../assets/images/logo.svg';

const Navbar = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const storedThemeMode = localStorage.getItem('themeMode');

        // Corrected conditional logic and syntax
        if (
            storedThemeMode === 'dark' ||
            (!storedThemeMode && window.matchMedia('(prefers-color-scheme: dark)').matches)
        ) {
            setIsDarkMode(true);
            document.documentElement.classList.add('dark');
        } else {
            setIsDarkMode(false);
            document.documentElement.classList.remove('dark'); 
        }
    }, []);

    const handleThemeToggle = () => {
        if (isDarkMode) {
            setIsDarkMode(false);
            localStorage.setItem('themeMode', 'light');
            document.documentElement.classList.remove('dark');
        } else {
            setIsDarkMode(true);
            localStorage.setItem('themeMode', 'dark');
            document.documentElement.classList.add('dark');
        }
    };

    return (
        <header>
            <nav className="nav">
                <div className="navbar">
                    <div className="container">
                        <Link id="logo" to="/">
                            <img src={Logo} alt="Silicon logo" />
                        </Link>

                        <div id="main-menu" className="">
                            <NavLink className="nav-link" to="/">
                                Features
                            </NavLink>
                            <NavLink className="nav-contact-link" to="/Contacts">
                                Contacts
                            </NavLink>
                        </div>

                        <div id="darkmode-toggle-switch" className="btn-toggle-switch">
                            <span className="label">Dark mode</span>
                            <label htmlFor="darkmode-switch" className="toggle-switch">
                                <input
                                    id="darkmode-switch"
                                    type="checkbox"
                                    checked={isDarkMode}
                                    onChange={handleThemeToggle}
                                />
                                <span className="slider round"></span>
                            </label>
                        </div>

                        <a id="signin/up" href="#" className="btn-primary">
                            <i className="fa-regular fa-user"></i>
                            <span>Sign in / up</span>
                        </a>

                        <button className="btn-hamburger">
                            <i className="fa-light fa-bars fa-sm"></i>
                        </button>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;