'use client'

import { useEffect, useRef } from 'react'

export default function Hero3D() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    let animationId: number
    let cleanupFn: (() => void) | undefined

    const init = async () => {
      const THREE = await import('three')
      const { EffectComposer } = await import('three/examples/jsm/postprocessing/EffectComposer.js')
      const { RenderPass } = await import('three/examples/jsm/postprocessing/RenderPass.js')
      const { UnrealBloomPass } = await import('three/examples/jsm/postprocessing/UnrealBloomPass.js')
      const { ShaderPass } = await import('three/examples/jsm/postprocessing/ShaderPass.js')

      const renderer = new THREE.WebGLRenderer({ canvas, antialias: true })
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
      renderer.toneMapping = THREE.ACESFilmicToneMapping
      renderer.toneMappingExposure = 1.1

      const scene = new THREE.Scene()
      const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1)

      const composer = new EffectComposer(renderer)
      composer.addPass(new RenderPass(scene, camera))

      const bloomPass = new UnrealBloomPass(
        new THREE.Vector2(512, 512),
        0.85,
        0.4,
        0.74
      )
      composer.addPass(bloomPass)

      const vignetteShader = {
        uniforms: {
          tDiffuse: { value: null },
          uDarkness: { value: 0.65 },
        },
        vertexShader: `
          varying vec2 vUv;
          void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }
        `,
        fragmentShader: `
          uniform sampler2D tDiffuse;
          uniform float uDarkness;
          varying vec2 vUv;
          void main() {
            vec4 col = texture2D(tDiffuse, vUv);
            vec2 uv  = vUv * 2.0 - 1.0;
            float v  = 1.0 - smoothstep(0.45, 1.35, length(uv * vec2(0.85, 1.0)));
            v = pow(v, uDarkness);
            gl_FragColor = vec4(col.rgb * v, col.a);
          }
        `,
      }
      composer.addPass(new ShaderPass(vignetteShader))

      const parallaxMat = new THREE.ShaderMaterial({
        uniforms: {
          uMap: { value: null },
          uSmooth: { value: new THREE.Vector2(0, 0) },
          uStrength: { value: 0.055 },
          uAberr: { value: 0.0 },
        },
        vertexShader: `
          varying vec2 vUv;
          void main() { vUv = uv; gl_Position = vec4(position, 1.0); }
        `,
        fragmentShader: `
          uniform sampler2D uMap;
          uniform vec2  uSmooth;
          uniform float uStrength;
          uniform float uAberr;
          varying vec2 vUv;

          void main() {
            vec4  depthSample = texture2D(uMap, vUv);
            float depth = dot(depthSample.rgb, vec3(0.2126, 0.7152, 0.0722));
            depth = pow(depth, 0.7);

            vec2 offset = -uSmooth * depth * uStrength;
            vec2 pUv    = vUv + offset;

            float r = texture2D(uMap, pUv + vec2( uAberr, 0.0)).r;
            float g = texture2D(uMap, pUv).g;
            float b = texture2D(uMap, pUv - vec2( uAberr, 0.0)).b;

            vec3 col = vec3(r, g, b);

            float lum = dot(col, vec3(0.2126, 0.7152, 0.0722));
            col += col * pow(lum, 3.0) * 1.2;

            gl_FragColor = vec4(col, 1.0);
          }
        `,
      })

      scene.add(new THREE.Mesh(new THREE.PlaneGeometry(2, 2), parallaxMat))

      new THREE.TextureLoader().load('/hero-bg.jpg', (tex) => {
        tex.colorSpace = THREE.SRGBColorSpace
        parallaxMat.uniforms.uMap.value = tex
      })

      const resize = () => {
        const w = canvas.clientWidth
        const h = canvas.clientHeight
        renderer.setSize(w, h, false)
        composer.setSize(w, h)
        bloomPass.resolution.set(w, h)
      }
      resize()
      window.addEventListener('resize', resize)

      const rawMouse = { x: 0, y: 0 }
      const smoothMouse = { x: 0, y: 0 }

      const handleMouseMove = (e: MouseEvent) => {
        const r = canvas.getBoundingClientRect()
        rawMouse.x = ((e.clientX - r.left) / r.width - 0.5) * 2
        rawMouse.y = -((e.clientY - r.top) / r.height - 0.5) * 2
      }
      window.addEventListener('mousemove', handleMouseMove)

      const animate = () => {
        animationId = requestAnimationFrame(animate)
        smoothMouse.x += (rawMouse.x - smoothMouse.x) * 0.055
        smoothMouse.y += (rawMouse.y - smoothMouse.y) * 0.055
        parallaxMat.uniforms.uSmooth.value.set(smoothMouse.x, smoothMouse.y)
        parallaxMat.uniforms.uAberr.value =
          Math.sqrt(smoothMouse.x ** 2 + smoothMouse.y ** 2) * 0.004
        composer.render()
      }
      animate()

      cleanupFn = () => {
        cancelAnimationFrame(animationId)
        window.removeEventListener('resize', resize)
        window.removeEventListener('mousemove', handleMouseMove)
        renderer.dispose()
      }
    }

    init()

    return () => {
      if (cleanupFn) cleanupFn()
      else cancelAnimationFrame(animationId)
    }
  }, [])

  return <canvas ref={canvasRef} id="hero-canvas" />
}
