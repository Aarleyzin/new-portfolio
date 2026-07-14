'use client';

import { motion } from 'framer-motion';

export function ScrollIndicator() {
  return (
    <motion.a
      href="#projects"
      className="scroll-indicator"
      aria-label="Scroll to projects"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.9, duration: 0.6 }}
    >
      <span>Scroll</span>
      <motion.svg
        width="16"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        animate={{ y: [0, 7, 0] }}
        transition={{ duration: 1.7, repeat: Infinity, ease: 'easeInOut' }}
      >
        <circle cx="12" cy="4" r="2" />
        <line x1="12" y1="6.2" x2="12" y2="8.5" />
        <line x1="8.5" y1="8.5" x2="15.5" y2="8.5" />
        <path d="M9 8.5 L12 21 L15 8.5" />
      </motion.svg>
    </motion.a>
  );
}
