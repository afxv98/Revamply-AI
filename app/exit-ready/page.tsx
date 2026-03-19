import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Modernising Businesses Before Exit | Revamply',
  description:
    'Revamply helps business owners modernise operational infrastructure before selling — making companies more efficient, less owner-dependent, and more attractive to buyers.',
}

export default function ExitReadyPage() {
  return (
    <>
      {/* ===== PAGE HERO ===== */}
      <section className="page-hero">
        <div className="page-hero__label" data-animate>Modernising Businesses Before Exit</div>
        <h1 className="page-hero__title" data-animate data-animate-delay="1">
          Preparing Businesses<br /><span style={{ color: 'var(--green)' }}>for the Next Chapter</span>
        </h1>
        <p className="page-hero__sub" data-animate data-animate-delay="2">
          Many successful companies were built long before modern operational systems existed. Modernising operational infrastructure before a sale can significantly improve how the business is perceived by buyers.
        </p>
      </section>

      {/* ===== THE CHALLENGE ===== */}
      <section className="problem">
        <div className="problem__container">
          <h2 className="problem__heading" data-animate>
            Businesses Built to Last —<br />But Running on Outdated Systems
          </h2>
          <p className="problem__body" data-animate data-animate-delay="1">
            Many successful companies were built long before modern digital infrastructure existed.
          </p>
          <p className="problem__body" data-animate data-animate-delay="1">
            Before selling a company, modernising operational infrastructure can significantly improve how the business is perceived by buyers.
          </p>
          <p className="problem__accent" data-animate data-animate-delay="2">
            Operational modernisation can strengthen the foundation of a business before long-term growth or future transition.
          </p>
        </div>
      </section>

      {/* ===== WHAT REVAMPLY DOES ===== */}
      <section className="section" style={{ background: 'var(--dark)' }}>
        <div className="container">
          <div className="section__label text-center" data-animate>How We Help</div>
          <h2 className="section__title text-center" data-animate data-animate-delay="1">
            Revamply Helps Business Owners<br /><span>Redesign Operational Systems</span>
          </h2>
          <p className="section__subtitle text-center" data-animate data-animate-delay="2">
            So the company becomes more attractive, more efficient, and easier for new ownership to manage.
          </p>

          <div className="features__grid" style={{ marginTop: '56px' }}>
            <div className="feature-card" data-animate>
              <div className="feature-card__glow" />
              <div className="feature-card__icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
              </div>
              <h3 className="feature-card__title">More Efficient</h3>
              <p className="feature-card__text">Replace manual, fragmented processes with streamlined automated systems that reduce operational costs and improve output — making the business more profitable and easier to run.</p>
            </div>

            <div className="feature-card" data-animate data-animate-delay="1">
              <div className="feature-card__glow" />
              <div className="feature-card__icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" />
                  <rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" />
                </svg>
              </div>
              <h3 className="feature-card__title">Easier to Manage</h3>
              <p className="feature-card__text">Clear operational dashboards, structured workflows, and transparent reporting make the business simple to understand and manage — for both current and future leadership.</p>
            </div>

            <div className="feature-card" data-animate data-animate-delay="2">
              <div className="feature-card__glow" />
              <div className="feature-card__icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
                </svg>
              </div>
              <h3 className="feature-card__title">Less Dependent on the Owner</h3>
              <p className="feature-card__text">Systems that run independently of any individual — so the business continues operating effectively regardless of who is leading it. A critical factor for any serious buyer.</p>
            </div>

            <div className="feature-card" data-animate data-animate-delay="3">
              <div className="feature-card__glow" />
              <div className="feature-card__icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                  <polyline points="17 6 23 6 23 12" />
                </svg>
              </div>
              <h3 className="feature-card__title">More Attractive to Buyers</h3>
              <p className="feature-card__text">Businesses with modern operational infrastructure command stronger valuations and attract more serious buyers — because they represent lower risk and higher confidence.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHY IT MATTERS ===== */}
      <section className="section" style={{ background: 'var(--black)' }}>
        <div className="container">
          <div className="clients__layout">
            <div data-animate>
              <div className="section__label">Why It Matters</div>
              <h2 className="section__title" style={{ fontSize: 'clamp(28px,3.5vw,46px)' }}>
                Buyers Pay More for<br /><span>Businesses That Run Themselves</span>
              </h2>
              <p className="section__subtitle" style={{ marginBottom: '24px' }}>
                When a buyer evaluates a business, they are not just buying revenue — they are buying a system. A business that runs efficiently, with documented workflows and modern infrastructure, is significantly more attractive than one that relies on the owner&apos;s knowledge and manual effort.
              </p>
              <p style={{ fontSize: '16px', color: 'var(--gray)', lineHeight: 1.8 }}>
                Operational modernisation before exit is one of the highest-leverage activities a business owner can undertake. The investment in modernising systems often returns a multiple of its cost through improved valuation at sale.
              </p>
            </div>
            <div data-animate data-animate-delay="1">
              <div style={{ background: 'var(--dark-card)', border: '1px solid var(--border)', borderRadius: '16px', padding: '40px 36px' }}>
                <div style={{ fontSize: '13px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--green)', marginBottom: '24px' }}>
                  What Modern Operations Signal to Buyers
                </div>
                <ul className="clients__list">
                  <li>Business can operate without the founder</li>
                  <li>Revenue is predictable and defensible</li>
                  <li>Processes are documented and transferable</li>
                  <li>Customer communication is systematised</li>
                  <li>Reporting is real-time and accurate</li>
                  <li>Team can execute without constant direction</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="cta-banner" id="cta">
        <div className="cta-banner__container">
          <h2 className="cta-banner__title" data-animate>
            Prepare Your Business<br /><span style={{ color: 'var(--green)' }}>for the Next Chapter</span>
          </h2>
          <p className="cta-banner__sub" data-animate data-animate-delay="1">
            Book a discovery conversation to explore how Revamply can help modernise your operations before your next transition.
          </p>
          <div data-animate data-animate-delay="2">
            <Link href="#" className="btn btn-primary btn-lg">Book a Discovery Conversation</Link>
          </div>
        </div>
      </section>
    </>
  )
}
