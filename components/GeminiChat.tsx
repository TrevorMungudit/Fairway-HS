import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Loader2, Sparkles } from 'lucide-react';
import { sendMessageToGemini } from '../services/geminiService';
import { ChatMessage } from '../types';

interface GeminiChatProps {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}

const GeminiChat: React.FC<GeminiChatProps> = ({ isOpen, setIsOpen }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: '1', role: 'model', text: 'Hello! I am the Fairway AI Assistant. Ask me anything about our school, admissions, or student life.' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!inputValue.trim()) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: inputValue
    };

    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsTyping(true);

    const botResponseText = await sendMessageToGemini(
        userMsg.text, 
        messages.map(m => ({ role: m.role, text: m.text }))
    );

    const botMsg: ChatMessage = {
      id: (Date.now() + 1).toString(),
      role: 'model',
      text: botResponseText
    };

    setMessages(prev => [...prev, botMsg]);
    setIsTyping(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Floating Toggle Button (Only visible if chat is closed, maybe we don't need it if we have the search bar) */}
      {/* We'll keep it as a fallback or for closing */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden" onClick={() => setIsOpen(false)}></div>
      )}

      {/* Chat Window */}
      <div
        className={`fixed bottom-0 md:bottom-24 right-0 md:right-6 w-full md:w-96 h-[80vh] md:h-[600px] bg-white md:rounded-3xl shadow-2xl z-50 overflow-hidden flex flex-col transition-all duration-500 cubic-bezier(0.16, 1, 0.3, 1) ${
          isOpen ? 'translate-y-0 opacity-100' : 'translate-y-[110%] opacity-0 pointer-events-none'
        }`}
      >
        {/* Header */}
        <div className="bg-white border-b border-gray-100 p-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-brand-accent p-2 rounded-full text-white">
                <Sparkles size={18} />
            </div>
            <div>
                <h3 className="font-bold font-display text-brand-black">Fairway Assistant</h3>
                <p className="text-xs text-brand-secondary">Powered by Gemini</p>
            </div>
          </div>
          <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <X size={20} className="text-brand-black" />
          </button>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-6 bg-white custom-scrollbar">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[85%] px-5 py-3 text-sm leading-relaxed ${
                  msg.role === 'user'
                    ? 'bg-brand-black text-white rounded-[1.5rem] rounded-br-sm'
                    : 'bg-brand-gray text-brand-black rounded-[1.5rem] rounded-bl-sm'
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-brand-gray rounded-[1.5rem] rounded-bl-sm px-5 py-3 flex items-center space-x-2">
                <Sparkles className="animate-pulse text-brand-accent" size={16} />
                <span className="text-xs text-gray-500 font-medium flex items-center">
                  Thinking
                  <span className="flex space-x-1 ml-1">
                    <span className="w-1 h-1 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                    <span className="w-1 h-1 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                    <span className="w-1 h-1 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                  </span>
                </span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-4 bg-white border-t border-gray-100">
          <div className={`flex items-center space-x-2 bg-brand-gray rounded-full p-1 pl-4 transition-all duration-300 ${isTyping ? 'ring-2 ring-brand-accent/30 animate-pulse' : ''}`}>
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder={isTyping ? "AI is typing..." : "Ask anything..."}
              disabled={isTyping}
              className="flex-1 bg-transparent text-brand-black text-sm focus:outline-none disabled:opacity-50"
            />
            <button
              onClick={handleSend}
              disabled={isTyping || !inputValue.trim()}
              className="p-3 bg-brand-black text-white rounded-full hover:bg-brand-accent disabled:opacity-50 transition-all duration-300 transform hover:scale-105"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default GeminiChat;
