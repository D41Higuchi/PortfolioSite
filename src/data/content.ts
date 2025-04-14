import { IconType } from 'react-icons';
import {
  FaReact, FaNodeJs, FaPython, FaAws, FaUser, FaUserTie, FaIdBadge, FaLaptopCode, FaEnvelopeOpenText, FaCogs, FaProjectDiagram, FaPaperPlane, FaVuejs, FaDocker, FaServer, FaGlobe, FaMobileAlt, FaDatabase, FaNetworkWired, FaTools, FaJsSquare, FaHtml5, FaCss3Alt, FaSass, FaGitAlt, FaGithub, FaGitlab, FaJenkins, FaLinux, FaGoogle, FaApple, FaUsers, FaLightbulb, FaCloud, FaBriefcase, FaShapes // 追加: FaUser, FaUserTie, FaIdBadge, FaBriefcase, FaShapes
} from 'react-icons/fa';
import {
  SiNextdotjs, SiTypescript, SiTailwindcss, SiFramer, SiPostgresql, SiGraphql, SiKubernetes, SiFlutter, SiDart, /* SiNuxtdotjs, */ SiRedux, SiJest, SiTestinglibrary, SiGo, SiExpress, SiNestjs, SiFlask, SiDjango, SiFastapi, SiMysql, SiMongodb, SiRedis, SiPrisma, SiApollographql, SiAmazonec2, SiAmazons3, SiAwslambda, SiAmazonrds, SiGooglecloud, /* SiMicrosoftazure, */ SiTerraform, SiPrometheus, SiGrafana, SiElasticsearch, SiNginx, SiServerless // 追加: SiServerless
} from 'react-icons/si';
// プロジェクト用アイコン例
import { GiConversation, GiArtificialIntelligence } from "react-icons/gi";
import { AiOutlineVideoCameraAdd } from "react-icons/ai";
import { BsChatDots, BsPhone, BsBuilding, BsPalette } from "react-icons/bs"; // より具体的なアイコン例

// --- Soraさんの情報に基づいたコンテンツ案 ---
export const siteContent = {
  name: "Sora",
  jobTitle: "フリーランス・フルスタックエンジニア",
  email: "sora.volare@gmail.com",

  about: {
    title: "About Me",
    // Aboutアイコンをテーマごとに変更
    icons: { modern: FaUser, retro: FaUserTie, glass: FaIdBadge },
    // --- 自己紹介文 ---
    text1: "フリーランス・フルスタックエンジニアのSoraです。単に機能するだけでなく、使う人の心に響き、日常を少し豊かにするような「ユニークで魅力的なデジタル体験」を創造することに情熱を注いでいます。",
    text3: "フロントエンドからバックエンド、インフラまで一貫して対応可能なフルスタックの視点を活かし、技術的な制約にとらわれず、ビジネス目的の達成と優れたユーザー体験の最適なバランスを見つけるソリューションを提案・実装します。",
    // --- 得意技術・探求 ---
    text4: "特にReactやFlutterを用いたフロントエンド開発、インタラクティブなUIアニメーションの実装を得意としています。常に新しい技術トレンドを追いかけ、最近は生成AIやAIエージェントの業務活用、WebAssemblyといった分野に注目し、積極的に開発を進めています。",
    // --- クライアントとの関わり ---
    text5: "プロジェクトを成功に導くためには、技術力だけでなく、円滑なコミュニケーションが不可欠だと考えています。報・連・相を徹底し、認識の齟齬がないよう丁寧なヒアリングを心がけます。お任せいただいた仕事は、責任を持って最後までやり遂げ、期待を超える価値を提供できるよう努めます。",
    imagePlaceholder: { modern: "/img/IMG_8500.JPG", retro: "/placeholder-retro.png", glass: "/placeholder-glass.svg" } // 画像は後で差し替えてください
  },

  skills: {
    title: "技術スキル",
    // --- スキルリスト ---
    // 各カテゴリで主要な技術を15個程度リストアップしています。
    // ご自身の経験に合わせて、不要なものは削除し、レベル(%)を調整してください。
    // アイコンも仮のものが含まれます。
    categories: [
      {
        name: "フロントエンド",
        icon: FaGlobe,
        items: [
          { name: 'React', level: 95, icon: FaReact },
          { name: 'Next.js', level: 95, icon: SiNextdotjs },
          { name: 'Vue.js', level: 90, icon: FaVuejs },
          { name: 'Flutter', level: 85, icon: SiFlutter }, // モバイルも考慮
          { name: 'TypeScript', level: 92, icon: SiTypescript },
          { name: 'JavaScript (ES6+)', level: 95, icon: FaJsSquare },
          { name: 'HTML5', level: 98, icon: FaHtml5 },
          { name: 'CSS3', level: 95, icon: FaCss3Alt },
          { name: 'Sass/SCSS', level: 90, icon: FaSass },
          { name: 'Tailwind CSS', level: 88, icon: SiTailwindcss },
          { name: 'Framer Motion', level: 80, icon: SiFramer }, // アニメーション例
          { name: 'Jest / Testing Library', level: 85, icon: SiJest }, // テスト
        ]
      },
      {
        name: "バックエンド",
        icon: FaServer,
        items: [
          { name: 'Node.js', level: 90, icon: FaNodeJs },
          { name: 'Python', level: 85, icon: FaPython },
          { name: 'Express', level: 90, icon: SiExpress },
          { name: 'NestJS', level: 85, icon: SiNestjs },
          { name: 'Flask', level: 88, icon: SiFlask },
          { name: 'FastAPI', level: 85, icon: SiFastapi },
          { name: 'PostgreSQL', level: 88, icon: SiPostgresql },
          { name: 'MySQL', level: 85, icon: SiMysql },
          { name: 'MongoDB', level: 80, icon: SiMongodb },
          { name: 'Redis', level: 80, icon: SiRedis },
          { name: 'Prisma / TypeORM', level: 80, icon: SiPrisma }, // ORM
          { name: 'REST API Design', level: 90, icon: FaNetworkWired },
        ]
      },
      {
        name: "DevOps / Infrastructure",
        icon: FaCogs,
        items: [
          { name: 'Docker', level: 85, icon: FaDocker },
          { name: 'Kubernetes', level: 75, icon: SiKubernetes },
          { name: 'AWS', level: 80, icon: FaAws }, // EC2, S3, Lambda, RDS, etc.
          { name: 'Google Cloud (GCP)', level: 80, icon: SiGooglecloud }, // GCE, GCS, Functions, etc.
          { name: 'Azure', level: 78, icon: FaCloud }, // SiMicrosoftazure を FaCloud に変更
          { name: 'GitLab CI', level: 80, icon: FaGitlab }, // CI/CD
          { name: 'GitHub Actions', level: 80, icon: FaGithub }, // CI/CD
          { name: 'Prometheus', level: 70, icon: SiPrometheus }, // Monitoring
          { name: 'Grafana', level: 70, icon: SiGrafana }, // Monitoring
          { name: 'ELK Stack', level: 70, icon: SiElasticsearch }, // Logging
          { name: 'Nginx', level: 85, icon: SiNginx }, // Web Server
          { name: 'Linux', level: 85, icon: FaLinux }, // OS
          // Serverless Framework のアイコンを変更
          { name: 'Serverless Framework', level: 75, icon: SiServerless },
        ]
      },
      // --- モバイルアプリ開発経験があれば ---
      {
         name: "Mobile App",
         icon: FaMobileAlt,
         items: [
            { name: 'Flutter', level: 85, icon: SiFlutter },
            { name: 'Swift (SwiftUI)', level: 80, icon: FaApple }, // iOS
            // { name: 'Kotlin (Jetpack Compose)', level: 70, icon: /* Kotlinアイコン */ }, // Android
            // { name: 'React Native', level: 80, icon: FaReact }, // もしあれば
         ]
       },
       // --- その他 ---
       {
         name: "Others",
         icon: FaTools,
         items: [
            { name: 'Git / GitHub / GitLab', level: 95, icon: FaGitAlt },
            { name: 'Agile / Scrum', level: 85, icon: FaUsers }, // 開発プロセス
            // { name: 'UI/UX Design Principles', level: 80, icon: FaLightbulb }, // デザイン知識
            // { name: 'Database Design', level: 85, icon: FaDatabase }, // DB設計
         ]
       }
    ]
  },

  projects: {
    title: "実績紹介",
    // Projectsアイコンをテーマごとに変更
    icons: { modern: FaProjectDiagram, retro: FaBriefcase, glass: FaShapes },
    // --- 実績リスト ---
    // 各プロジェクトの情報を整理しました。説明文や技術スタックは仮のものが含まれます。
    // ご自身の経験に合わせて修正してください。画像パスも後で設定が必要です。
    projectList: [
      {
        id: 1,
        title: '業務用 生成AIチャットアプリケーション',
        description: 'Azure OpenAI Service等を活用し、セキュアな環境で利用可能な業務特化型チャットインターフェース。仕様策定から設計、開発、インフラ構築、リリースまで一貫して担当しました。',
        techStackString: 'Vue.js, Flask (Python), Azure (OpenAI Service, Functions, etc.), JavaScript',
        imageUrl: '/img/project1.jpg', // 要画像パス設定
        icon: BsChatDots // プロジェクト内容を表すアイコン例
      },
      {
        id: 2,
        title: '化粧品ブランド LPサイト制作',
        description: 'ブランドの世界観を表現する、アニメーション豊かで魅力的なランディングページ。React (Next.js) を採用し、高いパフォーマンスと更新性を実現。ヘッドレスCMSとの連携も行いました。',
        techStackString: 'React, Next.js, TypeScript, Tailwind CSS, Framer Motion, Contentful, Vercel', // 仮スタック
        imageUrl: '/img/project2.jpg', // 要画像パス設定
        icon: BsPalette // プロジェクト内容を表すアイコン例
      },
      {
        id: 3,
        title: '飲食店向け 業務効率化Webアプリケーション',
        description: '予約管理、売上分析、スタッフのシフト管理などを一元的に行えるWebアプリケーション。React (Next.js) とNode.js (NestJS) で構築し、リアルタイム更新機能などを実装しました。',
        techStackString: 'React, Next.js, TypeScript, NestJS (Node.js), PostgreSQL, Docker, AWS', // 仮スタック
        imageUrl: '/img/project3.jpg', // 要画像パス設定
        icon: BsBuilding // プロジェクト内容を表すアイコン例
      },
      {
        id: 4,
        title: '自律型AIエージェントによるマルチエージェント会議システム',
        description: '複数の大規模言語モデル(LLM)エージェントが、自律的に対話・協調しながら特定タスク（市場調査、アイデア生成等）を実行するコンセプト検証システムを構築しました。',
        techStackString: 'React, Flask (Python), LangChain, Google Cloud Platform (GCP)',
        imageUrl: '/img/project4.jpg', // 要画像パス設定
        icon: GiConversation // プロジェクト内容を表すアイコン例
      },
      {
        id: 5,
        title: 'AIによる全自動動画生成パイプライン',
        description: 'テーマに基づき、AIが企画構成、台本生成、音声合成、関連素材収集・編集、字幕付与までを行い、動画コンテンツを自動生成するシステムを開発しました。',
        techStackString: 'Vue.js, Python (各種AI/MLライブラリ), FFmpeg, Google Cloud Platform (GCP)',
        imageUrl: '/img/project5.jpg', // 要画像パス設定
        icon: AiOutlineVideoCameraAdd // プロジェクト内容を表すアイコン例
      },
      {
        id: 6,
        title: '生成AIを活用した多機能Discord Bot',
        description: '自然言語での応答、情報検索、画像生成（Stable Diffusion等）、簡易タスク自動化など、様々な機能を持つDiscord Bot。Azure Cognitive Servicesなどを利用しました。',
        techStackString: 'Python, Discord.py, Azure (Cognitive Services, OpenAI Service)',
        imageUrl: '/img/project6.jpg', // 要画像パス設定
        icon: GiArtificialIntelligence // プロジェクト内容を表すアイコン例
      },
      {
        id: 7,
        title: '業務用iOSネイティブアプリケーション開発',
        description: '特定の業務フローに最適化されたiOSアプリ。SwiftUIを採用し、モダンで直感的なUI/UXとオフライン機能、外部デバイス連携などを実装しました。',
        techStackString: 'Swift, SwiftUI (iOS)',
        imageUrl: '/img/project7.jpg', // 要画像パス設定
        icon: BsPhone // プロジェクト内容を表すアイコン例
      }
    ]
  },

  contact: {
    title: "お問い合わせ",
    icons: { modern: FaEnvelopeOpenText, retro: FaEnvelopeOpenText, glass: FaEnvelopeOpenText }, // 仮
    formLabels: { name: "お名前", email: "メールアドレス", message: "メッセージ" },
    placeholders: { name: "山田 太郎", email: "your.email@example.com", message: "お問い合わせ内容をご記入ください..." },
    submitButtonText: "送信する",
    submitButtonTextRetro: "SEND >",
    // alternativeText を元の状態に戻す
    alternativeText: `または、 ${"sora.volare@gmail.com"} まで直接ご連絡ください。`,
  }
};
