import React, { useState } from 'react';
import './ContactPage.css';
import { FaPhone, FaClock, FaMapMarkerAlt, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

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
            <h1 className="contact-title">Get in Touch</h1>
            <p className="contact-subtitle">
              We're here to serve you. Visit us, call, or send us a message.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="contact-main section">
        <div className="container">
          <div className="contact-wrapper">
            {/* Contact Information */}
            <div className="contact-info">
              <div className="contact-info-card">
                <h2 className="contact-info-title">Contact Information</h2>
                <p className="contact-info-text">
                  Reach out to us through any of these channels
                </p>

                <div className="contact-details">
                  <div className="contact-detail-item">
                    <div className="contact-icon">
                      <FaPhone />
                    </div>
                    <div className="contact-detail-content">
                      <h3>Call Us</h3>
                      <div className="contact-numbers">
                        <a href="tel:+254728491309" className="contact-number">
                          +254 728 491 309
                        </a>
                        <a href="tel:+254743184519" className="contact-number">
                          +254 743 184 519
                        </a>
                      </div>
                      <p className="contact-note">Available during business hours</p>
                    </div>
                  </div>

                  <div className="contact-detail-item">
                    <div className="contact-icon">
                      <FaClock />
                    </div>
                    <div className="contact-detail-content">
                      <h3>Opening Hours</h3>
                      <div className="contact-hours">
                        <p className="hour-day">Monday - Sunday</p>
                        <p className="hour-time">6:00 AM - 8:00 PM</p>
                        <p className="hour-note">Open daily</p>
                      </div>
                    </div>
                  </div>

                  <div className="contact-detail-item">
                    <div className="contact-icon">
                      <FaMapMarkerAlt />
                    </div>
                    <div className="contact-detail-content">
                      <h3>Our Location</h3>
                      <p className="contact-address">Kwale, Kenya</p>
                      <p className="contact-address">P.O. Box 231-80403</p>
                    </div>
                  </div>
                </div>

                {/* Quick Action Buttons */}
                <div className="contact-actions">
                  <a
                    href="https://wa.me/254743184519"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-action-btn whatsapp-btn"
                  >
                    <FaWhatsapp className="btn-icon" />
                    <span>Message on WhatsApp</span>
                  </a>
                  
                  <a href="tel:+254743184519" className="contact-action-btn call-btn">
                    <FaPhone className="btn-icon" />
                    <span>Call Now</span>
                  </a>
                </div>
              </div>

              {/* Map/Location Section */}
              <div className="location-card">
                <h3 className="location-title">Find Us in Kwale</h3>
                <div className="location-map">
                  <div className="map-placeholder">
                    <FaMapMarkerAlt className="map-icon" />
                    <p className="map-text">📍 Kwale, Kenya</p>
                  </div>
                </div>
                <p className="location-description">
                  Visit us at our convenient location in Kwale for a warm dining experience. 
                  Easy to find with plenty of parking available.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-container">
              <div className="contact-form-card">
                <h2 className="contact-form-title">Send Us a Message</h2>
                <p className="contact-form-subtitle">
                  Fill out the form below and we'll get back to you as soon as possible
                </p>

                <form onSubmit={handleSubmit} className="contact-form">
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
                      placeholder="Enter your full name"
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
                      placeholder="your.email@example.com"
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
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Reservation">Reservation</option>
                      <option value="Catering">Catering</option>
                      <option value="Feedback">Feedback</option>
                      <option value="Other">Other</option>
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
                      placeholder="Type your message here..."
                    ></textarea>
                  </div>

                  <button type="submit" className="submit-btn">
                    <FaEnvelope className="btn-icon" />
                    <span>Send Message</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Important Note */}
      <section className="contact-note-section">
        <div className="container">
          <div className="important-note">
            <div className="note-icon">💡</div>
            <div className="note-content">
              <h3 className="note-title">Need Immediate Assistance?</h3>
              <p className="note-text">
                For faster response times, we recommend calling us directly during business hours.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;