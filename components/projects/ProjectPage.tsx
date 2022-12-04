import React from 'react';
import Image from 'next/image';
import ProjectSection from './ProjectSection';
import { Button } from '@mui/material';

interface props {
  name: String;
  link: String;
  overview: React.ReactNode;
  tools: React.ReactNode;
  objectives: React.ReactNode;
  deployed?: String;
}

export default function ProjectPage({ name, link, overview, tools, objectives, deployed }: props) {
  return (
    <>
      <div className="min-h-screen p-3">
        <div className="flex space-around justify-center items-center gap-3">
          {deployed && (
            <a href={deployed as string}>
              <Button
                variant="contained"
                className="text-black dark:text-white bg-blue-300 dark:bg-blue-700 hover:bg-gray-300 dark:hover:bg-gray-600"
              >
                Deployed
              </Button>
            </a>
          )}
          <a href={link as string}>
            <Button
              variant="contained"
              className="text-black dark:text-white bg-blue-300 dark:bg-blue-700 hover:bg-gray-300 dark:hover:bg-gray-600"
            >
              github
            </Button>
          </a>
          <div className="text-4xl">{name}</div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-1 items-start">
          <ProjectSection title="overview" text={overview} />
          <ProjectSection
            text={
              <div className="h-64 w-96 relative">
                <Image
                  className="object-contain w-auto h-auto"
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
