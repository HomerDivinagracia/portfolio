const stats = [
  { value: '7+', label: 'Projects Delivered' },
  { value: 'Gov\'t', label: 'Clients (NHA, LGU)' },
  { value: 'PHP', label: 'Backend' },
  { value: 'Vue', label: 'Frontend' },
]

export default function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-5xl mx-auto">
      <p className="text-xs font-semibold tracking-widest uppercase text-[#00c9a7] mb-2">Who I am</p>
      <h2 className="font-display font-bold text-white text-3xl md:text-4xl mb-3">About Me</h2>
      <div className="w-12 h-0.5 bg-gradient-to-r from-[#00c9a7] to-[#0096ff] rounded mb-10" />

      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div className="space-y-4 text-slate-400 leading-relaxed">
          <p>
            I'm a Junior Full Stack Developer with hands-on experience building production-grade
            web applications for government agencies — including the National Housing Authority (NHA)
            and multiple Local Government Units (LGUs) across the Philippines.
          </p>
          <p>
            My stack centers around{' '}
            <span className="text-white font-medium">PHP / Laravel 8</span> for server-side logic
            and APIs, and{' '}
            <span className="text-white font-medium">JavaScript / Vue 2</span> for interactive
            frontends. My most recent work involves a{' '}
            <span className="text-white font-medium">microservice architecture</span> with OAuth2 SSO,
            React 19, and PostgreSQL.
          </p>
          <p>
            I'm passionate about agentic engineering and continuously expanding my skill set
            to build smarter, more autonomous systems.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {stats.map(s => (
            <div
              key={s.label}
              className="bg-slate-900 border border-slate-800 rounded-xl p-5 text-center hover:border-slate-600 transition-all hover:-translate-y-0.5"
            >
              <div className="font-display font-bold text-2xl text-[#00c9a7]">{s.value}</div>
              <div className="text-xs text-slate-500 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
