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
      className="flex flex-col gap-1 text-center rounded-3xl border-2 border-black dark:border-white"
      initial={{
        x: 200,
        opacity: 0,
      }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
    >
      <motion.div className="h-60 relative cursor-pointer" whileHover={{ scale: 1.05 }}>
        <Link href={`/projects/${joined}`}>
          <Image
            className="object-contain w-auto h-auto rounded-xl"
            src={`/assets/${joined}.jpg`}
            alt="Main image"
            layout="fill"
          />
        </Link>
      </motion.div>
      <Divider className="border bg-black dark:bg-white" />
      <div className="p-1 text-2xl font-bold">{title}</div>
      <div className="p-1 text-left text-lg h-28">{description}</div>
      <Divider className="border bg-black dark:bg-white" />
      <div className="p-1">
        <Link href={`/projects/${joined}`}>
          <button className="rounded-lg text-xl p-2 capitalize font-semibold hover:scale-105 border border-blue-800
          text-black dark:text-white
          bg-blue-300 dark:bg-blue-700 hover:bg-gray-300 dark:hover:bg-gray-600">
            Read More
          </button>
        </Link>
      </div>
    </motion.div>
  );
}
