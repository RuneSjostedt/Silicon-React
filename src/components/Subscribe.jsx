// import React from 'react'
import Notification from '../assets/images/notification-img.svg'
import MailImg from '../assets/images/mail-img.svg'


const Subscribe = () => {
  return (
    <section id="subscribe">
    <div className="container">
        <div className="subscribe-headline">
            <img src={Notification} alt="notification image"/>
            <h2>Subscribe to our newsletter to stay <br/> informed about latest updates</h2>
        </div>
        <form className="subscribeForm" noValidate>
            <div className="form">
                <div className="mail-img"><img src={MailImg} alt=""/></div>
                <input className="form-input" type="email" name="email" id="email" required placeholder="Your Email"/>
                </div>
                <div className="form-btn">
                <button className="btn-primary">Subscribe</button>
                </div>
        </form>
    </div>
</section>
  )
}

export default Subscribe