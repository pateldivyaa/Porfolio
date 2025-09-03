import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles, Zap, Home, User, FolderOpen, Code, FileText, Mail } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home', icon: Home },
    { name: 'About', href: '#about', icon: User },
    { name: 'Projects', href: '#projects', icon: FolderOpen },
    { name: 'Skills', href: '#skills', icon: Code },
    { name: 'Resume', href: '#resume', icon: FileText },
    { name: 'Contact', href: '#contact', icon: Mail }
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <>
      {/* Background overlay when mobile menu is open */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled 
            ? 'bg-slate-900/95 backdrop-blur-2xl border-b border-white/10 shadow-2xl shadow-purple-500/10' 
            : 'bg-transparent'
        }`}
      >
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            
            {/* Logo */}
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl opacity-20 group-hover:opacity-30 blur transition-all duration-300" />
              <div className="relative flex items-center gap-3 bg-white/5 backdrop-blur-sm border border-white/10 px-4 py-2 rounded-xl hover:bg-white/10 transition-all duration-300">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-400 rounded-lg flex items-center justify-center">
                  <Sparkles size={18} className="text-white" />
                </div>
                <div className="text-xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Divya Patel
                </div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-2">
              {navItems.map((item, index) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`group relative flex items-center gap-2 px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                    activeSection === item.name.toLowerCase()
                      ? 'bg-white/10 text-white border border-white/20'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                  style={{
                    animationDelay: `${index * 0.1}s`
                  }}
                >
                  <item.icon size={16} className="transition-colors duration-300" />
                  <span className="text-sm">{item.name}</span>
                  
                  {/* Hover effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>
              ))}
            </div>

            {/* CTA Button - Desktop */}
            <div className="hidden md:flex items-center gap-4">
              <button className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:-translate-y-0.5">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Zap size={16} className="relative z-10" />
                <span className="relative z-10">Let's Talk</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden relative p-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl hover:bg-white/20 transition-all duration-300"
              onClick={() => setIsOpen(!isOpen)}
            >
              <div className="relative w-6 h-6">
                <span
                  className={`absolute block h-0.5 w-6 bg-white transform transition-all duration-300 ${
                    isOpen ? 'rotate-45 top-3' : 'top-1'
                  }`}
                />
                <span
                  className={`absolute block h-0.5 w-6 bg-white transform transition-all duration-300 ${
                    isOpen ? 'opacity-0' : 'top-3'
                  }`}
                />
                <span
                  className={`absolute block h-0.5 w-6 bg-white transform transition-all duration-300 ${
                    isOpen ? '-rotate-45 top-3' : 'top-5'
                  }`}
                />
              </div>
            </button>
          </div>

          {/* Mobile Navigation */}
          <div
            className={`md:hidden fixed top-24 right-6 left-6 transition-all duration-500 transform ${
              isOpen 
                ? 'opacity-100 translate-y-0 scale-100' 
                : 'opacity-0 -translate-y-4 scale-95 pointer-events-none'
            }`}
          >
            <div className="bg-slate-900/95 backdrop-blur-2xl border border-white/10 rounded-2xl p-6 shadow-2xl">
              <div className="space-y-2">
                {navItems.map((item, index) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className={`group w-full flex items-center gap-4 px-4 py-4 rounded-xl font-medium transition-all duration-300 ${
                      activeSection === item.name.toLowerCase()
                        ? 'bg-white/10 text-white border border-white/20'
                        : 'text-gray-300 hover:text-white hover:bg-white/5'
                    }`}
                    style={{
                      animationDelay: `${index * 0.1}s`
                    }}
                  >
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-xl flex items-center justify-center group-hover:from-blue-600/30 group-hover:to-purple-600/30 transition-all duration-300">
                      <item.icon size={20} />
                    </div>
                    <div className="flex-1 text-left">
                      <div className="text-lg">{item.name}</div>
                      <div className="text-xs text-gray-400">
                        {item.name === 'Home' && 'Welcome section'}
                        {item.name === 'About' && 'My story & background'}
                        {item.name === 'Projects' && 'Featured work'}
                        {item.name === 'Skills' && 'Technical expertise'}
                        {item.name === 'Resume' && 'Professional experience'}
                        {item.name === 'Contact' && 'Get in touch'}
                      </div>
                    </div>
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </button>
                ))}
              </div>
              
              {/* Mobile CTA */}
              <div className="mt-6 pt-6 border-t border-white/10">
                <button 
                  onClick={() => scrollToSection('#contact')}
                  className="w-full group relative inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-4 rounded-xl font-semibold hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <Zap size={20} className="relative z-10" />
                  <span className="relative z-10">Start a Conversation</span>
                </button>
              </div>
            </div>
          </div>
        </nav>

        {/* Progress Indicator */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 transform scale-x-0 origin-left transition-transform duration-300" 
             style={{ 
               transform: scrolled ? `scaleX(${Math.min(window.scrollY / (document.body.scrollHeight - window.innerHeight), 1)})` : 'scaleX(0)' 
             }} />
      </header>
    </>
  );
};

export default Header;