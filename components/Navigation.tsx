'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'

const LogoIcon = () => (
  <svg className="nav__logo-icon" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="36" height="36" rx="8" fill="rgba(5,237,153,0.1)" stroke="rgba(5,237,153,0.3)" strokeWidth="1" />
    <path d="M10 18 L14 10 L22 10 L26 18 L22 26 L14 26 Z" stroke="#05ed99" strokeWidth="1.5" fill="none" />
    <path d="M14 18 L18 12 L22 18 L18 24 Z" fill="#05ed99" opacity="0.6" />
    <circle cx="18" cy="18" r="2.5" fill="#05ed99" />
  </svg>
)

const ChevronDown = () => (
  <svg width="10" height="6" viewBox="0 0 10 6" fill="currentColor">
    <path d="M1 1l4 4 4-4" />
  </svg>
)

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const closeMobile = () => {
    setMobileOpen(false)
    document.body.style.overflow = ''
  }

  const toggleMobile = () => {
    setMobileOpen((prev) => {
      const next = !prev
      document.body.style.overflow = next ? 'hidden' : ''
      return next
    })
  }

  const isActive = (href: string) => pathname === href
  const isRevampActive = pathname.startsWith('/revamp-method') || pathname.startsWith('/playbook')

  return (
    <>
      <nav
        className="site-nav"
        style={scrolled ? { borderBottomColor: 'rgba(255,255,255,0.1)' } : undefined}
      >
        <div className="nav__inner">
          <Link href="/" className="nav__logo">
            <LogoIcon />
            <span className="nav__logo-text">revamply</span>
          </Link>

          <div className="nav__links">
            <div className="nav__item">
              <Link href="/" className={`nav__link${isActive('/') ? ' active' : ''}`}>
                Home
              </Link>
            </div>
            <div className="nav__item">
              <Link href="/revamp-method" className={`nav__link${isRevampActive ? ' active' : ''}`}>
                REVAMP
                <ChevronDown />
              </Link>
              <div className="nav__dropdown">
                <Link href="/revamp-method">The REVAMP Method</Link>
                <Link href="/playbook">The Playbook</Link>
              </div>
            </div>
            <div className="nav__item">
              <Link href="/assessment" className={`nav__link${isActive('/assessment') ? ' active' : ''}`}>
                Assessment
              </Link>
            </div>
            <div className="nav__item">
              <Link href="/exit-ready" className={`nav__link${isActive('/exit-ready') ? ' active' : ''}`}>
                Exit Ready
              </Link>
            </div>
            <div className="nav__item">
              <Link href="#" className="nav__link">Case Studies</Link>
            </div>
            <div className="nav__item">
              <Link href="#" className="nav__link">About</Link>
            </div>
          </div>

          <div className="nav__cta">
            <Link href="#contact" className="btn btn-primary">Book a Call</Link>
          </div>

          <button
            className={`nav__hamburger${mobileOpen ? ' active' : ''}`}
            aria-label="Open menu"
            onClick={toggleMobile}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      <div className={`nav__mobile${mobileOpen ? ' open' : ''}`}>
        <Link href="/" onClick={closeMobile}>Home</Link>
        <Link href="/revamp-method" onClick={closeMobile}>The REVAMP Method</Link>
        <Link href="/playbook" onClick={closeMobile}>The Playbook</Link>
        <Link href="/assessment" onClick={closeMobile}>Assessment</Link>
        <Link href="/exit-ready" onClick={closeMobile}>Exit Ready</Link>
        <Link href="#" onClick={closeMobile}>Case Studies</Link>
        <Link href="#" onClick={closeMobile}>About</Link>
        <Link href="#contact" className="btn btn-primary" onClick={closeMobile}>Book a Call</Link>
      </div>
    </>
  )
}
