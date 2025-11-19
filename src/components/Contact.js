import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2>Contact</h2>
        <div className="contact-links">
          <a href="mailto:kelvin.alefs@gmail.com" className="contact-button">
            Send Email
          </a>
          <a href="https://linkedin.com/in/kelvin-alef" target="_blank" rel="noopener noreferrer" className="contact-button">
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
