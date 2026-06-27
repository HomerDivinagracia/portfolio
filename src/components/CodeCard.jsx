import { useState, useEffect, useRef, useCallback } from 'react'

const lines = [
  { tokens: [{ t: 'const ', c: '#c792ea' }, { t: 'developer', c: '#82aaff' }, { t: ' = {', c: '#89ddff' }] },
  { tokens: [{ t: '  name', c: '#f07178' }, { t: ': ', c: '#89ddff' }, { t: '"Homer Divinagracia"', c: '#c3e88d' }, { t: ',', c: '#89ddff' }] },
  { tokens: [{ t: '  role', c: '#f07178' }, { t: ': ', c: '#89ddff' }, { t: '"Full Stack Developer"', c: '#c3e88d' }, { t: ',', c: '#89ddff' }] },
  { tokens: [{ t: '  stack', c: '#f07178' }, { t: ': [', c: '#89ddff' }] },
  { tokens: [{ t: '    ', c: '#fff' }, { t: '"PHP"', c: '#c3e88d' }, { t: ', ', c: '#89ddff' }, { t: '"Laravel"', c: '#c3e88d' }, { t: ',', c: '#89ddff' }] },
  { tokens: [{ t: '    ', c: '#fff' }, { t: '"Vue"', c: '#c3e88d' }, { t: ', ', c: '#89ddff' }, { t: '"React"', c: '#c3e88d' }, { t: ',', c: '#89ddff' }] },
  { tokens: [{ t: '  ],', c: '#89ddff' }] },
  { tokens: [{ t: '  passion', c: '#f07178' }, { t: ': ', c: '#89ddff' }, { t: '"Agentic Engineering"', c: '#c3e88d' }, { t: ',', c: '#89ddff' }] },
  { tokens: [{ t: '  status', c: '#f07178' }, { t: ': ', c: '#89ddff' }, { t: '"Open to opportunities ✓"', c: '#c3e88d' }] },
  { tokens: [{ t: '}', c: '#89ddff' }] },
]

export default function CodeCard() {
  const [visibleLines, setVisibleLines] = useState(0)
  const [fading, setFading] = useState(false)
  const [glowing, setGlowing] = useState(false)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const [shine, setShine] = useState({ x: 50, y: 50 })
  const cardRef = useRef(null)

  const isTyping = !fading && visibleLines < lines.length
  const isHovering = tilt.x !== 0 || tilt.y !== 0

  useEffect(() => {
    if (fading) {
      const t = setTimeout(() => { setVisibleLines(0); setFading(false) }, 650)
      return () => clearTimeout(t)
    }

    if (visibleLines < lines.length) {
      const t = setTimeout(() => setVisibleLines(v => v + 1), visibleLines === 0 ? 600 : 120)
      return () => clearTimeout(t)
    }

    // All lines typed — flash glow then loop
    setGlowing(true)
    const t1 = setTimeout(() => setGlowing(false), 900)
    const t2 = setTimeout(() => setFading(true), 3200)
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [visibleLines, fading])

  const handleMouseMove = useCallback((e) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const relX = (e.clientX - rect.left) / rect.width
    const relY = (e.clientY - rect.top) / rect.height
    setTilt({ x: -(relY - 0.5) * 14, y: (relX - 0.5) * 14 })
    setShine({ x: relX * 100, y: relY * 100 })
  }, [])

  const handleMouseLeave = useCallback(() => {
    setTilt({ x: 0, y: 0 })
    setShine({ x: 50, y: 50 })
  }, [])

  return (
    <div
      ref={cardRef}
      className="relative w-full md:w-[360px] cursor-default"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(900px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(${isHovering ? 1.025 : 1})`,
        transition: isHovering ? 'transform 0.08s ease' : 'transform 0.55s ease',
      }}
    >
      {/* Glow */}
      <div
        className="absolute -inset-2 rounded-2xl blur-xl"
        style={{
          background: 'linear-gradient(135deg, #00c9a7, #0096ff)',
          opacity: glowing ? 0.55 : 0.2,
          transition: 'opacity 0.4s ease',
        }}
      />

      {/* Card */}
      <div className="relative bg-[#0d1117] border border-slate-700/60 rounded-xl overflow-hidden shadow-2xl">

        {/* Mouse-tracking shine overlay */}
        <div
          className="absolute inset-0 pointer-events-none z-10 rounded-xl"
          style={{
            background: `radial-gradient(circle at ${shine.x}% ${shine.y}%, rgba(255,255,255,0.07) 0%, transparent 55%)`,
            opacity: isHovering ? 1 : 0,
            transition: 'opacity 0.3s ease',
          }}
        />

        {/* Title bar */}
        <div className="flex items-center gap-2 px-4 py-3 bg-slate-900 border-b border-slate-800">
          <span className="w-3 h-3 rounded-full bg-red-500/80" />
          <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <span className="w-3 h-3 rounded-full bg-green-500/80" />
          <span className="ml-3 text-xs text-slate-500 font-mono">developer.js</span>
        </div>

        {/* Code body */}
        <div className="p-5 font-mono text-sm leading-7 min-h-[240px]">
          {lines.slice(0, visibleLines).map((line, i) => (
            <div
              key={i}
              className="flex items-start gap-3 rounded-sm px-1 -mx-1"
              style={{
                opacity: fading ? 0 : 1,
                transition: fading
                  ? `opacity 0.35s ease ${i * 28}ms`
                  : 'opacity 0.15s ease, background 0.2s ease',
                background: i === visibleLines - 1 && isTyping
                  ? 'rgba(0, 201, 167, 0.08)'
                  : 'transparent',
              }}
            >
              <span className="text-slate-600 select-none w-4 text-right shrink-0 text-xs mt-0.5">
                {i + 1}
              </span>
              <span>
                {line.tokens.map((tk, j) => (
                  <span key={j} style={{ color: tk.c }}>{tk.t}</span>
                ))}
              </span>
            </div>
          ))}

          {isTyping && (
            <div className="flex items-start gap-3">
              <span className="text-slate-600 select-none w-4 text-right shrink-0 text-xs mt-0.5">
                {visibleLines + 1}
              </span>
              <span className="inline-block w-2 h-5 bg-[#00c9a7] animate-pulse rounded-sm" />
            </div>
          )}
        </div>

        {/* Footer status bar */}
        <div className="flex items-center justify-between px-4 py-2 bg-slate-900 border-t border-slate-800">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#00c9a7] animate-pulse" />
            <span className="text-xs text-slate-500">Available for work</span>
          </div>
          <span className="text-xs text-slate-600">JavaScript</span>
        </div>

      </div>
    </div>
  )
}
