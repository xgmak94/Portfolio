import React from 'react';
import AboutField from './AboutField';

export default function AboutInfo() {
  return (
    <div className="p-1 border border-white dark:border-black rounded-xl">
      <AboutField question="Gary.location" answer="Los Angeles, California" />
      <AboutField question="Gary.email" answer="xgmak94@gmail.com" />
      <AboutField
        question="Gary.education"
        answer="BS from University of California, Santa Barbara"
      />
      <AboutField question="Gary.major" answer="Computer Science" />
      <AboutField question="Gary.interests" answer="[ Movies, Gym, Music, Basketball, Games ]" />
    </div>
  );
}
