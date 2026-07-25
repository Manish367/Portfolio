import { FiBriefcase } from 'react-icons/fi';
import Reveal from './Reveal.jsx';
import SectionHeading from './SectionHeading.jsx';
import { experience } from '../data/portfolio.js';

export default function Experience() {
  return (
    <section id="experience" className="relative py-28 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionHeading eyebrow="Where I've worked" title="Experience" />

        <div className="mt-16 relative">
          <div className="absolute left-[19px] top-2 bottom-2 w-px bg-gradient-to-b from-fuchsia-500/60 via-line to-transparent" />

          <div className="space-y-14">
            {experience.map((job, i) => (
              <Reveal key={job.company} delay={i * 0.08}>
                <div className="relative pl-14">
                  <div className="absolute left-0 top-0 w-10 h-10 rounded-full bg-panel border border-fuchsia-400/50 flex items-center justify-center text-fuchsia-300 shadow-lg shadow-fuchsia-500/10">
                    <FiBriefcase />
                  </div>

                  <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                    <h3 className="font-display font-semibold text-lg text-white">{job.role}</h3>
                    <span className="text-xs font-medium text-fuchsia-400">{job.period}</span>
                  </div>
                  <p className="text-sm text-slate-400 mb-4">
                    {job.company} · {job.location}
                  </p>

                  <ul className="space-y-2">
                    {job.points.map((pt) => (
                      <li key={pt} className="text-sm text-slate-300 flex gap-2">
                        <span className="text-fuchsia-400 mt-1">▸</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>

                  {job.highlight && (
                    <div className="mt-5 card-glass p-5">
                      <p className="font-semibold text-white text-sm mb-3">{job.highlight.title}</p>
                      <ul className="space-y-2">
                        {job.highlight.points.map((pt) => (
                          <li key={pt} className="text-sm text-slate-400 flex gap-2">
                            <span className="text-cyan-400 mt-1">▸</span>
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
