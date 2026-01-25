import React, { useState } from 'react';
import './ContactPage.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'General Inquiry',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      phone: '',
      email: '',
      subject: 'General Inquiry',
      message: ''
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <div className="contact-hero-content">
            <h1 className="contact-title">Contact Us</h1>
            <p className="contact-subtitle">
              We'd love to hear from you. Visit us, call, or send a message.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="contact-content section">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Info */}
            <div className="contact-info-card card">
              <h2 className="contact-info-title">Get in Touch</h2>
              
              <div className="contact-list">
                <div className="contact-item">
                  <span className="contact-emoji">📱</span>
                  <div className="contact-item-content">
                    <h3 className="contact-item-title">Call Us</h3>
                    <a href="tel:+254728491309" className="contact-link">
                      +254 728 491 309
                    </a>
                    <br />
                    <a href="tel:+254743184519" className="contact-link">
                      +254 743 184 519
                    </a>
                    <p className="contact-item-text">
                      Available during business hours
                    </p>
                  </div>
                </div>

                <div className="contact-item">
                  <span className="contact-emoji">🕒</span>
                  <div className="contact-item-content">
                    <h3 className="contact-item-title">Hours</h3>
                    <p className="contact-item-text">Monday - Sunday</p>
                    <p className="contact-item-text highlight">6:00 AM - 8:00 PM</p>
                    <p className="contact-item-text">Open daily</p>
                  </div>
                </div>

                <div className="contact-item">
                  <span className="contact-emoji">📍</span>
                  <div className="contact-item-content">
                    <h3 className="contact-item-title">Location</h3>
                    <p className="contact-item-text">Kwale, Kenya</p>
                    <p className="contact-item-text">P.O. Box 231-80403</p>
                  </div>
                </div>
              </div>

              <a
                href="https://wa.me/254743184519"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary whatsapp-button"
              >
                <span className="btn-emoji">💬</span>
                <span>Message on WhatsApp</span>
              </a>
            </div>

            {/* Contact Form */}
            <div className="contact-form-card card">
              <h2 className="contact-form-title">Send Us a Message</h2>
              
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">
                      Your Name <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="form-input"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label className="form-label">
                      Phone Number <span className="required">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="form-input"
                      placeholder="+254 700 000 000"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="john@example.com"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">
                    Subject
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="form-select"
                  >
                    <option>General Inquiry</option>
                    <option>Reservation</option>
                    <option>Catering</option>
                    <option>Feedback</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">
                    Message <span className="required">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="form-textarea"
                    placeholder="Your message here..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="form-submit btn btn-primary"
                >
                  <span className="btn-emoji">📨</span>
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section section-sm">
        <div className="container">
          <h2 className="map-title">Find Us in Kwale</h2>
          <div className="map-container">
            <div className="map-placeholder">
              <span className="map-emoji">📍</span>
              <h3 className="map-text">Kwale, Kenya</h3>
              <p className="map-detail">
                Visit us at our location in Kwale for a warm dining experience. 
                Easy to find and plenty of parking available.
              </p>
            </div>
          </div>
          
          <div className="contact-note note">
            <p>
              <span className="note-emoji">💡</span>
              <strong>Need immediate assistance?</strong> Call us directly for faster response times.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;