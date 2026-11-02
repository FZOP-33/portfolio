/**
 * Profile Configuration Data
 *
 * Centralized personal details, brand identity assets, professional portrait,
 * bio narrative, and social links.
 */

import profilePortraitImg from '../assets/portfolio/profile/mohamed-diarra-portrait-primary.jpg';
import profileAvatarSquareImg from '../assets/portfolio/profile/mohamed-diarra-avatar-square.jpg';
import mdMonogramSvg from '../assets/portfolio/brand/md-monogram-mark.svg';
import mdBrandLockupSvg from '../assets/portfolio/brand/md-brand-lockup.svg';

export const profileData = {
  // Professional identity
  name: "Mohamed Diarra",
  shortName: "Mohamed",
  role: "Software Engineer | AI Enthusiast",
  headline: "Software Engineer & AI Enthusiast",

  // Personal Brand Identity ("MD" Monogram + Wordmark)
  brand: {
    initials: "MD",
    wordmark: "Mohamed",
    fullWordmark: "Mohamed Diarra",
    tagline: "Software Engineer",
    monogramSrc: mdMonogramSvg,
    lockupSrc: mdBrandLockupSvg,
  },

  // Organized Professional Portraits (visage & épaules)
  avatarUrl: profilePortraitImg,
  avatarSquareUrl: profileAvatarSquareImg,
  portraitMeta: {
    width: 760,
    height: 950,
    squareSize: 760,
    alt: "Mohamed Diarra — Software Engineer & AI Enthusiast",
  },

  // Elevator pitch / hero supporting statement
  supportingStatement:
    "I build practical digital solutions that help businesses solve problems, improve workflows, and turn ideas into working software.",

  // Location and availability status
  location: "Available for Remote & Contract Work",
  availabilityText: "Open to freelance projects, collaboration, and engineering opportunities.",

  // Contact info
  contact: {
    email: "mohameddiarrasons100@gmail.com",
    emailDisplay: "mohameddiarrasons100@gmail.com",
    github: "https://github.com/FZOP-33",
    linkedin: "https://www.linkedin.com/in/mohamed-dori-diarra-9b2233375",
    twitter: null,
    hasRealEmail: true,
    hasRealGithub: true,
    hasRealLinkedin: true,
  },

  // About Me narrative
  about: {
    tagline: "Bridging computer science fundamentals with real-world business applications.",
    paragraphs: [
      "I am a software engineer with a strong foundation in computer science and practical experience building web, mobile, and backend systems. My core engineering focus centers on creating functional, dependable applications that streamline real business operations.",
      "My hands-on experience spans backend development with Python and Django, cross-platform mobile application development using Flutter and Dart, and relational database architecture. I am currently deepening my frontend expertise in React and actively exploring applied Artificial Intelligence to build smarter automation and predictive features.",
      "Whether developing full-scale inventory systems for retail merchants or architecting on-demand service platforms, I approach every project with an emphasis on practical problem-solving, clean architecture, and reliable user experience."
    ],
    principles: [
      {
        title: "Practical Problem Solving",
        description: "Focusing on software that solves concrete business bottlenecks rather than building complexity for its own sake."
      },
      {
        title: "Clean Full-Stack Architecture",
        description: "Pairing robust Python/Django backends and relational databases with intuitive Flutter and React interfaces."
      },
      {
        title: "Continuous Learning & AI",
        description: "Actively expanding into modern React patterns and exploring machine learning integrations to build high-leverage tools."
      }
    ]
  }
};
