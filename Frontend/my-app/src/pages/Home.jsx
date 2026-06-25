import React, { useState } from 'react'
import { Hero, StatsSection, Features, HowItWorks, CTA, Footer } from '../components/ui'
import ModeToggle from '../components/modeToggle'
import Navbar from '../components/navbar'

export default function Home() {
  const [dark, setDark] = useState(true)
  return (
    <div style={{ fontFamily: "'Segoe UI', system-ui, -apple-system, sans-serif", minHeight: '100vh', background: dark ? '#020817' : '#FAFAFA', transition: 'background 0.3s' }}>
      <ModeToggle dark={dark} setDark={setDark} />
      <Navbar dark={dark} />
      <Hero dark={dark} />
      <StatsSection dark={dark} />
      <Features dark={dark} />
      <HowItWorks dark={dark} />
      <CTA dark={dark} />
      <Footer dark={dark} />
    </div>
  )
}
