import React from 'react';
import Image from 'next/image';
import { AiFillGithub } from 'react-icons/ai';
import ProjectPage from '../../components/projects/ProjectPage';

function LuckyLarrys() {
  return (
    <>
      <ProjectPage
        name="Lucky Larrys"
        link="https://github.com/xgmak94/LUCKY-LARRY-S"
        overview="Collaborrated on a team to scope out potential features. Created a full stack web application to simulate a casino and visualize the outcomes of various casino games. Handled authentication and authorization of users. Allowed users to interact withothers through a global chatroom."
        tools="PostgreSQL, React, Express, Node.js, JavaScript"
        objectives={
          <>
            <li>Create a performant desktop and mobile application.</li>
            <li>Implement authentication and authorization of accounts.</li>
            <li>Simulate roulette, scratchers and slots games.</li>
            <li>Keep a global winnings leaderboard.</li>
          </>
        }
      />
    </>
  );
}

export default LuckyLarrys;
