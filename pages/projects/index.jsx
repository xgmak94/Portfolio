import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

let projects = [
  {
    name: 'Lucky Larrys',
  },
  {
    name: 'Discord Bot',
  },
  {
    name: 'Atelier',
  },
];

function Projects() {
  return (
    <>
      <div id="projects" className="container text-center">
        <div id="projects-grid" className="row">
          {projects.map((project) => {
            let joined = project.name.split(' ').join('');
            return (
              <Link key={project.name} href={`/projects/${joined}`}>
                <button className="col m-3 btn">
                  <h3>{project.name}</h3>
                  <div key={project.name} id="projects-grid-item">
                    <div>
                      <Image
                        id="project-icon"
                        className="rounded-circle"
                        src={`/assets/${joined}.jpg`}
                        alt="project"
                        width="200"
                        height="200"
                      />
                    </div>
                  </div>
                </button>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Projects;
