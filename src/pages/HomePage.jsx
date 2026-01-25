import React from 'react';
import { 
  FiCoffee, 
  FiDroplet, 
  FiClock, 
  FiChevronRight,
  FiMapPin,
  FiPhone,
  FiStar,
  FiChevronsRight
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
import './HomePage.css';

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

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
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
              <a href="/menu" className="btn btn-primary">
                <FaUtensils className="icon-sm" />
                <span>Explore Our Menu</span>
                <FiChevronRight className="icon-sm" />
              </a>
              <a href="tel:+254743184519" className="btn btn-secondary">
                <FaPhoneAlt className="icon-sm" />
                <span>Call to Order</span>
              </a>
            </div>
          </div>
          
          <div className="hero-image animate-slide-right">
            <div className="food-showcase">
              <div className="showcase-item breakfast">
                <FaMugHot className="showcase-icon" />
                <span>Breakfast</span>
              </div>
              <div className="showcase-item main">
                <FaUtensils className="showcase-icon" />
                <span>Main Dishes</span>
              </div>
              <div className="showcase-item dessert">
                <FaIceCream className="showcase-icon" />
                <span>Desserts</span>
              </div>
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
                
                <a href="/menu" className="category-link">
                  <span>View All</span>
                  <FiChevronRight />
                </a>
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
              
              <a href="/contact" className="btn btn-outline">
                <FaMapMarkerAlt className="icon-md" />
                <span>Get Directions</span>
              </a>
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