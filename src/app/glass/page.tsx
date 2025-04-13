import React from 'react';
import GlassHeroSection from '@/components/glass/GlassHeroSection';
import GlassAboutSection from '@/components/glass/GlassAboutSection';
import GlassSkillsSection from '@/components/glass/GlassSkillsSection'; // インポート
import GlassProjectsSection from '@/components/glass/GlassProjectsSection'; // インポート
import GlassContactSection from '@/components/glass/GlassContactSection'; // インポート
import WaveDivider from '@/components/ui/WaveDivider'; // WaveDivider をインポート

export default function GlassPage() {
  return (
    // 基本背景を glass-secondary に設定
    // Glassテーマは透明度が重要なので、背景画像などを layout.tsx で設定することを想定
    <div className="bg-glass-secondary">
      {/* GlassHeroSection は独自背景を持つことが多いので primary -> primary と仮定 */}
      <GlassHeroSection />
      <WaveDivider color="fill-glass-primary" direction="down" />
      <GlassAboutSection />
      {/* About (primary) -> Skills (secondary) */}
      <WaveDivider color="fill-glass-primary" direction="up" />
      <WaveDivider color="fill-glass-secondary" direction="down" />
      <GlassSkillsSection />
      {/* Skills (secondary) -> Projects (primary) */}
      <WaveDivider color="fill-glass-secondary" direction="up" />
      <WaveDivider color="fill-glass-primary" direction="down" />
      <GlassProjectsSection />
      {/* Projects (primary) -> Contact (secondary) */}
      <WaveDivider color="fill-glass-primary" direction="up" />
      <WaveDivider color="fill-glass-secondary" direction="down" />
      <GlassContactSection />
    </div>
  );
}
