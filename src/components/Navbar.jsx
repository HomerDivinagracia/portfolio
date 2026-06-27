import { useState, useEffect, useRef } from 'react'

const links = ['About', 'Experience', 'Skills', 'Projects', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive]     = useState('')
  const [open, setOpen]         = useState(false)
  const menuRef                 = useRef(null)

  useEffect(() => {
    const onScroll = () => { setScrolled(window.scrollY > 20); if (open) setOpen(false) }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [open])

  useEffect(() => {
    const onClickOutside = (e) => { if (menuRef.current && !menuRef.current.contains(e.target)) setOpen(false) }
    document.addEventListener('mousedown', onClickOutside)
    return () => document.removeEventListener('mousedown', onClickOutside)
  }, [])

  useEffect(() => {
    const observers = links.map(l => {
      const el = document.getElementById(l.toLowerCase())
      if (!el) return null
      const observer = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(l.toLowerCase()) },
        { threshold: 0.4 }
      )
      observer.observe(el)
      return observer
    })
    return () => observers.forEach(o => o?.disconnect())
  }, [])

  return (
    <nav
      ref={menuRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-gray-950/90 backdrop-blur-md border-b border-slate-800' : 'bg-transparent'
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#hero" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <img src="/logo.svg" alt="HD Logo" className="w-8 h-8" />
          <span className="font-display font-bold text-white text-lg">
            HD<span className="text-[#00c9a7]">.</span>
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-8">
          {links.map(l => {
            const isActive = active === l.toLowerCase()
            return (
              <li key={l}>
                <a
                  href={`#${l.toLowerCase()}`}
                  className={`relative text-sm font-medium transition-colors duration-200 pb-1 ${
                    isActive ? 'text-white' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {l}
                  <span
                    className="absolute left-0 -bottom-0.5 h-0.5 rounded-full bg-gradient-to-r from-[#00c9a7] to-[#0096ff] transition-all duration-300"
                    style={{ width: isActive ? '100%' : '0%' }}
                  />
                </a>
              </li>
            )
          })}
        </ul>

        {/* Hamburger button */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1 group"
          onClick={() => setOpen(o => !o)}
          aria-label="Toggle menu"
        >
          <span className={`block h-0.5 bg-slate-400 rounded transition-all duration-300 ${open ? 'w-6 rotate-45 translate-y-2' : 'w-6'}`} />
          <span className={`block h-0.5 bg-slate-400 rounded transition-all duration-300 ${open ? 'w-0 opacity-0' : 'w-4'}`} />
          <span className={`block h-0.5 bg-slate-400 rounded transition-all duration-300 ${open ? 'w-6 -rotate-45 -translate-y-2' : 'w-6'}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${open ? 'max-h-72 border-b border-slate-800' : 'max-h-0'}`}>
        <ul className="flex flex-col px-6 pb-4 bg-gray-950/95 backdrop-blur-md">
          {links.map(l => {
            const isActive = active === l.toLowerCase()
            return (
              <li key={l}>
                <a
                  href={`#${l.toLowerCase()}`}
                  onClick={() => setOpen(false)}
                  className={`block py-3 text-sm font-medium border-b border-slate-800 last:border-0 transition-colors ${
                    isActive ? 'text-[#00c9a7]' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {l}
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}
