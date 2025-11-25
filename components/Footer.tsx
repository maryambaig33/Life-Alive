import React from 'react';
import { Leaf, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-life-dark-green text-white pt-20 pb-10 rounded-t-[3rem] mt-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
             <div className="flex items-center gap-2">
                <Leaf className="text-life-orange" size={32} />
                <span className="font-serif text-3xl font-bold">LIFE ALIVE</span>
             </div>
             <p className="text-white/70 leading-relaxed max-w-xs">
                Nourishing the body, mind, and spirit with vibrant, organic, plant-based food. Eat to feel alive.
             </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-life-orange">Explore</h4>
            <ul className="space-y-4 text-white/80">
                <li className="hover:text-white cursor-pointer transition-colors">Our Story</li>
                <li className="hover:text-white cursor-pointer transition-colors">Menu</li>
                <li className="hover:text-white cursor-pointer transition-colors">Catering</li>
                <li className="hover:text-white cursor-pointer transition-colors">Careers</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-life-orange">Contact</h4>
            <ul className="space-y-4 text-white/80">
                <li>hello@lifealive.com</li>
                <li>(555) 123-4567</li>
                <li>Massachusetts, USA</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-life-orange">Follow Us</h4>
            <div className="flex gap-4">
                <a href="#" className="p-3 bg-white/10 rounded-full hover:bg-life-orange transition-colors">
                    <Instagram size={20} />
                </a>
                <a href="#" className="p-3 bg-white/10 rounded-full hover:bg-life-orange transition-colors">
                    <Facebook size={20} />
                </a>
                <a href="#" className="p-3 bg-white/10 rounded-full hover:bg-life-orange transition-colors">
                    <Twitter size={20} />
                </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-white/50">
            <p>&copy; {new Date().getFullYear()} Life Alive Organic Cafe. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
                <span className="cursor-pointer hover:text-white">Privacy Policy</span>
                <span className="cursor-pointer hover:text-white">Terms of Service</span>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;