import Reveal from './Reveal.jsx';

export default function SectionHeading({ eyebrow, title, center = true }) {
  return (
    <Reveal className={center ? 'text-center' : ''}>
      <p className="text-xs uppercase tracking-[0.3em] text-fuchsia-400 font-semibold mb-3">{eyebrow}</p>
      <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">{title}</h2>
      <div className={`h-1 w-16 rounded-full bg-gradient-to-r from-fuchsia-500 to-cyan-400 mt-4 ${center ? 'mx-auto' : ''}`} />
    </Reveal>
  );
}
