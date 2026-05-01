import React from 'react';

const Footer = () => {
  return (
    <footer className="relative w-full mt-40 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-orange/5 to-brand-orange/10"></div>
      
      {/* Top border with gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-orange/50 to-transparent"></div>
      
      <div className="relative max-w-7xl mx-auto px-8 py-16">
        {/* Main content */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <div className="flex flex-col gap-4">
            <div className="text-3xl font-bold font-space-grotesk tracking-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-orange-400">
                HVP
              </span>
              <span className="text-white">_CORE</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Building innovative web solutions with modern technologies. Let's create something amazing together.
            </p>
            {/* Social Icons */}
            <div className="flex gap-3 mt-2">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:bg-brand-orange/20 hover:border-brand-orange/50 transition-all duration-300 border border-white/10"
              >
                <span className="material-symbols-outlined text-white text-lg">code</span>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:bg-brand-orange/20 hover:border-brand-orange/50 transition-all duration-300 border border-white/10"
              >
                <span className="material-symbols-outlined text-white text-lg">work</span>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:bg-brand-orange/20 hover:border-brand-orange/50 transition-all duration-300 border border-white/10"
              >
                <span className="material-symbols-outlined text-white text-lg">chat</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white font-space-grotesk font-bold text-lg mb-2">Quick Links</h3>
            <a href="#stack" className="text-gray-400 hover:text-brand-orange transition-colors text-sm flex items-center gap-2 group">
              <span className="material-symbols-outlined text-xs group-hover:translate-x-1 transition-transform">arrow_forward</span>
              Tech Stack
            </a>
            <a href="#projects" className="text-gray-400 hover:text-brand-orange transition-colors text-sm flex items-center gap-2 group">
              <span className="material-symbols-outlined text-xs group-hover:translate-x-1 transition-transform">arrow_forward</span>
              Projects
            </a>
            <a href="#history" className="text-gray-400 hover:text-brand-orange transition-colors text-sm flex items-center gap-2 group">
              <span className="material-symbols-outlined text-xs group-hover:translate-x-1 transition-transform">arrow_forward</span>
              History
            </a>
            <a href="#connect" className="text-gray-400 hover:text-brand-orange transition-colors text-sm flex items-center gap-2 group">
              <span className="material-symbols-outlined text-xs group-hover:translate-x-1 transition-transform">arrow_forward</span>
              Contact
            </a>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white font-space-grotesk font-bold text-lg mb-2">Get In Touch</h3>
            <a 
              href="mailto:harshanaidupushadapu@gmail.com"
              className="flex items-center gap-3 text-gray-400 hover:text-brand-orange transition-colors text-sm group"
            >
              <span className="material-symbols-outlined text-brand-orange group-hover:scale-110 transition-transform">mail</span>
              <span>harshanaidupushadapu@gmail.com</span>
            </a>
            <div className="flex items-center gap-3 text-gray-400 text-sm">
              <span className="material-symbols-outlined text-brand-orange">location_on</span>
              <span>Manav Rachna University</span>
            </div>
            <div className="flex items-center gap-3 text-gray-400 text-sm">
              <span className="material-symbols-outlined text-brand-orange">school</span>
              <span>B.Tech - Computer Science</span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-500 text-sm font-space-grotesk">
            © 2026 <span className="text-brand-orange font-semibold">Harsha Vardhan Pushadapu</span>. All Rights Reserved
          </div>
          <div className="flex gap-6 text-xs text-gray-500">
            <button className="hover:text-brand-orange transition-colors cursor-pointer">Privacy Policy</button>
            <button className="hover:text-brand-orange transition-colors cursor-pointer">Terms of Service</button>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-brand-orange/5 rounded-full blur-3xl -z-10"></div>
      </div>
    </footer>
  );
};

export default Footer;
