import { useState } from 'react'

const contactLinks = [
  {
    icon: '✉️',
    label: 'Email',
    value: 'homerdivinagracia@gmail.com',
    href: 'mailto:homerdivinagracia@gmail.com',
  },
  {
    icon: '🐙',
    label: 'GitHub',
    value: 'github.com/HomerDivinagracia',
    href: 'https://github.com/HomerDivinagracia',
  },
  {
    icon: '💼',
    label: 'LinkedIn',
    value: 'linkedin.com/in/homer-divinagracia',
    href: 'https://www.linkedin.com/in/homer-divinagracia-83851b316',
  },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setForm({ name: '', email: '', message: '' })
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <section id="contact" className="py-24 bg-slate-900/50">
      <div className="px-6 max-w-5xl mx-auto">
        <p className="text-xs font-semibold tracking-widest uppercase text-[#00c9a7] mb-2">Let's talk</p>
        <h2 className="font-display font-bold text-white text-3xl md:text-4xl mb-3">Get In Touch</h2>
        <div className="w-12 h-0.5 bg-gradient-to-r from-[#00c9a7] to-[#0096ff] rounded mb-10" />

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-slate-400 mb-8 leading-relaxed">
              I'm open to new opportunities, collaborations, or just a conversation about tech.
              Feel free to reach out — I'll get back to you as soon as I can.
            </p>
            <div className="space-y-3">
              {contactLinks.map(c => (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.label !== 'Email' ? '_blank' : undefined}
                  rel="noreferrer"
                  className="flex items-center gap-4 p-4 bg-gray-950 border border-slate-800 rounded-xl hover:border-[#00c9a7] transition-colors group"
                >
                  <span className="text-xl w-9 text-center">{c.icon}</span>
                  <div>
                    <div className="text-xs text-slate-500">{c.label}</div>
                    <div className="text-sm text-white font-medium group-hover:text-[#00c9a7] transition-colors">
                      {c.value}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              required
              value={form.name}
              onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
              className="w-full bg-gray-950 border border-slate-800 rounded-lg px-4 py-3 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-[#00c9a7] transition-colors"
            />
            <input
              type="email"
              placeholder="Your Email"
              required
              value={form.email}
              onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
              className="w-full bg-gray-950 border border-slate-800 rounded-lg px-4 py-3 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-[#00c9a7] transition-colors"
            />
            <textarea
              placeholder="Your Message..."
              required
              rows={5}
              value={form.message}
              onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
              className="w-full bg-gray-950 border border-slate-800 rounded-lg px-4 py-3 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-[#00c9a7] transition-colors resize-none"
            />
            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-[#00c9a7] text-gray-950 font-semibold text-sm hover:opacity-85 transition-all hover:-translate-y-0.5"
            >
              {sent ? '✓ Message Sent!' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
