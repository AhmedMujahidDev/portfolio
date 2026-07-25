'use client';

import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { services } from '@/content/data';
import { serviceIconMap } from './icon-map';

export default function Services() {
  return (
    <section id="services" className="py-24 sm:py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeading eyebrow={services.eyebrow} heading={services.heading} />
        </motion.div>

        <div className="mt-12 grid sm:grid-cols-2 gap-6">
          {services.items.map((service, i) => {
            const entry = serviceIconMap[service.icon];
            const Icon = entry?.Icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative rounded-xl border border-line bg-surface p-8 hover:border-signal/50 transition-colors duration-300"
              >
                <span className="absolute top-6 right-7 font-mono text-6xl text-line select-none">
                  {String(i + 1).padStart(2, '0')}
                </span>
                {Icon && (
                  <Icon
                    aria-hidden="true"
                    className="text-3xl mb-5"
                    style={{ color: entry.color }}
                  />
                )}
                <h3 className="text-xl font-semibold text-ink mb-3">{service.title}</h3>
                <p className="text-muted leading-relaxed">{service.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
