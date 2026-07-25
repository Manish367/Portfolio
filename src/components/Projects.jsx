import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub, FiArrowUpRight } from 'react-icons/fi';
import Reveal from './Reveal.jsx';
import SectionHeading from './SectionHeading.jsx';
import { projects } from '../data/portfolio.js';

export default function Projects() {
  return (
    <section id="projects" className="relative py-28 px-6 bg-panel/40 border-y border-line">
      <div className="max-w-6xl mx-auto">
        <SectionHeading eyebrow="Things I've built" title="Featured Projects" />

        <div className="mt-14 grid md:grid-cols-2 gap-7">
          {projects.map((p, i) => (
            <Reveal key={p.repo} delay={(i % 2) * 0.1}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="group relative h-full card-glass p-7 overflow-hidden hover:border-fuchsia-400/50"
              >
                <div className="absolute -top-20 -right-20 w-52 h-52 bg-fuchsia-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display font-bold text-xl text-white">{p.name}</h3>
                    <p className="text-fuchsia-400 text-sm font-medium mt-1">{p.tagline}</p>
                  </div>
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noreferrer"
                    className="shrink-0 w-10 h-10 rounded-full bg-white/5 border border-line flex items-center justify-center text-slate-300 group-hover:bg-fuchsia-500 group-hover:text-white group-hover:border-fuchsia-500 transition-all"
                    aria-label={`Open ${p.name} live site`}
                  >
                    <FiArrowUpRight />
                  </a>
                </div>

                <p className="relative mt-4 text-sm text-slate-400 leading-relaxed">{p.description}</p>

                <div className="relative mt-5 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2.5 py-1 rounded-md bg-white/5 border border-line text-slate-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="relative mt-6 flex items-center gap-5 text-sm font-medium">
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-cyan-300 hover:text-cyan-200 transition-colors"
                  >
                    <FiExternalLink /> Live Demo
                  </a>
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors"
                  >
                    <FiGithub /> Source
                  </a>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
