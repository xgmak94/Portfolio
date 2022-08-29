import React, { useState } from 'react';
import Image from 'next/image';

function About() {
  const [display, setDisplay] = useState('');
  const [nameDisplay, setnameDisplay] = useState('');
  const changeDisplay = (e) => {
    setDisplay((prev) => {
      let obj = {
        ...prev,
      };
      obj[e.target.getAttribute('field')] = e.target.getAttribute('data');
      return obj;
    });
  };

  return (
    <div className="container">
      <div className="text-center m-3">
        <Image src="/assets/LuckyLarrys.jpg" alt="Portrait" width="200" height="200" />
      </div>
      <div id="about-container" className="container m-3 p-3 rounded-5">
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

export default About;
