import React, { useState } from 'react';
import FloatingDock from './components/FloatingDock';
import HomePage from './components/HomePage';
import SectionView from './components/SectionView';
import GeminiChat from './components/GeminiChat';
import { ViewState } from './types';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>('home');
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <div className="w-full h-screen bg-white flex items-center justify-center p-0 md:p-4 lg:p-8">
        {/* Main App Container - Mobile App Style */}
        <div className="w-full max-w-[1200px] h-full md:h-[90vh] bg-white md:rounded-[3rem] shadow-2xl flex flex-col overflow-hidden relative">
            
            <main className="flex-1 overflow-hidden relative z-10">
              {currentView === 'home' ? (
                <HomePage setView={setCurrentView} onOpenChat={() => setIsChatOpen(true)} />
              ) : (
                <SectionView view={currentView} onBack={() => setCurrentView('home')} onNavigate={setCurrentView} />
              )}
            </main>

            {/* Floating Dock Navigation */}
            <FloatingDock currentView={currentView} setView={setCurrentView} />

            {/* Chat Component */}
            <GeminiChat isOpen={isChatOpen} setIsOpen={setIsChatOpen} />
        </div>
    </div>
  );
};

export default App;