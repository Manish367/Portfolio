import { FiGithub, FiLinkedin, FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import Reveal from './Reveal.jsx';
import SectionHeading from './SectionHeading.jsx';
import { profile } from '../data/portfolio.js';

const CARDS = [
  { icon: FiMail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  { icon: FiPhone, label: 'Phone', value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, '')}` },
  { icon: FiMapPin, label: 'Location', value: profile.location, href: null }
];

export default function Contact() {
  return (
    <section id="contact" className="relative py-28 px-6">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 right-1/4 w-[26rem] h-[26rem] bg-fuchsia-600/15 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-4xl mx-auto text-center">
        <SectionHeading eyebrow="Let's talk" title="Get In Touch" />

        <Reveal delay={0.1}>
          <p className="mt-6 text-slate-400 max-w-xl mx-auto">
            Have an opportunity, a project, or just want to say hi? My inbox is always open —
            I'll get back to you as soon as I can.
          </p>
        </Reveal>

        <div className="mt-12 grid sm:grid-cols-3 gap-5">
          {CARDS.map(({ icon: Icon, label, value, href }, i) => {
            const Comp = href ? 'a' : 'div';
            return (
              <Reveal key={label} delay={0.15 + i * 0.08}>
                <Comp
                  href={href}
                  className="card-glass p-6 flex flex-col items-center gap-3 hover:border-fuchsia-400/40 transition-colors"
                >
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-fuchsia-500/20 to-cyan-400/20 flex items-center justify-center text-fuchsia-300 text-xl">
                    <Icon />
                  </div>
                  <p className="text-xs uppercase tracking-wider text-slate-500">{label}</p>
                  <p className="text-sm text-slate-200 font-medium break-all">{value}</p>
                </Comp>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.4}>
          <div className="mt-12 flex items-center justify-center gap-5">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="w-12 h-12 rounded-full border border-line flex items-center justify-center text-slate-300 hover:text-white hover:border-fuchsia-400/60 hover:bg-fuchsia-500/10 transition-all text-xl"
              aria-label="GitHub"
            >
              <FiGithub />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="w-12 h-12 rounded-full border border-line flex items-center justify-center text-slate-300 hover:text-white hover:border-fuchsia-400/60 hover:bg-fuchsia-500/10 transition-all text-xl"
              aria-label="LinkedIn"
            >
              <FiLinkedin />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="rounded-full bg-gradient-to-r from-fuchsia-500 to-violet-500 px-7 py-3 font-semibold text-white shadow-lg shadow-fuchsia-500/20 hover:shadow-fuchsia-500/40 hover:scale-105 transition-all"
            >
              Say Hello
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
