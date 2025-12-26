"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import Link from "next/link";
import {
  BarChart3,
  Clock,
  ExternalLink,
  GraduationCap,
  Handshake,
  Laptop,
  Layers,
  UserCheck,
  Users,
} from "lucide-react";
const items = [
  {
    icon: GraduationCap,
    title: "Возраст: 16+",
    description:
      "К участию приглашаются участники от 16 лет и старше. Регистрация возможна только в составе команды (3–4 человека).",
    gradient: "from-purple-500/20 to-indigo-500/20 text-purple-600",
  },
  {
    icon: Laptop,
    title: "Студенты и начинающие специалисты",
    description:
      "Для тех, кто хочет получить первый практический опыт разработки, поработать с AI и понять, как создаются реальные IT-продукты.",
    gradient: "from-blue-500/20 to-cyan-500/20 text-blue-600",
  },
  {
    icon: BarChart3,
    title: "Опытные разработчики и дизайнеры",
    description:
      "Подходит для разработчиков и дизайнеров, которые хотят прокачать навыки командной работы, архитектуры решений и применения AI в продуктах.",
    gradient: "from-emerald-500/20 to-teal-500/20 text-emerald-600",
  },
  {
    icon: Handshake,
    title: "Командная разработка",
    description:
      "Хакатон ориентирован на командную работу. В финале участвуют ограниченное количество команд для сохранения высокого уровня качества.",
    gradient: "from-orange-500/20 to-red-500/20 text-orange-600",
  },
];


const juryMembers = [
  {
    image: "/kamaridin.jpg",
    name: "Уринов Қамариддин",
    role: "Заместитель директора — начальник отдела разработки информационных систем ДИТ",
  },
  {
    image: "/sherali.png",
    name: "Шерали Джурабаев",
    role: "Региональный директор Sky Central Asia, маркетолог, предприниматель",
  },
  {
    image: "/murod.png",
    name: "Мурод Ҳайдаров",
    role: "Старший инженер-программист (10+ лет), бывший CTO vc.ru",
  },
];
const logos = [
  "/oriyonbonk.svg",
  "https://it-park.tj/wp-content/uploads/2025/03/alif-tech.png",
  "https://laklakmarket.tj/uploads/all/7mm0HfD0X5A8w91xscfaC6GunQPdP0Ll1b28rkqT.png",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpNzCYn-SOFLque9taT_UwYdRpkwJrCEBnbQ&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMYeoFykku9zIG1Hq_weECBL5JqDfiRTWMyA&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSZ9QGNp0toW6tTAccB7uoz_4eNs3i6v9lXQ&s",
  "https://yora.tj/_next/image?url=%2Flogo.webp&w=384&q=75",
  "https://cdn.stepik.net/media/cache/images/courses/128731/cover_f61hZEg/9ae47ad6d4c068af31b8a494c0397d54.jpg",
];

const criteria = [
  {
    id: "01",
    title: "Работающий продукт",
    desc: "Команда должна представить работающий продукт или прототип, демонстрирующий основную идею.",
  },
  {
    id: "02",
    title: "Решение задачи",
    desc: "Проект должен решать понятную проблему пользователя, бизнеса или общества, а не быть абстракцией.",
  },
  {
    id: "03",
    title: "Использование AI",
    desc: "AI должен автоматизировать процессы, анализировать данные или генерировать контент.",
  },
  {
    id: "04",
    title: "Архитектура",
    desc: "Объяснение стека: как взаимодействуют frontend, backend и AI, и почему выбраны эти технологии.",
  },
  {
    id: "05",
    title: "Польза AI",
    desc: "AI должен улучшать решение задачи, а не быть добавлен формально «для галочки».",
  },
];

// mentors

const mentors = [
  {
    name: "Собир Бобиев",
    role: "Senior Data Scientist в Alif | ex-Yandex",
    img: "/sobir.jpg",
  },
  {
    name: "Ҷаҳонгир Ҷалолов",
    role: "Сооснователь  Livo и \n Navbat",
    img: "/jhongir.png",
  },
  {
    name: "Мустафо Файзов",
    role: " инженер-разработчик в EPAM, основатель @KOOLAI | ранее: Amazon, Яндекс",
    img: "/mustafo.png",
  },
  {
    name: "Хушанг Мирзо",
    role: "Старший инженер-разработчик в Knowledge City",
    img: "/images/Khushang.jpg",
  },
];

export default function KuickHackLandingPage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cookieAccepted, setCookieAccepted] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) / 50,
        y: (e.clientY - window.innerHeight / 2) / 50,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Navigation */}

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-50 via-orange-50 to-yellow-50" />

        {/* Left Badge */}
        <div className="absolute left-10 top-1/2 transform -translate-y-1/2 animate-float hidden lg:block">
          <div className="relative w-48 h-48">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-200 to-pink-100 rounded-full blur-2xl opacity-60" />
            <div className="relative bg-white rounded-full p-8 shadow-xl border-8 border-pink-100">
              <div className="text-center">
                <p className="text-gray-700 text-sm mb-1">ТВОЙ</p>
                <p className="text-2xl font-serif italic">старт</p>
                <p className="text-gray-700 text-sm mt-1">В IT</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right 3D Elements */}
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-1/3 h-full pointer-events-none hidden lg:block">
          <div className="relative w-full h-full">
            {/* Golden Trophy/Ribbon */}
            <div
              className="absolute top-20 right-20 w-64 h-64 animate-float"
              style={{
                transform: `translate(${mousePosition.x * 0.5}px, ${
                  mousePosition.y * 0.5
                }px)`,
              }}
            >
              <div className="relative w-full h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-300 via-orange-300 to-yellow-400 rounded-full blur-3xl opacity-40" />
                <svg
                  viewBox="0 0 200 200"
                  className="w-full h-full drop-shadow-2xl"
                >
                  <path
                    d="M100,20 Q150,50 180,100 Q150,150 100,180 Q50,150 20,100 Q50,50 100,20 Z"
                    fill="url(#goldGradient)"
                    stroke="#f59e0b"
                    strokeWidth="2"
                  />
                  <defs>
                    <linearGradient
                      id="goldGradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" style={{ stopColor: "#fbbf24" }} />
                      <stop offset="50%" style={{ stopColor: "#f59e0b" }} />
                      <stop offset="100%" style={{ stopColor: "#fbbf24" }} />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>

            {/* Red/Orange Pill */}
            <div
              className="absolute top-1/3 right-10 w-32 h-48 animate-float animation-delay-2000"
              style={{
                transform: `translate(${mousePosition.x * 0.3}px, ${
                  mousePosition.y * 0.7
                }px) rotate(15deg)`,
              }}
            >
              <div className="w-full h-full bg-gradient-to-br from-red-400 to-orange-500 rounded-full shadow-2xl opacity-90" />
            </div>

            {/* White Cube */}
            <div
              className="absolute bottom-1/3 right-32 w-24 h-24 animate-float animation-delay-4000"
              style={{
                transform: `translate(${mousePosition.x * 0.6}px, ${
                  mousePosition.y * 0.4
                }px) rotateX(30deg) rotateY(30deg)`,
              }}
            >
              <div className="w-full h-full bg-white rounded-lg shadow-2xl border border-gray-200" />
            </div>

            {/* Diamond/Crystal */}
            <div
              className="absolute bottom-20 right-20 w-32 h-32 animate-float animation-delay-1000"
              style={{
                transform: `translate(${mousePosition.x * 0.4}px, ${
                  mousePosition.y * 0.6
                }px)`,
              }}
            >
              <svg
                viewBox="0 0 100 100"
                className="w-full h-full drop-shadow-2xl"
              >
                <polygon
                  points="50,10 90,40 70,90 30,90 10,40"
                  fill="url(#diamondGradient)"
                  stroke="#e5e7eb"
                  strokeWidth="1"
                />
                <defs>
                  <linearGradient
                    id="diamondGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" style={{ stopColor: "#f3f4f6" }} />
                    <stop offset="50%" style={{ stopColor: "#e5e7eb" }} />
                    <stop offset="100%" style={{ stopColor: "#f9fafb" }} />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* Small Orange Circle */}
            <div
              className="absolute top-1/2 right-5 w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-500 rounded-full shadow-xl animate-float animation-delay-3000"
              style={{
                transform: `translate(${mousePosition.x * 0.8}px, ${
                  mousePosition.y * 0.2
                }px)`,
              }}
            />
          </div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="flex flex-col items-center gap-4 mb-8 animate-fade-in">
            {/* Status Toggle */}
            <div className="inline-flex items-center bg-gray-200 rounded-full p-1 mb-5">
              <button className="px-6 py-2 rounded-full text-sm text-gray-600 transition-all">
                скоро
              </button>
              <button className="px-6 py-2 rounded-full text-sm bg-purple-600 text-white transition-all shadow-lg">
                идёт
              </button>
            </div>

            {/* Format Toggles */}
            <div className="inline-flex items-center gap-2">
              {/* <button className="px-5 py-2 rounded-full border-2 border-gray-300 text-sm text-gray-700 hover:border-purple-600 transition-all">
                онлайн
              </button> */}
              <button className="px-5 py-2 rounded-full border-2 border-gray-300 text-sm text-gray-700 hover:border-purple-600 transition-all">
                оффлайн
              </button>
              <button className="px-5 py-2 rounded-full border-2  border-purple-600 text-sm text-gray-700 hover:border-purple-600 transition-all">
                хакатон
              </button>
            </div>
          </div>

          <h1 className="text-4xl md:text-8xl font-bold mb-8  text-balance animate-slide-up">
            <span className="text-gray-900">{"{"}</span>
            <span className="text-gray-900">Build </span>
            <span className="text-gray-900">With AI</span>
            <span className="text-gray-900">{"} "}</span>
            <sup className="text-xl md:text-2xl align-super">2026</sup>
          </h1>

          {/* Dates */}
          <div className="flex items-center justify-center gap-4 mb-6 text-2xl md:text-3xl animate-slide-up animation-delay-200">
            <div>
              <span className="text-gray-900 font-semibold">&gt;3 января</span>
            </div>
            <span className="text-gray-400">—</span>
            <div>
              <span className="text-gray-900 font-semibold">4 января</span>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-center justify-center gap-2 mb-12 text-gray-600 animate-slide-up animation-delay-400">
            <svg
              className="w-5 h-5 text-red-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-lg">Душанбе | Ориёнбанк</span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-6 mt-6">
            {/* Participant Registration */}
            <Link href="/registration">
              <Button
                size="lg"
                className="bg-purple-600 cursor-pointer hover:bg-purple-700 text-white px-8 py-6 text-lg animate-slide-up animation-delay-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl rounded-xl w-full sm:w-auto"
              >
                <ExternalLink className="h-5 w-5 mr-2" />
                Регистрация участников команды
              </Button>
              <p className="text-sm text-gray-400 whitespace-pre-line mt-2 text-center ">
                Мероприятие длится 2 дня • по итогам {"\n"} отбора участвуют 8
                команд
              </p>
            </Link>

            {/* Visitor Application */}
            <Link
              href="https://forms.gle/z9FMUQmSTpXuMY2g8"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                variant="outline"
                className="border-gray-400 cursor-pointer text-gray-300 hover:text-black bg-gray-800 px-8 py-6 text-lg animate-slide-up animation-delay-700 transform hover:scale-105 transition-all duration-300 rounded-xl w-full sm:w-auto"
              >
                <ExternalLink className="h-5 w-5 mr-2" />
                Заявка на посещение первого дня{" "}
              </Button>
              <p className="text-sm whitespace-pre-line text-center text-gray-400 mt-2  ">
                Посещение на несколько часов • по приглашению • {" \n"} ответ по
                телефону
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center transform hover:scale-105 transition-all duration-300 animate-slide-up animation-delay-1000">
              <div className="text-5xl font-bold text-purple-600 mb-2 animate-count">
                100+
              </div>
              <div className="text-gray-600">
                Участников за время проведения
              </div>
            </div>
            <div className="text-center transform hover:scale-105 transition-all duration-300 animate-slide-up animation-delay-1200">
              <div className="text-5xl font-bold bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent mb-2 animate-count">
                10000 TJS
              </div>
              <div className="text-gray-600">Призовой фонд</div>
            </div>
            <div className="text-center transform hover:scale-105 transition-all duration-300 animate-slide-up animation-delay-1400">
              <div className="text-5xl font-bold text-green-600 mb-2">CEO</div>
              <div className="text-gray-600">
                Эксперты — CEO международных стартапов
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-gradient-to-br from-purple-400 to-pink-400 rounded-3xl transform rotate-12 opacity-20 animate-float" />
            <div className="absolute -top-5 -right-1 md:-right-10 w-40 h-40 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full opacity-20 animate-float animation-delay-2000" />

            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center relative z-10">
              О <span className="text-purple-600">хакатоне</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-gradient-to-br from-white to-purple-50 border-gray-200 hover:border-purple-300 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl group">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-purple-600 group-hover:scale-105 transition-transform">
                  Build With AI — хакатон в Таджикистане
                </h3>
                <p className="text-gray-600">
                  Build With AI — это хакатон нового формата, где искусственный
                  интеллект и автоматизация являются не дополнением, а основой
                  каждого проекта. За 2 дня участники работают над реальными
                  задачами бизнеса и общества, создавая AI-продукты с
                  практической ценностью.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-white to-pink-50 border-gray-200 hover:border-purple-300 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl group">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-purple-600 group-hover:scale-105 transition-transform">
                  Дать студентам реальный опыт
                </h3>
                <p className="text-gray-600 mb-4">
                  Участники погружаются в реальные кейсы от компаний-партнёров и
                  проходят полный путь создания продукта — от идеи до
                  работающего прототипа. Это опыт, максимально приближённый к
                  работе в IT-команде.
                </p>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-100 text-yellow-700 rounded-full text-sm font-medium animate-bounce-subtle">
                  ⚡ найди решение
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-white to-blue-50 border-gray-200 hover:border-purple-300 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl group">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-purple-600 group-hover:scale-105 transition-transform">
                  Работа с искусственным интеллектом
                </h3>
                <p className="text-gray-600">
                  Хакатон подойдёт тем, кто хочет научиться использовать AI в
                  продуктах: генерация контента, анализ данных, автоматизация
                  процессов, AI-помощники и умные сервисы.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-white to-purple-50 border-gray-200 hover:border-purple-300 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl group">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-purple-600 group-hover:scale-105 transition-transform">
                  Проекты для портфолио и карьерного роста
                </h3>
                <p className="text-gray-600">
                  Участники представляют свои проекты жюри и менторам, получают
                  обратную связь и рекомендации. Лучшие команды и участники
                  получают шанс попасть на internship и в компании-партнёры.
                </p>
                <div className="mt-4 text-2xl animate-sparkle">✨</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-12 overflow-hidden bg-gradient-to-r from-purple-100 via-pink-100 to-blue-100 relative">
        <div className="flex animate-marquee-fast whitespace-nowrap">
          {Array(4)
            .fill(null)
            .map((_, i) => (
              <div key={i} className="flex">
                <span className="text-4xl md:text-6xl font-bold mx-8 text-purple-400 hover:text-purple-600 transition-colors">
                  // решайся
                </span>
                <span className="text-4xl md:text-6xl font-bold mx-8 text-pink-400 hover:text-pink-600 transition-colors">
                  // думай
                </span>
                <span className="text-4xl md:text-6xl font-bold mx-8 text-blue-400 hover:text-blue-600 transition-colors">
                  // делай
                </span>
                <span className="text-4xl md:text-6xl font-bold mx-8 text-purple-500 hover:text-purple-700 transition-colors">
                  // решай
                </span>
              </div>
            ))}
        </div>
      </section>

      {/* Prize Fund Section */}
      <section className="py-12 md:py-20 px-4 relative overflow-hidden">
        {/* Background Blobs - Scaled for mobile */}
        <div className="absolute top-10 right-10 w-32 h-32 md:w-48 md:h-48 bg-yellow-200 rounded-full filter blur-3xl opacity-20 animate-pulse" />
        <div className="absolute bottom-10 left-10 w-32 h-32 md:w-48 md:h-48 bg-orange-200 rounded-full filter blur-3xl opacity-20 animate-pulse animation-delay-2000" />

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Prize Cards Container */}
          <div className="mt-8 md:mt-16 mb-8 md:mb-12">
            <div className="relative bg-gray-100 rounded-3xl p-6 md:p-12">
              {/* Decorative floating coins - Responsive sizing and positioning */}
              <div className="absolute -top-4 -left-2 md:top-20 md:left-12 w-12 h-12 md:w-16 md:h-16 animate-float z-20">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 shadow-lg transform rotate-12 flex items-center justify-center">
                  <span className="text-xl md:text-2xl font-bold text-white">
                    TJS
                  </span>
                </div>
              </div>
              <div className="absolute top-4 -right-2 md:top-10 md:right-16 w-14 h-14 md:w-20 md:h-20 animate-float animation-delay-1000 z-20">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 shadow-lg transform -rotate-12 flex items-center justify-center">
                  <span className="text-2xl md:text-3xl font-bold text-white">
                    TJS
                  </span>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-2xl md:text-4xl font-bold text-center mb-8 md:mb-12 relative z-10">
                <span className="italic">Призовой</span> фонд
              </h3>

              {/* Top 3 Prizes Grid - Flex col on mobile, Grid on Desktop */}
              <div className="flex flex-col md:grid md:grid-cols-3 gap-6 mb-6 relative">
                {/* Second Place - Blue (Order 2 on mobile, Left on Desktop) */}
                <div className="order-2 md:order-none bg-gradient-to-br from-blue-100 to-blue-200 rounded-3xl p-6 md:p-8 relative overflow-hidden transform hover:scale-105 transition-all duration-300 shadow-lg">
                  <div className="hidden md:block absolute -top-4 -right-4 w-24 h-24 animate-float animation-delay-500">
                    <div className="w-full h-full rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 shadow-xl transform rotate-12 flex items-center justify-center">
                      <span className="text-3xl font-bold text-white">TJS</span>
                    </div>
                  </div>
                  <div className="relative z-10">
                    <p className="text-3xl sm:text-4xl  font-bold mb-2">
                      TJS 5000
                    </p>
                    <p className="text-base md:text-lg text-gray-700">
                      Второе место
                    </p>
                  </div>
                </div>

                {/* First Place - Pink/Coral (Order 1 on mobile, Center on Desktop) */}
                <div className="order-1 md:order-none bg-gradient-to-br from-pink-100 via-rose-100 to-orange-100 rounded-3xl p-6 md:p-8 relative overflow-hidden transform hover:scale-105 transition-all duration-300 shadow-xl md:-mt-4">
                  <div className="relative z-10">
                    <p className="text-4xl sm:text-5xl  font-bold mb-2">
                      TJS 10000
                    </p>
                    <p className="text-lg md:text-xl text-gray-700 font-medium">
                      Первое место
                    </p>
                  </div>
                </div>

                {/* Third Place - Gray (Order 3 on mobile, Right on Desktop) */}
                <div className="order-3 md:order-none bg-white rounded-3xl p-6 md:p-8 relative overflow-hidden transform hover:scale-105 transition-all duration-300 shadow-lg border border-gray-100">
                  <div className="relative z-10">
                    <p className="text-3xl sm:text-4xl  font-bold mb-2">
                      TJS 3000
                    </p>
                    <p className="text-base md:text-lg text-gray-700">
                      Третье место
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Evaluation Criteria */}
      <section className="py-20 px-4 ">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-slate-900">
            Что должны показать
            <span className="text-purple-600"> команды</span>
          </h2>

          {/* Responsive Grid: 1 col mobile, 2 col tablet, 3 col desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {criteria.map((item, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl border border-slate-100 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              >
                {/* Decorative Big Number */}
                <div className="absolute -right-4 -top-6 text-9xl font-black text-slate-100 group-hover:text-purple-50 transition-colors select-none z-0">
                  {item.id}
                </div>

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-slate-900 leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                      {item.desc}
                    </p>
                  </div>

                  {/* Decorative line */}
                  <div className="w-12 h-1 bg-purple-600 mt-6 rounded-full group-hover:w-full transition-all duration-500 ease-out"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-24 px-4  relative overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>

        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 mb-4">
              Для{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">
                кого
              </span>{" "}
              этот ивент
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Мы ищем увлеченных людей, готовых создавать инновации.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {items.map((item, index) => (
              <div
                key={index}
                className="group bg-white rounded-3xl p-8 shadow-xl shadow-gray-200/40 ring-1 ring-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-purple-100/50"
              >
                <div
                  className={`mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${item.gradient} transition-transform group-hover:scale-110`}
                >
                  <item.icon className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed font-medium">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Participation Formats */}
      <section className="py-24 px-4 ">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              Формат <span className="text-purple-600">хакатона</span>
            </h2>
            <p className="text-lg text-gray-500">
              Интенсивная работа, командный дух и поддержка экспертов
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1: Team Size (Small) */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-xl transition-all duration-300 group">
              <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform">
                <Users size={28} />
              </div>
              <h3 className="text-xl font-bold mb-2">Команды</h3>
              <p className="text-3xl font-black text-gray-900 mb-2">
                3–4{" "}
                <span className="text-base font-medium text-gray-400">
                  чел.
                </span>
              </p>
              <p className="text-gray-500 text-sm">
                Собирайте свою dream team или присоединяйтесь к другим.
              </p>
            </div>

            {/* Card 2: Duration (Small) */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-xl transition-all duration-300 group">
              <div className="w-14 h-14 bg-purple-50 rounded-2xl flex items-center justify-center text-purple-600 mb-6 group-hover:scale-110 transition-transform">
                <Clock size={28} />
              </div>
              <h3 className="text-xl font-bold mb-2">Длительность</h3>
              <p className="text-3xl font-black text-gray-900 mb-2">
                2{" "}
                <span className="text-base font-medium text-gray-400">дня</span>
              </p>
              <p className="text-gray-500 text-sm">
                3–4 января. Интенсивный офлайн-формат в Душанбе.
              </p>
            </div>

            {/* Card 3: Mentorship (Tall - spans 2 rows on desktop) */}
            <div className="md:row-span-2 bg-gradient-to-br from-purple-600 to-indigo-700 p-8 rounded-3xl shadow-xl text-white flex flex-col justify-between group">
              <div>
                <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center text-white mb-6">
                  <UserCheck size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-4">
                  Менторство и поддержка
                </h3>
                <p className="text-purple-100 mb-6 leading-relaxed">
                  Каждую команду сопровождает Middle+ Developer. Он помогает с
                  архитектурой, проводит code review и направляет команду.
                </p>
                <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm border border-white/10">
                  <p className="text-sm font-medium">
                    ✨ Эксперты из SoftClub и компаний-партнёров.
                  </p>
                </div>
              </div>
              <button className="mt-8 w-full py-3 bg-white text-purple-700 font-bold rounded-xl hover:bg-purple-50 transition-colors">
                Посмотреть менторов
              </button>
            </div>

            {/* Card 4: Structure (Wide - spans 2 cols) */}
            <div className="md:col-span-2 bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 relative overflow-hidden">
              {/* Decorative background element */}
              <div className="absolute -right-10 -bottom-10 opacity-5 text-gray-300">
                <Layers size={200} />
              </div>

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center text-orange-600">
                    <Layers size={24} />
                  </div>
                  <h3 className="text-2xl font-bold">Командная структура</h3>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      Команды формируются самостоятельно. Вы сами решаете, кого
                      брать и как распределять роли. Это симуляция работы в
                      реальной IT-компании.
                    </p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                    <h4 className="font-bold text-gray-900 mb-3">
                      Рекомендуемый состав:
                    </h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                        Frontend & Backend
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                        AI & Automation Engineer
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-pink-500 rounded-full"></div>
                        UX/UI Designer
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Заголовок секции */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">
              Наши менторы
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">
              Ведущие специалисты индустрии, которые помогут вам довести идеи до
              результата.
            </p>
          </div>

          {/* Сетка менторов */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {mentors.map((mentor, index) => (
              <div
                key={index}
                className="group relative h-[500px] justify-center w-full overflow-hidden rounded-[2rem] bg-gray-100 cursor-pointer"
              >
                {/* Background Image */}
                <img
                  src={mentor.img}
                  alt={mentor.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Modern Gradient Overlay (Always visible but darker on hover) */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

                {/* Floating Info Card - Premium Dark Glass */}
                <div className="absolute bottom-4 inset-x-4 p-5 translate-y-2 group-hover:translate-y-0 transition-all duration-300 backdrop-blur-xl bg-black/40 rounded-2xl border border-white/10 shadow-lg shadow-black/20">
                  <div className="border-l-4 border-purple-500 pl-4">
                    <h3 className="text-xl font-bold text-white mb-1">
                      {mentor.name}
                    </h3>
                    <p className="text-purple-200 text-[12px] font-medium  uppercase opacity-90">
                      {mentor.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Timeline */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
            Таймлайн <span className="text-purple-600">хакатон 2026</span>
          </h2>

          <div className="space-y-8">
            {[
              {
                date: "3 января 2026",
                title: "День 1",
                desc: `
               08:30 – Регистрация участников и демонстрация Humanoid-робота
09:30 – Открытие хакатона и цели мероприятия (15 минут)
●	Ориенбанк — 3 мин
●	SoftClub — 3 мин
●	IT Park — 3 мин
●	UNDP — 3 мин

09:50 – Выступление Мустафо Файзова
 AI в реальном бизнесе
10:00 – Просмотр вдохновляющих видеоматериалов
10:10 – Выступление Рустама Гулова
 Prompt Engineering и автоматизация
10:30 – Презентация кейсов компаний и анонсирование команд
 Нурулло Сулаймонов
10:45 – Кофе-брейк
11:00 – Начало разработки проектов
15:00 – Менторский чекпоинт и промежуточная проверка прогресса
17:00 – Продолжение работы над проектами


                `,
                format: "оффлайн",
              },
              {
                date: "4 января 2026",
                title: "День 2",
                desc: `
08:30 – Работа над проектами (сессия 3)
11:00 – Менторские сессии и финальные правки
13:00 – Подготовка презентаций и demo
15:00 – Финальные презентации команд
17:00 – Обсуждение жюри и подведение итогов
18:00 – Награждение и закрытие

                `,
                format: "оффлайн",
              },
            ].map((stage, index) => (
              <Card
                key={index}
                className="bg-gray-50 border-gray-200 hover:border-purple-400 transition-colors"
              >
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-shrink-0">
                      <div className="text-sm text-gray-600 mb-2">
                        &gt; {stage.date}
                      </div>
                      <div className="text-3xl font-bold text-purple-600">
                        {stage.title}
                      </div>
                    </div>
                    <div className="flex-grow">
                      <p className="text-gray-900 whitespace-pre-line mb-2">
                        {stage.desc}
                      </p>
                      <p className="text-sm text-gray-500 whitespace-pre-line">
                        {stage.format}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-gray-900">
            <span className="text-purple-600">Жюри</span> хакатона
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {juryMembers.map((person, index) => (
              <div key={index} className="group relative">
                {/* Image Container - Vertical Rectangle */}
                <div className="relative h-80 w-full overflow-hidden rounded-2xl shadow-lg">
                  <img
                    src={person.image}
                    alt={person.name}
                    className={`h-full w-full ${
                      index == 0 ? " object-fill" : "object-cover"
                    }  transition-transform duration-700 group-hover:scale-110`}
                    onError={(e) => {
                      // Fallback если фото нет
                      e.currentTarget.style.display = "none";
                      e.currentTarget.parentElement?.classList.add(
                        "flex",
                        "items-center",
                        "justify-center"
                      );
                      e.currentTarget.parentElement!.innerHTML =
                        '<span class="text-4xl text-gray-300 font-bold">?</span>';
                    }}
                  />
                  {/* Gradient Overlay for Text Readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90"></div>

                  {/* Text overlay positioned on the image */}
                  <div className="absolute bottom-0 left-0 w-full p-6 text-white translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-xl font-bold leading-tight mb-2">
                      {person.name}
                    </h3>
                    <div className="h-1 w-10 bg-purple-500 rounded mb-2"></div>
                  </div>
                </div>

                {/* Role Text (Outside image for readability) */}
                <div className="mt-4 px-2">
                  <p className="text-sm text-gray-600 leading-relaxed font-medium">
                    {person.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="">
        <section className="partners py-20 px-4">
          <h2 className="partners-title">Партнеры</h2>

          <div className="marquee">
            <div className="marquee-track">
              {[...logos, ...logos].map((logo, i) => (
                <img key={i} src={logo} alt="partner" />
              ))}
            </div>
          </div>
        </section>
      </section>

      {/* FAQ */}

      {/* Contact */}
      <section className="pt-20 pb-2 px-4"></section>

      {/* Footer CTA */}
      <section className="py-10 px-4 bg-gradient-to-b from-transparent to-purple-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-bold mb-3 text-balance">
            Hackaton <p className="text-yellow-600">Build With AI (2026)</p>
          </h2>

          <div className="max-w-4xl mx-auto text-center mb-8">
            <p className="text-gray-600 mb-8">Связь с командой хакатона</p>

            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
              <a
                href="https://www.instagram.com/softclub.tj/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-600 hover:text-purple-700"
              >
                @softclub.tj
              </a>
              <span className="text-gray-400 hidden md:inline">|</span>
              <a
                href="https://www.instagram.com/kuicktech/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-600 hover:text-purple-700"
              >
                📞 557700900
              </a>
            </div>
          </div>
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-6 mt-6">
            {/* Participant Registration */}
            <Link href="/registration">
              <Button
                size="lg"
                className="bg-purple-600 cursor-pointer hover:bg-purple-700 text-white px-8 py-6 text-lg animate-slide-up animation-delay-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl rounded-xl w-full sm:w-auto"
              >
                <ExternalLink className="h-5 w-5 mr-2" />
                Регистрация участников команды
              </Button>
              <p className="text-sm text-gray-400 whitespace-pre-line mt-2 text-center ">
                Мероприятие длится 2 дня • по итогам {"\n"} отбора участвуют 8
                команд
              </p>
            </Link>

            {/* Visitor Application */}
            <Link
              href="https://forms.gle/z9FMUQmSTpXuMY2g8"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                variant="outline"
                className="border-gray-400 cursor-pointer text-gray-300 hover:text-black bg-gray-800 px-8 py-6 text-lg animate-slide-up animation-delay-700 transform hover:scale-105 transition-all duration-300 rounded-xl w-full sm:w-auto"
              >
                <ExternalLink className="h-5 w-5 mr-2" />
                Заявка на посещение первого дня{" "}
              </Button>
              <p className="text-sm whitespace-pre-line text-center text-gray-400 mt-2  ">
                Посещение на несколько часов • по приглашению • {" \n"} ответ по
                телефону
              </p>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
