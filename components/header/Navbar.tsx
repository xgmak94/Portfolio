import React from 'react';

import NavItem from './NavItem';
import ModeToggle from './ModeToggle';

export default function Navbar() {
  return (
    <nav className="p-3 text-black dark:text-white bg-gray-400 dark:bg-gray-700 border-b border-white dark:border-black">
      <div className="flex flex-row justify-between items-center">
        <div className="container flex justify-start gap-3">
          <NavItem link="/" text="home" />
        </div>
        <div className="container flex justify-end gap-3">
          <NavItem link="/projects" text="projects" />
          <NavItem link="/about" text="about" />
          <NavItem link="/contact" text="contact" />
          <NavItem link="/Gary%20Mak%20resume.pdf" text="resume" />
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
}
