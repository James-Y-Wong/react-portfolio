import React from "react";
import "../../styles/style.css";

export default function About() {
  return (
    <body>
      <div class="container about-section">
        <div class="row">
          <div class="col-3 headshot-picture">
            <h2 id="about-me">About Me</h2>
            <img
              class="headshot"
              src="./assets/images/Headshotbnw.jpg"
              alt="headshot"
            />
          </div>
          <div class="col" id="bio">
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
              When I am not developing applications, I enjoy hiking, watching
              Atlanta sports, playing tennis, running, eating, and anything
              Netflix. I am 36 years old from Atlanta, Georgia. I am married
              with no kids (yet), just 4 fur babies.
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
    </body>
  );
}
