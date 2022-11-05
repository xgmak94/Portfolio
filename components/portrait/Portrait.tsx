import React from 'react';
import Image from 'next/image';

import { motion } from 'framer-motion';

export default function Portrait() {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 2,
      }}
    >
      <Image src="/Portrait.jpg" alt="Portrait" className="rounded-full" width="300" height="300" />
    </motion.div>
  );
}
