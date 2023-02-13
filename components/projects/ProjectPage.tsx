import React from 'react';
import Image from 'next/image';
import ProjectSection from './ProjectSection';
import CircleIcon from '@mui/icons-material/Circle';

interface props {
  name: String;
  link: String;
  overview: React.ReactNode;
  tools: React.ReactNode;
  objectives: React.ReactNode;
  live?: String;
}

export default function ProjectPage({
  name,
  link,
  overview,
  tools,
  objectives,
  live,
}: props) {
  return (
    <>
      <div className="min-h-screen p-3">
        <div className="space-around flex items-center justify-center gap-3">
          {live && (
            <a href={live as string}>
              <button className="flex items-center rounded-lg bg-blue-300 p-2 text-xl font-semibold capitalize text-black hover:scale-105 hover:bg-gray-300 dark:bg-blue-700 dark:text-white dark:hover:bg-gray-600">
                <CircleIcon fontSize="small" className="text-[#0f0]" />
                Live
              </button>
            </a>
          )}
          <a href={link as string}>
            <button className="rounded-lg bg-blue-300 p-2 text-xl font-semibold capitalize text-black hover:scale-105 hover:bg-gray-300 dark:bg-blue-700 dark:text-white dark:hover:bg-gray-600">
              GitHub
            </button>
          </a>
          <div className="text-4xl">{name}</div>
        </div>
        <div className="grid grid-cols-1 items-start gap-1 md:grid-cols-2">
          <ProjectSection title="overview" text={overview} />
          <ProjectSection
            text={
              <div className="relative h-64 w-96">
                <Image
                  className="h-auto w-auto object-contain"
                  src={`/assets/${name}/Overview.jpg`}
                  alt="overview"
                  layout="fill"
                />
              </div>
            }
          />
          <ProjectSection title="objectives" text={objectives} />
          <ProjectSection title="tools" text={tools} />
        </div>
      </div>
    </>
  );
}
