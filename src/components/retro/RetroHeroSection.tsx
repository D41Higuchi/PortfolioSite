"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaAngleDoubleDown } from 'react-icons/fa';
import { GiRetroController } from 'react-icons/gi';
import { siteContent } from '@/data/content';

const blinkVariants = {
  blink: {
    opacity: [0, 1, 0],
    transition: { duration: 1, repeat: Infinity, ease: "linear" }
  }
};

const RetroHeroSection = () => {
  const name = siteContent.name;
  const jobTitle = siteContent.jobTitle;

  return (
    // Apply Retro theme background and text colors from layout.tsx via body tag
    <section id="home" className="min-h-screen flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Grid background with Retro text color */}
      <div className="absolute inset-0 z-0 opacity-10" style={{
        backgroundImage: 'linear-gradient(var(--color-retro-text) 1px, transparent 1px), linear-gradient(90deg, var(--color-retro-text) 1px, transparent 1px)',
        backgroundSize: '20px 20px'
      }}></div>

      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-4xl md:text-6xl mb-4 z-10 text-retro-accent uppercase" // Use Retro accent color and uppercase
      >
        {name}
      </motion.h1>

      <motion.p
        variants={blinkVariants}
        animate="blink"
        className="text-lg md:text-xl mb-8 z-10 text-retro-text-muted" // Use Retro muted text color
      >
        {jobTitle}
      </motion.p>

      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="z-10"
      >
        <Link href="/retro#projects" passHref legacyBehavior>
          <motion.a
            whileHover={{ scale: 1.05, filter: 'brightness(1.1)' }} // Slightly adjusted hover effect
            whileTap={{ scale: 0.95 }} // Slightly adjusted tap effect
            className="inline-flex items-center gap-2 px-6 py-3 bg-retro-accent text-retro-primary border-2 border-retro-text text-sm cursor-pointer shadow-[4px_4px_0px_#3A3A3A] hover:shadow-[2px_2px_0px_#3A3A3A] active:shadow-none active:translate-x-[2px] active:translate-y-[2px] transition-all duration-100 uppercase" // Use Retro colors, shadow, uppercase
          >
            START <GiRetroController />
          </motion.a>
        </Link>
      </motion.div>

      <motion.div
        variants={blinkVariants}
        animate="blink"
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
      >
        {/* Use Retro accent color for scroll indicator */}
        <FaAngleDoubleDown className="text-4xl text-retro-accent" />
      </motion.div>
    </section>
  );
};

export default RetroHeroSection;
