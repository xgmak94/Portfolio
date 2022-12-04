import React from 'react';

import ProjectPage from '../../components/projects/ProjectPage';

export default function DiscordBot() {
  return (
    <>
      <ProjectPage
        name="Discord Bot"
        link="http://github.com/xgmak94/DiscordBot"
        overview="A personal use web application on the popular social application Discord. Responds to various commands by all users in the same Discord server. Most notably can be used to playback audio searched from youtube links. Also has additional functionality for users to explore."
        tools="JavaScript, Node.js, Discord API, ytdl-core"
        objectives={
          <>
            <li>Design an interactive Discord Bot.</li>
            <li>Allow users to interact with their friends while sharing music.</li>
            <li>Have all the functionality of a normal music player.</li>
            <li>Show the top 5 results from a youtube keyword search</li>
            <li>Additional functionality can be implemented through various other commands.</li>
          </>
        }
      />
    </>
  );
}

