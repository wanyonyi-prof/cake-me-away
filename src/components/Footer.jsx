import React from 'react';
import restaurantLogo from '../assets/images/logo.jpg'; // SAME FILENAME
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand Column */}
          <div className="footer-column">
            <div className="footer-brand">
              <div className="footer-logo">
                <img 
                  src={restaurantLogo} 
                  alt="Cake Me Away Restaurant Logo" 
                  className="footer-logo-img"
                />
              </div>
              <h3 className="footer-title">Cake Me Away</h3>
              <p className="footer-tagline">Fresh meals, fresh life</p>
              <p className="footer-description">
                A warm dining experience in the heart of Kwale, Kenya, 
                serving fresh, made-to-order meals with passion and care.
              </p>
            </div>
          </div>

          {/* Contact Column */}
          <div className="footer-column">
            <h4 className="footer-heading">Contact Info</h4>
            <div className="contact-list">
              <div className="contact-item">
                <span className="contact-emoji">📍</span>
                <div>
                  <p className="contact-label">Location</p>
                  <p className="contact-value">Kwale, Kenya</p>
                  <p className="contact-detail">P.O. Box 231-80403</p>
                </div>
              </div>
              
              <div className="contact-item">
                <span className="contact-emoji">📱</span>
                <div>
                  <p className="contact-label">Phone Numbers</p>
                  <a href="tel:+254728491309" className="contact-value link">
                    +254 728 491 309
                  </a>
                  <a href="tel:+254743184519" className="contact-value link">
                    +254 743 184 519
                  </a>
                </div>
              </div>
              
              <div className="contact-item">
                <span className="contact-emoji">🕒</span>
                <div>
                  <p className="contact-label">Operating Hours</p>
                  <p className="contact-value">Daily: 6:00 AM - 8:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="footer-column">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="/" className="footer-link">🏠 Home</a></li>
              <li><a href="/menu" className="footer-link">📋 Menu</a></li>
              <li><a href="/about" className="footer-link">⭐ About Us</a></li>
              <li><a href="/contact" className="footer-link">📞 Contact</a></li>
              <li><a href="#reservation" className="footer-link">📅 Reservations</a></li>
              <li><a href="#catering" className="footer-link">🎉 Catering</a></li>
            </ul>
          </div>

          {/* Social & Legal Column */}
          <div className="footer-column">
            <h4 className="footer-heading">Connect With Us</h4>
            <div className="social-links">
              <a href="#" className="social-link" aria-label="Facebook">
                📘
              </a>
              <a href="#" className="social-link" aria-label="Instagram">
                📷
              </a>
              <a href="#" className="social-link" aria-label="Twitter">
                🐦
              </a>
              <a 
                href="https://wa.me/254743184519" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
                aria-label="WhatsApp"
              >
                💬
              </a>
            </div>
            
            <div className="footer-note note">
              <p>
                <span className="warning-emoji">⚠️</span>
                All meals are prepared upon order for maximum freshness
              </p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copyright">
            <p>&copy; {currentYear} Cake Me Away Restaurant. All rights reserved.</p>
          </div>
          <div className="footer-legal">
            <a href="#privacy" className="legal-link">Privacy Policy</a>
            <span className="separator">•</span>
            <a href="#terms" className="legal-link">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;