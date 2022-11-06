import React, { useState } from 'react';

import NavItem from './NavItem';
import ModeToggle from './ModeToggle';
import Link from 'next/link';
import { motion } from 'framer-motion';

import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import NavMenu from './NavMenu';

export default function Navbar() {
  const [menu, setMenu] = useState(false);

  return (
    <nav className="p-3 text-black dark:text-white bg-gray-400 dark:bg-gray-700 border-b border-white dark:border-black">
      <div className="flex flex-row justify-between items-center gap-3">
        <div className="container flex justify-start gap-3">
          <NavItem link="/" text="home" setMenu={setMenu} />
        </div>
        <div className="hidden md:flex justify-end gap-3">
          <NavMenu setMenu={setMenu} />
        </div>
        <button
          className="flex md:hidden hover:bg-gray-300 dark:hover:bg-gray-600 rounded-xl text-lg p-2 text-center self-center"
          onClick={() => setMenu((prev) => !prev)}
        >
          {menu ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
        </button>
        <ModeToggle />
      </div>
      {menu ? (
        <div className="flex flex-col gap-3 border-t border-white dark:border-black">
          <NavMenu setMenu={setMenu} />
        </div>
      ) : null}
    </nav>
  );
}
