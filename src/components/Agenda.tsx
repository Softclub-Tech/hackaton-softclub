import React, { useState } from 'react';
import { AgendaItem } from '../types';

const agendaData: Record<string, AgendaItem[]> = {
  day1: [
    { id: '1', time: '08:30', title: 'Регистрация участников и демонстрация Humanoid-робота', description: '', type: 'networking' },
    { id: '2', time: '09:30', title: 'Открытие хакатона и цели мероприятия', description: 'Ориенбанк (3 мин), SoftClub (3 мин), IT Park (3 мин), UNDP (3 мин)', type: 'talk' },
    { id: '3', time: '09:50', title: 'Выступление Мустафо Файзова', description: 'AI в реальном бизнесе', type: 'talk' },
    { id: '4', time: '10:00', title: 'Просмотр вдохновляющих видеоматериалов', description: '', type: 'break' },
    { id: '5', time: '10:10', title: 'Выступление Рустама Гулова', description: 'Prompt Engineering и автоматизация', type: 'talk' },
    { id: '6', time: '10:30', title: 'Презентация кейсов компаний и анонсирование команд', description: 'Нурулло Сулаймонов', type: 'talk' },
    { id: '7', time: '10:45', title: 'Кофе-брейк', description: '', type: 'break' },
    { id: '8', time: '11:00', title: 'Начало разработки проектов', description: '', type: 'workshop' },
    { id: '9', time: '15:00', title: 'Менторский чекпоинт и промежуточная проверка прогресса', description: '', type: 'workshop' },
    { id: '10', time: '17:00', title: 'Продолжение работы над проектами', description: '', type: 'workshop' },
    { id: '11', time: '21:00', title: 'Завершение первого дня', description: '', type: 'networking' },
  ],
  day2: [
    { id: '12', time: '09:00', title: 'Продолжение работы над проектами', description: '', type: 'workshop' },
    { id: '13', time: '11:00', title: 'Менторские консультации и финальная доработка решений', description: '', type: 'workshop' },
    { id: '14', time: '15:00', title: 'Подготовка презентаций и демо', description: '', type: 'workshop' },
    { id: '15', time: '16:30', title: 'Финальные презентации команд', description: '', type: 'talk' },
    { id: '16', time: '17:30', title: 'Обсуждение результатов жюри и подведение итогов', description: '', type: 'talk' },
    { id: '17', time: '18:00', title: 'Награждение победителей и закрытие хакатона', description: '', type: 'networking' },
  ]
};

const Agenda: React.FC = () => {
  const [activeDay, setActiveDay] = useState<'day1' | 'day2'>('day1');

  const translateType = (type: string): string => {
    const translations: Record<string, string> = {
      'talk': 'спикер',
      'workshop': 'воркшоп',
      'networking': 'нетворкинг',
      'break': 'перерыв',
    };
    return translations[type] || type;
  };

  return (
    <section id="agenda" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-black relative font-mono overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 w-full min-w-0">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 md:mb-20 gap-6 sm:gap-7 md:gap-8">
          <div>
            <div className="text-green-500 mb-2 uppercase tracking-widest text-xs">
              &gt;&gt; Расписание
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-black font-heading text-white uppercase tracking-tighter leading-none break-words">
              ПРОГРАММА <span className="text-green-500">[</span> ПЛАН <span className="text-green-500">]</span>
            </h2>
          </div>
          
          {/* Day Toggles - Brutalist Box */}
          <div className="flex border border-white/20">
            <button 
              onClick={() => setActiveDay('day1')}
              className={`px-4 sm:px-5 md:px-6 lg:px-8 py-2.5 sm:py-3 md:py-4 text-xs sm:text-sm uppercase tracking-widest transition-colors ${
                activeDay === 'day1' 
                  ? 'bg-green-500 text-black font-bold' 
                  : 'bg-black text-slate-500 hover:text-white'
              }`}
            >
              03 ЯНВ
            </button>
            <div className="w-px bg-white/20"></div>
            <button 
              onClick={() => setActiveDay('day2')}
              className={`px-4 sm:px-5 md:px-6 lg:px-8 py-2.5 sm:py-3 md:py-4 text-xs sm:text-sm uppercase tracking-widest transition-colors ${
                activeDay === 'day2' 
                  ? 'bg-green-500 text-black font-bold' 
                  : 'bg-black text-slate-500 hover:text-white'
              }`}
            >
              04 ЯНВ
            </button>
          </div>
        </div>

        {/* List View Schedule - Matching the screenshot style */}
        <div className="flex flex-col">
          {agendaData[activeDay].map((item, index) => (
            <div key={item.id} className={`group flex flex-col md:flex-row border-t border-white/20 py-8 hover:bg-white/5 transition-colors ${index === agendaData[activeDay].length - 1 ? 'border-b' : ''}`}>
              
              {/* Time */}
              <div className="w-full md:w-1/4 mb-4 md:mb-0">
                 <span className="text-xl md:text-2xl text-white group-hover:text-green-500 transition-colors">
                   {item.time}
                 </span>
              </div>

              {/* Content */}
              <div className="w-full md:w-3/4 pr-8">
                <h3 className="text-xl md:text-3xl font-heading font-medium text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-slate-500 text-sm md:text-base max-w-2xl font-sans">
                  {item.description}
                </p>
              </div>

              {/* Type Badge (Right Aligned) */}
              <div className="hidden md:flex items-start justify-end w-32">
                 <span className="text-xs text-slate-600 border border-slate-800 px-2 py-1 uppercase tracking-widest">
                   {translateType(item.type)}
                 </span>
              </div>

            </div>
          ))}
        </div>
        
        <div className="mt-12 flex items-center gap-2 text-slate-600 text-xs uppercase tracking-widest">
           <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
           Время указано местное (GMT+5)
        </div>

      </div>
    </section>
  );
};

export default Agenda;
