import React from 'react';

export default function Hero({ personal }) {
  return (
    <section id="about" className="section hero-section">
      <div className="hero-content">
        <h1 className="hero-title">
          {personal.name.toUpperCase()}
        </h1>
        <h3 className="hero-subtitle text-gradient">{personal.title}</h3>
        <p className="hero-bio">{personal.bio}</p>
        <div className="hero-actions">
          <a href="#projects" className="btn">Initiate Sequence</a>
        </div>
      </div>
    </section>
  );
}
