'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

import { content } from '@/data/content';
import { cn } from '@/lib/utils';

type Filter = (typeof content.skills.filters)[number];

export function SkillsSection() {
  const [activeFilter, setActiveFilter] = useState<Filter>('All');

  const filteredItems =
    activeFilter === 'All'
      ? content.skills.items
      : content.skills.items.filter((item) => item.category === activeFilter);

  return (
    <section className="skills-band" id="skills">
      <div className="site-container section-block">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="skills-head"
        >
          <h2 className="skills-title">
            {content.skills.title}
            <span className="skills-highlight">{content.skills.highlight}</span>
          </h2>
        </motion.div>

        <div className="skills-filters" role="tablist" aria-label="Filter technologies by category">
          {content.skills.filters.map((filter) => (
            <button
              key={filter}
              type="button"
              role="tab"
              aria-selected={activeFilter === filter}
              className={cn('skills-filter', activeFilter === filter && 'skills-filter-active')}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        <motion.div layout className="skills-grid-new">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.name}
                layout
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                className="skills-card"
              >
                {item.name}
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
