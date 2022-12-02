import React from 'react';

import Portrait from '../components/portrait/Portrait';
import Projects from './projects/index';
import Typewriter from '../components/home/Typewriter';
import { Divider } from '@mui/material';

export default function Home() {
  return (
    <>
      <div className="p-3">
        <Portrait />
        <Typewriter />
        <Divider />
        <Projects />
      </div>
    </>
  );
}
