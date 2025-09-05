import React from 'react';
import NewNavigation from './components/NewNavigation';
import NewHero from './components/NewHero';
import Problems from './components/Problems';
import Solution from './components/Solution';
import Results from './components/Results';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <NewNavigation />
      <NewHero />
      <Problems />
      <Solution />
      <Results />
      <About />
      <Contact />
    </div>
  );
}

export default App;