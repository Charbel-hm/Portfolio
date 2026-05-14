import React from 'react';

export default function Contact({ personal }) {
  return (
    <section id="contact" className="section contact-section">
      <h2 className="section-title">Get In Touch</h2>
      <div className="glass-panel contact-card">
        <p className="contact-message">
          I'm currently open for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
        <a href={`mailto:${personal.email}`} className="btn btn-primary">Say Hello</a>
        <div className="social-links">
          <a href={personal.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a href={personal.github} target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </div>
    </section>
  );
}
