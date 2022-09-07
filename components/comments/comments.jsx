import react, { useState } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

import { getAnalytics } from 'firebase/analytics';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_API_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const firestore = firebase.firestore();

let analytics;
if (app.name && typeof window !== 'undefined') {
  analytics = getAnalytics(app);
}

function Comments() {
  const messagesRef = firestore.collection('comments');

  const [submitted, setSubmitted] = useState(false);

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

    setSubmitted((prev) => {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
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
      {submitted && (
        <div className="alert alert-success" role="alert">
          Thanks for the comment!
        </div>
      )}
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
          <label htmlFor="username">Name</label>
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
