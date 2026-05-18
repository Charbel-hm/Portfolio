import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Education from './components/Education';
import Experience from './components/Experience';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import portfolioData from './data.json';
import './index.css';

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((el) => observer.observe(el));

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="app-container">
      <Navbar />
      <main className="container">
        <Hero personal={portfolioData.personal} />
        <div className="reveal">
          <Education education={portfolioData.education} />
        </div>
        <div className="reveal">
          <Experience experiences={portfolioData.experiences} />
        </div>
        <div className="reveal">
          <TechStack skills={portfolioData.skills} />
        </div>
        <div className="reveal">
          <Projects projects={portfolioData.projects} />
        </div>
      </main>
      <footer className="footer text-secondary">
        <div className="footer-socials">
          <a href={portfolioData.personal.github} target="_blank" rel="noopener noreferrer" className="social-icon-link" title="GitHub">
            <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
          </a>
          <a href={portfolioData.personal.linkedin} target="_blank" rel="noopener noreferrer" className="social-icon-link" title="LinkedIn">
            <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
          </a>
          <a href={portfolioData.personal.whatsapp} target="_blank" rel="noopener noreferrer" className="social-icon-link" title="WhatsApp">
            <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
          </a>
          <a href={portfolioData.personal.instagram} target="_blank" rel="noopener noreferrer" className="social-icon-link" title="Instagram">
            <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
          </a>
        </div>
        <p style={{ marginTop: '1rem' }}>Designed & Built by {portfolioData.personal.name}</p>
        <p style={{ fontSize: '0.9rem', opacity: 0.6, letterSpacing: '3px', margin: '0.3rem 0' }}>. SECURE & SCALABLE .</p>
        <p style={{ fontSize: '0.85rem', opacity: 0.4 }}>© {new Date().getFullYear()} All Rights Reserved</p>
      </footer>
    </div>
  );
}

export default App;
