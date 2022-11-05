import React from 'react';

import AboutInfo from '../../components/about/AboutInfo';
import Portrait from '../../components/portrait/Portrait';

export default function About() {
  return (
    <div className="container text-black dark:text-white">
      <div className="container my-3 text-center">
        <Portrait />
      </div>
      <AboutInfo />
    </div>
  );
}
