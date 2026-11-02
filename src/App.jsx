import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import './App.css';

/**
 * Main Application Component
 * 
 * Demonstrates React Architecture Best Practices:
 * 1. Component Composition: Assembles specialized, focused components into a cohesive single-page portfolio.
 * 2. Separation of Concerns: Visual structure resides here, while data resides in `src/data/`.
 * 3. Semantic Layout: Organized using <header>, <main>, <section>, and <footer> for accessible DOM structure.
 */
function App() {
  return (
    <div className="portfolio-app">
      {/* Top Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      {/* Page Footer */}
      <Footer />
    </div>
  );
}

export default App;
