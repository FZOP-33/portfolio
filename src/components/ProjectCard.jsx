/**
 * ProjectCard Component
 *
 * Large-format showcase card for flagship software projects:
 * - Device-aware visual cover showcase (Desktop browser frame vs 3-Phone mobile stage)
 * - Persistent media count ribbon (App Screens & Video Walkthroughs)
 * - Interactive screenshot preview strip right on the card
 * - Real-world problem addressed & engineered solution
 * - Top 4 core capabilities & technology badges
 * - Direct actions for "Discover Project" and "Watch Demo Videos"
 */
export function ProjectCard({ project, onOpenDetails }) {
  const {
    id,
    title,
    subtitle,
    category,
    layoutType,
    statusBadge,
    summary,
    cardSummary,
    problemSolved,
    cardProblem,
    solutionDeveloped,
    cardSolution,
    techStack,
    features,
    cardCapabilities,
    media,
    links,
    accentColor,
    icon
  } = project;

  const capabilitiesToDisplay = cardCapabilities || (features ? features.slice(0, 4).map((f) => f.title) : []);
  const screenshots = media?.screenshots?.filter((s) => s.src) || [];
  const videos = media?.videos?.filter((v) => v.url) || (media?.video?.url ? [media.video] : []);

  const coverImage = media?.coverImage || screenshots[0]?.src || null;
  const mobileTriptych = layoutType === 'mobile' && media?.coverShowcaseImages?.length === 3
    ? media.coverShowcaseImages
    : null;

  // Show 4 crisp preview thumbnails right on the card
  const previewThumbnails = screenshots.slice(0, 4);
  const remainingScreensCount = Math.max(0, screenshots.length - previewThumbnails.length);

  // Limit tech stack badges on the card to top 6 so it stays airy and uncluttered
  const visibleTech = techStack ? techStack.slice(0, 6) : [];
  const extraTechCount = techStack ? Math.max(0, techStack.length - visibleTech.length) : 0;

  return (
    <article
      className="project-card project-card-premium"
      style={{ '--project-accent': accentColor }}
      aria-labelledby={`project-title-${id}`}
    >
      {/* Visual Header / Device-Aware Media Cover */}
      <div
        className={`project-card-cover ${layoutType === 'mobile' ? 'is-mobile-cover' : 'is-desktop-cover'}`}
        onClick={() => onOpenDetails(project, { tab: 'media' })}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onOpenDetails(project, { tab: 'media' });
          }
        }}
        aria-label={`Open ${title} videos and screen gallery`}
      >
        {mobileTriptych ? (
          <div className="project-cover-mobile-stage">
            <div className="cover-glow-orb"></div>
            <div className="cover-grid-pattern"></div>
            <div className="mobile-triptych-phones">
              <div className="triptych-phone phone-side phone-left">
                <img
                  src={mobileTriptych[0]}
                  alt={`${title} Copilot AI screen`}
                  width="276"
                  height="597"
                  loading="lazy"
                />
              </div>
              <div className="triptych-phone phone-center">
                <img
                  src={mobileTriptych[1]}
                  alt={`${title} live GPS tracking screen`}
                  width="276"
                  height="597"
                  loading="lazy"
                />
              </div>
              <div className="triptych-phone phone-side phone-right">
                <img
                  src={mobileTriptych[2]}
                  alt={`${title} towing estimate screen`}
                  width="276"
                  height="597"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        ) : coverImage ? (
          <div className="project-cover-desktop-stage">
            <div className="desktop-window-frame">
              <div className="desktop-window-bar" aria-hidden="true">
                <span className="win-dot dot-red"></span>
                <span className="win-dot dot-amber"></span>
                <span className="win-dot dot-green"></span>
                <span className="win-title">{links?.demoUrl ? new URL(links.demoUrl).hostname : title}</span>
              </div>
              <div className="desktop-window-screen">
                <img
                  src={coverImage}
                  alt={`${title} application interface`}
                  className="project-cover-img"
                  width="960"
                  height="540"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        ) : (
          <div className="project-cover-visual" aria-hidden="true">
            <div className="cover-glow-orb"></div>
            <div className="cover-grid-pattern"></div>
            <div className="cover-center-content">
              <div className="cover-icon-wrapper">
                {icon === 'store' ? (
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7"></path>
                    <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path>
                    <path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4"></path>
                    <path d="M2 7h20"></path>
                  </svg>
                ) : (
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"></path>
                    <circle cx="7" cy="17" r="2"></circle>
                    <path d="M9 17h6"></path>
                    <circle cx="17" cy="17" r="2"></circle>
                  </svg>
                )}
              </div>
              <span className="cover-brand-title">{title}</span>
            </div>
          </div>
        )}

        {/* Overlay Badges */}
        <div className="project-cover-badges">
          <span className="project-category-tag">{category}</span>
          <span className="project-status-badge">{statusBadge}</span>
        </div>

        {/* Persistent Media Count Ribbon */}
        <div className="cover-media-ribbon">
          {screenshots.length > 0 && (
            <span className="ribbon-item">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect>
                <circle cx="9" cy="9" r="2"></circle>
                <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path>
              </svg>
              {screenshots.length} App Screens
            </span>
          )}
          {videos.length > 0 && (
            <span className="ribbon-item ribbon-item-video">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <polygon points="6 3 20 12 6 21 6 3"></polygon>
              </svg>
              {videos.length} Video {videos.length === 1 ? 'Demo' : 'Demos'}
            </span>
          )}
        </div>
      </div>

      {/* Card Header */}
      <div className="project-card-header">
        <h3 id={`project-title-${id}`} className="project-title">{title}</h3>
        <p className="project-subtitle">{subtitle}</p>
      </div>

      {/* Card Body */}
      <div className="project-card-body">
        <p className="project-summary">{cardSummary || summary}</p>

        {/* Interactive Screenshot Strip directly on the web interface */}
        {previewThumbnails.length > 0 && (
          <div className="project-card-media-strip" aria-label={`${title} interface previews`}>
            <div className="media-strip-header">
              <span className="media-strip-label">Interface Gallery &amp; Walkthroughs</span>
              <button
                type="button"
                className="media-strip-open-btn"
                onClick={() => onOpenDetails(project, { tab: 'media' })}
              >
                Open full gallery &rarr;
              </button>
            </div>

            <div className={`media-strip-thumbs ${layoutType === 'mobile' ? 'is-mobile-thumbs' : 'is-desktop-thumbs'}`}>
              {previewThumbnails.map((screen) => (
                <button
                  key={screen.id}
                  type="button"
                  className="media-thumb-btn"
                  onClick={() => onOpenDetails(project, { tab: 'media', screenshotId: screen.id })}
                  title={screen.title}
                  aria-label={`Inspect ${screen.title}`}
                >
                  <img
                    src={screen.src}
                    alt={screen.title}
                    width={screen.orientation === 'portrait' ? 138 : 240}
                    height={screen.orientation === 'portrait' ? 298 : 135}
                    loading="lazy"
                    className="media-thumb-img"
                  />
                </button>
              ))}

              {remainingScreensCount > 0 && (
                <button
                  type="button"
                  className="media-thumb-more"
                  onClick={() => onOpenDetails(project, { tab: 'media' })}
                  aria-label={`View ${remainingScreensCount} more screenshots and ${videos.length} demo videos`}
                >
                  <span className="thumb-more-count">+{remainingScreensCount}</span>
                  <span className="thumb-more-text">more screens</span>
                </button>
              )}
            </div>
          </div>
        )}

        {/* Problem & Solution Dual Impact Box */}
        <div className="project-impact-dual">
          <div className="impact-box impact-problem">
            <div className="impact-header">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="8" x2="12" y2="12"></line>
                <line x1="12" y1="16" x2="12.01" y2="16"></line>
              </svg>
              <span>The Real Problem</span>
            </div>
            <p className="impact-text">{cardProblem || problemSolved}</p>
          </div>

          <div className="impact-box impact-solution">
            <div className="impact-header">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
              <span>The Engineered Solution</span>
            </div>
            <p className="impact-text">{cardSolution || solutionDeveloped}</p>
          </div>
        </div>

        {/* Preview of 4 Core Capabilities */}
        {capabilitiesToDisplay.length > 0 && (
          <div className="project-preview-features">
            <span className="features-preview-title">Core Capabilities:</span>
            <div className="features-pill-grid">
              {capabilitiesToDisplay.map((capTitle, idx) => (
                <div key={`cap-${id}-${idx}`} className="preview-feature-pill">
                  <span className="pill-check">&#10003;</span>
                  <span className="pill-name">{capTitle}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Technology Badges */}
        <div className="project-tech-stack" aria-label="Key technologies">
          {visibleTech.map((tech, index) => (
            <span key={`${id}-tech-${index}`} className="tech-badge">
              {tech}
            </span>
          ))}
          {extraTechCount > 0 && (
            <span className="tech-badge tech-badge-more" title={`And ${extraTechCount} more technologies in full specifications`}>
              +{extraTechCount} more
            </span>
          )}
        </div>
      </div>

      {/* Card Footer Actions */}
      <div className="project-card-footer">
        <div className="project-card-cta-row">
          <button
            type="button"
            className="btn btn-primary btn-discover"
            onClick={() => onOpenDetails(project, { tab: 'overview' })}
            aria-label={`Discover full presentation for ${title}`}
          >
            <span>Discover Project</span>
            <svg
              width="17"
              height="17"
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

          {videos.length > 0 && (
            <button
              type="button"
              className="btn btn-secondary btn-watch-demo"
              onClick={() => onOpenDetails(project, { tab: 'media' })}
              aria-label={`Watch ${videos.length} video demonstrations for ${title}`}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <polygon points="5 3 19 12 5 21 5 3"></polygon>
              </svg>
              <span>Watch Demos ({videos.length})</span>
            </button>
          )}
        </div>

        {/* External Links & Confidentiality Indicators */}
        <div className="project-links-row">
          {links.demoUrl ? (
            <a
              href={links.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link-item live-demo-link"
              title="Visit live official website"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="2" y1="12" x2="22" y2="12"></line>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
              </svg>
              <span>Live Website ({new URL(links.demoUrl).hostname}) &rarr;</span>
            </a>
          ) : (
            <span className="project-note-tag note-demo">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <rect width="14" height="20" x="5" y="2" rx="2" ry="2"></rect>
                <path d="M12 18h.01"></path>
              </svg>
              {links.demoStatusText || 'Demo upon request'}
            </span>
          )}

          {links.githubUrl ? (
            <a
              href={links.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link-item"
            >
              GitHub Repo &rarr;
            </a>
          ) : (
            <span className="project-note-tag note-private" title="Source code is protected by confidentiality agreements">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
              </svg>
              {links.repoStatusText || 'Private Repository'}
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
