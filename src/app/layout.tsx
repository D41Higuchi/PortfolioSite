"use client";

import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CursorFollower from '@/components/ui/CursorFollower';
import React from 'react';
import { Inter, Press_Start_2P, Playfair_Display } from 'next/font/google';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';
import { usePathname } from 'next/navigation'; // usePathname をインポート

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const pressStart2P = Press_Start_2P({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-press-start-2p',
  display: 'swap',
});
const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair-display',
  display: 'swap',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  useSmoothScroll();
  const pathname = usePathname(); // パスを取得
  const isRetro = pathname === '/retro'; // Retroテーマか判定

  return (
    <html lang="ja" className={`${inter.variable} ${pressStart2P.variable} ${playfairDisplay.variable}`}>
      <head>
         <title>Portfolio Site</title>
         <meta name="description" content="A stunning portfolio site built with Next.js and Framer Motion" />
      </head>
      {/* Retroテーマで body のクラスを切り替え */}
      <body className={`flex flex-col min-h-screen pt-16 leading-relaxed antialiased ${
        isRetro
          ? 'font-pixel bg-retro-primary text-retro-text' // Retroテーマのスタイル
          : 'font-sans' // 通常のスタイル
      }`}>
        <CursorFollower />
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
