import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'О нас', href: '#about' },
    { name: 'Спикеры', href: '#speakers' },
    { name: 'Программа', href: '#agenda' },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled ? 'bg-black/90 border-white/10 backdrop-blur-sm' : 'bg-transparent border-transparent'
      }`}>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 h-16 sm:h-18 md:h-20 flex justify-between items-center">
          
          {/* Logo */}
          <a href="#" className="group flex items-center gap-1 sm:gap-1.5 md:gap-2 font-heading font-black text-base sm:text-lg md:text-xl tracking-tighter text-white">
            <span className="text-green-500">[</span>
            BUILD
            <span className="group-hover:text-green-500 transition-colors">WITH</span>
            AI
            <span className="text-green-500">]</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-12">
            <div className="flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-mono uppercase tracking-widest text-slate-400 hover:text-white hover:underline decoration-green-500 underline-offset-4 transition-all"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu size={28} strokeWidth={1.5} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[60] bg-black flex flex-col p-4 sm:p-6 animate-in slide-in-from-right duration-300">
          <div className="flex justify-end mb-8 sm:mb-10 md:mb-12">
            <button 
              className="text-white hover:text-green-500 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X size={28} className="sm:w-8 sm:h-8" strokeWidth={1} />
            </button>
          </div>
          
          <div className="flex flex-col gap-4 sm:gap-5 md:gap-6">
             {navLinks.map((link, idx) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-3xl sm:text-4xl md:text-5xl font-heading font-black text-white hover:text-green-500 transition-colors uppercase tracking-tight flex items-baseline gap-3 sm:gap-4 border-b border-white/10 pb-4 sm:pb-5 md:pb-6 break-words"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="text-xs sm:text-sm font-mono text-slate-600">0{idx + 1}</span>
                  {link.name}
                </a>
              ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
