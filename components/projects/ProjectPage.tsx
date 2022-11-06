import React from 'react';
import Image from 'next/image';
import Projects from './Projects';
import ProjectSection from './ProjectSection';

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
      <div className="m-3">
        <div className="flex space-around justify-center items-center gap-3">
          <button className="text-xl bg-gray-500 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 rounded-xl p-2">
            <a href={link}>Github</a>
          </button>
          <div className="text-4xl">{name}</div>
        </div>
        <div className="m-3 grid grid-cols-1 md:grid-cols-2 gap-3">
          <ProjectSection title="overview" text={overview} />
          <ProjectSection
            text={
              <Image
                src={`/assets/${name}/Overview.jpg`}
                alt="overview"
                width="50%"
                height="50%"
                layout="responsive"
                objectFit="contain"
              />
            }
          />
          <ProjectSection title="tools" text={tools} />
          <ProjectSection title="objectives" text={objectives} />
        </div>
      </div>
    </>
  );
}
