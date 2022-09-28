import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import Projects from '../components/projects/Projects';

export default function Home() {
  return (
    <>
      <div className="container text-secondary">
        <div className="container text-center">
          <Image
            src="/Portrait.jpg"
            alt="Portrait"
            className="rounded-circle"
            width="300"
            height="300"
          />
        </div>
        <h1 className="display-4">Hello, world!</h1>
        <h3>I&apos;m Gary Mak</h3>
        <h3>Software engineer with a degree in Computer Science.</h3>
        <p className="lead">
          <button className="btn btn-primary btn-lg">
            <Link href="/about">Learn more</Link>
          </button>
        </p>
        <hr className="my-4" />
      </div>
      <Projects />
    </>
  );
}
