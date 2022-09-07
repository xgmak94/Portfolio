import React from 'react';
import Image from 'next/image';
import { AiFillGithub } from 'react-icons/ai';

function DiscordBot() {
  return (
    <>
      <div className="container mb-3">
        <h1>Discord Bot</h1>
        <button className="btn">
          <a href="http://github.com/xgmak94/discordBot">
            <AiFillGithub size={50} />
            Github
          </a>
        </button>
        <div className="row">
          <div className="col m-3">
            <h2>Overview</h2>
            <div>
              A personal use web application on the popular social application Discord. Responds to
              various commands by all users in the same Discord server. Most notably can be used to
              playback audio searched from youtube links. Also has additional functionality for
              users to explore.
            </div>
          </div>
          <div className="col m-3">
            <Image
              src="/assets/DiscordBot/Overview.jpg"
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
          <div>JavaScript, Node.js, Discord API, ytdl-core</div>
        </div>
      </div>
      <div className="container mb-3">
        <div className="row">
          <h2>Objectives</h2>
          <div>Design an interactive Discord Bot.</div>
          <div>Allow users to interact with their friends while sharing music.</div>
          <div>Have all the functionality of a normal music player.</div>
          <div>Additional functionality can be implemented through various other commands.</div>
        </div>
      </div>
    </>
  );
}

export default DiscordBot;
