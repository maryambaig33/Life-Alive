import React, { useState } from 'react';
import Navbar from './components/Navbar';
import MenuSection from './components/MenuSection';
import Concierge from './components/Concierge';
import Footer from './components/Footer';
import Button from './components/Button';
import { ViewState, MenuItem } from './types';
import { ArrowRight, MapPin, Clock, Leaf, Heart, Sun } from 'lucide-react';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>(ViewState.HOME);
  const [cartCount, setCartCount] = useState(0);

  const handleOrder = (item: MenuItem) => {
    setCartCount(prev => prev + 1);
    // In a real app, we would add to a cart state
    alert(`Added ${item.name} to your wellness cart! 🌿`);
  };

  const Hero = () => (
    <div className="relative h-[90vh] min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0 animate-in fade-in duration-1000"
        style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=2874&auto=format&fit=crop')",
        }}
      ></div>
      
      {/* Overlay - Gradient for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-life-dark-green/90 via-life-dark-green/40 to-transparent z-0"></div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 text-white mt-16">
        <div className="max-w-3xl">
            <h2 className="text-life-orange font-bold uppercase tracking-[0.2em] mb-6 flex items-center gap-3 animate-in fade-in slide-in-from-bottom-4 duration-700">
                <span className="w-12 h-0.5 bg-life-orange"></span>
                Organic Cafe & Wellness
            </h2>
            <h1 className="font-serif text-6xl md:text-8xl font-bold mb-8 leading-[1.1] animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-100">
            Eat to Feel <br />
            <span className="text-yellow-300 italic pr-2">Alive</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 mb-10 font-light leading-relaxed max-w-xl animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200 border-l-4 border-life-orange pl-6">
            Whole, organic meals crafted from scratch to energize your body and uplift your spirit.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
            <Button size="lg" onClick={() => setCurrentView(ViewState.MENU)} className="shadow-xl shadow-life-orange/20">
                Order Now
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-life-dark-green backdrop-blur-sm" onClick={() => setCurrentView(ViewState.CONCIERGE)}>
                Ask the Concierge
            </Button>
            </div>
        </div>
      </div>
    </div>
  );

  const ValueProps = () => (
      <div className="bg-life-green py-16 text-white">
          <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
              <div className="flex flex-col items-center space-y-4">
                  <div className="bg-white/10 p-4 rounded-full">
                    <Leaf size={32} className="text-yellow-300" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold">100% Organic</h3>
                  <p className="text-white/80 leading-relaxed px-4">We source the finest organic ingredients to ensure every bite is free from pesticides and full of vitality.</p>
              </div>
              <div className="flex flex-col items-center space-y-4">
                  <div className="bg-white/10 p-4 rounded-full">
                    <Heart size={32} className="text-yellow-300" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold">Made with Love</h3>
                  <p className="text-white/80 leading-relaxed px-4">Our food is prepared fresh daily in our open kitchens, never processed and always scratch-made.</p>
              </div>
              <div className="flex flex-col items-center space-y-4">
                  <div className="bg-white/10 p-4 rounded-full">
                    <Sun size={32} className="text-yellow-300" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold">Holistic Wellness</h3>
                  <p className="text-white/80 leading-relaxed px-4">Nutrition designed to balance your energy, boost immunity, and clear your mind.</p>
              </div>
          </div>
      </div>
  );

  const LocationsView = () => {
    // Stable images for locations to prevent re-rendering flickers
    const locationImages = [
        "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1525610553991-2bede1a236e2?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1521017432531-fbd92d768814?q=80&w=800&auto=format&fit=crop"
    ];

    return (
        <div className="container mx-auto px-6 py-32 min-h-screen">
        <div className="text-center mb-16">
                <h2 className="font-serif text-5xl font-bold text-life-dark-green mb-6">Our Sanctuaries</h2>
                <p className="text-gray-600 max-w-2xl mx-auto text-lg">Visit us to experience the vibrant atmosphere, healing foods, and community in person.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[0, 1, 2].map((i) => (
                    <div key={i} className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                        <div className="h-48 rounded-2xl bg-gray-200 mb-6 overflow-hidden">
                            <img 
                                src={locationImages[i]} 
                                alt="Life Alive Location" 
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                loading="lazy"
                            />
                        </div>
                        <h3 className="font-serif text-2xl font-bold text-life-dark-green mb-2">Cambridge / Central Square</h3>
                        <div className="space-y-4 text-gray-600 mb-8">
                            <div className="flex items-start gap-3">
                                <MapPin className="mt-1 text-life-orange flex-shrink-0" size={20} />
                                <p>765 Massachusetts Ave<br/>Cambridge, MA 02139</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <Clock className="mt-1 text-life-orange flex-shrink-0" size={20} />
                                <p>Mon-Sun: 8am - 9pm</p>
                            </div>
                        </div>
                        <Button variant="outline" size="sm" fullWidth>Get Directions</Button>
                    </div>
                ))}
        </div>
        </div>
    );
  };

  return (
    <div className="min-h-screen bg-life-cream font-sans selection:bg-life-orange selection:text-white">
      <Navbar currentView={currentView} setView={setCurrentView} cartCount={cartCount} />
      
      {currentView === ViewState.HOME && (
        <>
            <Hero />
            <ValueProps />
            
            {/* Concierge Teaser Section */}
            <div className="py-24 container mx-auto px-6 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <div className="flex-1 space-y-8">
                        <div className="inline-block bg-life-purple/10 text-life-purple px-4 py-1.5 rounded-full font-bold text-xs uppercase tracking-widest">
                            AI Powered Wellness
                        </div>
                        <h2 className="font-serif text-5xl font-bold text-life-dark-green leading-tight">
                            Listen to your body.<br/>
                            <span className="text-life-green">We'll handle the rest.</span>
                        </h2>
                        <p className="text-xl text-gray-600 leading-relaxed font-light">
                            Not sure what to eat? Let our AI Wellness Concierge guide you. Whether you need an immunity boost, a burst of energy, or just some comfort food, we'll match you with the perfect organic meal.
                        </p>
                        <div 
                            className="inline-flex items-center gap-3 text-white bg-life-purple px-8 py-4 rounded-full font-bold shadow-lg hover:bg-purple-800 transition-all cursor-pointer group"
                            onClick={() => setCurrentView(ViewState.CONCIERGE)}
                        >
                            Ask the Concierge <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </div>
                    </div>
                    
                    <div className="flex-1 w-full relative">
                        {/* Decorative background blob */}
                        <div className="absolute -inset-4 bg-gradient-to-tr from-life-green/20 to-life-orange/20 rounded-full blur-3xl opacity-70"></div>
                        
                        <div className="relative bg-white p-8 rounded-[2.5rem] shadow-2xl border border-white/50 backdrop-blur-sm transform rotate-1 transition-transform duration-500 hover:rotate-0">
                             <div className="absolute -top-6 -right-6 bg-yellow-400 text-life-dark-green px-6 py-3 rounded-xl font-bold shadow-lg z-20 rotate-12">
                                Try me! ✨
                             </div>
                             
                             <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                                <div className="flex items-center gap-4 mb-6 border-b border-gray-200 pb-4">
                                    <div className="w-12 h-12 rounded-full bg-life-green flex items-center justify-center text-white shadow-md">
                                        <SparklesIcon />
                                    </div>
                                    <div>
                                        <p className="font-serif font-bold text-life-dark-green text-lg">Wellness Concierge</p>
                                        <p className="text-gray-400 text-xs uppercase tracking-wide">AI Nutritionist</p>
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <div className="bg-life-dark-green text-white p-4 rounded-xl rounded-br-none self-end ml-auto max-w-[90%]">
                                        I'm feeling a bit tired and sluggish today. 😴
                                    </div>
                                    <div className="bg-white border border-gray-200 text-gray-700 p-4 rounded-xl rounded-bl-none max-w-[90%] shadow-sm">
                                        <p>I recommend the <span className="text-life-green font-bold">Swami Bowl</span>! 🌿</p>
                                        <p className="mt-2 text-sm text-gray-500">The broccoli and kale are packed with iron for energy, and the sweet curry miso will wake up your senses without a caffeine crash.</p>
                                    </div>
                                </div>
                             </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Menu Preview Banner */}
            <div className="bg-life-dark-green py-24 relative overflow-hidden">
                 <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')]"></div>
                 <div className="container mx-auto px-6 relative z-10 text-center">
                    <h2 className="font-serif text-5xl font-bold text-white mb-6">Hungry yet?</h2>
                    <p className="text-life-cream text-xl mb-10 max-w-2xl mx-auto">Explore our full menu of warm grain bowls, fresh salads, superfood smoothies, and healing lattes.</p>
                    <Button onClick={() => setCurrentView(ViewState.MENU)} size="lg" className="bg-life-orange text-white hover:bg-white hover:text-life-orange">
                        View Full Menu
                    </Button>
                 </div>
            </div>
        </>
      )}

      {currentView === ViewState.MENU && (
         <div className="animate-in fade-in duration-500">
             <div className="bg-life-dark-green text-white pt-40 pb-20 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-20"></div>
                <div className="relative z-10">
                    <h1 className="font-serif text-6xl font-bold mb-4">Our Menu</h1>
                    <p className="text-white/80 max-w-2xl mx-auto px-4 text-xl font-light">Plant-based goodness, made fresh to order.</p>
                </div>
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
               <div className="bg-life-orange text-white pt-40 pb-20 text-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-multiply"></div>
                    <div className="relative z-10">
                        <h1 className="font-serif text-6xl font-bold mb-4">Find Us</h1>
                        <p className="text-white/90 text-xl">Come say hi!</p>
                    </div>
                </div>
              <LocationsView />
          </div>
      )}

      <Footer />
    </div>
  );
};

const SparklesIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>
)

export default App;