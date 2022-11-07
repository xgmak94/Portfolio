import React from 'react';

import ProjectPage from '../../components/projects/ProjectPage';

export default function Atelier() {
  return (
    <>
      <ProjectPage
        name="Atelier"
        link="http://github.com/xgmak94/Atelier"
        overview="Took over the monolithic backend database of a retail web portal. Redesigned to a microservices oriented architecture. Identified several bottlenecks in database queries. Deployed and implemented several API improvements to speed up performance to handle web scale traffic."
        tools="PostgreSQL, Express, Node.js, JavaScript, NGINX, AWS, K6, Loader.io, New Relic"
        objectives={
          <>
            <li>Redesign API into a microservices oriented architecture.</li>
            <li>
              Identified various bottlenecks and constraints through testing using K6, Loader.io,
              and New Relic.
            </li>
            <li>Improved performance over the previous API.</li>
            <li>Implement a load balancer to split up web traffic between several servers.</li>
            <li>
              Apply caching to allow subsequent requests to be returned quickly and efficiently.
            </li>
          </>
        }
      />
    </>
  );
}
