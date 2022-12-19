import React from "react";
import headshot from "../../images/Headshotbnw.jpg"

export default function About() {
  return (
      <div className="container about-section">
        <div className="row">
          <div className="col-3 headshot-picture">
            <h2 id="about-me">About Me</h2>
            <img
              className="headshot"
              src={headshot}
              alt="headshot"
            />
          </div>
          <div className="col" id="bio">
            <p>
            Hi there! My name is James Wong. I am a Full Stack Web Developer with a background in Supply Chain. I was trained at Georgia Tech Coding Bootcamp and recieved a certificate in Full Stack Web Development. Front-end skills include: HTML, CSS, JavaScript, React.js, frameworks and libraries, and responsive web design. Back-end skills include: NPM, Node.js, Express.js, MySQL, MongoDB, Sequelize, and handlebars. The MERN stack is what I prefer but I am flexible to learning anything and everything.
            </p>
            <p>
              I am excited to apply what I have learned to build projects that
              have impact to users across the world. With the knowledge and
              skills I have gained from coding bootcamp, I hope to have an
              opportunity to be a valuable member of your team! Reach out to me
              to chat!
            </p>
          </div>
        </div>
      </div>
  );
}
