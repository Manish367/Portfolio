import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiDownload } from 'react-icons/fi';
import { profile } from '../data/portfolio.js';

const LINKS = [
  ['About', '#about'],
  ['Skills', '#skills'],
  ['Experience', '#experience'],
  ['Projects', '#projects'],
  ['Contact', '#contact']
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-ink/80 backdrop-blur-xl border-b border-line py-3' : 'bg-transparent py-6'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <a href="#top" className="font-display font-bold text-lg tracking-tight text-white">
          Monish<span className="text-gradient">.dev</span>
        </a>

        <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          {LINKS.map(([label, href]) => (
            <li key={href}>
              <a href={href} className="hover:text-white transition-colors">
                {label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={profile.resume}
          download
          className="hidden md:inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 text-sm font-medium text-slate-200 hover:border-fuchsia-400/60 hover:text-white transition-colors"
        >
          <FiDownload /> Resume
        </a>

        <button
          className="md:hidden text-2xl text-slate-200"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden border-t border-line mt-4"
          >
            <ul className="flex flex-col gap-1 px-6 py-4 bg-ink/95">
              {LINKS.map(([label, href]) => (
                <li key={href}>
                  <a
                    href={href}
                    onClick={() => setOpen(false)}
                    className="block py-2 text-slate-200 hover:text-white"
                  >
                    {label}
                  </a>
                </li>
              ))}
              <li>
                <a href={profile.resume} download className="block py-2 text-fuchsia-400">
                  Download Resume
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
