"use client";

import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CursorFollower from '@/components/ui/CursorFollower';
import React, { useEffect, useState } from 'react'; // useEffect, useState をインポート
// DotGothic16 をインポート
import { Inter, Press_Start_2P, Playfair_Display, DotGothic16 } from 'next/font/google';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';
import { usePathname } from 'next/navigation'; // usePathname をインポート

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const pressStart2P = Press_Start_2P({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-press-start-2p',
  display: 'swap',
});
// DotGothic16 を読み込み、変数に割り当て
const dotGothic16 = DotGothic16({
  weight: '400',
  subsets: ['latin'], // 'japanese' を削除 (型エラー回避のため)
  variable: '--font-dotgothic16',
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
  const pathname = usePathname();

  // クライアントサイドでのみテーマクラスを適用
  useEffect(() => {
    let themeClass = 'theme-modern'; // デフォルト
    if (pathname === '/retro') {
      themeClass = 'theme-retro';
    } else if (pathname === '/glass') {
      themeClass = 'theme-glass';
    } else if (pathname === '/factory') {
      themeClass = 'theme-factory';
    }

    // 既存のテーマクラスを削除
    document.body.classList.remove('theme-modern', 'theme-retro', 'theme-glass', 'theme-factory');
    // 新しいテーマクラスを追加
    document.body.classList.add(themeClass);

    // クリーンアップ関数 (コンポーネントアンマウント時にクラスを削除する場合)
    // return () => {
    //   document.body.classList.remove(themeClass);
    // };
  }, [pathname]); // pathname が変更されたら実行

  // 共通のレイアウトクラスのみを body に適用
  const bodyClassName = `flex flex-col min-h-screen pt-16 leading-relaxed antialiased`;
  // フォント変数は html タグに適用
  const htmlClassName = `${inter.variable} ${pressStart2P.variable} ${playfairDisplay.variable} ${dotGothic16.variable}`;

  return (
    <html lang="ja" className={htmlClassName}>
      <head>
         <title>{"Sora's Portfolio"}</title>
         <link rel="icon" href="/img/favicon.ico" />
         <meta name="description" content="A stunning portfolio site built with Next.js and Framer Motion" />
      </head>
      <body className={bodyClassName}> {/* Apply common layout classes */}
        <CursorFollower />
        <Header />
        {/* flex-grow を main から削除し、ページコンポーネントのラッパーに移動させる */}
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
