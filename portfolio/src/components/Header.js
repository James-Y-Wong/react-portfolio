import React from "react";
import NavTabs from "./NavTabs";

export default function Header() {
  return (
    <div className="header header-section">
      <div className="row">
        <div className="col-3">
          <h1 className="logo">jw</h1>
        </div>
        <div className="col">
          <p className="tag-line">Full-Stack Web Developer</p>
        </div>
      </div>
    </div>
  );
}
