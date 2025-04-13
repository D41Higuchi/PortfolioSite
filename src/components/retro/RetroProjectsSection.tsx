"use client";

import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image'; // Image コンポーネントをインポート
import Link from 'next/link'; // Link コンポーネントをインポート
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'; // アイコンをインポート
import { siteContent } from '@/data/content';
import Modal from '@/components/ui/Modal';

type Project = typeof siteContent.projects.projectList[0];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1, // delay を少し短く
      duration: 0.4,
      ease: "easeOut"
    }
  })
};

const INITIAL_DISPLAY_COUNT = 6;

const RetroProjectsSection = () => {
  const { title, icons, projectList } = siteContent.projects;
  const RetroIcon = icons.retro;

  const [displayCount, setDisplayCount] = useState(INITIAL_DISPLAY_COUNT);
  const showLoadMoreButton = useMemo(() => projectList.length > displayCount, [projectList.length, displayCount]);
  const displayedProjects = useMemo(() => projectList.slice(0, displayCount), [projectList, displayCount]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };
  const closeModal = () => setIsModalOpen(false);

  const handleLoadMore = () => {
    setDisplayCount(projectList.length);
  };

  return (
    <>
      {/* 背景色、ボーダー、パディング調整 */}
      <section id="projects" className="py-20 px-4 bg-retro-secondary text-retro-text border-y-4 border-retro-text">
        <div className="container mx-auto max-w-6xl"> {/* max-w-6xl に変更 */}
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl text-center mb-16 uppercase text-retro-accent flex items-center justify-center gap-3" // サイズ、色、マージン、大文字化、中央揃え
          >
            {RetroIcon && <RetroIcon />} {/* アイコン表示 */}
            {title} {/* 大文字化削除 */}
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12"> {/* gap-12 に変更 */}
            {displayedProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                whileHover={{ y: -5, transition: { duration: 0.2 } }} // ホバーエフェクト調整
                viewport={{ once: true, amount: 0.3 }}
                className="border-4 border-retro-text bg-retro-primary shadow-[6px_6px_0px_#3A3A3A] overflow-hidden flex flex-col cursor-pointer" // カードスタイル、カーソルポインター
                onClick={() => openModal(project)}
              >
                {/* 画像コンテナ */}
                <div className="relative w-full h-48 border-b-4 border-retro-text group">
                  <Image // next/image を使用
                    src={project.imageUrl || '/placeholder.png'}
                    alt={project.title}
                    layout="fill" // layout="fill" を使用
                    objectFit="cover" // objectFit="cover" を使用
                    className="transition-transform duration-300 group-hover:scale-105" // ホバーで少し拡大
                  />
                </div>
                {/* コンテンツエリア */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl mb-2 uppercase text-retro-accent">{project.title}</h3> {/* サイズ、色、マージン、大文字化 */}
                  <p className="text-sm mb-4 flex-grow">{project.description}</p>
                  {/* フッター (リンクアイコン削除) */}
                  <div className="flex justify-end items-center mt-auto pt-4 border-t-2 border-retro-text">
                    {/* Details ボタンなどを追加する場合はここに */}
                    <span className="text-xs text-retro-text-muted">Click for details</span> {/* 仮のテキスト */}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* もっと見るボタン */}
          {showLoadMoreButton && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-center"
            >
              <button
                onClick={handleLoadMore}
                className="px-6 py-2 bg-retro-accent text-retro-primary border-2 border-retro-text text-sm uppercase shadow-[4px_4px_0px_#3A3A3A] hover:shadow-[2px_2px_0px_#3A3A3A] active:shadow-none active:translate-x-[1px] active:translate-y-[1px] transition-all duration-100" // ボタンのスタイル調整
              >
                Load More...
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* モーダル (Retroスタイル適用) */}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        {selectedProject && (
          <div className="p-6 bg-retro-primary border-4 border-retro-text text-retro-text max-w-2xl mx-auto shadow-[8px_8px_0px_#3A3A3A]">
            {/* タイトルとアイコンを表示 */}
            <h3 className="text-2xl mb-4 uppercase text-retro-accent flex items-center gap-3">
              {selectedProject.icon && <selectedProject.icon className="text-3xl" />} {/* アイコン表示 */}
              {selectedProject.title}
            </h3>
            <div className="relative w-full h-64 mb-4 border-4 border-retro-text bg-retro-secondary"> {/* 背景色追加 */}
              <Image src={selectedProject.imageUrl || '/placeholder.png'} alt={selectedProject.title} layout="fill" objectFit="contain" />
            </div>
            <p className="mb-4 text-sm leading-relaxed">{selectedProject.description}</p> {/* 行間調整 */}
            {/* techStackString を表示 */}
            <p className="text-xs mb-4">
              <strong className="text-retro-accent uppercase">Tech:</strong> {selectedProject.techStackString}
            </p>
            <div className="flex justify-end items-center space-x-3 mt-6 pt-4 border-t-2 border-retro-text">
              {/* GitHub/Liveリンク削除 */}
              <button
                onClick={closeModal}
                className="px-3 py-1 bg-retro-text text-retro-primary border-2 border-retro-text text-xs hover:bg-opacity-80 shadow-[2px_2px_0px_#555] active:shadow-none active:translate-x-[1px] active:translate-y-[1px] transition-all duration-100 uppercase" // Closeボタンのスタイル変更
              >
                Close
              </button>
            </div>
          </div>
        )}
      </Modal>
    </>
  );
};

export default RetroProjectsSection;
