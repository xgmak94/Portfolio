import React, { useState, useRef } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

import { motion } from 'framer-motion';

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
const firestore = firebase.firestore();

export default function Comments() {
  const messagesRef = firestore.collection('WebsiteComments');

  const [submitted, setSubmitted] = useState(false);
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const commentRef = useRef<HTMLTextAreaElement>(null);

  async function submitComment(e: React.SyntheticEvent) {
    e.preventDefault();

    await messagesRef.add({
      name: nameRef.current?.value,
      email: emailRef.current?.value,
      comment: commentRef.current?.value,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setSubmitted((prev) => !prev);
  }

  return (
    <motion.div
      className="m-3 flex justify-center text-center"
      initial={{
        x: 200,
        opacity: 0,
      }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
    >
      {submitted ? (
        <div className="text-semibold text-4xl">Thanks for the comment!</div>
      ) : (
        <div className="flex flex-col justify-center">
          <div className="text-semibold text-4xl">Leave a comment!</div>
          <form className="p-5" onSubmit={submitComment}>
            <div className="container flex justify-between gap-3 p-3">
              <label htmlFor="username">Name</label>
              <motion.input
                whileFocus={{ scale: 1.1 }}
                type="text"
                id="username"
                ref={nameRef}
                className="rounded-lg"
                required
              />
            </div>
            <div className="container flex justify-between gap-3 p-3">
              <label htmlFor="email">Email</label>
              <motion.input
                whileFocus={{ scale: 1.1 }}
                id="email"
                ref={emailRef}
                className="rounded-lg"
                required
              />
            </div>
            <div className="container flex justify-between gap-3 p-3">
              <label htmlFor="comment">Comment</label>
              <motion.textarea
                whileFocus={{ scale: 1.1 }}
                id="comment"
                ref={commentRef}
                className="rounded-lg"
                cols={23}
                rows={6}
                required
              />
            </div>
            <motion.button
              className="rounded-xl border bg-blue-300 p-5 text-xl text-black hover:bg-gray-300 dark:bg-blue-700 dark:text-white dark:hover:bg-gray-600"
              whileHover={{ scale: 1.05 }}
              type="submit"
            >
              Comment
            </motion.button>
          </form>
        </div>
      )}
    </motion.div>
  );
}
