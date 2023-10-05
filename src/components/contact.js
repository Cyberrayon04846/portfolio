import React from 'react';
import '../style/contact.scss';

const Contact = () => {
  return (
    <div className="contact-container">
      <h2>Contact Me</h2>
      <div className="social-icons">
        <a href="https://twitter.com/CyberRayon" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
        <a href="https://facebook.com/your-facebook-profile" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a>
        <a href="https://www.linkedin.com/in/preet-chahal-25620a221/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
        <a href="https://github.com/Cyberrayon04846" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
        <a href="mailto:cyberrayon@gmail.com"><i className="far fa-envelope"></i></a>
        <a href="tel:+917015683537"><i className="fas fa-phone"></i></a>
      </div>
    </div>
  );
};

export default Contact;
