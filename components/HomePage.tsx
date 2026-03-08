import React from 'react';
import { ViewState } from '../types';
import { ArrowRight, Search, Sparkles, ArrowUpRight } from 'lucide-react';

interface HomePageProps {
  setView: (view: ViewState) => void;
  onOpenChat: () => void;
}

const HomePage: React.FC<HomePageProps> = ({ setView, onOpenChat }) => {
  return (
    <div className="h-full overflow-y-auto no-scrollbar pb-32 px-4 md:px-8 pt-4">
      
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-brand-black flex items-center justify-center text-white font-bold font-display text-xl">
                F
            </div>
            <div>
                <p className="text-xs text-brand-secondary font-medium uppercase tracking-wider">Welcome to</p>
                <h1 className="text-lg font-bold font-display leading-none">Fairway High</h1>
            </div>
        </div>
        <button onClick={() => setView('admissions')} className="bg-brand-gray hover:bg-gray-200 text-brand-black px-4 py-2 rounded-full text-sm font-medium transition-colors">
            Apply 2025
        </button>
      </div>

      {/* Bento Grid Hero */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-10 h-[400px] md:h-[500px]">
        {/* Large Left Item */}
        <div className="col-span-2 row-span-2 relative rounded-[2rem] overflow-hidden group cursor-pointer" onClick={() => setView('about')}>
            <img 
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1600&auto=format&fit=crop" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                alt="Campus"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex flex-col justify-end p-6">
                <span className="bg-white/20 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full w-fit mb-2">Established 1998</span>
                <h2 className="text-white text-3xl font-display font-bold leading-tight">Excellence in <br/>Kawempe-Kazo</h2>
            </div>
        </div>

        {/* Top Right Item */}
        <div className="bg-brand-gray rounded-[2rem] p-6 flex flex-col justify-between group hover:bg-brand-accent hover:text-white transition-colors cursor-pointer" onClick={() => setView('academics')}>
            <div className="flex justify-between items-start">
                <div className="p-2 bg-white rounded-full text-brand-black group-hover:bg-white/20 group-hover:text-white transition-colors">
                    <ArrowUpRight size={20} />
                </div>
                <span className="font-display font-bold text-4xl">A+</span>
            </div>
            <div>
                <p className="text-sm font-medium opacity-70">Academics</p>
                <p className="font-bold text-lg">Top UNEB Results</p>
            </div>
        </div>

        {/* Bottom Right Item */}
        <div className="relative rounded-[2rem] overflow-hidden group cursor-pointer" onClick={() => setView('co-curricular')}>
             <img 
                src="https://images.unsplash.com/photo-1526232761682-d26e03ac148e?q=80&w=800&auto=format&fit=crop" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                alt="Sports"
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                <div className="bg-white/20 backdrop-blur-md p-3 rounded-full text-white">
                    <ArrowRight size={24} />
                </div>
            </div>
        </div>
      </div>

      {/* AI Search Bar Section */}
      <div className="mb-12 text-center max-w-xl mx-auto">
        <h2 className="text-3xl font-display font-bold mb-4 text-brand-black">How can we help?</h2>
        <p className="text-brand-secondary mb-8">Our smart AI assistant helps you find exactly what you need—faster and easier than ever.</p>
        
        <div 
            onClick={onOpenChat}
            className="bg-white border border-gray-200 rounded-full p-2 pl-6 flex items-center shadow-soft hover:shadow-lg transition-all cursor-pointer group"
        >
            <Search className="text-gray-400 mr-3" size={20} />
            <span className="flex-1 text-left text-gray-400 text-sm">Ask anything about admissions, fees...</span>
            <div className="bg-brand-accent text-white p-3 rounded-full group-hover:scale-105 transition-transform shadow-glow">
                <Sparkles size={20} />
            </div>
        </div>
      </div>

      {/* Quick Tags / Horizontal Scroll */}
      <div className="mb-8">
        <div className="flex gap-3 overflow-x-auto no-scrollbar pb-4">
            {[
                { label: 'Admissions 2025', icon: '📝', view: 'admissions' },
                { label: 'School Fees', icon: '💰', view: 'admissions' },
                { label: 'Sports', icon: '⚽', view: 'co-curricular' },
                { label: 'Gallery', icon: '📸', view: 'gallery' },
                { label: 'Contact Us', icon: '📞', view: 'contact' },
            ].map((tag, i) => (
                <button 
                    key={i}
                    onClick={() => setView(tag.view as ViewState)}
                    className="flex items-center gap-2 bg-brand-gray hover:bg-white hover:shadow-md border border-transparent hover:border-gray-100 px-5 py-3 rounded-2xl whitespace-nowrap transition-all font-medium text-sm text-brand-black"
                >
                    <span>{tag.icon}</span>
                    {tag.label}
                </button>
            ))}
        </div>
      </div>

    </div>
  );
};

export default HomePage;

