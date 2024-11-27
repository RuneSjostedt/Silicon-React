import React from 'react'
import Logo from '../assets/images/logo.svg'

const Navbar = () => {
  return (
    
    <header>
       
        <nav className="nav">
        
        <div className="navbar">
            <div className="container">

                <a id="logo" href="index.html"><img src={Logo} alt="Silicon logo" /></a>

                <nav id="main-menu" className="">
                    <a className="nav-link" href="#">Features</a>
                </nav>

                <div id="darkmode-toggle-switch" className="btn-toggle-switch">
                    <span className="label">Dark mode</span>
                    <label for="darkmode-switch" className="toggle-switch">
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