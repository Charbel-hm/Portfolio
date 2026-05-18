import React from 'react';

export default function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo"><span className="text-gradient">CHARBEL HAJJ MOUSSA</span></h2>
      <div className="nav-links">
        <a href="#about">About</a>
        <a href="#education">Education</a>
        <a href="#experience">Experience</a>
        <a href="#skills">Stack</a>
        <a href="#projects">Projects</a>
      </div>
    </nav>
  );
}
