import { useEffect, useRef, useState } from 'react'

const skills = [
  { name: 'PHP',           type: 'Backend Language',   slug: 'php',          color: '#777BB4', level: 75 },
  { name: 'Laravel 8/12', type: 'Backend Framework',   slug: 'laravel',      color: '#FF2D20', level: 75 },
  { name: 'JavaScript',   type: 'Frontend Language',   slug: 'javascript',   color: '#F7DF1E', level: 70 },
  { name: 'Vue 2',        type: 'Frontend Framework',  slug: 'vuedotjs',     color: '#4FC08D', level: 70 },
  { name: 'React',        type: 'Frontend Framework',  slug: 'react',        color: '#61DAFB', level: 55 },
  { name: 'Inertia.js',   type: 'Full-stack Bridge',   slug: 'inertia',      color: '#9553E9', level: 55 },
  { name: 'MySQL',        type: 'Database',            slug: 'mysql',        color: '#4479A1', level: 70 },
  { name: 'PostgreSQL',   type: 'Database',            slug: 'postgresql',   color: '#4169E1', level: 55 },
  { name: 'Bootstrap 5',  type: 'CSS Framework',       slug: 'bootstrap',    color: '#7952B3', level: 75 },
  { name: 'OAuth2 / SSO', type: 'Auth & Security',     slug: 'openid',       color: '#F78C40', level: 60 },
]

function SkillCard({ skill, animate }) {
  return (
    <div className="bg-gray-950 border border-slate-800 rounded-xl p-6 hover:border-[#00c9a7] hover:-translate-y-0.5 transition-all duration-200">
      <div className="flex items-center gap-3 mb-5">
        <div
          className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
          style={{ background: `${skill.color}22`, border: `1px solid ${skill.color}44` }}
        >
          <img
            src={`https://cdn.simpleicons.org/${skill.slug}/${skill.color.replace('#', '')}`}
            alt={skill.name}
            className="w-5 h-5"
            onError={e => {
              e.target.style.display = 'none'
              e.target.parentElement.innerHTML = '🔧'
            }}
          />
        </div>
        <div>
          <div className="font-display font-semibold text-white">{skill.name}</div>
          <div className="text-xs text-slate-500">{skill.type}</div>
        </div>
      </div>
      <div className="flex justify-between text-xs text-slate-500 mb-2">
        <span>Proficiency</span>
        <span>{skill.level}%</span>
      </div>
      <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-1000 ease-out"
          style={{
            width: animate ? `${skill.level}%` : '0%',
            background: `linear-gradient(90deg, ${skill.color}, #0096ff)`,
          }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  const ref = useRef(null)
  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimate(true) },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" className="py-24 bg-slate-900/50">
      <div className="px-6 max-w-5xl mx-auto">
        <p className="text-xs font-semibold tracking-widest uppercase text-[#00c9a7] mb-2">What I work with</p>
        <h2 className="font-display font-bold text-white text-3xl md:text-4xl mb-3">Skills</h2>
        <div className="w-12 h-0.5 bg-gradient-to-r from-[#00c9a7] to-[#0096ff] rounded mb-10" />
        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map(s => (
            <SkillCard key={s.name} skill={s} animate={animate} />
          ))}
        </div>
      </div>
    </section>
  )
}
