import React, { useEffect, useRef } from "react";
import "./Intro.scss";
import { init } from "ityped";
import { user } from "../../data";

export default function Intro() {
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      //disableBackTyping: true,
      //typeSpeed: 1000,
      backDelay: 1500,
      backSpeed: 60,
      strings: user.roles,
    });
  }, []);
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/king_pic2.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm </h2>
          <h1>{user.name}</h1>

          <div className="title">
            <h3>{user.designation}</h3>
            <span ref={textRef}></span>
          </div>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  );
}
