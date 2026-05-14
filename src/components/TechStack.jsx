import React from 'react';

export default function TechStack({ skills }) {
  return (
    <section id="skills" className="section">
      <h2 className="section-title">Technical Arsenal</h2>
      <div className="skills-grid">
        <div className="glass-panel skill-category">
          <h3>Full-Stack Development</h3>
          <div className="skill-list">
            {skills.development.map((skill, index) => (
              <span key={index} className="skill-item">{skill}</span>
            ))}
          </div>
        </div>

        <div className="glass-panel skill-category">
          <h3>Cybersecurity & Ops</h3>
          <div className="skill-list">
            {skills.cybersecurity.map((skill, index) => (
              <span key={index} className="skill-item">{skill}</span>
            ))}
          </div>
        </div>

        <div className="glass-panel skill-category">
          <h3>DevOps & Deployment</h3>
          <div className="skill-list">
            {skills.devops.map((skill, index) => (
              <span key={index} className="skill-item">{skill}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
