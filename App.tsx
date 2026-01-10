import React, { useState } from 'react';
import Navbar from './components/Navbar';
import BentoGrid from './components/BentoGrid';
import SectionView from './components/SectionView';
import GeminiChat from './components/GeminiChat';
import { ViewState } from './types';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>('home');

  return (
    <div className="w-full max-w-[1600px] h-[95vh] md:h-[90vh] bg-white rounded-[3rem] shadow-2xl flex flex-col overflow-hidden relative border-8 border-white">
        {/* Dot Pattern Background Overlay inside the main card */}
        <div className="absolute inset-0 bg-dot-pattern opacity-30 pointer-events-none"></div>

        <Navbar currentView={currentView} setView={setCurrentView} />
        
        <main className="flex-1 p-4 md:p-6 lg:px-8 lg:pb-8 overflow-hidden relative z-10">
          {currentView === 'home' ? (
            <BentoGrid setView={setCurrentView} />
          ) : (
            <SectionView view={currentView} onBack={() => setCurrentView('home')} />
          )}
        </main>

        <GeminiChat />
    </div>
  );
};

export default App;