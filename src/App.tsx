import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Media from './components/Media';
import About from './components/About';
import Now from './components/Now';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div id="home">
        <Hero />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="media">
        <Media />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="now">
        <Now />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
}

export default App;