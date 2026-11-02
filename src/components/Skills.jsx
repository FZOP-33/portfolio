import { useState } from 'react';
import { skillCategories } from '../data/skills';

/**
 * Skills Component
 * 
 * Demonstrates React concepts:
 * 1. Filtering with State: category tabs allow dynamic filtering of the skill grid.
 * 2. Nested Mapping: outer map iterates over categories, inner map iterates over skills.
 * 3. Honest UI: renders clear contextual tags (e.g. "Core Stack", "Active Focus")
 *    instead of fabricated percentage bars or arbitrary skill levels.
 */
export function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Filter categories based on user selection
  const filteredCategories = selectedCategory === 'all'
    ? skillCategories
    : skillCategories.filter((cat) => cat.id === selectedCategory);

  return (
    <section id="skills" className="section skills-section" aria-label="Technical Skills">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-badge">Technical Toolkit</span>
          <h2 className="section-title">Skills &amp; Capabilities</h2>
          <p className="section-subtitle">
            A grounded overview of my technical disciplines across web, mobile, server architectures, and applied AI.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="category-filters" role="tablist" aria-label="Filter skills by category">
          <button
            type="button"
            role="tab"
            aria-selected={selectedCategory === 'all'}
            className={`filter-pill ${selectedCategory === 'all' ? 'is-active' : ''}`}
            onClick={() => setSelectedCategory('all')}
          >
            All Disciplines
          </button>
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              role="tab"
              aria-selected={selectedCategory === cat.id}
              className={`filter-pill ${selectedCategory === cat.id ? 'is-active' : ''}`}
              onClick={() => setSelectedCategory(cat.id)}
            >
              {cat.title.split(' ')[0]} {/* Short category name */}
            </button>
          ))}
        </div>

        {/* Categorized Skills Grid */}
        <div className="skills-grid">
          {filteredCategories.map((category) => (
            <div key={category.id} className="skill-category-card">
              <div className="category-header">
                <div className="category-badge-wrapper">
                  <span className="category-icon-indicator" />
                  <h3 className="category-title">{category.title}</h3>
                </div>
                <p className="category-description">{category.description}</p>
              </div>

              <div className="skills-list">
                {category.skills.map((skill, index) => (
                  <div key={`${category.id}-skill-${index}`} className="skill-item">
                    <div className="skill-item-header">
                      <span className="skill-name">{skill.name}</span>
                      <span className={`skill-status-tag tag-${skill.status.toLowerCase().replace(/\s+/g, '-')}`}>
                        {skill.status}
                      </span>
                    </div>
                    <p className="skill-detail">{skill.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
