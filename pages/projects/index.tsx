import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Projects from '../../components/projects/Projects';

export default function ProjectsPage() {
  return (
    <>
      <div className="container text-center">
        <Projects />
      </div>
    </>
  );
}
