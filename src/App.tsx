import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Results from './components/Results';
import Blog from './components/Blog';
import About from './components/About';
import Contact from './components/Contact';
import { usePageTracking } from './hooks/usePageTracking';

function App() {
  // Initialize page tracking
  usePageTracking();
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div id="home">
        <Hero />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <Results />
      <div id="blog">
        <Blog />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
}

export default App;