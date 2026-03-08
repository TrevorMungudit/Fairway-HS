import React from 'react';
import { NavItem, ViewState } from '../types';
import { NAV_ITEMS } from '../constants';
import { Home, Info, BookOpen, GraduationCap, Trophy, Image, Mail, LayoutGrid } from 'lucide-react';

interface FloatingDockProps {
  currentView: ViewState;
  setView: (view: ViewState) => void;
}

const FloatingDock: React.FC<FloatingDockProps> = ({ currentView, setView }) => {
  
  const getIcon = (view: ViewState) => {
    switch (view) {
      case 'home': return <Home size={20} />;
      case 'about': return <Info size={20} />;
      case 'academics': return <BookOpen size={20} />;
      case 'admissions': return <GraduationCap size={20} />;
      case 'co-curricular': return <Trophy size={20} />;
      case 'gallery': return <Image size={20} />;
      case 'contact': return <Mail size={20} />;
      default: return <LayoutGrid size={20} />;
    }
  };

  // We'll show a subset of icons in the dock to keep it clean, 
  // or maybe just the main ones and a "More" button if needed.
  // For now, let's try to fit the main ones.
  const mainNavItems = NAV_ITEMS.filter(item => 
    ['home', 'academics', 'admissions', 'contact'].includes(item.view)
  );

  return (
    <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-50">
      <div className="flex items-center gap-2 bg-brand-black/90 backdrop-blur-xl p-2 rounded-full shadow-2xl border border-white/10">
        {mainNavItems.map((item) => (
          <button
            key={item.view}
            onClick={() => setView(item.view)}
            className={`p-3 rounded-full transition-all duration-300 group relative ${
              currentView === item.view 
                ? 'bg-white text-brand-black shadow-lg scale-110' 
                : 'text-gray-400 hover:text-white hover:bg-white/10'
            }`}
          >
            {getIcon(item.view)}
            {/* Tooltip */}
            <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-brand-black text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
              {item.label}
            </span>
          </button>
        ))}
        
        {/* Separator */}
        <div className="w-px h-6 bg-white/20 mx-1"></div>

        {/* Menu Trigger for other items */}
        <button 
            onClick={() => setView('about')} // Just mapping to about for now as a "more" place or we could open a modal
            className={`p-3 rounded-full transition-all duration-300 text-gray-400 hover:text-white hover:bg-white/10 ${['about', 'co-curricular', 'blog', 'gallery'].includes(currentView) ? 'text-white bg-white/10' : ''}`}
        >
            <LayoutGrid size={20} />
        </button>
      </div>
    </div>
  );
};

export default FloatingDock;
