import { profile } from '../data/portfolio.js';

export default function Footer() {
  return (
    <footer className="border-t border-line py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-slate-500">
        <p>
          © {new Date().getFullYear()} {profile.name}. Built with React, Tailwind &amp; Framer Motion.
        </p>
        <a href="#top" className="hover:text-white transition-colors">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
