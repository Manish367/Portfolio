import { FiCode, FiBriefcase, FiAward } from 'react-icons/fi';
import Reveal from './Reveal.jsx';
import SectionHeading from './SectionHeading.jsx';
import { profile, projects } from '../data/portfolio.js';

const STATS = [
  { icon: FiBriefcase, label: 'Professional Role', value: 'Associate Salesforce Dev' },
  { icon: FiCode, label: 'Live Projects Shipped', value: `${projects.length}+` },
  { icon: FiAward, label: 'Certifications', value: '4' }
];

export default function About() {
  return (
    <section id="about" className="relative py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading eyebrow="Get to know me" title="About Me" />

        <div className="mt-14 grid lg:grid-cols-5 gap-10 items-center">
          <Reveal className="lg:col-span-3" delay={0.05}>
            <p className="text-lg text-slate-300 leading-relaxed">{profile.summary}</p>
            <p className="mt-4 text-slate-400 leading-relaxed">
              Based in {profile.location}, I split my time between building Salesforce automation for
              production business systems and shipping full-stack MERN applications end-to-end —
              from database schema to a deployed, animated frontend.
            </p>
          </Reveal>

          <div className="lg:col-span-2 grid gap-4">
            {STATS.map(({ icon: Icon, label, value }, i) => (
              <Reveal key={label} delay={0.1 + i * 0.1}>
                <div className="card-glass p-5 flex items-center gap-4 hover:border-fuchsia-400/40 transition-colors">
                  <div className="shrink-0 w-11 h-11 rounded-xl bg-gradient-to-br from-fuchsia-500/20 to-cyan-400/20 flex items-center justify-center text-fuchsia-300 text-xl">
                    <Icon />
                  </div>
                  <div>
                    <p className="text-white font-semibold">{value}</p>
                    <p className="text-xs text-slate-400">{label}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
