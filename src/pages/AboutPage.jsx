import React from 'react';
import './AboutPage.css';

const AboutPage = () => {
  const values = [
    {
      emoji: '🌿',
      title: "Fresh Ingredients",
      description: "We source the freshest local ingredients for every dish"
    },
    {
      emoji: '👨‍🍳',
      title: "Made to Order",
      description: "Every meal is prepared fresh when you order it"
    },
    {
      emoji: '❤️',
      title: "Passion for Food",
      description: "We cook with love and attention to detail"
    },
    {
      emoji: '🤝',
      title: "Community Focused",
      description: "Serving the Kwale community with pride since inception"
    }
  ];

  const processSteps = [
    {
      step: "1",
      emoji: "📝",
      title: "You Order",
      description: "You select your meal from our fresh menu"
    },
    {
      step: "2",
      emoji: "👨‍🍳",
      title: "We Prepare",
      description: "Our chefs begin cooking immediately with fresh ingredients"
    },
    {
      step: "3",
      emoji: "🍽️",
      title: "We Serve",
      description: "Your hot, fresh meal is served at perfect temperature"
    },
    {
      step: "4",
      emoji: "😊",
      title: "You Enjoy",
      description: "Experience the difference of truly fresh dining"
    }
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
      <section className="story-section section">
        <div className="container">
          <div className="story-content">
            <div className="story-text">
              <h2 className="story-title">Welcome to Cake Me Away</h2>
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
              
              <div className="story-highlight">
                <p>"Fresh meals, fresh life"</p>
                <span className="highlight-author">Our guiding principle since day one</span>
              </div>
              
              <p className="story-paragraph">
                At Cake Me Away, we believe that great food starts with great ingredients. 
                That's why we work closely with local farmers and suppliers to ensure 
                we're serving the freshest, highest-quality ingredients in every dish.
              </p>
            </div>
            
            <div className="story-image">
              <div className="image-placeholder">
                <span className="image-emoji">🏪</span>
                <span className="image-text">Our Restaurant in Kwale</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section section-sm">
        <div className="container">
          <h2 className="values-title">What We Stand For</h2>
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card card">
                <div className="value-emoji">{value.emoji}</div>
                <h3 className="value-title">{value.title}</h3>
                <p className="value-description">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section section">
        <div className="container">
          <h2 className="process-title">Our Made-to-Order Promise</h2>
          <div className="process-timeline">
            {processSteps.map((step, index) => (
              <div key={index} className="process-step">
                <div className="step-marker">
                  <span className="step-number">{step.step}</span>
                </div>
                <div className="step-content">
                  <div className="step-card card">
                    <div className="step-header">
                      <span className="step-emoji">{step.emoji}</span>
                      <h3 className="step-title">{step.title}</h3>
                    </div>
                    <p className="step-description">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Message */}
      <section className="team-section section-sm">
        <div className="container">
          <div className="team-message card card-highlight">
            <div className="team-header">
              <span className="team-emoji">👨‍🍳👩‍🍳</span>
              <h3 className="team-title">A Message From Our Team</h3>
            </div>
            <p className="team-text">
              "Every day, we come to work with one goal: to make someone's day better 
              through food. Whether you're grabbing a quick breakfast, enjoying a family 
              dinner, or celebrating a special occasion, we're here to make sure 
              your experience is memorable. Thank you for choosing Cake Me Away."
            </p>
            <div className="team-signature">
              <span className="signature-emoji">🙏</span>
              <span className="signature-text">The Cake Me Away Team</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;