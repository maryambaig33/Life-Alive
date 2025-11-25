import React, { useState, useRef, useEffect } from 'react';
import { generateWellnessRecommendation } from '../services/geminiService';
import { ChatMessage } from '../types';
import Button from './Button';
import { Sparkles, Send, Loader2, RefreshCw } from 'lucide-react';

const Concierge: React.FC = () => {
  const [query, setQuery] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'model',
      text: "Welcome to Life Alive! 🌿 I'm your Wellness Concierge. How is your body feeling today? (e.g., 'I need energy', 'Feeling stressed', 'Want something spicy')"
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

  const handleSend = async () => {
    if (!query.trim()) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: query
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
    <div className="bg-life-cream rounded-3xl shadow-2xl overflow-hidden border border-white flex flex-col h-[600px] w-full max-w-4xl mx-auto">
      {/* Header */}
      <div className="bg-life-purple p-6 text-white flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="bg-white/20 p-2 rounded-full">
            <Sparkles className="w-6 h-6 text-yellow-300" />
          </div>
          <div>
            <h2 className="font-serif text-xl font-semibold">Wellness Concierge</h2>
            <p className="text-xs text-purple-200 uppercase tracking-widest">Powered by Gemini AI</p>
          </div>
        </div>
        <button 
            onClick={() => setMessages([messages[0]])}
            className="text-white/70 hover:text-white transition-colors"
            title="Reset Chat"
        >
            <RefreshCw size={18} />
        </button>
      </div>

      {/* Messages Area */}
      <div className="flex-grow overflow-y-auto p-6 space-y-6 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-fixed">
        {messages.map((msg) => (
          <div 
            key={msg.id} 
            className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div 
              className={`
                max-w-[80%] rounded-2xl p-4 shadow-sm relative
                ${msg.role === 'user' 
                  ? 'bg-life-dark-green text-white rounded-br-none' 
                  : 'bg-white text-gray-800 rounded-bl-none border border-gray-100'}
              `}
            >
              <p className="whitespace-pre-wrap leading-relaxed">{msg.text}</p>
              {msg.role === 'model' && (
                  <div className="absolute -left-2 top-0 w-0 h-0 border-t-[10px] border-t-white border-l-[10px] border-l-transparent" />
              )}
              {msg.role === 'user' && (
                  <div className="absolute -right-2 top-0 w-0 h-0 border-t-[10px] border-t-life-dark-green border-r-[10px] border-r-transparent" />
              )}
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="flex justify-start">
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
      <div className="p-4 bg-white border-t border-gray-100">
        <div className="relative flex items-center gap-2">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyPress}
            placeholder="Tell us how you feel (e.g., 'I want a post-workout meal')..."
            className="w-full bg-gray-50 border-gray-200 text-gray-800 placeholder:text-gray-400 focus:ring-life-purple focus:border-life-purple rounded-full py-4 pl-6 pr-14 shadow-inner"
          />
          <button 
            onClick={handleSend}
            disabled={!query.trim() || isTyping}
            className="absolute right-2 p-2 bg-life-purple text-white rounded-full hover:bg-purple-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
          >
            {isTyping ? <Loader2 className="animate-spin w-5 h-5" /> : <Send className="w-5 h-5" />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Concierge;