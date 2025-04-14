"use client"; // クライアントコンポーネントとしてマーク

import React from 'react';
import { usePathname } from 'next/navigation'; // usePathname をインポート
import { siteContent } from '@/data/content';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const pathname = usePathname(); // パスを取得
  const isRetro = pathname === '/retro'; // Retroテーマか判定

  // テーマに応じたスタイルを決定
  const footerClasses = isRetro
    ? "bg-retro-secondary text-retro-text border-t-4 border-retro-text" // Retroテーマのスタイル
    : "bg-default-secondary text-default-muted"; // デフォルトテーマのスタイル (モダンなど)

  const textClasses = isRetro
    ? "text-retro-text" // Retroテーマのテキスト色
    : "text-default-text"; // デフォルトテーマのテキスト色

  const linkClasses = isRetro
    ? "text-retro-text hover:text-retro-accent" // Retroテーマのリンク色
    : "text-default-muted hover:text-default-accent"; // デフォルトテーマのリンク色

  return (
    // font-pixel は layout.tsx で body に適用されるため、ここでは不要
    <footer className={`${footerClasses} py-8 px-4 transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        {/* コピーライト */}
        <p className={`text-sm ${textClasses}`}>
          &copy; {currentYear} {siteContent.name}. All rights reserved.
        </p>

        {/* SNSリンクは削除 */}
        {/* <div className="flex space-x-4"> ... </div> */}
      </div>
    </footer>
  );
};

export default Footer;
