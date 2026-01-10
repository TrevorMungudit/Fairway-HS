import React from 'react';
import { ArrowUpRight, ShoppingCart, Video, MapPin, Calendar, BookOpen } from 'lucide-react';
import { ViewState } from '../types';

interface BentoGridProps {
  setView: (view: ViewState) => void;
}

const BentoGrid: React.FC<BentoGridProps> = ({ setView }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 h-full overflow-y-auto pb-4 custom-scrollbar lg:overflow-hidden">
      
      {/* Left Column - Large Dark Hero Block */}
      <div className="bg-brand-black rounded-[2.5rem] p-8 md:p-12 text-white flex flex-col justify-between relative overflow-hidden group min-h-[500px] lg:h-auto">
        {/* Abstract Background Decoration */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-purple opacity-20 blur-[100px] rounded-full transform translate-x-1/2 -translate-y-1/2 group-hover:opacity-30 transition-opacity duration-700"></div>
        
        <div className="relative z-10">
          <span className="inline-block py-1 px-3 border border-white/20 rounded-full text-xs font-bold tracking-widest mb-6 text-white/70 uppercase">
            Admissions Open 2025
          </span>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-medium leading-tight mb-4">
            Empowering <br />
            <span className="text-gray-500">Minds,</span> <br />
            Shaping Futures.
          </h1>
          <p className="text-gray-400 max-w-md text-lg">
            Fairway High School in Kawempe-Kazo offers a world-class education blending academic rigor with holistic development.
          </p>
        </div>

        {/* Hero Image / Object */}
        <div className="absolute right-0 bottom-20 w-1/2 h-1/2 opacity-80 pointer-events-none hidden md:block">
             <img 
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1000&auto=format&fit=crop" 
                alt="Student holding books"
                className="w-full h-full object-cover rounded-tl-[3rem] opacity-60 mix-blend-screen grayscale group-hover:grayscale-0 transition-all duration-700"
            />
        </div>

        <div className="relative z-10 mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <button 
            onClick={() => setView('admissions')}
            className="bg-white text-brand-black px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:gap-4 hover:scale-105 transition-all duration-300"
          >
            Start Application
            <BookOpen size={20} />
          </button>
          
          <div className="flex items-center gap-2 text-sm text-gray-400">
             <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full border-2 border-brand-black bg-gray-600"></div>
                <div className="w-8 h-8 rounded-full border-2 border-brand-black bg-gray-500"></div>
                <div className="w-8 h-8 rounded-full border-2 border-brand-black bg-gray-400 flex items-center justify-center text-brand-black font-bold text-xs">+2k</div>
             </div>
             <span>Alumni Community</span>
          </div>
        </div>
      </div>

      {/* Right Column - Grid */}
      <div className="grid grid-rows-[auto_1fr] gap-4 h-full">
        
        {/* Top Block - Light Grey - Student Life/Blog */}
        <div 
            onClick={() => setView('student-life')}
            className="bg-gray-100 rounded-[2.5rem] p-8 md:p-10 relative overflow-hidden cursor-pointer group transition-all hover:bg-gray-200 min-h-[250px]"
        >
          <div className="absolute top-6 right-6 p-2 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
            <ArrowUpRight size={20} />
          </div>
          
          <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">Student Life & Culture</span>
          
          <div className="flex justify-between items-end mt-4 relative z-10">
            <div>
                 <h2 className="font-display text-3xl md:text-4xl font-medium mt-2 mb-2 group-hover:translate-x-1 transition-transform">
                    World of <br /> Opportunity
                </h2>
                <span className="inline-flex items-center gap-2 font-bold text-sm border-b border-gray-300 pb-0.5 group-hover:border-black transition-colors">
                    Explore Activities <ArrowUpRight size={14} />
                </span>
            </div>
             {/* Abstract 3D shape placeholder */}
             <div className="w-32 h-32 md:w-40 md:h-40 bg-gradient-to-br from-gray-300 to-gray-400 rounded-full blur-sm opacity-50 absolute -right-4 -bottom-10 group-hover:scale-110 transition-transform duration-500"></div>
              <img 
                src="https://picsum.photos/id/160/300/200"
                alt="Student Activity"
                className="w-32 h-32 object-cover rounded-2xl rotate-3 shadow-lg absolute right-4 top-1/2 translate-y-[-20%] group-hover:rotate-6 transition-all duration-300 hidden sm:block"
             />
          </div>
        </div>

        {/* Bottom Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-full min-h-[250px]">
          
          {/* Bottom Left - Purple - About/History */}
          <div 
            onClick={() => setView('about')}
            className="bg-brand-purple rounded-[2.5rem] p-8 relative overflow-hidden cursor-pointer group hover:bg-purple-500 transition-colors text-white flex flex-col justify-between"
          >
            <div className="absolute top-6 right-6 transition-transform group-hover:rotate-45">
                <ArrowUpRight size={24} />
            </div>
            
            <div>
                <span className="text-xs font-bold text-purple-200 uppercase tracking-widest">Who We Are</span>
                <h3 className="font-display text-2xl md:text-3xl font-medium mt-4 leading-tight">
                    Our History & <br/>Mission
                </h3>
            </div>

            <div className="mt-4">
                 <p className="text-purple-100 text-sm line-clamp-3">
                    Founded in 1998, Fairway High School has been a beacon of hope and excellence in Kawempe-Kazo.
                 </p>
                 <div className="mt-4 font-bold text-sm">Read More</div>
            </div>
          </div>

          {/* Bottom Right - Lime Green - Contact */}
          <div 
            onClick={() => setView('contact')}
            className="bg-brand-lime rounded-[2.5rem] p-8 relative overflow-hidden cursor-pointer group hover:bg-lime-400 transition-colors text-brand-black flex flex-col justify-between"
          >
             <div className="absolute top-6 right-6 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1">
                <MapPin size={24} />
            </div>

            <div>
                <span className="text-xs font-bold text-lime-800 uppercase tracking-widest">Get in Touch</span>
                <h3 className="font-display text-2xl md:text-3xl font-medium mt-4 leading-tight">
                    Contact Us
                </h3>
            </div>
             
             <div className="mt-4 space-y-2">
                <div className="flex items-center gap-2 bg-white/30 p-2 rounded-lg backdrop-blur-sm">
                    <div className="w-2 h-2 rounded-full bg-green-600 animate-pulse"></div>
                    <span className="text-xs font-bold">Office Open: 8am - 5pm</span>
                </div>
                 <p className="text-brand-black/70 text-sm font-medium">
                    Kawempe-Kazo, Uganda
                 </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default BentoGrid;