import React from 'react'
import { NavLink, Button, ShieldIcon, tokens } from './ui'

export function Navbar({ dark }) {
  return (
    <nav style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '18px 48px', background: dark ? '#020817' : '#fff', borderBottom: `1px solid ${dark ? '#1E293B' : '#F3F4F6'}`, position: 'sticky', top: 0, zIndex: 100, backdropFilter: 'blur(8px)' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <div style={{ width: 34, height: 34, borderRadius: 8, background: tokens.orange, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <ShieldIcon size={18} />
        </div>
        <span style={{ fontWeight: 800, fontSize: 20, color: dark ? '#F1F5F9' : tokens.navy }}>Sakhi<span style={{ color: tokens.orange }}>AI</span></span>
      </div>
      <div style={{ display: 'flex', gap: 32 }}>
        {['Home', 'Features', 'How It Works', 'About Us', 'Contact'].map((item, i) => (
          <NavLink key={item} active={i === 0} dark={dark}>{item}</NavLink>
        ))}
      </div>
      <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
        <button style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '8px 14px', background: 'transparent', border: `1.5px solid ${dark ? '#334155' : '#E5E7EB'}`, borderRadius: 8, cursor: 'pointer', fontSize: 13, fontWeight: 500, color: dark ? '#CBD5E1' : '#374151' }}>🎧 24/7 Support</button>
        <Button variant="outline" dark={dark}>Log In</Button>
        <Button variant="primary">Sign Up</Button>
      </div>
    </nav>
  )
}

export default Navbar

