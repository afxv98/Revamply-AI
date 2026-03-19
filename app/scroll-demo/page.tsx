'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'

const TOTAL_FRAMES = 600

const SCENES = [
  { id: 0, eyebrow: 'Revamply',      title: <>Enter the<br /><span>System</span></>,                          sub: null,                                                                                       start: 0,   end: 55  },
  { id: 1, eyebrow: 'The Problem',   title: <>Your Business Is Running on<br /><span>Outdated Infrastructure</span></>, sub: 'Manual workflows. Disconnected tools. Processes that only the owner understands.', start: 75,  end: 145 },
  { id: 2, eyebrow: 'The Solution',  title: <>We Rebuild the<br /><span>Operating System</span></>,           sub: 'Intelligent automation. Connected systems. A business that runs without you.',              start: 170, end: 235 },
  { id: 3, eyebrow: 'Ready?',        title: <>Modernize Your<br /><span>Operations</span></>,                 sub: null,                                                                                       cta: true, start: 260, end: 299 },
]

function pad(n: number) {
  return String(n).padStart(3, '0')
}

export default function ScrollDemoPage() {
  const canvasRef   = useRef<HTMLCanvasElement>(null)
  const stageRef    = useRef<HTMLDivElement>(null)
  const hintRef     = useRef<HTMLDivElement>(null)
  const sceneRefs   = useRef<(HTMLDivElement | null)[]>([])
  const loaderRef   = useRef<HTMLDivElement>(null)
  const barRef      = useRef<HTMLDivElement>(null)
  const pctRef      = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const canvas  = canvasRef.current!
    const ctx     = canvas.getContext('2d')!
    const stage   = stageRef.current!
    const hint    = hintRef.current!
    const loader  = loaderRef.current!

    const frames: HTMLImageElement[] = []
    let loaded       = 0
    let currentFrame = 0
    let displayFrame = 0
    let rafId: number

    function resize() {
      canvas.width  = window.innerWidth
      canvas.height = window.innerHeight
      drawFrame(Math.round(displayFrame))
    }

    function drawFrame(idx: number) {
      idx = Math.max(0, Math.min(TOTAL_FRAMES - 1, Math.round(idx)))
      const img = frames[idx]
      if (!img?.complete || !img.naturalWidth) return
      const cw = canvas.width, ch = canvas.height
      const iw = img.width,    ih = img.height
      const scale = Math.max(cw / iw, ch / ih)
      const dx = (cw - iw * scale) / 2
      const dy = (ch - ih * scale) / 2
      ctx.drawImage(img, dx, dy, iw * scale, ih * scale)
    }

    function updateScenes(f: number) {
      SCENES.forEach((s, i) => {
        const el = sceneRefs.current[i]
        if (!el) return
        const inRange = f >= s.start && f <= s.end
        const fadeLen = 8
        let alpha = 1
        if (f < s.start + fadeLen) alpha = (f - s.start) / fadeLen
        if (f > s.end   - fadeLen) alpha = (s.end - f)   / fadeLen
        alpha = Math.max(0, Math.min(1, alpha))
        el.style.opacity       = inRange ? String(alpha) : '0'
        el.style.pointerEvents = inRange && alpha > 0.5 ? 'auto' : 'none'
      })
    }

    function onScroll() {
      const rect    = stage.getBoundingClientRect()
      const total   = stage.offsetHeight - window.innerHeight
      const scrolled = -rect.top
      const progress = Math.max(0, Math.min(1, scrolled / total))
      currentFrame = progress * (TOTAL_FRAMES - 1)
      if (scrolled > 60) hint.classList.remove('visible')
    }

    function tick() {
      rafId = requestAnimationFrame(tick)
      displayFrame += (currentFrame - displayFrame) * 0.12
      drawFrame(Math.round(displayFrame))
      updateScenes(displayFrame)
    }

    function loadFrames() {
      return new Promise<void>(resolve => {
        for (let i = 0; i < TOTAL_FRAMES; i++) {
          const img = new Image()
          img.src = `/frames/frame_${pad(i)}.jpg`
          img.onload = () => {
            loaded++
            const pct = Math.round((loaded / TOTAL_FRAMES) * 100)
            if (barRef.current) barRef.current.style.width = pct + '%'
            if (pctRef.current) pctRef.current.textContent = pct + '%'
            if (loaded === TOTAL_FRAMES) resolve()
          }
          frames[i] = img
        }
      })
    }

    resize()
    window.addEventListener('resize', resize)
    window.addEventListener('scroll', onScroll, { passive: true })

    loadFrames().then(() => {
      loader.style.opacity = '0'
      setTimeout(() => {
        loader.style.display = 'none'
        hint.classList.add('visible')
      }, 700)
      drawFrame(0)
      tick()
    })

    return () => {
      window.removeEventListener('resize', resize)
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <>
      <style>{`
        .sd-loader {
          position: fixed; inset: 0; z-index: 1000;
          background: #000804;
          display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 20px;
          transition: opacity .6s ease;
        }
        .sd-loader__label { font-size: 12px; letter-spacing: 3px; text-transform: uppercase; color: rgba(255,255,255,0.35); }
        .sd-loader__bar-wrap { width: 220px; height: 2px; background: rgba(255,255,255,0.08); border-radius: 2px; overflow: hidden; }
        .sd-loader__bar { height: 100%; width: 0%; background: #05ed99; box-shadow: 0 0 12px #05ed99; border-radius: 2px; transition: width .1s linear; }
        .sd-loader__pct { font-size: 11px; color: rgba(5,237,153,0.6); font-variant-numeric: tabular-nums; }

        .sd-stage { position: relative; height: calc(100vh + 6000px); }

        .sd-sticky { position: sticky; top: 0; height: 100vh; width: 100%; overflow: hidden; }

        .sd-canvas { display: block; width: 100%; height: 100%; object-fit: cover; }

        .sd-scene {
          position: absolute; inset: 0;
          display: flex; flex-direction: column; align-items: center; justify-content: center;
          pointer-events: none; opacity: 0; transition: opacity .05s;
        }
        .sd-scene::after {
          content: ''; position: absolute; inset: 0;
          background: radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.5) 100%);
          z-index: -1;
        }
        .sd-scene__eyebrow { font-size: 11px; font-weight: 700; letter-spacing: 3px; text-transform: uppercase; color: #05ed99; margin-bottom: 20px; opacity: .85; }
        .sd-scene__title {
          font-size: clamp(36px, 6vw, 80px); font-weight: 800; letter-spacing: -2.5px; line-height: 1.04;
          color: #fff; text-align: center; text-shadow: 0 0 80px rgba(5,237,153,0.25); max-width: 900px;
        }
        .sd-scene__title span { color: #05ed99; }
        .sd-scene__sub { margin-top: 20px; font-size: 16px; color: rgba(255,255,255,0.45); max-width: 520px; text-align: center; line-height: 1.6; }
        .sd-scene__cta {
          margin-top: 36px; display: inline-flex; align-items: center; gap: 10px;
          background: #05ed99; color: #000; font-weight: 700; font-size: 14px;
          padding: 14px 28px; border-radius: 100px; text-decoration: none; pointer-events: all;
          box-shadow: 0 0 40px rgba(5,237,153,0.35); transition: transform .2s, box-shadow .2s;
        }
        .sd-scene__cta:hover { transform: scale(1.04); box-shadow: 0 0 60px rgba(5,237,153,0.55); }

        .sd-hint { position: absolute; bottom: 36px; left: 50%; transform: translateX(-50%); display: flex; flex-direction: column; align-items: center; gap: 8px; opacity: 0; transition: opacity .3s; pointer-events: none; }
        .sd-hint.visible { opacity: 1; }
        .sd-hint__text { font-size: 10px; letter-spacing: 2.5px; text-transform: uppercase; color: rgba(255,255,255,0.3); }
        .sd-hint__arrow { width: 1px; height: 40px; background: linear-gradient(to bottom, rgba(5,237,153,0.6), transparent); animation: sdArrow 1.5s ease-in-out infinite; }
        @keyframes sdArrow { 0% { transform: scaleY(1) translateY(0); opacity: 1; } 100% { transform: scaleY(1) translateY(12px); opacity: 0; } }

        .sd-after { background: #000804; padding: 120px 40px; text-align: center; }
        .sd-after h2 { font-size: clamp(32px, 5vw, 60px); font-weight: 800; letter-spacing: -2px; margin-bottom: 20px; color: #fff; }
        .sd-after h2 span { color: #05ed99; }
        .sd-after p { font-size: 17px; color: rgba(255,255,255,0.45); max-width: 520px; margin: 0 auto 40px; line-height: 1.6; }
        .sd-after a { display: inline-block; background: #05ed99; color: #000; font-weight: 700; padding: 14px 32px; border-radius: 100px; text-decoration: none; font-size: 14px; }
      `}</style>

      {/* Loader */}
      <div ref={loaderRef} className="sd-loader">
        <div className="sd-loader__label">Initialising</div>
        <div className="sd-loader__bar-wrap">
          <div ref={barRef} className="sd-loader__bar" />
        </div>
        <div ref={pctRef} className="sd-loader__pct">0%</div>
      </div>

      {/* Scroll Stage */}
      <div ref={stageRef} className="sd-stage">
        <div className="sd-sticky">
          <canvas ref={canvasRef} className="sd-canvas" />

          {SCENES.map((s, i) => (
            <div
              key={s.id}
              ref={el => { sceneRefs.current[i] = el }}
              className="sd-scene"
            >
              <div className="sd-scene__eyebrow">{s.eyebrow}</div>
              <h2 className="sd-scene__title">{s.title}</h2>
              {s.sub && <p className="sd-scene__sub">{s.sub}</p>}
              {s.cta && (
                <Link href="/#contact" className="sd-scene__cta">
                  Book a Discovery Call →
                </Link>
              )}
            </div>
          ))}

          <div ref={hintRef} className="sd-hint">
            <div className="sd-hint__text">Scroll</div>
            <div className="sd-hint__arrow" />
          </div>
        </div>
      </div>

      {/* After section */}
      <div className="sd-after">
        <h2>Modern Operating Systems<br /><span>for Established Businesses</span></h2>
        <p>Revamply helps profitable, established companies modernize the workflows and systems that power their operations.</p>
        <Link href="/">Explore Revamply →</Link>
      </div>
    </>
  )
}
