import React from 'react';
import AboutField from './AboutField';

export default function AboutInfo() {
  return (
    <div className="m-5 border border-white dark:border-black rounded-xl">
      <AboutField>
        <div>&gt; Gary.location</div>
        <div>&gt;&gt; Los Angeles, California</div>
      </AboutField>
      <AboutField>
        <div>&gt; Gary.location</div>
        <div>&gt;&gt; Los Angeles, California</div>
      </AboutField>
      <AboutField>
        <div>&gt; Gary.email</div>
        <div>&gt;&gt; xgmak94@gmail.com</div>
      </AboutField>
      <AboutField>
        <div>&gt; Gary.education</div>
        <div>&gt;&gt; BS from University of California, Santa Barbara</div>
      </AboutField>
      <AboutField>
        <div>&gt; Gary.major</div>
        <div>&gt;&gt; Computer Science</div>
      </AboutField>
      <AboutField>
        <div>&gt; Gary.interests</div>
        <div>&gt;&gt; [ Movies, Gym, Music, Basketball, Games ]</div>
      </AboutField>
    </div>
  );
}
