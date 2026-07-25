'use client';

import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { skills } from '@/content/data';
import { skillIconMap } from './icon-map';

export default function Skills() {
  return (
    <section id="skills" className="py-24 sm:py-32 px-6 bg-surface/40">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeading eyebrow={skills.eyebrow} heading={skills.heading} />
        </motion.div>

        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-5">
          {skills.items.map((skill, i) => {
            const entry = skillIconMap[skill.icon];
            const Icon = entry?.Icon;
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.4, delay: (i % 8) * 0.04 }}
                whileHover={{ y: -4 }}
                className="group flex flex-col items-center justify-center gap-3 rounded-lg border border-line bg-surface py-7 px-4 transition-colors duration-300 hover:border-signal/50"
              >
                {Icon && (
                  <Icon
                    aria-hidden="true"
                    className="text-3xl sm:text-4xl transition-transform duration-300 group-hover:scale-110"
                    style={{ color: entry.color }}
                  />
                )}
                <span className="font-mono text-xs sm:text-sm text-muted text-center">
                  {skill.name}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
