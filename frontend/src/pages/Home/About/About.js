import React from "react";
import "./About.css";
import profilepic from "../../../assets/1about.jpg";
import Pulse from "react-reveal/Pulse";

const About = () => {
  return (
    <>
      <Pulse>
        <div className="about" id="about">
          <div className="row">
            <div className="col-md-4 col-xl-4 col-lg-4 col-xs-12 about-img">
              <img src={profilepic} alt="profilepic" />
            </div>
            <div className="col-md-8 about-content">
              <h1>About Me</h1>
              <p>
                I am a full-stack web developer, pursuing my B.Tech in Computer
                Science & Engineering (2024) from Central University of Haryana.
                I strive to make meaningful websites with the best UI practices
                and I love to know about technologies and pretty much excited to
                learn new things of modern technical world. I like exploring
                techonologies and help the mankind to make better lives.I am
                interested in learning how tech works.
              </p>
            </div>
          </div>
        </div>
      </Pulse>
    </>
  );
};

export default About;
