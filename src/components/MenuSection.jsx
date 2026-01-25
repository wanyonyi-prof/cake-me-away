import React from 'react';

const MenuSection = ({ title, items, icon, description }) => {
  // Simple icon components since lucide-react is having issues
  const Icon = ({ type }) => {
    const icons = {
      breakfast: '🥞',
      beverages: '☕',
      snacks: '🍴',
      pasta: '🍝',
      fish: '🐟',
      beef: '🥩',
      chicken: '🍗',
      desserts: '🍰',
    };
    return <span style={{ fontSize: '24px' }}>{icons[type] || '🍽️'}</span>;
  };

  return (
    <div className="menu-card">
      <div className="flex items-center space-x-3 mb-6">
        <Icon type={icon} />
        <h3 className="text-2xl font-serif font-semibold">{title}</h3>
      </div>
      
      {description && (
        <p className="text-gray-600 mb-6">{description}</p>
      )}
      
      <div className="space-y-4">
        {items.map((item, index) => (
          <div key={index} className="border-b border-gray-100 pb-4 last:border-0">
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-semibold text-lg text-gray-800">{item.name}</h4>
                {item.description && (
                  <p className="text-gray-600 mt-1">{item.description}</p>
                )}
                {item.includes && (
                  <p className="text-gray-500 text-sm mt-2">
                    Includes: {item.includes}
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {title.includes("Pasta") && (
        <div className="mt-6 p-4 bg-warm-cream rounded-lg">
          <p className="text-sm text-gray-700 italic">
            Optional add-ons available: Grilled Chicken, Minced Beef, Fish Fillet, 
            Vegetables (spinach or mushroom), Extra Cheese, Additional Sauce
          </p>
        </div>
      )}
    </div>
  );
};

export default MenuSection;