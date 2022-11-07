import React from 'react';

import Portrait from '../components/portrait/Portrait';
import Projects from './projects/index';
import Typewriter from '../components/home/Typewriter';

export default function Home() {
  return (
    <>
      <div className="p-3 border-b border-white dark:border-black">
        <Portrait />
        <Typewriter />
      </div>
      <Projects />
    </>
  );
}
