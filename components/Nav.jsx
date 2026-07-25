'use client';

import { useState } from 'react';
import { FaBars, FaXmark } from 'react-icons/fa6';
import { siteConfig } from '@/content/data';

const links = [
  { href: '#about', label: 'about' },
  { href: '#skills', label: 'skills' },
  { href: '#services', label: 'services' },
  { href: '#works', label: 'work' },
  { href: '#experience', label: 'experience' },
  { href: '#contact', label: 'contact' },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur bg-bg/70 border-b border-line/70">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="#home" className="font-mono text-ink text-sm sm:text-base tracking-wide">
          <span className="text-signal2">~/</span>
          {siteConfig.name.split(' ')[0].toLowerCase()}
        </a>

        <ul className="hidden md:flex items-center gap-8 font-mono text-sm">
          {links.map((link, i) => (
            <li key={link.href}>
              <a href={link.href} className="text-muted hover:text-signal2 transition-colors">
                <span className="text-signal2/70">{String(i + 1).padStart(2, '0')}.</span>{' '}
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="md:hidden text-ink"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <FaXmark size={20} /> : <FaBars size={20} />}
        </button>
      </nav>

      {open && (
        <ul className="md:hidden flex flex-col gap-1 px-6 pb-6 font-mono text-sm bg-bg">
          {links.map((link, i) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block py-2 text-muted hover:text-signal2 transition-colors"
              >
                <span className="text-signal2/70">{String(i + 1).padStart(2, '0')}.</span>{' '}
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
