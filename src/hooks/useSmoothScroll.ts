"use client"; // クライアントサイドでのみ動作

import { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';

export function useSmoothScroll() {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Lenisインスタンスを作成
    const lenis = new Lenis({
      duration: 1.2, // スクロール時間 (秒)
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // イージング関数 (easeOutExpo)
      // smoothTouch: true, // タッチデバイスでのスムーズスクロール (オプション)
    });

    lenisRef.current = lenis;

    // アニメーションループを開始
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    const rafId = requestAnimationFrame(raf);

    // コンポーネントのアンマウント時にクリーンアップ
    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  return lenisRef; // Lenisインスタンスへの参照を返す (必要であれば)
}
