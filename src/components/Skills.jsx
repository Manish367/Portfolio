import Reveal from './Reveal.jsx';
import SectionHeading from './SectionHeading.jsx';
import { skills } from '../data/portfolio.js';

export default function Skills() {
  return (
    <section id="skills" className="relative py-28 px-6 bg-panel/40 border-y border-line">
      <div className="max-w-6xl mx-auto">
        <SectionHeading eyebrow="What I work with" title="Skills & Technologies" />

        <div className="mt-14 grid md:grid-cols-2 gap-6">
          {skills.map((group, gi) => (
            <Reveal key={group.group} delay={gi * 0.08}>
              <div className="card-glass p-6 h-full hover:border-fuchsia-400/40 transition-colors">
                <h3 className="font-display font-semibold text-white mb-4">{group.group}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="text-sm px-3 py-1.5 rounded-full bg-white/5 border border-line text-slate-300 hover:text-white hover:border-fuchsia-400/50 hover:bg-fuchsia-500/10 transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
