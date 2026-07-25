'use client';

import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { experience } from '@/content/data';
import logo from "../public/images/Experience.jpeg"
import Image from 'next/image';

export default function Experience() {
  return (
    <section id="experience" className="py-24 sm:py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeading eyebrow={experience.eyebrow} heading={experience.heading} />
        </motion.div>

        <div className="mt-12 space-y-6">
          {experience.items.map((job, i) => (
            <motion.div
              key={job.company + job.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex gap-5 rounded-xl border border-line bg-surface p-7 hover:border-signal/50 transition-colors duration-300"
            >
              <div className="shrink-0 w-12 h-12 rounded-lg bg-surface2 border border-line flex items-center justify-center">
                <Image
                  src={logo}
                  alt="experience"
                  width={28}
                  height={28}
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-ink">{job.title}</h3>
                <p className="mt-1 font-mono text-sm text-signal2">
                  {job.company} <span className="text-muted2">•</span>{' '}
                  <span className="text-muted">{job.period}</span>
                </p>
                <p className="mt-3 text-muted leading-relaxed">{job.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
