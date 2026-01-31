import React, { useState, useEffect } from 'react';
import { 
  FiCoffee, 
  FiDroplet, 
  FiClock, 
  FiChevronRight,
  FiMapPin,
  FiPhone,
  FiStar,
  FiChevronsRight,
  FiChevronLeft,
  FiChevronRight as FiChevronRightIcon
} from 'react-icons/fi';
import { 
  FaUtensils, 
  FaCookieBite, 
  FaFish, 
  FaDrumstickBite,
  FaIceCream,
  FaSeedling,
  FaLeaf,
  FaCheese,
  FaBreadSlice,
  FaHamburger,
  FaPizzaSlice,
  FaMugHot,
  FaPhoneAlt,
  FaMapMarkerAlt
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './HomePage.css';

// IMPORT YOUR CAROUSEL IMAGES - Add your actual image filenames here
import foodImage1 from '../assets/images/food 1.jpg';
import foodImage2 from '../assets/images/food 2.jpg';
import foodImage3 from '../assets/images/food 3.jpg';
import foodImage4 from '../assets/images/food 4.jpg';
import foodImage5 from '../assets/images/food 5.jpg';

// IMPORT YOUR HERO BACKGROUND IMAGES - Add your restaurant/cafe images here
import heroBg1 from '../assets/images/hero-bg-1.jpg'; // Your first background image
import heroBg2 from '../assets/images/hero-bg-2.jpg'; // Your second background image
import heroBg3 from '../assets/images/hero-bg-3.jpg'; // Your third background image
import heroBg4 from '../assets/images/hero-bg-4.jpg'; // Your fourth background image

const HomePage = () => {
  const categories = [
    {
      icon: <FaMugHot />,
      title: 'Breakfast',
      description: 'Start your day with our hearty breakfast selection',
      items: ['English Breakfast', 'Tuber & Cream Vegetables', 'Fresh Juices', 'Tea & Coffee'],
      color: 'var(--primary-red-light)'
    },
    {
      icon: <FaUtensils />,
      title: 'Main Dishes',
      description: 'Freshly prepared main courses',
      items: ['Beef Specialties', 'Fish Dishes', 'Chicken Varieties', 'Pasta Menu'],
      color: '#f0f9ff'
    },
    {
      icon: <FaIceCream />,
      title: 'Desserts',
      description: 'Sweet endings to your meal',
      items: ['Cakes & Slices', 'Ice Cream', 'Milkshakes', 'Cupcakes'],
      color: '#fef3c7'
    },
    {
      icon: <FaCookieBite />,
      title: 'Snacks',
      description: 'Quick bites and appetizers',
      items: ['Samosas', 'Pancakes', 'Omelettes', 'Toasted Bread'],
      color: '#f0fdf4'
    }
  ];

  const features = [
    { icon: <FaLeaf />, text: 'Fresh Ingredients' },
    { icon: <FiStar />, text: 'Made to Order' },
    { icon: <FiClock />, text: '6 AM - 8 PM Daily' }
  ];

  // HERO BACKGROUND CAROUSEL STATE
  const [currentBgSlide, setCurrentBgSlide] = useState(0);
  
  // Hero background images array - Add your imported images here
  const heroBackgroundImages = [
    {
      id: 1,
      image: heroBg1, // Your first restaurant image
      alt: 'Cake Me Away Restaurant Interior'
    },
    {
      id: 2,
      image: heroBg2, // Your second restaurant image
      alt: 'different meals offered'
    },
    {
      id: 3,
      image: heroBg3, // Your third restaurant image
      alt: 'Cake Me Away Food Presentation'
    },
    {
      id: 4,
      image: heroBg4, // Your fourth restaurant image
      alt: 'Cake Me Away Atmosphere'
    }
  ];

  // Auto slide hero background every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBgSlide((prev) => (prev + 1) % heroBackgroundImages.length);
    }, 6000);
    
    return () => clearInterval(interval);
  }, [heroBackgroundImages.length]);

  // MAIN CAROUSEL STATE AND IMAGES
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Carousel images array - Add your actual image imports here
  const carouselImages = [
    {
      id: 1,
      image: foodImage1,
      title: 'Fresh Breakfast',
      description: 'Start your day with our delicious morning specials'
    },
    {
      id: 2,
      image: foodImage2,
      title: 'Main Course Delights',
      description: 'Hearty meals prepared with love and care'
    },
    {
      id: 3,
      image: foodImage3,
      title: 'Sweet Desserts',
      description: 'Perfect endings to your dining experience'
    },
    {
      id: 4,
      image: foodImage4,
      title: 'Fresh Ingredients',
      description: 'Quality ingredients for quality meals'
    },
    {
      id: 5,
      image: foodImage5,
      title: 'Warm Ambiance',
      description: 'Enjoy our cozy restaurant atmosphere'
    }
  ];

  // Auto slide main carousel every 5 seconds
  useEffect(() => {
    const carouselInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    
    return () => clearInterval(carouselInterval);
  }, [carouselImages.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="home-page">
      {/* Hero Section with Background Image Carousel */}
      <section className="hero-section">
        {/* Background Image Carousel */}
        <div className="hero-bg-carousel">
          {heroBackgroundImages.map((bgImage, index) => (
            <div
              key={bgImage.id}
              className={`hero-bg-slide ${index === currentBgSlide ? 'active' : ''}`}
              style={{
                backgroundImage: `url(${bgImage.image})`,
                opacity: index === currentBgSlide ? 1 : 0,
                transition: 'opacity 1.5s ease-in-out'
              }}
              aria-hidden={index !== currentBgSlide}
            >
              {/* Background Overlay for better text readability */}
              <div className="hero-bg-overlay"></div>
            </div>
          ))}
          
          {/* Background Carousel Indicators */}
          <div className="hero-bg-indicators">
            {heroBackgroundImages.map((_, index) => (
              <button
                key={index}
                className={`hero-bg-indicator ${index === currentBgSlide ? 'active' : ''}`}
                onClick={() => setCurrentBgSlide(index)}
                aria-label={`Go to background image ${index + 1}`}
              />
            ))}
          </div>
        </div>
        
        <div className="container">
          <div className="hero-content animate-fade">
            <div className="badge">
              <FaSeedling className="icon-sm" />
              <span>Fresh Daily</span>
            </div>
            
            <h1 className="hero-title">
              Taste the Freshness at
              <span className="highlight"> Cake Me Away</span>
            </h1>
            
            <p className="hero-description">
              Experience warm, made-to-order dining in Kwale, Kenya. 
              Every dish is prepared fresh upon order, ensuring quality and flavor in every bite.
            </p>
            
            <div className="hero-features">
              {features.map((feature, index) => (
                <div key={index} className="feature-item">
                  <div className="feature-icon">
                    {feature.icon}
                  </div>
                  <span className="feature-text">{feature.text}</span>
                </div>
              ))}
            </div>
            
            <div className="hero-actions">
              <Link to="/menu" className="btn btn-primary">
                <FaUtensils className="icon-sm" />
                <span>Explore Our Menu</span>
                <FiChevronRight className="icon-sm" />
              </Link>
              <a href="tel:+254743184519" className="btn btn-secondary">
                <FaPhoneAlt className="icon-sm" />
                <span>Call to Order</span>
              </a>
            </div>
          </div>
          
          <div className="hero-image animate-slide-right">
            <div className="food-showcase">
              <Link to="/menu#breakfast" className="showcase-item breakfast">
                <FaMugHot className="showcase-icon" />
                <span>Breakfast</span>
              </Link>
              <Link to="/menu#main-dishes" className="showcase-item main">
                <FaUtensils className="showcase-icon" />
                <span>Main Dishes</span>
              </Link>
              <Link to="/menu#desserts" className="showcase-item dessert">
                <FaIceCream className="showcase-icon" />
                <span>Desserts</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* NEW: Carousel Section */}
      <section className="carousel-section section">
        <div className="container">
          <h2 className="section-title">A Taste of Our Kitchen</h2>
          <p className="section-subtitle">
            Browse through some of our delicious offerings and fresh preparations
          </p>
          
          <div className="carousel-container">
            <div className="carousel-wrapper">
              {carouselImages.map((slide, index) => (
                <div
                  key={slide.id}
                  className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
                  style={{
                    transform: `translateX(-${currentSlide * 100}%)`
                  }}
                >
                  <div className="slide-image-container">
                    <img 
                      src={slide.image} 
                      alt={slide.title}
                      className="slide-image"
                    />
                    <div className="slide-overlay"></div>
                  </div>
                  <div className="slide-content">
                    <h3 className="slide-title">{slide.title}</h3>
                    <p className="slide-description">{slide.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Carousel Controls */}
            <button className="carousel-btn prev" onClick={prevSlide}>
              <FiChevronLeft className="carousel-icon" />
            </button>
            <button className="carousel-btn next" onClick={nextSlide}>
              <FiChevronRightIcon className="carousel-icon" />
            </button>
            
            {/* Carousel Indicators */}
            <div className="carousel-indicators">
              {carouselImages.map((_, index) => (
                <button
                  key={index}
                  className={`carousel-indicator ${index === currentSlide ? 'active' : ''}`}
                  onClick={() => goToSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories-section section">
        <div className="container">
          <h2 className="section-title">Our Delicious Categories</h2>
          <p className="section-subtitle">
            Discover our wide variety of fresh, made-to-order meals prepared with passion and care
          </p>
          
          <div className="categories-grid grid-4">
            {categories.map((category, index) => (
              <div 
                key={index} 
                className="category-card card"
                style={{ backgroundColor: category.color }}
              >
                <div className="category-header">
                  <div className="category-icon">
                    {category.icon}
                  </div>
                  <h3 className="category-title">{category.title}</h3>
                </div>
                
                <p className="category-description">{category.description}</p>
                
                <ul className="category-items">
                  {category.items.map((item, idx) => (
                    <li key={idx} className="category-item">
                      <FiChevronRight className="item-bullet" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                
                <Link to="/menu" className="category-link">
                  <span>View All</span>
                  <FiChevronRight />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-card card card-highlight">
            <h2 className="cta-title">Ready for a Fresh Dining Experience?</h2>
            
            <p className="cta-text">
              Visit us today or call to place your order. 
              Experience the difference of truly fresh, made-to-order meals at Cake Me Away.
            </p>
            
            <div className="cta-actions">
              <a href="tel:+254743184519" className="btn btn-primary btn-lg">
                <FaPhoneAlt className="icon-md" />
                <span>Call Now: +254 743 184 519</span>
              </a>
              
              <Link to="/contact" className="btn btn-outline">
                <FaMapMarkerAlt className="icon-md" />
                <span>Get Directions</span>
              </Link>
            </div>
            
            <div className="order-note">
              <p>
                <span className="icon-md">⚠️</span>
                All meals are prepared upon order for maximum freshness and quality
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;