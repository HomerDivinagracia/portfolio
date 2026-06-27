const techs = [
  { name: 'PHP',        slug: 'php',          color: '#777BB4' },
  { name: 'Laravel',   slug: 'laravel',       color: '#FF2D20' },
  { name: 'JavaScript',slug: 'javascript',    color: '#F7DF1E' },
  { name: 'Vue.js',    slug: 'vuedotjs',      color: '#4FC08D' },
  { name: 'React',     slug: 'react',         color: '#61DAFB' },
  { name: 'Inertia.js',slug: 'inertia',       color: '#9553E9' },
  { name: 'MySQL',     slug: 'mysql',         color: '#4479A1' },
  { name: 'PostgreSQL',slug: 'postgresql',    color: '#4169E1' },
  { name: 'Bootstrap', slug: 'bootstrap',     color: '#7952B3' },
  { name: 'Tailwind',  slug: 'tailwindcss',   color: '#06B6D4' },
  { name: 'Vite',      slug: 'vite',          color: '#646CFF' },
  { name: 'Git',       slug: 'git',           color: '#F05032' },
]

export default function TechStack() {
  return (
    <section className="py-24">
      <div className="px-6 max-w-5xl mx-auto">
        <p className="text-xs font-semibold tracking-widest uppercase text-[#00c9a7] mb-2">My toolbox</p>
        <h2 className="font-display font-bold text-white text-3xl md:text-4xl mb-3">Tech Stack</h2>
        <div className="w-12 h-0.5 bg-gradient-to-r from-[#00c9a7] to-[#0096ff] rounded mb-10" />

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
          {techs.map(t => (
            <div
              key={t.name}
              className="flex flex-col items-center gap-2.5 group cursor-default"
            >
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center group-hover:-translate-y-1 transition-all duration-200"
                style={{
                  background: `${t.color}18`,
                  border: `1px solid ${t.color}33`,
                }}
              >
                <img
                  src={`https://cdn.simpleicons.org/${t.slug}/${t.color.replace('#', '')}`}
                  alt={t.name}
                  className="w-7 h-7"
                  onError={e => { e.target.style.display = 'none' }}
                />
              </div>
              <span className="text-xs text-slate-500 group-hover:text-slate-300 transition-colors text-center leading-tight">
                {t.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
