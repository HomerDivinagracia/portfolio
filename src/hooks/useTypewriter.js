import { useState, useEffect } from 'react'

export function useTypewriter(words, typingSpeed = 75, deletingSpeed = 40, pauseMs = 1800) {
  const [state, setState] = useState({ wordIdx: 0, charIdx: 0, deleting: false, paused: false })

  useEffect(() => {
    const word = words[state.wordIdx]

    if (state.paused) {
      const t = setTimeout(() => setState(s => ({ ...s, deleting: true, paused: false })), pauseMs)
      return () => clearTimeout(t)
    }

    if (!state.deleting) {
      if (state.charIdx < word.length) {
        const t = setTimeout(() => setState(s => ({ ...s, charIdx: s.charIdx + 1 })), typingSpeed)
        return () => clearTimeout(t)
      }
      setState(s => ({ ...s, paused: true }))
    } else {
      if (state.charIdx > 0) {
        const t = setTimeout(() => setState(s => ({ ...s, charIdx: s.charIdx - 1 })), deletingSpeed)
        return () => clearTimeout(t)
      }
      setState(s => ({ ...s, deleting: false, wordIdx: (s.wordIdx + 1) % words.length }))
    }
  }, [state, words, typingSpeed, deletingSpeed, pauseMs])

  return words[state.wordIdx].slice(0, state.charIdx)
}
