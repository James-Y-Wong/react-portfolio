import React from "react";
import Form from "../Form";

export default function Contact() {
  return (
    <div className="container contact-section">
      <div className="row">
        <div className="col-3">
          <h2 id="contact-me">Contact Me</h2>
        </div>
        <div className="col" id="contact-info">
          <Form />
          <ul>
            <li>
              <i className="fa-solid fa-phone contact-li"></i> (404) 213-3994
            </li>
            <li>
              <i className="fa-solid fa-envelope contact-li"></i>
              jamesyeuwong@gmail.com
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
