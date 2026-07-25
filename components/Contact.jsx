'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FaWhatsapp, FaEnvelope } from 'react-icons/fa6';
import SectionTag from './SectionTag';
import { contact, siteConfig } from '@/content/data';

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error
  const [errorMessage, setErrorMessage] = useState('');

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      // EmailJS isn't configured yet — fall back to opening the visitor's
      // email client so the form still works out of the box.
      const subject = encodeURIComponent(`Portfolio inquiry from ${form.name || 'a visitor'}`);
      const body = encodeURIComponent(`${form.message}\n\n— ${form.name}\n${form.email}`);
      window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
      setStatus('sent');
      return;
    }

    setStatus('sending');
    setErrorMessage('');

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
          to_email: siteConfig.email,
        },
        { publicKey: PUBLIC_KEY }
      );
      setStatus('sent');
      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      console.error('EmailJS error:', err);
      setStatus('error');
      setErrorMessage("Something went wrong sending your message. Please try again, or email me directly.");
    }
  }

  const isSubmitting = status === 'sending';

  return (
    <section id="contact" className="py-24 sm:py-32 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 md:gap-10">
        {/* Left: intro + direct contact */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <SectionTag>{contact.eyebrow}</SectionTag>
          <h2 className="text-4xl sm:text-5xl font-bold text-ink tracking-tight">
            {contact.heading}
          </h2>

          <p className="mt-6 text-muted leading-relaxed max-w-md">{contact.description}</p>

          <p className="mt-10 font-mono text-xs tracking-widest text-muted uppercase">
            {contact.sayHello}
          </p>

          <div className="mt-4 space-y-3">
            <a
              href={siteConfig.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-signal2 hover:text-signal transition-colors w-fit"
            >
              <FaWhatsapp aria-hidden="true" />
              wa.me/AhmedMu14
            </a>

            <a
              href={`mailto:${siteConfig.email}`}
              className="flex items-center gap-2 text-signal2 hover:text-signal transition-colors w-fit break-all"
            >
              <FaEnvelope aria-hidden="true" />
              {siteConfig.email}
            </a>
          </div>
        </motion.div>

        {/* Right: form */}
        <motion.form
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          onSubmit={handleSubmit}
          className="flex flex-col gap-8"
        >
          <div className="grid sm:grid-cols-2 gap-8">
            <div>
              <label htmlFor="name" className="block text-ink font-semibold mb-2">
                Your Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full bg-transparent border-b border-line focus:border-signal text-ink placeholder:text-muted2 py-2 outline-none transition-colors"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-ink font-semibold mb-2">
                Your Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full bg-transparent border-b border-line focus:border-signal text-ink placeholder:text-muted2 py-2 outline-none transition-colors"
              />
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-ink font-semibold mb-2">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              value={form.message}
              onChange={handleChange}
              placeholder="Your message here..."
              className="w-full bg-transparent border-b border-line focus:border-signal text-ink placeholder:text-muted2 py-2 outline-none transition-colors resize-y"
            />
          </div>

          <div className="flex items-center gap-4 sm:justify-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className="font-mono text-sm tracking-widest uppercase text-signal2 border border-signal/60 rounded-md px-8 py-4 hover:bg-signal/10 hover:shadow-glow transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </div>

          {status === 'sent' && (
            <p role="status" className="text-good text-sm text-center">
              Thanks — your message is on its way!
            </p>
          )}
          {status === 'error' && (
            <p role="alert" className="text-sm text-center text-red-400">
              {errorMessage}
            </p>
          )}
        </motion.form>
      </div>
    </section>
  );
}