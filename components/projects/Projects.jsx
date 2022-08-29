import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Card from './Card';

function Projects() {
  return (
    <div className="container">
      <div className="card-group text-secondary">
        <Card
          title="Lucky Larrys"
          description="A web application allowing users to play and simulate the outcomes of various casino games."
        />
        <Card
          title="Discord Bot"
          description="A functional discord application that responds to commands to playback music among other things."
        />
        <Card
          title="Atelier"
          description="Resigned the RESTful API of an ecommerce web portal to handle web traffic."
        />
      </div>
    </div>
  );
}

export default Projects;
