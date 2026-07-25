import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiArrowDown } from 'react-icons/fi';
import { profile } from '../data/portfolio.js';
import Typewriter from './Typewriter.jsx';

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center overflow-hidden bg-grid-pattern bg-[size:44px_44px]"
    >
      {/* animated gradient blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -left-32 w-[28rem] h-[28rem] bg-fuchsia-600/30 rounded-full blur-[110px] animate-blob" />
        <div className="absolute top-40 right-0 w-[24rem] h-[24rem] bg-cyan-500/25 rounded-full blur-[110px] animate-blob [animation-delay:4s]" />
        <div className="absolute bottom-0 left-1/3 w-[22rem] h-[22rem] bg-violet-600/25 rounded-full blur-[110px] animate-blob [animation-delay:8s]" />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-ink/40 to-ink" />

      <div className="relative max-w-6xl mx-auto px-6 pt-32 pb-20 w-full">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-sm uppercase tracking-[0.3em] text-fuchsia-400 font-medium mb-5"
        >
          Welcome to my portfolio
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display font-800 text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-[1.05] max-w-3xl"
        >
          Hi, I&rsquo;m <span className="text-gradient">{profile.name}</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.22 }}
          className="mt-5 h-10 text-xl sm:text-2xl font-display font-semibold text-slate-300"
        >
          <Typewriter words={profile.roles} />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.32 }}
          className="mt-6 max-w-xl text-slate-400 leading-relaxed"
        >
          {profile.summary}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.42 }}
          className="mt-9 flex flex-wrap items-center gap-4"
        >
          <a
            href="#projects"
            className="rounded-full bg-gradient-to-r from-fuchsia-500 to-violet-500 px-7 py-3 font-semibold text-white shadow-lg shadow-fuchsia-500/20 hover:shadow-fuchsia-500/40 hover:scale-105 transition-all"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="rounded-full border border-line px-7 py-3 font-semibold text-slate-200 hover:border-fuchsia-400/60 hover:text-white transition-colors"
          >
            Get In Touch
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="mt-10 flex items-center gap-5 text-slate-400"
        >
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-white transition-colors text-xl">
            <FiGithub />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-white transition-colors text-xl">
            <FiLinkedin />
          </a>
          <a href={`mailto:${profile.email}`} aria-label="Email" className="hover:text-white transition-colors text-xl">
            <FiMail />
          </a>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll down"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.8, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-500 hover:text-white transition-colors"
      >
        <FiArrowDown size={22} />
      </motion.a>
    </section>
  );
}
