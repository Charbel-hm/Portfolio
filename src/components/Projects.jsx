import React from 'react';

export default function Projects({ projects }) {
  return (
    <section id="projects" className="section">
      <h2 className="section-title">Featured Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="glass-panel project-card">
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            </div>
            <div className="project-actions" style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginTop: '1rem' }}>
              {project.demo && (
                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn" style={{ padding: '0.5rem 1.5rem', fontSize: '1rem' }}>
                  Visit Website
                </a>
              )}
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn-link">
                View Source →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
