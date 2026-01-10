import React from 'react';
import { Menu } from 'lucide-react';
import { NavItem, ViewState } from '../types';
import { NAV_ITEMS } from '../constants';

interface NavbarProps {
  currentView: ViewState;
  setView: (view: ViewState) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentView, setView }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <nav className="flex items-center justify-between py-6 px-4 md:px-8 bg-transparent relative z-40">
      {/* Logo */}
      <div 
        className="flex items-center space-x-2 cursor-pointer group"
        onClick={() => setView('home')}
      >
        <div className="w-10 h-10 rounded-full bg-brand-black flex items-center justify-center border-2 border-brand-black group-hover:bg-transparent transition-all">
            <div className="w-4 h-4 rounded-full bg-white group-hover:bg-brand-black transition-all"></div>
        </div>
        <span className="font-display font-bold text-xl tracking-tight hidden md:block">Fairway High</span>
      </div>

      {/* Desktop Nav */}
      <div className="hidden md:flex items-center space-x-8">
        {NAV_ITEMS.slice(0, 5).map((item) => (
          <button
            key={item.view}
            onClick={() => setView(item.view)}
            className={`text-sm font-medium transition-colors ${
              currentView === item.view ? 'text-brand-purple' : 'text-gray-600 hover:text-black'
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* Right Actions */}
      <div className="flex items-center space-x-4">
        <button 
            onClick={() => setView('contact')}
            className="hidden md:block text-sm font-bold bg-gray-100 hover:bg-gray-200 px-5 py-2.5 rounded-full transition-colors"
        >
          Portal Login
        </button>
        <button 
            onClick={() => setView('admissions')}
            className="text-sm font-bold bg-brand-black text-white hover:bg-brand-purple px-5 py-2.5 rounded-full transition-colors shadow-lg shadow-brand-purple/20"
        >
          Apply Now
        </button>
        
        {/* Mobile Menu Toggle */}
        <button 
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
            <Menu size={24} />
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-xl rounded-b-2xl p-4 flex flex-col space-y-4 md:hidden border-t">
             {NAV_ITEMS.map((item) => (
                <button
                    key={item.view}
                    onClick={() => {
                        setView(item.view);
                        setMobileMenuOpen(false);
                    }}
                    className={`text-left text-lg font-medium p-2 rounded-lg ${
                        currentView === item.view ? 'bg-gray-100 text-brand-purple' : 'text-gray-800'
                    }`}
                >
                    {item.label}
                </button>
            ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;