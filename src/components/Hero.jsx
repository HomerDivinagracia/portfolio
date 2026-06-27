import { useTypewriter } from '../hooks/useTypewriter'
import CodeCard from './CodeCard'

const roles = [
  'Jr. Full Stack Developer',
  'Aspiring Agentic Engineer',
  'Laravel Developer',
  'Vue.js Developer',
]

export default function Hero() {
  const typed = useTypewriter(roles)

  return (
    <section id="hero" className="relative min-h-screen flex items-center px-6 pt-24 pb-16 overflow-hidden">

      {/* Animated gradient blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="blob absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full opacity-20"
          style={{ background: 'radial-gradient(circle, #00c9a7 0%, transparent 70%)', filter: 'blur(60px)' }}
        />
        <div
          className="blob blob-delay absolute -bottom-40 -right-20 w-[500px] h-[500px] rounded-full opacity-15"
          style={{ background: 'radial-gradient(circle, #0096ff 0%, transparent 70%)', filter: 'blur(60px)' }}
        />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'radial-gradient(circle, #c9d1d9 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />
      </div>

      <div className="relative max-w-5xl mx-auto w-full">
        <div className="flex flex-col md:flex-row items-center gap-12">

          {/* Text */}
          <div className="flex-1">
            <p className="fade-up text-sm font-semibold tracking-widest uppercase text-[#00c9a7] mb-4"
              style={{ animationDelay: '0ms' }}>
              Hello, I'm
            </p>

            <h1
              className="fade-up font-display font-bold text-white leading-tight mb-4"
              style={{ fontSize: 'clamp(2.4rem, 6vw, 4rem)', animationDelay: '100ms' }}
            >
              Homer Divinagracia
            </h1>

            <p
              className="fade-up mb-6 font-medium"
              style={{ fontSize: 'clamp(1.1rem, 3vw, 1.4rem)', animationDelay: '200ms' }}
            >
              <span className="text-[#0096ff]">{typed}</span>
              <span className="cursor text-[#00c9a7] ml-0.5">|</span>
            </p>

            <p
              className="fade-up text-slate-400 max-w-xl mb-10 leading-relaxed"
              style={{ animationDelay: '300ms' }}
            >
              I build clean, functional web applications using PHP / Laravel on the backend
              and Vue.js on the frontend. Beyond traditional web development, I'm passionate about
              agentic engineering — designing systems where AI agents can act, reason, and solve
              real-world problems autonomously.
            </p>

            <div className="fade-up flex gap-4 flex-wrap" style={{ animationDelay: '400ms' }}>
              <a
                href="#projects"
                className="px-6 py-3 rounded-lg bg-[#00c9a7] text-gray-950 font-semibold text-sm hover:opacity-85 transition-all hover:-translate-y-0.5 shadow-lg shadow-[#00c9a7]/20"
              >
                View My Work
              </a>
              <a
                href="/resume.html"
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 rounded-lg border border-slate-700 text-white font-semibold text-sm hover:border-[#00c9a7] hover:text-[#00c9a7] transition-all"
              >
                View Resume
              </a>
              <a
                href="#contact"
                className="px-6 py-3 rounded-lg border border-slate-700 text-white font-semibold text-sm hover:border-[#00c9a7] hover:text-[#00c9a7] transition-all"
              >
                Get In Touch
              </a>
            </div>
          </div>

          {/* Code card */}
          <div className="fade-up shrink-0 w-full md:w-auto" style={{ animationDelay: '250ms' }}>
            <CodeCard />
          </div>

        </div>
      </div>
    </section>
  )
}
