import { IconType } from 'react-icons'; // IconType をインポート
import {
  FaReact, FaNodeJs, FaPython, FaAws, FaUserAstronaut, FaLaptopCode, FaEnvelopeOpenText, FaCogs, FaProjectDiagram, FaPaperPlane, FaVuejs, FaDocker, FaServer, FaGlobe
} from 'react-icons/fa';
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiFramer, SiPostgresql, SiGraphql, SiJenkins, SiKubernetes } from 'react-icons/si';
import { GiPerson, GiSkills, GiComputerFan, GiMailbox } from 'react-icons/gi';
import { FaUserTie } from 'react-icons/fa';

// --- サイト共通コンテンツ ---
export const siteContent = {
  // ... (基本情報、アバウトセクションは変更なし) ...
  name: "Your Name",
  jobTitle: "Freelance Engineer",
  email: "your.email@example.com",
  about: {
    title: "About Me",
    icons: { modern: FaUserAstronaut, retro: GiPerson, glass: FaUserTie },
    text1: "フリーランスエンジニアとして、ユニークで魅力的なデジタル体験を創造することに情熱を注いでいます。",
    text2: "特にフロントエンド開発とインタラクティブなアニメーションを得意とし、常に最新技術を探求しています。",
    text3: "多様なデザインスタイルに対応し、クライアントのビジョンを形にすることを目指します。",
    imagePlaceholder: { modern: "/placeholder-modern.svg", retro: "/placeholder-retro.png", glass: "/placeholder-glass.svg" }
  },

  // --- スキルセクション (型修正) ---
  skills: {
    title: "技術スキル",
    categories: [
      {
        name: "フロントエンド",
        icon: FaGlobe,
        items: [
          // アイコンの型を IconType に指定
          { name: 'React/Next.js', level: 95, icon: FaReact as IconType },
          { name: 'Vue.js/Nuxt.js', level: 90, icon: FaVuejs as IconType },
          { name: 'TypeScript', level: 92, icon: SiTypescript as IconType },
          { name: 'Tailwind CSS', level: 88, icon: SiTailwindcss as IconType },
        ]
      },
      {
        name: "バックエンド",
        icon: FaServer,
        items: [
          { name: 'Node.js', level: 90, icon: FaNodeJs as IconType },
          { name: 'Python', level: 85, icon: FaPython as IconType },
          { name: 'PostgreSQL', level: 88, icon: SiPostgresql as IconType },
          { name: 'GraphQL', level: 82, icon: SiGraphql as IconType },
        ]
      },
      {
        name: "DevOps",
        icon: FaCogs,
        items: [
          { name: 'Docker', level: 85, icon: FaDocker as IconType },
          { name: 'AWS', level: 80, icon: FaAws as IconType },
          { name: 'CI/CD', level: 85, icon: SiJenkins as IconType },
          { name: 'Kubernetes', level: 75, icon: SiKubernetes as IconType },
        ]
      }
    ]
  },

  // ... (実績紹介、お問い合わせセクションは変更なし) ...
   projects: {
    title: "Projects",
    icons: { modern: FaLaptopCode, retro: GiComputerFan, glass: FaProjectDiagram },
    projectList: [
      { id: 1, title: 'Project Alpha', description: '革新的なWebアプリケーション。ReactとNode.jsを使用。', imageUrl: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60', retroBgColor: 'bg-green-500' },
      { id: 2, title: 'Project Beta', description: 'インタラクティブなデータ可視化ツール。D3.jsを活用。', imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60', retroBgColor: 'bg-red-500' },
      { id: 3, title: 'Project Gamma', description: 'モバイルファーストのEコマースサイト。Next.jsとTailwind CSSで構築。', imageUrl: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60', retroBgColor: 'bg-purple-500' },
      { id: 4, title: 'Project Delta', description: 'AIを活用したチャットボットサービス。PythonとFlaskで開発。', imageUrl: 'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60', retroBgColor: 'bg-blue-500' },
      { id: 5, title: 'Project Epsilon', description: 'クリエイター向けポートフォリオサイト。Vue.jsとFirebaseを使用。', imageUrl: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60', retroBgColor: 'bg-yellow-500' },
      { id: 6, title: 'Project Zeta', description: 'リアルタイム共同編集エディタ。Node.jsとWebSocketを利用。', imageUrl: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60', retroBgColor: 'bg-pink-500' },
      { id: 7, title: 'Project Eta', description: 'フィットネストラッキングアプリ。React Nativeで開発。', imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60', retroBgColor: 'bg-teal-500' },
    ]
  },
  contact: {
    title: "Contact",
    icons: { modern: FaEnvelopeOpenText, retro: GiMailbox, glass: FaPaperPlane },
    formLabels: { name: "お名前", email: "メールアドレス", message: "メッセージ" },
    placeholders: { name: "山田 太郎", email: "your.email@example.com", message: "お問い合わせ内容をご記入ください..." },
    submitButtonText: "送信する",
    submitButtonTextRetro: "SEND >",
    alternativeText: "または、以下のメールアドレスまで直接ご連絡ください。",
  }
};
