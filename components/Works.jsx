'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';
import SectionHeading from './SectionHeading';
import { works } from '@/content/data';
import { skillIconMap } from './icon-map';

function ProjectCard({ project, index }) {
  return (
    <motion.a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.07 }}
      whileHover={{ y: -6 }}
      className="group relative rounded-xl p-[1px] bg-gradient-to-br from-line via-line to-line hover:from-signal/70 hover:via-signal2/40 hover:to-good/40 transition-all duration-500"
    >
      <div className="relative h-full rounded-xl bg-surface p-6 overflow-hidden">
        {/* glow that fades in on hover */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-16 -right-16 w-40 h-40 rounded-full bg-signal/0 group-hover:bg-signal/15 blur-3xl transition-colors duration-500"
        />

        <div className="relative flex items-start justify-between gap-3">
          <span className="font-mono text-xs text-muted2">
            {String(index + 1).padStart(2, '0')}
          </span>
          <FaArrowUpRightFromSquare
            aria-hidden="true"
            className="text-muted2 group-hover:text-signal2 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all duration-300 shrink-0"
          />
        </div>

        <h3 className="relative mt-4 text-lg font-semibold text-ink group-hover:text-signal2 transition-colors duration-300">
          {project.name}
        </h3>

        {project.description && (
          <p className="relative mt-2 text-sm text-muted leading-relaxed line-clamp-2">
            {project.description}
          </p>
        )}

        {project.tags?.length > 0 && (
          <div className="relative mt-5 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="font-mono text-[11px] tracking-wide text-signal2 bg-signal/10 border border-signal/20 rounded-full px-2.5 py-1"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <span className="relative mt-5 flex items-center gap-1.5 font-mono text-xs text-muted2 group-hover:text-signal transition-colors duration-300">
          View project
          <span className="inline-block group-hover:translate-x-1 transition-transform duration-300">
            →
          </span>
        </span>
      </div>
    </motion.a>
  );
}

export default function Works() {
  const [activeTab, setActiveTab] = useState(works.tabs[0].key);
  const activeCategory = works.tabs.find((t) => t.key === activeTab);
  const activeProjects = activeCategory?.projects ?? [];

  return (
    <section id="works" className="py-24 sm:py-32 px-6 bg-surface/40">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeading eyebrow={works.eyebrow} heading={works.heading} />
        </motion.div>

        {/* Tabs, styled like terminal file paths */}
        <div
          role="tablist"
          aria-label="Project categories"
          className="mt-10 flex flex-wrap gap-2 border-b border-line pb-0"
        >
          {works.tabs.map((tab) => {
            const isActive = tab.key === activeTab;
            const entry = skillIconMap[tab.icon];
            const Icon = entry?.Icon;
            return (
              <button
                key={tab.key}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveTab(tab.key)}
                className={`relative flex items-center gap-2 font-mono text-sm sm:text-base px-4 py-3 transition-colors duration-300 ${
                  isActive ? 'text-signal2' : 'text-muted hover:text-ink'
                }`}
              >
                {Icon && (
                  <Icon
                    aria-hidden="true"
                    style={{ color: isActive ? entry.color : undefined }}
                    className="text-base opacity-90"
                  />
                )}
                ./{tab.label}
                {isActive && (
                  <motion.span
                    layoutId="active-tab-underline"
                    className="absolute left-0 right-0 -bottom-px h-0.5 bg-signal"
                  />
                )}
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
            className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {activeProjects.map((project, i) => (
              <ProjectCard key={project.name} project={project} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
