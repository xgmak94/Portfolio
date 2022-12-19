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
      <NavItem link="/resume" text="resume" setMenu={setMenu} />
    </>
  );
}
