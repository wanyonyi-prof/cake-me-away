import React from 'react';
import './AboutPage.css';

const AboutPage = () => {
  const values = [
    {
      image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      title: "Fresh Ingredients",
      description: "We source the freshest local ingredients for every dish"
    },
    {
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      title: "Made to Order",
      description: "Every meal is prepared fresh when you order it"
    },
    {
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      title: "Passion for Food",
      description: "We cook with love and attention to detail"
    },
    {
      image: 'https://images.unsplash.com/photo-1556911073-38141963c9e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      title: "Community Focused",
      description: "Serving the Kwale community with pride since inception"
    }
  ];

  const processSteps = [
    {
      step: "1",
      image: "https://images.unsplash.com/photo-1579113800032-c38bd7635818?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      title: "You Order",
      description: "You select your meal from our fresh menu"
    },
    {
      step: "2",
      image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      title: "We Prepare",
      description: "Our chefs begin cooking immediately with fresh ingredients"
    },
    {
      step: "3",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      title: "We Serve",
      description: "Your hot, fresh meal is served at perfect temperature"
    },
    {
      step: "4",
      image: "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
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
              <div 
                className="restaurant-image"
                style={{
                  backgroundImage: 'url(https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80)'
                }}
              >
                <div className="image-overlay">
                  <span className="image-text">Our Restaurant in Kwale</span>
                </div>
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
                <div className="value-image-container">
                  <img 
                    src={value.image} 
                    alt={value.title}
                    className="value-image"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.innerHTML = `<div class="value-fallback">${value.title.charAt(0)}</div>`;
                    }}
                  />
                </div>
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
                    <div className="step-image-container">
                      <img 
                        src={step.image} 
                        alt={step.title}
                        className="step-image"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.parentElement.innerHTML = `<div class="step-fallback">${step.step}</div>`;
                        }}
                      />
                      <div className="step-overlay"></div>
                    </div>
                    <div className="step-info">
                      <h3 className="step-title">{step.title}</h3>
                      <p className="step-description">{step.description}</p>
                    </div>
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
              <div className="team-image-container">
                <img 
                  src="https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                  alt="Cake Me Away Team"
                  className="team-image"
                />
                <div className="team-image-overlay"></div>
              </div>
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