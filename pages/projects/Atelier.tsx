import React from 'react';
import Image from 'next/image';
import { AiFillGithub } from 'react-icons/ai';

function Atelier() {
  return (
    <>
      <div className="container mb-3">
        <h1>Atelier</h1>
        <button className="btn">
          <a href="http://github.com/xgmak94/Atelier">
            <AiFillGithub size={50} />
            Github
          </a>
        </button>
        <div className="row">
          <div className="col m-3">
            <h2>Overview</h2>
            <div>
              Took over the monolithic backend database of a retail web portal. Redesigned to a
              microservices oriented architecture. Identified several bottlenecks in database
              queries. Deployed and implemented several API improvements to speed up performance to
              handle web scale traffic.
            </div>
          </div>
          <div className="col m-3">
            <Image
              src="/assets/Atelier/Overview.jpg"
              alt="overview"
              width="100%"
              height="100%"
              layout="responsive"
              objectFit="contain"
            />
          </div>
        </div>
      </div>
      <div className="container mb-3">
        <div className="row">
          <h2>Tools</h2>
          <div>PostgreSQL, Express, Node.js, JavaScript, NGINX, AWS, K6, Loader.io, New Relic</div>
        </div>
      </div>
      <div className="container mb-3">
        <div className="row">
          <h2>Objectives</h2>
          <div>Redesign API to a microservices oriented architecture.</div>
          <div>
            Identified various bottlenecks and constraints through testing using K6, Loader.io, and
            New Relic.
          </div>
          <div>Improved performance over the previous API.</div>
          <div>Implement a load balancer to split up web traffic between several servers.</div>
          <div>
            Apply caching to allow subsequent requests to be returned quickly and efficiently.
          </div>
        </div>
      </div>
    </>
  );
}

export default Atelier;
