import React, { useState } from 'react';

export default function Hero({ personal }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id="about" className="section hero-section">
      <h1 className="hero-title">
        {personal.name.toUpperCase()}
      </h1>
      <div className="hero-container">
        <div className="hero-content">
          <h3 className="hero-subtitle text-gradient">{personal.title}</h3>
          <p className="hero-bio">{personal.bio}</p>
          <div className="hero-actions">
            <a href="#projects" className="btn">Initiate Sequence</a>
          </div>
        </div>
        <div className="hero-image-wrapper">
          <div 
            className="hero-image-frame glass-panel clickable-image" 
            onClick={() => setIsOpen(true)}
            style={{ cursor: 'pointer' }}
          >
            <img src={personal.picture || "/vite.svg"} alt={personal.name} className="hero-image" />
          </div>
        </div>
      </div>

      {personal.passions && personal.passions.length > 0 && (
        <div className="passions-section">
          <h2 className="passions-heading">
            <span className="text-gradient">BEYOND THE CODE</span>
          </h2>
          <div className="passions-grid">
            {personal.passions.map((passion, index) => (
              <div className="passion-card glass-panel" key={index}>
                <span className="passion-icon">{passion.icon}</span>
                <h4 className="passion-label">{passion.label}</h4>
                <p className="passion-desc">{passion.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {isOpen && (
        <div className="image-modal-overlay" onClick={() => setIsOpen(false)}>
          <div className="image-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="image-modal-close" onClick={() => setIsOpen(false)}>&times;</button>
            <img src={personal.picture || "/vite.svg"} alt={personal.name} className="image-modal-img" />
          </div>
        </div>
      )}
    </section>
  );
}
