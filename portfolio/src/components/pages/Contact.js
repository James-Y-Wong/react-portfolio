import React from "react";
import Form from "../Form";

export default function Contact() {
  return (
    <div class="container contact-section">
      <div class="row">
        <div class="col-3">
          <h2 id="contact-me">Contact Me</h2>
        </div>
        <div class="col" id="contact-info">
          <Form />
          <ul>
            <li>
              <i class="fa-solid fa-phone contact-li"></i> (404) 213-3994
            </li>
            <li>
              <i class="fa-solid fa-envelope contact-li"></i>
              jamesyeuwong@gmail.com
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
