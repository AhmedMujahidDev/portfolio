'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import SectionHeading from './SectionHeading';
import About_me from '../public/images/profile_me.png'
import { about } from '@/content/data';

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32 px-6 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeading
            eyebrow={about.eyebrow}
            heading={about.heading}
          />

          <div className="mt-8 space-y-5">
            {about.paragraphs.map((p, i) => (
              <p
                key={i}
                className="text-muted text-base sm:text-lg leading-relaxed"
              >
                {p}
              </p>
            ))}
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center lg:justify-end"
        >
          <div className=" w-[450px] relative">
            <Image
              src={About_me}
              alt="About Me"
              width={450}
              height={450}
              className="rounded-2xl object-cover shadow-xl"
            />
          </div>
        </motion.div>

      </div>
    </section >
  );
}