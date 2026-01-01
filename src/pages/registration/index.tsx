import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Check,
  AlertCircle,
  ExternalLink,
  X,
  Target,
  MousePointerClick,
  Info,
  Terminal,
} from "lucide-react";

/* ================= UTILS ================= */
function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(" ");
}

/* ================= STYLES (Dark Mode & Green Accent) ================= */

const INPUT_CLASS =
  "w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3.5 text-base text-white outline-none focus:border-green-500 focus:bg-white/10 focus:ring-1 focus:ring-green-500/50 transition-all placeholder:text-white/20";

const LABEL_CLASS =
  "block mb-2 text-sm font-mono text-slate-400 uppercase tracking-wider";

const BUTTON_BASE =
  "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-bold tracking-wide transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500 disabled:pointer-events-none disabled:opacity-50";

/* ================= TYPES & LOGIC ================= */

const REGISTRATION_DEADLINE = new Date("2026-01-02T12:00:00");

// Проверка времени
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

/* ================= DATA ================= */

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
  const [open, setOpen] = useState(false);

  const [teamName, setTeamName] = useState("");
  const [count, setCount] = useState<number>(3);

  const [members, setMembers] = useState<Member[]>([
    createEmptyMember(true),
    createEmptyMember(false),
    createEmptyMember(false),
  ]);

  const [selectedCaseIndex, setSelectedCaseIndex] = useState<number | null>(
    null
  );
  const [solutionContent, setSolutionContent] = useState("");
  const [activeModalIndex, setActiveModalIndex] = useState<number | null>(null);
  const [submitting, setSubmitting] = useState(false);

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
    // Двойная проверка на всякий случай
    if (isRegistrationClosed()) {
      return setError("Регистрация закрыта.");
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
      if (!isValidLinkedIn(m.linkedinLink.trim())) {
        return setError(`Некорректный LinkedIn: Участник ${i + 1}`);
      }
    }

    if (selectedCaseIndex === null) {
      return setError("Выберите один кейс для решения (нажмите на карточку)!");
    }

    if (isEmpty(solutionContent)) {
      return setError("Напишите ваше решение (Solution) для выбранного кейса.");
    }

    setSubmitting(true);

    const stagesPayload = CASE_DETAILS.map((_, index) => ({
      id: `case${index + 1}`,
      content:
        index === selectedCaseIndex ? `case${index}: ` + solutionContent : "",
    }));

    const payload = {
      name: teamName,
      count,
      members,
      stages: stagesPayload,
    };

    try {
      const response = await fetch(
        "https://hackaton-api.softclub.tj/api/teems",
        {
          method: "POST",
          headers: {
            Accept: "text/plain",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

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

  // 2. ИЗМЕНЕНО: Если регистрация закрыта, показываем этот экран вместо формы
  if (isRegistrationClosed()) {
    return (
      <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden font-sans">
        {/* Background Grid */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.15]"
          style={{
            backgroundImage: `linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        ></div>

        <div className="relative z-10 max-w-md w-full bg-[#111] border border-white/10 rounded-2xl shadow-2xl p-8 text-center animate-in fade-in zoom-in duration-500">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-red-500/10 text-red-500 border border-red-500/20">
            <AlertCircle className="h-8 w-8" />
          </div>
          <h1 className="text-3xl font-black text-white mb-2 tracking-tight">
            Регистрация закрыта
          </h1>
          <p className="text-slate-400 mb-8 leading-relaxed">
            К сожалению, прием заявок завершен. <br />
            Дедлайн был: <strong className="text-white">02.01.2026</strong>
          </p>
          <Link to="/">
            <button
              className={cn(
                BUTTON_BASE,
                "w-full bg-white/5 hover:bg-white/10 text-white h-12 shadow-lg border border-white/10"
              )}
            >
              Вернуться на главную
            </button>
          </Link>
        </div>
      </section>
    );
  }

  // Экран успешной отправки (существующий код)
  if (isSubmitted) {
    return (
      <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden font-sans">
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.15]"
          style={{
            backgroundImage: `linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        ></div>

        <div className="relative z-10 max-w-md w-full bg-[#111] border border-white/10 rounded-2xl shadow-2xl p-8 text-center animate-in fade-in zoom-in duration-500">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-500/10 text-green-500 border border-green-500/20">
            <Check className="h-8 w-8" />
          </div>
          <h1 className="text-3xl font-black text-white mb-2 tracking-tight">
            Заявка принята!
          </h1>
          <p className="text-slate-400 mb-8 leading-relaxed">
            Команда <strong className="text-white">{teamName}</strong>{" "}
            зарегистрирована.
            <br />
            Выбранный кейс:
            <br />
            <strong className="text-green-500 mt-2 block text-lg">
              {selectedCaseIndex !== null
                ? CASE_DETAILS[selectedCaseIndex].title
                : ""}
            </strong>
          </p>
          <Link to="/">
            <button
              className={cn(
                BUTTON_BASE,
                "w-full bg-green-600 hover:bg-green-500 text-black h-12 shadow-lg hover:shadow-green-500/20"
              )}
            >
              Вернуться на главную
            </button>
          </Link>
        </div>
      </section>
    );
  }

  // Основная форма (рендерится только если регистрация открыта)
  return (
    <section className="relative min-h-screen bg-black text-white font-sans selection:bg-green-500/30 py-10 px-4 md:px-8 overflow-hidden">
      {/* 1. TEXTURE LAYER: Grid (Matches Hero) */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.15] z-0"
        style={{
          backgroundImage: `linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      ></div>

      {/* --- MODAL FOR DETAILS (Dark Mode) --- */}
      {activeModalIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center px-4 py-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setActiveModalIndex(null)}
        >
          <div
            className="bg-[#111] w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl border border-white/10 p-6 md:p-10 relative animate-in zoom-in-95 duration-200 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveModalIndex(null)}
              className="absolute top-4 right-4 p-2 bg-white/5 rounded-full hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="mb-6">
              <span className="inline-block px-3 py-1 rounded-full bg-green-500/10 text-green-500 border border-green-500/20 text-xs font-mono font-bold tracking-widest uppercase mb-3">
                CASE #{activeModalIndex + 1}
              </span>
              <h2 className="text-2xl md:text-3xl font-black text-white leading-tight">
                {CASE_DETAILS[activeModalIndex].title}
              </h2>
              <div className="flex items-center gap-2 mt-3">
                <span className="text-xs font-mono text-slate-500 uppercase">
                  Organizer:
                </span>
                <span className="text-sm font-bold text-white">
                  {CASE_DETAILS[activeModalIndex].organizer}
                </span>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-red-500/10 p-5 rounded-xl border border-red-500/20">
                <h4 className="font-bold text-red-400 mb-2 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4" /> Проблема
                </h4>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {CASE_DETAILS[activeModalIndex].problem}
                </p>
              </div>

              <div className="bg-green-500/10 p-5 rounded-xl border border-green-500/20">
                <h4 className="font-bold text-green-400 mb-2 flex items-center gap-2">
                  <Check className="w-4 h-4" /> Цель
                </h4>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {CASE_DETAILS[activeModalIndex].goal}
                </p>
              </div>

              <div>
                <h4 className="font-bold text-white mb-3">Ключевые функции:</h4>
                <ul className="list-disc pl-5 space-y-2 text-sm text-slate-400">
                  {CASE_DETAILS[activeModalIndex].features.map((f, idx) => (
                    <li key={idx}>{f}</li>
                  ))}
                </ul>
              </div>

              {CASE_DETAILS[activeModalIndex].constraints && (
                <div>
                  <h4 className="font-bold text-white mb-3">Ограничения:</h4>
                  <ul className="list-disc pl-5 space-y-2 text-sm text-slate-400">
                    {CASE_DETAILS[activeModalIndex].constraints?.map(
                      (c, idx) => (
                        <li key={idx}>{c}</li>
                      )
                    )}
                  </ul>
                </div>
              )}
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => setActiveModalIndex(null)}
                className={cn(
                  BUTTON_BASE,
                  "flex-1 h-12 border border-white/10 hover:bg-white/5 text-slate-300 hover:text-white"
                )}
              >
                Закрыть
              </button>
              <button
                onClick={() => {
                  handleSelectCase(activeModalIndex);
                  setActiveModalIndex(null);
                  setTimeout(() => {
                    document
                      .getElementById("solution-area")
                      ?.scrollIntoView({ behavior: "smooth", block: "center" });
                  }, 100);
                }}
                className={cn(
                  BUTTON_BASE,
                  "flex-1 bg-green-600 hover:bg-green-500 text-black h-12"
                )}
              >
                Выбрать этот кейс
              </button>
            </div>
          </div>
        </div>
      )}

      {/* --- MAIN FORM --- */}
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="bg-[#0A0A0A] border border-white/10 rounded-2xl md:rounded-[2rem] shadow-2xl p-6 md:p-12 lg:p-16">
          {/* Header */}
          <div className="mb-10 md:mb-16 text-center max-w-3xl mx-auto">
            <Link
              to="/"
              className="inline-flex items-center text-sm font-mono text-slate-500 hover:text-green-500 mb-8 transition-colors uppercase tracking-widest"
            >
              <ArrowLeft className="h-4 w-4 mr-2" /> Назад
            </Link>
            <h1 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tighter uppercase">
              Регистрация <span className="text-green-500">Команды</span>
            </h1>
            <p className="text-slate-400 text-lg">
              Заполните данные и выберите <br />{" "}
              <span className="text-green-500 font-bold bg-green-500/10 px-2 py-0.5 rounded border border-green-500/20">
                один кейс
              </span>{" "}
              для решения.
            </p>
          </div>

          {error && (
            <div className="max-w-2xl mx-auto mb-10 p-4 bg-red-500/10 border border-red-500/20 text-red-400 rounded-xl flex items-start gap-3 animate-in slide-in-from-top-2">
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
                {/* trigger */}
                <button
                  type="button"
                  onClick={() => setOpen(!open)}
                  className={`${INPUT_CLASS} flex items-center justify-between cursor-pointer`}
                >
                  <span>{count} участника</span>

                  <svg
                    className={`h-4 w-4 text-white/40 transition-transform ${open ? "rotate-180" : ""
                      }`}
                    viewBox="0 0 20 20"
                  >
                    <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                  </svg>
                </button>

                {/* dropdown */}
                {open && (
                  <div className="absolute z-20 mt-2 w-full rounded-lg border border-white/10 bg-[#111] shadow-xl overflow-hidden">
                    {[3, 4].map((value) => (
                      <button
                        key={value}
                        type="button"
                        onClick={() => {
                          setCount(value);
                          setOpen(false);
                        }}
                        className={`w-full px-4 py-3 text-left text-white transition
              hover:bg-white/10
              ${count === value ? "bg-white/10" : ""}
            `}
                      >
                        {value} участника
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="space-y-6 mb-16 max-w-4xl mx-auto">
            {members.map((m, i) => (
              <div
                key={i}
                className="p-6 md:p-8 border border-white/10 rounded-2xl bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300"
              >
                <div className="flex justify-between items-center mb-6">
                  <h3 className="font-bold text-white text-lg flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 text-white text-sm font-bold font-mono border border-white/10">
                      0{i + 1}
                    </span>
                    Участник
                  </h3>
                  {m.isCapitan && (
                    <span className="bg-green-500/20 text-green-400 border border-green-500/20 px-3 py-1 rounded text-[10px] font-mono font-bold uppercase tracking-widest">
                      Captain
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
                      placeholder="Сможете ли быть оффлайн?..."
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

          <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent my-12" />

          {/* 2. CASE SELECTION (GRID) */}
          <div id="case-selection" className="mb-12">
            <div className="flex flex-col items-center mb-10 text-center">
              <div className="bg-green-500/10 p-3 rounded-xl text-green-500 mb-4 border border-green-500/20">
                <Target className="w-8 h-8" />
              </div>
              <h2 className="text-3xl font-black text-white mb-2 tracking-tight">
                ВЫБЕРИТЕ КЕЙС
              </h2>
              <p className="text-slate-400 max-w-lg">
                Кликните на карточку, чтобы выбрать задачу. Решение нужно только
                для выбранного кейса.
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
                      "group relative flex flex-col h-full cursor-pointer bg-[#111] border border-white/10 p-5 transition-all duration-300 hover:border-green-500/50",
                      isSelected
                        ? "border-green-500 bg-green-500/5 ring-1 ring-green-500"
                        : "hover:bg-white/[0.02]"
                    )}
                  >
                    {isSelected && (
                      <div className="absolute top-0 right-0 p-2">
                        <div className="bg-green-500 text-black p-1 rounded-bl-lg shadow-sm">
                          <Check className="w-4 h-4" />
                        </div>
                      </div>
                    )}

                    <div className="h-14 w-14 bg-white rounded-md border border-white/10 p-2 mb-4 flex items-center justify-center group-hover:bg-green-500/10 transition-colors">
                      <img
                        src={c.img}
                        alt="logo"
                        className="min-w-full min-h-full object-contain"
                      />
                    </div>

                    <h3
                      className={cn(
                        "font-bold text-lg mb-1 leading-snug transition-colors uppercase font-mono tracking-tight",
                        isSelected
                          ? "text-green-500"
                          : "text-white group-hover:text-green-500"
                      )}
                    >
                      {c.title}
                    </h3>
                    <p className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-3">
                      {c.organizer}
                    </p>

                    <div className="flex gap-2 mt-auto pt-4 w-full border-t border-white/5">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveModalIndex(idx);
                        }}
                        className="flex-1 py-2 text-[10px] font-mono font-bold text-slate-400 bg-white/5 hover:bg-white/10 hover:text-white transition-colors flex items-center justify-center gap-1 uppercase tracking-wider"
                      >
                        <Info className="w-3 h-3" /> Info
                      </button>
                      <a
                        href={PDF_URLS[idx]}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex-1 py-2 text-[10px] font-mono font-bold text-green-500 bg-green-500/10 hover:bg-green-500/20 transition-colors flex items-center justify-center gap-1 uppercase tracking-wider"
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
              <div className="animate-in fade-in slide-in-from-bottom-6 duration-500 bg-[#111] border border-green-500/30 rounded-2xl p-6 md:p-10 relative overflow-hidden">
                {/* Glow effect */}
                <div className="absolute top-0 right-0 p-32 bg-green-500/10 rounded-full blur-3xl opacity-20 -mr-16 -mt-16 pointer-events-none" />

                <div className="flex flex-col md:flex-row items-start md:items-center gap-5 mb-6 relative z-10">
                  <div className="flex h-12 w-12 items-center justify-center rounded bg-green-600 text-black shrink-0 font-bold">
                    <Terminal className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-white uppercase tracking-tight">
                      Техническое Решение
                    </h3>
                    <p className="text-slate-400 text-sm mt-1">
                      Опишите план решения для{" "}
                      <strong className="text-green-500 font-mono">
                        {CASE_DETAILS[selectedCaseIndex].title}
                      </strong>
                    </p>
                  </div>
                </div>

                <textarea
                  className={`${INPUT_CLASS} min-h-[220px] text-lg font-mono p-6 resize-y bg-[#050505] border-white/10`}
                  placeholder="// Опишите стек технологий, архитектуру и основные фичи..."
                  value={solutionContent}
                  onChange={(e) => setSolutionContent(e.target.value)}
                  autoFocus
                />

                <div className="mt-8 md:mt-10 flex justify-end">
                  <button
                    onClick={handleSubmit}
                    disabled={submitting}
                    className={cn(
                      BUTTON_BASE,
                      "w-full md:w-auto h-16 px-10 bg-green-600 hover:bg-green-500 text-black text-lg shadow-[0_0_20px_rgba(34,197,94,0.3)] hover:shadow-[0_0_30px_rgba(34,197,94,0.5)] transition-all uppercase tracking-widest"
                    )}
                  >
                    {submitting ? "Отправка..." : "Зарегистрироваться"}
                  </button>
                </div>
              </div>
            ) : (
              <div className="text-center py-16 bg-white/[0.02] rounded-2xl border border-dashed border-white/10 text-slate-500 flex flex-col items-center justify-center">
                <MousePointerClick className="w-12 h-12 mb-4 opacity-50" />
                <p className="font-mono text-sm uppercase tracking-widest">
                  Выберите кейс выше
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
