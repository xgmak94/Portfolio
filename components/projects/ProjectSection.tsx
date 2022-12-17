import { Divider } from '@mui/material';
import React from 'react';

interface props {
  title?: String;
  text: React.ReactNode;
}

export default function ProjectSection({ title, text }: props) {
  return (
    <div className="flex flex-col p-1">
      <div className="self-center text-3xl capitalize">{title}</div>
      {title ? <Divider className="bg-black dark:bg-white" /> : null}
      <div className="text-lg">{text}</div>
    </div>
  );
}
