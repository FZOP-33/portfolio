import { useState, useEffect } from 'react';
import { profileData } from '../data/profile';
import { BrandLogo } from './BrandLogo';

/**
 * Navbar Component
 * 
 * Demonstrates essential React concepts:
 * 1. useState: tracks whether the mobile navigation menu is open or closed,
 *    and tracks scroll state for sticky header styling.
 * 2. useEffect: registers event listeners (scroll, Escape key) and cleans them up
 *    when the component unmounts.
 * 3. Accessibility: proper ARIA labels, keyboard support, and focus management.
 */
export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Listen to scroll events to update navbar appearance and active section
  useEffect(() => {
    const handleScroll = () => {
      // Toggle compact/blurred background when scrolled down
      setIsScrolled(window.scrollY > 20);

      // Section spy to highlight current active link
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 140;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on Escape key press for accessibility
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Smooth scroll handler that also closes the mobile menu
  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.getElementById(targetId);
    if (target) {
      const navHeight = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveSection(targetId);
    }
  };

  const navLinks = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Projects', id: 'projects' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <header className={`navbar-header ${isScrolled ? 'is-scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Brand Logo / Personal Identity */}
        <a 
          href="#home" 
          className="brand-logo" 
          onClick={(e) => handleNavClick(e, 'home')}
          aria-label="Mohamed Diarra — Back to top"
        >
          <BrandLogo size={38} />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="desktop-nav" aria-label="Primary Navigation">
          <ul className="nav-list">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className={`nav-link ${activeSection === link.id ? 'is-active' : ''}`}
                  onClick={(e) => handleNavClick(e, link.id)}
                >
                  {link.label}
                  {activeSection === link.id && <span className="active-pill" />}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop Call to Action */}
        <div className="nav-actions">
          <a
            href="#contact"
            className="btn btn-primary btn-sm"
            onClick={(e) => handleNavClick(e, 'contact')}
          >
            Let's Talk
          </a>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            className={`hamburger-btn ${mobileMenuOpen ? 'is-active' : ''}`}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav-menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="hamburger-line line-1" />
            <span className="hamburger-line line-2" />
            <span className="hamburger-line line-3" />
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation (Rendered only when open) */}
      {mobileMenuOpen && (
        <div 
          id="mobile-nav-menu" 
          className="mobile-menu-drawer is-open"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          <div className="mobile-menu-backdrop" onClick={() => setMobileMenuOpen(false)} />
          <nav className="mobile-nav" aria-label="Mobile Navigation">
            <div className="mobile-nav-header">
              <BrandLogo size={34} />
              <button 
                type="button" 
                className="close-drawer-btn" 
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                &times;
              </button>
            </div>

            <ul className="mobile-nav-list">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    className={`mobile-nav-link ${activeSection === link.id ? 'is-active' : ''}`}
                    onClick={(e) => handleNavClick(e, link.id)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mobile-nav-footer">
              <a
                href="#contact"
                className="btn btn-primary btn-block"
                onClick={(e) => handleNavClick(e, 'contact')}
              >
                Let's Work Together
              </a>
              <p className="mobile-nav-subtext">{profileData.role}</p>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
