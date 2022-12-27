import React from 'react';

import ProjectPage from '../../components/projects/ProjectPage';

export default function LuckyLarrys() {
  return (
    <>
      <ProjectPage
        name={'Movie Board'}
        link={'https://github.com/xgmak94/Movieban'}
        live={'https://movieban.vercel.app/'}
        overview={
          'Created a kanban inspired board. Receives movie data from TMDB API to display information about various movies. Individual users are allowed to add these movies onto their list to keep track of any that pique their interest.'
        }
        tools={
          <>
            <li>Frontend : React, Next.js, JavaScript, TypeScript</li>
            <li>Backend : Supabase, PostgreSQL</li>
            <li>Authentication : Google, GitHub</li>
            <li>Styling : TailwindCSS, MaterialUI</li>
          </>
        }
        objectives={
          <>
            <li>Added Email, Google, GitHub authentication.</li>
            <li>Added drag and dropping of items to various lists.</li>
            <li>Kept track of all users favorites on a PostgreSQL database.</li>
            <li>Implement light/dark mode switching.</li>
          </>
        }
      />
    </>
  );
}
