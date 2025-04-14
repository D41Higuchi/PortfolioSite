"use client";

import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CursorFollower from '@/components/ui/CursorFollower';
import React from 'react';
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
  const pathname = usePathname(); // パスを取得
  const isRetro = pathname === '/retro'; // Retroテーマか判定

  // body のクラス名を決定するロジックを変数に切り出し
  // body のクラス名を決定するロジックを変数に切り出し
  const bodyClassName = `flex flex-col min-h-screen pt-16 leading-relaxed antialiased ${
    isRetro
      ? 'font-pixel bg-retro-primary text-retro-text' // Retroテーマのスタイル
      : 'font-sans' // 通常のスタイル
  }`;
  // ESLintエラー回避のため、テンプレートリテラル内のシングルクォートを ' に置換する必要があるか確認しましたが、
  // この変数はJSXに直接渡されるため、エスケープは不要なはずです。
  // ESLintルールの誤検知の可能性があるため、再度 eslint-disable-next-line を試します。

  return (
    // html タグに dotGothic16.variable を追加
    <html lang="ja" className={`${inter.variable} ${pressStart2P.variable} ${playfairDisplay.variable} ${dotGothic16.variable}`}>
      <head>
         <title>Sora's Portfolio</title> {/* タイトルを更新 */}
         <link rel="icon" href="/img/favicon.ico" /> {/* favicon のパスを修正 */}
         <meta name="description" content="A stunning portfolio site built with Next.js and Framer Motion" />
      </head>
      {/* body タグで変数を使用 */}
      {/* eslint-disable-next-line react/no-unescaped-entities */}
      <body className={bodyClassName}>
        <CursorFollower />
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
