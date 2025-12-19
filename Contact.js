import React from "react";
import '../styles/Contact.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <p>&copy; {currentYear} Chama Youth Resource Center. All rights reserved.</p>
    </footer>
  );
}

function Contact() {
  return (
    <>
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p>Email: <a href="mailto:chamayouth12@gmail.com">chamayouth12@gmail.com</a></p>

      <div className="contact-card">
        <p>Airtel</p>
        <p>Phone: <a href="tel:+260976251165">+260 97 625 1165</a></p>
      </div>

      <div className="contact-card">
        <p>Zamtel</p>
        <p>Phone: <a href="tel:+260955765647">+260 95 576 5647</a></p>
      </div>

      <div className="contact-card">
        <p>MTN</p>
        <p>Phone: <a href="tel:+260967765647">+260 96 776 5647</a></p>
      </div>
    </div>
    
    <div className="govt-section">
        <div className="govt-content">
          <div className="zambia-flag">
            <div className="flag-colors">
              <div className="flag-green"></div>
              <div className="flag-red"></div>
              <div className="flag-black"></div>
              <div className="flag-orange"></div>
            </div>
          </div>
          <div className="govt-text">
            <h2>REPUBLIC OF ZAMBIA</h2>
            <h3>MINISTRY OF YOUTH SPORT & ARTS</h3>
            <div className="center-info">
              <h4>CHAMA YOUTH RESOURCE CENTRE</h4>
              <p>P.O. BOX 54-0040</p>
              <p>CHAMA</p>
              <p>EASTERN PROVINCE</p>
            </div>
            <div className="mission-text">
              <p><strong>"Skills Development Drives the Economy"</strong></p>
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
