import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag, Leaf } from 'lucide-react';
import { ViewState } from '../types';

interface NavbarProps {
  currentView: ViewState;
  setView: (view: ViewState) => void;
  cartCount: number;
}

const Navbar: React.FC<NavbarProps> = ({ currentView, setView, cartCount }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Menu', value: ViewState.MENU },
    { label: 'Concierge', value: ViewState.CONCIERGE },
    { label: 'Locations', value: ViewState.LOCATIONS },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div 
            className="flex items-center gap-2 cursor-pointer group" 
            onClick={() => setView(ViewState.HOME)}
            role="button"
            aria-label="Go to Homepage"
        >
            <div className={`p-2 rounded-full transition-colors ${isScrolled ? 'bg-life-green text-white' : 'bg-white text-life-green'}`}>
                <Leaf size={24} />
            </div>
            <span className={`font-serif text-2xl font-bold tracking-tight transition-colors ${
                isScrolled ? 'text-life-dark-green' : 'text-white'
            }`}>
                LIFE ALIVE
            </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => setView(link.value)}
              className={`font-medium text-sm uppercase tracking-widest transition-colors hover:text-life-orange ${
                currentView === link.value 
                  ? 'text-life-orange' 
                  : (isScrolled ? 'text-life-dark-green' : 'text-white/90')
              }`}
            >
              {link.label}
            </button>
          ))}
          
          <button className={`relative p-2 rounded-full transition-colors ${
             isScrolled ? 'hover:bg-gray-100 text-life-dark-green' : 'hover:bg-white/10 text-white'
          }`} aria-label="Shopping Cart">
            <ShoppingBag size={24} />
            {cartCount > 0 && (
                <span className="absolute top-0 right-0 bg-life-orange text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-white animate-in zoom-in">
                    {cartCount}
                </span>
            )}
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
            className={`md:hidden p-2 ${isScrolled ? 'text-life-dark-green' : 'text-white'}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
        >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-0 bg-life-cream z-40 flex flex-col p-6 animate-in slide-in-from-top-10 fade-in duration-300 pt-24">
            {navLinks.map((link) => (
                <button
                key={link.label}
                onClick={() => {
                    setView(link.value);
                    setMobileMenuOpen(false);
                }}
                className="text-3xl font-serif text-life-dark-green py-6 border-b border-gray-200 text-left hover:text-life-orange transition-colors"
                >
                {link.label}
                </button>
            ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;