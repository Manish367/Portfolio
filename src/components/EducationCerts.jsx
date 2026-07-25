import { FiBookOpen, FiAward } from 'react-icons/fi';
import Reveal from './Reveal.jsx';
import SectionHeading from './SectionHeading.jsx';
import { education, certifications, achievements } from '../data/portfolio.js';

export default function EducationCerts() {
  return (
    <section id="education" className="relative py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeading eyebrow="Background" title="Education & Certifications" />

        <div className="mt-14 grid md:grid-cols-2 gap-7">
          <Reveal>
            <div className="card-glass p-7 h-full">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-cyan-500/20 to-fuchsia-500/20 flex items-center justify-center text-cyan-300 text-xl mb-4">
                <FiBookOpen />
              </div>
              <h3 className="font-display font-semibold text-white">{education.degree}</h3>
              <p className="text-sm text-slate-400 mt-2">{education.school}</p>
              <div className="flex items-center justify-between mt-4 text-xs">
                <span className="text-fuchsia-400 font-medium">{education.period}</span>
                <span className="text-slate-300 font-semibold">{education.score}</span>
              </div>

              <div className="mt-6 pt-6 border-t border-line">
                <p className="text-xs uppercase tracking-wider text-slate-500 mb-3">Achievements</p>
                <ul className="space-y-2">
                  {achievements.map((a) => (
                    <li key={a} className="text-sm text-slate-400 flex gap-2">
                      <span className="text-cyan-400 mt-1">▸</span>
                      <span>{a}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="card-glass p-7 h-full">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-fuchsia-500/20 to-cyan-500/20 flex items-center justify-center text-fuchsia-300 text-xl mb-4">
                <FiAward />
              </div>
              <h3 className="font-display font-semibold text-white mb-4">Certifications</h3>
              <ul className="space-y-3">
                {certifications.map((c) => (
                  <li key={c} className="text-sm text-slate-300 flex gap-2">
                    <span className="text-fuchsia-400 mt-1">▸</span>
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
