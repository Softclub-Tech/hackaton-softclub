"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeft, CircleArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

/* ================= TYPES ================= */

// ⏰ дедлайн регистрации
const REGISTRATION_DEADLINE = new Date("2026-01-01T23:55:00");

const isRegistrationClosed = () => {
  return new Date() > REGISTRATION_DEADLINE;
};

type Member = {
  fullName: string;
  phone: string;
  githubLink: string;
  linkedinLink: string;
  availabilityNote: string;
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
  availabilityNote: "",
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

/* ================= PAGE ================= */

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

  /* ===== sync members with count ===== */
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

  const handleSubmit = () => {
    if (isRegistrationClosed()) {
      return setError(
        "Регистрация закрыта. Приём заявок завершён 1 января в 23:55."
      );
    }

    setError(null);

    if (isEmpty(teamName)) {
      return setError("Введите название команды");
    }

    for (let i = 0; i < members.length; i++) {
      const m = members[i];

      if (
        isEmpty(m.fullName) ||
        isEmpty(m.phone) ||
        isEmpty(m.githubLink) ||
        isEmpty(m.linkedinLink) ||
        isEmpty(m.availabilityNote)
      ) {
        return setError(`Заполните все поля: Участник ${i + 1}`);
      }

      if (!isValidGithub(m.githubLink.trim())) {
        return setError(`Укажите корректную ссылку GitHub: Участник ${i + 1}`);
      }

      if (!isValidLinkedIn(m.linkedinLink.trim())) {
        return setError(
          `Укажите корректную ссылку LinkedIn: Участник ${i + 1}`
        );
      }
    }

    for (const s of stages) {
      if (isEmpty(s.content)) {
        return setError("Заполните все 8 кейсов");
      }
    }

    /* ===== PAYLOAD ДЛЯ BACKEND ===== */
    const payload = {
      name: teamName,
      count,
      members,
      stages,
    };

    console.log("📦 PAYLOAD ДЛЯ BACKEND:", payload);

    setIsSubmitted(true);
  };

  /* ================= SUCCESS SCREEN ================= */

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FFF7EF] px-4">
        <div className="max-w-md w-full bg-white rounded-3xl shadow-xl p-10 text-center">
          <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-green-100 text-green-600 text-2xl">
            ✓
          </div>

          <h1 className="text-2xl font-bold mb-2">Регистрация завершена</h1>

          <p className="text-gray-500 mb-8">
            Вы успешно зарегистрировали команду.
            <br />
            Мы свяжемся с вами после завершения отбора.
          </p>

          <Link href="/">
            <Button className="h-12 w-full rounded-full bg-purple-600 hover:bg-purple-700 text-white">
              На главную
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  /* ================= FORM ================= */

  return (
    <section className="min-h-screen bg-[#FFF7EF] py-20 px-4">
      {isRegistrationClosed() && (
        <div className="mb-8 rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
          ⛔ Регистрация закрыта. Заявки принимались до 1 января 23:55.
        </div>
      )}
      {!isRegistrationClosed() && (
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-10">
          {/* BACK */}
          <Link
            href="/"
            className="mb-6 inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-800"
          >
            <ArrowLeft className="h-4 w-4" />
            На главную
          </Link>

          <h1 className="text-4xl font-extrabold text-center mb-2">
            Регистрация команды
          </h1>
          <p className="text-center text-sm text-gray-500 mb-10">
            Hackathon Build With AI 2026 · только командная регистрация (3–4)
          </p>

          {/* TEAM NAME */}
          <div className="mb-8">
            <label className="label">Название команды</label>
            <p className="hint">
              Название будет использоваться при отборе команд
            </p>
            <input
              className="input"
              value={teamName}
              onChange={(e) => setTeamName(e.target.value)}
            />
          </div>

          {/* COUNT */}
          <div className="mb-10">
            <label className="label">Количество участников</label>
            <p className="hint">Минимум 3, максимум 4 человека</p>
            <select
              className="input"
              value={count}
              onChange={(e) => setCount(Number(e.target.value))}
            >
              <option value={3}>3 участника</option>
              <option value={4}>4 участника</option>
            </select>
          </div>

          {/* MEMBERS */}
          <div className="space-y-8">
            {members.map((m, i) => (
              <div key={i} className="rounded-2xl border p-6">
                <h3 className="font-semibold mb-4">
                  Участник {i + 1}{" "}
                  {m.isCapitan && (
                    <span className="text-purple-600">(Капитан)</span>
                  )}
                </h3>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="label">ФИО</label>
                    <input
                      className="input"
                      value={m.fullName}
                      onChange={(e) =>
                        updateMember(i, "fullName", e.target.value)
                      }
                    />
                  </div>

                  <div>
                    <label className="label">Телефон</label>
                    <input
                      className="input"
                      value={m.phone}
                      onChange={(e) => updateMember(i, "phone", e.target.value)}
                    />
                  </div>

                  <div>
                    <label className="label">GitHub</label>
                    <input
                      className="input"
                      placeholder="https://github.com/username"
                      value={m.githubLink}
                      onChange={(e) =>
                        updateMember(i, "githubLink", e.target.value)
                      }
                    />
                  </div>

                  <div>
                    <label className="label">LinkedIn</label>
                    <input
                      className="input"
                      placeholder="https://linkedin.com/in/username"
                      value={m.linkedinLink}
                      onChange={(e) =>
                        updateMember(i, "linkedinLink", e.target.value)
                      }
                    />
                  </div>
                </div>

                <div className="mt-4">
                  <label className="label">Участие во время хакатона</label>
                  <p className="hint">
                    Укажите, сможете ли вы участвовать full-time (например
                    9:00–18:00) или есть ограничения
                  </p>
                  <textarea
                    className="input min-h-[80px]"
                    value={m.availabilityNote}
                    onChange={(e) =>
                      updateMember(i, "availabilityNote", e.target.value)
                    }
                  />
                </div>
              </div>
            ))}
          </div>

          {/* STAGES */}
          <div className="mt-14">
            <h2 className="text-2xl font-bold mb-6">
              Описание идеи по кейсам (8)
            </h2>

            <div className="space-y-4">
              {stages.map((s, i) => (
                <div key={i}>
                  <label className="label">Кейс {i + 1}</label>
                  <textarea
                    className="input min-h-[90px]"
                    value={s.content}
                    onChange={(e) => updateStage(i, e.target.value)}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* ERROR */}
          {error && (
            <p className="mt-6 text-center text-sm text-red-500">{error}</p>
          )}

          {/* SUBMIT */}
          <div className="mt-12 text-center">
            <Button
              onClick={handleSubmit}
              disabled={isRegistrationClosed()}
              className="
    h-16 px-10 text-xl rounded-full
    bg-purple-600 hover:bg-purple-700
    text-white shadow-lg
    disabled:opacity-50 disabled:cursor-not-allowed
  "
            >
              <span className="flex items-center gap-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/20">
                  <CircleArrowRight className="h-6 w-6" />
                </span>
                Завершить регистрацию
              </span>
            </Button>
          </div>
        </div>
      )}
    </section>
  );
}
