import React, { useState } from 'react';

import NavItem from './NavItem';
import ModeToggle from './ModeToggle';
import NavMenu from './NavMenu';
import NavLinks from './NavLinks';

import { motion } from 'framer-motion';

import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';

export default function Navbar() {
  const [menu, setMenu] = useState<Boolean>(false);

  return (
    <motion.nav
      className="text-black dark:text-white border-b border-white dark:border-black p-2
      bg-gradient-to-r from-blue-400 to-emerald-400
      dark:bg-gradient-to-l dark:from-gray-900 dark:to-gray-600"
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
      <div className="flex flex-row justify-between items-center gap-3">
        <div className="container flex gap-3">
          <NavItem link="/" text="home" setMenu={setMenu} />
        </div>
        <div className="hidden md:flex gap-3">
          <NavLinks setMenu={setMenu} />
        </div>
        <button
          className="flex md:hidden hover:bg-teal-300 dark:hover:bg-gray-600 rounded-xl text-lg p-2 text-center self-center"
          onClick={() => setMenu((prev) => !prev)}
          aria-label="menu"
        >
          {menu ? <DarkModeOutlinedIcon /> : <LightModeOutlinedIcon />}
        </button>
        <ModeToggle />
      </div>
      {menu ? <NavMenu menu={menu} setMenu={setMenu} /> : null}
    </motion.nav>
  );
}
