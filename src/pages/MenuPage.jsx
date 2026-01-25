import React from 'react';
import './MenuPage.css';

const MenuPage = () => {
  const menuData = [
    {
      emoji: '🥞',
      title: "Breakfast",
      description: "Start your day right with our hearty breakfast options",
      items: [
        { name: "English Breakfast", description: "A complete morning feast", includes: "Toasted bread, pancake, baked beans, omelette, roasted tomatoes, sunny side up, tea bacon, 2 sausages, fruits, juice" },
        { name: "Tuber & Cream Vegetables", description: "Traditional breakfast option" },
        { name: "Boiled Eggs", description: "Freshly boiled eggs served hot" },
        { name: "Plantain", description: "Sweet fried plantains" },
        { name: "Tea Selection", description: "Various tea options available" },
        { name: "Fresh Juice", description: "Daily fresh fruit juices" }
      ]
    },
    {
      emoji: '☕',
      title: "Beverages",
      description: "Hot and cold drinks to complement your meal",
      items: [
        { name: "Hot Drinks", description: "White Tea, Black Tea, Coffee varieties" },
        { name: "Cold Drinks", description: "Iced Cappuccino, Iced Latte, Iced Chocolate" },
        { name: "Herbal Tea", description: "Hibiscus, Green Tea, Lemon Tea, Chai Dawa, Chamomile" },
        { name: "Fresh Juice", description: "Passion, Watermelon, Mango, Avocado, Banana" }
      ]
    },
    {
      emoji: '🍴',
      title: "Snacks",
      description: "Quick bites and light meals",
      items: [
        { name: "Pancake", description: "Fluffy homemade pancakes" },
        { name: "Toasted Bread", description: "Freshly toasted bread" },
        { name: "Mahamri", description: "Traditional Swahili doughnuts" },
        { name: "Samosas", description: "Crispy pastry with savory filling" },
        { name: "Sausages", description: "Grilled to perfection" },
        { name: "Spanish Omelette", description: "Fluffy egg omelette" },
        { name: "Fried Eggs", description: "Cooked to your preference" }
      ]
    },
    {
      emoji: '🍝',
      title: "Pasta Menu",
      description: "Italian-inspired pasta dishes made fresh",
      items: [
        { name: "Spaghetti Bolognese", description: "Classic spaghetti with tomato & minced meat sauce" },
        { name: "Penne Pasta", description: "Penne in fresh basil & olive oil sauce with parmesan" },
        { name: "Macaroni Cheese", description: "Baked in rich, creamy cheese sauce" }
      ]
    },
    {
      emoji: '🐟',
      title: "Fish Dishes",
      description: "Fresh fish prepared in various styles",
      items: [
        { name: "Wet Fried Fish", description: "Fish cooked in savory sauce" },
        { name: "Fish Kupaka", description: "Fish in coconut cream sauce" },
        { name: "Creamed Fish", description: "Fish in creamy white sauce" },
        { name: "Fish Fillet", description: "Boneless fish fillet" },
        { name: "Fish Fingers", description: "Crispy breaded fish fingers" }
      ]
    },
    {
      emoji: '🥩',
      title: "Beef Specialties",
      description: "Hearty beef dishes",
      items: [
        { name: "Beef Stew", description: "Slow-cooked beef in rich gravy" },
        { name: "Beef Wet Fry", description: "Beef fried with onions and spices" },
        { name: "Beef Pan Fry", description: "Quick-fried beef strips" },
        { name: "Mince Meat", description: "Seasoned ground beef" },
        { name: "Mutton Dishes", description: "Mutton Pan Fry & Wet Fry available" }
      ]
    },
    {
      emoji: '🍗',
      title: "Chicken Dishes",
      description: "Chicken prepared multiple ways",
      items: [
        { name: "Crispy Fried Chicken", description: "Golden fried chicken" },
        { name: "Grilled Chicken", description: "Char-grilled to perfection" },
        { name: "Deep Fried Chicken", description: "Crispy on the outside, juicy inside" },
        { name: "Oven Baked Chicken", description: "Slow-roasted for maximum flavor" },
        { name: "Wet Fry Chicken", description: "Chicken in savory sauce" }
      ]
    },
    {
      emoji: '🍰',
      title: "Desserts",
      description: "Sweet treats to end your meal",
      items: [
        { name: "Cake Slices", description: "Choco Fudge, Red Velvet, Pina Colada, Marble Choco" },
        { name: "Cupcakes", description: "Assorted flavors" },
        { name: "Ice Cream", description: "Pina Colada, Vanilla, Strawberry, Lemon, Oreo, Chocolate, Lotus" },
        { name: "Milkshakes", description: "Vanilla, Strawberry, Oreo, Chocolate, Lemon" },
        { name: "Queen Cakes", description: "Small sweet cakes" }
      ]
    }
  ];

  const sides = [
    "Rice", "Vegetable Rice", "Coconut Rice", "Chapati", "Chips", 
    "Baked Potatoes", "Mashed Potatoes", "Ugali", "Pilau", "Creamed Pinch", 
    "Coconut Beans", "Beans", "Pojo", "Pojo ya Nazi", "Chips Masala"
  ];

  return (
    <div className="menu-page">
      {/* Hero Section */}
      <section className="menu-hero">
        <div className="container">
          <div className="menu-hero-content">
            <h1 className="menu-title">Our Menu</h1>
            <p className="menu-subtitle">
              Discover our wide variety of fresh, made-to-order meals. 
              Every dish is prepared with care and quality ingredients.
            </p>
            <div className="fresh-promise">
              <span className="promise-emoji">🍃</span>
              <p>All meals are prepared upon order for maximum freshness</p>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Categories */}
      <section className="menu-categories section">
        <div className="container">
          <div className="menu-grid">
            {menuData.map((category, index) => (
              <div key={index} className="menu-category-card card">
                <div className="category-header">
                  <div className="category-emoji">{category.emoji}</div>
                  <h3>{category.title}</h3>
                </div>
                
                <div className="category-content">
                  <p className="category-description">{category.description}</p>
                  
                  <ul className="menu-items-list">
                    {category.items.map((item, idx) => (
                      <li key={idx} className="menu-item">
                        <div className="item-name">{item.name}</div>
                        {item.description && (
                          <p className="item-description">{item.description}</p>
                        )}
                        {item.includes && (
                          <div className="item-includes">
                            <span className="includes-label">Includes:</span> {item.includes}
                          </div>
                        )}
                      </li>
                    ))}
                  </ul>

                  {category.title === "Pasta Menu" && (
                    <div className="pasta-addons">
                      <p>
                        <span className="addon-emoji">✨</span>
                        Optional add-ons: Grilled Chicken, Minced Beef, Fish Fillet, 
                        Vegetables, Extra Cheese, Additional Sauce
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sides Section */}
      <section className="sides-section section-sm">
        <div className="container">
          <h2 className="sides-title">Side Dishes & Accompaniments</h2>
          <div className="sides-grid">
            {sides.map((side, index) => (
              <div key={index} className="side-item">
                <span className="side-emoji">🥄</span>
                <span className="side-name">{side}</span>
              </div>
            ))}
          </div>
          
          <div className="menu-note note">
            <p>
              <span className="note-emoji">💡</span>
              <strong>Note:</strong> Fish prices depend on size. All meals are prepared fresh upon order.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MenuPage;