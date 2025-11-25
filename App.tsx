import React, { useState } from 'react';
import Navbar from './components/Navbar';
import MenuSection from './components/MenuSection';
import Concierge from './components/Concierge';
import Footer from './components/Footer';
import Button from './components/Button';
import { ViewState, MenuItem } from './types';
import { ArrowRight, MapPin, Clock } from 'lucide-react';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>(ViewState.HOME);
  const [cartCount, setCartCount] = useState(0);

  const handleOrder = (item: MenuItem) => {
    setCartCount(prev => prev + 1);
    // In a real app, we would add to a cart state
    alert(`Added ${item.name} to your wellness cart! 🌿`);
  };

  const Hero = () => (
    <div className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=2053&auto=format&fit=crop')",
            filter: "brightness(0.6)"
        }}
      ></div>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-life-dark-green/90 via-transparent to-transparent z-0"></div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 text-center text-white mt-16">
        <h2 className="text-life-orange font-bold uppercase tracking-[0.2em] mb-4 animate-in fade-in slide-in-from-bottom-8 duration-700">Organic Cafe & Wellness</h2>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
          Eat to Feel <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-life-orange">Alive</span>
        </h1>
        <p className="max-w-xl mx-auto text-lg md:text-xl text-gray-200 mb-10 font-light leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
          Whole, organic meals crafted from scratch to energize your body and uplift your spirit.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500">
          <Button size="lg" onClick={() => setCurrentView(ViewState.MENU)}>
            View Menu
          </Button>
          <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-life-dark-green" onClick={() => setCurrentView(ViewState.CONCIERGE)}>
            Ask the Concierge
          </Button>
        </div>
      </div>
    </div>
  );

  const LocationsView = () => (
    <div className="container mx-auto px-4 py-32 min-h-screen">
       <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-life-dark-green mb-4">Our Locations</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Visit us to experience the vibrant atmosphere and healing foods in person.</p>
       </div>
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
                <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-lg transition-all">
                    <h3 className="font-serif text-2xl font-bold text-life-green mb-2">Cambridge / Central Square</h3>
                    <div className="space-y-4 text-gray-600 mb-6">
                        <div className="flex items-start gap-3">
                            <MapPin className="mt-1 text-life-orange" size={18} />
                            <p>765 Massachusetts Ave<br/>Cambridge, MA 02139</p>
                        </div>
                        <div className="flex items-start gap-3">
                            <Clock className="mt-1 text-life-orange" size={18} />
                            <p>Mon-Sun: 8am - 9pm</p>
                        </div>
                    </div>
                    <Button variant="outline" size="sm" fullWidth>Get Directions</Button>
                </div>
            ))}
       </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-life-cream font-sans selection:bg-life-orange selection:text-white">
      <Navbar currentView={currentView} setView={setCurrentView} cartCount={cartCount} />
      
      {currentView === ViewState.HOME && (
        <>
            <Hero />
            
            {/* Featured Section */}
            <div className="py-24 container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    <div className="flex-1 space-y-6">
                        <h2 className="font-serif text-4xl font-bold text-life-dark-green">Not sure what to eat?</h2>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            Let our AI Wellness Concierge guide you. Whether you need an immunity boost, a burst of energy, or just some comfort food, we'll find the perfect match for your body's needs.
                        </p>
                        <div 
                            className="inline-flex items-center gap-2 text-life-orange font-bold uppercase tracking-wider cursor-pointer hover:gap-4 transition-all"
                            onClick={() => setCurrentView(ViewState.CONCIERGE)}
                        >
                            Try it now <ArrowRight size={20} />
                        </div>
                    </div>
                    <div className="flex-1 w-full">
                        <div className="relative bg-white p-8 rounded-3xl shadow-xl border border-gray-100 transform rotate-2 hover:rotate-0 transition-transform duration-500">
                             <div className="absolute -top-4 -left-4 bg-life-purple text-white px-4 py-2 rounded-lg font-bold shadow-md z-10">New!</div>
                             <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-10 h-10 rounded-full bg-life-green flex items-center justify-center text-white">
                                        <span className="font-serif italic">AI</span>
                                    </div>
                                    <p className="text-gray-500 text-sm">Wellness Concierge says...</p>
                                </div>
                                <p className="text-lg text-gray-800 font-medium italic">
                                    "Based on your mood, I recommend the <span className="text-life-green font-bold">Swami Bowl</span>. The sweet curry miso is comforting, while the fresh kale provides the energy boost you're looking for! 🌿"
                                </p>
                             </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Preview Menu Grid (Just top 4) */}
            <div className="bg-white py-24">
                <div className="container mx-auto px-6">
                    <div className="flex justify-between items-end mb-12">
                        <div>
                            <h2 className="font-serif text-4xl font-bold text-life-dark-green mb-2">Fan Favorites</h2>
                            <p className="text-gray-500">Our most loved organic bowls and blends.</p>
                        </div>
                        <Button variant="outline" onClick={() => setCurrentView(ViewState.MENU)}>View Full Menu</Button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                         {/* We import MENU_ITEMS dynamically or just map a few here for preview, 
                             for simplicity reusing MenuSection logic but limited would be better. 
                             I'll just render the MenuSection component but limit via props if I had them, 
                             but here I will just render the MenuSection content directly.
                         */}
                    </div>
                     <MenuSection onOrder={handleOrder} />
                </div>
            </div>
        </>
      )}

      {currentView === ViewState.MENU && (
         <div className="animate-in fade-in duration-500">
             <div className="bg-life-dark-green text-white py-32 text-center">
                <h1 className="font-serif text-5xl font-bold mb-4">Our Menu</h1>
                <p className="text-white/80 max-w-2xl mx-auto px-4">Plant-based goodness, made fresh to order.</p>
             </div>
             <MenuSection onOrder={handleOrder} />
         </div>
      )}

      {currentView === ViewState.CONCIERGE && (
        <div className="animate-in slide-in-from-bottom-10 duration-500 min-h-screen bg-life-cream pt-32 pb-24 px-4">
             <div className="text-center mb-10">
                <h1 className="font-serif text-4xl font-bold text-life-dark-green mb-2">Wellness Concierge</h1>
                <p className="text-gray-600">Personalized nutrition advice powered by AI</p>
             </div>
             <Concierge />
        </div>
      )}

      {currentView === ViewState.LOCATIONS && (
          <div className="animate-in fade-in duration-500">
               <div className="bg-life-orange text-white py-32 text-center">
                    <h1 className="font-serif text-5xl font-bold mb-4">Find Us</h1>
                    <p className="text-white/80">Come say hi!</p>
                </div>
              <LocationsView />
          </div>
      )}

      <Footer />
    </div>
  );
};

export default App;