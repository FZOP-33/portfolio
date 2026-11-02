import { profileData } from '../data/profile';
import { BrandLogo } from './BrandLogo';

/**
 * Footer Component
 * 
 * Demonstrates React concepts:
 * 1. Dynamic Expressions: renders current year dynamically with JavaScript.
 * 2. Reusable Navigation Helpers: smooth scrolls to respective sections.
 */
export function Footer() {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      const navHeight = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-top-row">
          <div className="footer-brand">
            <a
              href="#home"
              className="brand-logo footer-logo"
              onClick={(e) => handleNavClick(e, 'home')}
              aria-label="Mohamed Diarra — Back to top"
            >
              <BrandLogo showFullName size={40} />
            </a>
            <p className="footer-role">{profileData.role}</p>
            <p className="footer-subtext">
              Building practical software solutions for businesses and users.
            </p>
          </div>

          <nav className="footer-nav" aria-label="Footer Navigation">
            <h4 className="footer-nav-title">Navigation</h4>
            <ul className="footer-links-list">
              <li>
                <a href="#home" onClick={(e) => handleNavClick(e, 'home')}>
                  Home
                </a>
              </li>
              <li>
                <a href="#about" onClick={(e) => handleNavClick(e, 'about')}>
                  About
                </a>
              </li>
              <li>
                <a href="#skills" onClick={(e) => handleNavClick(e, 'skills')}>
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" onClick={(e) => handleNavClick(e, 'projects')}>
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          <div className="footer-actions">
            <h4 className="footer-nav-title">Opportunities</h4>
            <p className="footer-actions-desc">
              Available for freelance contracts, full-stack builds, and mobile projects.
            </p>
            <a 
              href="#contact" 
              className="btn btn-secondary btn-sm"
              onClick={(e) => handleNavClick(e, 'contact')}
            >
              Get In Touch &rarr;
            </a>
          </div>
        </div>

        <div className="footer-bottom-row">
          <p className="copyright-text">
            &copy; {currentYear} {profileData.name} &bull; {profileData.role}. All rights reserved.
          </p>
          <div className="footer-tech-tag">
            <span>Production Ready &bull; Zero Clutter</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
