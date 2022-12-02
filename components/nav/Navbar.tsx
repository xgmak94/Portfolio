import React, { useState } from 'react';

import NavItem from './NavItem';
import ModeToggle from './ModeToggle';

import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import NavMenu from './NavMenu';
import { AnimatePresence, motion } from 'framer-motion';
import NavLinks from './NavLinks';

export default function Navbar() {
  const [menu, setMenu] = useState<Boolean>(false);

  return (
    <motion.nav
      className="text-black dark:text-white bg-cyan-200 dark:bg-neutral-700 border-b border-white dark:border-black p-2"
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
          {menu ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
        </button>
        <ModeToggle />
      </div>
      <AnimatePresence mode="wait">
        {menu ? (
          <motion.div
            className="flex flex-col border-t border-white dark:border-black p-3"
            initial={{
              x: -500,
            }}
            animate={{
              x: 0,
            }}
            exit={{
              y: -300,
            }}
            transition={{
              duration: 2,
            }}
          >
            <NavMenu menu={menu} setMenu={setMenu} />
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.nav>
  );
}
