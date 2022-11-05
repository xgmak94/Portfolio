import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface pageProps {
  title: string;
  description: string;
}

export default function Card({ title, description }: pageProps) {
  const joined = title.split(' ').join('');

  return (
    <div className="flex flex-col text-center m-2 rounded-3xl border border-white dark:border-black">
      <Link href={`/projects/${joined}`}>
        <div className="cursor-pointer">
          <Image
            className="rounded-3xl"
            src={`/assets/${joined}.jpg`}
            alt="..."
            layout="responsive"
            width="300"
            height="300"
          />
        </div>
      </Link>
      <div className="flex flex-col">
        <hr className="border-t border-black dark:border-white"/>
        <h5 className="text-xl">{title}</h5>
        <p className="m-3 text-left text-lg">{description}</p>
        <Link href={`/projects/${joined}`}>
          <button className="border m-3 rounded-xl text-lg p-3 hover:bg-gray-300 dark:hover:bg-gray-600 justify-end">
            Read more
          </button>
        </Link>
      </div>
    </div>
  );
}
