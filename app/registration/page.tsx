"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeft, CircleArrowRight, Check, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

/* ================= STYLES ================= */

// Define reusable styles for consistency and cleaner JSX
const INPUT_CLASS =
  "w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-base outline-none focus:border-purple-500 focus:bg-white focus:ring-4 focus:ring-purple-100 transition-all placeholder:text-gray-400";
const LABEL_CLASS = "block mb-2 text-sm font-semibold text-gray-700";
const HINT_CLASS = "mb-3 text-xs text-gray-500";

/* ================= TYPES & LOGIC ================= */

const REGISTRATION_DEADLINE = new Date("2026-01-01T23:55:00");

const isRegistrationClosed = () => {
  return new Date() > REGISTRATION_DEADLINE;
};

type Member = {
  fullName: string;
  phone: string;
  githubLink: string;
  linkedinLink: string;
  fullTimeParticipationNote: string;
  isCapitan: boolean;
};

type Stage = {
  content: string;
};

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

/* ================= PAGE COMPONENT ================= */

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
    Array.from({ length: 8 }, () => ({ content: "" }))
  );

  /* ===== Sync members with count ===== */
  useEffect(() => {
    setMembers((prev) => {
      const next = [...prev];
      if (count > prev.length) {
        for (let i = prev.length; i < count; i++) {
          next.push(createEmptyMember(false));
        }
      }
      if (count < prev.length) {
        return next.slice(0, count);
      }
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
      prev.map((s, i) => (i === index ? { content: value } : s))
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
        isEmpty(m.githubLink) ||
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

    for (const s of stages) {
      if (isEmpty(s.content)) {
        return setError("Заполните все 8 кейсов");
      }
    }

    const payload = { name: teamName, count, members, stages };
    console.log("📦 PAYLOAD:", payload);

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

      if (!response.ok) {
        throw new Error(data || "Request failed");
      }

      console.log("Success:", data);
    } catch (error) {
      if (error instanceof Error) {
        console.error("Error:", error.message);
      } else {
        console.error("Error:", error);
      }
    }

    setIsSubmitted(true);
    window.scrollTo(0, 0);
  };

  /* ================= SUCCESS SCREEN ================= */

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FFF7EF] px-4 py-10">
        <div className="max-w-md w-full bg-white rounded-3xl shadow-xl p-8 md:p-12 text-center animate-in fade-in zoom-in duration-300">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600">
            <Check className="h-8 w-8" />
          </div>

          <h1 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
            Заявка принята!
          </h1>

          <p className="text-gray-500 mb-8 leading-relaxed">
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
    <section className="min-h-screen bg-[#FFF7EF] py-8 px-4 md:py-20 md:px-6">
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
        <div className="max-w-4xl mx-auto bg-white rounded-2xl md:rounded-[2.5rem] shadow-xl shadow-purple-900/5 overflow-hidden">
          <div className="p-6 md:p-12">
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
              <p className="text-center text-sm md:text-base text-gray-500">
                Hackathon Build With AI 2026 ·{" "}
                <span className="text-purple-600 font-medium">
                  только командная регистрация
                </span>
              </p>
            </div>

            {/* ERROR TOP (Mobile friendly) */}
            {error && (
              <div className="mb-8 p-4 bg-red-50 border border-red-100 text-red-600 rounded-xl flex items-start gap-3 text-sm animate-pulse">
                <AlertCircle className="h-5 w-5 shrink-0 mt-0.5" />
                {error}
              </div>
            )}

            {/* GLOBAL INFO */}
            <div className="grid md:grid-cols-2 gap-6 mb-10">
              <div>
                <label className={LABEL_CLASS}>Название команды</label>
                <input
                  className={INPUT_CLASS}
                  placeholder="Dream Team"
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

            <div className="h-px bg-gray-100 my-10" />

            {/* MEMBERS LIST */}
            <div className="space-y-6 md:space-y-8">
              {members.map((m, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-gray-100 bg-white p-5 md:p-8 shadow-sm"
                >
                  <h3 className="font-bold text-lg mb-6 flex items-center gap-2">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-sm">
                      {i + 1}
                    </span>
                    Участник
                    {m.isCapitan && (
                      <span className="rounded-full bg-purple-100 px-3 py-1 text-xs font-bold text-purple-700 uppercase tracking-wide">
                        Captain
                      </span>
                    )}
                  </h3>

                  <div className="grid md:grid-cols-2 gap-5">
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

            <div className="h-px bg-gray-100 my-12" />

            {/* STAGES */}
            <div>
              <h2 className="text-xl md:text-2xl font-bold mb-2">
                Описание решений
              </h2>
              <p className="text-gray-500 text-sm mb-8">
                Кратко опишите идею для каждого из 8 кейсов
              </p>

              <div className="space-y-6">
                {stages.map((s, i) => (
                  <div key={i} className="relative">
                    <label
                      className={`${LABEL_CLASS} flex items-center justify-between`}
                    >
                      <span>Кейс #{i + 1}</span>
                    </label>
                    <textarea
                      className={`${INPUT_CLASS} min-h-[100px]`}
                      placeholder={`Решение для кейса ${i + 1}...`}
                      value={s.content}
                      onChange={(e) => updateStage(i, e.target.value)}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* FOOTER ACTIONS */}
            <div className="mt-12 pt-8 border-t border-gray-100">
              {error && (
                <p className="mb-6 text-center text-sm font-medium text-red-500 animate-pulse">
                  {error}
                </p>
              )}

              <div className="flex justify-center">
                <Button
                  onClick={handleSubmit}
                  disabled={isRegistrationClosed()}
                  className="
                        w-full md:w-auto
                        h-auto py-4 px-8 md:px-12
                        rounded-2xl md:rounded-full
                        bg-purple-600 hover:bg-purple-700
                        text-white text-lg font-semibold
                        shadow-xl shadow-purple-200
                        transition-all hover:scale-[1.02] active:scale-95
                        disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100
                        "
                >
                  <div className="flex flex-col md:flex-row items-center gap-3">
                    {/* <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/20">
                      <CircleArrowRight className="h-5 w-5" />
                    </span> */}
                    <span>Завершить регистрацию</span>
                  </div>
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
