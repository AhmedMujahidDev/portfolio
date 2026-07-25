'use client';

import { motion } from 'framer-motion';
import { siteConfig } from '@/content/data';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[100svh] flex items-center justify-center overflow-hidden bg-scanlines"
    >
      {/* radial glow behind the name */}
      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
        aria-hidden="true"
      >
        <div className="w-[36rem] h-[36rem] rounded-full bg-signal/10 blur-[120px]" />
      </div>

      <div className="relative z-10 px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-mono text-signal2 text-sm sm:text-base tracking-widest mb-5"
        >
          <span className="text-good">$</span> whoami
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl sm:text-7xl md:text-8xl font-bold text-ink text-glow tracking-tight"
        >
          {siteConfig.name}
          <span className="inline-block w-[0.5ch] ml-1 bg-signal animate-blink align-middle h-[0.85em]" />
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-5 font-mono text-muted text-base sm:text-lg"
        >
          {'>'} {siteConfig.role}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10"
        >
          <a
            href={siteConfig.cvPath}
            download
            className="inline-flex items-center gap-2 font-mono text-sm sm:text-base tracking-wide text-signal2 border border-signal/60 rounded-md px-7 py-3.5 hover:bg-signal/10 hover:shadow-glow transition-all duration-300"
          >
            Download CV
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 font-mono text-xs text-muted2 tracking-widest"
      >
        scroll ↓
      </motion.div>
    </section>
  );
}
