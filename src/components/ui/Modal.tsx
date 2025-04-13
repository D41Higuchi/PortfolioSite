"use client";

import React, { ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  title?: string; // オプションのタイトル
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children, title }) => {
  // 背景のフェードイン・アウト
  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  // モーダル本体の表示アニメーション (例: 下からスライドイン)
  const modalVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', damping: 15, stiffness: 100 } },
    exit: { opacity: 0, y: 30, scale: 0.95, transition: { duration: 0.2 } },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4" // z-index を高く設定
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={onClose} // 背景クリックで閉じる
        >
          <motion.div
            className="bg-white rounded-lg shadow-xl max-w-2xl w-full overflow-hidden relative" // モーダル本体のスタイル
            variants={modalVariants}
            onClick={(e) => e.stopPropagation()} // モーダル内クリックで閉じないように
          >
            {/* 閉じるボタン */}
            <button
              onClick={onClose}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 transition-colors z-10 p-1 rounded-full hover:bg-gray-100"
              aria-label="Close modal"
            >
              <FaTimes size={20} />
            </button>

            {/* モーダルヘッダー (タイトルがあれば) */}
            {title && (
              <div className="p-4 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
              </div>
            )}

            {/* モーダルコンテンツ */}
            <div className="p-6 max-h-[80vh] overflow-y-auto"> {/* 高さとスクロール */}
              {children}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
