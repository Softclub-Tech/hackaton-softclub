import React from "react";
import { ArrowRight, Terminal, UserPlus, Users } from "lucide-react";
import { Link } from "react-router-dom";

const Hero: React.FC = () => {
  return (
    <section
      className="relative min-h-screen flex flex-col pt-20 sm:pt-24 md:pt-32 pb-6 sm:pb-8 md:pb-12 bg-black overflow-hidden font-heading"
      id="register"
    >
      {/* 1. TEXTURE LAYER: Binary Matrix ONLY in Top-Left & Bottom-Right (Handled by CSS class) */}
      <div className="bg-corners-matrix opacity-100"></div>

      {/* 2. TEXTURE LAYER: Grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.1]"
        style={{
          backgroundImage: `linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      ></div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 w-full flex-1 flex flex-col justify-between min-w-0">
        {/* HERO CONTENT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 md:gap-12 items-end">
          {/* LEFT: Typography & Main Hook */}
          <div className="lg:col-span-7 flex flex-col justify-start select-none leading-none pt-2 sm:pt-4 md:pt-12 w-full min-w-0">
            <h1 className="text-[42px] sm:text-[48px] md:text-[64px] lg:text-[150px] font-black tracking-tighter text-white animate-in fade-in slide-in-from-left-8 duration-700 break-words">
              BUILD
            </h1>
            <h1 className="text-[42px] sm:text-[48px] md:text-[64px] lg:text-[150px] font-black tracking-tighter text-green-500 animate-in fade-in slide-in-from-left-8 duration-700 delay-100 break-words">
              [ WITH ]
            </h1>
            <h1 className="text-[42px] sm:text-[48px] md:text-[64px] lg:text-[150px] font-black tracking-tighter text-white animate-in fade-in slide-in-from-left-8 duration-700 delay-200 break-words">
              / AI &#125;
            </h1>

            {/* Subtitle / Context */}
            <div className="mt-4 sm:mt-6 md:mt-8 lg:mt-12 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300 w-full min-w-0">
              <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-slate-400 font-light max-w-2xl leading-relaxed font-sans break-words">
                Крупнейший хакатон по Генеративному ИИ в Таджикистане. <br />
                <span className="text-white font-medium">SoftClub</span> x{" "}
                <span className="text-white font-medium">Oriyonbonk</span> x{" "}
                <span className="text-white font-medium">UNDP</span>.
              </p>
            </div>
          </div>

          {/* RIGHT: Registration "Command Center" */}
          <div className="lg:col-span-5 w-full flex flex-col gap-4 sm:gap-5 md:gap-6 animate-in fade-in slide-in-from-right-8 duration-700 delay-500 min-w-0">
            {/* Header for Reg Section */}
            <div className="flex items-center gap-2 text-green-500 font-mono text-[10px] sm:text-xs uppercase tracking-widest mb-2">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full animate-pulse"></span>
              Регистрация открыта
            </div>

            {/* CARD 1: TEAM (Primary) */}
            <Link
              to="/registration"
              rel="noopener noreferrer"
              className="group relative block bg-[#111] border border-white/20 hover:border-green-500 transition-all duration-300 p-4 sm:p-5 md:p-6 overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-2 sm:p-2.5 md:p-3 opacity-20 group-hover:opacity-100 transition-opacity">
                <ArrowRight className="text-green-500 -rotate-45" size={18} />
              </div>

              <div className="flex items-start gap-3 sm:gap-3.5 md:gap-4">
                <div className="p-2 sm:p-2.5 md:p-3 bg-white/5 rounded-none group-hover:bg-green-500/10 text-white group-hover:text-green-500 transition-colors flex-shrink-0">
                  <Users size={18} className="sm:w-5 sm:h-5 md:w-6 md:h-6" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-white font-heading uppercase tracking-wide group-hover:text-green-500 transition-colors break-words">
                    Регистрация Команды
                  </h3>
                  <div className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-slate-400 font-mono leading-relaxed break-words">
                    <span className="block mb-1 text-white/60">
                      :: Полный доступ (2 дня)
                    </span>
                    Отобранные команды борются за 18,000{" "}
                    <span className="font-heading">сомони</span>.
                  </div>
                </div>
              </div>
            </Link>

            {/* CARD 2: GUEST (Secondary) */}
            <a
              href="https://forms.gle/z9FMUQmSTpXuMY2g8"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block bg-black border border-white/20 hover:border-white transition-all duration-300 p-4 sm:p-5 md:p-6"
            >
              <div className="absolute top-0 right-0 p-2 sm:p-2.5 md:p-3 opacity-20 group-hover:opacity-100 transition-opacity">
                <ArrowRight className="text-white -rotate-45" size={18} />
              </div>

              <div className="flex items-start gap-3 sm:gap-3.5 md:gap-4">
                <div className="p-2 sm:p-2.5 md:p-3 bg-white/5 rounded-none text-slate-400 group-hover:text-white transition-colors flex-shrink-0">
                  <UserPlus size={18} className="sm:w-5 sm:h-5 md:w-6 md:h-6" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-slate-300 font-heading uppercase tracking-wide group-hover:text-white transition-colors break-words">
                    Гостевой Пропуск
                  </h3>
                  <div className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-slate-500 font-mono leading-relaxed group-hover:text-slate-400 break-words">
                    <span className="block mb-1 text-slate-500">
                      :: Режим наблюдения (День 1)
                    </span>
                    Ограниченное количество мест. Только по приглашениям.
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>

        {/* BOTTOM SECTION: Date/Location & Logos */}
        <div className="mt-8 sm:mt-12 md:mt-16 pt-4 sm:pt-6 md:pt-8 border-t border-white/10 flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 sm:gap-8 md:gap-12 animate-in fade-in duration-1000 delay-500">
          {/* Date & Location */}
          <div className="flex flex-col gap-1.5 sm:gap-2">
            <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-mono text-white tracking-tight break-words">
              Душанбе, 3{" "}
              <span className="text-green-500 mx-0.5 sm:mx-1">января</span>
            </div>
            <div className="text-slate-500 font-mono uppercase tracking-widest text-xs sm:text-sm flex items-center gap-1.5 sm:gap-2">
              <Terminal size={12} className="sm:w-3.5 sm:h-3.5" />
              Главный офис Oriyonbonk
            </div>
          </div>

          {/* Partner Logos */}
          <div className="flex flex-col items-start lg:items-end gap-2 sm:gap-3 md:gap-4">
            <span className="font-mono text-[9px] sm:text-[10px] text-green-500 uppercase tracking-widest">
              При поддержке
            </span>
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 md:gap-8 lg:gap-12 opacity-80 hover:opacity-100 transition-opacity">
              {/* OryonBank */}
              <img
                src="/oriyonbonk.svg"
                alt="OryonBank"
                className="h-4 sm:h-5 md:h-6 lg:h-10 w-auto brightness-0 invert"
              />

              {/* Divider */}
              <div className="h-4 sm:h-5 md:h-6 w-px bg-white/20"></div>

              {/* SoftClub */}
              <img
                src="https://www.softclub.tj/logo-softclub.svg"
                alt="SoftClub"
                className="h-4 sm:h-5 md:h-6 lg:h-8 w-auto brightness-0 invert"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
