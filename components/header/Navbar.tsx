import React from 'react';
import Link from 'next/link';
import { MdOutlineLightMode, MdOutlineModeNight } from 'react-icons/md';

import { useTheme } from 'next-themes';

export default function Navbar() {
  const { theme, setTheme } = useTheme();

  return (
    <nav className="p-3 text-black dark:text-white bg-gray-400 dark:bg-gray-700 border-b border-black dark:border-white">
      <div className="flex flex-row justify-between items-center">
        <div className="container flex justify-start gap-3">
          <Link href="/">
            <button className="hover:bg-gray-300 dark:hover:bg-gray-600 rounded-xl text-lg p-2">
              Home
            </button>
          </Link>
        </div>
        <div className="container flex justify-end gap-3">
          <Link href="/projects">
            <button className="hover:bg-gray-300 dark:hover:bg-gray-600 rounded-xl text-lg p-2">
              Projects
            </button>
          </Link>
          <Link href="/about">
            <button className="hover:bg-gray-300 dark:hover:bg-gray-600 rounded-xl text-lg p-2">
              About
            </button>
          </Link>
          <Link href="/contact">
            <button className="hover:bg-gray-300 dark:hover:bg-gray-600 rounded-xl text-lg p-2">
              Contact
            </button>
          </Link>
          <button className="hover:bg-gray-300 dark:hover:bg-gray-600 rounded-xl text-lg p-2">
            Resume
          </button>
          <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
            {theme === 'light' ? <MdOutlineLightMode /> : <MdOutlineModeNight />}
          </button>
        </div>
      </div>
    </nav>
  );
}
