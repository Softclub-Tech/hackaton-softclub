import React from 'react';
import { Code, Users, Cpu, ArrowUpRight } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-12 sm:py-16 md:py-24 lg:py-32 bg-black border-t border-white/20 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 w-full min-w-0">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 mb-12 sm:mb-16 md:mb-20 lg:mb-24">
           <div>
             <div className="text-green-500 font-mono mb-3 sm:mb-3.5 md:mb-4 text-xs uppercase tracking-widest">
                // Миссия
             </div>
             <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black font-heading text-white uppercase leading-[0.9] tracking-tighter break-words">
               ОТ ИДЕИ <br/>
               <span className="text-slate-700">ДО</span> КОДА <br/>
               <span className="text-green-500">[ ЗА 48 ЧАСОВ ]</span>
             </h2>
           </div>
           <div className="flex flex-col justify-end">
             <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-400 leading-relaxed font-sans border-l border-green-500 pl-3 sm:pl-4 md:pl-5 lg:pl-6 break-words">
               Build With AI — это хакатон нового формата, где искусственный интеллект и автоматизация являются не дополнением, а основой каждого проекта. За 2 дня участники работают над реальными задачами бизнеса и общества, создавая AI-продукты с практической ценностью.
             </p>
           </div>
        </div>

        {/* Brutalist Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 border border-white/20">
          
          {/* Card 1 */}
          <div className="group border-b md:border-b-0 md:border-r border-white/20 p-8 md:p-12 hover:bg-white/5 transition-colors relative overflow-hidden">
             <div className="absolute top-4 right-4 text-slate-700 font-mono text-xs">01</div>
             <div className="mb-12 text-green-500">
               <Code size={40} strokeWidth={1} />
             </div>
             <h3 className="text-3xl font-bold text-white mb-4 font-heading uppercase">Хакатон</h3>
             <p className="text-slate-400 text-sm font-mono leading-relaxed mb-8">
               Собери команду. Выбери трек (FinTech, EdTech, Social Good). Создай функциональный MVP.
             </p>
             <div className="inline-flex items-center gap-2 text-white font-bold text-sm uppercase tracking-wider group-hover:text-green-500 transition-colors">
               Треки <ArrowUpRight size={16} />
             </div>
          </div>

          {/* Card 2 */}
          <div className="group border-b md:border-b-0 md:border-r border-white/20 p-8 md:p-12 hover:bg-white/5 transition-colors relative overflow-hidden">
             <div className="absolute top-4 right-4 text-slate-700 font-mono text-xs">02</div>
             <div className="mb-12 text-green-500">
               <Users size={40} strokeWidth={1} />
             </div>
             <h3 className="text-3xl font-bold text-white mb-4 font-heading uppercase">Сообщество</h3>
             <p className="text-slate-400 text-sm font-mono leading-relaxed mb-8">
               Общайся с экспертами из FAANG, бывшими сотрудниками Amazon и Yandex, а также лидерами из топовых компаний.
             </p>
             <div className="inline-flex items-center gap-2 text-white font-bold text-sm uppercase tracking-wider group-hover:text-green-500 transition-colors">
               Нетворкинг <ArrowUpRight size={16} />
             </div>
          </div>

          {/* Card 3 */}
          <div className="group p-8 md:p-12 hover:bg-white/5 transition-colors relative overflow-hidden">
             <div className="absolute top-4 right-4 text-slate-700 font-mono text-xs">03</div>
             <div className="mb-12 text-green-500">
               <Cpu size={40} strokeWidth={1} />
             </div>
             <h3 className="text-3xl font-bold text-white mb-4 font-heading uppercase">Воркшопы</h3>
             <p className="text-slate-400 text-sm font-mono leading-relaxed mb-8">
               Погружение в пайплайны RAG, файн-тюнинг и агентские рабочие процессы с Python.
             </p>
             <div className="inline-flex items-center gap-2 text-white font-bold text-sm uppercase tracking-wider group-hover:text-green-500 transition-colors">
               Учиться <ArrowUpRight size={16} />
             </div>
          </div>

        </div>

        {/* Prize Pool Section */}
        <div className="border-l border-r border-b border-white/20 py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-5 md:px-6 bg-[#050505]">
           <div className="text-center mb-16">
             <div className="text-green-500 font-mono mb-4 text-xs uppercase tracking-widest">
                // Rewards
             </div>
             <h3 className="text-4xl md:text-6xl font-black font-heading text-white uppercase tracking-tighter">
               Призовой Фонд
             </h3>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto items-end">
              {/* 2nd Place */}
              <div className="order-2 md:order-1 border border-white/20 p-8 bg-black hover:bg-white/5 transition-all text-center relative group h-full flex flex-col justify-end">
                 <div className="text-6xl font-black text-slate-800 mb-6 group-hover:text-white transition-colors">2</div>
                 <div className="text-sm font-mono text-slate-400 uppercase tracking-widest mb-2">Второе Место</div>
                 <div className="text-3xl font-bold text-white group-hover:text-green-500 transition-colors font-heading">5,000 <span className="text-2xl">сомони</span></div>
              </div>
              
              {/* 1st Place */}
              <div className="order-1 md:order-2 border border-green-500 p-10 bg-green-500/5 hover:bg-green-500/10 transition-all text-center relative transform md:-translate-y-6 z-10">
                 <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-green-500 text-black font-bold font-mono text-xs px-4 py-1 uppercase tracking-widest">
                   Winner
                 </div>
                 <div className="text-8xl font-black text-green-500/20 mb-8 group-hover:text-green-500/40 transition-colors">1</div>
                 <div className="text-sm font-mono text-green-500 uppercase tracking-widest mb-2 font-bold">Первое Место</div>
                 <div className="text-5xl font-black text-white mb-2 font-heading">10,000 <span className="text-4xl">сомони</span></div>
              </div>

              {/* 3rd Place */}
              <div className="order-3 md:order-3 border border-white/20 p-8 bg-black hover:bg-white/5 transition-all text-center relative group h-full flex flex-col justify-end">
                 <div className="text-6xl font-black text-slate-800 mb-6 group-hover:text-white transition-colors">3</div>
                 <div className="text-sm font-mono text-slate-400 uppercase tracking-widest mb-2">Третье Место</div>
                 <div className="text-3xl font-bold text-white group-hover:text-green-500 transition-colors font-heading">3,000 <span className="text-2xl">сомони</span></div>
              </div>
           </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 border-l border-r border-b border-white/20">
          {[
            { label: 'Участников', value: '40+' },
            { label: 'Призовой фонд', value: '18k' },
            { label: 'Менторов', value: '6' },
            { label: 'Часов', value: '48' },
          ].map((stat, i) => (
            <div key={i} className={`p-6 text-center border-white/20 hover:bg-green-500 hover:text-black transition-colors group cursor-default ${i !== 3 ? 'border-r' : ''}`}>
              <div className="text-4xl font-black font-heading mb-1">{stat.value}</div>
              <div className="text-xs font-mono uppercase tracking-widest text-slate-500 group-hover:text-black/60">{stat.label}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default About;
