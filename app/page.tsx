import type { Metadata } from 'next'
import Link from 'next/link'
import dynamic from 'next/dynamic'

const Hero3D = dynamic(() => import('@/components/Hero3D'), { ssr: false })

export const metadata: Metadata = {
  title: 'Revamply | Modern Operating Systems for Established Businesses',
  description:
    'Revamply helps established companies modernise the systems that power their operations. Redesigning workflows and implementing intelligent automation.',
}

export default function HomePage() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="hero">
        <div className="hero__bg">
          <div className="hero__grid" />
        </div>
        <Hero3D />
        <div className="hero__content">
          <div className="hero__badge" data-animate>
            <span className="hero__badge-dot" />
            Operational Modernization for Established Businesses
          </div>
          <h1 className="hero__title" data-animate data-animate-delay="1">
            Modern Operating Systems<br />for <span>Established Businesses</span>
          </h1>
          <p className="hero__subtitle" data-animate data-animate-delay="2">
            Revamply helps established companies modernise the systems that power their operations. By redesigning workflows and implementing intelligent automation, we help businesses operate more efficiently, scale more easily, and prepare for the future.
          </p>
          <div className="hero__buttons" data-animate data-animate-delay="3">
            <Link href="#contact" className="btn btn-primary btn-lg">Book a Discovery Call</Link>
            <Link href="/assessment" className="btn btn-secondary btn-lg">Request an Operational Assessment</Link>
          </div>
        </div>
      </section>

      {/* ===== THE PROBLEM ===== */}
      <section className="problem">
        <div className="problem__container">
          <div data-animate>
            <h2 className="problem__heading">
              Many Successful Businesses Are Running on<br />Outdated Operating Systems
            </h2>
          </div>
          <p className="problem__body" data-animate data-animate-delay="1">
            Thousands of profitable businesses were built before modern digital infrastructure existed.<br />
            Over time, these companies develop operational challenges such as:
          </p>
          <ul className="problem__list" data-animate data-animate-delay="2">
            <li>manual workflows</li>
            <li>disconnected software systems</li>
            <li>slow response times to customers</li>
            <li>administrative bottlenecks</li>
            <li>processes that rely heavily on the owner</li>
          </ul>
          <p className="problem__body" data-animate data-animate-delay="3">
            These inefficiencies often limit growth and reduce business value.<br />
            Modern businesses require something different.
          </p>
          <p className="problem__accent" data-animate data-animate-delay="4">
            They require a modern operating system.
          </p>
        </div>
      </section>

      {/* ===== WHAT REVAMPLY DOES ===== */}
      <section className="features section">
        <div className="features__header container" data-animate>
          <div className="section__label">What We Do</div>
          <h2 className="section__title">We Redesign the Systems<br /><span>That Run Businesses</span></h2>
          <p className="section__subtitle">
            Revamply analyses how your company currently operates and redesigns the systems that power your business. Rather than simply recommending software tools, we design complete operational systems that integrate modern automation, intelligent workflows, and connected infrastructure.
          </p>
        </div>

        <div className="features__grid">
          <div className="feature-card" data-animate>
            <div className="feature-card__glow" />
            <div className="feature-card__icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
              </svg>
            </div>
            <h3 className="feature-card__title">Automated Customer Communication</h3>
            <p className="feature-card__text">Intelligent systems that respond, follow up, and nurture customer relationships automatically — ensuring no lead or enquiry falls through the cracks.</p>
          </div>

          <div className="feature-card" data-animate data-animate-delay="1">
            <div className="feature-card__glow" />
            <div className="feature-card__icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" />
                <rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" />
              </svg>
            </div>
            <h3 className="feature-card__title">Streamlined Internal Workflows</h3>
            <p className="feature-card__text">Replace fragmented, manual processes with structured, efficient workflows that allow your team to focus on work that actually moves the business forward.</p>
          </div>

          <div className="feature-card" data-animate data-animate-delay="2">
            <div className="feature-card__glow" />
            <div className="feature-card__icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" />
              </svg>
            </div>
            <h3 className="feature-card__title">Operational Dashboards &amp; Reporting</h3>
            <p className="feature-card__text">Real-time visibility into how your business is performing. Know exactly where things stand without chasing updates or compiling spreadsheets manually.</p>
          </div>

          <div className="feature-card" data-animate data-animate-delay="3">
            <div className="feature-card__glow" />
            <div className="feature-card__icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="3" />
                <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
              </svg>
            </div>
            <h3 className="feature-card__title">Integrated Business Software</h3>
            <p className="feature-card__text">Connect your existing tools and infrastructure into a cohesive, coordinated system — eliminating silos and creating seamless information flow across departments.</p>
          </div>

          <div className="feature-card" data-animate data-animate-delay="1">
            <div className="feature-card__glow" />
            <div className="feature-card__icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
              </svg>
            </div>
            <h3 className="feature-card__title">Intelligent Customer Response</h3>
            <p className="feature-card__text">AI-powered systems that handle routine customer interactions, route enquiries intelligently, and surface information that helps your team close deals faster.</p>
          </div>

          <div className="feature-card" data-animate data-animate-delay="2">
            <div className="feature-card__glow" />
            <div className="feature-card__icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
            <h3 className="feature-card__title">Automation Across Departments</h3>
            <p className="feature-card__text">Identify repetitive tasks across every area of your business and replace them with intelligent automation that works consistently, day and night.</p>
          </div>
        </div>

        <div className="container" style={{ marginTop: '48px', textAlign: 'center' }} data-animate>
          <p style={{ fontSize: '18px', fontWeight: 600, color: 'var(--gray)', marginBottom: '12px' }}>The objective is simple:</p>
          <p style={{ fontSize: '22px', fontWeight: 700, color: 'var(--green)' }}>Create a business that runs more efficiently and scales more easily.</p>
        </div>
      </section>

      {/* ===== FOUNDER ===== */}
      <section className="founder section">
        <div className="container">
          <div className="founder__layout">
            <div>
              <div className="founder__badge" data-animate>Built by a Technology Founder</div>
              <h2 className="founder__title" data-animate data-animate-delay="1">
                Built by an Entrepreneur Who Builds Real Systems
              </h2>
              <p className="founder__body" data-animate data-animate-delay="2">
                Revamply was founded by Duncan MacDonald, a multiple-technology company founder who has spent his career building software platforms designed to solve operational inefficiencies inside real businesses.
              </p>
              <p className="founder__body" data-animate data-animate-delay="2">
                Unlike traditional consultants who focus primarily on strategy, Duncan&apos;s background is rooted in building and deploying operational technology systems from the ground up.
              </p>
              <blockquote className="founder__quote" data-animate data-animate-delay="3">
                Identify inefficiencies inside real businesses and build systems that eliminate them.
              </blockquote>
              <p className="founder__body" data-animate data-animate-delay="3">
                All of these platforms were bootstrapped and developed from scratch, with technology designed specifically to improve how companies operate. Revamply brings that same systems-thinking approach to established businesses seeking to modernise their operations.
              </p>
            </div>
            <div className="founder__visual" data-animate data-animate-delay="2">
              <div className="founder__visual-glow" />
              <div className="founder__visual-inner">
                <div className="founder__avatar">DM</div>
                <div className="founder__name">Duncan MacDonald</div>
                <div className="founder__role">Founder, Revamply</div>
                <div style={{ marginTop: '32px', display: 'flex', flexDirection: 'column', gap: '12px', textAlign: 'left' }}>
                  <div style={{ background: 'rgba(5,237,153,0.06)', border: '1px solid rgba(5,237,153,0.2)', borderRadius: '10px', padding: '14px 18px' }}>
                    <div style={{ fontSize: '12px', color: 'var(--green)', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '4px' }}>Automotive</div>
                    <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.7)' }}>DealerBids · LotPilot · CarConnective</div>
                  </div>
                  <div style={{ background: 'rgba(5,237,153,0.06)', border: '1px solid rgba(5,237,153,0.2)', borderRadius: '10px', padding: '14px 18px' }}>
                    <div style={{ fontSize: '12px', color: 'var(--green)', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '4px' }}>Hospitality</div>
                    <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.7)' }}>RoomService AI · HospitalityOS</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TECHNOLOGY PLATFORMS ===== */}
      <section className="platforms section">
        <div className="container">
          <div className="section__label text-center" data-animate>Technology Platforms</div>
          <h2 className="section__title text-center" data-animate data-animate-delay="1">Built by the Founder</h2>

          <div className="platforms__grid">
            <div className="platform-card" data-animate>
              <div className="platform-card__label">Automotive</div>
              <div className="platform-card__name">DealerBids</div>
              <p className="platform-card__desc">A digital wholesale vehicle marketplace designed for automotive dealers. The platform connects dealerships and enables them to buy and sell inventory through a streamlined bidding environment, improving efficiency and transparency in the wholesale vehicle market.</p>
            </div>

            <div className="platform-card" data-animate data-animate-delay="1">
              <div className="platform-card__label">Automotive</div>
              <div className="platform-card__name">LotPilot</div>
              <p className="platform-card__desc">An AI-powered operating platform for car dealerships. The system automates key operational areas including vehicle inventory marketing, lead management, customer communication, and appointment scheduling, helping dealerships increase sales efficiency while reducing manual workload.</p>
            </div>

            <div className="platform-card" data-animate data-animate-delay="2">
              <div className="platform-card__label">Automotive</div>
              <div className="platform-card__name">CarConnective</div>
              <p className="platform-card__desc">A connected vehicle intelligence platform designed to help dealerships better understand and interact with vehicles after the sale. The system provides insights into vehicle health, service needs, and ownership lifecycle events.</p>
              <span className="platform-card__badge">Launching Soon</span>
            </div>

            <div className="platform-card" data-animate>
              <div className="platform-card__label">Hospitality</div>
              <div className="platform-card__name">RoomService AI</div>
              <p className="platform-card__desc">A platform designed to modernise guest communication and service delivery within the hospitality industry. The system helps hotels automate guest requests, streamline service operations, and improve response times through intelligent messaging systems.</p>
            </div>

            <div className="platform-card" data-animate data-animate-delay="1">
              <div className="platform-card__label">Hospitality</div>
              <div className="platform-card__name">HospitalityOS</div>
              <p className="platform-card__desc">A modern operating system currently being developed for hotels. The platform is designed to unify hospitality operations into a single intelligent infrastructure that improves communication, operational coordination, and guest service management.</p>
              <span className="platform-card__badge">In Development</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== REAL WORLD EXPERIENCE ===== */}
      <section className="trust section">
        <div className="container">
          <div className="section__label text-center" data-animate>Real-World Experience</div>
          <h2 className="trust__title" data-animate data-animate-delay="1">
            Operational Systems Designed<br />for Real Businesses
          </h2>
          <p className="trust__sub" data-animate data-animate-delay="2">
            Revamply&apos;s technology and systems have been developed in collaboration with real-world companies, providing deep insight into where inefficiencies develop and where modernisation delivers meaningful improvements.
          </p>
          <div className="trust__items" data-animate data-animate-delay="3">
            <div className="trust__item">
              <div className="trust__item-title">Automotive</div>
              <div className="trust__item-sub">Large dealer groups &amp; independents</div>
            </div>
            <div className="trust__item">
              <div className="trust__item-title">Hospitality</div>
              <div className="trust__item-sub">Luxury five-star hotels</div>
            </div>
            <div className="trust__item">
              <div className="trust__item-title">Multi-Industry</div>
              <div className="trust__item-sub">Service-based businesses</div>
            </div>
            <div className="trust__item">
              <div className="trust__item-title">Real Systems</div>
              <div className="trust__item-sub">Built &amp; deployed from scratch</div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== THE REVAMP FRAMEWORK ===== */}
      <section className="framework section">
        <div className="container">
          <div className="section__label text-center" data-animate>The Framework</div>
          <h2 className="section__title text-center" data-animate data-animate-delay="1">
            The Revamp Operational<br /><span>Modernisation Framework</span>
          </h2>
          <p className="section__subtitle text-center" data-animate data-animate-delay="2">
            Revamply uses a structured framework to redesign how businesses operate.
          </p>

          <div className="steps">
            {[
              { letter: 'R', num: '01 — Review', title: 'Review Operations', text: 'Analyse how your business currently functions across customer communication, workflows, and internal systems.' },
              { letter: 'E', num: '02 — Expose', title: 'Expose Inefficiencies', text: 'Identify operational bottlenecks, repetitive tasks, and manual processes that limit growth and performance.' },
              { letter: 'V', num: '03 — Visualize', title: 'Visualize the Future System', text: 'Design the architecture for a modern operating system tailored specifically to your business.' },
              { letter: 'A', num: '04 — Automate', title: 'Automate Workflows', text: 'Implement automation and intelligent systems that streamline operations across your entire business.' },
              { letter: 'M', num: '05 — Monitor', title: 'Monitor Performance', text: 'Measure improvements across efficiency, responsiveness, and operational performance with real-time visibility.' },
              { letter: 'P', num: '06 — Progress', title: 'Progressively Improve', text: 'Continuously refine and enhance the operating system as the business evolves and grows.' },
            ].map((step, i) => (
              <div key={step.letter} className="step-card" data-animate data-animate-delay={i % 3 === 0 ? undefined : String(i % 3)}>
                <div className="step-card__letter">{step.letter}</div>
                <div className="step-card__num">{step.num}</div>
                <h3 className="step-card__title">{step.title}</h3>
                <p className="step-card__text">{step.text}</p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '40px' }} data-animate>
            <Link href="/revamp-method" className="btn btn-outline-green btn-lg">Explore the Full Framework →</Link>
          </div>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section className="services section">
        <div className="container">
          <div className="section__label text-center" data-animate>Services</div>
          <h2 className="section__title text-center" data-animate data-animate-delay="1">How We Work<br /><span>With Businesses</span></h2>

          <div className="services__grid">
            <div className="service-card" data-animate>
              <div className="service-card__num">01</div>
              <h3 className="service-card__title">Operational Assessment</h3>
              <p className="service-card__text">A structured analysis of your current operational systems and workflows. Deliverables include:</p>
              <ul className="service-card__list">
                <li>Operational workflow review</li>
                <li>Modernisation opportunities</li>
                <li>Recommended system architecture</li>
                <li>Implementation roadmap</li>
              </ul>
            </div>

            <div className="service-card" data-animate data-animate-delay="1">
              <div className="service-card__num">02</div>
              <h3 className="service-card__title">Operating System Implementation</h3>
              <p className="service-card__text">Revamply designs and deploys modern operational systems tailored to the unique workflows of your business. This may include automation infrastructure, integrated tools, and intelligent operational workflows.</p>
            </div>

            <div className="service-card" data-animate data-animate-delay="2">
              <div className="service-card__num">03</div>
              <h3 className="service-card__title">Ongoing Operational Optimisation</h3>
              <p className="service-card__text">Once implemented, Revamply helps monitor and refine operational systems to ensure your business continues running at peak efficiency as it grows and evolves.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== IDEAL CLIENTS ===== */}
      <section className="clients-section section">
        <div className="container">
          <div className="section__label text-center" data-animate>Ideal Clients</div>
          <h2 className="section__title text-center" data-animate data-animate-delay="1">The Businesses<br /><span>We Work With</span></h2>
          <p className="section__subtitle text-center" data-animate data-animate-delay="2">
            Revamply works with established companies that have built strong businesses but recognise that operational systems need modernisation.
          </p>

          <div className="clients__layout" style={{ marginTop: '56px' }}>
            <div data-animate>
              <h3 className="clients__col-title">Typical Client Profile</h3>
              <ul className="clients__list">
                <li>£1M – £10M annual revenue</li>
                <li>10 – 50 employees</li>
                <li>Profitable and established</li>
                <li>Operational processes built years ago</li>
                <li>Owners considering long-term growth or future exit</li>
              </ul>
            </div>
            <div data-animate data-animate-delay="1">
              <h3 className="clients__col-title">Industries We Serve</h3>
              <ul className="clients__list">
                <li>Professional services</li>
                <li>Property management</li>
                <li>Construction and trades</li>
                <li>Hospitality</li>
                <li>Automotive services</li>
                <li>Service-based businesses</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===== OUTCOMES ===== */}
      <section className="outcomes section section--white">
        <div className="container">
          <div className="section__label section__label--dark" data-animate>Outcomes</div>
          <h2 className="outcomes__title" data-animate data-animate-delay="1">
            What Happens When a Business Modernises Its Operating System
          </h2>
          <p className="outcomes__subtitle" data-animate data-animate-delay="2">
            When operational systems are modernised, businesses often experience meaningful improvements.
          </p>

          <div className="outcomes__grid" data-animate data-animate-delay="3">
            {[
              'Faster customer response times',
              'Reduced administrative workload',
              'Improved operational clarity',
              'Stronger management visibility',
              'Improved profitability',
              'Businesses that are easier to scale or sell',
            ].map((text) => (
              <div key={text} className="outcome-item">
                <div className="outcome-item__check">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2 7l4 4 6-6" stroke="#00a86b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <span className="outcome-item__text">{text}</span>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '40px', textAlign: 'center' }} data-animate>
            <p style={{ fontSize: '17px', color: 'rgba(0,0,0,0.6)', fontStyle: 'italic' }}>
              Operational modernisation is not simply about technology.<br />
              It is about building a business that runs smoothly and efficiently.
            </p>
          </div>
        </div>
      </section>

      {/* ===== CTA BANNER ===== */}
      <section className="cta-banner" id="contact">
        <div className="cta-banner__container">
          <h2 className="cta-banner__title" data-animate>
            Start Modernising<br /><span style={{ color: 'var(--green)' }}>Your Business</span>
          </h2>
          <p className="cta-banner__sub" data-animate data-animate-delay="1">
            Every successful company eventually reaches a point where its operational systems must evolve. Revamply helps established businesses redesign the systems that power their operations.
          </p>
          <div data-animate data-animate-delay="2">
            <Link href="#" className="btn btn-primary btn-lg">Book a Discovery Call</Link>
          </div>
        </div>
      </section>
    </>
  )
}
