const experience = {
  company: 'Green Apple Technologies & System Inc.',
  location: 'Makati City',
  role: 'Jr. Software Developer / Full Stack Developer',
  period: 'August 2024 — Present',
  highlights: [
    'Built 7+ production web applications for government agencies including NHA and multiple LGUs across the Philippines.',
    'Developed a 4-service microservice ecosystem with OAuth2 SSO, versioned REST API, BCS frontend, and a public payment portal.',
    'Integrated multiple payment gateways: Dragonpay, AltPayNet, and Billeroo.',
    'Worked across the full stack with Laravel 8/12, Vue 2/3, React 19, Inertia.js, MySQL, and PostgreSQL.',
  ],
}

const education = {
  school: 'Occidental Mindoro State University',
  degree: 'Bachelor of Science in Information Technology',
  period: '2018 — 2022',
}

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 max-w-5xl mx-auto">
      <p className="text-xs font-semibold tracking-widest uppercase text-[#00c9a7] mb-2">Background</p>
      <h2 className="font-display font-bold text-white text-3xl md:text-4xl mb-3">Experience & Education</h2>
      <div className="w-12 h-0.5 bg-gradient-to-r from-[#00c9a7] to-[#0096ff] rounded mb-10" />

      <div className="grid md:grid-cols-2 gap-8">

        {/* Experience */}
        <div className="relative pl-5 border-l-2 border-slate-800">
          <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#00c9a7] ring-4 ring-gray-950" />
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-slate-600 transition-colors">
            <div className="flex items-start justify-between gap-2 flex-wrap mb-1">
              <h3 className="font-display font-semibold text-white">{experience.role}</h3>
              <span className="text-xs text-[#00c9a7] bg-[#00c9a7]/10 border border-[#00c9a7]/20 px-2.5 py-1 rounded-full whitespace-nowrap">
                Current
              </span>
            </div>
            <p className="text-sm text-[#0096ff] font-medium mb-1">{experience.company}</p>
            <p className="text-xs text-slate-500 mb-4">{experience.location} · {experience.period}</p>
            <ul className="space-y-2">
              {experience.highlights.map((h, i) => (
                <li key={i} className="flex gap-2 text-sm text-slate-400">
                  <span className="text-[#00c9a7] mt-0.5 shrink-0">▸</span>
                  {h}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Education */}
        <div className="relative pl-5 border-l-2 border-slate-800">
          <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#0096ff] ring-4 ring-gray-950" />
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-slate-600 transition-colors">
            <h3 className="font-display font-semibold text-white mb-1">{education.degree}</h3>
            <p className="text-sm text-[#0096ff] font-medium mb-1">{education.school}</p>
            <p className="text-xs text-slate-500 mb-4">{education.period} · Graduated</p>
            <div className="flex flex-wrap gap-2">
              {['Data Structures', 'Web Development', 'Database Systems', 'Software Engineering', 'Networking'].map(s => (
                <span key={s} className="text-xs px-2.5 py-1 rounded-full bg-slate-800 text-slate-400 border border-slate-700">
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
