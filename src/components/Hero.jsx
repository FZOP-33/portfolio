import { profileData } from '../data/profile';

/**
 * Hero Component
 * 
 * Demonstrates React concepts:
 * 1. Props & Centralized Data: Uses profileData for consistent messaging.
 * 2. Visual Architecture Composition: A refined, CSS-driven engineering diagram
 *    showcasing full-stack and mobile capabilities without raw code dumps.
 * 3. Semantic Layout: Accessible CTA links, clean touch targets, and mobile-friendly stacking.
 */
export function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
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
    <section id="home" className="hero-section" aria-label="Introduction">
      <div className="hero-container">
        {/* Left Column: Headline and Pitch */}
        <div className="hero-content">
          {/* Personal Recruiter-Facing Identity Pill */}
          <button
            type="button"
            className="hero-identity-pill"
            onClick={() => scrollTo('about')}
            aria-label={`Meet ${profileData.name} — View About Me`}
          >
            <span className="hero-avatar-ring">
              <img
                src={profileData.avatarSquareUrl || profileData.avatarUrl}
                alt={profileData.portraitMeta?.alt || profileData.name}
                width={52}
                height={52}
                className="hero-avatar-img"
              />
              <span className="hero-avatar-status" aria-hidden="true"></span>
            </span>
            <span className="hero-identity-meta">
              <span className="hero-identity-name">{profileData.name}</span>
              <span className="hero-identity-sub">
                Software Development &bull; Applied AI &bull; Remote Ready
              </span>
            </span>
          </button>

          <h1 className="hero-title">
            <span className="hero-title-highlight">Software Engineer</span>
            <br />
            <span className="hero-title-sub">&amp; AI Enthusiast</span>
          </h1>

          <p className="hero-description">
            {profileData.supportingStatement}
          </p>

          <div className="hero-cta-group">
            <button
              type="button"
              className="btn btn-primary btn-lg"
              onClick={() => scrollTo('projects')}
            >
              Explore My Projects
              <svg 
                className="btn-icon" 
                width="18" 
                height="18" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </button>

            <button
              type="button"
              className="btn btn-secondary btn-lg"
              onClick={() => scrollTo('contact')}
            >
              Let's Work Together
            </button>
          </div>

          {/* Core Competencies Quick-Tags */}
          <div className="hero-tags-wrapper">
            <span className="hero-tags-label">Key Focus Areas:</span>
            <div className="hero-tags">
              <span className="tech-chip">Python &amp; Django</span>
              <span className="tech-chip">Flutter &amp; Dart</span>
              <span className="tech-chip">React</span>
              <span className="tech-chip">SQL</span>
              <span className="tech-chip">Applied AI Workflows</span>
            </div>
          </div>
        </div>

        {/* Right Column: Visual Software Engineering & Architecture Card */}
        <div className="hero-visual">
          <div className="tech-composition-card">
            {/* Visual Card Header */}
            <div className="composition-header">
              <div className="composition-badge">
                <span className="composition-dot"></span>
                <span>Systems &bull; Multi-Platform</span>
              </div>
              <span className="composition-label">Architecture</span>
            </div>

            {/* Architecture Stack Layers */}
            <div className="architecture-stack">
              {/* Layer 1: Frontend & Mobile */}
              <div className="stack-layer layer-client">
                <div className="layer-tag">Client &amp; Interface</div>
                <div className="layer-content">
                  <div className="layer-pill">
                    <span className="pill-dot pill-cyan"></span>
                    <strong>React</strong>
                    <span className="pill-sub">Web UI</span>
                  </div>
                  <div className="layer-pill">
                    <span className="pill-dot pill-blue"></span>
                    <strong>Flutter &amp; Dart</strong>
                    <span className="pill-sub">Mobile Apps</span>
                  </div>
                </div>
              </div>

              {/* Data Flow Indicator */}
              <div className="stack-connector">
                <span className="connector-line"></span>
                <span className="connector-badge">REST APIs &bull; JSON</span>
                <span className="connector-line"></span>
              </div>

              {/* Layer 2: Backend & Logic */}
              <div className="stack-layer layer-backend">
                <div className="layer-tag">Backend &amp; Business Logic</div>
                <div className="layer-content">
                  <div className="layer-pill">
                    <span className="pill-dot pill-indigo"></span>
                    <strong>Python</strong>
                    <span className="pill-sub">Core Language</span>
                  </div>
                  <div className="layer-pill">
                    <span className="pill-dot pill-emerald"></span>
                    <strong>Django</strong>
                    <span className="pill-sub">ORM &amp; Services</span>
                  </div>
                </div>
              </div>

              {/* Data Flow Indicator */}
              <div className="stack-connector">
                <span className="connector-line"></span>
                <span className="connector-badge">Data Layer &bull; Analytics</span>
                <span className="connector-line"></span>
              </div>

              {/* Layer 3: Databases & Applied AI */}
              <div className="stack-layer layer-data">
                <div className="layer-tag">Persistence &amp; AI Integration</div>
                <div className="layer-content">
                  <div className="layer-pill">
                    <span className="pill-dot pill-amber"></span>
                    <strong>Relational SQL</strong>
                    <span className="pill-sub">PostgreSQL / SQLite</span>
                  </div>
                  <div className="layer-pill">
                    <span className="pill-dot pill-purple"></span>
                    <strong>Applied AI</strong>
                    <span className="pill-sub">Workflows &amp; OCR</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual Card Footer */}
            <div className="composition-footer">
              <div className="composition-feature-item">
                <span className="feature-icon">&#10003;</span>
                <span>Practical Solutions</span>
              </div>
              <div className="composition-feature-item">
                <span className="feature-icon">&#10003;</span>
                <span>Clean Architecture</span>
              </div>
              <div className="composition-feature-item">
                <span className="feature-icon">&#10003;</span>
                <span>Continuous Growth</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
