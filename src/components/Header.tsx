"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { FaBars, FaTimes, FaPalette } from 'react-icons/fa';
import { usePathname } from 'next/navigation';

// テーマ定義
const themes = [
  { name: 'Modern', path: '/' },
  { name: 'Retro', path: '/retro' },
  { name: 'Glass', path: '/glass' },
  { name: 'Factory', path: '/factory' },
];

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isRetro = pathname === '/retro';
  const isGlass = pathname === '/glass'; // Glassテーマ判定追加
  const isFactory = pathname === '/factory'; // Factoryテーマ判定追加

  const currentTheme = themes.find(theme => theme.path === pathname) || themes[0];

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuVariants = {
    hidden: { opacity: 0, x: '100%' },
    visible: { opacity: 1, x: 0, transition: { type: 'tween', ease: 'easeInOut', duration: 0.3 } },
    exit: { opacity: 0, x: '100%', transition: { type: 'tween', ease: 'easeInOut', duration: 0.3 } },
  };

  // テーマに応じたヘッダー背景・スタイルを定義
  const getHeaderVariants = () => {
    if (isRetro) {
      return {
        top: { backgroundColor: 'rgb(253 246 227 / 0.9)', borderBottom: '2px solid #3A3A3A' },
        scrolled: { backgroundColor: 'rgb(252 231 195 / 0.95)', boxShadow: '4px 4px 0px #3A3A3A', borderBottom: '2px solid #3A3A3A' },
      };
    } else if (isGlass) {
      return {
        top: { backgroundColor: 'rgba(17, 24, 39, 0.3)', backdropFilter: 'blur(10px)', borderBottom: '1px solid rgba(255, 255, 255, 0.1)' },
        scrolled: { backgroundColor: 'rgba(17, 24, 39, 0.6)', backdropFilter: 'blur(16px)', borderBottom: '1px solid rgba(255, 255, 255, 0.1)', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)' },
      };
    } else if (isFactory) {
       return {
        top: { backgroundColor: 'rgba(31, 41, 55, 0.9)', borderBottom: '1px solid #4B5563' }, // bg-gray-800/90, border-gray-600
        scrolled: { backgroundColor: 'rgba(17, 24, 39, 0.95)', borderBottom: '1px solid #4B5563', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)' }, // bg-gray-900/95
      };
    } else { // Modern (デフォルト)
      return {
        top: { backgroundColor: 'rgba(255, 255, 255, 0.8)', backdropFilter: 'blur(8px)', boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)' },
        scrolled: { backgroundColor: 'rgba(243, 244, 246, 0.95)', backdropFilter: 'blur(12px)', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)' },
      };
    }
  };
  const headerVariants = getHeaderVariants();

  // テーマに応じたフォントクラスを決定
  const getFontClass = () => {
    if (isRetro) return 'font-pixel';
    if (isFactory) return 'font-serif'; // Factoryテーマはセリフ体
    return 'font-sans'; // Modern, Glass は sans-serif (デフォルト)
  }
  const fontClass = getFontClass();

  // テーマに応じたテキスト・リンク色を決定
  const getThemeColors = () => {
    if (isRetro) return { text: 'text-retro-text', link: 'text-retro-text hover:text-retro-accent', accent: 'text-retro-accent', logo: 'text-retro-text hover:text-retro-accent', tabBg: '', tabActiveBg: 'bg-retro-accent', tabActiveText: 'text-retro-primary', tabInactiveBg: 'bg-retro-secondary', tabInactiveText: 'text-retro-text', tabHoverBg: 'hover:bg-retro-accent', tabHoverText: 'hover:text-retro-primary', tabBorder: 'border-2 border-retro-text', tabActiveShadow: 'shadow-[2px_2px_0px_#3A3A3A]', tabRounded: '' };
    if (isGlass) return { text: 'text-gray-200', link: 'text-gray-200 hover:text-pink-400', accent: 'text-pink-400', logo: 'text-white', tabBg: 'bg-white/5', tabActiveBg: 'bg-white/20', tabActiveText: 'text-white font-semibold', tabInactiveBg: '', tabInactiveText: 'text-gray-300', tabHoverBg: 'hover:bg-white/10', tabHoverText: 'hover:text-white', tabBorder: 'border border-white/10', tabActiveShadow: 'shadow-md', tabRounded: 'rounded-md' };
    if (isFactory) return { text: 'text-gray-300', link: 'text-gray-300 hover:text-amber-400', accent: 'text-amber-400', logo: 'text-gray-100', tabBg: 'bg-gray-700', tabActiveBg: 'bg-amber-500', tabActiveText: 'text-gray-900 font-semibold', tabInactiveBg: '', tabInactiveText: 'text-gray-400', tabHoverBg: 'hover:bg-gray-600', tabHoverText: 'hover:text-gray-100', tabBorder: 'border border-gray-600', tabActiveShadow: 'shadow-inner', tabRounded: 'rounded' };
    // Modern (デフォルト)
    return { text: 'text-gray-600', link: 'text-gray-600 hover:text-indigo-600', accent: 'text-indigo-600', logo: 'text-indigo-600', tabBg: 'bg-gray-100', tabActiveBg: 'bg-white', tabActiveText: 'text-indigo-700 font-semibold', tabInactiveBg: '', tabInactiveText: 'text-gray-500', tabHoverBg: 'hover:bg-gray-200', tabHoverText: 'hover:text-gray-700', tabBorder: 'border border-gray-200', tabActiveShadow: 'shadow-sm ring-1 ring-indigo-200', tabRounded: 'rounded-md' };
  }
  const themeColors = getThemeColors();


  return (
    <motion.header
      className={`fixed top-0 left-0 w-full z-50 ${fontClass}`} // テーマフォント適用
      variants={headerVariants}
      animate={isScrolled ? "scrolled" : "top"}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <motion.div
          whileHover={{ scale: 1.05, rotate: -2 }}
          transition={{ type: 'spring', stiffness: 300 }}
          className="flex-shrink-0"
        >
          {/* ロゴの色をテーマに合わせる */}
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          <Link href={`${currentTheme.path}#home`} className={`text-2xl font-bold ${themeColors.logo}`}>
            Sora's Portfolio {/* ヘッダータイトルを更新 */}
          </Link>
        </motion.div>

        <div className="hidden md:flex items-center space-x-1">
          {/* Navigation Links */}
          {navLinks.map((link) => (
            <motion.div key={link.name} whileHover={{ y: -2 }}>
              <Link
                href={`${currentTheme.path}${link.href}`}
                // ナビリンクの色とスタイルをテーマに合わせる
                className={`px-3 py-2 text-sm transition duration-150 ease-in-out relative group ${themeColors.link} ${isRetro ? 'font-normal' : 'font-medium rounded-md'}`}
              >
                {link.name}
                {/* Retroテーマ以外でアンダーライン表示 */}
                {!isRetro && (
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-center ${isGlass ? 'bg-pink-400' : isFactory ? 'bg-amber-400' : 'bg-indigo-600'}`}></span>
                )}
              </Link>
            </motion.div>
          ))}

          {/* Theme Switcher Tabs (Desktop) - テーマスタイル適用 */}
          <div className={`ml-4 flex items-center gap-2 border-l pl-4 ${isRetro ? 'border-retro-text' : isGlass ? 'border-white/10' : isFactory ? 'border-gray-600' : 'border-gray-200'}`}>
            <FaPalette className={themeColors.text} /> {/* アイコン色 */}
            <div className={`flex items-center space-x-1 p-0.5 ${themeColors.tabBg} ${themeColors.tabRounded}`}> {/* 背景と角丸 */}
              {themes.map((theme) => (
                <Link
                  key={theme.path}
                  href={theme.path}
                  className={`px-2.5 py-1 text-sm transition duration-150 ease-in-out ${themeColors.tabRounded} ${themeColors.tabBorder} ${ // ボーダーと角丸
                    currentTheme.path === theme.path
                      ? `${themeColors.tabActiveBg} ${themeColors.tabActiveText} ${themeColors.tabActiveShadow}` // アクティブタブ
                      : `${themeColors.tabInactiveBg} ${themeColors.tabInactiveText} ${themeColors.tabHoverBg} ${themeColors.tabHoverText}` // 非アクティブタブ
                  }`}
                >
                  {theme.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            // モバイルメニューボタンのスタイルをテーマに合わせる
            className={`inline-flex items-center justify-center p-2 focus:outline-none ${themeColors.link} ${isRetro ? 'border-2 border-retro-text hover:bg-retro-accent hover:text-retro-primary' : 'rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-2 focus:ring-inset focus:ring-indigo-500'}`} // Glass/Factory は hover:bg-gray-700 など調整要
            aria-expanded={isOpen}
          >
            <span className="sr-only">Open main menu</span>
            {/* アイコン色をテーマに合わせる */}
            {isOpen
              ? <FaTimes className={`h-6 w-6 ${themeColors.text}`} />
              : <FaBars className={`h-6 w-6 ${themeColors.text}`} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            // モバイルメニュー背景をテーマに合わせる
            className={`md:hidden absolute top-16 left-0 w-full shadow-lg py-4 ${
              isRetro ? 'bg-retro-secondary border-x-2 border-b-2 border-retro-text'
              : isGlass ? 'bg-gray-800/90 backdrop-blur-md border border-white/10'
              : isFactory ? 'bg-gray-800 border border-gray-700'
              : 'bg-white' // Modern
            }`}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {/* Mobile Navigation Links - テーマスタイル適用 */}
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={`${currentTheme.path}${link.href}`}
                  onClick={toggleMenu}
                  className={`block px-3 py-2 text-base transition duration-150 ease-in-out ${themeColors.link} ${isRetro ? '' : 'rounded-md font-medium'}`} // font-medium は Retro 以外
                >
                  {link.name}
                </Link>
              ))}
              {/* Mobile Theme Switcher Tabs - テーマスタイル適用 */}
              <div className={`mt-4 pt-4 border-t ${isRetro ? 'border-retro-text' : isGlass ? 'border-white/10' : isFactory ? 'border-gray-600' : 'border-gray-200'}`}>
                 <p className={`px-3 text-xs uppercase tracking-wider mb-2 flex items-center gap-1.5 ${themeColors.text} ${isRetro ? '' : 'font-semibold'}`}>
                   <FaPalette className={themeColors.text} />
                   Switch Theme
                 </p>
                 <div className="space-y-1">
                   {themes.map((theme) => (
                     <Link
                       key={theme.path}
                       href={theme.path}
                       onClick={toggleMenu}
                       className={`block px-3 py-2 text-base transition duration-150 ease-in-out ${themeColors.tabRounded} ${themeColors.tabBorder} ${ // ボーダーと角丸
                         currentTheme.path === theme.path
                           ? `${themeColors.tabActiveBg} ${themeColors.tabActiveText} font-bold` // アクティブタブ (font-bold 追加)
                           : `${themeColors.tabInactiveBg} ${themeColors.tabInactiveText} ${themeColors.tabHoverBg} ${themeColors.tabHoverText}` // 非アクティブタブ
                       }`}
                     >
                       {theme.name}
                     </Link>
                   ))}
                 </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
