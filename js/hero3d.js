// ============================================
// REVAMPLY — Hero 2.5D Parallax Effect
// ============================================

import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass }     from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { ShaderPass }     from 'three/addons/postprocessing/ShaderPass.js';

const canvas = document.getElementById('hero-canvas');
if (!canvas) throw new Error('hero-canvas not found');

const IMG = 'black-honeycomb-hexagon-with-blue-glowing-neon-lighting-background-sci-fi-and-science-technology-concept-3d-illustration-rendering-photo.jpg';

const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.1;

const scene  = new THREE.Scene();
const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

// ---- Post-processing ----
const composer = new EffectComposer(renderer);
composer.addPass(new RenderPass(scene, camera));

const bloomPass = new UnrealBloomPass(
  new THREE.Vector2(512, 512),
  0.85,  // strength
  0.4,   // radius
  0.74   // threshold — only cyan-bright pixels glow
);
composer.addPass(bloomPass);

// Vignette pass
const vignetteShader = {
  uniforms: {
    tDiffuse:  { value: null },
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
  `
};
composer.addPass(new ShaderPass(vignetteShader));

// ---- Parallax shader plane ----
const parallaxMat = new THREE.ShaderMaterial({
  uniforms: {
    uMap:      { value: null },
    uSmooth:   { value: new THREE.Vector2(0, 0) },
    uStrength: { value: 0.055 },
    uAberr:    { value: 0.0 },
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
      // Depth from luminance — bright cyan = closest
      vec4  depthSample = texture2D(uMap, vUv);
      float depth = dot(depthSample.rgb, vec3(0.2126, 0.7152, 0.0722));
      depth = pow(depth, 0.7);

      // Parallax UV shift
      vec2 offset = -uSmooth * depth * uStrength;
      vec2 pUv    = vUv + offset;

      // Chromatic aberration
      float r = texture2D(uMap, pUv + vec2( uAberr, 0.0)).r;
      float g = texture2D(uMap, pUv).g;
      float b = texture2D(uMap, pUv - vec2( uAberr, 0.0)).b;

      vec3 col = vec3(r, g, b);

      // Boost glow on bright areas
      float lum = dot(col, vec3(0.2126, 0.7152, 0.0722));
      col += col * pow(lum, 3.0) * 1.2;

      gl_FragColor = vec4(col, 1.0);
    }
  `
});

scene.add(new THREE.Mesh(new THREE.PlaneGeometry(2, 2), parallaxMat));

// ---- Load texture ----
new THREE.TextureLoader().load(IMG, tex => {
  tex.colorSpace = THREE.SRGBColorSpace;
  parallaxMat.uniforms.uMap.value = tex;
});

// ---- Resize ----
function resize() {
  const w = canvas.clientWidth, h = canvas.clientHeight;
  renderer.setSize(w, h, false);
  composer.setSize(w, h);
  bloomPass.resolution.set(w, h);
}
resize();
window.addEventListener('resize', resize);

// ---- Mouse tracking ----
const rawMouse    = new THREE.Vector2();
const smoothMouse = new THREE.Vector2();

// Track globally so the effect activates even when cursor is near
window.addEventListener('mousemove', e => {
  const r = canvas.getBoundingClientRect();
  rawMouse.x =  ((e.clientX - r.left) / r.width  - 0.5) * 2;
  rawMouse.y = -((e.clientY - r.top)  / r.height - 0.5) * 2;
});

// ---- Animate ----
function animate() {
  requestAnimationFrame(animate);

  smoothMouse.x += (rawMouse.x - smoothMouse.x) * 0.055;
  smoothMouse.y += (rawMouse.y - smoothMouse.y) * 0.055;

  parallaxMat.uniforms.uSmooth.value.copy(smoothMouse);
  parallaxMat.uniforms.uAberr.value = smoothMouse.length() * 0.004;

  composer.render();
}
animate();
