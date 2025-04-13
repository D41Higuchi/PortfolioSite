import type { Config } from "tailwindcss";
import defaultTheme from 'tailwindcss/defaultTheme';

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/retro/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/glass/**/*.{js,ts,jsx,tsx,mdx}", // Glassテーマ用パス追加
    "./src/components/factory/**/*.{js,ts,jsx,tsx,mdx}", // Factoryテーマ用パス追加
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', ...defaultTheme.fontFamily.sans],
        pixel: ['var(--font-press-start-2p)', 'cursive'],
        // Factoryテーマ用セリフ体を追加 (例: Playfair Display)
        serif: ['var(--font-playfair-display)', ...defaultTheme.fontFamily.serif],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        'gradient-animated': 'linear-gradient(45deg, theme(colors.indigo.100), theme(colors.purple.100), theme(colors.pink.100), theme(colors.orange.100))',
      },
      backgroundSize: {
        '400%': '400% 400%',
      },
      animation: {
        blob: "blob 7s infinite",
        'gradient-move': 'gradient-move 15s ease infinite',
      },
      keyframes: {
        blob: {
          "0%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(30px, -50px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
          "100%": { transform: "translate(0px, 0px) scale(1)" },
        },
        'gradient-move': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        // 追加: フェードイン
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        // 追加: 下からスライドイン
        slideInUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        // 追加: 左からスライドイン
        slideInLeft: {
          '0%': { transform: 'translateX(-20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
      // 追加: テーマカラー
      colors: {
        // デフォルトテーマ
        default: {
          primary: '#FFFFFF', // 例: 白
          secondary: '#F3F4F6', // 例: 明るいグレー
          accent: '#3B82F6', // 例: 青
          text: '#1F2937', // 例: 濃いグレー
          'text-muted': '#6B7280', // 例: グレー
        },
        // Retroテーマ
        retro: {
          primary: '#FDF6E3', // 例: クリーム
          secondary: '#FCE7C3', // 例: 明るいオレンジ
          accent: '#D97706', // 例: オレンジ
          text: '#3A3A3A', // 例: ダークブラウン
          'text-muted': '#7C7C7C', // 例: グレー
        },
        // Glassテーマ
        glass: {
          primary: 'rgba(255, 255, 255, 0.1)', // 例: 半透明白
          secondary: 'rgba(255, 255, 255, 0.05)', // 例: より透明な白
          accent: '#EC4899', // 例: ピンク
          text: '#FFFFFF', // 例: 白 (セクション全体の基本テキスト色)
          'text-muted': '#E5E7EB', // 例: 明るいグレー (セクション全体の補助テキスト色)
          // 追加: グラスパネル内部用の濃いテキスト色
          'panel': '#4B0082', // 例: Indigo (濃い紫)
          'panel-muted': '#6B7280', // 例: Gray-500
        },
        // Factoryテーマ
        factory: {
          primary: '#1F2937', // 例: 濃いグレー
          secondary: '#374151', // 例: グレー
          accent: '#F59E0B', // 例: アンバー
          text: '#F9FAFB', // 例: ほぼ白
          'text-muted': '#9CA3AF', // 例: 明るいグレー
        },
      },
      // 追加: ドロップシャドウ
      boxShadow: {
        'hover': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      },
      // 追加: トランジション設定
      transitionDuration: {
        'DEFAULT': '300ms',
        '500': '500ms',
      },
      transitionTimingFunction: {
        'DEFAULT': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'ease-out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
};
export default config;
