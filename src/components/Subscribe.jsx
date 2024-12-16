import React, { useState } from 'react';
import Notification from '../assets/images/notification-img.svg';
import MailImg from '../assets/images/mail-img.svg';

const Subscribe = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Email validation regex
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateEmail(email)) {
      setError('');
      setIsSubmitted(true);
      console.log('Email submitted:', email);
      // Perform further actions like sending to a backend
    } else {
      setError('Please enter a valid email address.');
    }
  };

  return (
    <section id="subscribe">
      <div className="container">
        <div className="subscribe-headline">
          <img src={Notification} alt="notification image" />
          <h2>
            Subscribe to our newsletter to stay <br /> informed about latest updates
          </h2>
        </div>
        <form className="subscribeForm" noValidate onSubmit={handleSubmit}>
          <div className="form">
            <div className="mail-img">
              <img src={MailImg} alt="mail icon" />
            </div>
            <input
              className="form-input"
              type="email"
              name="email"
              id="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          {error && <p style={{ color: 'red', fontSize: '14px' }}>{error}</p>}
          {isSubmitted && (
            <p style={{ color: 'green', fontSize: '14px' }}>Thank you for subscribing!</p>
          )}
          <div className="form-btn">
            <button className="btn-primary" type="submit">
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Subscribe;