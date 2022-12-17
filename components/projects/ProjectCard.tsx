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
    <motion.div
      className="flex flex-col gap-1 rounded-3xl border-2 border-black text-center dark:border-white"
      initial={{
        x: 200,
        opacity: 0,
      }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
    >
      <motion.div
        className="relative h-60 cursor-pointer"
        whileHover={{ scale: 1.05 }}
      >
        <Link href={`/projects/${joined}`}>
          <Image
            className="h-auto w-auto rounded-xl object-contain"
            src={`/assets/${joined}.jpg`}
            alt="Main image"
            layout="fill"
          />
        </Link>
      </motion.div>
      <Divider className="border bg-black dark:bg-white" />
      <div className="p-1 text-2xl font-bold">{title}</div>
      <div className="h-28 p-1 text-left text-lg">{description}</div>
      <Divider className="border bg-black dark:bg-white" />
      <div className="p-1">
        <Link href={`/projects/${joined}`}>
          <button
            className="rounded-lg border border-blue-800 bg-blue-300 p-2 text-xl font-semibold capitalize
          text-black hover:scale-105
          hover:bg-gray-300 dark:bg-blue-700 dark:text-white dark:hover:bg-gray-600"
          >
            Read More
          </button>
        </Link>
      </div>
    </motion.div>
  );
}
