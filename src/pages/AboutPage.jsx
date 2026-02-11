import React from 'react';
import './AboutPage.css';

// IMPORT YOUR LOCAL IMAGES
import valueFreshIngredients from '../assets/images/about/fresh-ingredients.jpg';
import valueMadeToOrder from '../assets/images/about/made-to-order.jpg';
import valuePassion from '../assets/images/about/passion.jpg';
import valueCommunity from '../assets/images/about/community.jpg';
import restaurantImage from '../assets/images/about/restaurant-kwale.jpg';
import teamImage from '../assets/images/about/team.jpg';

// IMPORT CONFERENCE/RESERVATION IMAGES (you have 4 images)
import conference1 from '../assets/images/conference/conference-1.jpg';
import conference2 from '../assets/images/conference/conference-2.jpg';
import conference3 from '../assets/images/conference/conference-3.jpg';
import conference4 from '../assets/images/conference/conference-4.jpg';

const AboutPage = () => {
  const values = [
    {
      image: valueFreshIngredients,
      title: "Fresh Ingredients",
      description: "We source the freshest local ingredients for every dish"
    },
    {
      image: valueMadeToOrder,
      title: "Made to Order",
      description: "Every meal is prepared fresh when you order it"
    },
    {
      image: valuePassion,
      title: "Passion for Food",
      description: "We cook with love and attention to detail"
    },
    {
      image: valueCommunity,
      title: "Community Focused",
      description: "Serving the Kwale community with pride since inception"
    }
  ];

  const processSteps = [
    {
      step: "1",
      title: "You Order",
      description: "You select your meal from our fresh menu"
    },
    {
      step: "2",
      title: "We Prepare",
      description: "Our chefs begin cooking immediately with fresh ingredients"
    },
    {
      step: "3",
      title: "We Serve",
      description: "Your hot, fresh meal is served at perfect temperature"
    },
    {
      step: "4",
      title: "You Enjoy",
      description: "Experience the difference of truly fresh dining"
    }
  ];

  // Conference images array
  const conferenceImages = [
    { id: 1, image: conference1, title: "Conference Hall", description: "Spacious conference area for meetings" },
    { id: 2, image: conference2, title: "Business Meeting", description: "Professional setup for corporate events" },
    { id: 3, image: conference3, title: "Private Dining", description: "Exclusive space for special occasions" },
    { id: 4, image: conference4, title: "Workshop Space", description: "Ideal for seminars and training" }
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <div className="about-hero-content">
            <h1 className="about-title">Our Story</h1>
            <p className="about-subtitle">
              From a small kitchen to Kwale's favorite dining spot
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="story-section">
        <div className="container">
          <div className="story-wrapper">
            <div className="story-content">
              <h2 className="story-title">Welcome to Cake Me Away</h2>
              
              <div className="story-text">
                <p className="story-paragraph">
                  Founded in the heart of Kwale, Kenya, Cake Me Away began with a simple 
                  mission: to serve fresh, delicious meals that bring people together. 
                  What started as a small local eatery has grown into a beloved dining 
                  destination, known for our commitment to quality and community.
                </p>
                
                <p className="story-paragraph">
                  Our name reflects our philosophy - we want you to "take away" not just 
                  cakes, but an entire experience of fresh, wholesome dining that stays 
                  with you long after your meal.
                </p>
                
                <div className="story-quote">
                  <p className="quote-text">"Fresh meals, fresh life"</p>
                  <p className="quote-author">Our guiding principle since day one</p>
                </div>
                
                <p className="story-paragraph">
                  At Cake Me Away, we believe that great food starts with great ingredients. 
                  That's why we work closely with local farmers and suppliers to ensure 
                  we're serving the freshest, highest-quality ingredients in every dish.
                </p>
              </div>
            </div>
            
            <div className="story-image">
              <div className="image-container">
                <img 
                  src={restaurantImage} 
                  alt="Cake Me Away Restaurant in Kwale"
                  className="restaurant-image"
                />
                <div className="image-overlay">
                  <p className="image-caption">Our Restaurant in Kwale</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="container">
          <div className="section-header">
            <h2 className="values-title">What We Stand For</h2>
            <p className="values-subtitle">Our core values that guide everything we do</p>
          </div>
          
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-image-container">
                  <img 
                    src={value.image} 
                    alt={value.title}
                    className="value-image"
                  />
                  <div className="value-overlay"></div>
                </div>
                
                <div className="value-content">
                  <h3 className="value-card-title">{value.title}</h3>
                  <p className="value-description">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEW: Conference & Reservations Section */}
      <section className="conference-section">
        <div className="container">
          <div className="section-header">
            <h2 className="conference-title">Book Our Conference & Event Space</h2>
            <p className="conference-subtitle">
              Perfect for business meetings, workshops, private dinners, and special occasions
            </p>
          </div>

          <div className="conference-grid">
            {conferenceImages.map((item) => (
              <div key={item.id} className="conference-card">
                <div className="conference-image-container">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="conference-image"
                  />
                  <div className="conference-overlay"></div>
                </div>
                <div className="conference-content">
                  <h3 className="conference-card-title">{item.title}</h3>
                  <p className="conference-description">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="conference-cta">
            <div className="cta-content">
              <h3 className="cta-heading">Ready to book your event?</h3>
              <p className="cta-text">
                Contact us today to reserve our conference space. We offer flexible packages 
                with catering options tailored to your needs.
              </p>
              <div className="cta-buttons">
                <a href="tel:+254743184519" className="btn btn-primary">
                  Call to Book
                </a>
                <a href="/contact" className="btn btn-outline">
                  Send Inquiry
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section">
        <div className="container">
          <div className="section-header">
            <h2 className="process-title">Our Made-to-Order Promise</h2>
            <p className="process-subtitle">Experience the freshness from order to plate</p>
          </div>
          
          <div className="process-grid">
            {processSteps.map((step, index) => (
              <div key={index} className="process-step">
                <div className="step-header">
                  <div className="step-number">{step.step}</div>
                  <h3 className="step-title">{step.title}</h3>
                </div>
                <p className="step-description">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Message */}
      <section className="team-section">
        <div className="container">
          <div className="team-card">
            <div className="team-image-container">
              <img 
                src={teamImage} 
                alt="Cake Me Away Team"
                className="team-image"
              />
            </div>
            
            <div className="team-content">
              <h2 className="team-title">A Message From Our Team</h2>
              <p className="team-message-text">
                "Every day, we come to work with one goal: to make someone's day better 
                through food. Whether you're grabbing a quick breakfast, enjoying a family 
                dinner, or celebrating a special occasion, we're here to make sure 
                your experience is memorable."
              </p>
              <div className="team-signature">
                <p className="signature">The Cake Me Away Team</p>
                <p className="signature-note">Serving Kwale with pride</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;