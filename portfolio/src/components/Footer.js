import React from "react";

export default function Footer() {
  return (
    <div>
      <div>
        <i className="fa-brands fa-linkedin contact-li"></i>
        <a
          href="https://www.linkedin.com/in/james-yeu-wong/"
          target="_blank"
          rel="noopener noreferrer"
          className="social linkedin"
        >
          LinkedIn
        </a>
        <i className="fa-brands fa-github contact-li"></i>
        <a
          href="https://github.com/James-Y-Wong"
          target="_blank"
          rel="noopener noreferrer"
          className="social github"
        >
          GitHub
        </a>
      </div>
    </div>
  );
}
