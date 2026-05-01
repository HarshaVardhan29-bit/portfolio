import React from 'react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-xl border-b border-white/10 h-20">
      <nav className="flex justify-between items-center max-w-7xl mx-auto px-8 h-full">
        <div className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent font-space-grotesk tracking-tight">
          Harsha Vardhan
        </div>
        <div className="hidden md:flex items-center gap-8">
          <a className="font-space-grotesk tracking-tight text-cyan-400 border-b-2 border-cyan-400 pb-1" href="#stack">
            Stack
          </a>
          <a className="font-space-grotesk tracking-tight text-gray-400 hover:text-white transition-colors" href="#projects">
            Projects
          </a>
          <a className="font-space-grotesk tracking-tight text-gray-400 hover:text-white transition-colors" href="#history">
            History
          </a>
          <a className="font-space-grotesk tracking-tight text-gray-400 hover:text-white transition-colors" href="#connect">
            Connect
          </a>
        </div>
        <button 
          onClick={() => window.open('/resume.pdf', '_blank')}
          className="bg-primary-container text-on-primary-container px-6 py-2 rounded-full font-bold scale-95 active:scale-90 transition-transform hover:shadow-lg hover:shadow-brand-orange/30"
        >
          Resume
        </button>
      </nav>
    </header>
  );
};

export default Header;
