import Link from 'next/link'

const FooterLogo = () => (
  <svg width="28" height="28" viewBox="0 0 36 36" fill="none">
    <rect width="36" height="36" rx="8" fill="rgba(5,237,153,0.1)" stroke="rgba(5,237,153,0.3)" strokeWidth="1" />
    <path d="M10 18 L14 10 L22 10 L26 18 L22 26 L14 26 Z" stroke="#05ed99" strokeWidth="1.5" fill="none" />
    <circle cx="18" cy="18" r="2.5" fill="#05ed99" />
  </svg>
)

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <Link href="/" className="footer__logo">
            <FooterLogo />
            <span>revamply</span>
          </Link>
          <p className="footer__tagline">
            Modern Operating Systems for Established Businesses.<br />
            Helping companies redesign the systems that power their operations.
          </p>
        </div>

        <div className="footer__nav">
          <div className="footer__nav-group">
            <h4>Pages</h4>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/assessment">Operational Assessment</Link></li>
              <li><Link href="/exit-ready">Modernising Before Exit</Link></li>
              <li><Link href="#">Case Studies</Link></li>
            </ul>
          </div>
          <div className="footer__nav-group">
            <h4>Framework</h4>
            <ul>
              <li><Link href="/revamp-method">The REVAMP Method</Link></li>
              <li><Link href="/playbook">The Playbook</Link></li>
              <li><Link href="#">About</Link></li>
            </ul>
          </div>
          <div className="footer__nav-group">
            <h4>Get Started</h4>
            <ul>
              <li><Link href="#">Book a Call</Link></li>
              <li><Link href="/assessment">Request Assessment</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <span>© 2025 Revamply. All rights reserved.</span>
        <span>Modern Operating Systems for Established Businesses</span>
      </div>
    </footer>
  )
}
