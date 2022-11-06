import React from 'react';
import ProjectCard from './ProjectCard';

export default function Projects() {
  return (
    <div className="self-center container grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 text-black dark:text-white">
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
  );
}
