"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { CircleArrowRight, ClipboardCheck, ExternalLink } from "lucide-react";

export default function KuickHackLandingPage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cookieAccepted, setCookieAccepted] = useState(false);
  const logos = [
    "https://banki.tj/Content/logo/orionbank.png",
    "https://it-park.tj/wp-content/uploads/2025/03/alif-tech.png",
    "https://laklakmarket.tj/uploads/all/7mm0HfD0X5A8w91xscfaC6GunQPdP0Ll1b28rkqT.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpNzCYn-SOFLque9taT_UwYdRpkwJrCEBnbQ&s",
    "https://upload.wikimedia.org/wikipedia/commons/5/57/UNICEF_Logo.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMYeoFykku9zIG1Hq_weECBL5JqDfiRTWMyA&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSZ9QGNp0toW6tTAccB7uoz_4eNs3i6v9lXQ&s",
    "https://cdn.stepik.net/media/cache/images/courses/128731/cover_f61hZEg/9ae47ad6d4c068af31b8a494c0397d54.jpg",
  ];
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
            <div className="inline-flex items-center bg-gray-200 rounded-full p-1">
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

          <h1 className="text-6xl md:text-8xl font-bold mb-8 text-balance animate-slide-up">
            <span className="text-gray-900">{"{"}</span>
            <span className="text-gray-900">Build </span>
            <span className="text-gray-900">With AI</span>
            <span className="text-gray-900">{"} "}</span>
            <sup className="text-4xl md:text-2xl align-super">2026</sup>
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

          {/* CTA Button */}
          <Link href="registration">
            <Button
              size="lg"
              className="bg-purple-600 cursor-pointer hover:bg-purple-700 text-white px-8 py-6 text-lg animate-slide-up animation-delay-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl rounded-xl"
            >
              <ExternalLink className="h-5 w-5" /> Регистрация
            </Button>
          </Link>
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
                18000 TJS
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
            <div className="absolute -top-5 -right-10 w-40 h-40 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full opacity-20 animate-float animation-delay-2000" />

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
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute top-10 right-10 w-48 h-48 bg-yellow-200 rounded-full filter blur-3xl opacity-20 animate-pulse" />
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-orange-200 rounded-full filter blur-3xl opacity-20 animate-pulse animation-delay-2000" />

        <div className="max-w-6xl mx-auto relative z-10">
          {/* <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            <span className="bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent italic">
              Призовой
            </span>{" "}
            фонд
          </h2> */}

          {/* Prize Cards Container */}
          <div className="mt-16 mb-12">
            <div className="relative bg-gray-100 rounded-3xl p-8 md:p-12">
              {/* Decorative floating coins */}
              <div className="absolute top-20 left-12 w-16 h-16 animate-float">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 shadow-lg transform rotate-12 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">TJS</span>
                </div>
              </div>
              <div className="absolute top-10 right-16 w-20 h-20 animate-float animation-delay-1000">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 shadow-lg transform -rotate-12 flex items-center justify-center">
                  <span className="text-3xl font-bold text-white">TJS</span>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-3xl md:text-4xl font-bold text-center mb-12">
                <span className="italic">Призовой</span> фонд
              </h3>

              {/* Top 3 Prizes Grid */}
              <div className="grid md:grid-cols-3 gap-6 mb-6 relative">
                {/* Second Place - Blue */}
                <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-3xl p-8 relative overflow-hidden transform hover:scale-105 transition-all duration-300 shadow-lg">
                  <div className="absolute -top-4 -right-4 w-24 h-24 animate-float animation-delay-500">
                    <div className="w-full h-full rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 shadow-xl transform rotate-12 flex items-center justify-center">
                      <span className="text-3xl font-bold text-white">TJS</span>
                    </div>
                  </div>
                  <div className="relative z-10">
                    <p className="text-4xl md:text-5xl font-bold mb-2">
                      TJS 5000
                    </p>
                    <p className="text-lg text-gray-700">Второе место</p>
                  </div>
                </div>

                {/* First Place - Pink/Coral */}
                <div className="bg-gradient-to-br from-pink-100 via-rose-100 to-orange-100 rounded-3xl p-8 relative overflow-hidden transform hover:scale-105 transition-all duration-300 shadow-xl md:-mt-4">
                  <div className="relative z-10">
                    <p className="text-5xl md:text-5xl font-bold mb-2">
                      TJS 10000
                    </p>
                    <p className="text-xl text-gray-700">Первое место</p>
                  </div>
                </div>

                {/* Third Place - Gray */}
                <div className="bg-gradient-to-br from-gray-200 to-gray-300 rounded-3xl p-8 relative overflow-hidden transform hover:scale-105 transition-all duration-300 shadow-lg">
                  <div className="relative z-10">
                    <p className="text-4xl md:text-5xl font-bold mb-2">
                      TJS 3000
                    </p>
                    <p className="text-lg text-gray-700">Третье место</p>
                  </div>
                </div>
              </div>

              {/* Special Education Prize - Yellow/Beige */}
              {/* <div className="bg-gradient-to-r from-yellow-100 to-amber-100 rounded-3xl p-6 md:p-8 relative overflow-hidden transform hover:scale-105 transition-all duration-300 shadow-lg">
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-4">
                    <p className="text-3xl md:text-4xl font-bold">TJS 1000</p>
                    <p className="text-lg text-gray-700">
                      специальная номинация «Образование»
                    </p>
                  </div>
                  <div className="animate-bounce">
                    <div className="w-16 h-16 relative">
                      <div className="absolute inset-0 bg-gradient-to-b from-yellow-400 to-yellow-600 rounded-full"></div>
                      <div className="absolute inset-2 bg-gradient-to-b from-yellow-300 to-yellow-500 rounded-full flex items-center justify-center">
                        <span className="text-2xl">🔔</span>
                      </div>
                      <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>

          {/* <div className="text-center mt-12">
            <Button
              size="lg"
              disabled
              className="bg-blue-500 text-white px-8 py-6 text-lg cursor-not-allowed opacity-90 transform hover:scale-105 transition-all duration-300"
            >
              🎉 Прием заявок окончен
            </Button>
          </div> */}
        </div>
      </section>

      {/* Evaluation Criteria */}
      <section className="py-10 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
            Что должны показать команды
          </h2>

          <div className="space-y-6 mt-12">
            {[
              {
                number: 1,
                title: "Работающий продукт или прототип",
                desc: "Команда должна представить работающий продукт или прототип, демонстрирующий основную идею и решение выбранной проблемы.",
              },
              {
                number: 2,
                title: "Решение реальной задачи",
                desc: "Проект должен решать понятную проблему пользователя, бизнеса или общества, а не быть абстрактной идеей без практического применения.",
              },
              {
                number: 3,
                title: "Использование AI в продукте",
                desc: `AI должен быть частью решения:
например, помогать автоматизировать процессы, анализировать данные, генерировать контент или улучшать пользовательский опыт.`,
              },
              {
                number: 4,
                title: "Архитектура и логика решения",
                desc: `Команда должна объяснить, как устроен продукт:
как взаимодействуют frontend, backend и AI, почему выбран именно такой подход и такие технологии.`,
              },

              {
                number: "5",
                title: "Осмысленное использование AI",
                desc: `Важно показать, зачем именно в проекте используется AI и какую пользу он даёт.
AI должен улучшать решение задачи, а не быть добавлен формально «для галочки».`,
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="bg-white border-gray-200 hover:border-purple-400 transition-all duration-300 transform hover:-translate-x-2 hover:shadow-xl group"
              >
                <CardContent className="p-6 flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg group-hover:scale-110 transition-transform">
                    {item.number}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-purple-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* <div className="text-center mt-12">
            <Button
              asChild
              variant="outline"
              className="border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white bg-white transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <a
                href="https://drive.google.com/file/d/1RdtoAtuMCbf2Ff829ddvqLzXcYEhwbWS/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                👇 Скачать информационное письмо
              </a>
            </Button>
          </div> */}
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
            Для <span className="text-purple-600">кого</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-gray-50 border-gray-200">
              <CardContent className="p-8">
                <div className="text-4xl mb-4">🎓</div>
                <h3 className="text-2xl font-bold mb-4">Возраст: 16+</h3>
                <p className="text-gray-600">
                  К участию приглашаются участники от 16 лет и старше.
                  Регистрация возможна только в составе команды (3–4 человека).
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-50 border-gray-200">
              <CardContent className="p-8">
                <div className="text-4xl mb-4">💻</div>
                <h3 className="text-2xl font-bold mb-4">
                  {" "}
                  Cтуденты и начинающие специалисты
                </h3>
                <p className="text-gray-600">
                  Для тех, кто хочет получить первый практический опыт
                  разработки, поработать с AI и понять, как создаются реальные
                  IT-продукты.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-50 border-gray-200">
              <CardContent className="p-8">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="text-2xl font-bold mb-4">
                  Опытные разработчики и дизайнеры
                </h3>
                <p className="text-gray-600">
                  Подходит для разработчиков и дизайнеров, которые хотят
                  прокачать навыки командной работы, архитектуры решений и
                  применения AI в продуктах.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-50 border-gray-200">
              <CardContent className="p-8">
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="text-2xl font-bold mb-4">
                  Командная разработка
                </h3>
                <p className="text-gray-600">
                  Хакатон ориентирован на командную работу. В финале участвуют
                  ограниченное количество команд, чтобы сохранить высокий
                  уровень качества проектов и менторской поддержки.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Participation Formats */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Формат хакатона
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-1 gap-8 mt-12">
            <Card className="bg-white border-gray-200">
              <CardContent className="p-8">
                <h3 className="text-3xl font-bold mb-2">Командой формат</h3>
                <p className="text-purple-600 text-lg mb-4"> 3–4 человека</p>
                <p className="text-gray-600">
                  Участники собирают команду единомышленников или приходят уже
                  готовой командой. Внутри команды распределяются роли и задачи
                  для эффективной работы над проектом.
                </p>
                {/* <div className="flex gap-2 mt-4">
                  <span className="text-purple-600">1</span>
                  <span className="text-purple-600">2</span>
                  <span className="text-purple-600">3</span>
                  <span className="text-purple-600">4</span>
                </div> */}
                {/* <p className="text-gray-600 mt-4">📅 Длительность: 2 дня</p>
                <p className="text-gray-600">👥 Участники: 12 комманды</p>
                <p className="text-gray-600">
                  🧩 Формат: командная разработка + AI-менторство
                </p> */}
              </CardContent>
            </Card>
            <Card className="bg-white border-gray-200">
              <CardContent className="p-8">
                <h3 className="text-3xl font-bold mb-2">
                  ⏱ Длительность — 2 дня
                </h3>
                <p className="text-purple-600 text-lg mb-4"> 3–4 январ</p>
                <p className="text-gray-600">
                  Хакатон проходит в интенсивном офлайн-формате в Душанбе. Два
                  дня полной концентрации на разработке, тестировании и
                  подготовке презентации.
                </p>
                {/* <div className="flex gap-2 mt-4">
                  <span className="text-purple-600">1</span>
                  <span className="text-purple-600">2</span>
                  <span className="text-purple-600">3</span>
                  <span className="text-purple-600">4</span>
                </div> */}
                {/* <p className="text-gray-600 mt-4">📅 Длительность: 2 дня</p>
                <p className="text-gray-600">👥 Участники: 12 комманды</p>
                <p className="text-gray-600">
                  🧩 Формат: командная разработка + AI-менторство
                </p> */}
              </CardContent>
            </Card>
            <Card className="bg-white border-gray-200">
              <CardContent className="p-8">
                <h3 className="text-3xl font-bold mb-2">Командная структура</h3>
                <p className="text-purple-600 text-lg mb-4">
                  как в IT-компании
                </p>
                <p className="text-gray-600">
                  Командная структура (гибкий формат) Команды формируются
                  самостоятельно. Участники сами решают, кого брать в команду и
                  какие роли распределять. Для эффективной работы рекомендуется
                  собрать сбалансированную команду, в которой есть: участники,
                  отвечающие за frontend и backend, человек, работающий с AI и
                  автоматизацией, при необходимости — UX/UI дизайнер. Наличие
                  всех ролей не является обязательным. Команды могут
                  адаптировать состав под свою идею и формат проекта.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-gray-200">
              <CardContent className="p-8">
                <h3 className="text-3xl font-bold mb-2">
                  Менторство и поддержка
                </h3>
                <p className="text-purple-600 text-lg mb-4">
                  Ментора (Middle+ Developer)
                </p>
                {/* <p className="text-gray-600 font-bold">
                  Каждую команду сопровождает практикующий IT-специалист,
                  который: помогает с архитектурой решения консультирует по
                  использованию AI проводит code review направляет команду и
                  помогает уложиться в дедлайны
                </p>
                <p className="text-gray-600">
                  - Помогает с архитектурой и AI-логикой
                </p>
                <p className="text-gray-600">- Проводит code review</p>
                <p className="text-gray-600">- Направляет команду</p>
                <p className="text-gray-600">- Следит за дедлайнами</p> */}
                <p className="text-gray-600">
                  Каждую команду сопровождает практикующий IT-специалист,
                  который: помогает с архитектурой решения консультирует по
                  использованию AI проводит code review направляет команду и
                  помогает уложиться в дедлайны
                  <p>
                    Все менторы — специалисты из SoftClub и компаний-партнёров.
                  </p>
                </p>
              </CardContent>
            </Card>
          </div>

          {/* <div className="mt-12 text-center text-2xl font-mono text-gray-400">
            /&#42; Все менторы — специалисты из SoftClub и компаний-партнёров.
            &#42;/
          </div> */}
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
                09:00 – Регистрация и приветствие
09:30 – Вступительные речи + цели хакатона
10:00 – Спикер 1
10:15 – Спикер 2
10:30 – Спикер 3 
10:45 – Презентация задач компаний
11:15 – Формирование команд и распределение задач
12:30 – Начало работы над проектами (сессия 1)
15:00 – Первая сессия менторства и чекпоинт
17:00 – Работа над проектами (сессия 2)
19:00 – Вечерняя проверка прогресса
21:00 – Завершение работы Day 1

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

      {/* Jury */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
            <span className="text-purple-600">Жюри</span> хакатона
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Мурод Ҳайдаров",
                role: "CTO проектов Likepost, Рестомания, Avoloan, владелец KuickTech",
                chairman: true,
              },
              {
                name: "Мустафо Файзов",
                role: "Senior Python Engineer\nFinTech & AI & Web3",
              },
              {
                name: "Усмон Мирализода",
                role: "Директор центра цифровизации Margulan University, член-корреспондент Международной Академии информатизации (МАИН)",
              },
              {
                name: "Хушанг Мирзо",
                role: `Опытный фронтенд-разработчик с более чем 10-летним стажем работы и ведущий фронтенд-разработчик в компании
KnowledgeCity`,
                image: "../images/khushang.jpg",
              },
            ].map((person, index) => (
              <Card key={index} className="bg-white border-gray-200">
                <CardContent className="p-6 text-center">
                  <div className="w-32 h-32 mx-auto mb-4 bg-gray-200 rounded-full">
                    <img
                      className="w-32 h-32 mx-auto mb-4 rounded-full"
                      src={person.image}
                      alt="icon"
                    />
                  </div>

                  <h3 className="text-xl font-bold mb-2">
                    {person.name.split(" ")[0]}
                    <br />
                    <span className="text-purple-600">
                      {person.name.split(" ")[1]}
                    </span>
                  </h3>
                  <p className="text-sm text-gray-600 whitespace-pre-line">
                    {person.role}
                  </p>
                  {person.chairman && (
                    <p className="text-xs text-purple-600 mt-2">
                      {/* председатель жюри */}
                    </p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="">
        {/* <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
            <span className="text-purple-600">Партнеры</span> мероприятия
          </h2>

          <div className="flex flex-wrap justify-center items-center gap-12">
            {[
              "Ориенбанк",
              "Лаклак",
              "Националный банк Таджикистан (НБТ)",
              "Alif Tech",
              "Sayf Tech",
              "Somon.tj",
            ].map((partner, index) => (
              <div
                key={index}
                className="w-32 h-16 bg-gray-100 border border-gray-200 rounded flex items-center justify-center text-xs text-gray-600"
              >
                {partner}
              </div>
            ))}
          </div>
        </div> */}
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
      {/* <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
            Часто задаваемые <span className="text-purple-600">вопросы</span>
          </h2>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem
              value="item-1"
              className="bg-white border-gray-200 rounded-lg px-6"
            >
              <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                Кто может принять участие?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Участвовать могут граждане Республики Казахстан: студенты
                старших курсов, магистранты, выпускники 2019–2024 гг. любых
                специальностей. Участие возможно как индивидуально, так и в
                команде до 5 человек.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-2"
              className="bg-white border-gray-200 rounded-lg px-6"
            >
              <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                В какие сроки проводится Хакатон?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                <strong>Регистрация:</strong> 3 –25 апреля
                <br />
                <strong>Основной этап:</strong> 28 апреля–5 мая 2025 года
                <br />
                <strong>Финал:</strong> 5 мая — защита проектов и награждение
                победителей
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-3"
              className="bg-white border-gray-200 rounded-lg px-6"
            >
              <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                Как будут оцениваться проекты?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Проекты будут оцениваться по следующим критериям: Реализация,
                использование искусственного интеллекта (AI), продуманность
                решения, потенциал проекта, защита проекта.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-4"
              className="bg-white border-gray-200 rounded-lg px-6"
            >
              <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                Сколько стоит участие?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Участие бесплатное.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-5"
              className="bg-white border-gray-200 rounded-lg px-6"
            >
              <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                Нужно ли быть на Хакатоне оффлайн?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Необязательно. Мероприятие проводится на базе Марғұлан
                Университета, но студенты других вузов могут участвовать онлайн,
                в Zoom.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-6"
              className="bg-white border-gray-200 rounded-lg px-6"
            >
              <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                Можно ли прийти с готовым проектом?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Нет, поскольку важно, чтобы основная работа над проектом велась
                в рамках Хакатона.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section> */}

      {/* Contact */}
      <section className="pt-20 pb-2 px-4"></section>

      {/* Footer CTA */}
      <section className="py-10 px-4 bg-gradient-to-b from-transparent to-purple-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-bold mb-3 text-balance">
            Hackathon <p className="text-yellow-600">Build With AI (2026)</p>
          </h2>

          {/* <div className="space-y-4 mb-8">
            <div className="flex items-center justify-center gap-2 text-lg">
              <span className="text-gray-600">IT хакатон</span>
              <span className="text-purple-600 font-mono">{"{softclub}"}</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-lg">
              <svg
                className="w-5 h-5 text-gray-600"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-gray-600">3 января — 4 января</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-lg">
              <svg
                className="w-5 h-5 text-gray-600"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-gray-600">Душанбе | Ориёнбанк</span>
            </div>
          </div> */}

          {/* <p className="text-gray-600 mb-8">
            Проверь свои знания на реальных проектах и соверши прорыв
          </p> */}
          <div className="max-w-4xl mx-auto text-center mb-8">
            {/* <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Остались вопросы?
            </h2> */}
            <p className="text-gray-600 mb-8">Связь с командой хакатона</p>

            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
              {/* <a href="z" className="text-purple-600 hover:text-purple-700">
              @softclubsupport
            </a> */}
              {/* <span className="text-gray-400 hidden md:inline">|</span> */}
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
          <Link href="registration">
            <Button
              size="lg"
              className="bg-purple-600 cursor-pointer hover:bg-purple-700 text-white px-8 py-6 text-lg animate-slide-up animation-delay-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl rounded-xl"
            >
              <ExternalLink className="h-5 w-5" /> Регистрация
            </Button>
          </Link>
        </div>
      </section>

      {/* Cookie Banner */}
      {/* {!cookieAccepted && (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 z-50 shadow-lg">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-600">
              Мы используем файлы cookie, чтобы предоставить вам наилучший
              пользовательский опыт. Они помогают анализировать поведение
              пользователей и улучшать работу сайта.{" "}
              <a
                href="https://policies.google.com/technologies/cookies?hl=ru"
                className="text-purple-600 hover:text-purple-700"
              >
                Cookie политика.
              </a>
            </p>
            <Button
              onClick={() => setCookieAccepted(true)}
              className="bg-purple-600 hover:bg-purple-700 text-white"
            >
              Принять
            </Button>
          </div>
        </div>
      )} */}
    </main>
  );
}
