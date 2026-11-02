import { useState } from 'react';
import { profileData } from '../data/profile';

/**
 * Contact Component
 * 
 * Demonstrates React concepts:
 * 1. Controlled Form State: name, email, projectType, message.
 * 2. Asynchronous Submission: Sends inquiry directly to Mohamed's email via FormSubmit AJAX.
 * 3. Loading & Feedback States: Displays real-time sending indicator and success confirmation.
 * 4. Clipboard API: Instant one-click copy with timeout feedback.
 */
export function Contact() {
  const { contact } = profileData;
  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Freelance Software Project',
    message: ''
  });
  const [submissionFeedback, setSubmissionFeedback] = useState(null);

  // Handle one-click email copy
  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contact.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
    }
  };

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  // Asynchronous Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (isSubmitting) return;
  
    const name = formData.name.trim();
    const email = formData.email.trim();
    const message = formData.message.trim();
  
    if (!name || !email || !message) {
      setSubmissionFeedback({
        type: 'error',
        text: 'Please fill in your name, email address, and message.',
      });
      return;
    }
  
    setIsSubmitting(true);
    setSubmissionFeedback(null);
  
    try {
      const response = await fetch(
        `https://formsubmit.co/ajax/${contact.email}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            name,
            email,
            projectType: formData.projectType,
            message,
            _subject: `[Portfolio] ${formData.projectType} - ${name}`,
            _template: 'table',
            _captcha: 'false',
          }),
        }
      );
  
      const result = await response.json();
  
      if (
        !response.ok ||
        result.success === false ||
        result.success === 'false'
      ) {
        throw new Error(
          result.message || "The service could not confirm message delivery."
        );
      }
  
      setSubmissionFeedback({
        type: 'success',
        text: "Message sent successfully! Mohamed Diarra will receive your inquiry directly.",
      });
  
      setFormData({
        name: '',
        email: '',
        projectType: 'Freelance Software Project',
        message: '',
      });
    } catch (error) {
      console.error('Contact form error:', error);
  
      const subject = encodeURIComponent(
        `[Portfolio] ${formData.projectType} - ${name}`
      );
  
      const body = encodeURIComponent(
        `Hello Mohamed,\n\nName: ${name}\nEmail: ${email}\nInquiry Topic: ${formData.projectType}\n\nMessage:\n${message}`
      );
  
      setSubmissionFeedback({
        type: 'fallback',
        text: "Direct web submission is currently unavailable. You can send your inquiry directly via Gmail using the button below:",
        mailtoUrl: `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
          contact.email
        )}&su=${subject}&body=${body}`,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section contact-section" aria-label="Contact and Inquiries">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-badge">Get In Touch</span>
          <h2 className="section-title">Let's Discuss Your Next Build</h2>
          <p className="section-subtitle">
            Whether you are looking for a freelance software engineer for your project, seeking a technical collaborator, or exploring full-stack &amp; mobile opportunities, my inbox is open.
          </p>
        </div>

        <div className="contact-grid">
          {/* Left Column: Direct Communication Channels */}
          <div className="contact-info-col">
            <div className="contact-card primary-contact-card">
              <div className="contact-card-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>

              <div className="contact-card-content">
                <h3 className="contact-card-title">Direct Email</h3>
                <p className="contact-card-desc">
                  Fastest way to reach me for project inquiries and engineering discussions.
                </p>
                <div className="email-display-box">
                  <code className="email-code">{contact.email}</code>
                </div>

                <div className="email-actions-group">
                  <button
                    type="button"
                    className="btn btn-secondary btn-sm"
                    onClick={handleCopyEmail}
                  >
                    {copied ? (
                      <>
                        <span className="check-mark">&#10003;</span> Copied to Clipboard
                      </>
                    ) : (
                      <>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                        </svg>
                        Copy Email
                      </>
                    )}
                  </button>

                  <a
                    href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(contact.email)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-sm"
                  >
                    Open Gmail &rarr;
                  </a>
                </div>
              </div>
            </div>

            {/* Social & Professional Links */}
            <div className="contact-card">
              <h3 className="links-heading">Professional Links</h3>
              <p className="links-subtext">
                Explore my code repositories and professional network:
              </p>

              <div className="professional-links-list">
                <a
                  href={contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="prof-link-item"
                  title="Open GitHub Profile"
                >
                  <div className="prof-link-left">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    <span>GitHub</span>
                  </div>
                  <span className="link-status-chip">
                    View Profile &rarr;
                  </span>
                </a>

                <a
                  href={contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="prof-link-item"
                  title="Open LinkedIn Profile"
                >
                  <div className="prof-link-left">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                    <span>LinkedIn</span>
                  </div>
                  <span className="link-status-chip">
                    View Profile &rarr;
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Inquiry Composer Form */}
          <div className="contact-form-col">
            <div className="contact-form-card">
              <h3 className="form-card-title">Send a Project Inquiry</h3>
              <p className="form-card-subtitle">
                Fill in the details below. Your message will be sent directly to Mohamed Diarra's inbox.
              </p>

              {submissionFeedback && (
                <div className={`form-feedback-alert alert-${submissionFeedback.type}`}>
                  <p>{submissionFeedback.text}</p>
                  {submissionFeedback.mailtoUrl && (
                    <a
                      href={submissionFeedback.mailtoUrl}
                      className="btn btn-secondary btn-sm"
                      style={{ marginTop: '10px' }}
                    >
                      Open in Email Client &rarr;
                    </a>
                  )}
                </div>
              )}

              <form onSubmit={handleSubmit} className="inquiry-form">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">
                    Your Name <span className="req-star">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Sarah Jenkins"
                    className="form-input"
                    disabled={isSubmitting}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    Your Email Address <span className="req-star">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="sarah@company.com"
                    className="form-input"
                    disabled={isSubmitting}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="projectType" className="form-label">
                    Inquiry Topic
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="form-select"
                    disabled={isSubmitting}
                  >
                    <option value="Freelance Software Project">Freelance Software Project</option>
                    <option value="Full-Time / Contract Engineering">Full-Time / Contract Engineering</option>
                    <option value="SuguAI or AutoSOS Collaboration">SuguAI or AutoSOS Collaboration</option>
                    <option value="Technical Consultation">Technical Consultation</option>
                    <option value="General Engineering Inquiry">General Engineering Inquiry</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">
                    Project Details or Message <span className="req-star">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your business problem, project scope, timeline, or what you'd like to build..."
                    className="form-textarea"
                    disabled={isSubmitting}
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="btn btn-primary btn-block"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span className="spinner-icon"></span> Sending...
                    </>
                  ) : (
                    <>
                      Send Message Directly &rarr;
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
