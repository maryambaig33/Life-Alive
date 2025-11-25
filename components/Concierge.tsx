import React, { useState, useRef, useEffect } from 'react';
import { generateWellnessRecommendation } from '../services/geminiService';
import { ChatMessage } from '../types';
import { Sparkles, Send, Loader2, RefreshCw, MessageSquare } from 'lucide-react';

const SUGGESTION_CHIPS = [
  "⚡️ I need energy",
  "🥣 Comfort food",
  "🥗 Light & Fresh",
  "🏋️ Post-workout",
  "🌶️ Something spicy",
  "🤒 Immune boost"
];

const Concierge: React.FC = () => {
  const [query, setQuery] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'model',
      text: "Welcome, friend! 🌿 I'm your Wellness Concierge. How is your body feeling today? Tell me, and I'll find the perfect nourishing meal for you."
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (text: string = query) => {
    if (!text.trim()) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: text
    };

    setMessages(prev => [...prev, userMsg]);
    setQuery('');
    setIsTyping(true);

    const responseText = await generateWellnessRecommendation(userMsg.text);

    const modelMsg: ChatMessage = {
      id: (Date.now() + 1).toString(),
      role: 'model',
      text: responseText
    };

    setMessages(prev => [...prev, modelMsg]);
    setIsTyping(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="bg-life-cream rounded-3xl shadow-2xl overflow-hidden border border-white flex flex-col h-[600px] w-full max-w-4xl mx-auto ring-1 ring-black/5">
      {/* Header */}
      <div className="bg-life-purple p-6 text-white flex items-center justify-between relative overflow-hidden">
        <div className="absolute inset-0 bg-white/5 opacity-30 pattern-dots"></div>
        <div className="flex items-center gap-4 relative z-10">
          <div className="bg-white/20 p-2.5 rounded-2xl backdrop-blur-sm shadow-inner">
            <Sparkles className="w-6 h-6 text-yellow-300" />
          </div>
          <div>
            <h2 className="font-serif text-2xl font-bold tracking-wide">Wellness Concierge</h2>
            <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                <p className="text-xs text-purple-200 uppercase tracking-widest font-medium">Online • Powered by Gemini</p>
            </div>
          </div>
        </div>
        <button 
            onClick={() => setMessages([messages[0]])}
            className="text-white/70 hover:text-white hover:bg-white/10 p-2 rounded-full transition-all relative z-10"
            title="Reset Chat"
        >
            <RefreshCw size={20} />
        </button>
      </div>

      {/* Messages Area */}
      <div className="flex-grow overflow-y-auto p-6 space-y-8 bg-gradient-to-b from-white/50 to-life-cream/50 relative">
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/cubes.png')" }}></div>
        
        {messages.map((msg) => (
          <div 
            key={msg.id} 
            className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-in fade-in slide-in-from-bottom-2 duration-300`}
          >
            <div 
              className={`
                max-w-[85%] rounded-2xl p-5 shadow-sm relative text-base leading-relaxed
                ${msg.role === 'user' 
                  ? 'bg-life-dark-green text-white rounded-br-none' 
                  : 'bg-white text-gray-800 rounded-bl-none border border-gray-100'}
              `}
            >
              {msg.role === 'model' && (
                  <Sparkles className="w-4 h-4 text-life-purple mb-2 opacity-50" />
              )}
              <p className="whitespace-pre-wrap">{msg.text}</p>
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="flex justify-start animate-in fade-in zoom-in duration-300">
            <div className="bg-white rounded-2xl rounded-bl-none p-4 shadow-sm border border-gray-100 flex items-center gap-2">
              <span className="w-2 h-2 bg-life-green rounded-full animate-bounce"></span>
              <span className="w-2 h-2 bg-life-green rounded-full animate-bounce delay-100"></span>
              <span className="w-2 h-2 bg-life-green rounded-full animate-bounce delay-200"></span>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="bg-white border-t border-gray-100 p-4">
        {/* Suggestion Chips - Only show if minimal messages */}
        {messages.length < 4 && !isTyping && (
             <div className="flex flex-wrap gap-2 mb-4 px-2">
                {SUGGESTION_CHIPS.map(chip => (
                    <button
                        key={chip}
                        onClick={() => handleSend(chip)}
                        className="text-xs sm:text-sm font-medium px-4 py-2 rounded-full bg-life-cream border border-life-green/20 text-life-dark-green hover:bg-life-green hover:text-white transition-all duration-300"
                    >
                        {chip}
                    </button>
                ))}
             </div>
        )}

        <div className="relative flex items-center gap-2">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyPress}
            placeholder="Tell me how you're feeling..."
            className="w-full bg-gray-50 border-gray-200 text-gray-800 placeholder:text-gray-400 focus:ring-2 focus:ring-life-purple/50 focus:border-life-purple focus:bg-white rounded-xl py-4 pl-6 pr-14 transition-all"
          />
          <button 
            onClick={() => handleSend()}
            disabled={!query.trim() || isTyping}
            className="absolute right-2 p-2.5 bg-life-purple text-white rounded-lg hover:bg-purple-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-md hover:shadow-lg active:scale-95"
          >
            {isTyping ? <Loader2 className="animate-spin w-5 h-5" /> : <Send className="w-5 h-5" />}
          </button>
        </div>
        <p className="text-center text-[10px] text-gray-400 mt-2">AI can make mistakes. Please consult allergen info.</p>
      </div>
    </div>
  );
};

export default Concierge;