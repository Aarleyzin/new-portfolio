'use client';

import { useEffect, useMemo, useRef } from 'react';

interface BrightStar {
  top: string;
  left: string;
  size: number;
  duration: number;
  delay: number;
  minOpacity: number;
  maxOpacity: number;
  glow?: boolean;
}

interface ShootingStar {
  top: string;
  left: string;
  angle: number;
  distX: number;
  distY: number;
  duration: number;
  delay: number;
}

const brightStars: BrightStar[] = [
  { top: '9%', left: '18%', size: 3, duration: 8, delay: 0, minOpacity: 0.55, maxOpacity: 0.9, glow: true },
  { top: '24%', left: '78%', size: 3, duration: 10.5, delay: 2.2, minOpacity: 0.5, maxOpacity: 0.85, glow: true },
  { top: '52%', left: '32%', size: 2.5, duration: 7, delay: 4.6, minOpacity: 0.5, maxOpacity: 0.8 },
  { top: '68%', left: '88%', size: 3, duration: 11.5, delay: 1.4, minOpacity: 0.5, maxOpacity: 0.85, glow: true },
  { top: '81%', left: '15%', size: 2.5, duration: 9.2, delay: 3.8, minOpacity: 0.5, maxOpacity: 0.8 },
  { top: '38%', left: '58%', size: 2.5, duration: 6.5, delay: 5.5, minOpacity: 0.5, maxOpacity: 0.8 },
  { top: '15%', left: '45%', size: 2.5, duration: 9.6, delay: 1.9, minOpacity: 0.5, maxOpacity: 0.8 },
  { top: '46%', left: '8%', size: 2.5, duration: 8.4, delay: 4.1, minOpacity: 0.5, maxOpacity: 0.8, glow: true },
  { top: '73%', left: '48%', size: 2.5, duration: 10.8, delay: 0.7, minOpacity: 0.5, maxOpacity: 0.8 },
  { top: '90%', left: '70%', size: 2.5, duration: 7.8, delay: 3.1, minOpacity: 0.5, maxOpacity: 0.8 },
];

const shootingStars: ShootingStar[] = [
  { top: '14%', left: '68%', angle: -32, distX: 160, distY: 100, duration: 24, delay: 3 },
  { top: '55%', left: '12%', angle: -18, distX: 130, distY: 60, duration: 33, delay: 12 },
  { top: '30%', left: '40%', angle: -42, distX: 150, distY: 130, duration: 39, delay: 20 },
];

function seededRandom(seed: number) {
  let s = seed % 2147483647;
  if (s <= 0) s += 2147483646;
  return () => {
    s = (s * 16807) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

function generateStarLayer(count: number, seed: number, size: number, opacity: number) {
  const rand = seededRandom(seed);
  const layers: string[] = [];
  for (let i = 0; i < count; i += 1) {
    const x = (rand() * 100).toFixed(2);
    const y = (rand() * 100).toFixed(2);
    const o = (opacity + (rand() - 0.5) * 0.1).toFixed(2);
    layers.push(`radial-gradient(circle, rgba(255,255,255,${o}), rgba(255,255,255,${o})) ${x}% ${y}% / ${size}px ${size}px no-repeat`);
  }
  return layers.join(', ');
}

export function CosmicBackground() {
  const fieldRef = useRef<HTMLDivElement>(null);
  const starsRef = useRef<HTMLDivElement>(null);

  const tinyField = useMemo(() => generateStarLayer(70, 7, 1.5, 0.35), []);
  const smallField = useMemo(() => generateStarLayer(34, 42, 2.5, 0.55), []);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    let ticking = false;

    function handleScroll() {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        if (fieldRef.current) {
          fieldRef.current.style.transform = `translateY(${y * -0.015}px)`;
        }
        if (starsRef.current) {
          starsRef.current.style.transform = `translateY(${y * -0.03}px)`;
        }
        ticking = false;
      });
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="cosmic-bg" aria-hidden="true">
      <div ref={fieldRef} className="cosmic-layer">
        <div className="star-field-tiny" style={{ background: tinyField }} />
        <div className="star-field-small" style={{ background: smallField }} />
      </div>

      <div ref={starsRef} className="cosmic-layer">
        {brightStars.map((star, index) => (
          <span
            key={index}
            className={star.glow ? 'cosmic-star cosmic-star-glow' : 'cosmic-star'}
            style={{
              top: star.top,
              left: star.left,
              width: star.size,
              height: star.size,
              animationDuration: `${star.duration}s`,
              animationDelay: `${star.delay}s`,
              ['--star-min' as string]: star.minOpacity,
              ['--star-max' as string]: star.maxOpacity,
            }}
          />
        ))}
        {shootingStars.map((shot, index) => (
          <span
            key={index}
            className="shooting-star"
            style={{
              top: shot.top,
              left: shot.left,
              animationDuration: `${shot.duration}s`,
              animationDelay: `${shot.delay}s`,
              ['--angle' as string]: `${shot.angle}deg`,
              ['--dist-x' as string]: `${shot.distX}px`,
              ['--dist-y' as string]: `${shot.distY}px`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
