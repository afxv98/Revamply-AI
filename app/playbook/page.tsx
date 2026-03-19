import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'The Playbook | Revamply',
  description: 'How Duncan MacDonald builds modern companies — the Revamply Playbook.',
}

const principles = [
  {
    num: '1',
    title: 'Start With Broken Systems',
    lines: [
      'Most industries run on outdated processes.',
      'The biggest opportunities exist where technology has barely changed.',
      'Look for friction customers tolerate every day.',
      'Businesses that feel "stuck in the past" are the best places to innovate.',
    ],
  },
  {
    num: '2',
    title: 'Deconstruct Everything',
    lines: [
      'Break operations down to their simplest components.',
      'Question every assumption about how things "must" work.',
      'Many workflows exist only because no one redesigned them.',
      'When you rebuild from scratch, efficiency appears instantly.',
    ],
  },
  {
    num: '3',
    title: 'Replace Work With Systems',
    lines: [
      'Repetitive tasks should become automation.',
      'Decisions should be supported by data and AI.',
      'Software should remove friction, not add complexity.',
      'The goal is operational leverage.',
    ],
  },
  {
    num: '4',
    title: 'Move Faster Than the Market',
    lines: [
      'Most companies move slowly because they overthink.',
      'Launch early versions and learn from real usage.',
      'Progress comes from iteration, not perfect planning.',
      'Speed is a strategic advantage.',
    ],
  },
  {
    num: '5',
    title: 'Small Teams. Big Output.',
    lines: [
      'Exceptional builders outperform large average teams.',
      'Hire people who solve problems, not people who manage processes.',
      'Remove unnecessary hierarchy.',
      'Empower teams to ship quickly.',
    ],
  },
  {
    num: '6',
    title: 'Build Platforms, Not Just Products',
    lines: [
      'Products solve individual problems.',
      'Platforms transform entire industries.',
      'When software becomes infrastructure, competitors struggle to catch up.',
      'Long-term value comes from systems others rely on.',
    ],
  },
  {
    num: '7',
    title: 'Own the Experience',
    lines: [
      'The more of the stack you control, the better the outcome.',
      'Integration creates speed, insight, and reliability.',
      'Fragmented tools create weak businesses.',
      'Strong companies build unified ecosystems.',
    ],
  },
  {
    num: '8',
    title: 'Solve Pain, Not Ideas',
    lines: [
      'The best companies start with frustration.',
      'Listen to industries that complain the most.',
      'If people say "why doesn\'t this exist already?" you\'ve found opportunity.',
      'Real problems create real demand.',
    ],
  },
  {
    num: '9',
    title: 'Think in Decades',
    lines: [
      'Build businesses that improve every year.',
      'Ignore short-term noise and hype cycles.',
      'Compounding improvements create unbeatable companies.',
      'Endurance is a strategic advantage.',
    ],
  },
  {
    num: '10',
    title: 'Rebuild the Operating System',
    lines: [
      'Most businesses are running on outdated operating systems.',
      'AI and automation are the next evolution of business infrastructure.',
      'The companies that rebuild first will define the future.',
    ],
  },
]

export default function PlaybookPage() {
  return (
    <>
      {/* ===== PAGE HERO ===== */}
      <section className="page-hero">
        <div className="page-hero__label" data-animate>The Revamply Playbook</div>
        <h1 className="page-hero__title" data-animate data-animate-delay="1">
          How Duncan MacDonald<br /><span style={{ color: 'var(--green)' }}>Builds Modern Companies</span>
        </h1>
        <p className="page-hero__sub" data-animate data-animate-delay="2">
          Ten principles behind the systems, companies, and thinking that drives Revamply.
        </p>
      </section>

      {/* ===== PLAYBOOK GRID ===== */}
      <section className="section" style={{ background: 'var(--black)' }}>
        <div className="container">
          <div className="playbook-grid">
            {principles.map((p, i) => (
              <div
                key={p.num}
                className="playbook-card"
                data-animate
                {...(i % 2 === 1 ? { 'data-animate-delay': '1' } : {})}
              >
                <div className="playbook-card__num">{p.num}</div>
                <h3 className="playbook-card__title">{p.title}</h3>
                <div className="playbook-card__lines">
                  {p.lines.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== MISSION ===== */}
      <section className="cta-banner" style={{ background: 'var(--dark)' }} id="cta">
        <div className="cta-banner__container">
          <div style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--green)', marginBottom: '20px' }} data-animate>
            The Revamply Mission
          </div>
          <h2 className="cta-banner__title" data-animate data-animate-delay="1">
            To rebuild outdated industries with<br /><span style={{ color: 'var(--green)' }}>intelligent systems, automation,<br />and modern software.</span>
          </h2>
          <p className="cta-banner__sub" data-animate data-animate-delay="2">
            Every principle in this playbook informs how Revamply works with established businesses to redesign their operational systems.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }} data-animate data-animate-delay="3">
            <Link href="/revamp-method" className="btn btn-secondary btn-lg">Explore the REVAMP Method</Link>
            <Link href="/assessment" className="btn btn-primary btn-lg">Request an Assessment</Link>
          </div>
        </div>
      </section>
    </>
  )
}
