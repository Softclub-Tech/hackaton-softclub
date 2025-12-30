import React, { useRef } from "react";
import { Speaker } from "../types";
import { ChevronLeft, ChevronRight } from "lucide-react";

const speakers: Speaker[] = [
  {
    id: "1",
    name: "Джурабаев Шер",
    role: "Эксперт по маркетингу, Предприниматель",
    company: "Стартапы в ЦА и MENA",
    image:
      "/sher.webp",
    label: "jury",
  },
  {
    id: "2",
    name: "Мустафо Файзов",
    role: "Lead Engineer",
    company: "EPAM, основатель @KOOLAI | ранее: Amazon, Яндекс",
    image: "/mustafo.jpg",
    label: ["speaker", "mentor"],
  },
  {
    id: "3",
    name: "Собир Бобиев",
    role: "Senior Data Scientist",
    company: "Alif | ex-Yandex",
    image: "/sobir.jpg",
    label: "mentor",
  },
  {
    id: "4",
    name: "Ҷаҳонгир Ҷалолов",
    role: "Сооснователь",
    company: "Livo и Navbat",
    image: "/jahongir.png",
    label: "mentor",
  },
  {
    id: "5",
    name: "Хушанг Мирзо",
    role: "Старший инженер-разработчик",
    company: "Knowledge City",
    image: "/hushang.png",
    label: "mentor",
  },

  {
    id: "6",
    name: "Ксения Ким",
    role: "HRD Coca-Cola Таджикистан",
    company: "Coca-Cola",
    image:
      "https://media.licdn.com/dms/image/v2/D4D03AQEPITK9ojIDBQ/profile-displayphoto-shrink_800_800/B4DZdQ8o8jHAAc-/0/1749409764019?e=1768435200&v=beta&t=oTR7mwccm1i1bPOSV9YNTuKNiCDcXSRieQ5FEsEVAnY",
    label: "mentor",
  },
  {
    id: "7",
    name: "Рустам Гулов",
    role: "Эксперт по цифровым коммуникациям и ИИ",
    company: "Предпринимател",
    image: "/rustam.jpg",
    label: "mentor",
  },
];

const Speakers: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 350; // Width of a card + gap
      scrollContainerRef.current.scrollBy({
        left: direction === "right" ? scrollAmount : -scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="speakers"
      className="py-12 sm:py-16 md:py-20 lg:py-24 bg-black border-t border-white/20 relative overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 w-full min-w-0">
        {/* Header with Navigation Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 md:mb-12 gap-4 sm:gap-5 md:gap-6">
          <div>
            <div className="text-green-500 font-mono mb-2 uppercase tracking-widest text-xs">
              &gt;&gt; Эксперты
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-black font-heading text-white uppercase tracking-tighter leading-none break-words">
              ЖЮРИ <span className="text-slate-700">/</span> СПИКЕРЫ{" "}
              <span className="text-slate-700">/</span> МЕНТОРЫ
            </h2>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => scroll("left")}
              className="w-12 h-12 border border-white/20 text-white flex items-center justify-center hover:bg-white hover:text-black transition-colors"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-12 h-12 border border-white/20 text-white flex items-center justify-center hover:bg-green-500 hover:text-black hover:border-green-500 transition-colors"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Carousel Container */}
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory no-scrollbar"
        >
          {speakers.map((speaker) => (
            <div
              key={speaker.id}
              className="min-w-[300px] md:min-w-[350px] snap-center group relative bg-black border border-white/10 overflow-hidden"
            >
              {/* Image Aspect Ratio */}
              <div className="aspect-[3/4] relative overflow-hidden">
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="w-full h-full object-cover filter grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>
              </div>

              {/* Info Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black to-transparent pt-20">
                <div className="border-l-2 border-green-500 pl-4 transition-all duration-300 group-hover:pl-6 group-hover:border-white">
                  <h3 className="text-2xl font-bold text-white font-heading uppercase leading-none mb-1">
                    {speaker.name}
                  </h3>
                  <div className="flex items-center gap-2 mt-1 flex-wrap">
                    <p className="text-green-500 text-xs font-mono uppercase tracking-wider">
                      {speaker.company}
                    </p>
                    {speaker.label && (
                      <>
                        {Array.isArray(speaker.label) ? (
                          speaker.label.map((lbl, idx) => (
                            <span
                              key={idx}
                              className="text-xs font-mono text-slate-500 border border-slate-700 px-2 py-0.5 uppercase tracking-wider"
                            >
                              {lbl}
                            </span>
                          ))
                        ) : (
                          <span className="text-xs font-mono text-slate-500 border border-slate-700 px-2 py-0.5 uppercase tracking-wider">
                            {speaker.label}
                          </span>
                        )}
                      </>
                    )}
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-white/10 opacity-60 group-hover:opacity-100 transition-opacity">
                  <p className="text-slate-300 text-sm font-mono">
                    {speaker.role}
                  </p>
                  {speaker.topic && (
                    <p className="text-slate-500 text-xs mt-1">
                      Тема: {speaker.topic}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Speakers;
