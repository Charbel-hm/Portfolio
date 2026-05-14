import React from 'react';

export default function Education({ education }) {
  return (
    <section id="education" className="section">
      <h2 className="section-title">Academic Background</h2>
      <div className="timeline">
        {education.map((edu) => (
          <div key={edu.id} className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="glass-panel timeline-content">
              <span className="period">{edu.period}</span>
              <h3 className="role">{edu.degree}</h3>
              <h4 className="company">{edu.school}</h4>
              <p className="description">{edu.focus}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
