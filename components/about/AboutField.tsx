import React from 'react';

interface props {
  children?: React.ReactNode;
  question: string;
  answer: string;
}

export default function AboutField({ children, question, answer }: props) {
  return (
    <>
      <div className="m-3">
        <div className="flex gap-1">
          <div>&gt;</div>
          <div>{question}</div>
        </div>
        <div className="flex gap-1">
          <div>&gt;&gt;</div>
          <div>{answer}</div>
        </div>
      </div>
    </>
  );
}
