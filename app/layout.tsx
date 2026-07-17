import type { Metadata } from "next";

import "./globals.css";
import "@/styles/landing/animations.css";
import "@/styles/landing/landing.css";
import "@/styles/landing/hero.css";
import "@/styles/landing/info-grid.css";
import "@/styles/landing/button.css";

import "@/styles/dashboard/cards.css";
import "@/styles/dashboard/dashboard.css";

import "@/styles/shared/placeholder.css";
import "@/styles/shared/back-button.css";
import "@/styles/shared/banner.css";
import "@/styles/shared/footer.css";
import "@/styles/shared/layout.css";

import "@/styles/layout/hero.css";
import "@/styles/layout/welcome.css";
import "@/styles/layout/next-section.css";
import "@/styles/layout/footer-section.css";

import "@/styles/home/about.css";
import "@/styles/home/features.css";
import "@/styles/home/values.css";
import "@/styles/home/news.css";
import "@/styles/home/explore.css";

import "@/styles/season/guild-info.css";
import "@/styles/season/dev-guide.css";
import "@/styles/season/current-season.css";
import "@/styles/season/community-guides.css";
import "@/styles/season/weekly-team.css";
import { Orbitron } from "next/font/google";

import "@/styles/community/message.css";
import "@/styles/community/members.css";
import "@/styles/community/additions.css";

import "@/styles/gallery/fanarts.css";
import "@/styles/gallery/memes.css";
import "@/styles/gallery/chat.css";

export const metadata: Metadata = {
  title: "DEV'S ALLIANCE",
  description: "Comunidad oficial del gremio DEV'S ALLIANCE de Skullgirls Mobile.",
};


const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${orbitron.variable}`}>
        {children}
      </body>
    </html>
  );
}