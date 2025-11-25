import React, { useState } from 'react';
import { MENU_ITEMS } from '../constants';
import { MenuItem } from '../types';
import MenuItemCard from './MenuItemCard';
import { Utensils } from 'lucide-react';

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
    <div className="container mx-auto px-6 py-24 min-h-screen">
      <div className="text-center mb-16 max-w-3xl mx-auto">
        <div className="flex items-center justify-center gap-2 mb-4 text-life-orange">
            <Utensils size={20} />
            <h2 className="font-bold uppercase tracking-widest text-sm">Our Kitchen</h2>
        </div>
        <h3 className="font-serif text-5xl font-bold text-life-dark-green mb-6 leading-tight">Organic. Plant-Based.<br/>Scratch-Made.</h3>
        <p className="text-gray-600 font-sans text-lg leading-relaxed">
          Every meal is crafted to nourish your body and delight your senses. Explore our vibrant selection of bowls, salads, and elixirs prepared with love.
        </p>
      </div>

      {/* Categories */}
      <div className="flex flex-wrap justify-center gap-3 mb-16">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-8 py-3 rounded-full text-sm font-bold tracking-wide transition-all duration-300 border-2 ${
              activeCategory === cat
                ? 'bg-life-dark-green border-life-dark-green text-white shadow-lg scale-105'
                : 'bg-transparent border-gray-200 text-gray-500 hover:border-life-green hover:text-life-green'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {filteredItems.map(item => (
          <div key={item.id} className="animate-in fade-in zoom-in duration-500 fill-mode-both">
             <MenuItemCard item={item} onOrder={onOrder} />
          </div>
        ))}
      </div>

      {filteredItems.length === 0 && (
        <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-gray-300">
          <p className="text-gray-500 text-lg">No items found in this category right now.</p>
        </div>
      )}
    </div>
  );
};

export default MenuSection;