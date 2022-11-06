import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { motion } from 'framer-motion';

interface pageProps {
  title: string;
  description: string;
}

export default function Card({ title, description }: pageProps) {
  const joined = title.split(' ').join('');

  return (
    <div className="flex flex-col text-center m-3 rounded-3xl border border-white dark:border-black">
      <Link href={`/projects/${joined}`}>
        <motion.div className="cursor-pointer m-3" whileHover={{ scale: 1.05 }}>
          <Image
            className="rounded-3xl"
            src={`/assets/${joined}.jpg`}
            alt="..."
            layout="responsive"
            width="300"
            height="300"
          />
        </motion.div>
      </Link>
      <div className="flex flex-col border-t border-black dark:border-white">
        <div className="text-xl">{title}</div>
        <div className="m-3 text-left text-lg overflow-clip h-40">{description}</div>
        <Link href={`/projects/${joined}`}>
          <motion.button
            className="border m-3 rounded-xl text-lg p-3 hover:bg-gray-300 dark:hover:bg-gray-600 justify-end"
            whileHover={{ scale: 1.05 }}
          >
            Read more
          </motion.button>
        </Link>
      </div>
    </div>
  );
}
