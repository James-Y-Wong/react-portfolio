import React from "react";
import doc from "../../documents/James Wong Resume 06.2022.pdf";

export default function Resume() {
  return (
    <div className="container contact-section">
      <div className="row">
        <div className="col-3">
          <h2 id="contact-me">R&eacute;sum&eacute;</h2>
        </div>
        <div className="col" id="contact-info">
          <h3>
            {" "}
            <a
              class="nav-link"
              href={doc}
              target="_blank"
              rel="noopener noreferrer"
            >
              Click here for R&eacute;sum&eacute;
            </a>
          </h3>
          <br></br>
          <h4>Languages</h4>
          <ul>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript</li>
            <li>jQuery</li>
          </ul>
          <h4>Applications</h4>
          <ul>
          <li>Node.js</li>
          <li>NPM</li>
          <li>Insomnia</li>
          <li>Heroku</li>
          <li>MySQL</li>
          <li>MongoDB</li>
          <li>Git</li>
          <li>bootstrap</li>
          <li>React.js</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
