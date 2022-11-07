import React from 'react';

import { Cursor, useTypewriter } from 'react-simple-typewriter';

export default function Typewriter() {
  const [text, count] = useTypewriter({
    words: ["Hello, I'm Gary Mak", 'Software Developer', 'Based in Los Angeles, California'],
    loop: true,
    typeSpeed: 60,
    delaySpeed: 2000,
  });

  return (
    <div className="flex text-4xl justify-center p-3">
      <div>{text}</div>
      <Cursor />
    </div>
  );
}
