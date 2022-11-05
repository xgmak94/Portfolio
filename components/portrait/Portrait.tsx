import React from 'react';
import Image from 'next/image';

export default function Portrait() {
  return (
    <Image src="/Portrait.jpg" alt="Portrait" className="rounded-full" width="300" height="300" />
  );
}
