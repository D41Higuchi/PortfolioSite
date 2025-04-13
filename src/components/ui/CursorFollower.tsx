"use client";

import React, { useEffect, useState } from 'react'; // useState をインポート
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { usePathname } from 'next/navigation'; // usePathname をインポート

// カーソル追従エフェクト用カスタムフック
const useFollowPointer = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [x, y]);

  return { x: springX, y: springY };
};


const CursorFollower = () => {
  const { x, y } = useFollowPointer();
  const pathname = usePathname(); // パスを取得
  const isRetro = pathname === '/retro'; // Retroテーマか判定
  const [isHoveringLink, setIsHoveringLink] = useState(false); // ホバー状態を追加

  useEffect(() => {
    const handleMouseEnterLink = (e: MouseEvent) => {
      if ((e.target as Element).closest('a, button')) {
        setIsHoveringLink(true);
      }
    };
    const handleMouseLeaveLink = (e: MouseEvent) => {
      if ((e.target as Element).closest('a, button')) {
        setIsHoveringLink(false);
      }
    };
    document.body.addEventListener('mouseover', handleMouseEnterLink);
    document.body.addEventListener('mouseout', handleMouseLeaveLink);
    return () => {
      document.body.removeEventListener('mouseover', handleMouseEnterLink);
      document.body.removeEventListener('mouseout', handleMouseLeaveLink);
    };
  }, []);

  // テーマに応じたスタイルを決定
  let cursorStyle = "bg-indigo-500"; // Default (Modern)
  let size = isHoveringLink ? 32 : 12;

  if (isRetro) {
    // Retroテーマのスタイル: 四角形、ボーダー、シャドウ
    cursorStyle = "bg-retro-accent border-2 border-retro-text shadow-[2px_2px_0px_var(--color-retro-text)]";
    size = isHoveringLink ? 16 : 8; // Retroでは小さめの四角形
  } else if (pathname === '/glass') {
    cursorStyle = "bg-pink-500/50 border border-white/30 backdrop-blur-sm";
    size = isHoveringLink ? 40 : 16;
  } else if (pathname === '/factory') {
    cursorStyle = "bg-amber-500 mix-blend-difference";
    size = isHoveringLink ? 28 : 14;
  }

  return (
    <motion.div
      // Retroテーマでは rounded-full を削除して四角形に
      className={`fixed top-0 left-0 pointer-events-none z-[9999] ${cursorStyle} ${isRetro ? '' : 'rounded-full'}`}
      style={{
        x, y,
        width: size,
        height: size,
        translateX: '-50%',
        translateY: '-50%',
        transition: 'width 0.15s ease-out, height 0.15s ease-out', // transition 調整
      }}
    />
  );
};

export default CursorFollower;
