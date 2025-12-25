"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Check,
  AlertCircle,
  ExternalLink,
  FileText,
  Info,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";

/* ================= STYLES ================= */

const INPUT_CLASS =
  "w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-base outline-none focus:border-purple-500 focus:bg-white focus:ring-4 focus:ring-purple-100 transition-all placeholder:text-gray-400";
const LABEL_CLASS = "block mb-2 text-sm font-semibold text-gray-700";
const HINT_CLASS = "mb-3 text-xs text-gray-500 leading-snug";

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

type Stage = {
  id: string;
  content: string;
  pdfUrl: string;
};

type CaseDetail = {
  title: string;
  organizer: string;
  img: string;
  problem: string;
  goal: string;
  features: string[];
  constraints?: string[];
};

/* ================= DATA (FROM CONTEXT) ================= */

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
    img: "https://oriyonbonk.tj/_next/static/media/logo.a6a2c873.svg",
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
    img: "https://oriyonbonk.tj/_next/static/media/logo.a6a2c873.svg",
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

/* ================= CASES (PDF ONLY IN FRONT) ================= */

const CASES: Omit<Stage, "content">[] = [
  { id: "case1", pdfUrl: "/pdf/case1.pdf" },
  { id: "case2", pdfUrl: "/pdf/case2.pdf" },
  { id: "case3", pdfUrl: "/pdf/case3.pdf" },
  { id: "case4", pdfUrl: "/pdf/case4.pdf" },
  { id: "case5", pdfUrl: "/pdf/case5.pdf" },
  { id: "case6", pdfUrl: "/pdf/case6.pdf" },
  { id: "case7", pdfUrl: "/pdf/case7.pdf" },
  { id: "case8", pdfUrl: "/pdf/case8.pdf" },
];

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

  const [stages, setStages] = useState<Stage[]>(
    CASES.map((c) => ({ ...c, content: "" }))
  );

  // Modal State
  const [activeCaseIndex, setActiveCaseIndex] = useState<number | null>(null);

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

      // Ensure first member remains captain
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

  const updateStage = (index: number, value: string) => {
    setStages((prev) =>
      prev.map((s, i) => (i === index ? { ...s, content: value } : s))
    );
  };

  const handleSubmit = async () => {
    if (isRegistrationClosed()) {
      return setError("Регистрация закрыта. Приём заявок завершён.");
    }

    setError(null);

    if (isEmpty(teamName)) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return setError("Введите название команды");
    }

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

      if (!isValidLinkedIn(m.linkedinLink)) {
        return setError(`Некорректный LinkedIn: Участник ${i + 1}`);
      }
    }

    for (const s of stages) {
      if (isEmpty(s.content)) return setError("Заполните все 8 кейсов");
    }

    const payload = {
      name: teamName,
      count,
      members,
      stages: stages.map((s) => ({ id: s.id, content: s.content })),
    };

    setSubmitting(true);

    try {
      const response = await fetch("http://37.27.29.18:8087/api/teems", {
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

  /* ================= SUCCESS SCREEN ================= */

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FFF7EF] px-4 py-10">
        <div className="max-w-md w-full bg-white rounded-3xl shadow-xl p-6 md:p-12 text-center animate-in fade-in zoom-in duration-300">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600">
            <Check className="h-8 w-8" />
          </div>

          <h1 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
            Заявка принята!
          </h1>

          <p className="text-gray-500 mb-8 leading-relaxed text-sm md:text-base">
            Вы успешно зарегистрировали команду <strong>{teamName}</strong>.
            <br className="hidden md:block" /> Мы свяжемся с капитаном после
            завершения отбора.
          </p>

          <Link href="/">
            <Button className="h-14 w-full rounded-full bg-purple-600 hover:bg-purple-700 text-white text-lg font-medium shadow-purple-200 shadow-lg transition-transform hover:scale-[1.02]">
              Вернуться на главную
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  /* ================= FORM SCREEN ================= */

  return (
    <section className="min-h-screen bg-[#FFF7EF] py-6 px-3 md:py-20 md:px-6 relative">
      {/* --- MODAL OVERLAY --- */}
      {activeCaseIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center px-4 py-6 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setActiveCaseIndex(null)}
        >
          <div
            className="bg-white w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl p-6 md:p-10 relative animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveCaseIndex(null)}
              className="absolute top-4 right-4 p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors text-gray-600"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Modal Content */}
            <div className="space-y-6">
              <div>
                {/* Тег с номером кейса */}
                <span className="inline-block px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-xs font-bold tracking-wide mb-3">
                  CASE #{activeCaseIndex + 1}
                </span>

                {/* Заголовок кейса */}
                <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 leading-tight mb-6">
                  {CASE_DETAILS[activeCaseIndex].title}
                </h2>

                {/* Карточка владельца кейса */}
                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl border border-gray-100 hover:border-purple-200 transition-colors">
                  {/* Контейнер для логотипа (белый квадрат) */}
                  <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl bg-white border border-gray-200 p-2 shadow-sm flex items-center justify-center">
                    <img
                      src={CASE_DETAILS[activeCaseIndex].img}
                      alt={CASE_DETAILS[activeCaseIndex].organizer}
                      className="h-full w-full object-contain"

                    />
                  </div>

                  {/* Текстовая информация */}
                  <div className="flex flex-col">
                    <span className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-0.5">
                      Владелец кейса
                    </span>
                    <span className="text-xl font-extrabold text-gray-900 leading-none">
                      {CASE_DETAILS[activeCaseIndex].organizer}
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-4 text-sm md:text-base text-gray-700">
                <div className="bg-red-50 p-4 rounded-2xl border border-red-100">
                  <h4 className="font-bold text-red-800 mb-1 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4" /> Проблема
                  </h4>
                  <p>{CASE_DETAILS[activeCaseIndex].problem}</p>
                </div>

                <div className="bg-green-50 p-4 rounded-2xl border border-green-100">
                  <h4 className="font-bold text-green-800 mb-1 flex items-center gap-2">
                    <Check className="w-4 h-4" /> Цель
                  </h4>
                  <p>{CASE_DETAILS[activeCaseIndex].goal}</p>
                </div>

                <div>
                  <h4 className="font-bold text-gray-900 mb-2">
                    Ключевые функции (Features):
                  </h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-600">
                    {CASE_DETAILS[activeCaseIndex].features.map((feat, idx) => (
                      <li key={idx}>{feat}</li>
                    ))}
                  </ul>
                </div>

                {CASE_DETAILS[activeCaseIndex].constraints && (
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">
                      Ограничения / Важно:
                    </h4>
                    <ul className="list-disc pl-5 space-y-1 text-gray-600">
                      {CASE_DETAILS[activeCaseIndex].constraints?.map(
                        (con, idx) => (
                          <li key={idx}>{con}</li>
                        )
                      )}
                    </ul>
                  </div>
                )}
              </div>

              <div className="pt-6 mt-6 border-t border-gray-100">
                <Button
                  onClick={() => setActiveCaseIndex(null)}
                  className="w-full bg-gray-900 text-white hover:bg-gray-800 rounded-xl py-6"
                >
                  Понятно, закрыть
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Alert Banner */}
      {isRegistrationClosed() && (
        <div className="max-w-4xl mx-auto mb-6 rounded-2xl border border-red-200 bg-red-50 p-4 flex items-center gap-3 text-red-700 shadow-sm">
          <AlertCircle className="h-5 w-5 shrink-0" />
          <p className="text-sm font-medium">
            Регистрация закрыта. Заявки принимались до 1 января 23:55.
          </p>
        </div>
      )}

      {!isRegistrationClosed() && (
        <div className="max-w-4xl mx-auto bg-white rounded-[1.5rem] md:rounded-[2.5rem] shadow-xl shadow-purple-900/5 overflow-hidden">
          <div className="p-5 md:p-12">
            {/* Header */}
            <div className="mb-8 md:mb-12">
              <Link
                href="/"
                className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-purple-600 transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                Назад
              </Link>

              <h1 className="text-2xl md:text-4xl font-extrabold text-gray-900 mb-3 text-center leading-tight">
                Регистрация команды
              </h1>
              <p className="text-center text-sm md:text-base text-gray-500 px-2">
                Hackathon Build With AI 2026 ·{" "}
                <span className="text-purple-600 font-medium whitespace-nowrap">
                  только командная регистрация
                </span>
              </p>
            </div>

            {/* ERROR TOP */}
            {error && (
              <div className="mb-8 p-4 bg-red-50 border border-red-100 text-red-600 rounded-xl flex items-start gap-3 text-sm">
                <AlertCircle className="h-5 w-5 shrink-0 mt-0.5" />
                {error}
              </div>
            )}

            {/* GLOBAL INFO */}
            <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-10">
              <div>
                <label className={LABEL_CLASS}>Название команды</label>
                <input
                  className={INPUT_CLASS}
                  placeholder="Название команды"
                  value={teamName}
                  onChange={(e) => setTeamName(e.target.value)}
                />
              </div>

              <div>
                <label className={LABEL_CLASS}>Количество участников</label>
                <div className="relative">
                  <select
                    className={`${INPUT_CLASS} appearance-none`}
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

            <div className="h-px bg-gray-100 my-8 md:my-10" />

            {/* MEMBERS LIST */}
            <div className="space-y-6 md:space-y-8">
              {members.map((m, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-gray-100 bg-white p-4 md:p-8 shadow-sm"
                >
                  <h3 className="font-bold text-lg mb-6 flex items-center gap-2">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-sm">
                      {i + 1}
                    </span>
                    <span className="text-gray-900">Участник</span>
                    {m.isCapitan && (
                      <span className="rounded-full bg-purple-100 px-2.5 py-0.5 text-xs font-bold text-purple-700 uppercase tracking-wide ml-auto md:ml-0">
                        Капитан
                      </span>
                    )}
                  </h3>

                  <div className="grid md:grid-cols-2 gap-4 md:gap-5">
                    <div className="md:col-span-2">
                      <label className={LABEL_CLASS}>ФИО (Полностью)</label>
                      <input
                        className={INPUT_CLASS}
                        value={m.fullName}
                        onChange={(e) =>
                          updateMember(i, "fullName", e.target.value)
                        }
                      />
                    </div>

                    <div>
                      <label className={LABEL_CLASS}>Телефон</label>
                      <input
                        type="tel"
                        className={INPUT_CLASS}
                        placeholder="+992..."
                        value={m.phone}
                        onChange={(e) =>
                          updateMember(i, "phone", e.target.value)
                        }
                      />
                    </div>

                    <div>
                      <label className={LABEL_CLASS}>GitHub</label>
                      <input
                        className={INPUT_CLASS}
                        placeholder="github.com/username"
                        value={m.githubLink.trim()}
                        onChange={(e) =>
                          updateMember(i, "githubLink", e.target.value)
                        }
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label className={LABEL_CLASS}>LinkedIn</label>
                      <input
                        className={INPUT_CLASS}
                        placeholder="linkedin.com/in/username"
                        value={m.linkedinLink}
                        onChange={(e) =>
                          updateMember(i, "linkedinLink", e.target.value)
                        }
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label className={LABEL_CLASS}>График участия</label>
                      <p className={HINT_CLASS}>
                        Сможете ли вы быть онлайн 9:00–18:00?
                      </p>
                      <textarea
                        className={`${INPUT_CLASS} min-h-[80px] resize-none`}
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

            <div className="h-px bg-gray-100 my-10 md:my-12" />

            {/* STAGES + PDF SECTION */}
            <div>
              <h2 className="text-xl md:text-2xl font-bold mb-2 text-gray-900">
                Кейсы + PDF
              </h2>
              <p className="text-gray-500 text-sm mb-8 leading-relaxed">
                Напишите решение для каждого кейса. Вы можете открыть PDF или
                нажать кнопку «Подробнее», чтобы прочитать информацию прямо
                здесь.
              </p>

              <div className="space-y-8">
                {stages.map((s, i) => (
                  <div
                    key={s.id}
                    className="rounded-2xl border border-gray-100 bg-white p-4 md:p-6 shadow-sm overflow-hidden"
                  >
                    {/* Header Row: Title and Buttons */}
                    <div className="flex flex-col gap-4 mb-5">
                      <div className="flex items-center gap-2">
                        <div className="bg-purple-50 p-2 rounded-lg text-purple-600">
                          <FileText className="w-5 h-5" />
                        </div>
                        <label className="text-base font-bold text-gray-800">
                          Кейс #{i + 1}:{" "}
                          <span className="font-normal text-gray-600">
                            {CASE_DETAILS[i]?.title}
                          </span>
                        </label>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {/* Modal Trigger Button */}
                        <button
                          type="button"
                          onClick={() => setActiveCaseIndex(i)}
                          className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-purple-50 text-purple-700 text-sm font-medium hover:bg-purple-100 transition-colors border border-purple-100"
                        >
                          <Info className="h-4 w-4" />
                          <span>Подробнее</span>
                        </button>

                        {/* PDF Button */}
                        <a
                          href={s.pdfUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-gray-50 text-gray-700 text-sm font-medium hover:bg-gray-100 hover:text-purple-600 transition-colors border border-gray-200"
                        >
                          <span>Открыть PDF</span>
                          <ExternalLink className="h-3.5 w-3.5" />
                        </a>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-700 ml-1">
                        Ваше решение:
                      </label>
                      <textarea
                        className={`${INPUT_CLASS} min-h-[140px] text-base leading-relaxed`}
                        placeholder={`Напишите ваше решение для кейса ${
                          i + 1
                        } здесь...`}
                        value={s.content}
                        onChange={(e) => updateStage(i, e.target.value)}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* FOOTER ACTIONS */}
            <div className="mt-12 pt-8 border-t border-gray-100">
              {error && (
                <p className="mb-6 text-center text-sm font-medium text-red-500 bg-red-50 p-3 rounded-lg">
                  {error}
                </p>
              )}

              <div className="flex justify-center">
                <Button
                  onClick={handleSubmit}
                  disabled={isRegistrationClosed() || submitting}
                  className="
                    w-full md:w-auto
                    h-auto py-4 px-8 md:px-16
                    rounded-xl md:rounded-full
                    bg-purple-600 hover:bg-purple-700
                    text-white text-lg font-semibold
                    shadow-xl shadow-purple-200
                    transition-all hover:scale-[1.02] active:scale-95
                    disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100
                  "
                >
                  {submitting ? "Отправка..." : "Завершить регистрацию"}
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
