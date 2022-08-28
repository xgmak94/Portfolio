import React from 'react';
import Link from 'next/link';

function navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-slate-400 text-white mb-3 border-b border-indigo-400">
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <Link href="/">
        <button className="btn navbar-brand">Home</button>
      </Link>
      <div className="navbar-collapse collapse">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link href="/projects">
              <button className="btn">Projects</button>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/about">
              <button className="btn">About</button>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/contact">
              <button className="btn">Contact</button>
            </Link>
          </li>
          <li className="nav-item">
            <a href="resume.pdf">
              <button className="btn">Resume</button>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default navbar;
