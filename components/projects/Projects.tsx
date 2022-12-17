import React, { Key } from 'react';
import ProjectCard from './ProjectCard';

interface Project {
  title: String;
  description: String;
}

// list of projects
const projects: Project[] = [
  {
    title: 'Movie Board',
    description:
      'A movie board to look for and keep track of various movies that peak your interest.',
  },
  {
    title: 'Lucky Larrys',
    description:
      'A web application allowing users to play and simulate the outcomes of various casino games.',
  },
  {
    title: 'Discord Bot',
    description:
      'A functional discord application that responds to commands to playback music among other things.',
  },
  {
    title: 'Atelier',
    description:
      'Resigned the RESTful API of an ecommerce web portal into a microservices oriented architecture to handle web traffic.',
  },
];

export default function Projects() {
  return (
    <>
      <div className="flex justify-start p-3 text-4xl">Projects</div>
      <div className="grid gap-3 text-black dark:text-white sm:grid-cols-1 lg:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard
            key={project.title as Key}
            title={project.title}
            description={project.description}
          />
        ))}
      </div>
    </>
  );
}
