"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Check,
  AlertCircle,
  ExternalLink,
  FileText,
  X,
  Target,
  MousePointerClick,
  Info,
} from "lucide-react";
import { Button } from "@/components/ui/button";

/* ================= UTILS ================= */
// Helper барои классҳо (агар shadcn/utils надошта бошед)
function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(" ");
}

/* ================= STYLES ================= */

const INPUT_CLASS =
  "w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-base outline-none focus:border-purple-500 focus:bg-white focus:ring-4 focus:ring-purple-100 transition-all placeholder:text-gray-400";
const LABEL_CLASS = "block mb-2 text-sm font-semibold text-gray-700";

/* ================= TYPES & LOGIC ================= */

const REGISTRATION_DEADLINE = new Date("2026-01-01T23:55:00");
const isRegistrationClosed = () => new Date() > REGISTRATION_DEADLINE;

type Member = {
  fullName: string;
  phone: string;
  githubLink: string;
  linkedinLink: string;
  fullTimeParticipationNote: string;
  isCapitan: boolean;
};

type CaseDetail = {
  img: string;
  title: string;
  organizer: string;
  problem: string;
  goal: string;
  features: string[];
  constraints?: string[];
};

/* ================= DATA (EXACT COPY AS REQUESTED) ================= */

const CASE_DETAILS: CaseDetail[] = [
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpNzCYn-SOFLque9taT_UwYdRpkwJrCEBnbQ&s",
    title: "AI Listing Studio (Somon.tj)",
    organizer: "Somon.tj",
    problem:
      "Создание объявлений занимает много времени, часто они неполные или неконсистентные, что снижает вовлеченность.",
    goal: "Разработать AI-помощника для быстрого и качественного создания объявлений (Недвижимость, Авто, Товары).",
    features: [
      "Vision: Извлечение характеристик из фото",
      "AI-копирайтер: Генерация заголовков и описаний",
      "Фото-коуч: Рекомендации по качеству фото",
      "Чеклист готовности к публикации",
    ],
    constraints: [
      "Не угадывать личные данные",
      "Не менять цены и не давать обещаний",
    ],
  },
  {
    img: "/oriyonbonk.svg",
    title: "Smart Deposit Challenge",
    organizer: "Orienbank",
    problem:
      "Банковские калькуляторы скучные и не объясняют выгоду понятным языком.",
    goal: "Создать умного финансового помощника, который помогает выбрать стратегию накопления и объясняет расчеты.",
    features: [
      "Поддержка 3 типов вкладов (классический, с капитализацией, лестничный)",
      "AI объясняет разницу и дает рекомендации",
      "Визуализация выгоды",
    ],
    constraints: [
      "AI не считает проценты (это делает бэкенд), а только объясняет",
    ],
  },
  {
    img: "https://laklakmarket.tj/uploads/all/7mm0HfD0X5A8w91xscfaC6GunQPdP0Ll1b28rkqT.png",
    title: "LakLak AI Assistant",
    organizer: "LakLak Marketplace",
    problem: "Нагрузка на саппорт и низкая конверсия оплат заказов.",
    goal: "Виртуальный ассистент для автоматизации поддержки и помощи в завершении заказов.",
    features: [
      "Статус заказа и оплаты (после верификации)",
      "Напоминание о неоплаченных заказах",
      "Гид по доставке и правилам",
      "Ответы на FAQ",
    ],
    constraints: [
      "Языки: Русский и Таджикский",
      "Никаких выдумок, только данные маркетплейса",
    ],
  },
  {
    img: "https://cdn.stepik.net/media/cache/images/courses/128731/cover_f61hZEg/9ae47ad6d4c068af31b8a494c0397d54.jpg",
    title: "Прогнозирование оттока студентов",
    organizer: "Softclub CRM",
    problem: "Администраторы узнают об уходе студента слишком поздно.",
    goal: "AI-модуль, прогнозирующий риск ухода и рекомендующий действия.",
    features: [
      "ML-модель оценки риска (Низкий/Средний/Высокий)",
      "LLM для объяснения причин риска",
      "Рекомендации (звонок, встреча, напоминание)",
    ],
  },
  {
    img: "https://cdn.stepik.net/media/cache/images/courses/128731/cover_f61hZEg/9ae47ad6d4c068af31b8a494c0397d54.jpg",
    title: "AI-модуль отбора наставников",
    organizer: "Softclub CRM",
    problem:
      "Сложно быстро проверить тех. уровень и педагогические навыки ментора.",
    goal: "Модуль для стандартизированного тестирования и оценки менторов.",
    features: [
      "Проверка кода и теоретических знаний",
      "Оценка умения объяснять (Teaching skill)",
      "Автоматический отчет с рекомендацией (Green/Yellow/Red)",
    ],
  },
  {
    img: "https://yora.tj/_next/image?url=%2Flogo.webp&w=384&q=75",
    title: "Интеллектуальный подбор клиентов",
    organizer: "Yora.tj",
    problem: "Низкая конверсия и долгий ручной подбор клиентов.",
    goal: "AI-модуль для повышения конверсии и релевантности предложений.",
    features: [
      "Scoring модель релевантности (0-100)",
      "Объяснение, почему клиент подходит",
      "Рекомендация действия (письмо, звонок)",
    ],
  },
  {
    img: "/oriyonbonk.svg",
    title: "AI Factoring Assistant",
    organizer: "Orienbank",
    problem: "Предприниматели не понимают факторинг и считают его сложным.",
    goal: "Чат-бот, который объясняет факторинг и рассчитывает условия.",
    features: [
      "Онбординг и расчет комиссии в чате",
      "Простой скоринг (Зеленый/Желтый/Красный)",
      "Объяснение условий простым языком",
    ],
    constraints: ["Использовать фиктивные данные", "Без сложных интеграций"],
  },
  {
    img: "https://it-park.tj/wp-content/uploads/2025/03/alif-tech.png",
    title: "Оценка стоимости жилья",
    organizer: "Alif Tech",
    problem: "Сложно определить адекватную рыночную цену квартиры.",
    goal: "ML-модель для предсказания цены на основе объявлений.",
    features: [
      "Предобработка данных (Somon.tj)",
      "Регрессионные модели (Linear, Random Forest, etc.)",
      "Анализ влияния признаков на цену",
    ],
  },
];

// PDF Links mapped by index
const PDF_URLS = [
  "/pdf/case1.pdf",
  "/pdf/case2.pdf",
  "/pdf/case3.pdf",
  "/pdf/case4.pdf",
  "/pdf/case5.pdf",
  "/pdf/case6.pdf",
  "/pdf/case7.pdf",
  "/pdf/case8.pdf",
];

/* ================= HELPERS ================= */

const createEmptyMember = (isCapitan = false): Member => ({
  fullName: "",
  phone: "",
  githubLink: "",
  linkedinLink: "",
  fullTimeParticipationNote: "",
  isCapitan,
});

const isEmpty = (v: string) => !v || v.trim() === "";

function isValidGithub(url: string) {
  const v = url.trim();
  return /^https?:\/\/(www\.)?github\.com\/.+/i.test(v);
}

function isValidLinkedIn(url: string) {
  const v = url.trim();
  return /^https?:\/\/(www\.)?linkedin\.com\/.+/i.test(v);
}

/* ================= COMPONENT ================= */

export default function RegistrationPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [teamName, setTeamName] = useState("");
  const [count, setCount] = useState<number>(3);

  const [members, setMembers] = useState<Member[]>([
    createEmptyMember(true),
    createEmptyMember(false),
    createEmptyMember(false),
  ]);

  // NEW: Selection State
  const [selectedCaseIndex, setSelectedCaseIndex] = useState<number | null>(
    null
  );
  const [solutionContent, setSolutionContent] = useState("");
  const [activeModalIndex, setActiveModalIndex] = useState<number | null>(null); // For "Read more" modal
  const [submitting, setSubmitting] = useState(false);

  /* ===== Sync members with count ===== */
  useEffect(() => {
    setMembers((prev) => {
      const next = [...prev];
      if (count > prev.length) {
        for (let i = prev.length; i < count; i++)
          next.push(createEmptyMember());
      }
      if (count < prev.length) return next.slice(0, count);
      next[0] = { ...next[0], isCapitan: true };
      return next;
    });
  }, [count]);

  /* ================= HANDLERS ================= */

  const updateMember = (index: number, key: keyof Member, value: string) => {
    setMembers((prev) =>
      prev.map((m, i) => (i === index ? { ...m, [key]: value } : m))
    );
  };

  const handleSelectCase = (index: number) => {
    setSelectedCaseIndex(index);
    setError(null);
  };

  const handleSubmit = async () => {
    if (isRegistrationClosed()) {
      return setError("Регистрация закрыта.");
    }

    setError(null);

    // 1. Validate Team Info
    if (isEmpty(teamName)) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return setError("Введите название команды");
    }

    // 2. Validate Members
    for (let i = 0; i < members.length; i++) {
      const m = members[i];
      if (
        isEmpty(m.fullName) ||
        isEmpty(m.phone) ||
        isEmpty(m.githubLink.trim()) ||
        isEmpty(m.linkedinLink) ||
        isEmpty(m.fullTimeParticipationNote)
      ) {
        return setError(`Заполните все поля: Участник ${i + 1}`);
      }
      if (!isValidGithub(m.githubLink.trim())) {
        return setError(`Некорректный GitHub: Участник ${i + 1}`);
      }
    }

    // 3. Validate Selection
    if (selectedCaseIndex === null) {
      return setError("Выберите один кейс для решения (нажмите на карточку)!");
    }

    if (isEmpty(solutionContent)) {
      return setError("Напишите ваше решение (Solution) для выбранного кейса.");
    }

    setSubmitting(true);

    // Construct Payload
    // The backend gets an array of 8 stages.
    // We only fill the content for the one selected index. The rest are empty.
    const stagesPayload = CASE_DETAILS.map((_, index) => ({
      id: `case${index + 1}`, // IDs: case1, case2, etc.
      content: index === selectedCaseIndex ? solutionContent : "",
    }));

    const payload = {
      name: teamName,
      count,
      members,
      stages: stagesPayload,
    };

    try {
      const response = await fetch("https://hackaton-api.softclub.tj/api/teems", {
        method: "POST",
        headers: {
          Accept: "text/plain",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.text();

      if (!response.ok) throw new Error(data || "Ошибка запроса");

      setIsSubmitted(true);
      window.scrollTo(0, 0);
    } catch (err: any) {
      setError(err?.message || "Ошибка при отправке");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } finally {
      setSubmitting(false);
    }
  };

  /* ================= RENDER ================= */

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FFF7EF] px-4">
        <div className="max-w-md w-full bg-white rounded-3xl shadow-xl p-8 text-center animate-in fade-in zoom-in duration-300">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600">
            <Check className="h-8 w-8" />
          </div>
          <h1 className="text-2xl font-bold mb-4 text-gray-900">
            Заявка принята!
          </h1>
          <p className="text-gray-500 mb-8">
            Команда <strong>{teamName}</strong> успешно зарегистрирована на кейс:
            <br />
            <strong className="text-purple-600 mt-2 block">
              {selectedCaseIndex !== null
                ? CASE_DETAILS[selectedCaseIndex].title
                : ""}
            </strong>
          </p>
          <Link href="/">
            <Button className="w-full rounded-full bg-purple-600 hover:bg-purple-700 text-white h-12 shadow-lg shadow-purple-200">
              Вернуться на главную
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-[#FFF7EF] py-10 px-4 md:px-8 relative">
      {/* --- MODAL FOR DETAILS --- */}
      {activeModalIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center px-4 py-6 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setActiveModalIndex(null)}
        >
          <div
            className="bg-white w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl p-6 md:p-10 relative animate-in zoom-in-95 duration-200 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveModalIndex(null)}
              className="absolute top-4 right-4 p-2 bg-gray-100 rounded-full hover:bg-gray-200 text-gray-500 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="mb-6">
              <span className="inline-block px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-xs font-bold tracking-widest uppercase mb-3">
                CASE #{activeModalIndex + 1}
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 leading-tight">
                {CASE_DETAILS[activeModalIndex].title}
              </h2>
              <div className="flex items-center gap-2 mt-3">
                <span className="text-sm font-semibold text-gray-400 uppercase">
                  Organizer:
                </span>
                <span className="text-sm font-bold text-gray-900">
                  {CASE_DETAILS[activeModalIndex].organizer}
                </span>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-red-50 p-5 rounded-2xl border border-red-100">
                <h4 className="font-bold text-red-800 mb-2 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4" /> Проблема
                </h4>
                <p className="text-gray-800 text-sm leading-relaxed">
                  {CASE_DETAILS[activeModalIndex].problem}
                </p>
              </div>

              <div className="bg-green-50 p-5 rounded-2xl border border-green-100">
                <h4 className="font-bold text-green-800 mb-2 flex items-center gap-2">
                  <Check className="w-4 h-4" /> Цель
                </h4>
                <p className="text-gray-800 text-sm leading-relaxed">
                  {CASE_DETAILS[activeModalIndex].goal}
                </p>
              </div>

              <div>
                <h4 className="font-bold text-gray-900 mb-3">
                  Ключевые функции:
                </h4>
                <ul className="list-disc pl-5 space-y-2 text-sm text-gray-600">
                  {CASE_DETAILS[activeModalIndex].features.map((f, idx) => (
                    <li key={idx}>{f}</li>
                  ))}
                </ul>
              </div>

              {CASE_DETAILS[activeModalIndex].constraints && (
                <div>
                  <h4 className="font-bold text-gray-900 mb-3">Ограничения:</h4>
                  <ul className="list-disc pl-5 space-y-2 text-sm text-gray-600">
                    {CASE_DETAILS[activeModalIndex].constraints?.map(
                      (c, idx) => (
                        <li key={idx}>{c}</li>
                      )
                    )}
                  </ul>
                </div>
              )}
            </div>

            <div className="mt-8 pt-6 border-t border-gray-100 flex flex-col sm:flex-row gap-3">
              <Button
                onClick={() => setActiveModalIndex(null)}
                variant="outline"
                className="flex-1 h-12 rounded-xl border-gray-200"
              >
                Закрыть
              </Button>
              <Button
                onClick={() => {
                  handleSelectCase(activeModalIndex);
                  setActiveModalIndex(null);
                  // Optional: scroll to solution area
                  setTimeout(() => {
                    document
                      .getElementById("solution-area")
                      ?.scrollIntoView({ behavior: "smooth", block: "center" });
                  }, 100);
                }}
                className="flex-1 bg-purple-600 hover:bg-purple-700 text-white h-12 rounded-xl"
              >
                Выбрать этот кейс
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* --- MAIN FORM --- */}
      <div className="max-w-6xl mx-auto bg-white rounded-[2rem] md:rounded-[3rem] shadow-xl shadow-purple-900/5 overflow-hidden">
        <div className="p-6 md:p-12 lg:p-16">
          {/* Header */}
          <div className="mb-10 md:mb-16 text-center max-w-3xl mx-auto">
            <Link
              href="/"
              className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-purple-600 mb-8 transition-colors"
            >
              <ArrowLeft className="h-4 w-4 mr-2" /> Назад на главную
            </Link>
            <h1 className="text-3xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">
              Регистрация команды
            </h1>
            <p className="text-gray-500 text-lg">
              Заполните данные участников и выберите{" "}
              <span className="text-purple-600 font-bold bg-purple-50 px-2 py-1 rounded-lg">
                один кейс
              </span>{" "}
              для решения на хакатоне.
            </p>
          </div>

          {error && (
            <div className="max-w-2xl mx-auto mb-10 p-4 bg-red-50 border border-red-100 text-red-600 rounded-xl flex items-start gap-3 animate-in slide-in-from-top-2">
              <AlertCircle className="h-5 w-5 shrink-0 mt-0.5" />
              <p className="font-medium text-sm">{error}</p>
            </div>
          )}

          {/* 1. TEAM INFO */}
          <div className="grid md:grid-cols-2 gap-6 md:gap-10 mb-12 max-w-4xl mx-auto">
            <div>
              <label className={LABEL_CLASS}>Название команды</label>
              <input
                className={INPUT_CLASS}
                placeholder="Например: CyberTech"
                value={teamName}
                onChange={(e) => setTeamName(e.target.value)}
              />
            </div>
            <div>
              <label className={LABEL_CLASS}>Количество участников</label>
              <div className="relative">
                <select
                  className={`${INPUT_CLASS} appearance-none cursor-pointer`}
                  value={count}
                  onChange={(e) => setCount(Number(e.target.value))}
                >
                  <option value={3}>3 участника</option>
                  <option value={4}>4 участника</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                  <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                    <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6 mb-16 max-w-4xl mx-auto">
            {members.map((m, i) => (
              <div
                key={i}
                className="p-6 md:p-8 border border-gray-100 rounded-3xl bg-gray-50/50 hover:bg-white hover:shadow-md transition-all duration-300"
              >
                <div className="flex justify-between items-center mb-6">
                  <h3 className="font-bold text-gray-900 text-lg flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-900 text-white text-sm font-bold shadow-lg shadow-gray-200">
                      {i + 1}
                    </span>
                    Участник
                  </h3>
                  {m.isCapitan && (
                    <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                      Капитан
                    </span>
                  )}
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div className="md:col-span-2">
                    <label className={LABEL_CLASS}>ФИО</label>
                    <input
                      className={INPUT_CLASS}
                      placeholder="Иванов Иван Иванович"
                      value={m.fullName}
                      onChange={(e) =>
                        updateMember(i, "fullName", e.target.value)
                      }
                    />
                  </div>
                  <div>
                    <label className={LABEL_CLASS}>Телефон</label>
                    <input
                      className={INPUT_CLASS}
                      placeholder="+992..."
                      value={m.phone}
                      onChange={(e) => updateMember(i, "phone", e.target.value)}
                    />
                  </div>
                  <div>
                    <label className={LABEL_CLASS}>GitHub</label>
                    <input
                      className={INPUT_CLASS}
                      placeholder="github.com/..."
                      value={m.githubLink}
                      onChange={(e) =>
                        updateMember(i, "githubLink", e.target.value)
                      }
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className={LABEL_CLASS}>LinkedIn</label>
                    <input
                      className={INPUT_CLASS}
                      placeholder="linkedin.com/in/..."
                      value={m.linkedinLink}
                      onChange={(e) =>
                        updateMember(i, "linkedinLink", e.target.value)
                      }
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className={LABEL_CLASS}>
                      График участия (9:00 - 18:00)
                    </label>
                    <input
                      className={INPUT_CLASS}
                      placeholder="Сможете ли быть онлайн?..."
                      value={m.fullTimeParticipationNote}
                      onChange={(e) =>
                        updateMember(
                          i,
                          "fullTimeParticipationNote",
                          e.target.value
                        )
                      }
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-200 to-transparent my-12" />

          {/* 2. CASE SELECTION (GRID) */}
          <div id="case-selection" className="mb-12">
            <div className="flex flex-col items-center mb-10 text-center">
              <div className="bg-purple-100 p-3 rounded-2xl text-purple-600 mb-4">
                <Target className="w-8 h-8" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Выберите кейс
              </h2>
              <p className="text-gray-500 max-w-lg">
                Кликните на карточку, чтобы выбрать задачу. Вам нужно будет
                написать решение только для выбранного кейса.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {CASE_DETAILS.map((c, idx) => {
                const isSelected = selectedCaseIndex === idx;
                return (
                  <div
                    key={idx}
                    onClick={() => handleSelectCase(idx)}
                    className={cn(
                      "relative flex flex-col h-full cursor-pointer rounded-2xl border-2 p-5 transition-all duration-200 group",
                      isSelected
                        ? "border-purple-600 bg-purple-50/40 ring-4 ring-purple-100 shadow-xl shadow-purple-100 transform scale-[1.02]"
                        : "border-gray-100 bg-white hover:border-purple-300 hover:shadow-lg hover:-translate-y-1"
                    )}
                  >
                    {isSelected && (
                      <div className="absolute -top-3 -right-3 bg-purple-600 text-white p-2 rounded-full shadow-md z-10 animate-in zoom-in spin-in-12">
                        <Check className="w-4 h-4" />
                      </div>
                    )}

                    <div className="h-14 w-14 bg-white rounded-xl border border-gray-100 p-2 mb-4 flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow">
                      <img
                        src={c.img}
                        alt="logo"
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>

                    <h3
                      className={cn(
                        "font-bold text-lg mb-1 leading-snug transition-colors",
                        isSelected ? "text-purple-900" : "text-gray-900"
                      )}
                    >
                      {c.title}
                    </h3>
                    <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-3">
                      {c.organizer}
                    </p>

                    <div className="flex gap-2 mt-auto pt-4 w-full">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveModalIndex(idx);
                        }}
                        className="flex-1 py-2 text-xs font-semibold text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center gap-1"
                      >
                        <Info className="w-3.5 h-3.5" /> Инфо
                      </button>
                      <a
                        href={PDF_URLS[idx]}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex-1 py-2 text-xs font-semibold text-purple-700 bg-purple-100 rounded-lg hover:bg-purple-200 transition-colors flex items-center justify-center gap-1"
                      >
                        PDF <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* 3. SOLUTION INPUT (Conditional) */}
          <div id="solution-area" className="min-h-[100px]">
            {selectedCaseIndex !== null ? (
              <div className="animate-in fade-in slide-in-from-bottom-6 duration-500 bg-white border-2 border-purple-100 rounded-[2rem] p-6 md:p-10 shadow-2xl shadow-purple-100/50 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-32 bg-purple-50 rounded-full blur-3xl opacity-50 -mr-16 -mt-16 pointer-events-none" />

                <div className="flex flex-col md:flex-row items-start md:items-center gap-5 mb-6 relative z-10">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-600 text-white shrink-0 shadow-lg shadow-purple-300">
                    <FileText className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      Ваше решение
                    </h3>
                    <p className="text-gray-500 text-sm mt-1">
                      Опишите, как вы планируете решать задачу для{" "}
                      <strong className="text-purple-600">
                        {CASE_DETAILS[selectedCaseIndex].title}
                      </strong>
                    </p>
                  </div>
                </div>

                <textarea
                  className={`${INPUT_CLASS} min-h-[220px] text-lg p-6 shadow-inner resize-y`}
                  placeholder="Опишите ваше техническое решение, стек технологий, основные фичи и архитектуру..."
                  value={solutionContent}
                  onChange={(e) => setSolutionContent(e.target.value)}
                  autoFocus
                />

                <div className="mt-8 md:mt-10 flex justify-end">
                  <Button
                    onClick={handleSubmit}
                    disabled={submitting}
                    className="
                      w-full md:w-auto
                      h-16 px-10
                      rounded-2xl md:rounded-full
                      bg-purple-600 hover:bg-purple-700
                      text-white text-xl font-bold
                      shadow-xl shadow-purple-300
                      hover:scale-[1.02] active:scale-95
                      transition-all
                    "
                  >
                    {submitting ? "Отправка..." : "Зарегистрировать команду"}
                  </Button>
                </div>
              </div>
            ) : (
              <div className="text-center py-16 bg-gray-50 rounded-[2rem] border-2 border-dashed border-gray-200 text-gray-400 flex flex-col items-center justify-center">
                <MousePointerClick className="w-12 h-12 mb-4 text-gray-300" />
                <p className="font-medium text-lg">
                  Пожалуйста, выберите кейс выше, чтобы продолжить
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
