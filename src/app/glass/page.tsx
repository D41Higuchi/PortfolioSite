import React from 'react';
import GlassHeroSection from '@/components/glass/GlassHeroSection';
import GlassAboutSection from '@/components/glass/GlassAboutSection';
import GlassSkillsSection from '@/components/glass/GlassSkillsSection'; // インポート
import GlassProjectsSection from '@/components/glass/GlassProjectsSection'; // インポート
import GlassContactSection from '@/components/glass/GlassContactSection'; // インポート
import WaveDivider from '@/components/ui/WaveDivider'; // WaveDivider をインポート

export default function GlassPage() {
  return (
    // Remove theme-specific classes (font-sans, text-glass-text, background)
    // These are now applied via body class in layout.tsx and globals.css
    // Specific background for Glass theme is applied here directly for now.
    <div className="flex-grow bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900">
      <GlassHeroSection />
      {/* No WaveDividers for Glass theme, use subtle separators or spacing */}
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
