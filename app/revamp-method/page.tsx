import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'The REVAMP Method | Revamply',
  description:
    'The operational modernisation framework used by Revamply to redesign and modernise business operating systems.',
}

const steps = [
  {
    letter: 'R',
    title: 'Review Operations',
    body: [
      'The first step is to understand how the business currently runs. The objective is to build a clear picture of the operational systems that power the business today.',
      'This includes reviewing:',
    ],
    list: [
      'Customer communication channels',
      'Sales and lead management processes',
      'Internal operational workflows',
      'Scheduling and task coordination',
      'Reporting and performance visibility',
      'Current software and infrastructure',
    ],
  },
  {
    letter: 'E',
    title: 'Expose Inefficiencies',
    body: [
      'Once operations are understood, the next step is identifying where the business loses time, money, or opportunity. These inefficiencies may not always be visible internally but often become clear during a structured operational review.',
      'Common inefficiencies often include:',
    ],
    list: [
      'Manual administrative processes',
      'Slow response times to customers',
      'Disconnected software tools',
      'Operational bottlenecks between departments',
      'Workflows that rely heavily on the owner',
    ],
  },
  {
    letter: 'V',
    title: 'Visualize the Future System',
    body: [
      'With inefficiencies identified, Revamply designs the architecture of a modern operating system for the business. This system integrates modern infrastructure, automation, and streamlined workflows.',
      'The goal is to create a business environment where information flows clearly, operations are coordinated efficiently, and teams can work more productively.',
    ],
    highlight: 'This stage produces a blueprint for the future operating system of the business.',
    list: [],
  },
  {
    letter: 'A',
    title: 'Automate Workflows',
    body: [
      'Once the future operating system has been designed, Revamply implements the systems required to support it. Automation allows teams to focus on higher-value work while reducing manual workload.',
      'This may include:',
    ],
    list: [
      'Automation of repetitive workflows',
      'Modern communication systems',
      'Integrated operational dashboards',
      'Streamlined internal processes',
      'Intelligent operational infrastructure',
    ],
  },
  {
    letter: 'M',
    title: 'Monitor Performance',
    body: [
      'After modernisation systems are implemented, it is critical to track how the business performs under the new operating structure. Monitoring ensures that modernisation efforts deliver measurable improvements.',
      'Revamply measures improvements across key areas such as:',
    ],
    list: [
      'Operational efficiency',
      'Response times',
      'Workflow coordination',
      'Reporting visibility',
      'Staff productivity',
    ],
  },
  {
    letter: 'P',
    title: 'Progressively Improve',
    body: [
      'Operational systems should never remain static. As the business evolves, its operating system must evolve with it.',
      'Revamply continues refining workflows, systems, and infrastructure to ensure the company operates at peak efficiency over time. This stage ensures that the operating system continues supporting growth and future transition.',
    ],
    list: [],
  },
]

export default function RevampMethodPage() {
  return (
    <>
      {/* ===== PAGE HERO ===== */}
      <section className="page-hero">
        <div className="page-hero__label" data-animate>Framework</div>
        <h1 className="page-hero__title" data-animate data-animate-delay="1">
          The <span style={{ color: 'var(--green)' }}>REVAMP</span> Method
        </h1>
        <p className="page-hero__sub" data-animate data-animate-delay="2">
          The operational modernisation framework used by Revamply to redesign and modernise business operating systems.
        </p>
      </section>

      {/* ===== INTRODUCTION ===== */}
      <section className="section" style={{ background: 'var(--dark)' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <p style={{ fontSize: 'clamp(18px,2.5vw,24px)', lineHeight: 1.75, color: 'var(--gray)', textAlign: 'center' }} data-animate>
            Most businesses evolve gradually over many years. New tools are added. Processes change. Staff take on new responsibilities.
          </p>
          <p style={{ fontSize: 'clamp(18px,2.5vw,24px)', lineHeight: 1.75, color: 'var(--gray)', textAlign: 'center', marginTop: '20px' }} data-animate data-animate-delay="1">
            Over time the operational systems that run the business become fragmented and inefficient.
          </p>
          <p style={{ fontSize: 'clamp(18px,2.5vw,24px)', lineHeight: 1.75, color: 'var(--white)', textAlign: 'center', marginTop: '20px', fontWeight: 500 }} data-animate data-animate-delay="2">
            Revamply developed the REVAMP Method to systematically redesign how established businesses operate.
          </p>
          <p style={{ fontSize: '17px', lineHeight: 1.75, color: 'var(--gray)', textAlign: 'center', marginTop: '20px' }} data-animate data-animate-delay="3">
            This framework provides a structured approach to identifying inefficiencies, redesigning workflows, and implementing modern operating systems that improve efficiency and long-term business value.
          </p>
        </div>
      </section>

      {/* ===== FRAMEWORK HEADER ===== */}
      <section className="section" style={{ background: 'var(--black)', paddingBottom: 0 }}>
        <div className="container text-center">
          <div className="section__label" data-animate>A Structured Approach</div>
          <h2 className="section__title" data-animate data-animate-delay="1">The REVAMP Framework</h2>
          <p className="section__subtitle" style={{ margin: '0 auto' }} data-animate data-animate-delay="2">
            REVAMP represents the six stages used by Revamply to modernise how businesses operate. Each stage focuses on understanding how the company currently functions and redesigning its operational systems for the future.
          </p>
        </div>
      </section>

      {/* ===== THE 6 STEPS ===== */}
      <section className="revamp-steps">
        <div className="container">
          {steps.map((step) => (
            <div key={step.letter} className="revamp-step" data-animate>
              <div className="revamp-step__letter-wrap">
                <span className="revamp-step__letter">{step.letter}</span>
              </div>
              <div>
                <h2 className="revamp-step__title">{step.title}</h2>
                {step.body.map((para, i) => (
                  <p key={i} className="revamp-step__body">{para}</p>
                ))}
                {'highlight' in step && step.highlight && (
                  <p style={{ fontSize: '16px', color: 'var(--white)', fontWeight: 600, marginTop: '16px' }}>
                    {step.highlight}
                  </p>
                )}
                {step.list.length > 0 && (
                  <ul className="revamp-step__list">
                    {step.list.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== WHY IT MATTERS ===== */}
      <section className="section" style={{ background: 'var(--dark)' }}>
        <div className="container">
          <div className="section__label text-center" data-animate>Why It Matters</div>
          <h2 className="section__title text-center" data-animate data-animate-delay="1">
            Why the REVAMP Method Matters
          </h2>
          <div style={{ maxWidth: '760px', margin: '0 auto 56px' }} data-animate data-animate-delay="2">
            <p style={{ fontSize: '18px', lineHeight: 1.8, color: 'var(--gray)', textAlign: 'center', marginBottom: '16px' }}>
              Operational inefficiencies rarely appear overnight. They develop gradually as businesses grow and systems evolve organically.
            </p>
            <p style={{ fontSize: '18px', lineHeight: 1.8, color: 'var(--gray)', textAlign: 'center', marginBottom: '16px' }}>
              Without a structured modernisation process, these inefficiencies can limit growth, reduce operational clarity, and make businesses harder to scale or transfer.
            </p>
            <p style={{ fontSize: '18px', lineHeight: 1.8, color: 'var(--white)', textAlign: 'center', fontWeight: 500 }}>
              The REVAMP Method provides a clear, structured approach to redesigning how established businesses operate.
            </p>
          </div>

          <div style={{ background: 'var(--dark-card)', border: '1px solid var(--border)', borderRadius: '16px', padding: '48px', maxWidth: '760px', margin: '0 auto' }} data-animate data-animate-delay="3">
            <div style={{ fontSize: '14px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--green)', marginBottom: '24px', textAlign: 'center' }}>
              The Result Is a Business That Is
            </div>
            <ul className="clients__list">
              <li>More efficient</li>
              <li>Easier to manage</li>
              <li>Less dependent on manual processes</li>
              <li>Better prepared for future growth or transition</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ===== HOW IT&apos;S USED ===== */}
      <section className="section" style={{ background: 'var(--black)' }}>
        <div className="container" style={{ maxWidth: '800px', textAlign: 'center' }}>
          <div className="section__label" data-animate>Application</div>
          <h2 className="section__title" data-animate data-animate-delay="1">How the REVAMP Method Is Used</h2>
          <p style={{ fontSize: '18px', lineHeight: 1.8, color: 'var(--gray)', marginBottom: '20px' }} data-animate data-animate-delay="2">
            Every Revamply engagement begins with the REVAMP framework. This approach ensures that modernisation efforts focus on real operational improvements, not simply new technology.
          </p>
          <p style={{ fontSize: '18px', lineHeight: 1.8, color: 'var(--gray)' }} data-animate data-animate-delay="2">
            The framework provides a repeatable methodology that allows Revamply to redesign operational systems across multiple industries while tailoring solutions to each individual business.
          </p>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="cta-banner" id="cta">
        <div className="cta-banner__container">
          <h2 className="cta-banner__title" data-animate>
            A Modern Operating System<br /><span style={{ color: 'var(--green)' }}>for the Future</span>
          </h2>
          <p className="cta-banner__sub" data-animate data-animate-delay="1">
            Businesses that modernise their operational systems operate more efficiently, respond faster to customers, and create organisations that are easier to manage and scale. The REVAMP Method was created to help established businesses make that transition successfully.
          </p>
          <div data-animate data-animate-delay="2">
            <Link href="/assessment" className="btn btn-primary btn-lg">Start with an Operational Assessment</Link>
          </div>
        </div>
      </section>
    </>
  )
}
