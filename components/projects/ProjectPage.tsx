import React, { ReactText } from 'react';
import Image from 'next/image';

interface projectProps {
  name: string;
  link: string;
  overview: string;
  tools: string;
  objectives: React.ReactNode;
}

export default function ProjectPage({ name, link, overview, tools, objectives }: projectProps) {
  return (
    <>
      <div className="m-3 grid grid-cols-2 gap-3">
        <div>
          <div className="flex items-center gap-3">
            <button className="text-xl bg-gray-500 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 rounded-xl p-2">
              <a href={link}>Github</a>
            </button>
            <div className="text-4xl">{name}</div>
          </div>
          <div className="container flex flex-col">
            <div className="text-3xl self-center">Overview</div>
            <div className="text-lg">{overview}</div>
          </div>
        </div>
        <div className="m-3">
          <Image
            src={`/assets/${name}/Overview.jpg`}
            alt="overview"
            width="50%"
            height="50%"
            layout="responsive"
            objectFit="contain"
          />
        </div>
        <div className="container flex flex-col">
          <div className="text-3xl self-center">Tools</div>
          <div className="text-lg">{tools}</div>
        </div>
        <div className="container flex flex-col">
          <div className="text-3xl self-center">Objectives</div>
          <ul className="list-disc list-inside text-lg">{objectives}</ul>
        </div>
      </div>
    </>
  );
}
