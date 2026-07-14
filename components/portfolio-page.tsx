'use client';

import { AnimatePresence, motion } from 'framer-motion';
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  Menu,
  Moon,
  Sun,
  X,
} from 'lucide-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';

import { AboutSection } from '@/components/about-section';
import { Button } from '@/components/ui/button';
import { CosmicBackground } from '@/components/cosmic-background';
import { ScrollIndicator } from '@/components/scroll-indicator';
import { SkillsSection } from '@/components/skills-section';
import { content, profile } from '@/data/content';
import { cn } from '@/lib/utils';

const reveal = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
};

export function PortfolioPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = window.localStorage.getItem('portfolio-theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldUseDark = storedTheme ? storedTheme === 'dark' : prefersDark;

    setDarkMode(shouldUseDark);
    document.documentElement.classList.toggle('dark', shouldUseDark);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  function toggleTheme() {
    const nextTheme = !darkMode;
    setDarkMode(nextTheme);
    document.documentElement.classList.toggle('dark', nextTheme);
    window.localStorage.setItem('portfolio-theme', nextTheme ? 'dark' : 'light');
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <>
      <CosmicBackground />
      <div className="relative z-[1] min-h-screen overflow-x-hidden text-ink">
      <header className={cn('site-nav', scrolled && 'site-nav-scrolled')}>
        <div className="site-container grid h-16 grid-cols-[1fr_auto_1fr] items-center">
          <a className="flex items-center gap-3 justify-self-start" href="#top" onClick={closeMenu} aria-label="Aarley Portfólio, home">
            <span className="text-sm font-semibold tracking-[-0.02em]">
              Aarley <span style={{ color: 'var(--accent-strong)' }}>Portfólio</span>
            </span>
          </a>

          <nav className="hidden items-center gap-7 justify-self-center lg:flex" aria-label="Primary navigation">
            {content.nav.map((item) => (
              <a className="nav-link" href={item.href} key={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-1.5 justify-self-end">
            <a className="social-nav-link hidden sm:inline-flex" href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <Github size={16} strokeWidth={1.8} />
            </a>
            <a className="social-nav-link hidden sm:inline-flex" href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <Linkedin size={16} strokeWidth={1.8} />
            </a>
            <button className="social-nav-link" type="button" onClick={toggleTheme} aria-label={content.theme}>
              {darkMode ? <Sun size={16} strokeWidth={1.8} /> : <Moon size={16} strokeWidth={1.8} />}
            </button>
            <Button className="ml-1 hidden sm:inline-flex" variant="secondary" size="sm" asChild>
              <a href="#contact">{content.resume}</a>
            </Button>
            <button
              className="social-nav-link lg:hidden"
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              aria-label={menuOpen ? content.closeMenu : content.menu}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {menuOpen ? (
            <motion.nav
              className="mobile-menu"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.18 }}
              aria-label="Mobile navigation"
            >
              {content.nav.map((item) => (
                <a href={item.href} key={item.href} onClick={closeMenu}>
                  {item.label}
                  <ArrowUpRight size={16} />
                </a>
              ))}
              <div className="mt-2 flex gap-3 border-t border-line pt-4">
                <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
                <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
              </div>
            </motion.nav>
          ) : null}
        </AnimatePresence>
      </header>

      <main id="top">
        <section className="site-container hero-section">
          <motion.div
            className="hero-copy"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="eyebrow hero-eyebrow">{content.hero.eyebrow}</span>
            <h1 className="hero-title">
              {content.hero.titleStart}
              <span className="hero-name">{content.hero.titleHighlight}</span>
            </h1>
            <p className="hero-supporting">
              {content.hero.supportingLines.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button variant="accent" asChild>
                <a href="#projects">{content.hero.primary}</a>
              </Button>
            </div>
          </motion.div>

          <ScrollIndicator />
        </section>

        <AboutSection />

        <SkillsSection />

        <section className="site-container section-block">
          <div className="product-list" id="projects">
            {content.products.items.map((product, index) => (
              <motion.article key={product.name} {...reveal} className="product-story">
                <div className="product-copy">
                  <span className="product-number">0{index + 1}</span>
                  <div>
                    <h3>{product.name}</h3>
                    <p className="product-subtitle">{product.subtitle}</p>
                  </div>
                  <p className="product-description">{product.description}</p>
                  <p className="product-description">{product.impact}</p>
                  <ul className="feature-list" aria-label={`${product.name} features`}>
                    {product.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                  <div className="tech-list" aria-label={`${product.name} technology stack`}>
                    {product.tech.map((tech) => <span key={tech}>{tech}</span>)}
                  </div>
                </div>
                <div className={`project-image-frame project-image-${product.imageClass}`}>
                  <Image
                    src={product.image}
                    alt={product.imageAlt}
                    fill
                    priority={index === 0}
                    sizes="(max-width: 1024px) 100vw, 68vw"
                    className="object-contain"
                  />
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="site-container contact-section" id="contact">
          <motion.div {...reveal}>
            <span className="eyebrow">{content.contact.eyebrow}</span>
            <h2>{content.contact.title}</h2>
            <p>{content.contact.description}</p>
            <div className="contact-links">
              <a href={`mailto:${profile.email}`}><Mail size={18} />{content.contact.email}<ArrowUpRight size={16} /></a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={18} />{content.contact.linkedin}<ArrowUpRight size={16} /></a>
              <a href={profile.github} target="_blank" rel="noreferrer"><Github size={18} />{content.contact.github}<ArrowUpRight size={16} /></a>
            </div>
          </motion.div>
        </section>
      </main>

      <footer className="site-container site-footer">
        <p>{content.footer.built}</p>
        <p>{content.footer.credit}</p>
      </footer>
      </div>
    </>
  );
}
