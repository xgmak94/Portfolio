import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';
import NavItem from './NavItem';

interface Props {
  setMenu: React.Dispatch<React.SetStateAction<Boolean>>;
}

export default function NavLinks({ setMenu }: Props) {
  return (
    <>
      <NavItem link="/projects" text="projects" setMenu={setMenu} />
      <NavItem link="/about" text="about" setMenu={setMenu} />
      <NavItem link="/contact" text="contact" setMenu={setMenu} />
      <Link href="/resume.pdf" locale={false} rel="noopener noreferrer">
        <motion.button
          className="rounded-xl p-2 text-xl capitalize hover:bg-teal-500 dark:hover:bg-gray-600"
          whileHover={{ scale: 1.05 }}
        >
          resume
        </motion.button>
      </Link>
    </>
  );
}
