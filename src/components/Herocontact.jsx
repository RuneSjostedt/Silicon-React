// import React from 'react'
import HomePage from '../assets/images/homepage-img.svg'
import ArrowImg from '../assets/images/arrow-img.svg'
import BxEnvelope from '../assets/images/bx-envelope.svg'
import AddGrp from '../assets/images/add-group-img.svg'
import { NavLink } from 'react-router-dom'


const Herocontact = () => {
  return (
    <section id="hero">
    <div className="container">
       
        <div className="page-selector">
            <NavLink className="home-img" to="/"><img src={HomePage} alt=""/></NavLink>
            <NavLink to="/">Homepage</NavLink>
            <a className="arrow-btn" href=""><img src={ArrowImg} alt=""/></a>
            <a href="#">Contact</a>
        </div>
        <div className="contact-flex1">
        <div className="contact-flex2">
        <div className="contact-us"><h1>Contact us</h1></div>
   
        <div className="contact-us-cards">
            <div className="contact-us-card">
                <div className="btn-circle"><img src={BxEnvelope} alt=""/></div>
                <div className="contact-us-textbox">
                <h3>Email us</h3>
             <p>Please feel free to drop us a line. We will respond as soon as possible.</p>
                <a href="">
                <span>Leave a message</span>
                <i className="fa-regular fa-arrow-right"></i>
            </a>
            </div>
        </div>
       
        <div className="contact-us-card">
            <div className="btn-circle"><img src={AddGrp} alt=""/></div>
            <div className="contact-us-textbox">
            <h3>Careers</h3>
            <p>Sit ac ipsum leo lorem magna nunc mattismaecenas non vestibulum.</p>
            <a href="">
                <span>Send an application</span>
                <i className="fa-regular fa-arrow-right"></i>
            </a>
            </div>
        </div>
    </div>
</div>
    <div className="consultation-card">
        <h2>Get Online Consultation</h2>
        <div className="consult-forms">
            <form className="consult-form" action="">
                <label className="label-consult" htmlFor="">Full Name</label>
                <input className="input-consult" type="text"/>
            </form>
            <form className="consult-form" action="">
                <label className="label-consult" htmlFor="">Email address</label>
                <input className="input-consult" type="text"/>
            </form>
            <form className="consult-form" action="">
                <label className="label-consult" htmlFor="">Specialist</label>
                <input className="input-consult" type="text"/>
            </form>
        </div>
       
        <div className="btn-primary">
            <p>Make an appointment</p>
        </div>
    </div>
</div>


</div>
</section>
  )
}

export default Herocontact