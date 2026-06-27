const projects = [
  {
    name: 'LIBIS — NHA Billing & Collection System',
    desc: 'A 4-service ecosystem for the National Housing Authority built on a microservice architecture. Includes a central OAuth2 SSO portal, a BCS frontend (Inertia.js), a versioned REST API (PostgreSQL + Swagger), and a public online payment portal (Vue 3 + Vuetify) supporting Dragonpay, AltPayNet, and Billeroo — all sharing the same BCS database.',
    tags: ['Laravel 12', 'React 19', 'Vue 3', 'Inertia.js', 'OAuth2 / SSO', 'PostgreSQL', 'Swagger', 'Vuetify 3'],
    icon: '🏗️',
    featured: true,
  },
  {
    name: 'NHA Billing & Collection System',
    desc: 'Full financial management system for the National Housing Authority Region 3 — handles official receipts, accountable forms, field collections, and analytics for government housing loans.',
    tags: ['Laravel 8', 'Vue 2', 'MySQL', 'Bootstrap 5'],
    icon: '🏦',
  },
  {
    name: 'Human Resource Information System',
    desc: 'Comprehensive HRIS for managing employees, departments, positions, contracts, manpower requests, and work assignments across an organization.',
    tags: ['Laravel 8', 'Vue 2', 'MySQL', 'Bootstrap 5'],
    icon: '👥',
  },
  {
    name: 'E-Business Permit & Licensing System',
    desc: 'LGU-facing system for Bais City that handles new business applicants, BPLO processing, permit endorsement workflows, and email verification.',
    tags: ['Laravel 8', 'Vue 2', 'MySQL', 'Bootstrap 5'],
    icon: '🏢',
  },
  {
    name: 'Property & Procurement Management System',
    desc: 'Manages inspection & acceptance reports (IAR), item detailing, purchase order tracking, and multi-level approval workflows for government procurement.',
    tags: ['Laravel 8', 'Vue 2', 'MySQL', 'Bootstrap 5'],
    icon: '📦',
  },
  {
    name: 'Resident ID & Household Registration System',
    desc: 'Civic system for San Jose del Barrio that handles household and resident registration, ID card generation, and a daily/monthly transaction dashboard.',
    tags: ['Laravel 8', 'Vue 2', 'MySQL', 'Bootstrap 5'],
    icon: '🪪',
  },
  {
    name: 'Pagadian City Payroll System',
    desc: 'Payroll management system for Pagadian City covering employee records, departments, job titles, and automated payroll register generation.',
    tags: ['Laravel 8', 'Vue 2', 'MySQL', 'Bootstrap 5'],
    icon: '💼',
  },
]

function PlaceholderCard() {
  return (
    <div className="border-2 border-dashed border-slate-800 rounded-xl p-8 flex flex-col items-center justify-center text-center min-h-[200px] hover:border-slate-600 transition-colors">
      <span className="text-3xl mb-3">📁</span>
      <p className="text-slate-500 text-sm">Project coming soon</p>
      <p className="text-slate-600 text-xs mt-1">Drop your project details to fill this in</p>
    </div>
  )
}

function ProjectCard({ project }) {
  return (
    <div className={`bg-slate-900 border rounded-xl p-6 flex flex-col gap-4 hover:-translate-y-0.5 transition-all duration-200 ${
      project.featured
        ? 'border-[#00c9a7]/40 hover:border-[#00c9a7] sm:col-span-2 lg:col-span-3'
        : 'border-slate-800 hover:border-[#0096ff]'
    }`}>
      <div className="flex justify-between items-start">
        <div className="flex items-center gap-3">
          <span className="text-3xl">{project.icon}</span>
          {project.featured && (
            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[#00c9a7]/15 text-[#00c9a7] border border-[#00c9a7]/30">
              Featured
            </span>
          )}
        </div>
        <div className="flex gap-2">
          {project.github && (
            <a href={project.github} target="_blank" rel="noreferrer"
              className="text-xs text-slate-400 border border-slate-700 rounded-md px-2 py-1 hover:text-[#00c9a7] hover:border-[#00c9a7] transition-colors">
              GitHub
            </a>
          )}
          {project.live && (
            <a href={project.live} target="_blank" rel="noreferrer"
              className="text-xs text-slate-400 border border-slate-700 rounded-md px-2 py-1 hover:text-[#00c9a7] hover:border-[#00c9a7] transition-colors">
              Live
            </a>
          )}
        </div>
      </div>
      <div>
        <h3 className="font-display font-semibold text-white mb-1">{project.name}</h3>
        <p className="text-sm text-slate-400">{project.desc}</p>
      </div>
      <div className="flex flex-wrap gap-2 mt-auto">
        {project.tags.map(t => (
          <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-[#00c9a7]/10 text-[#00c9a7] border border-[#00c9a7]/20">
            {t}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function Projects() {
  const hasProjects = projects.length > 0

  return (
    <section id="projects" className="py-24 px-6 max-w-5xl mx-auto">
      <p className="text-xs font-semibold tracking-widest uppercase text-[#00c9a7] mb-2">What I've built</p>
      <h2 className="font-display font-bold text-white text-3xl md:text-4xl mb-3">Projects</h2>
      <div className="w-12 h-0.5 bg-gradient-to-r from-[#00c9a7] to-[#0096ff] rounded mb-10" />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {hasProjects
          ? projects.map(p => <ProjectCard key={p.name} project={p} />)
          : [1, 2, 3].map(i => <PlaceholderCard key={i} />)
        }
      </div>
    </section>
  )
}
