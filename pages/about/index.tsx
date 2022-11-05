import React from 'react';

import Portrait from '../../components/portrait/Portrait';

export default function About() {
  return (
    <div className="container text-black dark:text-white">
      <div className="container my-3 text-center">
        <Portrait />
      </div>
      <div className="m-3 border border-white dark:border-black rounded-xl">
        <div className="m-3">
          <div>&gt; Gary.location</div>
          <div>&gt;&gt; Los Angeles, California</div>
        </div>
        <div className="m-3">
          <div>&gt; Gary.email</div>
          <div>&gt;&gt; xgmak94@gmail.com</div>
        </div>
        <div className="m-3">
          <div>&gt; Gary.education</div>
          <div>&gt;&gt; BS from University of California, Santa Barbara</div>
        </div>
        <div className="m-3">
          <div>&gt; Gary.major</div>
          <div>&gt;&gt; Computer Science</div>
        </div>
        <div className="m-3">
          <div>&gt; Gary.interests</div>
          <div>&gt;&gt; [ Movies, Gym, Music, Basketball, Games ]</div>
        </div>
      </div>
    </div>
  );
}
