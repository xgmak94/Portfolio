import React from 'react';
import Image from 'next/image';
import { AiFillGithub } from 'react-icons/ai';

import ProjectPage from '../../components/projects/ProjectPage';

function DiscordBot() {
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
            <li>Additional functionality can be implemented through various other commands.</li>
          </>
        }
      />
    </>
  );
}

export default DiscordBot;
