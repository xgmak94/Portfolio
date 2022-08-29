import config from '../../config.js';
import react, { useState } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

import { getAnalytics } from 'firebase/analytics';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

const firebaseConfig = config;

const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const firestore = firebase.firestore();

let analytics;
if (app.name && typeof window !== 'undefined') {
  analytics = getAnalytics(app);
}

function Comments() {
  const messagesRef = firestore.collection('comments');

  const [info, setInfo] = useState({
    name: '',
    email: '',
    comment: '',
  });

  const submitComment = async (e) => {
    e.preventDefault();

    await messagesRef.add({
      name: info.name,
      email: info.email,
      comment: info.comment,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setInfo({
      name: '',
      email: '',
      comment: '',
    });
  };

  const reset = (e) => {
    e.preventDefault();

    setInfo({
      name: '',
      email: '',
      comment: '',
    });
  };

  return (
    <>
      <form className="p-5" onSubmit={submitComment}>
        <div className="text-start form-floating m-3">
          <input
          type="text"
          className="form-control"
            id="username"
            value={info.name}
            onChange={(e) => setInfo({ ...info, name: e.target.value })}
            required
          />
          <label htmlFor="username">
            Name
          </label>
        </div>
        <div className="text-start form-floating m-3">
          <input
            id="email"
            value={info.email}
            className="form-control"
            onChange={(e) => setInfo({ ...info, email: e.target.value })}
            required
          />
          <label htmlFor="email" className="form-label">
            Email
          </label>
        </div>
        <div className="text-start form-floating m-3">
          <textarea
            id="comment"
            className="form-control"
            value={info.comment}
            onChange={(e) => setInfo({ ...info, comment: e.target.value })}
            rows={5}
            required
          />
          <label htmlFor="comment" className="form-label" required>
            Comment
          </label>
        </div>
        <div className="container p-3">
          <div className="row">
            <div className="col">
              <button className="btn btn-secondary" type="submit">
                Comment
              </button>
            </div>
            <div className="col">
              <button className="btn btn-secondary" type="reset" onClick={reset}>
                Reset
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default Comments;
