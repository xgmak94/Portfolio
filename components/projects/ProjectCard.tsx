import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { motion } from 'framer-motion';
import { Button, Divider } from '@mui/material';

interface props {
  title: String;
  description: String;
}

export default function Card({ title, description }: props) {
  const joined: String = title.split(' ').join('');

  return (
    <div className="flex flex-col text-center rounded-3xl border border-white dark:border-black">
      <Link href={`/projects/${joined}`}>
        <motion.button className="p-2" whileHover={{ scale: 1.05 }}>
          <Image
            className="object-contain w-auto h-auto rounded-lg"
            src={`/assets/${joined}.jpg`}
            alt="Main image"
            layout="responsive"
            width="100"
            height="100"
          />
        </motion.button>
      </Link>
      <Divider className="bg-white dark:bg-black" />
      <div className="p-1 text-2xl font-bold">{title}</div>
      <div className="p-1 text-left text-lg overflow-clip h-40">{description}</div>
      <Divider className="bg-white dark:bg-black" />
      <div className="p-1">
        <Link href={`/projects/${joined}`}>
          <motion.div whileHover={{ scale: 1.05 }}>
            <Button
              variant="outlined"
              className="border p-3 rounded-xl font-semibold text-black dark:text-white
            bg-blue-300 dark:bg-blue-700
            hover:bg-gray-300 dark:hover:bg-gray-600 justify-end capitalize"
            >
              Read More
            </Button>
          </motion.div>
        </Link>
      </div>
    </div>
  );
}
