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
              Hi there! My name is James Wong. I am a Full Stack Web Developer
              with a background in Supply Chain. I am currently enrolled in Full
              Stack Web Development Coding Bootcamp at Georgia Tech progressing
              towards a certificate in Full Stack Web Development. Newly
              acquired front-end skills include: HTML, CSS, JavaScript,
              frameworks and libraries, and responsive web design. Newly
              acquired back-end skills include: NPM, Node.js, Express.js, MySQL,
              Sequelize, and handlebars. As I continue my journey in coding
              bootcamp, I will gain knowledge in full stack skills.
            </p>
            <p>
              I am excited to apply what I have learned to build projects that
              have impact to users across the world. With the knowledge and
              skills I have gained from coding bootcamp, I hope to have an
              opportunity to be a valuable member of your team! Reach out to me
              to git chat!
            </p>
          </div>
        </div>
      </div>
  );
}
