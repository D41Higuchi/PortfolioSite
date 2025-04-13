"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { siteContent } from '@/data/content';
// ProgressBar は使用せず、ドットでレベル表示するため削除

const RetroSkillsSection = () => {
  const { title, categories } = siteContent.skills;

  // セクション全体のアニメーション
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5, staggerChildren: 0.2 } },
  };

  // カテゴリのアニメーション
  const categoryVariants = {
    hidden: { opacity: 0, y: 20 }, // y: 20 に変更
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    // 背景色、ボーダー、パディング調整
    <section id="skills" className="py-20 px-4 bg-retro-primary text-retro-text border-y-4 border-retro-text">
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="container mx-auto max-w-6xl" // max-w-6xl に変更
      >
        <motion.h2
          // アニメーションを親から継承
          className="text-4xl md:text-5xl text-center mb-16 uppercase text-retro-accent" // サイズ、色、マージン、大文字化、中央揃え
        >
          {title} {/* 大文字化削除 */}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12"> {/* gap-12 に変更 */}
          {categories.map((category) => (
            <motion.div
              key={category.name}
              variants={categoryVariants}
              className="border-4 border-retro-text p-6 bg-retro-secondary shadow-[6px_6px_0px_#3A3A3A]" // カードスタイル
            >
              <h3 className="text-2xl mb-6 flex items-center gap-3 text-retro-accent"> {/* カテゴリタイトルスタイル */}
                {/* アイコン表示 (siteContent.skills.categories[n].icon が設定されている前提) */}
                {category.icon && <category.icon className="text-3xl" />}
                {category.name} {/* 大文字化削除 */}
              </h3>
              <ul className="space-y-3"> {/* スキルリストスタイル */}
                {category.items.map((skill) => (
                  <li key={skill.name} className="flex items-center justify-between text-lg"> {/* text-lg に変更 */}
                    <span>{skill.name}</span>
                    {/* レベル表示 (ドット形式 - 0-100を5段階に変換) */}
                    <span className="flex gap-1">
                      {[...Array(5)].map((_, i) => {
                        // レベルを5段階評価に変換 (0-100 -> 0-5)
                        const filledDots = Math.round(skill.level / 20);
                        return (
                          <span
                            key={i}
                            className={`w-3 h-3 border-2 border-retro-text ${
                              i < filledDots ? 'bg-retro-accent' : 'bg-retro-primary' // 変換後のレベルで色分け
                            }`}
                          ></span>
                        );
                      })}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default RetroSkillsSection;
