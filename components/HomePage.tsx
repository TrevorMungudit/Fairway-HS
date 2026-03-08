import React from 'react';
import { ViewState } from '../types';
import { BLOG_POSTS } from '../constants';
import { ArrowRight, Search, Sparkles, ArrowUpRight, Calendar, Bell, Users } from 'lucide-react';
import Footer from './Footer';

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
                <p className="text-[10px] text-brand-accent font-bold uppercase tracking-widest mt-1">Toil and Preserve</p>
            </div>
        </div>
        <button onClick={() => setView('admissions')} className="bg-brand-gray hover:bg-gray-200 text-brand-black px-4 py-2 rounded-full text-sm font-medium transition-colors">
            Apply 2025
        </button>
      </div>

      {/* Bento Grid Hero */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12 auto-rows-[minmax(180px,auto)]">
        {/* Large Hero Item - Campus */}
        <div className="col-span-1 md:col-span-2 lg:col-span-2 row-span-2 relative rounded-[2.5rem] overflow-hidden group cursor-pointer h-[300px] md:h-auto shadow-sm hover:shadow-md transition-all bg-brand-black" onClick={() => setView('about')}>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8">
                <span className="bg-white/20 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full w-fit mb-3 border border-white/10">Established 2015</span>
                <h2 className="text-white text-3xl md:text-4xl font-display font-bold leading-tight mb-2">Excellence in <br/>Kawempe-Kazo</h2>
                <p className="text-white/80 text-sm md:text-base line-clamp-2">Empowering the next generation of leaders through holistic education.</p>
            </div>
        </div>

        {/* Academics Item */}
        <div className="bg-brand-gray rounded-[2.5rem] p-8 flex flex-col justify-between group hover:bg-brand-accent hover:text-white transition-colors cursor-pointer h-[200px] md:h-auto shadow-sm hover:shadow-md" onClick={() => setView('academics')}>
            <div className="flex justify-between items-start">
                <div className="p-3 bg-white rounded-full text-brand-black group-hover:bg-white/20 group-hover:text-white transition-colors shadow-sm">
                    <ArrowUpRight size={24} />
                </div>
                <span className="font-display font-bold text-5xl opacity-20 group-hover:opacity-40 transition-opacity">A+</span>
            </div>
            <div>
                <p className="text-sm font-bold uppercase tracking-wider opacity-60 mb-1">Academics</p>
                <p className="font-bold text-xl leading-tight">Top UNEB Results & Curriculum</p>
            </div>
        </div>

        {/* Faculty Item */}
        <div className="bg-sky-50 rounded-[2.5rem] p-8 flex flex-col justify-between group hover:bg-brand-accent hover:text-white transition-colors cursor-pointer h-[200px] md:h-auto shadow-sm hover:shadow-md" onClick={() => setView('faculty')}>
            <div className="flex justify-between items-start">
                <div className="p-3 bg-white rounded-full text-brand-accent group-hover:bg-white/20 group-hover:text-white transition-colors shadow-sm">
                    <Users size={24} />
                </div>
            </div>
            <div>
                <p className="text-brand-accent/60 group-hover:text-white/60 text-sm font-bold uppercase tracking-wider mb-1 transition-colors">Our Team</p>
                <p className="font-bold text-xl leading-tight">Meet the Faculty</p>
            </div>
        </div>

        {/* Sports/Co-curricular Item */}
        <div className="relative rounded-[2.5rem] overflow-hidden group cursor-pointer h-[200px] md:h-auto shadow-sm hover:shadow-md transition-all bg-green-600" onClick={() => setView('co-curricular')}>
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors flex flex-col justify-between p-8">
                <div className="flex justify-end">
                    <div className="bg-white/20 backdrop-blur-md p-3 rounded-full text-white border border-white/10">
                        <ArrowRight size={24} />
                    </div>
                </div>
                <div>
                    <p className="text-white/80 text-xs font-bold uppercase tracking-wider mb-1">Co-curricular</p>
                    <h3 className="text-white font-bold text-xl">Sports & Talent</h3>
                </div>
            </div>
        </div>

        {/* News / Announcements Item (New) */}
        <div className="col-span-1 md:col-span-1 lg:col-span-1 bg-white border border-gray-100 rounded-[2.5rem] p-6 shadow-sm hover:shadow-md transition-all overflow-hidden flex flex-col h-[200px] md:h-auto">
            <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-lg flex items-center gap-2"><Bell size={18} className="text-brand-accent"/> Updates</h3>
                <button onClick={() => setView('blog')} className="text-xs font-bold text-brand-accent hover:underline">View All</button>
            </div>
            <div className="flex-1 overflow-y-auto custom-scrollbar space-y-4 pr-2">
                {BLOG_POSTS.slice(0, 3).map((post) => (
                    <div key={post.id} className="group cursor-pointer" onClick={() => setView('blog')}>
                        <p className="text-xs text-gray-400 font-bold mb-1 flex items-center gap-1"><Calendar size={10}/> {post.date}</p>
                        <h4 className="font-bold text-sm text-brand-black group-hover:text-brand-accent transition-colors line-clamp-2">{post.title}</h4>
                    </div>
                ))}
            </div>
            <div className="mt-4 pt-4 border-t border-gray-50">
                <div className="bg-brand-accent/5 rounded-xl p-3 flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                    <p className="text-xs font-medium text-brand-accent">Admissions Open for 2025</p>
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
                { label: 'Staff & Faculty', icon: '👨‍🏫', view: 'faculty' },
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
      
      <Footer />
    </div>
  );
};

export default HomePage;

