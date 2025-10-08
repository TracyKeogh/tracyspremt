import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Results from './components/Results';
import About from './components/About';
import Contact from './components/Contact';
import BannerGenerator from './components/BannerGenerator';
import Blog from './components/Blog';
import BlogList from './components/BlogList';
import { usePageTracking } from './hooks/usePageTracking';

function HomePage() {
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
      <div id="about">
        <About />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/imagemaker" element={<BannerGenerator />} />
        <Route path="/blog" element={<BlogList />} />
        <Route path="/blog/ai-banner-generator" element={<Blog />} />
      </Routes>
    </Router>
  );
}

export default App;