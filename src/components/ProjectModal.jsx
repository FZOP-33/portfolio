import { useState, useEffect, useMemo } from 'react';

/**
 * ProjectModal Component
 *
 * In-depth, interactive project deep-dive modal:
 * - 4 Tab Navigation (Overview, 7 Core Capabilities, Architecture & Tech, Videos & Screen Gallery)
 * - Multi-video interactive walkthrough player supporting both landscape desktop & portrait mobile videos
 * - Categorized, orientation-aware real screenshot gallery (zero cropped mobile screens)
 * - Direct screen inspection from Capability cards + full keyboard-navigable Lightbox (ESC, Left/Right arrows)
 */
export function ProjectModal({
  project,
  initialTab = 'overview',
  initialScreenshotId = null,
  onClose,
  onContactClick
}) {
  const [activeTab, setActiveTab] = useState(initialTab || 'overview');
  const [activeVideoIdx, setActiveVideoIdx] = useState(0);
  const [selectedGroup, setSelectedGroup] = useState('All');
  const [lightboxScreenId, setLightboxScreenId] = useState(initialScreenshotId || null);

  const screenshots = useMemo(
    () => project?.media?.screenshots ?? [],
    [project]
  );
  const videos = project?.media?.videos || (project?.media?.video?.url ? [project.media.video] : []);

  const currentLightboxIndex = lightboxScreenId
    ? screenshots.findIndex((s) => s.id === lightboxScreenId)
    : -1;
  const selectedScreenshot = currentLightboxIndex >= 0 ? screenshots[currentLightboxIndex] : null;

  // Handle ESC and Left/Right arrow navigation + background scroll locking
  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        if (lightboxScreenId) {
          setLightboxScreenId(null);
        } else {
          onClose();
        }
      } else if (lightboxScreenId && screenshots.length > 1) {
        if (e.key === 'ArrowRight') {
          e.preventDefault();
          const nextIdx = (currentLightboxIndex + 1) % screenshots.length;
          setLightboxScreenId(screenshots[nextIdx].id);
        } else if (e.key === 'ArrowLeft') {
          e.preventDefault();
          const prevIdx = (currentLightboxIndex - 1 + screenshots.length) % screenshots.length;
          setLightboxScreenId(screenshots[prevIdx].id);
        }
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose, lightboxScreenId, currentLightboxIndex, screenshots]);

  if (!project) return null;

  const {
    title,
    subtitle,
    category,
    layoutType,
    statusBadge,
    currentStatus,
    summary,
    problemSolved,
    problemPoints,
    solutionDeveloped,
    solutionPoints,
    targetUsers,
    targetUserList,
    architectureNote,
    techCategories,
    techStack,
    features,
    links,
    accentColor
  } = project;

  const activeVideo = videos[activeVideoIdx] || videos[0] || null;

  // Build unique screenshot group filters
  const uniqueGroups = Array.from(new Set(screenshots.map((s) => s.group).filter(Boolean)));
  const filteredScreenshots = selectedGroup === 'All'
    ? screenshots
    : screenshots.filter((s) => s.group === selectedGroup);

  const goPrevLightbox = () => {
    if (screenshots.length <= 1) return;
    const prevIdx = (currentLightboxIndex - 1 + screenshots.length) % screenshots.length;
    setLightboxScreenId(screenshots[prevIdx].id);
  };

  const goNextLightbox = () => {
    if (screenshots.length <= 1) return;
    const nextIdx = (currentLightboxIndex + 1) % screenshots.length;
    setLightboxScreenId(screenshots[nextIdx].id);
  };

  return (
    <div
      className="modal-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      <div
        className="modal-card modal-card-deep"
        onClick={(e) => e.stopPropagation()}
        style={{ '--project-accent': accentColor }}
      >
        {/* Modal Header */}
        <div className="modal-header">
          <div className="modal-header-info">
            <div className="modal-badge-row">
              <span className="modal-category">{category}</span>
              <span className="modal-status">{statusBadge}</span>
            </div>
            <h2 id="modal-project-title" className="modal-title">{title}</h2>
            <p className="modal-subtitle">{subtitle}</p>
          </div>
          <button
            type="button"
            className="modal-close-btn"
            onClick={onClose}
            aria-label="Close project presentation"
          >
            &times;
          </button>
        </div>

        {/* Tabbed Navigation Bar */}
        <div className="modal-nav-tabs" role="tablist" aria-label="Project sections">
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'overview'}
            className={`modal-tab-btn ${activeTab === 'overview' ? 'is-active' : ''}`}
            onClick={() => setActiveTab('overview')}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="16" x2="12" y2="12"></line>
              <line x1="12" y1="8" x2="12.01" y2="8"></line>
            </svg>
            <span>Overview</span>
          </button>

          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'features'}
            className={`modal-tab-btn ${activeTab === 'features' ? 'is-active' : ''}`}
            onClick={() => setActiveTab('features')}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <polyline points="9 11 12 14 22 4"></polyline>
              <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
            </svg>
            <span>7 Core Capabilities</span>
          </button>

          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'architecture'}
            className={`modal-tab-btn ${activeTab === 'architecture' ? 'is-active' : ''}`}
            onClick={() => setActiveTab('architecture')}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <rect width="18" height="18" x="3" y="3" rx="2"></rect>
              <path d="M3 9h18"></path>
              <path d="M9 21V9"></path>
            </svg>
            <span>Architecture &amp; Tech</span>
          </button>

          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'media'}
            className={`modal-tab-btn ${activeTab === 'media' ? 'is-active' : ''}`}
            onClick={() => setActiveTab('media')}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <rect width="18" height="18" x="3" y="3" rx="2"></rect>
              <polygon points="10 8 16 12 10 16 10 8"></polygon>
            </svg>
            <span>Videos &amp; Screen Gallery</span>
            <span className="modal-tab-count">{videos.length + screenshots.length}</span>
          </button>
        </div>

        {/* Scrollable Modal Content Body */}
        <div className="modal-body">
          {/* ================================================================= */}
          {/* TAB 1: OVERVIEW */}
          {/* ================================================================= */}
          {activeTab === 'overview' && (
            <div className="tab-pane tab-overview" role="tabpanel">
              <div className="modal-status-banner">
                <div className="status-banner-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                </div>
                <div className="status-banner-text">
                  <strong>Current Project Status:</strong> {currentStatus}
                </div>
              </div>

              <div className="modal-section">
                <h3 className="modal-section-heading">Project Overview</h3>
                <p className="modal-text modal-text-lead">{summary}</p>
              </div>

              <div className="modal-dual-cards">
                <div className="modal-box modal-box-problem">
                  <div className="modal-box-header">
                    <span className="box-badge-icon red-icon">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="12" y1="8" x2="12" y2="12"></line>
                        <line x1="12" y1="16" x2="12.01" y2="16"></line>
                      </svg>
                    </span>
                    <h4 className="modal-box-title">The Real-World Problem</h4>
                  </div>
                  <p className="modal-box-intro">{problemSolved}</p>
                  {problemPoints && problemPoints.length > 0 && (
                    <ul className="modal-bullet-list problem-bullet-list">
                      {problemPoints.map((pt, i) => (
                        <li key={`prob-pt-${i}`} className="modal-bullet-item">
                          <span className="bullet-indicator bullet-problem" aria-hidden="true">&bull;</span>
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <div className="modal-box modal-box-solution">
                  <div className="modal-box-header">
                    <span className="box-badge-icon green-icon">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                      </svg>
                    </span>
                    <h4 className="modal-box-title">The Engineered Solution</h4>
                  </div>
                  <p className="modal-box-intro">{solutionDeveloped}</p>
                  {solutionPoints && solutionPoints.length > 0 && (
                    <ul className="modal-bullet-list solution-bullet-list">
                      {solutionPoints.map((pt, i) => (
                        <li key={`sol-pt-${i}`} className="modal-bullet-item">
                          <span className="bullet-indicator bullet-solution" aria-hidden="true">&#10003;</span>
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>

              <div className="modal-section">
                <div className="modal-target-card">
                  <div className="target-icon">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                  </div>
                  <div className="target-card-body">
                    <h4 className="target-title">Target Users &amp; Beneficiaries</h4>
                    <p className="target-text">{targetUsers}</p>
                    {targetUserList && targetUserList.length > 0 && (
                      <div className="target-pills-row">
                        {targetUserList.map((tag, idx) => (
                          <span key={`target-tag-${idx}`} className="target-user-pill">
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="overview-quick-links">
                <button
                  type="button"
                  className="btn btn-primary btn-sm"
                  onClick={() => setActiveTab('media')}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <polygon points="5 3 19 12 5 21 5 3"></polygon>
                  </svg>
                  <span>Watch {videos.length} Video Demos &amp; {screenshots.length} Screens &rarr;</span>
                </button>
                <button
                  type="button"
                  className="btn btn-outline btn-sm"
                  onClick={() => setActiveTab('features')}
                >
                  Explore the 7 core capabilities &rarr;
                </button>
              </div>
            </div>
          )}

          {/* ================================================================= */}
          {/* TAB 2: THE 7 CORE CAPABILITIES */}
          {/* ================================================================= */}
          {activeTab === 'features' && (
            <div className="tab-pane tab-features" role="tabpanel">
              <div className="features-intro">
                <h3 className="modal-section-heading">Core Features &amp; Concrete Utility</h3>
                <p className="modal-text">
                  Every capability resolves concrete operational friction and is backed by real application screens.
                </p>
              </div>

              <div className="features-detailed-list">
                {features.map((feat) => {
                  const linkedScreen = feat.screenshotId
                    ? screenshots.find((s) => s.id === feat.screenshotId)
                    : null;

                  return (
                    <div key={feat.id} className="feature-detailed-card">
                      <div className="feature-card-top">
                        <span className="feature-number-badge">{feat.number}</span>
                        <div className="feature-card-title-group">
                          <span className="feature-category-pill">{feat.badge}</span>
                          <h4 className="feature-main-title">{feat.title}</h4>
                        </div>
                        {linkedScreen && (
                          <button
                            type="button"
                            className="feature-screen-btn"
                            onClick={() => setLightboxScreenId(linkedScreen.id)}
                          >
                            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                              <rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect>
                              <circle cx="9" cy="9" r="2"></circle>
                              <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path>
                            </svg>
                            <span>Inspect UI Screen</span>
                          </button>
                        )}
                      </div>

                      <p className="feature-summary-text">{feat.summary}</p>

                      <div className="feature-points-box">
                        <span className="feature-points-label">Technical details &amp; implementation:</span>
                        <ul className="feature-points-list">
                          {feat.points.map((pt, pIdx) => (
                            <li key={`${feat.id}-pt-${pIdx}`} className="feature-point-item">
                              <span className="point-bullet">&bull;</span>
                              <span>{pt}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* ================================================================= */}
          {/* TAB 3: ARCHITECTURE & TECHNOLOGIES */}
          {/* ================================================================= */}
          {activeTab === 'architecture' && (
            <div className="tab-pane tab-architecture" role="tabpanel">
              <div className="modal-section">
                <h3 className="modal-section-heading">Architecture &amp; Engineering Rationale</h3>
                <div className="modal-architecture-card">
                  <div className="architecture-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                      <path d="M2 17l10 5 10-5"></path>
                      <path d="M2 12l10 5 10-5"></path>
                    </svg>
                  </div>
                  <p className="modal-text">{architectureNote}</p>
                </div>
              </div>

              {techCategories && (
                <div className="modal-section">
                  <h3 className="modal-section-heading">Technical Breakdown by Architectural Layer</h3>
                  <div className="tech-layers-grid">
                    {techCategories.backend && (
                      <div className="tech-layer-card">
                        <span className="layer-tag">Backend &amp; API</span>
                        <ul className="layer-items">
                          {techCategories.backend.map((item, idx) => (
                            <li key={`be-${idx}`}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {techCategories.frontend && (
                      <div className="tech-layer-card">
                        <span className="layer-tag">Frontend &amp; Mobile</span>
                        <ul className="layer-items">
                          {techCategories.frontend.map((item, idx) => (
                            <li key={`fe-${idx}`}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {(techCategories.sync || techCategories.realtime) && (
                      <div className="tech-layer-card">
                        <span className="layer-tag">Synchronization &amp; Real-Time</span>
                        <ul className="layer-items">
                          {(techCategories.sync || techCategories.realtime).map((item, idx) => (
                            <li key={`sync-${idx}`}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {techCategories.ai && (
                      <div className="tech-layer-card">
                        <span className="layer-tag">Artificial Intelligence &amp; Vision</span>
                        <ul className="layer-items">
                          {techCategories.ai.map((item, idx) => (
                            <li key={`ai-${idx}`}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {techCategories.database && (
                      <div className="tech-layer-card">
                        <span className="layer-tag">Databases &amp; Persistence</span>
                        <ul className="layer-items">
                          {techCategories.database.map((item, idx) => (
                            <li key={`db-${idx}`}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {(techCategories.services || techCategories.paymentsPlanned) && (
                      <div className="tech-layer-card">
                        <span className="layer-tag">Services, Security &amp; Integrations</span>
                        <ul className="layer-items">
                          {(techCategories.services || techCategories.paymentsPlanned).map((item, idx) => (
                            <li key={`srv-${idx}`}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              )}

              <div className="modal-section">
                <h4 className="tech-chips-title">Primary Technologies:</h4>
                <div className="modal-tech-chips">
                  {techStack.map((tech, idx) => (
                    <span key={`stack-${idx}`} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ================================================================= */}
          {/* TAB 4: VIDEOS & SCREEN GALLERY */}
          {/* ================================================================= */}
          {activeTab === 'media' && (
            <div className="tab-pane tab-media" role="tabpanel">
              {/* Video Demonstrations Showcase */}
              <div className="modal-section">
                <div className="section-title-with-badge">
                  <h3 className="modal-section-heading">Video Demonstrations</h3>
                  <span className="media-status-pill">
                    {videos.length} Walkthrough {videos.length === 1 ? 'Video' : 'Videos'}
                  </span>
                </div>

                {/* Video Switcher Playlist when multiple videos exist */}
                {videos.length > 1 && (
                  <div className="video-playlist-grid" role="tablist" aria-label="Select video demonstration">
                    {videos.map((vid, vIdx) => {
                      const isCurrent = vIdx === activeVideoIdx;
                      return (
                        <button
                          key={vid.id || vIdx}
                          type="button"
                          role="tab"
                          aria-selected={isCurrent}
                          className={`video-playlist-card ${isCurrent ? 'is-active' : ''}`}
                          onClick={() => setActiveVideoIdx(vIdx)}
                        >
                          <div className="playlist-thumb-wrap">
                            {vid.poster && (
                              <img
                                src={vid.poster}
                                alt={vid.title}
                                width="160"
                                height="90"
                                loading="lazy"
                                className="playlist-thumb-img"
                              />
                            )}
                            <span className="playlist-play-badge">
                              <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                <polygon points="5 3 19 12 5 21 5 3"></polygon>
                              </svg>
                            </span>
                          </div>
                          <div className="playlist-card-info">
                            <div className="playlist-meta-top">
                              <span className="playlist-index">Video 0{vIdx + 1}</span>
                              {vid.duration && <span className="playlist-duration">{vid.duration}</span>}
                            </div>
                            <span className="playlist-title">{vid.title}</span>
                            {vid.deviceTag && <span className="playlist-device">{vid.deviceTag}</span>}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                )}

                {activeVideo ? (
                  <div className="video-showcase-wrapper">
                    <div
                      className={`video-player-frame ${
                        activeVideo.orientation === 'portrait' ? 'is-portrait-player' : 'is-landscape-player'
                      }`}
                    >
                      <video
                        key={activeVideo.id || activeVideo.url}
                        controls
                        playsInline
                        preload="metadata"
                        poster={activeVideo.poster}
                        width={activeVideo.width || 1280}
                        height={activeVideo.height || 720}
                        className="video-element"
                      >
                        <source src={activeVideo.url} type={activeVideo.type || 'video/mp4'} />
                        Your browser does not support HTML5 video playback.
                      </video>
                    </div>

                    <div className="active-video-caption-bar">
                      <div className="active-video-caption-main">
                        <h4 className="active-video-title">{activeVideo.title}</h4>
                        {activeVideo.subtitle && (
                          <p className="active-video-subtitle">{activeVideo.subtitle}</p>
                        )}
                      </div>
                      <div className="active-video-badges">
                        {activeVideo.deviceTag && (
                          <span className="video-meta-chip">{activeVideo.deviceTag}</span>
                        )}
                        {activeVideo.duration && (
                          <span className="video-meta-chip chip-duration">{activeVideo.duration}</span>
                        )}
                      </div>
                    </div>
                  </div>
                ) : null}
              </div>

              {/* Structured Screenshot Gallery Grid */}
              <div className="modal-section">
                <div className="section-title-with-badge">
                  <h3 className="modal-section-heading">Application Screen Gallery</h3>
                  <span className="media-status-pill">
                    {screenshots.length} Real Screens
                  </span>
                </div>
                <p className="modal-text gallery-instructions">
                  Click any screen below to inspect it at full resolution and navigate with keyboard arrows.
                </p>

                {/* Module Group Filter Bar */}
                {uniqueGroups.length > 1 && (
                  <div className="gallery-group-filters" role="tablist" aria-label="Filter screens by module">
                    <button
                      type="button"
                      role="tab"
                      aria-selected={selectedGroup === 'All'}
                      className={`gallery-filter-chip ${selectedGroup === 'All' ? 'is-active' : ''}`}
                      onClick={() => setSelectedGroup('All')}
                    >
                      All Screens ({screenshots.length})
                    </button>
                    {uniqueGroups.map((grp) => {
                      const count = screenshots.filter((s) => s.group === grp).length;
                      return (
                        <button
                          key={grp}
                          type="button"
                          role="tab"
                          aria-selected={selectedGroup === grp}
                          className={`gallery-filter-chip ${selectedGroup === grp ? 'is-active' : ''}`}
                          onClick={() => setSelectedGroup(grp)}
                        >
                          {grp} ({count})
                        </button>
                      );
                    })}
                  </div>
                )}

                <div
                  className={`screenshots-grid ${
                    layoutType === 'mobile' ? 'is-portrait-gallery' : 'is-landscape-gallery'
                  }`}
                >
                  {filteredScreenshots.map((screen) => {
                    const globalIdx = screenshots.findIndex((s) => s.id === screen.id);
                    const isPortrait = screen.orientation === 'portrait';

                    return (
                      <div
                        key={screen.id}
                        className={`screenshot-card-slot has-real-image ${
                          isPortrait ? 'is-portrait-slot' : 'is-landscape-slot'
                        }`}
                        onClick={() => setLightboxScreenId(screen.id)}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            setLightboxScreenId(screen.id);
                          }
                        }}
                        aria-label={`Inspect screen ${globalIdx + 1}: ${screen.title}`}
                      >
                        <div className="slot-image-wrap">
                          <img
                            src={screen.src}
                            alt={screen.title}
                            width={screen.width || (isPortrait ? 450 : 800)}
                            height={screen.height || (isPortrait ? 974 : 450)}
                            className="slot-img"
                            loading="lazy"
                          />
                          <div className="slot-top-meta">
                            <span className="slot-num-pill">#{String(globalIdx + 1).padStart(2, '0')}</span>
                            {screen.group && <span className="slot-group-pill">{screen.group}</span>}
                          </div>
                        </div>

                        <div className="slot-caption-bar">
                          <span className="slot-caption-title">{screen.title}</span>
                          <p className="slot-caption-desc">{screen.caption}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer & Actions */}
        <div className="modal-footer">
          <div className="modal-footer-note">
            {links.isPrivateRepo && (
              <span className="repo-private-indicator">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
                {links.repoStatusText || 'Private Repository'}
              </span>
            )}
          </div>

          <div className="modal-footer-btns">
            {links.demoUrl && (
              <a
                href={links.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary btn-sm"
              >
                <span>Visit {new URL(links.demoUrl).hostname} &rarr;</span>
              </a>
            )}

            {links.githubUrl && (
              <a
                href={links.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary btn-sm"
              >
                GitHub Repository &rarr;
              </a>
            )}

            <button
              type="button"
              className="btn btn-primary btn-sm"
              onClick={() => {
                onClose();
                setTimeout(() => {
                  onContactClick();
                }, 80);
              }}
            >
              Discuss This Project
            </button>
          </div>
        </div>
      </div>

      {/* Full-Resolution Lightbox with Prev / Next Navigation */}
      {selectedScreenshot && (
        <div
          className="screenshot-lightbox"
          onClick={(e) => {
            e.stopPropagation();
            setLightboxScreenId(null);
          }}
          role="dialog"
          aria-modal="true"
          aria-label={selectedScreenshot.title}
        >
          <div
            className="lightbox-card"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="lightbox-header">
              <div className="lightbox-header-text">
                <div className="lightbox-meta-row">
                  <span className="lightbox-counter">
                    Screen {currentLightboxIndex + 1} of {screenshots.length}
                  </span>
                  {selectedScreenshot.group && (
                    <span className="lightbox-group-tag">{selectedScreenshot.group}</span>
                  )}
                </div>
                <h4 className="lightbox-title">{selectedScreenshot.title}</h4>
                <p className="lightbox-caption">{selectedScreenshot.caption}</p>
              </div>
              <button
                type="button"
                className="lightbox-close-btn"
                onClick={() => setLightboxScreenId(null)}
                aria-label="Close screen preview"
              >
                &times;
              </button>
            </div>

            <div className="lightbox-content">
              {screenshots.length > 1 && (
                <button
                  type="button"
                  className="lightbox-nav-btn lightbox-prev"
                  onClick={goPrevLightbox}
                  aria-label="Previous screen"
                >
                  &#8249;
                </button>
              )}

              <img
                src={selectedScreenshot.src}
                alt={selectedScreenshot.title}
                width={selectedScreenshot.width || 1200}
                height={selectedScreenshot.height || 800}
                className="lightbox-full-img"
              />

              {screenshots.length > 1 && (
                <button
                  type="button"
                  className="lightbox-nav-btn lightbox-next"
                  onClick={goNextLightbox}
                  aria-label="Next screen"
                >
                  &#8250;
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
