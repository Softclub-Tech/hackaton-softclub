import React from 'react';
import { Terminal, ArrowRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black pt-12 sm:pt-16 md:pt-24 lg:pt-32 pb-6 sm:pb-8 md:pb-12 border-t border-white/20 relative overflow-hidden">

      {/* Background Texture - Only in corners now */}
      <div className="bg-corners-matrix opacity-30"></div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 relative z-10 w-full min-w-0">

        {/* Main Center Piece - Matches the Poster Design */}
        <div className="flex flex-col items-center justify-center text-center mb-12 sm:mb-16 md:mb-20 lg:mb-24">
           {/* BUILD WITH AI Typography */}
           <h2 className="text-[36px] sm:text-[42px] md:text-[56px] lg:text-[80px] xl:text-[100px] leading-[0.8] font-black font-heading text-white uppercase tracking-tighter mb-8 sm:mb-12 md:mb-16 select-none break-words">
             BUILD <span className="text-green-500">WITH</span> AI
           </h2>

           {/* Centered Logos Row - Matching the Reference */}
           <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 md:gap-12 lg:gap-24 opacity-100">

             {/* OryonBank Logo - Reverted to Image as requested */}
             <img
               src="/oriyonbonk.svg"
               alt="OryonBank"
               className="h-6 sm:h-8 md:h-10 lg:h-16 w-auto brightness-0 invert"
             />

             {/* SoftClub Logo */}
             <div className="flex items-center gap-2 sm:gap-3">
                <img
                 src="https://www.softclub.tj/logo-softclub.svg"
                 alt="SoftClub"
                 className="h-5 sm:h-6 md:h-8 lg:h-12 w-auto brightness-0 invert"
                />
             </div>

           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 sm:gap-10 md:gap-12 mb-12 sm:mb-16 md:mb-20 border-t border-white/10 pt-8 sm:pt-12 md:pt-16 backdrop-blur-sm bg-black/20">

          {/* Column 1: Status */}
          <div className="md:col-span-2">
             <div className="flex items-center gap-2 mb-4 sm:mb-5 md:mb-6 text-green-500">
                <Terminal size={18} className="sm:w-5 sm:h-5" />
                <span className="font-mono text-xs sm:text-sm uppercase tracking-widest">Статус системы: Активен</span>
             </div>
             <p className="text-slate-400 text-sm sm:text-base md:text-lg font-mono leading-relaxed max-w-md break-words">
               Душанбе, 3 января. <br/>
               Главный офис Oriyonbonk.
             </p>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h4 className="font-bold text-white mb-4 sm:mb-5 md:mb-6 uppercase tracking-wider font-heading text-sm sm:text-base">Меню</h4>
            <ul className="space-y-3 sm:space-y-4 font-mono text-xs sm:text-sm text-slate-500">
              <li><a href="#speakers" className="hover:text-green-500 flex items-center gap-2 transition-colors"><ArrowRight size={10} className="sm:w-3 sm:h-3"/> Спикеры</a></li>
              <li><a href="#agenda" className="hover:text-green-500 flex items-center gap-2 transition-colors"><ArrowRight size={10} className="sm:w-3 sm:h-3"/> Программа</a></li>
              <li><a href="#register" className="hover:text-green-500 flex items-center gap-2 transition-colors"><ArrowRight size={10} className="sm:w-3 sm:h-3"/> Регистрация</a></li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h4 className="font-bold text-white mb-4 sm:mb-5 md:mb-6 uppercase tracking-wider font-heading text-sm sm:text-base">Контакты</h4>
            <div className="flex flex-col gap-3 sm:gap-4">
              <a
                href="https://t.me/softclubtj"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 sm:gap-3 text-slate-400 hover:text-green-500 transition-colors group"
              >
                <img
                  src="/telegram.svg"
                  alt="Telegram"
                  className="w-4 h-4 sm:w-5 sm:h-5 brightness-0 invert opacity-60 group-hover:opacity-100 group-hover:brightness-0 group-hover:invert-[0.5] transition-all"
                />
                <span className="font-mono text-xs sm:text-sm">@softclubtj</span>
              </a>
              <a
                href="tel:+992557700900"
                className="flex items-center gap-2 sm:gap-3 text-slate-400 hover:text-green-500 transition-colors group"
              >
                <img
                  src="/phone.svg"
                  alt="Phone"
                  className="w-4 h-4 sm:w-5 sm:h-5 brightness-0 invert opacity-60 group-hover:opacity-100 group-hover:brightness-0 group-hover:invert-[0.5] transition-all"
                />
                <span className="font-mono text-xs sm:text-sm">558700900</span>
              </a>
              <a
                href="https://instagram.com/softclub.tj"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 sm:gap-3 text-slate-400 hover:text-green-500 transition-colors group"
              >
                <img
                  src="/instagram.svg"
                  alt="Instagram"
                  className="w-4 h-4 sm:w-5 sm:h-5 brightness-0 invert opacity-60 group-hover:opacity-100 group-hover:brightness-0 group-hover:invert-[0.5] transition-all"
                />
                <span className="font-mono text-xs sm:text-sm">/softclub.tj</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-4 sm:pt-6 md:pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4">
          <p className="text-slate-600 text-[10px] sm:text-xs font-mono uppercase tracking-widest text-center md:text-left break-words">
            © 2025 made with love by <a href="https://www.linkedin.com/in/mustafo-faizov/" target="_blank" rel="noopener noreferrer" className="hover:text-green-500 transition-colors underline decoration-slate-600 underline-offset-2 hover:decoration-green-500">@fayzzzm</a>
          </p>
          <div className="text-slate-700 font-mono text-[10px] sm:text-xs tracking-[0.2em]">
            01000010 01010111 01000001
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
