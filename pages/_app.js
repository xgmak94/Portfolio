import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';
import react, { useEffect } from 'react';
import Head from 'next/head';
import Script from 'next/script';
import Link from 'next/link';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    require('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Gary Mak</title>
      </Head>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

function Navbar() {
  return (
    <nav id="navbar" className="navbar navbar-expand-lg mb-3">
      <div className="container-fluid">
        <Link className="navbar-brand bg-secondary" href="/">
          <button className="btn fs-3">Gary Mak</button>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <Link className="nav-link" aria-current="page" href="/">
              <button className="btn">
                <li className="nav-item">Home</li>
              </button>
            </Link>
            <Link className="nav-link" href="/projects">
              <button className="btn">
                <li className="nav-item">Projects</li>
              </button>
            </Link>
            <Link className="nav-link" href="/about">
              <button className="btn">
                <li className="nav-item">About</li>
              </button>
            </Link>
            <Link className="nav-link" href="/contact">
              <button className="btn">
                <li className="nav-item">Contact</li>
              </button>
            </Link>
            <Link className="nav-link" href="/resume.pdf">
              <button className="btn">
                <li className="nav-item">Resume</li>
              </button>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default MyApp;
