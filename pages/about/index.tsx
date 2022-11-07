import React from 'react';

import AboutInfo from '../../components/about/AboutInfo';
import Portrait from '../../components/portrait/Portrait';

export default function About() {
  return (
    <div className="m-5">
      <Portrait />
      <AboutInfo />
    </div>
  );
}
