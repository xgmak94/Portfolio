import React, { useState } from 'react';

import NavItem from './NavItem';
import ModeToggle from './ModeToggle';
import NavMenu from './NavMenu';
import NavLinks from './NavLinks';

import { motion } from 'framer-motion';

import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';

export default function Navbar() {
  const [menu, setMenu] = useState<Boolean>(false);

  return (
    <motion.nav
      className="border-b-2 border-black bg-gradient-to-r from-blue-400
      to-emerald-400 p-2
      text-black dark:border-white dark:bg-gradient-to-l
      dark:from-gray-900 dark:to-gray-600 dark:text-white"
      initial={{
        opacity: 0,
      }}
      transition={{
        duration: 2,
      }}
      whileInView={{
        opacity: 1,
      }}
    >
      <div className="flex flex-row items-center justify-between gap-3">
        <div className="container flex gap-3">
          <NavItem link="/" text="home" setMenu={setMenu} />
        </div>
        <div className="hidden gap-3 md:flex">
          <NavLinks setMenu={setMenu} />
        </div>
        <button
          className="flex self-center rounded-xl p-2 text-center text-lg hover:bg-teal-300 dark:hover:bg-gray-600 md:hidden"
          onClick={() => setMenu((prev) => !prev)}
          aria-label="menu"
        >
          {menu ? <CloseIcon /> : <MenuIcon />}
        </button>
        <ModeToggle />
      </div>
      {menu ? <NavMenu menu={menu} setMenu={setMenu} /> : null}
    </motion.nav>
  );
}
