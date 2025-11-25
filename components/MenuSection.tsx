import React, { useState } from 'react';
import { MENU_ITEMS } from '../constants';
import { MenuItem } from '../types';
import MenuItemCard from './MenuItemCard';
import Button from './Button';

interface MenuSectionProps {
    onOrder: (item: MenuItem) => void;
}

const MenuSection: React.FC<MenuSectionProps> = ({ onOrder }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const categories = ['All', 'Warm Bowls', 'Salads', 'Smoothies', 'Lattes'];

  const filteredItems = activeCategory === 'All' 
    ? MENU_ITEMS 
    : MENU_ITEMS.filter(item => item.category === activeCategory);

  return (
    <div className="container mx-auto px-4 py-24 min-h-screen">
      <div className="text-center mb-16 max-w-2xl mx-auto">
        <h2 className="text-life-orange font-bold uppercase tracking-widest text-sm mb-3">Our Menu</h2>
        <h3 className="font-serif text-5xl font-bold text-life-dark-green mb-6">Organic. Plant-Based. Scratch-Made.</h3>
        <p className="text-gray-600 font-sans leading-relaxed">
          Every meal is crafted to nourish your body and delight your senses. Explore our vibrant selection of bowls, salads, and elixirs.
        </p>
      </div>

      {/* Categories */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
              activeCategory === cat
                ? 'bg-life-dark-green text-white shadow-lg scale-105'
                : 'bg-white text-life-dark-green border border-gray-200 hover:border-life-green hover:text-life-green'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {filteredItems.map(item => (
          <div key={item.id} className="animate-in fade-in zoom-in duration-500">
             <MenuItemCard item={item} onOrder={onOrder} />
          </div>
        ))}
      </div>

      {filteredItems.length === 0 && (
        <div className="text-center py-20">
          <p className="text-gray-500 text-lg">No items found in this category.</p>
        </div>
      )}
    </div>
  );
};

export default MenuSection;