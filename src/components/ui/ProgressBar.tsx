"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { IconType } from 'react-icons'; // IconType をインポート

interface ProgressBarProps {
  level: number; // 0-100
  label?: string; // スキル名など (オプション)
  color?: string; // バーの色 (オプション、Tailwindクラス名)
  icon?: IconType; // アイコンコンポーネント (オプション)
}

const ProgressBar: React.FC<ProgressBarProps> = ({ level, label, color = 'bg-indigo-600', icon: Icon }) => { // icon を Icon として受け取る
  const normalizedLevel = Math.max(0, Math.min(100, level)); // レベルを0-100に正規化

  const barVariants = {
    hidden: { width: '0%' },
    visible: {
      width: `${normalizedLevel}%`,
      transition: {
        duration: 1, // アニメーション時間
        ease: [0.25, 1, 0.5, 1], // イージング関数 (例: easeOutExpo)
        delay: 0.2, // 少し遅れて開始
      }
    }
  };

  return (
    <div className="w-full mb-2">
      {label && (
        <div className="flex justify-between items-center mb-1">
          {/* アイコンとラベルを表示 */}
          <span className="flex items-center gap-1.5 text-sm font-medium text-gray-700"> {/* gap-1.5 を追加 */}
            {Icon && <Icon className="w-4 h-4 text-gray-500" />} {/* アイコン表示 */}
            {label}
          </span>
          <span className="text-sm font-medium text-gray-500">{normalizedLevel}%</span>
        </div>
      )}
      <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
        <motion.div
          className={`h-2.5 rounded-full ${color}`}
          variants={barVariants}
          initial="hidden"
          whileInView="visible" // ビューポートに入ったらアニメーション開始
          viewport={{ once: true, amount: 0.8 }} // 80%見えたらトリガー
        />
      </div>
    </div>
  );
};

export default ProgressBar;
