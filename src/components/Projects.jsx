import { useState } from 'react';
import { projectsData, projectCategories } from '../data/projects';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';

/**
 * Projects Section Component
 *
 * Showcases major software engineering projects:
 * - Presentation of SuguAI and AutoSOS Mali with real screenshots & video demos
 * - Dynamic category filtering
 * - Deep-dive interactive presentation modal supporting direct entry to Overview,
 *   Video Walkthroughs, or individual Lightbox screens
 */
export function Projects() {
  const [selectedCategory, setSelectedCategory] = useState(projectCategories[0] || 'All Projects');
  const [modalState, setModalState] = useState({
    project: null,
    initialTab: 'overview',
    initialScreenshotId: null,
    openKey: 0
  });

  // Filter projects by category
  const filteredProjects = (selectedCategory === 'All Projects')
    ? projectsData
    : projectsData.filter((p) => p.category === selectedCategory);

  const handleOpenDetails = (project, options = {}) => {
    setModalState((prev) => ({
      project,
      initialTab: options.tab || 'overview',
      initialScreenshotId: options.screenshotId || null,
      openKey: prev.openKey + 1
    }));
  };

  const handleCloseModal = () => {
    setModalState((prev) => ({
      ...prev,
      project: null,
      initialScreenshotId: null
    }));
  };

  const handleContactClick = () => {
    const el = document.getElementById('contact');
    if (el) {
      const navHeight = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="projects" className="section projects-section" aria-label="Featured Projects & Solutions">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-badge">Featured Engineering</span>
          <h2 className="section-title">Flagship Projects &amp; Solutions</h2>
          <p className="section-subtitle">
            Full-stack software engineered to solve real-world operational challenges: explore real interfaces, multi-screen workflows, and live video walkthroughs below.
          </p>
        </div>

        {/* Category Filters */}
        <div className="category-filters" role="tablist" aria-label="Filter projects by category">
          {projectCategories.map((cat) => (
            <button
              key={cat}
              type="button"
              role="tab"
              aria-selected={selectedCategory === cat}
              className={`filter-pill ${selectedCategory === cat ? 'is-active' : ''}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenDetails={handleOpenDetails}
            />
          ))}
        </div>

        {/* Engineering Rigor Callout */}
        <div className="projects-info-callout">
          <div className="info-callout-icon" aria-hidden="true">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            </svg>
          </div>
          <div className="info-callout-text">
            <h4>Full-Stack Architecture &amp; Applied Artificial Intelligence</h4>
            <p>
              Every project is built with a focus on operational robustness: relational integrity with Django, responsive multi-platform interfaces with Flutter, offline-first continuity, and targeted AI models designed to deliver measurable user value.
            </p>
          </div>
        </div>

        {/* Detail Modal */}
        <ProjectModal
          key={`${modalState.project?.id || 'closed'}-${modalState.openKey}`}
          project={modalState.project}
          initialTab={modalState.initialTab}
          initialScreenshotId={modalState.initialScreenshotId}
          onClose={handleCloseModal}
          onContactClick={handleContactClick}
        />
      </div>
    </section>
  );
}
