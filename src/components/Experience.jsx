import React from 'react';

export default function Experience({ experiences }) {
  return (
    <section id="experience" className="section">
      <h2 className="section-title">Experience</h2>
      <div className="timeline">
        {experiences.map((exp) => (
          <div key={exp.id} className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="glass-panel timeline-content">
              <span className="period">{exp.period}</span>
              <h3 className="role">{exp.role}</h3>
              <h4 className="company">{exp.company}</h4>
              <p className="description">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
