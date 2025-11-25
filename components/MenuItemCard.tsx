import React from 'react';
import { MenuItem } from '../types';
import { Plus, Info } from 'lucide-react';
import Button from './Button';

interface MenuItemCardProps {
  item: MenuItem;
  onOrder: (item: MenuItem) => void;
}

const MenuItemCard: React.FC<MenuItemCardProps> = ({ item, onOrder }) => {
  return (
    <div className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full">
      <div className="relative h-64 overflow-hidden">
        <img 
          src={item.image} 
          alt={item.name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4 flex flex-wrap gap-2">
            {item.tags.slice(0, 2).map(tag => (
                <span key={tag} className="bg-white/90 backdrop-blur-sm text-life-dark-green text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                    {tag}
                </span>
            ))}
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-serif text-2xl font-semibold text-life-dark-green group-hover:text-life-orange transition-colors">
            {item.name}
          </h3>
          <span className="font-sans font-medium text-life-green">${item.price.toFixed(2)}</span>
        </div>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-2 flex-grow font-sans leading-relaxed">
          {item.description}
        </p>
        
        <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
            <div className="text-xs text-gray-400 font-medium">
                {item.calories} cal
            </div>
            <button 
                onClick={() => onOrder(item)}
                className="w-10 h-10 rounded-full bg-life-green text-white flex items-center justify-center hover:bg-life-orange transition-colors shadow-sm hover:shadow-md"
                aria-label="Add to cart"
            >
                <Plus size={20} />
            </button>
        </div>
      </div>
    </div>
  );
};

export default MenuItemCard;