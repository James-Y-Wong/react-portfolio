import React from "react";

export default function Portfolio() {
  return (
    <div className
    ="container work-section">
      <div className
      ="row">
        <div className
        ="col-3">
          <h2 id="work">Portfolio</h2>
        </div>
        <div className
        ="col" id="project-cards">
          <div className
          ="col mb-4">
            <div className
            ="card">
              <img
                src="./assets/images/soundriver_search_result_screenshot.png"
                className="card-img-top"
                alt="screenshot of soundriver"
              />
              <div className
              ="card-body">
                <h5 className
                ="card-title">SoundRiver</h5>
                <p className
                ="card-text">
                  A web application that allows users to consolidate multiple
                  streaming platforms into one playlist
                </p>
                <button title="URL">
                  <a
                    href="https://james-y-wong.github.io/SoundRiver/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className
                    ="fa-solid fa-link"></i>
                  </a>
                </button>
                <button title="GitHub Repo">
                  <a
                    href="https://github.com/James-Y-Wong/SoundRiver"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className
                    ="fa-brands fa-github"></i>
                  </a>
                </button>
              </div>
            </div>
          </div>
          <div className
          ="row row-cols-1 row-cols-md-2 g-4">
            <div className
            ="col">
              <div className
              ="card">
                <img
                  src="./assets/images/weather-dashboard-screenshot.png"
                  className="card-img-top"
                  alt="screenshot of weather dashboard"
                />
                <div className
                ="card-body">
                  <h5 className
                  ="card-title">Weather Dashboard</h5>
                  <p className
                  ="card-text">
                    A web application that allows user to see current and 5-day
                    weather conditions for selected city
                  </p>
                  <button title="URL">
                    <a
                      href="https://james-y-wong.github.io/hw-6-weather-dashboard/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className
                      ="fa-solid fa-link"></i>
                    </a>
                  </button>
                  <button title="GitHub Repo">
                    <a
                      href="https://github.com/James-Y-Wong/hw-6-weather-dashboard"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className
                      ="fa-brands fa-github"></i>
                    </a>
                  </button>
                </div>
              </div>
            </div>
            <div className
            ="col">
              <div className
              ="card">
                <img
                  src="./assets/images/gadgetgetter-dashboard-screenshot.png"
                  className
                  ="card-img-top"
                  alt="screenshot of workday scheduler"
                />
                <div className
                ="card-body">
                  <h5 className="card-title">GadgetGetter</h5>
                  <p className="card-text">
                    A full-stack system for managing devices for a school. Can
                    view allower users to rent and return devices
                  </p>
                  <button title="URL">
                    <a
                      href="https://gadget-getter.herokuapp.com/login"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa-solid fa-link"></i>
                    </a>
                  </button>
                  <button title="GitHub Repo">
                    <a
                      href="https://github.com/James-Y-Wong/GadgetGetter"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa-brands fa-github"></i>
                    </a>
                  </button>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img
                  src="./assets/images/code-quiz-quiz-page-screenshot.png"
                  className="card-img-top"
                  alt="screenshot of code quiz"
                />
                <div className="card-body">
                  <h5 className="card-title">Code Quiz</h5>
                  <p className="card-text">
                    A web application to test users on basic coding knowledge
                    using multiple choice questions
                  </p>
                  <button title="URL">
                    <a
                      href="https://james-y-wong.github.io/hw-4-code-quiz/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa-solid fa-link"></i>
                    </a>
                  </button>
                  <button title="GitHub Repo">
                    <a
                      href="https://github.com/James-Y-Wong/hw-4-code-quiz"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa-brands fa-github"></i>
                    </a>
                  </button>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img
                  src="./assets/images/work-day-scheduler-home-screenshot.png"
                  className="card-img-top"
                  alt="screenshot of password generator"
                />
                <div className="card-body">
                  <h5 className="card-title">Workday Scheduler</h5>
                  <p className="card-text">
                    A web application to help user plan out tasks during the
                    work day
                  </p>
                  <button title="URL">
                    <a
                      href="https://james-y-wong.github.io/hw-5-work-day-scheduler/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa-solid fa-link"></i>
                    </a>
                  </button>
                  <button title="GitHub Repo">
                    <a
                      href="https://github.com/James-Y-Wong/hw-5-work-day-scheduler"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa-brands fa-github"></i>
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
