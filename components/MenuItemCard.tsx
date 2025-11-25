import React from 'react';
import { MenuItem } from '../types';
import { Plus } from 'lucide-react';

interface MenuItemCardProps {
  item: MenuItem;
  onOrder: (item: MenuItem) => void;
}

const MenuItemCard: React.FC<MenuItemCardProps> = ({ item, onOrder }) => {
  return (
    <div className="group relative bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 border border-gray-100 flex flex-col h-full">
      <div className="relative h-64 overflow-hidden">
        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors z-10 pointer-events-none"></div>
        <img 
          src={item.image} 
          alt={item.name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4 flex flex-wrap gap-2 z-20">
            {item.tags.slice(0, 2).map(tag => (
                <span key={tag} className="bg-white/95 backdrop-blur-md text-life-dark-green text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-sm">
                    {tag}
                </span>
            ))}
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow relative">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-serif text-2xl font-semibold text-life-dark-green group-hover:text-life-orange transition-colors">
            {item.name}
          </h3>
          <span className="font-sans font-bold text-life-green bg-life-green/10 px-2 py-1 rounded-lg">${item.price.toFixed(2)}</span>
        </div>
        
        <p className="text-gray-500 text-sm mb-6 line-clamp-3 flex-grow font-sans leading-relaxed">
          {item.description}
        </p>
        
        <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
            <div className="text-xs text-gray-400 font-medium flex items-center gap-1">
                🔥 {item.calories} cal
            </div>
            <button 
                onClick={() => onOrder(item)}
                className="w-12 h-12 rounded-full bg-life-cream text-life-dark-green border-2 border-transparent hover:border-life-green hover:text-life-green flex items-center justify-center transition-all shadow-sm hover:shadow-md hover:scale-110 active:scale-95"
                aria-label="Add to cart"
            >
                <Plus size={24} strokeWidth={2.5} />
            </button>
        </div>
      </div>
    </div>
  );
};

export default MenuItemCard;