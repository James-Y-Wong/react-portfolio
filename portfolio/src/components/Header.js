import React from "react";
import NavTabs from "./NavTabs";
import PortfolioContainer from "./PortfolioContainer";

export default function Header() {
  return (
    <div className="header header-section">
      <div className="row">
        <div className="col-5">
          <h1 className="logo">jw</h1>
        </div>
        <div className="col">
          <p className="tag-line">Full-Stack Web Developer</p>
        </div>
      </div>
      {/* <div className="col">
        <PortfolioContainer />
      </div> */}
    </div>
  );
}
