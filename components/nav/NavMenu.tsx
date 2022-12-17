import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';

import NavItem from './NavItem';

interface props {
  menu: Boolean;
  setMenu: React.Dispatch<React.SetStateAction<Boolean>>;
}

export default function NavMenu({ menu, setMenu }: props) {
  return (
    <>
      <AnimatePresence mode="wait">
        {menu ? (
          <motion.div
            className="flex flex-col border-t border-white p-3 dark:border-black"
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
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
