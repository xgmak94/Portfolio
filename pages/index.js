import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <div className="container text-secondary">
        <h1 className="display-4">Hello, world!</h1>
        <p className="lead">I&apos;m Gary Mak</p>
        <p>Software engineer with a degree in Computer Science</p>
        <hr className="my-4" />
        <p>
          It uses utility classes for typography and spacing to space content out within the larger
          container.
        </p>
        <p className="lead">
          <button className="btn btn-primary btn-lg">
            <Link href="/about">
              Learn more
            </Link>
          </button>
        </p>
      </div>
    </>
  );
}
