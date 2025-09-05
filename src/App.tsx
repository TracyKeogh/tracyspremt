import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Projects from './components/Projects';
import ProjectsVariantA from './components/ProjectsVariantA';
import ProjectsVariantB from './components/ProjectsVariantB';
import ABTestWrapper from './components/ABTestWrapper';
import ABTestDashboard from './components/ABTestDashboard';
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
        <ABTestWrapper
          config={{
            testName: 'services_hover_effect',
            variants: ['variant_a', 'variant_b'],
            weights: [50, 50] // 50/50 split
          }}
          variants={{
            variant_a: <ProjectsVariantA />,
            variant_b: <ProjectsVariantB />
          }}
          fallback={<Projects />}
        />
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
      <ABTestDashboard />
    </div>
  );
}

export default App;