import React from 'react';

import Portrait from '../components/portrait/Portrait';
import Projects from './projects/index';
import Typewriter from '../components/home/Typewriter';
import { Divider } from '@mui/material';
import About from './about';
import Contact from './contact';

export default function Home() {
  return (
    <>
      <div className="p-3">
        <Portrait />
        <Typewriter />
        <Divider className="border bg-black dark:bg-white" />
        <Projects />
        <Divider className="border bg-black dark:bg-white" />
        <Contact />
      </div>
    </>
  );
}
