import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { motion } from 'framer-motion';
import { Divider } from '@mui/material';

interface props {
  title: String;
  description: String;
}

export default function Card({ title, description }: props) {
  const joined: String = title.split(' ').join('');

  return (
    <div className="flex flex-col text-center rounded-3xl border border-white gap-1 dark:border-black">
      <motion.div className="h-72 relative cursor-pointer" whileHover={{ scale: 1.05 }}>
        <Link href={`/projects/${joined}`}>
          <Image
            className="object-contain w-auto h-auto rounded-xl"
            src={`/assets/${joined}.jpg`}
            alt="Main image"
            layout="fill"
          />
        </Link>
      </motion.div>
      <Divider className="bg-white dark:bg-black" />
      <div className="p-1 text-2xl font-bold">{title}</div>
      <div className="p-1 text-left text-lg overflow-clip h-40">{description}</div>
      <Divider className="bg-white dark:bg-black" />
      <div className="p-1">
        <Link href={`/projects/${joined}`}>
          <button className="rounded-lg text-xl p-2 capitalize font-semibold text-black dark:text-white hover:scale-105 bg-blue-300 dark:bg-blue-700 hover:bg-gray-300 dark:hover:bg-gray-600">
            Read More
          </button>
        </Link>
      </div>
    </div>
  );
}
