import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
function Card({ title, description }) {
  const joined = title.split(' ').join('');

  return (
    <div className="card m-3 rounded-5">
      <Link href={`/projects/${joined}`}>
        <div className="card-img card-img-top border-bottom border-5" style={{ cursor: 'pointer' }}>
          <Image className="rounded-5" src={`/assets/${joined}.jpg`} alt="..." width="400" height="400" />
        </div>
      </Link>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <Link href={`/projects/${joined}`}>
          <button className="btn btn-primary">Read more</button>
        </Link>
      </div>
    </div>
  );
}

export default Card;
