import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import Projects from '../components/projects/Projects';

export default function Home() {
  return (
    <>
      <div className="container text-secondary">
        <h1 className="display-4">Hello, world!</h1>
        <h2>I&apos;m Gary Mak</h2>
        <h3>Software engineer with a degree in Computer Science</h3>
        <hr className="my-4" />
        <p className="lead">
          <button className="btn btn-primary btn-lg">
            <Link href="/about">Learn more</Link>
          </button>
        </p>
        </div>
        <Projects />
    </>
  );
}
