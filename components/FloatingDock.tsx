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
    <div className="absolute bottom-8 md:bottom-10 left-1/2 transform -translate-x-1/2 z-[100] w-max max-w-[90vw]">
      <div className="flex items-center gap-2 bg-brand-black/95 backdrop-blur-xl p-3 rounded-full shadow-2xl border border-white/20 ring-1 ring-black/5">
        {mainNavItems.map((item) => (
          <button
            key={item.view}
            onClick={() => setView(item.view)}
            className={`p-3 md:p-4 rounded-full transition-all duration-300 group relative flex-shrink-0 ${
              currentView === item.view 
                ? 'bg-white text-brand-black shadow-lg scale-110' 
                : 'text-gray-400 hover:text-white hover:bg-white/10'
            }`}
            aria-label={item.label}
          >
            {getIcon(item.view)}
            {/* Tooltip */}
            <span className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-brand-black text-white text-xs font-bold py-1.5 px-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-xl border border-white/10">
              {item.label}
            </span>
          </button>
        ))}
        
        {/* Separator */}
        <div className="w-px h-8 bg-white/20 mx-1 md:mx-2"></div>

        {/* Menu Trigger for other items */}
        <button 
            onClick={() => setView('about')} 
            className={`p-3 md:p-4 rounded-full transition-all duration-300 text-gray-400 hover:text-white hover:bg-white/10 flex-shrink-0 ${['about', 'co-curricular', 'blog', 'gallery'].includes(currentView) ? 'text-white bg-white/10' : ''}`}
            aria-label="More"
        >
            <LayoutGrid size={20} />
        </button>
      </div>
    </div>
  );
};

export default FloatingDock;
