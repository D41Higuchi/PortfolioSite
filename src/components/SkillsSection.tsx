"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { siteContent } from '@/data/content';
import ProgressBar from '@/components/ui/ProgressBar'; // ProgressBarコンポーネントをインポート

const SkillsSection = () => {
  const { title, categories } = siteContent.skills; // 新しいデータ構造から取得

  // セクション全体のアニメーション
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5, staggerChildren: 0.2 } }, // カテゴリごとに遅延
  };

  // カテゴリカードのアニメーション (ホバー状態を追加)
  const categoryCardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    hover: { y: -5, scale: 1.03, transition: { duration: 0.2 } } // ホバー時の動き
  };

  return (
    <section
      id="skills"
      // 背景色を bg-default-secondary に変更
      className="min-h-screen flex items-center justify-center py-20 md:py-32 px-4 bg-default-secondary"
    >
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }} // 少し早めにトリガー
        className="max-w-6xl mx-auto w-full"
      >
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-16 text-center text-gray-800" // アイコン表示はカテゴリ側で行うため削除
        >
           {title} {/* データからタイトル表示 */}
        </motion.h2>
        {/* カテゴリごとにグリッド表示 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              variants={categoryCardVariants}
              whileHover="hover" // ホバー状態を適用
              // initial, whileInView は親の staggerChildren で制御
              // 背景色を default-primary に、影を追加
              className="bg-default-primary rounded-lg shadow-card p-6 transition-shadow duration-300 hover:shadow-hover"
            >
              <h3 className="text-xl font-semibold mb-4 text-default-text flex items-center gap-2"> {/* テキスト色変更 */}
                <category.icon className="text-default-accent" /> {/* アイコン色変更 */}
                {category.name}
              </h3>
              <div className="space-y-3"> {/* スキル間のスペース */}
                {category.items.map((skill) => (
                  <ProgressBar
                    key={skill.name}
                    label={skill.name}
                    level={skill.level}
                    // color="bg-indigo-500" // デフォルト色を使用 or カスタム色
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default SkillsSection;
