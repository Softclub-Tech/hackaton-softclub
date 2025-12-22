import type React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Build With AI 2026 — Хакатон дар Душанбе",
    template: "%s | Build With AI 2026",
  },
  description:
    "Build With AI 2026 — хакатони офлайн дар Душанбе (Ориёнбанк), 3–4 январи 2026. Командаҳо 3–4 нафар. 2 рӯз кор бо AI/Automation, менторство, demo ва ҷоизаҳо (то 10 000 TJS).",
  keywords: [
    "Build With AI",
    "хакатон",
    "AI",
    "искусственный интеллект",
    "automation",
    "Душанбе",
    "Таджикистан",
    "Ориёнбанк",
    "3 января 2026",
    "4 января 2026",
    "SoftClub",
    "KuickTech",
    "менторство",
    "прототип",
    "стартап",
  ],
  applicationName: "Build With AI 2026",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: "/",
    siteName: "Build With AI 2026",
    title: "Build With AI 2026 — Хакатон дар Душанбе",
    description:
      "Офлайн хакатон дар Душанбе (Ориёнбанк), 3–4 январи 2026. Командаҳо 3–4 нафар. AI маҳсулот, менторство, demo ва ҷоизаҳо то 10 000 TJS.",
    images: [
      {
        url: "/ai14.svg", 
        width: 1200,
        height: 630,
        alt: "Build With AI 2026 — Hackathon",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Build With AI 2026 — Хакатон дар Душанбе",
    description:
      "3–4 январи 2026 • Душанбе • Ориёнбанк • Команда 3–4 • AI/Automation • Ҷоиза то 10 000 TJS",
    images: ["/ai14.svg"],
  },
  icons: {
    icon: [
      {
        url: "/ai10.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/ai10.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/ai14.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
  category: "event",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
