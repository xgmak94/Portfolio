import React from 'react';
import Image from 'next/image';

import { motion } from 'framer-motion';

export default function Portrait() {
  return (
    <div className="flex justify-center text-center">
      <motion.div
        initial={{
          opacity: 0,
        }}
        transition={{
          duration: 2,
        }}
        whileInView={{
          opacity: 1,
        }}
      >
        <Image
          src="/Portrait.jpg"
          alt="Portrait"
          className="rounded-full"
          width="300"
          height="300"
        />
      </motion.div>
    </div>
  );
}
