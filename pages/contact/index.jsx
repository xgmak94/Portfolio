import React, { useState } from 'react';
import { AiOutlineMail, AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import Image from 'next/image';
import Comments from '../../components/comments/comments';

function Contact() {
  return (
    <>
      <div className="container p-3 m-5 text-secondary border border-primary">
        <div className="row">
          <h1>Contact</h1>
        </div>
        <div className="row">
          <div className="col m-3 border">
            <AiOutlineMail size={50} />
            <div>xgmak94@gmail.com</div>
          </div>
          <div className="col m-3 border">
            <a href="https://github.com/xgmak94">
              <AiFillGithub size={50} />
              <div>xgmak94</div>
            </a>
          </div>
          <div className="col m-3 border">
            <a href="https://linkedin.com/in/makgary">
              <AiFillLinkedin size={50} />
              <div>makgary</div>
            </a>
          </div>
        </div>
      </div>
      <div className="container text-secondary">
        <div id="comments" className="row text-center">
          <h1>Leave a comment</h1>
          <Comments />
        </div>
      </div>
    </>
  );
}

export default Contact;
