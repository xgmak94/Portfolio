import React from 'react';
import { useRouter } from 'next/router';

import NavItem from './NavItem';
import ModeToggle from './ModeToggle';
import { motion } from 'framer-motion';

export default function Navbar() {
  const router = useRouter();

  return (
    <motion.nav
      className="p-3 text-black dark:text-white bg-gray-400 dark:bg-gray-700 border-b border-black dark:border-white"
      initial={{
        y: -500,
      }}
      animate={{
        y: 0,
      }}
      transition={{
        duration: 2,
      }}
    >
      <div className="flex flex-row justify-between items-center">
        <div className="container flex justify-start gap-3">
          <NavItem link="/" text="home" />
        </div>
        <div className="container flex justify-end gap-3">
          <NavItem link={router.pathname === '/' ? '#projects' : '/projects'} text="projects" />
          <NavItem link={router.pathname === '/' ? '#about' : '/about'} text="about" />
          <NavItem link={router.pathname === '/' ? '#contact' : '/contact'} text="contact" />
          <NavItem link="/resume.pdf" text="resume" />
          <ModeToggle />
        </div>
      </div>
    </motion.nav>
  );
}
