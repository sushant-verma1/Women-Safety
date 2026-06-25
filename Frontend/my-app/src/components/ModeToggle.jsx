import React from 'react'

export function ModeToggle({ dark, setDark }) {
  return (
    <button onClick={() => setDark(!dark)} title={dark ? 'Switch to light mode' : 'Switch to dark mode'} style={{ position: 'fixed', top: 16, right: 16, zIndex: 9999, background: dark ? '#1E293B' : '#F1F5F9', border: `1.5px solid ${dark ? '#334155' : '#D1D5DB'}`, borderRadius: 999, padding: '7px 16px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 7, fontWeight: 600, fontSize: 13, color: dark ? '#E2E8F0' : '#374151', boxShadow: '0 2px 8px rgba(0,0,0,0.12)', transition: 'all 0.2s' }}>{dark ? '☀️ Light' : '🌙 Dark'}</button>
  )
}

export default ModeToggle
