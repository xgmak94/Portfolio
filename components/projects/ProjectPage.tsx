import React from 'react';
import Image from 'next/image';
import ProjectSection from './ProjectSection';
import { Button } from '@mui/material';

interface props {
  name: String;
  link: String;
  overview: String;
  tools: String;
  objectives: React.ReactNode;
}

export default function ProjectPage({ name, link, overview, tools, objectives }: props) {
  return (
    <>
      <div className="p-3">
        <div className="flex space-around justify-center items-center gap-3">
          <Button
            variant="contained"
            className="bg-blue-300 dark:bg-blue-700 hover:bg-gray-300 dark:hover:bg-gray-600"
          >
            <a href={link as string}>github</a>
          </Button>
          <div className="text-4xl">{name}</div>
        </div>
        <div className="m-3 grid grid-cols-1 md:grid-cols-2 gap-1 items-start">
          <ProjectSection title="overview" text={overview} />
          <ProjectSection
            text={
              <Image
                className="object-contain w-auto h-auto"
                src={`/assets/${name}/Overview.jpg`}
                alt="overview"
                width="100"
                height="100"
                layout="responsive"
              />
            }
          />
          <ProjectSection title="objectives" text={objectives} />
          <ProjectSection title="tools" text={tools} />
        </div>
      </div>
    </>
  );
}
