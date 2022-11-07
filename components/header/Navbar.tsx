import React, { useState } from 'react';

import NavItem from './NavItem';
import ModeToggle from './ModeToggle';

import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import NavMenu from './NavMenu';
import { AnimatePresence, motion } from 'framer-motion';

export default function Navbar() {
  const [menu, setMenu] = useState(false);

  return (
    <nav className="p-3 text-black dark:text-white bg-gray-500 dark:bg-gray-700 border-b border-white dark:border-black">
      <div className="flex flex-row justify-between items-center gap-3">
        <div className="container flex gap-3">
          <NavItem link="/" text="home" setMenu={setMenu} />
        </div>
        <motion.div
          className="hidden md:flex gap-3"
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
          <NavMenu setMenu={setMenu} />
          <button
            className="flex md:hidden hover:bg-gray-300 dark:hover:bg-gray-600 rounded-xl text-lg p-2 text-center self-center"
            onClick={() => setMenu((prev) => !prev)}
          >
            {menu ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
          </button>
          <ModeToggle />
        </motion.div>
      </div>
      <AnimatePresence mode="wait">
        {menu ? (
          <motion.div
            className="flex flex-col gap-3 border-t border-white dark:border-black"
            initial={{
              y: -500,
            }}
            animate={{
              y: 0,
            }}
            exit={{
              y: -500,
            }}
            transition={{
              duration: 1,
            }}
          >
            <NavMenu setMenu={setMenu} />
          </motion.div>
        ) : null}
      </AnimatePresence>
    </nav>
  );
}
