import React from 'react';
import ProjectCard from './ProjectCard';

export default function Projects() {
  return (
    <>
      <div className="flex justify-start text-4xl p-3">Projects</div>
      <div className="gap-3 grid lg:grid-cols-2 sm:grid-cols-1 text-black dark:text-white">
        <ProjectCard
          title="Movie Board"
          description="A movie board to look for and keep track of various movies that peak your interest."
        />
        <ProjectCard
          title="Lucky Larrys"
          description="A web application allowing users to play and simulate the outcomes of various casino games."
        />
        <ProjectCard
          title="Discord Bot"
          description="A functional discord application that responds to commands to playback music among other things."
        />
        <ProjectCard
          title="Atelier"
          description="Resigned the RESTful API of an ecommerce web portal into a microservices oriented architecture to handle web traffic."
        />
      </div>
    </>
  );
}
