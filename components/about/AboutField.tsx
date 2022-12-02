import React from 'react';

interface props {
  children?: React.ReactNode;
  question: String;
  answer: String;
}

export default function AboutField({ question, answer }: props) {
  return (
    <>
      <div className="p-1">
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
