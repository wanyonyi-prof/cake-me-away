import React, { useState } from 'react';
import { FiHome, FiMenu, FiX, FiPhone, FiInfo, FiMail } from 'react-icons/fi';
import { FaUtensils, FaWhatsapp } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/', icon: <FiHome /> },
    { name: 'Menu', path: '/menu', icon: <FaUtensils /> },
    { name: 'About', path: '/about', icon: <FiInfo /> },
    { name: 'Contact', path: '/contact', icon: <FiMail /> },
  ];

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-inner">
          {/* Logo */}
          <div className="logo">
            <div className="logo-icon">
              <span className="icon-lg icon-primary">🍰</span>
            </div>
            <div className="logo-text">
              <h1 className="logo-title">Cake Me Away</h1>
              <p className="logo-subtitle">Fresh meals, fresh life</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="nav-desktop">
            {navItems.map((item) => (
              <a 
                key={item.name} 
                href={item.path} 
                className="nav-link"
                onClick={() => window.scrollTo(0, 0)}
              >
                <span className="nav-icon">{item.icon}</span>
                <span className="nav-text">{item.name}</span>
              </a>
            ))}
            <div className="nav-actions">
              <a 
                href="tel:+254743184519" 
                className="btn btn-primary btn-sm"
              >
                <FiPhone className="icon-sm" />
                <span>Call Now</span>
              </a>
              <a 
                href="https://wa.me/254743184519" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-secondary btn-sm"
              >
                <FaWhatsapp className="icon-sm" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <button 
            className="menu-toggle" 
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`nav-mobile ${isOpen ? 'open' : ''}`}>
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.path}
              className="nav-link mobile"
              onClick={() => {
                setIsOpen(false);
                window.scrollTo(0, 0);
              }}
            >
              <span className="nav-icon">{item.icon}</span>
              <span className="nav-text">{item.name}</span>
            </a>
          ))}
          <div className="mobile-actions">
            <a 
              href="tel:+254743184519" 
              className="btn btn-primary"
              onClick={() => setIsOpen(false)}
            >
              <FiPhone className="icon-sm" />
              <span>Call Now</span>
            </a>
            <a 
              href="https://wa.me/254743184519" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-secondary"
              onClick={() => setIsOpen(false)}
            >
              <FaWhatsapp className="icon-sm" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;