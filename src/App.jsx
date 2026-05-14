import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Education from './components/Education';
import Experience from './components/Experience';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import portfolioData from './data.json';
import './index.css';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main className="container">
        <Hero personal={portfolioData.personal} />
        <Education education={portfolioData.education} />
        <Experience experiences={portfolioData.experiences} />
        <TechStack skills={portfolioData.skills} />
        <Projects projects={portfolioData.projects} />
      </main>
      <footer className="footer text-secondary">
        <p>© {new Date().getFullYear()} {portfolioData.personal.name}. Secure & Scalable.</p>
      </footer>
    </div>
  );
}

export default App;
