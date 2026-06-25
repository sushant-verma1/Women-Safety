import React, { useState } from 'react'

export const tokens = {
  orange: '#E8450A',
  navy: '#0D1B3E',
  lightOrange: '#FFF0EA',
  lightBlue: '#EEF3FF',
}

export function ShieldIcon({ size = 18, color = '#fff' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M12 2L4 6v6c0 5.25 3.5 10.15 8 11.35C16.5 22.15 20 17.25 20 12V6L12 2z" fill={color} opacity={0.9} />
      <path d="M9 12l2 2 4-4" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function Badge({ dark }) {
  return (
    <div style={{
      display: 'inline-flex', alignItems: 'center', gap: 6,
      background: dark ? 'rgba(232,69,10,0.15)' : '#FFF0EA',
      border: `1px solid ${dark ? 'rgba(232,69,10,0.35)' : '#F5C4B0'}`,
      borderRadius: 999, padding: '6px 14px', fontSize: 11, fontWeight: 700,
      letterSpacing: '0.12em', color: tokens.orange,
    }}>
      <ShieldIcon size={13} color={tokens.orange} />
      AI-POWERED. SAFE. SECURE.
    </div>
  )
}

export function NavLink({ children, active, dark }) {
  return (
    <a href="#" style={{
      textDecoration: 'none', fontSize: 14, fontWeight: active ? 600 : 400,
      color: active ? tokens.orange : dark ? '#CBD5E1' : '#374151',
      borderBottom: active ? `2px solid ${tokens.orange}` : '2px solid transparent', paddingBottom: 2,
    }}>{children}</a>
  )
}

export function Button({ children, variant = 'primary', dark, style = {} }) {
  const base = { display: 'inline-flex', alignItems: 'center', gap: 8, borderRadius: 8, fontWeight: 600, fontSize: 14, cursor: 'pointer', border: 'none', transition: 'all 0.2s', padding: '10px 20px' }
  const styles = {
    primary: { background: tokens.orange, color: '#fff' },
    outline: { background: 'transparent', color: dark ? '#E2E8F0' : tokens.navy, border: `1.5px solid ${dark ? '#334155' : '#D1D5DB'}` },
    ghost: { background: 'transparent', color: dark ? '#94A3B8' : '#6B7280', padding: '8px 12px' },
  }
  return <button style={{ ...base, ...styles[variant], ...style }}>{children}</button>
}

export function CTACard({ icon, label, arrow = true, dark }) {
  const [hovered, setHovered] = useState(false)
  return (
    <div onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '14px 24px', background: dark ? (hovered ? '#1E293B' : '#0F172A') : (hovered ? '#F3F4F6' : '#fff'), border: `1.5px solid ${dark ? '#1E3A5F' : '#E5E7EB'}`, borderRadius: 12, cursor: 'pointer', transition: 'all 0.2s', minWidth: 210, boxShadow: hovered ? '0 4px 20px rgba(0,0,0,0.10)' : '0 1px 4px rgba(0,0,0,0.06)' }}>
      <span style={{ fontSize: 22 }}>{icon}</span>
      <span style={{ fontWeight: 600, fontSize: 14, color: dark ? '#E2E8F0' : tokens.navy }}>{label}</span>
      {arrow && <span style={{ marginLeft: 'auto', color: tokens.orange, fontSize: 16 }}>→</span>}
    </div>
  )
}

export function FeatureCard({ emoji, title, desc, dark }) {
  return (
    <div style={{ background: dark ? '#0F172A' : '#fff', border: `1px solid ${dark ? '#1E3A5F' : '#E5E7EB'}`, borderRadius: 16, padding: '28px 24px', flex: '1 1 220px', boxShadow: dark ? 'none' : '0 2px 12px rgba(0,0,0,0.05)' }}>
      <div style={{ fontSize: 32, marginBottom: 14 }}>{emoji}</div>
      <div style={{ fontWeight: 700, fontSize: 16, color: dark ? '#F1F5F9' : tokens.navy, marginBottom: 8 }}>{title}</div>
      <div style={{ fontSize: 13, color: dark ? '#94A3B8' : '#6B7280', lineHeight: 1.6 }}>{desc}</div>
    </div>
  )
}

export function StepCard({ num, title, desc, dark }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', flex: '1 1 180px' }}>
      <div style={{ width: 48, height: 48, borderRadius: '50%', background: tokens.orange, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 18, marginBottom: 16 }}>{num}</div>
      <div style={{ fontWeight: 700, fontSize: 15, color: dark ? '#F1F5F9' : tokens.navy, marginBottom: 8 }}>{title}</div>
      <div style={{ fontSize: 13, color: dark ? '#94A3B8' : '#6B7280', lineHeight: 1.6 }}>{desc}</div>
    </div>
  )
}

export function StatCard({ value, label, dark }) {
  return (
    <div style={{ textAlign: 'center' }}>
      <div style={{ fontSize: 32, fontWeight: 800, color: tokens.orange }}>{value}</div>
      <div style={{ fontSize: 13, color: dark ? '#94A3B8' : '#6B7280', marginTop: 4 }}>{label}</div>
    </div>
  )
}

export function Hero({ dark }) {
  return (
    <section style={{ background: dark ? '#020817' : '#FAFAFA', padding: '72px 48px 0', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: 120, left: 80, fontSize: 22, opacity: 0.35, pointerEvents: 'none' }}>♥</div>
      <Badge dark={dark} />
      <h1 style={{ margin: '32px 0 0', fontFamily: "'Segoe UI', system-ui, sans-serif", lineHeight: 1.05 }}>
        <span style={{ display: 'block', fontSize: 72, fontWeight: 900, color: dark ? '#F1F5F9' : tokens.navy }}>Report.</span>
        <span style={{ display: 'block', fontSize: 72, fontWeight: 900, color: dark ? '#F1F5F9' : tokens.navy }}>Protect.</span>
        <span style={{ display: 'block', fontSize: 72, fontWeight: 900, color: tokens.orange }}>Empower.</span>
      </h1>
      <p style={{ maxWidth: 480, margin: '24px auto 0', fontSize: 16, color: dark ? '#94A3B8' : '#6B7280', lineHeight: 1.7 }}>
        <strong style={{ color: dark ? '#E2E8F0' : tokens.navy }}>SakhiAI</strong> is your trusted companion for filing complaints, getting guidance, and staying safe — anytime, anywhere.
      </p>
      <div style={{ display: 'flex', gap: 16, marginTop: 40, flexWrap: 'wrap', justifyContent: 'center' }}>
        <CTACard icon="📋" label="File a Complaint" dark={dark} />
        <CTACard icon="🤖" label="AI Safety Assistant" dark={dark} />
      </div>
      <div style={{ marginTop: 56, width: '100%', maxWidth: 860, position: 'relative' }}>
        <div style={{ position: 'absolute', bottom: 0, left: -20, fontSize: 60, opacity: 0.18 }}>🌿</div>
        <div style={{ position: 'absolute', bottom: 0, right: -20, fontSize: 60, opacity: 0.18 }}>🌿</div>
        <div style={{ background: dark ? 'linear-gradient(180deg, #020817 0%, #0F172A 100%)' : 'linear-gradient(180deg, #FAFAFA 0%, #FFF0E8 100%)', borderRadius: '32px 32px 0 0', padding: '32px 0 0', display: 'flex', justifyContent: 'center', alignItems: 'flex-end', gap: 0, minHeight: 260 }}>
          {[{ color: '#F9A8D4', emoji: '👩', label: 'Priya' }, { color: '#FDBA74', emoji: '👩‍🦱', label: 'Ananya' }, { color: '#FEF9C3', emoji: '👧', label: 'Riya' }, { color: '#BAE6FD', emoji: '👩‍🦰', label: 'Kavya' }, { color: '#BBF7D0', emoji: '👩‍🦳', label: 'Meera' }].map((av, i) => (
            <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 130, transform: i === 2 ? 'translateY(-12px)' : i === 0 || i === 4 ? 'translateY(8px)' : 'translateY(0)' }}>
              <div style={{ width: 100, height: 110, borderRadius: '50% 50% 40% 40%', background: dark ? `linear-gradient(135deg, ${av.color}22, ${av.color}44)` : `linear-gradient(135deg, ${av.color}88, ${av.color})`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 52, border: `3px solid ${dark ? av.color + '44' : av.color}`, boxShadow: `0 8px 24px ${av.color}55` }}>{av.emoji}</div>
              <div style={{ marginTop: 8, fontSize: 12, fontWeight: 600, color: dark ? '#94A3B8' : '#6B7280' }}>{av.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function StatsSection({ dark }) {
  const stats = [{ value: '50K+', label: 'Complaints Filed' }, { value: '98%', label: 'Resolution Rate' }, { value: '24/7', label: 'AI Support' }, { value: '15+', label: 'Partner Agencies' }]
  return (
    <section style={{ background: dark ? '#0F172A' : '#fff', padding: '56px 48px', display: 'flex', justifyContent: 'center', gap: 64, flexWrap: 'wrap', borderTop: `1px solid ${dark ? '#1E293B' : '#F3F4F6'}`, borderBottom: `1px solid ${dark ? '#1E293B' : '#F3F4F6'}` }}>
      {stats.map(s => <StatCard key={s.label} {...s} dark={dark} />)}
    </section>
  )
}

export function Features({ dark }) {
  const features = [{ emoji: '📝', title: 'File a Complaint', desc: 'Submit complaints quickly with guided forms, evidence uploads, and status tracking in real time.' }, { emoji: '🤖', title: 'AI Safety Assistant', desc: 'Get instant guidance on your rights, next steps, and resources — available around the clock.' }, { emoji: '🔒', title: '100% Confidential', desc: 'Your identity and data are protected with end-to-end encryption and strict privacy standards.' }, { emoji: '📍', title: 'Location-Aware Help', desc: 'Find the nearest helplines, shelters, and legal aid centres based on where you are right now.' }]
  return (
    <section style={{ background: dark ? '#020817' : '#F9FAFB', padding: '80px 48px' }}>
      <div style={{ textAlign: 'center', marginBottom: 48 }}>
        <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.12em', color: tokens.orange, marginBottom: 12 }}>WHAT WE OFFER</div>
        <h2 style={{ fontSize: 36, fontWeight: 800, color: dark ? '#F1F5F9' : tokens.navy, margin: 0 }}>Everything you need to stay safe</h2>
      </div>
      <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap', maxWidth: 960, margin: '0 auto' }}>
        {features.map(f => <FeatureCard key={f.title} {...f} dark={dark} />)}
      </div>
    </section>
  )
}

export function HowItWorks({ dark }) {
  const steps = [{ num: 1, title: 'Create an Account', desc: 'Sign up securely in under 60 seconds. No unnecessary personal details required.' }, { num: 2, title: 'Describe Your Situation', desc: 'Tell us what happened. Our AI guides you through the right category and collects what\'s needed.' }, { num: 3, title: 'Get Instant Guidance', desc: 'Receive actionable next steps, legal information, and connect to local support services.' }, { num: 4, title: 'Track Your Case', desc: 'Monitor complaint status, receive updates, and escalate if needed — all in one dashboard.' }]
  return (
    <section style={{ background: dark ? '#0F172A' : '#fff', padding: '80px 48px' }}>
      <div style={{ textAlign: 'center', marginBottom: 56 }}>
        <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.12em', color: tokens.orange, marginBottom: 12 }}>HOW IT WORKS</div>
        <h2 style={{ fontSize: 36, fontWeight: 800, color: dark ? '#F1F5F9' : tokens.navy, margin: 0 }}>Simple steps, real results</h2>
      </div>
      <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap', maxWidth: 860, margin: '0 auto', justifyContent: 'center' }}>
        {steps.map(s => <StepCard key={s.num} {...s} dark={dark} />)}
      </div>
    </section>
  )
}

export function CTA({ dark }) {
  return (
    <section style={{ background: dark ? 'linear-gradient(135deg, #0F172A 0%, #1E1230 100%)' : `linear-gradient(135deg, ${tokens.navy} 0%, #1A2F6B 100%)`, padding: '80px 48px', textAlign: 'center' }}>
      <h2 style={{ fontSize: 40, fontWeight: 900, color: '#fff', margin: '0 0 16px' }}>You are not alone.</h2>
      <p style={{ color: '#CBD5E1', fontSize: 16, maxWidth: 480, margin: '0 auto 40px', lineHeight: 1.7 }}>Thousands of women have found support through SakhiAI. Take the first step — it takes less than a minute.</p>
      <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
        <Button variant="primary" style={{ padding: '14px 32px', fontSize: 15 }}>🛡️ File a Complaint Now</Button>
        <button style={{ padding: '14px 32px', fontSize: 15, fontWeight: 600, background: 'transparent', border: '1.5px solid #475569', borderRadius: 8, color: '#CBD5E1', cursor: 'pointer' }}>Talk to AI Assistant →</button>
      </div>
    </section>
  )
}

export function Footer({ dark }) {
  return (
    <footer style={{ background: dark ? '#020817' : '#0D1B3E', padding: '48px', color: '#94A3B8', fontSize: 13 }}>
      <div style={{ maxWidth: 960, margin: '0 auto', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 32 }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
            <div style={{ width: 28, height: 28, borderRadius: 6, background: tokens.orange, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <ShieldIcon size={14} />
            </div>
            <span style={{ fontWeight: 800, fontSize: 16, color: '#F1F5F9' }}>Sakhi<span style={{ color: tokens.orange }}>AI</span></span>
          </div>
          <p style={{ maxWidth: 240, lineHeight: 1.6, margin: 0 }}>Empowering every woman to speak up, stay safe, and seek justice.</p>
        </div>
        {[{ heading: 'Product', links: ['Features', 'How It Works', 'Pricing', 'Updates'] }, { heading: 'Support', links: ['24/7 Helpline', 'Report Issue', 'FAQ', 'Contact Us'] }, { heading: 'Legal', links: ['Privacy Policy', 'Terms of Service', 'Cookie Policy'] }].map(col => (
          <div key={col.heading}>
            <div style={{ color: '#F1F5F9', fontWeight: 700, marginBottom: 14, fontSize: 13 }}>{col.heading}</div>
            {col.links.map(l => (
              <div key={l} style={{ marginBottom: 8 }}>
                <a href="#" style={{ color: '#94A3B8', textDecoration: 'none' }}>{l}</a>
              </div>
            ))}
          </div>
        ))}
      </div>
      <div style={{ maxWidth: 960, margin: '40px auto 0', borderTop: '1px solid #1E293B', paddingTop: 24, display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
        <span>© 2026 SakhiAI. All rights reserved.</span>
        <span>Made with ❤️ for every woman's safety</span>
      </div>
    </footer>
  )
}

export default null
