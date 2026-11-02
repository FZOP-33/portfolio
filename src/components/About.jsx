import { profileData } from '../data/profile';

/**
 * About Component
 *
 * Presents Mohamed Diarra's professional portrait (head-and-shoulders framing),
 * verified engineering identity, narrative background, and software delivery principles.
 */
export function About() {
  const { about, role, location, contact, portraitMeta } = profileData;
  const customAvatar = profileData.avatarUrl || null;

  return (
    <section id="about" className="section about-section" aria-label="About Me">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-badge">Background &amp; Approach</span>
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            {about.tagline}
          </p>
        </div>

        <div className="about-grid">
          {/* Left Column: Professional Portrait & Quick Info Card */}
          <div className="about-card-wrapper">
            <div className="about-profile-card">
              <div className="avatar-frame">
                {customAvatar ? (
                  <div className="avatar-portrait-shell">
                    <img
                      src={customAvatar}
                      alt={portraitMeta?.alt || `${profileData.name} — Portrait`}
                      width={224}
                      height={280}
                      loading="lazy"
                      decoding="async"
                      className="avatar-portrait-image"
                    />
                  </div>
                ) : (
                  <div className="avatar-monogram" aria-label="Developer avatar placeholder">
                    <span className="monogram-text">MD</span>
                    <span className="monogram-sub">Dev</span>
                  </div>
                )}
                <div className="avatar-status-pill" title="Current Availability">
                  <span className="status-indicator"></span>
                  <span>Open to Freelance &amp; Remote</span>
                </div>
              </div>

              <div className="profile-card-content">
                <h3 className="profile-card-name">{profileData.name}</h3>
                <p className="profile-card-role">{role}</p>
                <p className="profile-card-location">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  {location}
                </p>

                <div className="profile-stats-grid">
                  <div className="stat-item">
                    <span className="stat-label">Core Backend</span>
                    <span className="stat-value">Python / Django</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-label">Mobile UI</span>
                    <span className="stat-value">Flutter / Dart</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-label">Frontend</span>
                    <span className="stat-value">React &bull; JS</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-label">Next Horizon</span>
                    <span className="stat-value">Applied AI</span>
                  </div>
                </div>

                {/* Verified Professional Profiles Row */}
                <div className="profile-social-proof">
                  {contact?.hasRealLinkedin && contact.linkedin && (
                    <a
                      href={contact.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="profile-social-pill"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77Z" />
                      </svg>
                      <span>LinkedIn</span>
                    </a>
                  )}
                  {contact?.hasRealGithub && contact.github && (
                    <a
                      href={contact.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="profile-social-pill"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z" />
                      </svg>
                      <span>GitHub</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative Story & Engineering Principles */}
          <div className="about-text-content">
            <div className="narrative-block">
              {about.paragraphs.map((paragraph, index) => (
                <p key={`p-${index}`} className="narrative-paragraph">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Principles / Approach Cards */}
            <div className="principles-container">
              <h3 className="principles-title">How I Approach Software Delivery</h3>
              <div className="principles-grid">
                {about.principles.map((principle, index) => (
                  <div key={`principle-${index}`} className="principle-card">
                    <div className="principle-number">0{index + 1}</div>
                    <div className="principle-info">
                      <h4 className="principle-heading">{principle.title}</h4>
                      <p className="principle-desc">{principle.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
