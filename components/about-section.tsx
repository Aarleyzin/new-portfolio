'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Brain, Code2, Sprout } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { content } from '@/data/content';

const icons = { Code2, Brain, Sprout };

function easeInOutQuad(t: number) {
  return t < 0.5 ? 2 * t * t : 1 - (-2 * t + 2) ** 2 / 2;
}

function smoothScrollToId(id: string, duration: number) {
  const target = document.getElementById(id);
  if (!target) return;

  const offset = parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop) || 0;
  const startY = window.scrollY;
  const targetY = target.getBoundingClientRect().top + startY - offset;
  const diff = targetY - startY;
  const startTime = performance.now();

  function step(now: number) {
    const progress = Math.min((now - startTime) / duration, 1);
    window.scrollTo(0, startY + diff * easeInOutQuad(progress));
    if (progress < 1) requestAnimationFrame(step);
  }

  requestAnimationFrame(step);
}

export function AboutSection() {
  return (
    <section className="site-container about-section" id="about">
      <h2 className="about-title">
        {content.about.titleStart}
        <span className="about-highlight">{content.about.highlight}</span>
      </h2>

      <div className="about-grid">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="about-copy"
        >
          <div className="about-paragraphs">
            <h3 className="about-role">{content.about.role}</h3>
            {content.about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <Button className="about-contact-btn" variant="accent" asChild>
            <a
              href="#contact"
              onClick={(event) => {
                event.preventDefault();
                smoothScrollToId('contact', 700);
              }}
            >
              Contact Me
              <ArrowDown size={16} />
            </a>
          </Button>
        </motion.div>

        <div className="about-cards">
          {content.about.cards.map((card, index) => {
            const Icon = icons[card.icon as keyof typeof icons];
            return (
              <motion.article
                key={card.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="about-card"
              >
                <span className="about-card-icon">
                  <Icon size={20} strokeWidth={1.8} />
                </span>
                <div className="about-card-text">
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
