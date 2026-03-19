import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Operational Assessment | Revamply',
  description:
    'The Revamply Operational Assessment identifies how your company currently operates and where modernisation can significantly improve efficiency.',
}

export default function AssessmentPage() {
  return (
    <>
      {/* ===== PAGE HERO ===== */}
      <section className="page-hero">
        <div className="page-hero__label" data-animate>Operational Assessment</div>
        <h1 className="page-hero__title" data-animate data-animate-delay="1">
          Discover How Your Business<br /><span style={{ color: 'var(--green)' }}>Could Run More Efficiently</span>
        </h1>
        <p className="page-hero__sub" data-animate data-animate-delay="2">
          The Revamply Operational Assessment identifies how your company currently operates and where modernisation can significantly improve efficiency.
        </p>
      </section>

      {/* ===== WHAT WE EXAMINE ===== */}
      <section className="section" style={{ background: 'var(--dark)' }}>
        <div className="container">
          <div className="section__label text-center" data-animate>What We Examine</div>
          <h2 className="section__title text-center" data-animate data-animate-delay="1">
            A Structured Review of<br /><span>How Your Business Operates</span>
          </h2>
          <p className="section__subtitle text-center" data-animate data-animate-delay="2">
            The assessment examines every key area of your business operations to identify where inefficiencies exist and where modernisation can deliver the greatest improvement.
          </p>

          <div className="assessment-list" style={{ marginTop: '48px' }}>
            {[
              { text: 'Customer communication workflows', delay: undefined },
              { text: 'Lead management processes', delay: '1' },
              { text: 'Internal operational systems', delay: '1' },
              { text: 'Scheduling and task management', delay: '2' },
              { text: 'Current software infrastructure', delay: '2' },
              { text: 'Operational reporting and visibility', delay: '3' },
            ].map(({ text, delay }) => (
              <div
                key={text}
                className="assessment-item"
                data-animate
                {...(delay ? { 'data-animate-delay': delay } : {})}
              >
                <div className="assessment-item__dot" />
                {text}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHAT YOU RECEIVE ===== */}
      <section className="section" style={{ background: 'var(--black)' }}>
        <div className="container">
          <div className="section__label text-center" data-animate>What You Receive</div>
          <h2 className="section__title text-center" data-animate data-animate-delay="1">
            A Structured Report on<br /><span>Your Modernisation Opportunities</span>
          </h2>
          <p className="section__subtitle text-center" data-animate data-animate-delay="2">
            Following the review, Revamply provides a structured report outlining modernisation opportunities and recommended improvements.
          </p>

          <div className="steps" style={{ marginTop: '48px' }}>
            {[
              { num: '01', label: 'Deliverable One', title: 'Operational Workflow Review', text: 'A clear map of how your business currently operates — where information flows, where decisions are made, and where manual effort is concentrated.' },
              { num: '02', label: 'Deliverable Two', title: 'Modernisation Opportunities', text: 'A prioritised list of operational improvements identified during the review, ranked by impact and feasibility for your specific business.' },
              { num: '03', label: 'Deliverable Three', title: 'Recommended System Architecture', text: 'A blueprint for the modern operating system that would best serve your business — designed around your specific workflows and team structure.' },
              { num: '04', label: 'Deliverable Four', title: 'Implementation Roadmap', text: 'A clear, phased plan for how modernisation would be implemented — with timelines, priorities, and expected outcomes at each stage.' },
            ].map((item, i) => (
              <div key={item.num} className="step-card" data-animate {...(i > 0 ? { 'data-animate-delay': String(i % 3) } : {})}>
                <div className="step-card__letter">{item.num}</div>
                <div className="step-card__num">{item.label}</div>
                <h3 className="step-card__title">{item.title}</h3>
                <p className="step-card__text">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="cta-banner" id="request">
        <div className="cta-banner__container">
          <h2 className="cta-banner__title" data-animate>
            Request an<br /><span style={{ color: 'var(--green)' }}>Operational Assessment</span>
          </h2>
          <p className="cta-banner__sub" data-animate data-animate-delay="1">
            Understand exactly how your business currently operates and where modernisation can make the greatest difference.
          </p>
          <div data-animate data-animate-delay="2">
            <Link href="#" className="btn btn-primary btn-lg">Request Operational Assessment</Link>
          </div>
        </div>
      </section>
    </>
  )
}
