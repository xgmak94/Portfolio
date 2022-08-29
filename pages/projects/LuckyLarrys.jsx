import React from 'react';
import Image from 'next/image';

function LuckyLarrys() {
  return (
    <>
      <div className="container mb-3">
        <h1>Lucky Larrys</h1>
        <a href="https://github.com/xgmak94/LUCKY-LARRY-S">Github</a>
        <div className="row">
          <div className="col m-3">
            <h2>Overview</h2>
            <div>
              Collaborrated on a team to scope out potential features. Created a full stack web
              application to simulate a casino and visualize the outcomes of various casino games.
              Handled authentication and authorization of users. Allowed users to interact with
              others through a global chatroom.
            </div>
          </div>
          <div className="col m-3">
            <Image src="/assets/LuckyLarrys/Overview.jpg" alt="overview" width="1024" height="768" />
          </div>
        </div>
      </div>
      <div className="container mb-3">
        <div className="row">
          <h2>Tools</h2>
          <div>PostgreSQL, React, Express, Node.js, JavaScript</div>
        </div>
      </div>
      <div className="container mb-3">
        <div className="row">
          <h2>Objectives</h2>
          <div>Create a performant desktop and mobile application.</div>
          <div>Implement authentication and authorization of accounts.</div>
          <div>Simulate roulette, scratchers and slots games.</div>
          <div>Keep a global winnings leaderboard.</div>
        </div>
      </div>
    </>
  );
}

export default LuckyLarrys;
