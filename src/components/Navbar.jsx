// import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Logo from '../assets/images/logo.svg'

const Navbar = () => {
  return (
    
    <header>
       
        <nav className="nav">
        
        <div className="navbar">
            <div className="container">

                <Link id="logo" to="/"><img src={Logo} alt="Silicon logo" /></Link>

                <nav id="main-menu" className="">
                    <NavLink className="nav-link" href="#">Features</NavLink>
                    <NavLink className="nav-contact-link" to="/Contacts">Contacts </NavLink>
                </nav>

                <div id="darkmode-toggle-switch" className="btn-toggle-switch">
                    <span className="label">Dark mode</span>
                    <label htmlFor="darkmode-switch" className="toggle-switch">
                        <input id="darkmode-switch" type="checkbox" />
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
  )
}

export default Navbar